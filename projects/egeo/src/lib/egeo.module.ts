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
import { ModuleWithProviders, NgModule } from '@angular/core';

import { StAlertsService } from './st-alerts/st-alerts.service';
import { StModalService } from './st-modal/st-modal.service';
import { StPaginationService } from './st-pagination/st-pagination.service';
import { EgeoResolveService } from './utils/egeo-resolver/egeo-resolve.service';
import { SelectOneDispatcher } from './utils/unique-dispatcher';
import { StWindowRefService } from './utils/window-service';

import { DECLARATIONS } from './barrels';

@NgModule({
   imports: [
      CommonModule,
      ...DECLARATIONS
   ],
   declarations: [],
   exports: [
      ...DECLARATIONS
   ]
})
export class EgeoModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: EgeoModule,
         providers: [
            StModalService,
            StPaginationService,
            EgeoResolveService,
            SelectOneDispatcher,
            StAlertsService,
            StWindowRefService
         ]
      };
   }
}
