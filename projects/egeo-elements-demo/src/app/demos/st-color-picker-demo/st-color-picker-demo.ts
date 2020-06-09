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
import { FormControl } from '@angular/forms';

@Component({
   selector: 'st-color-picker-demo',
   templateUrl: './st-color-picker-demo.html',
   styleUrls: ['./st-color-picker-demo.scss']
})
export class StColorPickerDemoComponent {
   public configDoc: any = {
      html: 'demo/st-color-picker-demo/st-color-picker-demo.html',
      ts: 'demo/st-color-picker-demo/st-color-picker-demo.ts',
      component: 'lib/st-color-picker/st-color-picker.component.ts'
   };

   public palette1: string[] = ['#128bdd', '#999999', '#fa9330', '#fdbd2b', '#2cce93', '#cd89d2', '#0f1b27', '#8898a7'];
   public palette2: string[] = ['#128b6d', '#997899', '#fa9270', '#fa9339', '#2cd093', '#cd68c2', '#8d1627', '#2899b7'];
   public formControl: FormControl = new FormControl();
   public selectedColors: string[] = [];

   public onSelectColor(color: string, index: number): void {
      this.selectedColors[index] = color;

   }
}
