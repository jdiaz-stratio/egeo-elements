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

import { StTableCellComponent } from './shared/st-table-cell/st-table-cell.component';
import { StTableRowComponent } from './shared/st-table-row/st-table-row.component';
import { StTableComponent } from './st-table.component';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';

@NgModule({
   imports: [CommonModule, StCheckboxModule],
   declarations: [StTableCellComponent, StTableComponent, StTableRowComponent],
   exports: [StTableCellComponent, StTableComponent, StTableRowComponent]
})

export class StTableModule {
}
