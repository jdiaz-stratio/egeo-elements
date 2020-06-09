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
   selector: 'st-pop-over-demo',
   templateUrl: './st-pop-over-demo.component.html',
   styleUrls: ['./st-pop-over-demo.component.scss']
})
export class StPopOverDemoComponent {
   public configDoc: any = {
      html: 'demo/st-pop-over-demo/st-pop-over-demo.component.html',
      ts: 'demo/st-pop-over-demo/st-pop-over-demo.component.ts',
      component: 'lib/st-pop-over/st-pop-over.component.ts'
   };
   // Pop Over
   public title: string = 'Notifications';
   public hidden: boolean = false;
   public content: string = 'No notifications yet';

   onClick(): void {
      this.hidden = !this.hidden;
   }
}
