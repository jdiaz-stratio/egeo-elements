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

import { StModalComponent } from './st-modal.component';
import { StModalButtonsComponent } from './st-modal-buttons/st-modal-buttons';

@NgModule({
   imports: [CommonModule],
   declarations: [StModalComponent, StModalButtonsComponent],
   exports: [StModalComponent],
   entryComponents: [StModalComponent],
   providers: []
})
export class StModalModule {
   static withComponents(components: any[]): any {
      return {
         ngModule: StModalModule,
         providers: [
            { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
         ]
      };
   }
}
