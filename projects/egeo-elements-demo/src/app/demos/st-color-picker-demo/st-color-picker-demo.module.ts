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
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StDemoGeneratorModule } from '@stratio/egeo';

import { StColorPickerDemoComponent } from './st-color-picker-demo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
   imports: [
      CommonModule,
      StDemoGeneratorModule.withComponents({ components: [StColorPickerDemoComponent] }),
      FormsModule,
      ReactiveFormsModule
   ],
   declarations: [StColorPickerDemoComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StColorPickerDemoModule { }
