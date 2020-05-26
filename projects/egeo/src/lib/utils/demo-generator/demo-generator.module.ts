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
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';

import { StDemoGenerator } from './demo-generator';
import { DemoGeneratorProviders } from './demo-generator.interface';
import { routing } from './demo-generator.routing';

@NgModule({
   id: 'Demo-factory',
   imports: [CommonModule, routing],
   exports: [StDemoGenerator],
   declarations: [StDemoGenerator],
   entryComponents: [StDemoGenerator],
   providers: []
})
export class StDemoGeneratorModule {
   static withComponents(config: DemoGeneratorProviders): any {
      return {
         ngModule: StDemoGeneratorModule,
         providers: [
            { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config.components, multi: true },
            { provide: DemoGeneratorProviders, useValue: config }
         ]
      };
   }
}
