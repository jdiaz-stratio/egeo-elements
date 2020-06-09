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
import { StIconTab } from '@stratio/egeo/lib/st-vertical-icon-tabs/st-icon-tabs.model';

@Component({
   selector: 'st-form-demo',
   templateUrl: 'st-form-demo.html',
   styleUrls: ['./st-form-demo.component.scss']
})
export class StFormDemoComponent {
   public activeOption: StIconTab;
   public configDoc: any = {
      html: 'demo/st-form-demo/st-form-demo.html',
      ts: 'demo/st-form-demo/st-form-demo.ts',
      component: 'lib/st-form/st-form.component.ts'
   };

   public options: StIconTab[] =
      [
         {
            id: 'demo',
            iconClass: 'icon-edit-3',
            text: 'Demo'
         },
         {
            id: 'cssProperties',
            iconClass: 'icon-formatter',
            text: 'Theme Customization'
         },
         {
            id: 'visualSectionImprovements',
            iconClass: 'icon-content-left',
            text: 'Visual Section improvements'
         },
         {
            id: 'visualFieldImprovements',
            iconClass: 'icon-eye2',
            text: 'Visual Field improvements'
         }];


   constructor() {
      this.activeOption = this.options[0];
   }

   public onChangeOption(selectedOption: StIconTab): void {
      this.activeOption = selectedOption;
   }
}
