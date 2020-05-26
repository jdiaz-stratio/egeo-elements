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
import {TranslateableElement} from '../utils/egeo-resolver/egeo-resolve-model';

export interface StError {
   generic?: string;
   required?: string;
}

export interface StInputError extends StError {
   minLength?: string;
   maxLength?: string;
   min?: string;
   max?: string;
   type?: string;
   pattern?: string;
}

export interface StInputErrorSchema {
   generic?: TranslateableElement;
   required?: TranslateableElement;
   minLength?: TranslateableElement;
   maxLength?: TranslateableElement;
   min?: TranslateableElement;
   max?: TranslateableElement;
   type?: TranslateableElement;
   pattern?: TranslateableElement;
}

