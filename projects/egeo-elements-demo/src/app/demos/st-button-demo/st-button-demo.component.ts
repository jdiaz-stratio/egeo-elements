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
   selector: 'st-button-demo',
   templateUrl: './st-button-demo.component.html',
   styleUrls: ['./st-button-demo.component.scss']
})

export class StButtonDemoComponent {
   public configDoc: any = {
      html: 'demo/st-button-demo/st-button-demo.component.html',
      ts: 'demo/st-button-demo/st-button-demo.component.ts'
   };
   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-button--font-size',
         description: 'Button font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-button--line-height',
         description: 'Button line height',
         default: '$egeo-line-height-18'
      },
      {
         name: '--egeo-st-button__small--font-size',
         description: 'Small button font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-button__small--line-height',
         description: 'Small button line height',
         default: '$egeo-line-height-18'
      },
      {
         name: '--egeo-st-button__large--font-size',
         description: 'Large button font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-button__large--line-height',
         description: 'Large button line height',
         default: '$egeo-line-height-22'
      },
      {
         name: '--egeo-st-button__icon--font-size',
         description: 'Icon button font size',
         default: '$egeo-font-size-18'
      },
      {
         name: '--egeo-st-button__icon--line-height',
         description: 'Icon button line height',
         default: '$egeo-line-height-22'
      },
      {
         name: '--egeo-st-button__link--font-size',
         description: 'Link button font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-button__link--line-height',
         description: 'Link button line height',
         default: '$egeo-line-height-20'
      },
      {
         name: '--egeo-st-button__link__small--font-size',
         description: 'Small button link font size',
         default: '$egeo-font-size-12'
      },
      {
         name: '--egeo-st-button__link__small--line-height',
         description: 'Small button link line height',
         default: '$egeo-line-height-18'
      },
      {
         name: '--egeo-st-button--height',
         description: 'Button line height',
         default: '40px'
      },
      {
         name: '--egeo-st-button__small--height',
         description: 'Small button line height',
         default: '25px'
      },
      {
         name: '--egeo-st-button__large--height',
         description: 'Large button line height',
         default: '50px'
      }
   ];

   public test1(): void {
      console.log('You clicked the button 1!');
   }

   public test2(): void {
      console.log('You clicked the button 2!');
   }
}
