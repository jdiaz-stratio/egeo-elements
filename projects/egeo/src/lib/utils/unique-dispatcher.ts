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
import { Injectable, Optional, SkipSelf } from '@angular/core';

export type SelectOneDispaptcherListener = (id: string, name: string) => void;

@Injectable()
export class SelectOneDispatcher {
   private listeners: SelectOneDispaptcherListener[] = [];

   notify(id: string, name: string): void {
      for (let listener of this.listeners) {
         listener(id, name);
      }
   }

   listen(listener: SelectOneDispaptcherListener): void {
      this.listeners.push(listener);
   }

}
