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
import { Routes, RouterModule } from '@angular/router';
import { StSearchModule, PipesModule } from '@stratio/egeo';

import { IconDemoComponent } from './icons-demo/icon-demo/icon-demo';
import { IconsDemoComponent } from './icons-demo/icons-demo';
import { IconsDemoService } from './icons-demo/icons-demo.service';
import { ThemeComponent } from './theme';
import { GridComponent } from './grid/grid';
import { SharedModule } from '../../shared/shared.module';

import { ColorDemoComponent } from './colors/color/color';
import { ColorsDemoComponent } from './colors/colors';
import { ColorsService } from './colors/colors.service';

import { FontDemoComponent } from './fonts/font/font';
import { FontsDemoComponent } from './fonts/fonts';

export const routes: Routes = [
   {
      path: '', component: ThemeComponent, children: [
         { path: '', pathMatch: 'full', redirectTo: 'icons' },
         { path: 'icons', component: IconsDemoComponent },
         { path: 'colors', component: ColorsDemoComponent },
         { path: 'fonts', component: FontsDemoComponent },
         { path: 'grid', component: GridComponent }
      ]
   }
];

@NgModule({
   imports: [
      CommonModule,
      SharedModule,
      StSearchModule,
      PipesModule,
      RouterModule.forChild(routes)
   ],
   declarations: [
      ThemeComponent,
      IconsDemoComponent,
      IconDemoComponent,
      GridComponent,
      ColorsDemoComponent,
      ColorDemoComponent,
      FontsDemoComponent,
      FontDemoComponent
   ],
   providers: [
      IconsDemoService,
      ColorsService
   ]
})
export class ThemeModule { }
