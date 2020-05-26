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
import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StLauncherGroup, StLauncherItem } from '../st-launcher.model';

@Component({
   selector: 'st-launcher-item',
   templateUrl: './st-launcher-item.component.html',
   styleUrls: ['./st-launcher-item.component.scss']
})
export class StLauncherItemComponent implements OnInit, OnChanges {

   @Input() item: StLauncherGroup;
   @Input() qaTag: string;
   @Input() limit: number;
   @Input() limitLabel: string;

   @Output() toggle: EventEmitter<StLauncherGroup> = new EventEmitter<StLauncherGroup>();
   @Output() select: EventEmitter<StLauncherItem> = new EventEmitter<StLauncherItem>();
   @Output() view: EventEmitter<StLauncherGroup> = new EventEmitter<StLauncherGroup>();

   constructor() {
   }

   ngOnInit(): void {
      if (this.item && this.item.expanded === undefined) {
         this.item.expanded = false;
      }
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes.item && changes.item.currentValue && changes.item.currentValue.expanded === undefined) {
         changes.item.currentValue.expanded = false;
      }
   }

   get itemsFiltered(): StLauncherItem[]  {
      return this.item.items.slice(0, this.limit);
   }
}
