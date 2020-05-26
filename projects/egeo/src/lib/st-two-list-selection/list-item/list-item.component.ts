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
import { StTwoListSelectionElement, StTwoListSelectExtraLabelAction } from '../st-two-list-selection.model';

import { StDropDownMenuItem, StDropDownVisualMode } from '../../st-dropdown-menu/st-dropdown-menu.interface';
import { StPopPlacement } from '../../st-pop/st-pop.model';

@Component({
   selector: 'list-item',
   templateUrl: './list-item.component.html',
   styleUrls: ['./list-item.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
@StEgeo()
export class ListItemComponent {

   @Input() @StRequired() item: StTwoListSelectionElement;
   @Input() @StRequired() qaTag: string;
   @Input() editable: boolean = false;
   @Input() mode: 'compact' | 'normal' = 'normal';
   @Input() disabled: boolean = false;
   @Input() menuOptionList?: StDropDownMenuItem[];

   @Output() selectItem: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectItemNonEditable: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectExtraLabel: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();


   public hoverRow: boolean = false;
   public menuVisualMode: StDropDownVisualMode = StDropDownVisualMode.MENU_LIST;
   public placement: StPopPlacement = StPopPlacement.BOTTOM_END;
   public showActionList: boolean;

   constructor() { }

   get itemName(): string {
      return this.item && this.item.name !== undefined && this.item.name !== null ? this.item.name : '';
   }

   get itemQaTag(): string {
      return this.qaTag + '-item-' + this.item.id;
   }

   get checkQaTag(): string {
      return this.qaTag + '-check-' + this.item.id;
   }

   get selected(): boolean {
      return this.item.selected ? true : false;
   }

   get itemMode(): string {
      let style: string = this.getModeStyle();
      style += this.selected ? ' sth-two-list-selection__selected_item' : '';
      return style;
   }

   getModeStyle(): string {
      return this.mode === 'normal' ? 'item-normal sth-two-list-selection__item-normal' :
         'item-compact sth-two-list-selection__item-compact';
   }

   emitOnClickNonEditable(event: Event): void {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.selectItemNonEditable.emit(this.item);
   }

   emitOnSelect(event: Event): void {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.selectItem.emit(this.item);
   }

   mouseHoverRow(): void {
      this.hoverRow = true;
   }

   mouseLeftRow(): void {
      this.hoverRow = false;
   }

   onCloseActionMenu(): void {
      if (this.showActionList) {
         this.showActionList = false;
      }
   }

   onChangeOption(option: StDropDownMenuItem): void {
      this.emitOnClickNonEditable(new CustomEvent('selectItem', { bubbles: true, cancelable: true, detail: Object.assign(this.item, option)}));
   }

   onEllipsisClick(): void {
      this.showActionList = !this.showActionList;
   }
}
