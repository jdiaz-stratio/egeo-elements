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

@Component({
   selector: 'st-page-title-demo-example',
   templateUrl: './st-page-title-demo.component.html',
   styleUrls: ['st-page-title-demo.component.scss']
})

export class StPageTitleDemoComponent {
   public configDoc: any = {
      html: 'demo/st-page-title-demo/st-page-title-demo.component.html',
      ts: 'demo/st-page-title-demo/st-page-title-demo.component.ts',
      component: 'lib/st-page-title/st-page-title.component.ts'
   };
   public title: string = 'st page title demo';
   public error: boolean = false;
   public errorMsg: string = '';
   public minlength: number = 1;
   public maxlength: number = 20;

   constructor() {}

   public editTitle(value: string): void {
      if (value.length === this.maxlength) {
         this.error = true;
         this.errorMsg = 'Error filling page title input';
      } else {
         this.error = false;
         this.errorMsg = '';
      }
   }
}
