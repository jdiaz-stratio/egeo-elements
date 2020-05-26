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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { StEgeo, StRequired } from '../../decorators/require-decorators';
import { StItemListElement } from '../st-item-list.model';

@Component({
   selector: 'item-list-item',
   templateUrl: './item-list-item.component.html',
   styleUrls: ['./item-list-item.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
@StEgeo()
export class ItemListItemComponent {

   @Input() @StRequired() item: StItemListElement;
   @Input() qaTag: string = '';
   @Input() align: 'left' | 'right' = 'left';

   @Output() selectItem: EventEmitter<StItemListElement> = new EventEmitter<StItemListElement>();

   constructor() { }

   get itemName(): string {
      return this.item.name;
   }

   get itemIcon(): string {
      return this.item.icon;
   }

   get itemSelected(): boolean {
      return this.item.selected ? true : false;
   }

   get itemQaTag(): string {
      return this.qaTag && this.qaTag + '-item-' + this.item.id || '';
   }

   get itemStyle(): string {
      let style: string = `sth-item-list__item item-list-item item-list-item--${this.align}`;
      style += this.itemSelected ? ' sth-item-list__item--selected' : '';
      return style;
   }

   emitOnSelect(event: Event): void {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.selectItem.emit(this.item);
   }
}

