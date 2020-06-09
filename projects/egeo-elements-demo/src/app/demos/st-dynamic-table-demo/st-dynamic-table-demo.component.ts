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
import { cloneDeep as _cloneDeep } from 'lodash';
import { JSONSchema4 } from 'json-schema';
import { Order, ORDER_TYPE, StDropDownMenuItem } from '@stratio/egeo';

import { StDynamicTableUserInterface } from '@stratio/egeo/lib/st-dynamic-table/st-dynamic-table.model';
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';

@Component({
   templateUrl: './st-dynamic-table-demo.component.html',
   styleUrls: ['./st-dynamic-table-demo.component.scss']
})
export class StDynamicTableDemoComponent implements OnInit {
   public configDoc: any = {
      html: 'demo/st-table-demo/st-table-demo.component.html',
      ts: 'demo/st-table-demo/st-table-demo.component.ts',
      component: 'lib/st-table/st-table.component.ts'
   };

   public jsonSchema: JSONSchema4 = {
      '$schema': 'http://json-schema.org/schema#',
      'title': 'User Table',
      'type': 'object',
      'description': 'User properties',
      'optional': true,
      'properties': {
         'id': {
            'title': 'Id',
            'description': 'User identification',
            'type': 'string'
         },
         'name': {
            'title': 'Name',
            'description': 'User name',
            'type': 'string'
         },
         'lastName': {
            'title': 'Last Name',
            'description': 'User last name',
            'type': 'string'
         },
         'phone': {
            'title': 'Sub executor',
            'type': 'string',
            'description': 'Spark executor properties'
         },
         'company': {
            'title': 'Company',
            'type': 'string',
            'description': 'User company',
            '$ref': '/companies/names'
         },
         'status': {
            'title': 'Status',
            'type': 'string',
            'description': 'User status',
            'enum': ['Employed', 'Free', 'Busy']
         }
      }
   };

   public jsonSchemaFk: JSONSchema4 = {
      '$schema': 'http://json-schema.org/schema#',
      'title': 'Fks Table',
      'type': 'object',
      'description': 'Fks properties',
      'optional': true,
      'properties': {
         'id': {
            'title': 'Identificador',
            'description': 'Identificador'
         },
         'codigo': {
            'title': 'Codigo',
            'description': 'Codigo'
         },
         'tipo_id': {
            'title': 'Tipo User Fk',
            'description': 'Tipo User',
            'fk': {
               'table': 'user.bank_user',
               'field': 'id'
            },
            'group_field': {
               'name': 'tipo_id - descripcion'
            }
         },
         'descripcion': {
            'title': 'Descripción',
            'description': 'Descripción'
         }
      }
   };

   public uiDefinition: StDynamicTableUserInterface = {
      company: { sortable: false },
      id: {
         styles: {
            width: '25%'
         }
      },
      status: {
         styles: {
            color: '#DF2935'
         }
      }
   };

   public currentOrder: Order;

   public users: Array<{ id: string, name: string, lastName: string, phone: number, company: string, status: string }> = [
      {
         id: '4545-df56-s341',
         name: 'Antonio',
         lastName: 'López',
         phone: 60052520145,
         company: 'Stratio',
         status: 'Employed'
      },
      {
         id: '4545-df56-s342',
         name: 'Marina',
         lastName: 'Lara',
         phone: 600456520145,
         company: 'Stratio',
         status: 'Free'
      },
      {
         id: '4545-df56-s343',
         name: 'Álvaro',
         lastName: 'García',
         phone: 60052320145,
         company: 'Stratio',
         status: 'Busy'
      },
      {
         id: '4545-df56-s344',
         name: 'Marina',
         lastName: 'González',
         phone: 600455640145,
         company: 'Stratio',
         status: 'Employed'
      }, {
         id: '4545-df56-s345',
         name: 'Pepe',
         lastName: 'Guerrero',
         phone: 6005276845,
         company: 'Stratio',
         status: 'Employed'
      },
      {
         id: '4545-df56-s346',
         name: 'María',
         lastName: 'Rodríguez',
         phone: 60065620145,
         company: 'Stratio',
         status: 'Busy'
      }
   ];

   public fks: Array<{ }> = [
      {
         codigo: 'K',
         descripcion: 'admin',
         id: 6,
         tipo_id: 6
      },
      {
         codigo: 'W',
         descripcion: 'read',
         id: 14,
         tipo_id: 6
      },
      {
         codigo: 'D',
         descripcion: 'write',
         id: 2,
         tipo_id: 2
      },
      {
         codigo: 'H',
         descripcion: 'admin',
         id: 4,
         tipo_id: 4
      },
      {
         codigo: 'I',
         descripcion: 'read',
         id: 5,
         tipo_id: 5
      },
      {
         codigo: 'P',
         descripcion: 'write',
         id: 8,
         tipo_id: 8
      },
      {
         codigo: 'C',
         descripcion: 'special',
         id: 1,
         tipo_id: 1
      },
      {
         codigo: 'X',
         descripcion: 'read',
         id: 16,
         tipo_id: 13
      }
   ];

   public sortedUsers: Array<{ id: string, name: string, lastName: string, phone: number, company: string, status: string }> = [];
   public selectedCheckboxes: boolean[][] = [[], []];
   public statusFilter: boolean[] = [];
   public selected: boolean[][] = [];
   public rowActions: StDropDownMenuItem[] = [
      {
         value: 'edit',
         icon: 'edit-icon',
         label: 'Edit'
      }, {
         value: 'remove',
         icon: 'trash-icon',
         label: 'Delete',
         iconColor: 'red',
         labelColor: 'red'
      }
   ];
   public activeHoverMenuPosition: number[] = [];
   public cssProperties: CssProperty[] = [
      {
         name: '--egeo-st-dynamic-table__hover-button--font-size',
         description: 'Hover button font size',
         default: '$egeo-font-size-20'
      },
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
      }
   ];


   constructor(private _cd: ChangeDetectorRef) {
      this.sortedUsers = _cloneDeep(this.users);
   }

   ngOnInit(): void {
   }

   // Selectable tables

   public onSelectRow(event: { checked: boolean, row: number }, tablePosition: number): void {
      if (!this.selected[tablePosition]) {
         this.selected[tablePosition] = [];
      }
      this.selected[tablePosition][event.row] = event.checked;
   }

   public onSelectAll(selected: boolean, tablePosition: number): void {
      this.selectedCheckboxes[tablePosition] = [];
      for (let i = 0; i < this.users.length; ++i) {
         this.selectedCheckboxes[tablePosition].push(selected);
      }
   }

   public onShowHoverMenu(row: number, tablePosition: number): void {
      this.activeHoverMenuPosition[tablePosition] = this.activeHoverMenuPosition[tablePosition] === row ? undefined : row;
      this._cd.markForCheck();
   }

   // Sortable tables

   public onSortTable(order: Order): void {
      this.currentOrder = order;
      const reverseConst: number = order.type === ORDER_TYPE.ASC ? 1 : -1;
      this.sortedUsers = [...this.sortedUsers].sort((a, b) => {
         return a[order.orderBy].toString().localeCompare(b[order.orderBy].toString()) * reverseConst;
      });

   }
}
