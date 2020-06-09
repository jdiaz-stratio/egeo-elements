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
import { Component, Input } from '@angular/core';

@Component({
   selector: 'st-tooltip-demo',
   templateUrl: './st-tooltip-demo.html'
})
export class StTooltipDemoComponent {
   public configDoc: any = {
      html: 'demo/st-tooltip-demo/st-tooltip-demo.html',
      ts: 'demo/st-tooltip-demo/st-tooltip-demo.ts',
      component: 'lib/st-tooltip/st-tooltip.component.ts'
   };
 }
