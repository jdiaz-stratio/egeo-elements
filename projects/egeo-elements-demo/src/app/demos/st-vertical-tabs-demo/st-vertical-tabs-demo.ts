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
   selector: 'st-vertical-tabs-demo',
   templateUrl: './st-vertical-tabs-demo.html',
   styleUrls: ['./st-vertical-tabs-demo.scss']
})

export class StVerticalTabsDemoComponent {
   public configDoc: any = {
      html: 'demo/st-vertical-tabs-demo/st-vertical-tabs-demo.html',
      ts: 'demo/st-vertical-tabs-demo/st-vertical-tabs-demo.ts',
      component: 'lib/st-vertical-tabs/st-vertical-tabs.component.ts'
   };
   public options: Array<string> = ['Service', 'Nodes', 'Cassandra'];
   public active: string = this.options[0];
   public qaTag: string = 'vertical-tabs-example';

   public onChangeOption(active: string): void {
      this.active = active;
   }
}
