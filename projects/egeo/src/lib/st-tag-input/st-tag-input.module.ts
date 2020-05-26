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
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StLabelModule } from '../st-label/st-label.module';
import { StTagInputComponent } from './st-tag-input.component';
import { StClickOutsideModule } from '../directives/st-click-outside/st-click-outside.module';

@NgModule({
   imports: [CommonModule, FormsModule, ReactiveFormsModule, StLabelModule, StDropdownMenuModule, StClickOutsideModule],
   declarations: [StTagInputComponent],
   exports: [StTagInputComponent]
})
export class StTagInputModule { }
