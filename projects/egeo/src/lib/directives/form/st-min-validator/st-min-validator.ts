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
import { Validator, ValidatorFn, AbstractControl, ValidationErrors, Validators, NG_VALIDATORS } from '@angular/forms';
import { OnChanges, SimpleChanges, Directive, Input, forwardRef } from '@angular/core';

@Directive({
   selector: '[min][formControlName],[min][formControl],[min][ngModel]',
   providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StMinValidator), multi: true }
   ],   host: {'[attr.min]': 'min ? min : null'}
})
export class StMinValidator implements Validator, OnChanges {
   @Input() min: string;

   private _validator: ValidatorFn;

   private _onChange: () => void;

   ngOnChanges(changes: SimpleChanges): void {
      if ('min' in changes) {
         this._createValidator();
         if (this._onChange) this._onChange();
      }
   }

   validate(c: AbstractControl): ValidationErrors|null {
      return this.min == null ? null : this._validator(c);
   }

   registerOnValidatorChange(fn: () => void): void {
      this._onChange = fn;
   }

   private _createValidator(): void {
      this._validator = Validators.min(Number(this.min));
   }
}
