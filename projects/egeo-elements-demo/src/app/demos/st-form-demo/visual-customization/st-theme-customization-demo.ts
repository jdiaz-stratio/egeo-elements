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
   selector: 'st-theme-customization-demo',
   templateUrl: 'st-theme-customization-demo.html',
   styleUrls: ['st-theme-customization-demo.component.scss']
})
export class StThemeCustomization {

   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-form-field--padding-bottom',
         description: 'Form field padding bottom',
         default: '20px'
      },
      {
         name: '--egeo-st-form-field--max-width',
         description: 'Form field max width',
         default: '100%'
      },
      {
         name: '--egeo-st-form-field__read-only--bg-color',
         description: 'Read only form field background color',
         default: '100%'
      },
      {
         name: '--egeo-st-form-field__read-only--border',
         description: 'Read only form field border',
         default: '100%'
      },
      {
         name: '--egeo-st-form-field__read-only--padding',
         description: 'Read only form field padding',
         default: '0'
      }
   ];


}
