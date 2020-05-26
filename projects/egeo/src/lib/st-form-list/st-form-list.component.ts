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
   Component,
   Input,
   ChangeDetectionStrategy,
   EventEmitter,
   Output,
   forwardRef,
   ChangeDetectorRef
} from '@angular/core';
import {
   NG_VALUE_ACCESSOR,
   ControlValueAccessor,
   FormControl,
   NG_VALIDATORS,
   FormGroup,
   FormArray
} from '@angular/forms';
import { cloneDeep as _cloneDeep } from 'lodash';

/**
 * @description {Component} [Form list]
 *
 * The form list component allows to create dynamically list of items.
 *
 * @example
 *
 * {html}
 *
 * ```
 *
 * <st-form-list [schema]="jsonSchema" [ngModel]="model1" name="list"
 * (blur)="onBlur($event)" (add)="onAddItem($event)" (remove)="onRemoveItem($event)">
 * </st-form-list>
 *
 * ```
 *
 *
 */
@Component({
   selector: 'st-form-list',
   templateUrl: './st-form-list.html',
   styleUrls: ['./st-form-list.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StFormListComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StFormListComponent), multi: true }
   ]
})

export class StFormListComponent implements ControlValueAccessor {
   /** @Input {any} [schema=''] JSON schema of items */
   @Input() schema: any;
   /** @Input {string} [buttonLabel='Add one more item'] String displayed in the button to add more items */
   @Input() buttonLabel: string = 'Add one more item';

   /** @Output {any[]} [valueChange] Notify any value change */
   @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

   /** @Output {number} [add]  Notify the position of the added item and the modified model */
   @Output() add: EventEmitter<{position: number, model: any[]}> = new EventEmitter<{position: number, model: any[]}>();

   /** @Output {number} [remove] Notify the position of the removed item and the modified model */
   @Output() remove:  EventEmitter<{position: number, model: any[]}> = new EventEmitter<{position: number, model: any[]}>();

   /** @Output {any[]} [blur] Notify when user leaves a field */
   @Output() blur: EventEmitter<any[]> = new EventEmitter<any[]>();

   public formArray: FormArray = new FormArray([]);
   private _value: any[] = [];

   constructor(private _cd: ChangeDetectorRef) {
   }

   @Input() get value(): any {
      return this._value;
   }

   set value(value: any) {
      if (value !== this._value) {
         this._value = _cloneDeep(value);
         this.updateForm();
         this.onChange(value);
      }
   }

   // Function to call when the value changes.
   onChange(_: any): void {
   }

   onTouched = () => {
   }

   addItem(): void {
      this._value.push({});
      this.formArray.push(this.generateItemFormGroup());
      this.valueChange.emit(this._value);
      this.add.emit({ position: this._value.length - 1, model: this._value });
      this.onChange(this._value);
   }

   removeItem(position: number): void {
      this.formArray.removeAt(position);
      this._value.splice(position, 1);
      this.valueChange.emit(this._value);
      this.remove.emit({ position: position, model: this._value });
      this.onChange(this._value);
   }

   isRequired(propertyName: string): boolean {
      return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
   }

   generateItemFormGroup(position?: number): FormGroup {
      let formGroup = new FormGroup({});
      let properties = Object.keys(this.schema.properties);
      for (let i = 0; i < properties.length; ++i) {
         let property: string = properties[i];
         let value: any = this.schema.properties[property].default;
         if (position !== undefined && this._value[i]) {
            value = position !== undefined ? this._value[i][property] : null;
         }
         formGroup.addControl(properties[i], new FormControl(value));
      }
      return formGroup;
   }

   validate(control: FormControl): any {
      let errors: any = null;

      if (this.formArray) {
         for (let i = 0; i < this.formArray.controls.length; ++i) {
            let rowFormGroup: FormGroup = <FormGroup> this.formArray.controls[i];
            Object.keys(rowFormGroup.controls).forEach((propertyName) => {
               if (rowFormGroup.controls[propertyName] && rowFormGroup.controls[propertyName].errors) {
                  if (!errors) {
                     errors = [];
                  }
                  if (!errors[i]) {
                     errors[i] = {};
                  }
                  errors[i][propertyName] = rowFormGroup.controls[propertyName].errors;
               }
            });
         }
      }
      return errors;
   }

   onChangeProperty(value: any, rowPosition: number, property: string): void {
      this._value[rowPosition][property] = value;
      this.valueChange.emit(this._value);
      setTimeout(() => {
         this.onChange(this._value);
      });
   }

   onBlur(): void {
      this.blur.emit(this._value);
   }

// When value is received from outside
   writeValue(value: any): void {
      if (value && this._value !== value) {
         this._value = _cloneDeep(value);
         this.updateForm();
         this._cd.markForCheck();
      }
   }

// Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }


// Allows Angular to disable the form.
   setDisabledState(disable: boolean): void {
      if (disable) {
         this.formArray.disable();
      } else {
         this.formArray.enable();
      }
   }

   private updateForm(): void {
      this.formArray = new FormArray([]);

      if (this._value) {
         for (let i = 0; i < this._value.length; ++i) {
            this.formArray.push(this.generateItemFormGroup(i));
         }
      }
   }
}
