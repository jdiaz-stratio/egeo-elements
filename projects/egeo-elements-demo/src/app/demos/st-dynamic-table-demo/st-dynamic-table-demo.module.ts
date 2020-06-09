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
import { StDemoGeneratorModule, StDocsModule, StTableModule, StCheckboxModule, StToggleButtonsModule, StDropdownMenuModule} from '@stratio/egeo';

import { StDynamicTableDemoComponent } from './st-dynamic-table-demo.component';
//import { StDynamicTableModule } from '@stratio/egeo/lib/st-dynamic-table/st-dynamic-table.module';
import { CssPropertyTableModule } from '../../../app/shared/css-property-table/css-property-table.module';

@NgModule({
   imports: [
      CommonModule,
  //    StDynamicTableModule,
      StCheckboxModule,
      StDemoGeneratorModule.withComponents({ components: [StDynamicTableDemoComponent] }),
      StDocsModule,
      StToggleButtonsModule,
      StDropdownMenuModule,
      CssPropertyTableModule
   ],
   declarations: [StDynamicTableDemoComponent]
})
export class StDynamicTableDemoModule { }
