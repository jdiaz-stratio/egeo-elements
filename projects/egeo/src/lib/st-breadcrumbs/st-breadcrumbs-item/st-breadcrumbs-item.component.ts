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

@Component({
   selector: 'st-breadcrumbs-item',
   templateUrl: './st-breadcrumbs-item.component.html',
   styleUrls: ['./st-breadcrumbs-item.component.scss']
})
export class StBreadcrumbItemComponent {
   @Input()
   get qaTag(): String {
      return this._qaTag.replace(/ /g, '-');
   }

   set qaTag(qaTag: String) {
      this._qaTag = qaTag;
   }

   @Input() active: Boolean;

   private _qaTag: String;
}
