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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { StDropDownMenuItem } from '../st-dropdown-menu.interface';

@Component({
   selector: 'st-dropdown-menu-item',
   templateUrl: './st-dropdown-menu-item.component.html'
})
export class StDropdownMenuItemComponent {
   @Input() index: number = 0;
   @Input() item: StDropDownMenuItem = undefined;
   @Input() selectedItem: StDropDownMenuItem = undefined;
   @Input() styleSelected: boolean = true;

   @Output() change: EventEmitter<StDropDownMenuItem> = new EventEmitter<StDropDownMenuItem>();

   constructor(private sanitizer: DomSanitizer) {

   }

   onChangeItem(): void {
      this.change.emit(this.item);
   }

   get isSelected(): boolean {
      return (this.hasItem && this.item.selected && this.styleSelected) ||
         (this.hasItem && this.selectedItem !== undefined && this.item.value === this.selectedItem.value && this.styleSelected);
   }

   get icon(): string {
      return this.hasIcon ? this.item.icon : '';
   }

   get html(): SafeHtml {
      return this.item && this.item.label ? this.sanitizer.bypassSecurityTrustHtml(this.item.label) : '';
   }

   get hasIcon(): boolean {
      return this.hasItem && this.item.icon !== undefined && this.item.icon !== null;
   }

   get hasItem(): boolean {
      return this.item !== undefined && this.item !== null;
   }
}
