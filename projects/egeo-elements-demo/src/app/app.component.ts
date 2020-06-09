// import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class AppComponent implements OnInit{
//   title = 'egeo-elements-demo';

//   valueInput = 'Peter';

//   public size: number = 50;

//   constructor(private cd: ChangeDetectorRef) {

//   }

//   ngOnInit() {
//    // this.cd.markForCheck();
//   }

//   onChangeButton(): void {
//     this.valueInput = 'Jorge';
//   }
// }

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

import { AppService } from './app.service';
import { environment } from '../environments/environment';

@Component({
   selector: 'app',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {

   public areNewVersion: boolean = false;

   constructor(private _appService: AppService) {
      if (environment.production) {
         this._appService.getLastUpdateDate().subscribe(masterDate => this.checkNewVersion(masterDate));
      }
   }

   public hideNotification(): void {
      this.areNewVersion = false;
   }

   private checkNewVersion(masterDate: Date): void {
      //this.areNewVersion = masterDate.getTime() > window.egeo_demo.CREATION_DATE.getTime();
   }
}

