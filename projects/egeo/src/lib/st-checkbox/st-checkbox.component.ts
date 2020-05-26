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
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CHECKBOX_CONTROL_ACCESSOR: any = {
   provide: NG_VALUE_ACCESSOR,
   // tslint:disable-next-line:no-use-before-declare
   useExisting: forwardRef(() => StCheckboxComponent),
   multi: true
};

/**
 * @description {Component} [Checkbox]
 *
 * The checkbox component represents a custom input of the checkbox type.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-checkbox name="option" value="1">
 *    Option 1
 * </st-checkbox>
 * ```
 *
 */
@Component({
   selector: 'st-checkbox',
   templateUrl: './st-checkbox.component.html',
   providers: [CHECKBOX_CONTROL_ACCESSOR],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StCheckboxComponent implements ControlValueAccessor {
   /** @Input {boolean} [checked='']  */
   @Input() get checked(): boolean {
      return this._checked;
   }

   set checked(checked: boolean) {
      if (checked !== this.checked) {
         this._checked = checked;
         this._changeDetectorRef.markForCheck();
      }
   }
   /** @Input {boolean} [name=''] This parameter shows the final name of the input */
   @Input() name: string;
   /** @Input {boolean} [qaTag=''] Id value for qa test */
   @Input() qaTag: string;
   /** @Input {boolean} [disabled=''] It allows to disable the input component of the checkbox */
   @Input() disabled: boolean;
   /** @Input {boolean} [required=''] It converts the component into a mandatory field in a form */
   @Input() required: boolean;
   /** @Input {boolean} [readonly=''] This parameter disables the checkbox and it can not be modified by the user */
   @Input() readonly: boolean;
   /** @Input {any} [value=''] The value of the checkbox */
   @Input() value: any;
   /** @Input {string} [contextualHelp=''] Information displayed at a tooltip */
   @Input() contextualHelp: string;
   /** @Output {{ checked: boolean, value: any }} [change=''] This is emitted when user clicks on the checkbox */
   @Output() change: EventEmitter<any> = new EventEmitter<any>();

   private _checked: boolean = false;

   constructor(
      private _changeDetectorRef: ChangeDetectorRef
   ) {

   }

   _controlValueAccessorChangeFn: (value: any) => void = (value) => { };

   onTouched: () => any = () => { };

   get labelQaTag(): string {
      return (this.qaTag || this.name) + '-label';
   }

   handleClick(): void {
      if (!this.readonly) {
         if (!this.disabled) {
            this._checked = !this._checked;
            this._controlValueAccessorChangeFn(this._checked);
            this.change.emit({ checked: this.checked, value: this.value });
         }
      }
   }

   handleChange($event: Event): void {
      $event.stopPropagation();
   }

   writeValue(value: any): void {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
   }

   registerOnChange(fn: (value: any) => void): void {
      this._controlValueAccessorChangeFn = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }

   setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
      this._changeDetectorRef.markForCheck();
   }

}
