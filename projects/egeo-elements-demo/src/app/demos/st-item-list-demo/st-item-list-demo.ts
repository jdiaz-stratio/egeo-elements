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
import { times as _times, filter as _filter } from 'lodash';
import { StItemListElement, StItemListConfig } from '@stratio/egeo';

@Component({
   selector: 'st-item-list-demo',
   templateUrl: './st-item-list-demo.html',
   styles: [`
      .item-list-container {
         padding: 20px;
      }
      .item-list-example-A {
         height: 500px;
      }
      .item-list-example-B {
         height: 300px;
      }
   `]
})
export class StItemListDemoComponent {
   public configDoc: any = {
      html: 'demo/st-item-list-demo/st-item-list-demo.html',
      ts: 'demo/st-item-list-demo/st-item-list-demo.ts',
      component: 'lib/st-item-list/st-item-list.component.ts'
   };
   public qaTag: string = 'st-item-list-demo';

   public listShort: StItemListElement[] = this.generateData(5);
   public listLong: StItemListElement[] = this.generateData(100);

   public listShortFilteredA: StItemListElement[] = this.filterList(this.listShort, '');
   public listLongFilteredA: StItemListElement[] = this.filterList(this.listLong, '');

   public listShortFilteredB: StItemListElement[] = this.filterList(this.listShort, '');
   public listLongFilteredB: StItemListElement[] = this.filterList(this.listLong, '');

   public configAll: StItemListConfig = {
       title: 'List Title',
       searchPlaceholder: 'Text for search'
   };

   public configTitle: StItemListConfig = {
       title: 'List Title',
       searchPlaceholder: ''
   };

   public configSearch: StItemListConfig = {
       title: '',
       searchPlaceholder: 'Text for search'
   };

   public themeA: string = 'themeA';
   public themeB: string = 'themeB';

   onSelectItem(item: StItemListElement): void {
      item.selected = !item.selected;
   }

   onSearchItem(value: string, listN: number): void {
      switch (listN) {
         case 0:
            this.listShortFilteredA = this.filterList(this.listShort, value);
            break;
         case 1:
            this.listLongFilteredA = this.filterList(this.listLong, value);
            break;
         case 2:
            this.listLongFilteredB = this.filterList(this.listLong, value);
            break;
         case 3:
            this.listShortFilteredB = this.filterList(this.listShort, value);
            break;
         default:
      }
   }

   private filterList(list: StItemListElement[], filter: string): StItemListElement[] {
       return _filter(list, (item) => item.name.indexOf(filter) > -1);
   }

   private generateData(numData: number): StItemListElement[] {
      return _times(numData, (i) => {
         return {
            id: i,
            name: `Element ${i}`,
            icon: 'icon-file'
         };
      });
   }
}
