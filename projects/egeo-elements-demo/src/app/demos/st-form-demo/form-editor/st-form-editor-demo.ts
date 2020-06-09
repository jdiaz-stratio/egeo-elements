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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

import { JSON_SCHEMA } from './json-schema';
import { StInputError } from '@stratio/egeo';

@Component({
   selector: 'st-form-editor-demo',
   templateUrl: 'st-form-editor-demo.html',
   styleUrls: ['st-form-editor-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StFormEditorDemoComponent {
   public jsonSchema: any;
   public model: any = {};
   public schemaError: string;
   public schemaChangeTimer: number;
   public errorMessages: StInputError;

   @ViewChild('formModel', { static: false }) public formModel: NgModel;

   constructor(private _cd: ChangeDetectorRef) {
      this.jsonSchema = JSON_SCHEMA;
   }

   changeFormStatus(): void {
      if (this.formModel.control.enabled) {
         this.formModel.control.disable();
      } else {
         this.formModel.control.enable();
      }
   }

   onChangeSchema(jsonSchema: any): void {
      if (this.schemaChangeTimer !== undefined) {
         clearTimeout(this.schemaChangeTimer);
      }
      this.schemaChangeTimer = setTimeout(() => {
            try {
               this.jsonSchema = JSON.parse(jsonSchema);
               this.schemaError = undefined;
               this._cd.markForCheck();
            } catch (error) {
               this.schemaError = error;
            }
         }, 1000
      );
   }

   onClickLink(fieldPath: string): void {
      console.log(fieldPath);
   }
}
