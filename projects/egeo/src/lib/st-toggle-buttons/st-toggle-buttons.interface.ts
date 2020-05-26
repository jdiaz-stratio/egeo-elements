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
import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';

export interface StToggleButton {
   label: string;
   id?: string;
   number?: number;
   active?: boolean;
}

export interface StToggleButtonSchema {
   label: TranslateableElement;
   id?: string;
   number?: number;
   active?: boolean;
}

export interface StParsedToggleButton extends StToggleButton {
   trimLabel: string;
}
