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
import { AfterViewInit, ChangeDetectorRef, Component, Input, EventEmitter, Output, ElementRef, OnInit, Renderer2,
   OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { StatusNotification, StNotificationElement } from './st-foreground-notifications.model';

@Component({
   selector: 'st-foreground-notifications',
   templateUrl: 'st-foreground-notifications.html',
   styleUrls: ['st-foreground-notifications.scss'],
   host: {
      '[class.visible]': '_visible'
   },
   changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * @description {Component} [Foreground notifications]
 *
 * Foreground notifications are made to let the user know info about a process she is performing in real time.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-foreground-notifications [notifications]="notifications" [(visible)]="true" [autoCloseTime]="1000"></st-foreground-notifications>
 *
 * ```
 */


export class StForegroundNotificationsComponent implements AfterViewInit, OnChanges, OnInit {

   /** @Input {bollean} [visible=flase] When true the notification is shown */
   @Input()
   set visible(value: boolean) {
      if (value !== undefined) {
         this._visible = value;
         this.visibleChange.emit(this._visible);
      }
      this.cd.markForCheck();
   }
   get visible(): boolean {
      return this._visible;
   }

   /** @Input {autoCloseTime} [autoCloseTime='1000'] Defines the time in milliseconds for autoclose the notification.
    *  The autoclose only applies if only have one notification and status is success
    */
   @Input() autoCloseTime: number;

   /** @Input {StNotificationElement []} [notifications='[]'] Array of notifications */
   @Input() notifications?: StNotificationElement[] = [];

    /** @output {clickLinkTemplate} [click] Event emitted when user click in a href link */
   @Output() clickLinkTemplate: EventEmitter<any> = new EventEmitter();

   /** @output {visibleChange} [click] Event emitted when set param visible */
   @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();

   public currentNotification: number = 1;
   public statusIconValue: string;
   public statusNotificationsValue: string;
   public statusValue: string;
   public showLinkMore: boolean = false;
   public status: string = 'default';

   public _visible: boolean = false;
   public listStatusNotifications: Array<StatusNotification> = [];

   constructor(private cd: ChangeDetectorRef, private elemRef: ElementRef, private renderer: Renderer2) { }

   ngOnInit(): void {
      if (this.autoCloseTime) {
         if ( this.notifications.length === 1 && this.notifications[0].status === 'success') {
            setTimeout(() => this.onClose(), this.autoCloseTime);
         }
      }
      this.fillStatusNotifications();
   }

   ngAfterViewInit(): void {
      let htmlElement = this.elemRef.nativeElement.querySelector('.foreground-notification__html');
      if (htmlElement !== null) {
         this.addStyleLinks(htmlElement);
      }
      if ( this.notifications && this.notifications.length > 0) {
         this.checkOneLine();
      }

      this.cd.detectChanges();
   }

   ngOnChanges(): void {
      if (this.notifications && this.notifications.length < this.currentNotification) {
         this.currentNotification = this.notifications.length;
      }
      this.listStatusNotifications = [];
      this.fillStatusNotifications();
   }

   addStyleLinks(htmlElement: any): void {
      let links = htmlElement.querySelectorAll('a');
      if (links.constructor !== Array) {
         links = (<any>Object).values(links);
      }
      links.forEach((element: any, index: any) => {
         let nameEventEmitter = (this.notifications[this.getIndexCurrentNotification()]).nameEvents[index];
         if (nameEventEmitter) {
            element.addEventListener('click', this.onClickLinkHtmlTemplate.bind(this, nameEventEmitter));
            this.renderer.setStyle(element, 'text-decoration', 'underline');
            this.renderer.setStyle(element, 'cursor', 'pointer');
         }
      });
   }

   checkOneLine(): void {
      let element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
      let currentIndex = this.getIndexCurrentNotification();

      if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
         if (element[currentIndex].offsetHeight > 40) {
            this.listStatusNotifications[currentIndex].showMore = !this.listStatusNotifications[currentIndex].completeText;

            if (this.listStatusNotifications[currentIndex].showMore) {
               this.listStatusNotifications[currentIndex].completeText = false;
               this.renderer.addClass(element[currentIndex], 'limit-one-line');
            }
         } else {
            this.listStatusNotifications[currentIndex].completeText = true;
            if (!this.listStatusNotifications[currentIndex].showMore) {
               this.removeStyleNotification();
            }
         }
      }
      this.checkStatus();
   }

   checkStatus(): void {
      this.statusValue = this.getStatus();
      this.statusIconValue = this.getStatusIcon();
      this.statusNotificationsValue = this.getStatusNotifications();

      this.cd.detectChanges();
   }

   decrementPage(): void {
      this.currentNotification = this.getIndexCurrentNotification();
      setTimeout(() => {
         this.checkOneLine();
         this.cd.detectChanges();
      });
      this.status = this.notifications[this.getIndexCurrentNotification()].status;
   }

   fillStatusNotifications(): void {
      if (this.notifications && this.notifications.length > 0) {
         this.status = this.notifications[this.getIndexCurrentNotification()].status;
         this.checkStatus();
      }

      this.notifications.forEach(() => {
         this.listStatusNotifications.push(new StatusNotification(false, false));
      });
   }

   getIndexCurrentNotification(): number {
      return this.currentNotification - 1;
   }

   getStatus(): string {
      switch (this.status) {
         case 'success':
         case 'warning':
         case 'critical':
         case 'running':
            return this.status;
         default:
            return 'default';
      }
   }

   getStatusIcon(): string {
      switch (this.status) {
         case 'success':
            return 'icon-circle-check';
         case 'warning':
            return 'icon-alert';
         case 'critical':
            return 'icon-info1';
         case 'running':
            return 'icon-info1';
         default:
            return 'default';
      }
   }

   getStatusNotifications(): string {
      return (this.notifications.length > 1) ? 'more-lines' : '';
   }

   incrementPage(): void {
      this.currentNotification = this.currentNotification + 1;
      setTimeout(() => {
         this.checkOneLine();
         this.cd.detectChanges();
      });
      this.status = this.notifications[this.getIndexCurrentNotification()].status;
   }

   onClickLinkHtmlTemplate(event: string): void {
      this.clickLinkTemplate.emit(event);
   }

   onClose(): void {
      this.visible = false;
      this.cd.markForCheck();
   }

   removeStyleNotification(): void {
      let element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
      this.renderer.removeClass(element[this.getIndexCurrentNotification()], 'limit-one-line');
      this.cd.markForCheck();
   }

   showTextComplete(): void {
      let currentIndex = this.getIndexCurrentNotification();
      if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
         this.listStatusNotifications[currentIndex].showMore = false;
         this.listStatusNotifications[currentIndex].completeText = true;
      }
      this.removeStyleNotification();
      this.cd.markForCheck();
   }
}


