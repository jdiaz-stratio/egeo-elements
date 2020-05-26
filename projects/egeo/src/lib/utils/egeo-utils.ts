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
export class EgeoUtils {

   static isDefined(value: any): boolean {
      return value !== undefined && value !== null;
   }

   static validateInputs(scope: any, inputs: string[], component: string): void {
      inputs.forEach((input) => {
         if (!this.isDefined(scope[input])) {
            throw new Error(`${this.toDash(component)}: field ${input} is a required field`);
         }
      });
   }

   static toDash(value: string): string {
      try {
         return value.replace(/([A-Z])/g, ($1) => '-' + $1.toLowerCase()).substring(1);
      } catch (err) {
         return value;
      }
   }
}
