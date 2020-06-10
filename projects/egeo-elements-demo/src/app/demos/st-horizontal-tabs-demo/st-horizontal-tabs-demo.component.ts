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
import { StDropDownMenuItem, StHorizontalTab, StHorizontalTabStatus } from '@stratio/egeo';

@Component({
   selector: 'st-horizontal-tabs-demo',
   templateUrl: './st-horizontal-tabs-demo.component.html',
   styleUrls: ['./st-horizontal-tabs-demo.component.scss']
})

export class StHorizontalTabsDemoComponent {
   public configDoc: any = {
      html: 'demo/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.html',
      ts: 'demo/st-horizontal-tabs-demo/st-horizontal-tabs-demo.component.ts',
      component: 'lib/st-horizontal-tabs/st-horizontal-tabs.component.ts'
   };
   public options: StHorizontalTab[] = [
      {id: 'overview', text: 'Overview', status: StHorizontalTabStatus.warning},
      {id: 'activity', text: 'Activity'},
      {id: 'dashboard', text: 'Dashboard', status: StHorizontalTabStatus.error},
      {id: 'nodes', text: 'Nodes'}
   ];

   public active: StHorizontalTab = this.options[1];
   public openFilter: boolean = false;
   public filterList: StDropDownMenuItem[] = [
      { label: 'Any', icon: 'icon-activity', value: 'any' },
      { label: 'Last updated', icon: 'icon-timer', value: 'updated' },
      { label: 'Modified date', icon: 'icon-datetime', value: 'modified' },
      { label: 'Size', icon: 'icon-code', value: 'size' }
   ];
   public selectedFilter: StDropDownMenuItem = this.filterList[0];

   public onChangeFilter(selectedFilter: StDropDownMenuItem): void {
      this.selectedFilter = selectedFilter;
      this.openFilter = false;
   }
}
