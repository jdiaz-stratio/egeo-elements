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
import { FormControl } from '@angular/forms';

@Component({
   selector: 'st-bubble-on-ellipsis-demo',
   templateUrl: './st-bubble-on-ellipsis-demo.component.html',
   styleUrls: ['./st-bubble-on-ellipsis-demo.component.scss']
})
export class StBubbleOnEllipsisDemoComponent {
   public configDoc: any = {
      html: 'demo/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.html',
      ts: 'demo/st-bubble-on-ellipsis-demo/st-bubble-on-ellipsis-demo.component.ts',
      component: 'lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.component.ts'
   };
   public text: string = 'What needed to deploy Crossdata?';
   public hidden: boolean = true;
   public openToLeftFormControl: FormControl = new FormControl(true);
   public containerMaxWidthFormControl: FormControl = new FormControl(500);

}
