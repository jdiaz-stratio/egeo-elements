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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
   StDemoGeneratorModule,
   StDocsModule,
   StHeaderModule,
   StPopOverModule,
   StLauncherModule
} from '@stratio/egeo';

import { StHeaderDemoComponent } from './st-header-demo.component';
import { StFakePageComponent } from './fake-page.component';
import { routing } from './st-header-demo.routing';


@NgModule({
   imports: [
      CommonModule,
      RouterModule,
      StDocsModule,
      StHeaderModule,
      StPopOverModule,
      StLauncherModule,
      StDemoGeneratorModule.withComponents({ components: [StHeaderDemoComponent] }),
      routing
   ],
   declarations: [StHeaderDemoComponent, StFakePageComponent]
})
export class StHeaderDemoModule { }

