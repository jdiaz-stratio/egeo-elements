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
import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormArray, NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
   selector: 'st-form-list-demo',
   templateUrl: 'st-form-list-demo.html',
   styleUrls: ['./st-form-list-demo.scss']
})

export class StFormListDemoComponent {
   @ViewChild('formModel', {static: false}) public formModel: NgForm;
   @ViewChild('templateDrivenForm', {static: false}) public templateDrivenForm: NgForm;
   public configDoc: any = {
      html: 'demo/st-form-list-demo/st-form-list-demo.html',
      ts: 'demo/st-form-list-demo/st-form-list-demo.ts',
      component: 'lib/st-form-list/st-form-list.component.ts'
   };
   public reactiveForm: FormGroup;

   public jsonSchema: any = {
      '$schema': 'http://json-schema.org/schema#',
      'properties': {
         'genericNumberInput': {
            'title': 'Required number between 6-10',
            'description': 'Generic input description',
            'type': 'number',
            'default': 6,
            'minimum': 1,
            'maximum': 10,
            'exclusiveMinimum': false,
            'exclusiveMaximum': false
         },
         'genericTextInput': {
            'title': 'Text',
            'description': 'This is a generic text',
            'type': 'string',
            'maxLength': 50
         }
      },
      'required': [
         'genericNumberInput'
      ]
   };

   public form: FormGroup = new FormGroup({});
   public formArray: FormArray = new FormArray([]);

   public model1: Array<any> = [
      { genericNumberInput: 1, genericTextInput: 'item 1 of model 1' },
      { genericNumberInput: 2, genericTextInput: 'item 2 of model 1' }
   ];

   public model2: Array<any> = [
      { genericNumberInput: 3, genericTextInput: 'item 1 of model 2' }
   ];
   public model3: Array<any> = [
      { genericNumberInput: 4, genericTextInput: 'item 1 of model 3' },
      { genericNumberInput: 5, genericTextInput: 'item 2 of model 3' },
      { genericNumberInput: 6, genericTextInput: 'item 3 of model 3' }
   ];

   constructor() {
     this.reactiveForm = new FormGroup({ list: new FormControl() });
   }

   onChangeTemplateFormStatus(form: NgForm): void {
      if (form.control.disabled) {
         form.control.enable();
      } else {
         form.control.disable();
      }
   }

   onChangeReactiveFormStatus(form: FormGroup): void {
      if (form.disabled) {
         form.enable();
      } else {
         form.disable();
      }
   }

   onBlur(event: any): void {
      console.log('onblur', event);
   }

   onAddItem(event: any): void {
      console.log('onAddItem', event);
   }

   onRemoveItem(event: any): void {
      console.log('onRemoveItem', event);
   }

   showStatus(): void {
      console.log(this.templateDrivenForm);
   }
}
