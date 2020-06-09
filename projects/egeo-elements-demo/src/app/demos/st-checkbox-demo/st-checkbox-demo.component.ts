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
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';

@Component({
   selector: 'st-checkbox-demo',
   templateUrl: './st-checkbox-demo.component.html',
   styleUrls: ['./st-checkbox-demo.component.scss']
})

export class StCheckboxDemoComponent {
   public configDoc: any = {
      html: 'demo/st-checkbox-demo/st-checkbox-demo.component.html',
      ts: 'demo/st-checkbox-demo/st-checkbox-demo.component.ts',
      component: 'lib/st-checkbox/st-checkbox.component.ts'
   };

   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-checkbox__icon--content',
         description: 'Checked icon content',
         default: '\e64c"'
      },
      {
         name: '--egeo-st-checkbox__icon--line-height',
         description: 'Checked icon line height',
         default: '1'
      },
      {
         name: '--egeo-st-checkbox__icon--font-size',
         description: 'Checked icon font size',
         default: '14px'
      }
   ];

}
