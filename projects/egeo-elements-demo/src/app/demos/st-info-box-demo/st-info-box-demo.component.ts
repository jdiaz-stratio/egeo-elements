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
   templateUrl: './st-info-box-demo.component.html',
   styleUrls: ['./st-info-box-demo.component.scss']
})
export class StInfoBoxDemoComponent {
   public configDoc: any = {
      html: 'demo/st-info-box-demo/st-info-box-demo.component.html',
      ts: 'demo/st-info-box-demo/st-info-box-demo.component.ts',
      component: 'lib/st-info-box/st-info-box.component.ts'
   };
}
