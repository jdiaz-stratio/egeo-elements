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

@Component({
   selector: 'st-progress-bar-demo',
   templateUrl: './st-progress-bar-demo.component.html',
   styleUrls: ['./st-progress-bar-demo.component.scss']
})
export class StProgresBarDemoComponent {
   public configDoc: any = {
      html: 'demo/st-progress-bar-demo/st-progress-bar-demo.component.html',
      ts: 'demo/st-progress-bar-demo/st-progress-bar-demo.component.ts',
      component: 'lib/st-progress-bar/st-progress-bar.ts'
   };
 }
