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
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'stFilterList'
})
export class StFilterList implements PipeTransform {
   transform(list: any[], field: string, search: string): any[] {
      this.checkParams(field);
      if (!search) {
         return list;
      }
      if (list && list.length > 0 && field) {
         return list.filter((element) => this.contains(element, field, search));
      } else {
         return [];
      }
   }

   private contains(element: any, field: string, search: string): boolean {
      if (this.isDefined(element) && this.isString(field) && this.isString(search) && this.isString(element[field])) {
         return element[field].toUpperCase().search(search.toUpperCase()) > -1;
      }
      return false;
   }

   private isDefined(value: any): boolean {
      return value !== undefined && value !== null;
   }

   private isString(value: any): boolean {
      return this.isDefined(value) && typeof value === 'string';
   }

   private checkParams(field: string): void {
      if (!this.isString(field)) {
         throw new Error('PIPE: stFilterList: "field" is a required and string parameter');
      }
   }
}
