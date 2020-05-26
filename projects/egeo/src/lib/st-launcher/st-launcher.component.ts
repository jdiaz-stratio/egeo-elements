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
import {
   ChangeDetectionStrategy,
   Component,
   EventEmitter,
   Input,
   OnInit,
   Output,
   SimpleChanges,
   ChangeDetectorRef
} from '@angular/core';
import { isEqual as _isEqual } from 'lodash';

import { StLauncherGroup, StLauncherItem } from './st-launcher.model';

/**
 * @description {Component} Launcher
 *
 * This components show a launcher for the instances of an item group
 *
 *  @model
 *
 *   [Launcher group] {./st-launcher.model.ts#StLauncherGroup}
 *   [Launcher item] {./st-launcher.model.ts#StLauncherItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-launcher
 *       qaTag="launcher-example"
 *       [items]="items"
 *       [groupLimit]="4"
 *       [groupLimitLabel]="'View more'"
 *       (toggle)="onToggle(event)"
 *       (select)="onSelect(event)"
 *       (viewMore)="onViewMore(event)">
 *    </st-launcher>
 * ```
 */
@Component({
   selector: 'st-launcher',
   templateUrl: './st-launcher.component.html',
   styleUrls: ['./st-launcher.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StLauncherComponent {

   /** @input {string} [qaTag=''] For set id for tests */
   @Input() qaTag: string;
   /** @input {StLauncherGroup[]} items List of groups of items to show */
   @Input()
   get items(): StLauncherGroup[] {
      return this._items;
   }
   set items(items: StLauncherGroup[]) {
      this._items = items;
   }
   /** @input {number} [groupLimit=undefined] Limit of items to be displayed per group */
   @Input() groupLimit: number;
   /** @input {string} [groupLimitMessage=''] Label when the group items limit is exceeded */
   @Input() groupLimitLabel: string;

   /** @output {StLauncherItem} [change=''] Notify any item selection */
   @Output() select: EventEmitter<StLauncherItem> = new EventEmitter<StLauncherItem>();
   /** @output {StLauncherGroup} [toggle=''] Notify any group expansion or collapsed */
   @Output() toggle: EventEmitter<StLauncherGroup> = new EventEmitter<StLauncherGroup>();
   /** @output {StLauncherGroup} [viewMore=''] Notify that wants to see more items in a group */
   @Output() viewMore: EventEmitter<StLauncherGroup> = new EventEmitter<StLauncherGroup>();

   private _items: StLauncherGroup[] = [];

   constructor(
      private _cd: ChangeDetectorRef
   ) { }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes.items && !changes.items.firstChange) {
         if (!_isEqual(this._items, changes.items.currentValue)) {
            this._items = changes.items.currentValue;
            this._cd.markForCheck();
         }
      }
   }

   get listQaTag(): string {
      return this.qaTag && this.qaTag + '-list' || '';
   }

   onToggleGroup(groupItem: StLauncherGroup): void {
      groupItem.expanded = !groupItem.expanded;
      this.toggle.emit(groupItem);
   }

   onSelectItem(item: StLauncherItem): void {
      this.select.emit(item);
   }

   onViewMore(item: StLauncherGroup): void {
      this.viewMore.emit(item);
   }
}
