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
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';

@Component({
   selector: 'st-zero-page-demo',
   templateUrl: 'st-zero-page-demo.component.html',
   styleUrls: ['st-zero-page-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StZeroPageDemoComponent {
   public configDoc: any = {
      html: 'demo/st-zero-page-demo/st-zero-page-demo.component.html',
      ts: 'demo/st-zero-page-demo/st-zero-page-demo.component.ts',
      component: 'lib/st-zero-page/st-zero-page.component.ts'
   };

   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-zero-page__title--color',
         description: 'Title color',
         default: '$neutral'
      },
      {
         name: '--egeo-st-zero-page__title--font-size',
         description: 'Title font size',
         default: '$egeo-font-size-xlarge'
      },
      {
         name: '--egeo-st-zero-page__title--line-height',
         description: 'Title line height',
         default: '$egeo-line-height-18'
      },
      {
         name: '--egeo-st-zero-page__info--color',
         description: 'Info color',
         default: '$neutral-40'
      },
      {
         name: '--egeo-st-zero-page__info--font-size',
         description: 'Info font size',
         default: '$egeo-font-size-16'
      },
      {
         name: '--egeo-st-zero-page__info--line-height',
         description: 'Info line height',
         default: '$egeo-line-height-small'
      },
      {
         name: '--egeo-st-zero-page__info--padding',
         description: 'Info padding',
         default: '20px 0 30px'
      }
   ];

}
