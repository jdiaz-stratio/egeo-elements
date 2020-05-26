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
import { NgModule, Type } from '@angular/core';

import { StMinValidator } from  './st-min-validator/st-min-validator';
import { StMaxValidator } from  './st-max-validator/st-max-validator';


export const SHARED_FORM_DIRECTIVES: Type<any>[] = [
   StMinValidator,
   StMaxValidator
];


@NgModule({
   declarations: SHARED_FORM_DIRECTIVES,
   exports: SHARED_FORM_DIRECTIVES
})

export class StFormDirectiveModule {
}
