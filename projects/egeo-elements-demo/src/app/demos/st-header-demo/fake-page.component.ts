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
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'fake-page',
   template: `
      <div>
         <h1>YOU NAVIGATE TO PAGE</h1>
           <p [innerHTML]="pageName"></p>
         <br><br>
         <router-outlet></router-outlet>
      </div>`,
   styles: [' div { max-width: 1700px; margin: auto; } '],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StFakePageComponent {
   public pageName: string = 'ERROR';

   constructor(private _router: ActivatedRoute) {
      let id: string = 'pageName';
      this._router.data.subscribe(data => this.pageName = data[id]);
   }
}
