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

import { StFormFieldComponent } from './st-form-field.component';
import { StInputModule } from '../../st-input/st-input.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StSelectModule } from '../../st-select/st-select.module';
import { StSwitchModule } from '../../st-switch/st-switch.module';
import { StTextareaModule } from '../../st-textarea/st-textarea.module';

@NgModule({
   imports: [CommonModule,
      FormsModule,
      ReactiveFormsModule,
      StInputModule,
      StCheckboxModule,
      StSelectModule,
      StSwitchModule,
      StTextareaModule,
      StFormDirectiveModule],
   declarations: [StFormFieldComponent],
   exports: [StFormFieldComponent]
})

export class StFormFieldModule {
}
