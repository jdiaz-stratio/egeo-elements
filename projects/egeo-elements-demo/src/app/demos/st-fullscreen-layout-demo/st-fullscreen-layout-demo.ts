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
   selector: 'st-fullscreen-layout-demo',
   templateUrl: './st-fullscreen-layout-demo.html',
   styleUrls: ['./st-fullscreen-layout-demo.scss']
})
export class StFullscreenLayoutComponent {
   public configDoc: any = {
      html: 'demo/st-fullscreen-layout-demo/st-fullscreen-layout-demo.html',
      ts: 'demo/st-fullscreen-layout-demo/st-fullscreen-layout-demo.ts',
      component: 'lib/st-fullscreen-layout/st-fullscreen-layout.ts'
   };
   showFullscreenLayout: boolean = false;
   fullwWidthFormControl: FormControl = new FormControl();

   onClickShowButton(): void {
      this.showFullscreenLayout = true;
   }

   onClickHideButton(): void {
      this.showFullscreenLayout = false;
   }
}
