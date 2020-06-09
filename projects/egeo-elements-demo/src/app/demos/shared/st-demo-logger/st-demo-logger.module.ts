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
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StDemoLoggerComponent } from './st-demo-logger';
import { StDemoLoggerService } from './st-demo-logger.service';

@NgModule({
   imports: [CommonModule],
   declarations: [StDemoLoggerComponent],
   exports: [StDemoLoggerComponent]
})
export class StDemoLoggerModule {
   static withService(): ModuleWithProviders {
      return {
         ngModule: StDemoLoggerModule,
         providers: [StDemoLoggerService]
      };
   }
}
