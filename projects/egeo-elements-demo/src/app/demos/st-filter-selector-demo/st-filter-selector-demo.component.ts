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
import { StDropDownMenuItem, StHorizontalTab } from '@stratio/egeo';

@Component({
   selector: 'st-filter-selector-demo',
   templateUrl: './st-filter-selector-demo.component.html',
   styleUrls: ['./st-filter-selector-demo.component.scss']
})

export class StFilterSelectorDemoComponent {
   public configDoc: any = {
      html: 'demo/st-filter-selector-demo/st-filter-selector-demo.component.html',
      ts: 'demo/st-filter-selector-demo/st-filter-selector-demo.component.ts',
      component: 'lib/st-filter-selector/st-filter-selector.component.ts'
   };

   public filterList: StDropDownMenuItem[] = [
      { label: 'Any', icon: 'icon-activity', value: 'any' },
      { label: 'Last updated', icon: 'icon-timer', value: 'updated' },
      { label: 'Modified date', icon: 'icon-datetime', value: 'modified' },
      { label: 'Size', icon: 'icon-code', value: 'size' }
   ];

   public selectedFilter: StDropDownMenuItem[] = [];
   public openFilter: boolean[] = [];

   public onFilter(selected: StDropDownMenuItem, index: number): void {
      this.selectedFilter[index] = selected;
      this.onCloseFilter(index);
   }

   public onChangeFilterVisibility(openFilter: boolean, index: number): void {
      this.openFilter[index] = openFilter;
   }

   public onCloseFilter(index: number): void {
      this.openFilter[index] = false;
   }
}
