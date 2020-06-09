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
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
   selector: 'st-radio-demo',
   templateUrl: './st-radio-demo.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StRadioDemoComponent {
   public configDoc: any = {
      html: 'demo/st-radio-demo/st-radio-demo.html',
      ts: 'demo/st-radio-demo/st-radio-demo.ts',
      component: 'lib/st-radio/st-radio.component.ts'
   };
   public loading: boolean;
   public model: boolean = false;
   public form: FormGroup;
   public disabled: boolean;

   constructor() {
      this.loading = true;
      this.form = new FormGroup({
         radio: new FormControl({ value: this.model, disabled: false }, Validators.required)
      });
   }
}
