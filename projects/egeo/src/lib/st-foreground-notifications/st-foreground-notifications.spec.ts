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
import { ComponentFixture, async, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA, ViewChild, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { StProgressBarModule } from '../st-progress-bar/st-progress-bar.module';
import { StForegroundNotificationsComponent } from './st-foreground-notifications';
import { StForegroundNotificationsModule } from './st-foreground-notifications.module';

import { StatusNotification, StNotificationElement } from './st-foreground-notifications.model';

@Component({
   template: `
      <st-foreground-notifications #notification
         [notifications]="notifications"
         [(visible)]="visible"
         [autoCloseTime]="autoCloseTime"
         id="tes-id"
         (clickLinkTemplate)="clickLinkTemplate.emit($event)">
      </st-foreground-notifications>`
})
class TestStFNComponent {
   notifications: StNotificationElement[] = [];
   text: string;
   visible: boolean;
   autoCloseTime: number;
   clickLinkTemplate: EventEmitter<any> = new EventEmitter();
   @ViewChild('notification', {static: false}) dropdownItem: StForegroundNotificationsComponent;

   generateHtmlNotifications(): StNotificationElement[] {
      return [
         {
            html: `<p>The request is understood <a>Check the database</a> <a>Check the database2</a>  </p>`,
            nameEvents: ['doCheckDatabase', 'doCheckDatabaseTwo']
         }];
   }

   generateSimpleNotifications(): StNotificationElement[] {
      return [
         {
            text: `The request is understood`
         }];
   }

   generateMultiLineNotification(): StNotificationElement[] {
      return [{
         text: `Stratio audit failed to connect to Postgres database / second page.The request is understood, but it has been refused
         or access is not allowed. An accompanying error message will explain why.
         This code is used when requests are being denied due to update limits . Other reasons for this status being returned are listed
         alongside the error codes in the table below.The request is understood, but it has been refused or access is not allowed.
         An accompanying error message will explain why. This code is used when requests are being denied due to update limits .`,
         status: 'success'
      },
      {
         text: `Stratio audit failed to connect to Postgres database / second page.The request is understood, but it has been refused
         or access is not allowed. An accompanying error message will explain why.
         This code is used when requests are being denied due to update limits . Other reasons for this status being returned are listed
         alongside the error codes in the table below.The request is understood, but it has been refused or access is not allowed.
         An accompanying error message will explain why. This code is used when requests are being denied due to update limits .`,
         status: 'running'
      }];
   }

   generatePaginationNotification(): StNotificationElement[] {
      return [{
         text: `notification one`,
         status: 'success'
      },
      {
         text: `notification two`,
         status: 'running'
      }];
   }
}

let comp: TestStFNComponent;
let fixture: ComponentFixture<TestStFNComponent>;
let nativeElement: HTMLElement;

describe('StForegroundNotificationsComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StForegroundNotificationsModule],
         declarations: [TestStFNComponent],
         providers: [
            {
               provide: DomSanitizer,
               useValue: {
                  sanitize: () => '<p>The request is understood <a>Check the database</a> <a>Check the database2</a>  </p>',
                  bypassSecurityTrustHtml: () => 'safeString'
               }
            }
         ]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TestStFNComponent);
      comp = fixture.componentInstance;
      comp.notifications = comp.generateSimpleNotifications();
      nativeElement = fixture.nativeElement;
   });

   describe('When visible is true ', () => {
      it('And status is defined as default, The element should contain "default" class', async(() => {
         comp.visible = true;
         comp.notifications[0].status = 'default';
         fixture.detectChanges();

         expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');
         expect(nativeElement.querySelector('.foreground-notification').classList).toContain('default');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('warning');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('success');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('critical');
      }));

      it('And status is defined as sucess, element should contain "success" class', async(() => {
         comp.visible = true;
         comp.notifications[0].status = 'success';
         fixture.detectChanges();

         expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');
         expect(nativeElement.querySelector('.foreground-notification').classList).toContain('success');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('warning');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('default');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('critical');
      }));

      it('And status is defined as warning, element should contain "warning" class', async(() => {
         comp.visible = true;
         comp.notifications[0].status = 'warning';
         fixture.detectChanges();

         expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');
         expect(nativeElement.querySelector('.foreground-notification').classList).toContain('warning');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('default');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('success');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('critical');
      }));

      it('And status is defined as critical, element should contain "critical" class', async(() => {
         comp.visible = true;
         comp.notifications[0].status = 'critical';
         fixture.detectChanges();

         expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');
         expect(nativeElement.querySelector('.foreground-notification').classList).toContain('critical');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('warning');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('success');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('default');
      }));

      it('And status is not defined, element should contain "default" class', async(() => {
         comp.visible = true;
         fixture.detectChanges();

         expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');
         expect(nativeElement.querySelector('.foreground-notification').classList).toContain('default');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('warning');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('success');
         expect(nativeElement.querySelector('.foreground-notification').classList).not.toContain('critical');
      }));

      it('And user click on the close icon, the element should fade out and then hidden', fakeAsync(() => {
         fixture.detectChanges();
         let closeButton: HTMLElement = fixture.debugElement.query(By.css('.close')).nativeElement;
         comp.notifications[0].status = 'success';
         comp.visible = true;
         fixture.detectChanges();
         expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');

         closeButton.click();
         fixture.detectChanges();
         expect(nativeElement.querySelector('st-foreground-notifications').classList).not.toContain('visible');
      }));

      it(`when the property autoCloseTime is set and only have one notification with status success,
          the element should fade out and then hidden in the time set`, fakeAsync(() => {
            comp.autoCloseTime = 1000;
            comp.visible = true;
            comp.notifications[0].status = 'success';
            fixture.detectChanges();
            expect(nativeElement.querySelector('st-foreground-notifications').classList).toContain('visible');
            tick(2000);
            fixture.detectChanges();

            expect(nativeElement.querySelector('st-foreground-notifications').classList).not.toContain('visible');
         }));

      it(`a notification defined with html must be able to control the a href links`, async(() => {
         comp.notifications = comp.generateHtmlNotifications();
         fixture.detectChanges();
         spyOn(comp.clickLinkTemplate, 'emit');
         comp.visible = true;
         comp.notifications[0].status = 'success';
         fixture.detectChanges();
         let hrefLink: HTMLElement = <HTMLElement><any> nativeElement.querySelectorAll('.foreground-notification__html > p > a')[0];
         hrefLink.click();
         fixture.detectChanges();

         expect(comp.clickLinkTemplate.emit).toHaveBeenCalled();
      }));

      it(`A multiline notification must be shown in a single line, when clicking you must display the complete detail`, async(() => {
         comp.notifications = comp.generateMultiLineNotification();
         fixture.detectChanges();
         let showMoreButton: HTMLElement = fixture.debugElement.query(By.css('.link-more')).nativeElement;
         fixture.detectChanges();

         expect(nativeElement.querySelector('.foreground-notification__content').classList).toContain('limit-one-line');

         showMoreButton.click();
         fixture.detectChanges();

         expect(nativeElement.querySelector('.foreground-notification__content').classList).not.toContain('limit-one-line');
      }));

      it(`when we have various notifcations must be able to page`, async(() => {
         comp.notifications = comp.generatePaginationNotification();
         fixture.detectChanges();
         let incrementButton: HTMLElement = fixture.debugElement.query(By.css('.increment-notification')).nativeElement;
         let decrementButton: HTMLElement = fixture.debugElement.query(By.css('.decrement-notification')).nativeElement;
         fixture.detectChanges();

         incrementButton.click();
         fixture.detectChanges();

         expect(nativeElement.querySelectorAll('.foreground-notification__content > span')[0].textContent).toEqual(' notification two ');

         decrementButton.click();
         fixture.detectChanges();

         expect(nativeElement.querySelectorAll('.foreground-notification__content > span')[0].textContent).toEqual(' notification one ');
      }));

      it(`when a notification is removed, if currentNotification page is greater than the current number of notifications,
         this is setted to show the last one`, () => {
         comp.notifications = comp.generatePaginationNotification();
         fixture.detectChanges();
         let incrementButton: HTMLElement = fixture.debugElement.query(By.css('.increment-notification')).nativeElement;
         incrementButton.click();
         fixture.detectChanges();
         // remove the last notification
         comp.notifications = comp.notifications.slice(0, -1);
         fixture.detectChanges();
         expect(nativeElement.querySelectorAll('.foreground-notification__content > span')[0].textContent).toEqual(' notification one ');
      });
   });
});
