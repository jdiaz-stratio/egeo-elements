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
import { ChangeDetectorRef, Component, AfterViewInit } from '@angular/core';

import { StNotificationElement} from '@stratio/egeo';

@Component({
   selector: 'st-foreground-notifications-demo',
   templateUrl: './st-foreground-notifications-demo.component.html',
   styleUrls: ['./st-foreground-notifications-demo.component.scss']
})
export class StForegroundNotificationsDemoComponent implements AfterViewInit {
   items: any[] = [
      [{
         status: 'critical',
         html: `<p>Stratio audit failed to connect to Postgres database.  <a part="some-box">Check the database</a>
          <a part="some-box">Check the database 2</a></p>`,
         nameEvents: ['doCheckDatabase', 'doCheckDatabaseSecond']
      }],
      [{
         text: 'The server couldn’t be reached on port 8080, change it to another value.',
         status: 'warning'
      }],
      [{
         text: 'The connection has been sucessful.',
         status: 'success'
      }],
      [{
         text: 'The process is still running.',
         status: 'running'
      }],
      [{
         text: 'This is a neutral informational notification',
         status: ''
      }],
      [{
         text: 'This is a success error feedback notification with autoclose',
         status: 'success'
      }]
   ];

   itemsEmpty: any[] = [
   ];

   multiLine: StNotificationElement[] = [
      {
         text: `The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.
               This code is used when requests are being denied due to update limits . Other reasons for this status being returned are listed
               alongside the error codes in the table below.The request is understood, but it has been refused or access is not allowed.
               An accompanying error message will explain why. This code is used when requests are being denied due to update limits .
               Other reasons for this status being returned are listed alongside the error codes in the table below.
               The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.
               This code is used when requests are being denied due to update limits . Other reasons for this status being returned are
               listed alongside the error codes in the table below.`,
         status: 'success'
      }];

   multiNotification: StNotificationElement[] = [
      {
         text: `The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.
               This code is used when requests are being denied due to update limits . Other reasons for this status being returned are listed
               alongside the error codes in the table below.The request is understood, but it has been refused or access is not allowed.
               An accompanying error message will explain why. This code is used when requests are being denied due to update limits .
               Other reasons for this status being returned are listed alongside the error codes in the table below.
               The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.
               This code is used when requests are being denied due to update limits . Other reasons for this status being returned are
               listed alongside the error codes in the table below.`,
         status: 'success'
      },
      {
         text: `Stratio audit failed to connect to Postgres database / second page.The request is understood,
          but it has been refused or access is not allowed. An accompanying error message will explain why.
         This code is used when requests are being denied due to update limits . Other reasons for this status being returned are listed
         alongside the error codes in the table below.The request is understood, but it has been refused or access is not allowed.
         An accompanying error message will explain why. This code is used when requests are being denied due to update limits .`,
         status: 'critical'
      },
      {
         text: 'Stratio audit failed to connect to Postgres database / third page',
         status: 'warning'
      },
      {
         text: 'Stratio audit failed to connect to Postgres database / fourth page'
      }
   ];

   visibleTimeout: boolean = true;

   public configDoc: any = {
      html: 'demo/st-foreground-notifications-demo/st-foreground-notifications-demo.component.html',
      ts: 'demo/st-foreground-notifications-demo/st-foreground-notifications-demo.component.ts',
      component: 'lib/st-foreground-notifications/st-foreground-notifications.ts'
   };

   public toggleNotifications(index: number): void {
      this.items[index].visible = !this.items[index].visible;
   }

   constructor(private cd: ChangeDetectorRef) {}

   ngAfterViewInit(): void {
      setTimeout(() => {

         this.itemsEmpty = [{
            text: 'The server couldn’t be reached on port 8080, change it to another value.',
            status: 'warning'
         }];
         this.cd.markForCheck();
      }, 5000);
   }

   doCheckDatabase(): void {
      console.log('throwing check database from parent');
   }

   doCheckDatabaseSecond(): void {
      console.log('throwing check database second from parent');
   }

   onClickLinkTemplate(event: any): void {
      switch (event) {
         case 'doCheckDatabase' :
            this.doCheckDatabase();
            break;
         case 'doCheckDatabaseSecond' :
            this.doCheckDatabaseSecond();
            break;
         default:
            break;
      }
   }
   onVisibleChange(event: any): void {
      setTimeout(() => {
         this.visibleTimeout = true;
         this.itemsEmpty = [];
         this.cd.markForCheck();
         this.itemsEmpty = [{
            text: 'The server couldn’t be reached on port 8080, change it to another value.',
            status: 'success',
            visible: true
         }];
         this.cd.markForCheck();
      }, 5000);
   }
}
