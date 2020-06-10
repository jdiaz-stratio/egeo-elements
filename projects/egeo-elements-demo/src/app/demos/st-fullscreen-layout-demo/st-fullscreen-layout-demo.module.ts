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
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   StDemoGeneratorModule
} from '@stratio/egeo';

import { StFullscreenLayoutComponent } from './st-fullscreen-layout-demo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   imports: [
      CommonModule,
      StDemoGeneratorModule.withComponents({ components: [StFullscreenLayoutComponent] }),
      FormsModule,
      ReactiveFormsModule
   ],
   declarations: [StFullscreenLayoutComponent],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StFullscreenLayoutDemoModule { }

