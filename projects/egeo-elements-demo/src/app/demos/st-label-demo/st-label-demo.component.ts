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
   selector: 'st-label-demo',
   templateUrl: 'st-label-demo.component.html'
})
export class StLabelDemoComponent {
   public configDoc: any = {
      html: 'demo/st-label-demo/st-label-demo.component.html',
      ts: 'demo/st-label-demo/st-label-demo.component.ts',
      component: 'lib/st-label/st-label.component.ts'
   };
   constructor() { }
}
