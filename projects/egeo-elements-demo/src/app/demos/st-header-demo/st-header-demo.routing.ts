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
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StHeaderDemoComponent } from './st-header-demo.component';
import { StFakePageComponent } from './fake-page.component';
import { LONG_CONTENT } from './st-header-demo.model';

export const routing: ModuleWithProviders = RouterModule.forChild([
   {
      path: '', component: StHeaderDemoComponent, children: [
         { path: 'test1', redirectTo: 'test1/subtest1', pathMatch: 'full' },
         {
            path: 'test1', component: StFakePageComponent, data: { pageName: 'TEST 1' }, children: [
               { path: 'subtest1', component: StFakePageComponent, data: { pageName: 'SUBTEST 1' } },
               { path: 'subtest2', component: StFakePageComponent, data: { pageName: 'SUBTEST 2' } }
            ]
         },
         { path: 'test2', component: StFakePageComponent, data: { pageName: 'TEST 2' } },
         { path: 'test3', component: StFakePageComponent, data: { pageName: 'TEST 3' } },
         { path: 'test4', component: StFakePageComponent, data: { pageName: LONG_CONTENT } },
         { path: 'test5', component: StFakePageComponent, data: { pageName: 'TEST 5' } },
         { path: 'test6', component: StFakePageComponent, data: { pageName: 'TEST 6' } }
      ]
   }
]);
