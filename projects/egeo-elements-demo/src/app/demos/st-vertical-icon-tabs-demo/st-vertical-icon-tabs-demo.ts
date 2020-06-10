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
import { ChangeDetectorRef, Component } from '@angular/core';
import { StIconTab } from '@stratio/egeo/lib/st-vertical-icon-tabs/st-icon-tabs.model';

@Component({
   selector: 'st-vertical-tabs-demo',
   templateUrl: './st-vertical-icon-tabs-demo.html',
   styleUrls: ['./st-vertical-icon-tabs-demo.scss']
})

export class StVerticalIconTabsDemoComponent {
   public configDoc: any = {
      html: 'demo/st-vertical-tabs-demo/st-vertical-tabs-demo.html',
      ts: 'demo/st-vertical-tabs-demo/st-vertical-tabs-demo.ts',
      component: 'lib/st-vertical-tabs/st-vertical-tabs.component.ts'
   };
   public options: Array<StIconTab> = [
      { id: 'business', text: 'Business', iconClass: 'icon-bar-chart-2' },
      { id: 'logical', text: 'Logical', iconClass: 'icon-grid-2' }
   ];
   public active: StIconTab = this.options[0];
   public qaTag: string = 'vertical-tabs-example';

   constructor(private _cd: ChangeDetectorRef) {}

   public onChangeOption(active: StIconTab): void {
      this.active = active;
      this._cd.markForCheck();
   }
}
