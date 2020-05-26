/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import {
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   forwardRef,
   Input,
   OnChanges,
   OnDestroy,
   OnInit,
   ViewChildren,
   EventEmitter,
   Output,
   ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StInputError } from './st-input.error.model';

@Component({
   selector: 'st-input',
   templateUrl: './st-input.component.html',
   styleUrls: ['./st-input.component.scss'],
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StInputComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StInputComponent), multi: true }
   ],
   changeDetection: ChangeDetectionStrategy.OnPush,
   encapsulation: ViewEncapsulation.ShadowDom
})

export class StInputComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {

   @Input() placeholder: string = '';
   @Input() name: string = '';
   @Input() label: string = '';
   @Input() fieldType: 'text' | 'number' | 'password' = 'text';
   @Input() errors: StInputError;
   @Input() qaTag: string;
   @Input() forceValidations: boolean = false;
   @Input() contextualHelp: string;
   @Input() maxLength: number;
   @Input() min: number;
   @Input() max: number;
   @Input() isFocused: boolean = false;
   @Input() readonly: boolean = false;
   @Input() step: string;
   @Input() default: any;

   @Input()
   get value(): any {
      return this._value;
   }

   set value(value: any) {
      this._value = value;
   }

   /** @Output {} [blur] Notify when user leaves a field */
   @Output() blur: EventEmitter<any> = new EventEmitter<any>();

   @ViewChildren('input') vc: any;

   public disabled: boolean = false; // To check disable
   public displayResetButtonValue: boolean = false;
   public focus: boolean = false;
   public internalControl: FormControl;
   public errorMessage: string = undefined;
   public showErrorValue: boolean = false;

   private sub: Subscription;
   private _value: any;
   private valueChangeSub: Subscription;
   private internalInputModel: any;

   constructor(private _cd: ChangeDetectorRef) {
   }

   onChange = (_: any) => {
   }

   onTouched = () => {
   }


   validate(control: FormControl): any {
      if (this.sub) {
         this.sub.unsubscribe();
      }
      this.sub = control.statusChanges.subscribe(() => this.checkErrors(control));
   }

   ngOnChanges(change: any): void {
      if (this.forceValidations && this.internalControl) {
         this.writeValue(this.internalControl.value);
      }
   }

   ngOnInit(): void {
      this.internalControl = new FormControl(this.internalInputModel);
      this.valueChangeSub = this.internalControl.valueChanges.subscribe((value) => {
         this.onChange(this.getTypedValue(value));
         this.showErrorValue = this.showError();
         this.displayResetButtonValue = this.displayResetButton();
      });
   }

   ngAfterViewInit(): void {
      if (this.isFocused) {
         this.focus = true;
         this.vc.first.nativeElement.focus();
      }
   }

   ngOnDestroy(): void {
      if (this.valueChangeSub) {
         this.valueChangeSub.unsubscribe();
      }
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

   // When value is received from outside
   writeValue(value: any): void {
      this.internalInputModel = value;
      this._value = value;
      this.internalControl.setValue(this.getTypedValue(value));
   }

   // Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   // Registry the touch function to propagate internal touch events TODO: make this function.
   registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
   }

   setDisabledState(disable: boolean): void {
      this.disabled = disable;
      if (this.disabled && this.internalControl && this.internalControl.enabled) {
         this.internalControl.disable();
      } else if (!this.disabled && this.internalControl && this.internalControl.disabled) {
         this.internalControl.enable();
      }
      this._cd.markForCheck();
   }

   showError(): boolean {
      return this.errorMessage !== undefined && (!this.internalControl.pristine || this.forceValidations) && !this.focus && !this.disabled;
   }

   get labelQaTag(): string {
      return (this.qaTag || this.name) + '-label';
   }

   displayResetButton(): boolean {
      return this.default !== undefined && this.internalControl.dirty && this.internalControl.value !== this.default;
   }

   resetToDefault(): void {
      this.writeValue(this.default);
      this._cd.markForCheck();
   }

   /** Style functions */
   onFocus(event: Event): void {
      this.focus = true;
      this.showErrorValue = this.showError();
   }

   onFocusOut(event: Event, emitEvent: boolean): void {
      this.focus = false;

      if (emitEvent) {
         this.blur.emit();
      }
      this.showErrorValue = this.showError();
   }

   // When status change call this function to check if have errors
   private checkErrors(control: FormControl): void {
      let errors: { [key: string]: any } = control.errors;
      this.errorMessage = this.getErrorMessage(errors);
      this._cd.markForCheck();
   }

   // Get error message in function of error list.
   private getErrorMessage(errors: { [key: string]: any }): string {
      if (!errors) {
         return undefined;
      }

      if (!this.errors) {
         return '';
      }

      if (errors.hasOwnProperty('required')) {
         return this.errors.required || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('fieldType')) {
         return this.errors.type || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('minlength')) {
         return this.errors.minLength || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('maxlength')) {
         return this.errors.maxLength || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('pattern')) {
         return this.errors.pattern || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('min')) {
         return this.errors.min || this.errors.generic || '';
      }
      if (errors.hasOwnProperty('max')) {
         return this.errors.max || this.errors.generic || '';
      }
      return '';
   }

   private getTypedValue(value: string): any {
      switch (this.fieldType) {
         case 'number':
            if (!value || isNaN(Number(value))) {
               return value;
            } else {
               return Number(value);
            }
         default:
            return value;
      }
   }
}
