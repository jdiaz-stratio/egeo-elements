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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

// Components
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemListScrollComponent } from './item-list-scroll/item-list-scroll.component';
import { StItemListComponent } from './st-item-list.component';

// Search module
import { StSearchModule } from '../st-search/st-search.module';

@NgModule({
   imports: [CommonModule, StSearchModule, VirtualScrollerModule],
   declarations: [ItemListScrollComponent, ItemListItemComponent, StItemListComponent],
   exports: [StItemListComponent]
})
export class StItemListModule { }
