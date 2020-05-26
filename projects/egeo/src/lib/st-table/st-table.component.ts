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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { StEgeo, StRequired } from '../decorators/require-decorators';
import { Order, ORDER_TYPE } from './shared/order';
import { StTableHeader } from './shared/table-header.interface';

/**
 * @description {Component} [Table]
 *
 * The table component has been designed to display any content like images, text, graphs, etc.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-table [fields]="fields" [sortable]="true" (changeOrder)="yourFunctionToOrder($event)">
 * <tr st-table-row *ngFor="let userData of data">
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.id}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.name}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.lastName}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.phone}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.company}}</label>
 * </td>
 * <td st-table-cell st-table-row-content>
 *    <label >{{userData.completedProfile}}</label>
 * </td>
 * <td st-table-row-hover>
 *    <i class="icon icon-arrow2_right"></i>
 * </td>
 * </tr>
 * </st-table>
 * ```
 *
 */
@StEgeo()
@Component({
   selector: 'st-table',
   templateUrl: './st-table.component.html',
   styleUrls: ['./st-table.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StTableComponent implements OnInit {
   /** @Input {StTableHeader[]} [fields=''] List of field displayed in the header */
   @Input() @StRequired() fields: StTableHeader[];
   /** @Input {string} [qaTag=''] Prefix used to generate the id values for qa tests */
   @Input() qaTag: string;
   /** @Input {boolean} [header=true] Boolean to show or hide the header */
   @Input() header: boolean = true;

   /**
    * @Input {boolean} [sortable=true] Boolean to make sortable the table, To enable sorting of columns use
    * the new "sortable" field inside stTableHeader model
    */
   @Input() sortable: boolean = true;
   /**
    * @Input {boolean} [selectableAll=false] Boolean to show or hide a checkbox in the header to select or
    *  deselect all rows
    */
   @Input() selectableAll: boolean = false;
   /** @Input {Order} [currentOrder=''] It specifies what is the current order applied to the table */
   @Input() currentOrder: Order;

   /** @Input {string} [customClasses=] Classes for adding styles to table tag from outside. These can be: separated-rows */
   @Input() customClasses: string;

   /** @Input {boolean} [fixedHeader=false] Boolean to fix the table header */
   @Input() fixedHeader: boolean = false;

   /** @Input {boolean} [selectedAll=false] It specifies if all rows are selected */
   @Input()
   get selectedAll(): boolean {
      return this._selectedAll;
   }

   set selectedAll(newValue: boolean) {
      this._selectedAll = newValue;
   }

   /** @Input {boolean} [hasHoverMenu=true] It specifies if a menu has to be displayed when user puts the mouse over
    * the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu
    */
   @Input()
   get hasHoverMenu(): boolean {
      return this._hasHoverMenu;
   }

   set hasHoverMenu(newValue: boolean) {
      this._hasHoverMenu = newValue;
   }
   /** @Output {Order} [changeOrder=''] Event emitted with the new order which has to be applied to the table rows */
   @Output() changeOrder: EventEmitter<Order> = new EventEmitter();
   /** @Output {boolean} [selectAll=''] Event emitted  when user interacts with the checkbox to select or deselect
    * all rows
    */
   @Output() selectAll: EventEmitter<boolean> = new EventEmitter();

   public tableClass: any;
   public orderTypes: any = ORDER_TYPE;

   private _selectedAll: boolean;
   private _hasHoverMenu: boolean = true;


   ngOnInit(): void {
      this.tableClass = this.getClasses();
   }

   public onChangeOrder(field: StTableHeader): void {
      if (field && this.isSortable(field)) {
         if (this.currentOrder && this.currentOrder.orderBy === field.id) {
            this.changeOrderDirection();
         } else {
            this.currentOrder = new Order(field.id, ORDER_TYPE.ASC);
         }
         this.changeOrder.emit(this.currentOrder);
      }
   }

   public getClasses(): any {
      let classes: any = {};
      if ( this.fixedHeader) {
         classes['st-table--fixed-header'] = true;
      }
      classes[this.customClasses] = this.customClasses;

      return classes;
   }

   public isSortable(field: StTableHeader): boolean {
      return field && field.sortable !== undefined ? field.sortable : this.sortable;
   }

   public onSelectAll(event: any): void {
      this.selectAll.emit(event.checked);
   }

   public getHeaderItemClass(field: StTableHeader): string {
      let isOrderAsc = this.isSortedByFieldAndDirection(field, this.orderTypes.ASC);
      return isOrderAsc ? 'icon-arrow4_up' : 'icon-arrow4_down';
   }

   public isSortedByField(field: StTableHeader): boolean {
      return this.currentOrder && this.currentOrder.orderBy === field.id;
   }

   private isSortedByFieldAndDirection(field: StTableHeader, orderType: ORDER_TYPE): boolean {
      return this.isSortedByField(field) && this.currentOrder.type === orderType;
   }

   private changeOrderDirection(): void {
      let newDirection = this.currentOrder.type === ORDER_TYPE.ASC ? ORDER_TYPE.DESC : ORDER_TYPE.ASC;
      this.currentOrder = new Order(this.currentOrder.orderBy, newDirection);
   }
}
