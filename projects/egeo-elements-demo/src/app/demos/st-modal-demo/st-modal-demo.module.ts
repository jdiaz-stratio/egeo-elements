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
   StDemoGeneratorModule, StModalService
} from '@stratio/egeo';

import { StModalDemoComponent } from './st-modal-demo.component';
import { StModalDemoTestComponent } from './st-modal-test-demo.component';
import { StModalDemoTestButtonsComponent } from './st-modal-test-buttons-demo.component';
import { StModalDemoTestFullscreenLayoutComponent } from './st-modal-test-fullscreen-layout.component';
import { StDemoLoggerModule } from '../shared/st-demo-logger/st-demo-logger.module';

@NgModule({
   imports: [
      CommonModule,
      StDemoLoggerModule.withService(),
      StDemoGeneratorModule.withComponents({
         components: [StModalDemoComponent]
      }),
   ],
   declarations: [
      StModalDemoComponent,
      StModalDemoTestComponent,
      StModalDemoTestButtonsComponent,
      StModalDemoTestFullscreenLayoutComponent
   ],
   providers: [StModalService],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StModalDemoModule { }
