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
import { Component } from '@angular/core';

import { StTagItem } from '@stratio/egeo/lib/st-tag/st-tag.model';

@Component({
   selector: 'st-button-demo',
   templateUrl: './st-tag-demo.component.html',
   styleUrls: ['./st-tag-demo.component.scss']
})

export class StTagDemoComponent {
   public configDoc: any = {
      html: 'demo/st-button-demo/st-button-demo.component.html',
      ts: 'demo/st-button-demo/st-button-demo.component.ts'
   };


   public simpleTag: StTagItem = {
      id: 'simpleTag',
      text: 'Tag text',
      bubble: 'This is the bubble for this tag'
   };

   public tagWithIcon: StTagItem = {
      id: 'complexTag',
      text: 'Tag title',
      icon: 'icon-lock',
      bubble: 'This is the bubble for this tag with icon'
   };

}
