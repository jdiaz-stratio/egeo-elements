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
   selector: 'st-file-button-demo',
   templateUrl: './st-file-button-demo.component.html',
   styleUrls: ['./st-file-button-demo.component.scss']
})

export class StFileButtonDemoComponent {
   public configDoc: any = {
      html: 'demo/st-file-button-demo/st-file-button-demo.component.html',
      ts: 'demo/st-file-button-demo/st-file-button-demo.component.ts',
      component: 'lib/st-file-button/st-file-button.component.ts'
   };

   onUploadValidFile( files: any ): void {
      console.log('uploaded a valid file:', files);
   }

   onUploadInvalidFile(): void {
      console.log('uploaded an invalid file:');
   }
}
