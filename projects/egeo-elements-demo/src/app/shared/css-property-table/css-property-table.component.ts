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
import { Component, Input } from '@angular/core';
import { CssProperty } from '@app/shared/css-property-table/css-property-table.model';
import { StTableHeader } from '@stratio/egeo';


@Component({
   selector: 'demo-css-property-table',
   templateUrl: 'css-property-table.component.html',
   styleUrls: ['css-property-table.component.scss']
})
export class CssPropertyTableComponent {

   @Input() cssProperties: CssProperty[];

   public fields: StTableHeader[] = [
      {
         id: 'name',
         label: 'Name'
      },
      {
         id: 'description',
         label: 'Description'
      },
      {
         id: 'default',
         label: 'Default'
      }
   ];
}
