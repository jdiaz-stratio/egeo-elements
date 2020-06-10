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
import { StToggleButton } from '@stratio/egeo';

@Component({
   selector: 'st-toggle-buttons-demo',
   templateUrl: './st-toggle-buttons-demo.html',
   styleUrls: ['./st-toggle-buttons-demo.scss']
})

export class StToggleButtonsDemoComponent {
   public configDoc: any = {
      html: 'demo/st-toggle-buttons-demo/st-toggle-buttons-demo.html',
      ts: 'demo/st-toggle-buttons-demo/st-toggle-buttons-demo.ts',
      component: 'lib/st-toggle-buttons/st-toggle-buttons.component.ts'
   };
   public tabs: StToggleButton[];
   public description: string = 'My tabs: ';

   constructor() {
      this.tabs = [
         {
            label: 'Tab1',
            number: 5,
            active: true
         }, {
            label: 'Tab2',
            number: 10,
            active: false
         }
      ];
   }

   onSelectTab(tab: StToggleButton): void {
      console.log('Selected tab: ' + tab.label);
   }
}
