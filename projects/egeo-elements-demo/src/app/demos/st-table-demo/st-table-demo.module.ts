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
import { StDemoGeneratorModule, StDocsModule, StTableModule, StCheckboxModule, StToggleButtonsModule } from '@stratio/egeo';

import { StTableDemoComponent } from './st-table-demo.component';
import { CssPropertyTableModule } from '@app/shared/css-property-table/css-property-table.module';

@NgModule({
   imports: [
      CommonModule,
      StTableModule,
      StCheckboxModule,
      StDemoGeneratorModule.withComponents({ components: [StTableDemoComponent] }),
      StDocsModule,
      StToggleButtonsModule,
      CssPropertyTableModule
   ],
   declarations: [StTableDemoComponent]
})
export class StTableDemoModule { }
