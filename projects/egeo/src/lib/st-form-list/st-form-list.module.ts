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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from '../pipes/pipes.module';
import { StFormDirectiveModule } from '../directives/form/form-directives.module';
import { StFormListComponent } from './st-form-list.component';
import { StFormFieldModule } from '../st-form/st-form-field/st-form-field.module';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      StFormFieldModule,
      PipesModule,
      StFormDirectiveModule
   ],
   declarations: [StFormListComponent],
   exports: [StFormListComponent]
})

export class StFormListModule {
}
