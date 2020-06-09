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
   selector: 'st-switch-demo',
   templateUrl: './st-switch-demo.html',
   styleUrls: ['./st-switch-demo.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StSwitchDemoComponent {
   public configDoc: any = {
      html: 'demo/st-switch-demo/st-switch-demo.html',
      ts: 'demo/st-switch-demo/st-switch-demo.ts',
      component: 'lib/st-switch/st-switch.component.ts'
   };
   public loading: boolean;
   public model: boolean = false;
   public form: FormGroup;
   public disabled: boolean;

   constructor() {
      this.loading = true;
      this.form = new FormGroup({
         switch: new FormControl({ value: this.model, disabled: false }, Validators.required)
      });
   }
}
