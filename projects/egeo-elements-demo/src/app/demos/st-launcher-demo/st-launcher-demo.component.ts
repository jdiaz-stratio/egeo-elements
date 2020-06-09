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
import { StLauncherGroup, StLauncherItem } from '@stratio/egeo';

@Component({
   selector: 'st-launcher-demo',
   templateUrl: './st-launcher-demo.component.html',
   styleUrls: ['./st-launcher-demo.component.scss']
})

export class StLauncherDemoComponent {
   public configDoc: any = {
      html: 'demo/st-launcher-demo/st-launcher-demo.component.html',
      ts: 'demo/st-launcher-demo/st-launcher-demo.component.ts',
      component: 'lib/st-launcher/st-launcher.component.ts'
   };
   public items: StLauncherGroup[] = [
      {
         label: 'Egeo',
         items: [{
            label: 'Egeo',
            url: 'https://github.com/Stratio/egeo'
         },
         {
            label: 'Egeo Web',
            url: 'https://github.com/Stratio/egeo-web'
         },
         {
            label: 'Egeo Starter',
            url: 'https://github.com/Stratio/egeo-starter'
         }]
      },
      {
         label: 'Angular',
         items: [{
            label: 'Docs',
            url: 'https://angular.io/docs'
         },
         {
            label: 'Github',
            url: 'https://github.com/angular/angular'
         }]
      },
      {
         label: 'Stratio',
         items: [{
            label: 'Stratio',
            url: 'http://www.stratio.com/'
         },
         {
            label: 'Linkedn',
            url: 'https://www.linkedin.com/company/5122962/'
         },
         {
            label: 'Twitter',
            url: 'https://twitter.com/stratiobd'
         },
         {
            label: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw'
         },
         {
            label: 'Paradigma Digital',
            url: 'https://www.paradigmadigital.com'
         }]
      }
   ];

   onToggle(groupItem: StLauncherGroup): void {
      console.log('toggle group item:', groupItem);
      for (let item of this.items) {
         if (groupItem !== item) {
            item.expanded = false;
         }
      }
   }

   onSelect(item: StLauncherItem): void {
      console.log('select item:', item);
      window.open(item.url, '_blank');
   }

   onViewMore(groupItem: StLauncherGroup): void {
      console.log('view more group item:', groupItem);
   }
}
