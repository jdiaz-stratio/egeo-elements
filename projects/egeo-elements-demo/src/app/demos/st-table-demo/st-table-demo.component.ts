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
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Order, ORDER_TYPE, StTableHeader } from '@stratio/egeo';
import { cloneDeep as _cloneDeep, filter as _filter, intersectionBy as _intersectionBy } from 'lodash';
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';

@Component({
   templateUrl: './st-table-demo.component.html',
   styleUrls: ['./st-table-demo.component.scss']
})
export class StTableDemoComponent implements OnInit {
   public configDoc: any = {
      html: 'demo/st-table-demo/st-table-demo.component.html',
      ts: 'demo/st-table-demo/st-table-demo.component.ts',
      component: 'lib/st-table/st-table.component.ts'
   };
   public smallTableFields: StTableHeader[] = [
      { id: 'id', label: 'Id' },
      { id: 'name', label: 'Name' },
      { id: 'lastName', label: 'Last Name' }];

   public fields: StTableHeader[] = [
      { id: 'id', label: 'Id' },
      { id: 'name', label: 'Name' },
      { id: 'lastName', label: 'Last Name' },
      { id: 'phone', label: 'Phone' },
      { id: 'company', label: 'Company' },
      { id: 'completedProfile', label: 'Completed profile' }];

   public filterFields: StTableHeader[] = [
      {
         id: 'id', label: 'Id', filters: {
            filterConfig: [
               {
                  id: '0',
                  name: 'López'
               },
               {
                  id: '1',
                  name: 'Lara'
               }
            ],
            title: 'Filter By',
            buttonText: 'Apply'
         }
      },
      { id: 'name', label: 'Name' },
      {
         id: 'lastName',
         label: 'Last Name'
      },
      {
         id: 'phone',
         label: 'Phone',
         filters: {
            filterConfig: [
               {
                  id: '0',
                  name: 60052520145
               },
               {
                  id: '1',
                  name: 600456520145
               },
               {
                  id: '2',
                  name: 6005276845
               }
            ],
            showSettingBtn: true,
            title: 'Filter by',
            buttonText: 'Apply'
         }
      },
      { id: 'company', label: 'Company' },
      { id: 'completedProfile', label: 'Completed profile' }];

   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-table__header--font-size',
         description: 'Header font size',
         default: '$egeo-font-size-12'
      },
      {
         name: '--egeo-st-table__header--font-weight',
         description: 'Header font weight',
         default: '600'
      },
      {
         name: '--egeo-st-table__header--line-height',
         description: 'Header line height',
         default: '$egeo-line-height-18'
      },
      {
         name: '--egeo-st-table__header--color',
         description: 'Header font color',
         default: '$space-80'
      },
      {
         name: '--egeo-st-table__header--text-transform',
         description: 'Header text transform',
         default: 'initial'
      },
      {
         name: '--egeo-st-table__header--letter-spacing',
         description: 'Header letter spacing',
         default: 'normal'
      },
      {
         name: '--egeo-st-table__header--text-align',
         description: 'Header text align',
         default: 'left'
      },
      {
         name: '--egeo-st-table__header--border-bottom',
         description: 'Header border bottom color',
         default: '$space-50'
      },
      {
         name: '--egeo-st-table__header__filter-arrow--line-height',
         description: 'Header filter arrow line height',
         default: '13px'
      },
      {
         name: '--egeo-st-table__row--font-size',
         description: 'Row font size',
         default: '$egeo-font-size-14'
      },
      {
         name: '--egeo-st-table__row--hover--bg-color',
         description: 'Row background color on hover',
         default: '$action-10'
      },
      {
         name: '--egeo-st-table__row--border-bottom',
         description: 'Row border bottom color',
         default: '$action-10'
      },
      {
         name: '--egeo-st-table__row--selected--bg-color',
         description: 'Selected row background color',
         default: '$space-5'
      },
      {
         name: '--egeo-st-table__cell--padding',
         description: 'Cell padding',
         default: '9px 20px 9px 20px'
      },
      {
         name: '--egeo-st-table__hover-menu--padding',
         description: 'Hover menu padding',
         default: '0 25px 0 20px'
      },
      {
         name: '--egeo-st-table__cell--white-space',
         description: 'Cell white space',
         default: 'normal'
      }
   ];

   public header: boolean = true;
   public currentOrder: Order[] = [];
   public data: Array<{ id: string, name: string, lastName: string, phone: number, company: string, completedProfile: string }> = [
      {
         id: '4545-df56-s341',
         name: 'Antonio',
         lastName: 'López',
         phone: 60052520145,
         company: 'Stratio',
         completedProfile: '100%'
      },
      {
         id: '4545-df56-s342',
         name: 'Marina',
         lastName: 'Lara',
         phone: 600456520145,
         company: 'Stratio',
         completedProfile: '20%'
      },
      {
         id: '4545-df56-s343',
         name: 'Álvaro',
         lastName: 'García',
         phone: 60052320145,
         company: 'Stratio',
         completedProfile: '10%'
      },
      {
         id: '4545-df56-s344',
         name: 'Marina',
         lastName: 'González',
         phone: 600455640145,
         company: 'Stratio',
         completedProfile: '50%'
      }, {
         id: '4545-df56-s345',
         name: 'Pepe',
         lastName: 'Guerrero',
         phone: 6005276845,
         company: 'Stratio',
         completedProfile: '80%'
      },
      {
         id: '4545-df56-s346',
         name: 'María',
         lastName: 'Rodríguez',
         phone: 60065620145,
         company: 'Stratio',
         completedProfile: '70%'
      }
   ];
   public filterData: Array<{ id: string, name: string, lastName: string, phone: number, company: string, completedProfile: string }>;
   public sortedData: Array<{ id: string, name: string, lastName: string, phone: number, company: string, completedProfile: string }>;
   public selectedCheckboxes: boolean[][] = [[], []];
   public statusFilter: boolean[];

   constructor(private _cd: ChangeDetectorRef) {
      this.sortedData = _cloneDeep(this.data);
      this.filterData = _cloneDeep(this.data);
   }

   ngOnInit(): void {
      this.statusFilter = new Array(this.fields.length);
      this.statusFilter.fill(false);
   }

   public checkIcon(index: number): void {
      this.statusFilter[index] = !this.statusFilter[index];
      this._cd.markForCheck();
   }

   // Selectable tables

   public onSelectRow(event: any, rowIndex: number, selected: Array<boolean>): void {
      selected[rowIndex] = event.checked;
   }

   public onSelectAll(selected: boolean, tablePosition: number): void {
      this.selectedCheckboxes[tablePosition] = [];
      for (let i = 0; i < this.data.length; ++i) {
         this.selectedCheckboxes[tablePosition].push(selected);
      }
   }

   // Sortable tables

   public onSortTable(order: Order, tablePosition: number): void {
      this.currentOrder[tablePosition] = order;
      const reverseConst: number = order.type === ORDER_TYPE.ASC ? 1 : -1;
      this.sortedData = [...this.data].sort((a, b) => {
         return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
      });

      this.filterData = [...this.data].sort((a, b) => {
         return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
      });
   }

   public onSelectedFilters(event: StTableHeader[]): void {
      this.statusFilter = [];
      if (event.length > 0) {
         let filterElement = [];
         event.map((filter) => {
            const filterPosition = this.filterFields.findIndex(_field => _field.id === filter.id);
            this.statusFilter[filterPosition] = true;

            filterElement.push([].concat.apply([], filter.filters.filterConfig.map((config) => {
               return _filter(this.data, (user) => {
                  return user[filter.id] === config.name;
               });
            })));
         });
         this.filterData = <any>_intersectionBy(...filterElement, 'id');
      } else {
         this.filterData = this.data;
      }
      this._cd.markForCheck();
   }

   public onFilter(index: number): void {
      // do stuff to filter table
   }
}
