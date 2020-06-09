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
import { StSidebarItem, StSidebarVisualMode } from '@stratio/egeo';
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';

@Component({
   selector: 'st-sidebar-demo',
   templateUrl: './st-sidebar-demo.component.html',
   styleUrls: ['./st-sidebar-demo.component.scss']
})

export class StSidebarDemoComponent {
   public configDoc: any = {
      html: 'demo/st-sidebar-demo/st-sidebar-demo.component.html',
      ts: 'demo/st-sidebar-demo/st-sidebar-demo.component.ts',
      component: 'lib/st-sidebar/st-sidebar.component.ts'
   };
   public items: StSidebarItem[] = [
      { id: 'vault-roles', label: 'Vault Roles' },
      { id: 'identities', label: 'Identities', class: 'warning', disabled: true },
      {
         id: 'masters',
         label: 'Masters',
         result: '-',
         items: [{
            id: 'sub-item1',
            label: 'Subitem 1',
            items: [
               { id: 'sub-item1.1', label: 'Subitem 1.1', result: '450' },
               { id: 'sub-item1.2', label: 'Subitem 1.2222222222222222222222222222222222222222222222222222222' }]
         }, { id: 'sub-item2', label: 'Subitem 2' }]
      },
      {
         id: 'agents', label: 'So long section name', result: '25',
         items: [
            { id: 'agents.1', label: 'Subitem 1.1', result: '25' },
            { id: 'agents.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'agents2', label: 'So long section name 2 without results',
         items: [
            { id: 'agents2.1.1', label: 'Subitem 1.1.1', result: '25' },
            { id: 'agents2.1.2', label: 'Subitem 1.1.2' }]
      },
      { id: 'without-children', label: 'No children' },
      {
         id: 'sectionA', label: 'Section A',
         items: [
            { id: 'sub-sectionA.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionA.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionB', label: 'Section B', items: [
            { id: 'sub-sectionB.1', label: 'Subitem 1.1', disabled: true },
            { id: 'sub-sectionB.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionC', label: 'Section C',
         items: [
            { id: 'sub-sectionC.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionC.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionD', label: 'Section D',
         items: [
            { id: 'sub-sectionD.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionD.2', label: 'Subitem 1.2' }]
      }
   ];

   public activeItem: StSidebarItem;
   public enableSearchMode: boolean = false;
   public complexMode: StSidebarVisualMode = StSidebarVisualMode.complex;
   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-sidebar--bg-color',
         description: 'Background color',
         default: '$neutral-full'
      },
      {
         name: '--egeo-st-sidebar--box-shadow',
         description: 'Box shadow color',
         default: '$neutral-8'
      },
      {
         name: '--egeo-st-sidebar--border-color',
         description: 'Sidebar border color',
         default: '$neutral-8'
      },
      {
         name: '--egeo-st-sidebar__item--border-bottom-color',
         description: 'Item border bottom color',
         default: '$neutral-15'
      },
      {
         name: '--egeo-st-sidebar__item--font-size',
         description: 'Item font size',
         default: '$egeo-font-size-16'
      },
      {
         name: '--egeo-st-sidebar__item--color',
         description: 'Item text color',
         default: '$neutral-70'
      },
      {
         name: '--egeo-st-sidebar__title--font-size',
         description: 'Title font size',
         default: '$egeo-font-size-20'
      },
      {
         name: '--egeo-st-sidebar__title--font-weight',
         description: 'Title font weight',
         default: '900'
      },
      {
         name: '--egeo-st-sidebar__title--line-height',
         description: 'Title line height',
         default: '$egeo-line-height-24'
      },
      {
         name: '--egeo-st-sidebar__title--color',
         description: 'Title color',
         default: '$neutral'
      },
      {
         name: '--egeo-st-sidebar__item--line-height',
         description: 'Item line height',
         default: '$egeo-line-height-small'
      },
      {
         name: '--egeo-st-sidebar__complex-item__chevron--color',
         description: 'Complex item chevron color',
         default: '$neutral-30'
      },
      {
         name: '--egeo-st-sidebar__item__mark--color',
         description: 'Item mark color',
         default: '$brand'
      },
      {
         name: '--egeo-st-sidebar__item--margin-bottom',
         description: 'Item margin bottom',
         default: '15px'
      },
      {
         name: '--egeo-st-sidebar__warning--color',
         description: 'Warning icon color',
         default: '$error'
      },
      {
         name: '--egeo-st-sidebar__warning--font-size',
         description: 'Warning icon font size',
         default: '$egeo-font-size-16'
      },
      {
         name: '--egeo-st-sidebar__result--bg-color',
         description: 'Result text color',
         default: '$neutral-15'
      },
      {
         name: '--egeo-st-sidebar__result--font-size',
         description: 'Result font size',
         default: '$egeo-font-size-12'
      },
      {
         name: '--egeo-st-sidebar__result__text--bg-color',
         description: 'Result background color',
         default: '$neutral-60'
      },
      {
         name: '--egeo-st-sidebar__disabled-item--color',
         description: 'Disabled item color',
         default: '$neutral-30'
      }
   ];

   onChangeActive(item: StSidebarItem): void {
      this.activeItem = item;
   }

   constructor() {
      this.activeItem = this.items[2].items[0].items[1];
   }
}
