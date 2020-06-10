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
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { SharedModule } from '../../shared/shared.module';
import { GeneralComponent } from './general';
import { AboutComponent } from './about/about';
import { GettingStartedComponent } from './getting-started/getting-started';
import { ChangelogService } from './changelog/changelog.service';
import { ChangelogComponent } from './changelog/changelog';

export const routes: Routes = [
   {
      path: '', component: GeneralComponent, children: [
         { path: '', pathMatch: 'full', redirectTo: 'about' },
         { path: 'about', component: AboutComponent },
         { path: 'getting-started', component: GettingStartedComponent },
         { path: 'changelog', component: ChangelogComponent }
      ]
   }
];

@NgModule({
   imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule,
      MarkdownToHtmlModule
   ],
   declarations: [
      GeneralComponent,
      AboutComponent,
      GettingStartedComponent,
      ChangelogComponent
   ],
   providers: [
      ChangelogService
   ]
})
export class GeneralModule { }
