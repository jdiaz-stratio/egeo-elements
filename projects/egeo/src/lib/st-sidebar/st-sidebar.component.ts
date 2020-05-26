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
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';

import { StSidebarItem } from './st-sidebar-item.interface';
import { StSidebarVisualMode } from './st-sidebar-visual-mode';

/**
 * @description {Component} [Sidebar]
 *
 * The sidebar component has been designed to navigate through different sections of a web page.
 *
 *  @model
 *
 *   [Sidebar items] {./st-sidebar-item.interface.ts#StSidebarItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-sidebar class="sidebar" title="Mesos Manager" [items]="items" qaTag="sidebar-demo">
 * </st-sidebar>
 * ```
 *
 */
@Component({
   selector: 'st-sidebar',
   templateUrl: './st-sidebar.component.html',
   styleUrls: ['./st-sidebar.component.scss'],
   providers: [],
   host: { class: 'st-sidebar' },
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StSidebarComponent {
   /** @Input {string} [title=''] Title displayed on the top of menu */
   @Input() title: string = '';
   /** @Input {StSidebarItem} [active=''] The current active item */
   @Input() active: StSidebarItem;
   /** @Input {StSidebarItem[]} [items=''] List of items displayed on the menu */
   @Input() items: StSidebarItem[] = [];
   /** @Input {boolean} [searchMode=''] Boolean to enable or disable the search mode. By default, it is disabled */
   @Input() searchMode: boolean = false;
   /** @Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list */
   @Input() visualMode: StSidebarVisualMode = StSidebarVisualMode.normal;
   /** @Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emits the active item */
   @Output() change: EventEmitter<StSidebarItem> = new EventEmitter<StSidebarItem>();
   /** @Output {string} [search=''] Event emitted when search mode is enabled and user interacts with the search input */
   @Output() search: EventEmitter<string> = new EventEmitter<string>();


   onChange(item: StSidebarItem): void {
      if (!this.active || this.active.id !== item.id) {
         this.change.emit(item);
      }
   }

   onSearch(searchData: any): void {
      if (searchData) {
         this.search.emit(searchData.text);
      }
   }
}
