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

import { StSidebarComponent } from './st-sidebar.component';
import { StSidebarItemListComponent } from './st-sidebar-item-list/st-sidebar-item-list.component';
import { StSearchModule } from '../st-search/st-search.module';

@NgModule({
   imports: [CommonModule, StSearchModule],
   declarations: [StSidebarComponent, StSidebarItemListComponent],
   exports: [StSidebarComponent]
})

export class StSidebarModule {
}
