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
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'st-textarea-demo',
   templateUrl: 'st-textarea-demo.html',
   styleUrls: ['./st-textarea-demo.scss']
})
export class StTextareaDemoComponent {
   public configDoc: any = {
      html: 'demo/st-textarea-demo/st-textarea-demo.html',
      ts: 'demo/st-textarea-demo/st-textarea-demo.ts',
      component: 'lib/st-textarea/st-textarea.component.ts'
   };
   public myForm: FormGroup;

   constructor(private fb: FormBuilder) {
      let disabledField: FormControl = new  FormControl('', []);
      disabledField.disable();
      let enabledField: FormControl = new  FormControl('', []);
      let requiredField: FormControl = new  FormControl('', [Validators.required, Validators.minLength(2)]);
      this.myForm = fb.group({
         disabledField: disabledField,
         enabledField: enabledField,
         requiredField: requiredField
      });

      this.myForm.valueChanges.subscribe(res => console.log(res));
   }
}
