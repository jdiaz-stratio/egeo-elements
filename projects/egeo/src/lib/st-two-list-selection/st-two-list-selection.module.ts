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
import { ListItemComponent } from './list-item/list-item.component';
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { ListScrollComponent } from './list-scroll/list-scroll.component';
import { StTwoListSelectionComponent } from './st-two-list-selection.component';
import { StTwoListSelectionViewComponent } from './st-two-list-selection.view.component';

// Order modules
import { PipesModule } from '../pipes/pipes.module';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StSearchModule } from '../st-search/st-search.module';
import { StSelectModule } from '../st-select/st-select.module';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';
import { StSpinnerModule } from '../st-spinner/st-spinner.module';

@NgModule({
   imports: [CommonModule, StSearchModule, PipesModule, VirtualScrollerModule, StSelectModule, StCheckboxModule, StDropdownMenuModule, StSpinnerModule],
   declarations: [StTwoListSelectionViewComponent, StTwoListSelectionComponent, ListSelectionComponent, ListItemComponent, ListScrollComponent],
   exports: [StTwoListSelectionComponent, StTwoListSelectionViewComponent]
})
export class StTwoListSelectionModule { }
