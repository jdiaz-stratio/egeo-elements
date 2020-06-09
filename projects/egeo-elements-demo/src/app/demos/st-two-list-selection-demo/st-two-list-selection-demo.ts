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
import * as _ from 'lodash';
import {
   StTwoListSelectionElement,
   StTwoListSelectionConfig,
   EgeoResolveService,
   StTwoListSelectExtraLabelAction,
   StDropDownMenuItem
} from '@stratio/egeo';

@Component({
   selector: 'two-list-selection-demo',
   templateUrl: './st-two-list-selection-demo.html',
   styleUrls: ['./st-two-list-selection-demo.scss']
})

export class StTwoListSelectionDemoComponent {
   public configDoc: any = {
      html: 'demo/st-two-list-selection-demo/st-two-list-selection-demo.html',
      ts: 'demo/st-two-list-selection-demo/st-two-list-selection-demo.ts',
      component: 'lib/st-two-list-selection/st-two-list-selection.component.ts'
   };

   completeUserList: Array<StTwoListSelectionElement> = [];
   completeUserListDisabled: Array<StTwoListSelectionElement> = [];
   selectedUserList: Array<StTwoListSelectionElement> = [];
   itemAll: StTwoListSelectionElement;
   isLoading: Boolean = true;

   config: StTwoListSelectionConfig = {
      allElementsListTitle: 'All element',
      allElementsSearchPlaceholder: 'Search...',
      selectedElementsListTitle: 'Selected elements',
      selectedElementsSearchPlaceholder: 'Search...'
   };

   configWithCheckAll: StTwoListSelectionConfig = {
      allElementsListTitle: 'All element',
      allElementsListSubtitle: '0 users',
      allElementsSearchPlaceholder: 'Search...',
      fetchingDataText: 'Fetching more users',
      orderPlaceholder: 'Order by alphabet',
      selectedElementsListTitle: 'Selected elements',
      selectedElementsListSubtitle: '0 users',
      selectedElementsSearchPlaceholder: 'Search...'
   };

   configWithMenuOption: StTwoListSelectionConfig = {
      allElementsListTitle: 'All element',
      allElementsSearchPlaceholder: 'Search...',
      menuOptionList: [
      { label: 'Example action', icon: 'icon-datetime', value: 'example' }],
      selectedElementsListTitle: 'Selected elements',
      selectedElementsSearchPlaceholder: 'Search...'
   };

   public orderOptions: Array<StDropDownMenuItem> = [
      {
         label: 'A-Z',
         value: 1
      },
      {
         label: 'Z-A',
         value: 2
      }
   ];

   constructor(private _cd: ChangeDetectorRef) {
      this.fillLists();
   }

   onChange(event: Event): void {
      if (this.completeUserList.length === 0) {
         this.configWithCheckAll.allElementsListSubtitle = `0 users`;
      } else {
         this.configWithCheckAll.allElementsListSubtitle = `0/${this.completeUserList.length} users selected`;
      }

      if (this.selectedUserList.length === 0) {
         this.configWithCheckAll.selectedElementsListSubtitle = `0 users`;
      } else {
         this.configWithCheckAll.selectedElementsListSubtitle = `0/${this.selectedUserList.length} users selected`;
      }
   }

   onNumItemsAll(event: Event): void {
      this.configWithCheckAll.allElementsListSubtitle = `${event}/${this.completeUserList.length} users selected`;
   }

   onNumItemsSelected(event: Event): void {
      this.configWithCheckAll.selectedElementsListSubtitle = `${event}/${this.selectedUserList.length} users selected`;
   }

   onScrollBottomAll(event: Event): void {
      this.isLoading = true;
      setTimeout(() => {
         let cloneList = _.cloneDeep(this.completeUserList);
         for (let i = 1; i <= 10; i++) {
            cloneList.push({ id: cloneList.length + i, name: `User-${cloneList.length + i}` });
         }
         this.completeUserList = cloneList;
         this._cd.markForCheck();
       }, 1000);
   }

   onSelectItemNonEditable(event: Event): void {
      console.log(`Selected item ${JSON.stringify(event)}`);
   }

   showSelectedElements(): void {
      console.log(JSON.stringify(this.selectedUserList.map(item => item.name)));
   }

   selectExtraLabel(el: StTwoListSelectExtraLabelAction): void {
      el.event.stopImmediatePropagation();
      console.log('Selected label', el);
   }

   changeOrder(order: StDropDownMenuItem): void {
      console.log('change order, ', order);
   }

   private fillLists(): void {
      for (let i = 0; i < 300; i++) {

            this.completeUserList.push({ id: i, name: `User-${i}`});
            this.completeUserListDisabled.push({ id: i, name: `User-${i}`, disabled: i % 3 === 0});
            if (i % 4 === 0) {
               this.selectedUserList.push(_.clone(this.completeUserList[i]));
            }

      }

      this.itemAll = {id: this.completeUserList.length, name : 'All', itemAll: true};
   }
}
