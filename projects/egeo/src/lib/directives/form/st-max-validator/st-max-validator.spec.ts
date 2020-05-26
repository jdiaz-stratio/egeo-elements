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
import { SimpleChanges, SimpleChange } from '@angular/core';
import { StMaxValidator } from './st-max-validator';
import { FormControl, ValidationErrors } from '@angular/forms';

describe('Directive: StMaxValidator', () => {
   let directive: StMaxValidator;
   let allowedMax: number = 10;
   let formControl: FormControl = new FormControl(allowedMax);
   let simpleChanges: SimpleChanges = {
      max: new SimpleChange('0', String(allowedMax), true)
   };

   beforeEach(() => {
      directive = new StMaxValidator();
      directive.max = String(allowedMax);


      directive.ngOnChanges(simpleChanges);
   });

   describe('should be able to validate if a number is higher than another', () => {

      it('if the allowed maximum number is not defined, it does not return any error', () => {
         directive.max = undefined;
         formControl.patchValue(allowedMax - 1);

         let validationErrors: ValidationErrors = directive.validate(formControl);

         expect(validationErrors).toBeNull();
      });

      it('if number is undefined, it does not return any error', () => {
         formControl.patchValue(undefined);

         let validationErrors: ValidationErrors = directive.validate(formControl);

         expect(validationErrors).toBeNull();
      });

      it('if number is higher than the allowed, it returns an error', () => {
         formControl.patchValue(12);
         let validationErrors: ValidationErrors = directive.validate(formControl);

         expect(validationErrors).not.toBeNull();
         expect(validationErrors.max).toBeDefined();
         expect(validationErrors.max.max).toBe(allowedMax);
         expect(validationErrors.max.actual).toBe(12);

         directive.max = String(12.2);
         directive.ngOnChanges(simpleChanges);

         formControl.patchValue(12.3);
         validationErrors = directive.validate(formControl);

         expect(validationErrors).not.toBeNull();
         expect(validationErrors.max).toBeDefined();
         expect(validationErrors.max.max).toBe(12.2);
         expect(validationErrors.max.actual).toBe(12.3);
      });

      it('if number is equal to the allowed, it does not return any error', () => {
         formControl.patchValue(allowedMax);

         let validationErrors: ValidationErrors = directive.validate(formControl);

         expect(validationErrors).toBeNull();
      });

      it('if number is minor than the allowed, it does not return any error', () => {
         formControl.patchValue(allowedMax - 1);

         let validationErrors: ValidationErrors = directive.validate(formControl);

         expect(validationErrors).toBeNull();
      });

   });

   it ('it should register the onChange function in order to be executed when form control is updated', () => {
      let fakeOnChangeFunction = jasmine.createSpy('onChange');

      directive.registerOnValidatorChange(fakeOnChangeFunction);

      directive.ngOnChanges(simpleChanges);

      expect(fakeOnChangeFunction).toHaveBeenCalled();
   });
});
