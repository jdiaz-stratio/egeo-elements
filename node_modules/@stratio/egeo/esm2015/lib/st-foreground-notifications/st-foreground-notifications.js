/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-foreground-notifications/st-foreground-notifications.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { ChangeDetectorRef, Component, Input, EventEmitter, Output, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { StatusNotification } from './st-foreground-notifications.model';
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
export class StForegroundNotificationsComponent {
    /**
     * @param {?} cd
     * @param {?} elemRef
     * @param {?} renderer
     */
    constructor(cd, elemRef, renderer) {
        this.cd = cd;
        this.elemRef = elemRef;
        this.renderer = renderer;
        /**
         * \@Input {StNotificationElement []} [notifications='[]'] Array of notifications
         */
        this.notifications = [];
        /**
         * \@output {clickLinkTemplate} [click] Event emitted when user click in a href link
         */
        this.clickLinkTemplate = new EventEmitter();
        /**
         * \@output {visibleChange} [click] Event emitted when set param visible
         */
        this.visibleChange = new EventEmitter();
        this.currentNotification = 1;
        this.showLinkMore = false;
        this.status = 'default';
        this._visible = false;
        this.listStatusNotifications = [];
    }
    /**
     * \@Input {boolean} [visible=false] When true the notification is shown
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (value !== undefined) {
            this._visible = value;
            this.visibleChange.emit(this._visible);
        }
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.autoCloseTime) {
            if (this.notifications.length === 1 && this.notifications[0].status === 'success') {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.onClose()), this.autoCloseTime);
            }
        }
        this.fillStatusNotifications();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        let htmlElement = this.elemRef.nativeElement.querySelector('.foreground-notification__html');
        if (htmlElement !== null) {
            this.addStyleLinks(htmlElement);
        }
        if (this.notifications && this.notifications.length > 0) {
            this.checkOneLine();
        }
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.notifications && this.notifications.length < this.currentNotification) {
            this.currentNotification = this.notifications.length;
        }
        this.listStatusNotifications = [];
        this.fillStatusNotifications();
    }
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    addStyleLinks(htmlElement) {
        /** @type {?} */
        let links = htmlElement.querySelectorAll('a');
        if (links.constructor !== Array) {
            links = ((/** @type {?} */ (Object))).values(links);
        }
        links.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        (element, index) => {
            /** @type {?} */
            let nameEventEmitter = (this.notifications[this.getIndexCurrentNotification()]).nameEvents[index];
            if (nameEventEmitter) {
                element.addEventListener('click', this.onClickLinkHtmlTemplate.bind(this, nameEventEmitter));
                this.renderer.setStyle(element, 'text-decoration', 'underline');
                this.renderer.setStyle(element, 'cursor', 'pointer');
            }
        }));
    }
    /**
     * @return {?}
     */
    checkOneLine() {
        /** @type {?} */
        let element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
        /** @type {?} */
        let currentIndex = this.getIndexCurrentNotification();
        if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
            if (element[currentIndex].offsetHeight > 40) {
                this.listStatusNotifications[currentIndex].showMore = !this.listStatusNotifications[currentIndex].completeText;
                if (this.listStatusNotifications[currentIndex].showMore) {
                    this.listStatusNotifications[currentIndex].completeText = false;
                    this.renderer.addClass(element[currentIndex], 'limit-one-line');
                }
            }
            else {
                this.listStatusNotifications[currentIndex].completeText = true;
                if (!this.listStatusNotifications[currentIndex].showMore) {
                    this.removeStyleNotification();
                }
            }
        }
        this.checkStatus();
    }
    /**
     * @return {?}
     */
    checkStatus() {
        this.statusValue = this.getStatus();
        this.statusIconValue = this.getStatusIcon();
        this.statusNotificationsValue = this.getStatusNotifications();
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    decrementPage() {
        this.currentNotification = this.getIndexCurrentNotification();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkOneLine();
            this.cd.detectChanges();
        }));
        this.status = this.notifications[this.getIndexCurrentNotification()].status;
    }
    /**
     * @return {?}
     */
    fillStatusNotifications() {
        if (this.notifications && this.notifications.length > 0) {
            this.status = this.notifications[this.getIndexCurrentNotification()].status;
            this.checkStatus();
        }
        this.notifications.forEach((/**
         * @return {?}
         */
        () => {
            this.listStatusNotifications.push(new StatusNotification(false, false));
        }));
    }
    /**
     * @return {?}
     */
    getIndexCurrentNotification() {
        return this.currentNotification - 1;
    }
    /**
     * @return {?}
     */
    getStatus() {
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
    /**
     * @return {?}
     */
    getStatusIcon() {
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
    /**
     * @return {?}
     */
    getStatusNotifications() {
        return (this.notifications.length > 1) ? 'more-lines' : '';
    }
    /**
     * @return {?}
     */
    incrementPage() {
        this.currentNotification = this.currentNotification + 1;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkOneLine();
            this.cd.detectChanges();
        }));
        this.status = this.notifications[this.getIndexCurrentNotification()].status;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickLinkHtmlTemplate(event) {
        this.clickLinkTemplate.emit(event);
    }
    /**
     * @return {?}
     */
    onClose() {
        this.visible = false;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    removeStyleNotification() {
        /** @type {?} */
        let element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
        this.renderer.removeClass(element[this.getIndexCurrentNotification()], 'limit-one-line');
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    showTextComplete() {
        /** @type {?} */
        let currentIndex = this.getIndexCurrentNotification();
        if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
            this.listStatusNotifications[currentIndex].showMore = false;
            this.listStatusNotifications[currentIndex].completeText = true;
        }
        this.removeStyleNotification();
        this.cd.markForCheck();
    }
}
StForegroundNotificationsComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-foreground-notifications',
                template: "<!--\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n    SPDX-License-Identifier: Apache-2.0.\n-->\n<div class=\"foreground-notification__component\">\n   <div class=\"foreground-notification__pagination\" [ngClass]=\"statusValue\" *ngIf=\"notifications.length > 1\">\n      <button class=\"decrement-notification\" [disabled]=\"currentNotification === 1\" (click)=\"decrementPage()\"><i class=\"icon-arrow2_left\"></i></button>\n      <span>{{currentNotification}}</span>\n      <span>of</span>\n      <span>{{notifications.length}}</span>\n      <button class=\"increment-notification\" [disabled]=\"currentNotification === notifications.length \" (click)=\"incrementPage()\"><i class=\"icon-arrow2_right\"></i></button>\n   </div>\n\n   <div *ngIf=\"notifications.length > 0\" class=\"foreground-notification\" [ngClass]=\"[statusValue, statusNotificationsValue]\">\n      <div class=\"foreground-notification__container\">\n         <i class=\"status\" [ngClass]=\"statusIconValue\"></i>\n         <div class=\"foreground-notification__content\" *ngFor=\"let notification of notifications; let index=index\">\n            <span class=\"foreground-notification__html\" *ngIf=\"notification.html && index === currentNotification - 1\" [innerHtml]=\"notifications[currentNotification - 1].html\"></span>\n            <span  *ngIf=\"!notification.html && index === getIndexCurrentNotification()\">\n               {{notifications[getIndexCurrentNotification()].text}}\n            </span>\n            <a class=\"link-more\" *ngIf=\"listStatusNotifications[index] && listStatusNotifications[index].showMore && index === currentNotification - 1\" (click)=\"showTextComplete()\">...More</a>\n         </div>\n      </div>\n\n      <i class=\"close icon-cross\" (click)=\"onClose()\"></i>\n   </div>\n</div>\n",
                host: {
                    '[class.visible]': '_visible'
                },
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{display:flex;flex-direction:column;opacity:0;padding-left:15px;padding-right:15px;padding-top:4px;pointer-events:none;transition-duration:1s;transition-property:opacity}:host .foreground-notification{display:flex;font-size:14px;padding:8px 15px;position:relative;text-align:justify;width:auto;align-items:center}:host .foreground-notification .close{cursor:pointer;font-size:18px;flex-direction:row-reverse;margin-left:auto;right:11px;top:11px}:host .foreground-notification .link-more{cursor:pointer;padding-left:10px;padding-right:60px;text-decoration:underline}:host .foreground-notification.critical,:host .foreground-notification.running,:host .foreground-notification.success,:host .foreground-notification.warning{border-radius:4px}:host .foreground-notification.more-lines{border-top-left-radius:0;border-bottom-left-radius:0}:host .foreground-notification__component{display:flex;flex-direction:row;justify-content:center;min-height:40px}:host .foreground-notification__pagination{align-items:center;border-top-left-radius:4px;border-bottom-left-radius:4px;color:#fff;display:flex;font-size:1rem;height:40px;padding:5px}:host .foreground-notification__pagination.critical{background-color:#b2212a}:host .foreground-notification__pagination.success{background-color:#0a885a}:host .foreground-notification__pagination.warning{background-color:#ec7e13}:host .foreground-notification__pagination.running{background-color:#065eb2}:host .foreground-notification__pagination.default{border:0;color:#111;box-shadow:0 1px 4px 1px rgba(124,124,124,.15)}:host .foreground-notification__pagination span:nth-child(2){margin-left:5px}:host .foreground-notification__pagination span:nth-child(3){margin-left:5px;margin-right:5px}:host .foreground-notification__pagination span:nth-child(4){margin-right:5px}:host .foreground-notification__pagination i{cursor:pointer}:host .foreground-notification__container{align-items:flex-start;display:flex;justify-content:center;margin-right:60px;text-align:justify;width:100%}:host .foreground-notification__container i{font-size:18px;margin-right:10px}:host .foreground-notification__pagination.more-lines{margin:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host .foreground-notification__content{display:flex}:host .foreground-notification__content.limit-one-line span{display:-webkit-box;line-height:16px;max-height:16px;overflow:hidden;padding:4px 0;text-overflow:ellipsis;-webkit-line-clamp:1}:host.visible{opacity:1;pointer-events:all;transition-duration:1s;transition-property:opacity}"]
            }] }
];
/** @nocollapse */
StForegroundNotificationsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
StForegroundNotificationsComponent.propDecorators = {
    visible: [{ type: Input }],
    autoCloseTime: [{ type: Input }],
    notifications: [{ type: Input }],
    clickLinkTemplate: [{ type: Output }],
    visibleChange: [{ type: Output }]
};
if (false) {
    /**
     * \@Input {autoCloseTime} [autoCloseTime='1000'] Defines the time in milliseconds for autoclose the notification.
     *  The autoclose only applies if only have one notification and status is success
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.autoCloseTime;
    /**
     * \@Input {StNotificationElement []} [notifications='[]'] Array of notifications
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.notifications;
    /**
     * \@output {clickLinkTemplate} [click] Event emitted when user click in a href link
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.clickLinkTemplate;
    /**
     * \@output {visibleChange} [click] Event emitted when set param visible
     * @type {?}
     */
    StForegroundNotificationsComponent.prototype.visibleChange;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.currentNotification;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.statusIconValue;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.statusNotificationsValue;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.statusValue;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.showLinkMore;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.status;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype._visible;
    /** @type {?} */
    StForegroundNotificationsComponent.prototype.listStatusNotifications;
    /**
     * @type {?}
     * @private
     */
    StForegroundNotificationsComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StForegroundNotificationsComponent.prototype.elemRef;
    /**
     * @type {?}
     * @private
     */
    StForegroundNotificationsComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnMvc3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQ2xHLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxrQkFBa0IsRUFBeUIsTUFBTSxxQ0FBcUMsQ0FBQztBQVdoRzs7Ozs7Ozs7Ozs7OztHQWFHO0FBR0gsTUFBTSxPQUFPLGtDQUFrQzs7Ozs7O0lBdUM1QyxZQUFvQixFQUFxQixFQUFVLE9BQW1CLEVBQVUsUUFBbUI7UUFBL0UsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzs7OztRQWxCMUYsa0JBQWEsR0FBNkIsRUFBRSxDQUFDOzs7O1FBRzVDLHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRzFELGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0Qsd0JBQW1CLEdBQVcsQ0FBQyxDQUFDO1FBSWhDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFFM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQiw0QkFBdUIsR0FBOEIsRUFBRSxDQUFDO0lBRXdDLENBQUM7Ozs7OztJQXBDeEcsSUFDSSxPQUFPLENBQUMsS0FBYztRQUN2QixJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIs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QUEyQjs7SUFDM0IsMERBQXFDOztJQUNyQyxvREFBa0M7O0lBRWxDLHNEQUFpQzs7SUFDakMscUVBQStEOzs7OztJQUVuRCxnREFBNkI7Ozs7O0lBQUUscURBQTJCOzs7OztJQUFFLHNEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMixcbiAgIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RhdHVzTm90aWZpY2F0aW9uLCBTdE5vdGlmaWNhdGlvbkVsZW1lbnQgfSBmcm9tICcuL3N0LWZvcmVncm91bmQtbm90aWZpY2F0aW9ucy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnMnLFxuICAgdGVtcGxhdGVVcmw6ICdzdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnMuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnc3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zLnNjc3MnXSxcbiAgIGhvc3Q6IHtcbiAgICAgICdbY2xhc3MudmlzaWJsZV0nOiAnX3Zpc2libGUnXG4gICB9LFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbRm9yZWdyb3VuZCBub3RpZmljYXRpb25zXVxuICpcbiAqIEZvcmVncm91bmQgbm90aWZpY2F0aW9ucyBhcmUgbWFkZSB0byBsZXQgdGhlIHVzZXIga25vdyBpbmZvIGFib3V0IGEgcHJvY2VzcyBzaGUgaXMgcGVyZm9ybWluZyBpbiByZWFsIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnMgW25vdGlmaWNhdGlvbnNdPVwibm90aWZpY2F0aW9uc1wiIFsodmlzaWJsZSldPVwidHJ1ZVwiIFthdXRvQ2xvc2VUaW1lXT1cIjEwMDBcIj48L3N0LWZvcmVncm91bmQtbm90aWZpY2F0aW9ucz5cbiAqXG4gKiBgYGBcbiAqL1xuXG5cbmV4cG9ydCBjbGFzcyBTdEZvcmVncm91bmROb3RpZmljYXRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQge1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbdmlzaWJsZT1mYWxzZV0gV2hlbiB0cnVlIHRoZSBub3RpZmljYXRpb24gaXMgc2hvd24gKi9cbiAgIEBJbnB1dCgpXG4gICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMuX3Zpc2libGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cbiAgIGdldCB2aXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XG4gICB9XG5cbiAgIC8qKiBASW5wdXQge2F1dG9DbG9zZVRpbWV9IFthdXRvQ2xvc2VUaW1lPScxMDAwJ10gRGVmaW5lcyB0aGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIGF1dG9jbG9zZSB0aGUgbm90aWZpY2F0aW9uLlxuICAgICogIFRoZSBhdXRvY2xvc2Ugb25seSBhcHBsaWVzIGlmIG9ubHkgaGF2ZSBvbmUgbm90aWZpY2F0aW9uIGFuZCBzdGF0dXMgaXMgc3VjY2Vzc1xuICAgICovXG4gICBASW5wdXQoKSBhdXRvQ2xvc2VUaW1lOiBudW1iZXI7XG5cbiAgIC8qKiBASW5wdXQge1N0Tm90aWZpY2F0aW9uRWxlbWVudCBbXX0gW25vdGlmaWNhdGlvbnM9J1tdJ10gQXJyYXkgb2Ygbm90aWZpY2F0aW9ucyAqL1xuICAgQElucHV0KCkgbm90aWZpY2F0aW9ucz86IFN0Tm90aWZpY2F0aW9uRWxlbWVudFtdID0gW107XG5cbiAgICAvKiogQG91dHB1dCB7Y2xpY2tMaW5rVGVtcGxhdGV9IFtjbGlja10gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgY2xpY2sgaW4gYSBocmVmIGxpbmsgKi9cbiAgIEBPdXRwdXQoKSBjbGlja0xpbmtUZW1wbGF0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIC8qKiBAb3V0cHV0IHt2aXNpYmxlQ2hhbmdlfSBbY2xpY2tdIEV2ZW50IGVtaXR0ZWQgd2hlbiBzZXQgcGFyYW0gdmlzaWJsZSAqL1xuICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgcHVibGljIGN1cnJlbnROb3RpZmljYXRpb246IG51bWJlciA9IDE7XG4gICBwdWJsaWMgc3RhdHVzSWNvblZhbHVlOiBzdHJpbmc7XG4gICBwdWJsaWMgc3RhdHVzTm90aWZpY2F0aW9uc1ZhbHVlOiBzdHJpbmc7XG4gICBwdWJsaWMgc3RhdHVzVmFsdWU6IHN0cmluZztcbiAgIHB1YmxpYyBzaG93TGlua01vcmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBzdGF0dXM6IHN0cmluZyA9ICdkZWZhdWx0JztcblxuICAgcHVibGljIF92aXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgbGlzdFN0YXR1c05vdGlmaWNhdGlvbnM6IEFycmF5PFN0YXR1c05vdGlmaWNhdGlvbj4gPSBbXTtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5hdXRvQ2xvc2VUaW1lKSB7XG4gICAgICAgICBpZiAoIHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPT09IDEgJiYgdGhpcy5ub3RpZmljYXRpb25zWzBdLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMub25DbG9zZSgpLCB0aGlzLmF1dG9DbG9zZVRpbWUpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5maWxsU3RhdHVzTm90aWZpY2F0aW9ucygpO1xuICAgfVxuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICBsZXQgaHRtbEVsZW1lbnQgPSB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWdyb3VuZC1ub3RpZmljYXRpb25fX2h0bWwnKTtcbiAgICAgIGlmIChodG1sRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgdGhpcy5hZGRTdHlsZUxpbmtzKGh0bWxFbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIGlmICggdGhpcy5ub3RpZmljYXRpb25zICYmIHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICB0aGlzLmNoZWNrT25lTGluZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgIH1cblxuICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25zICYmIHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPCB0aGlzLmN1cnJlbnROb3RpZmljYXRpb24pIHtcbiAgICAgICAgIHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbiA9IHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGg7XG4gICAgICB9XG4gICAgICB0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zID0gW107XG4gICAgICB0aGlzLmZpbGxTdGF0dXNOb3RpZmljYXRpb25zKCk7XG4gICB9XG5cbiAgIGFkZFN0eWxlTGlua3MoaHRtbEVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgICAgbGV0IGxpbmtzID0gaHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgICAgaWYgKGxpbmtzLmNvbnN0cnVjdG9yICE9PSBBcnJheSkge1xuICAgICAgICAgbGlua3MgPSAoPGFueT5PYmplY3QpLnZhbHVlcyhsaW5rcyk7XG4gICAgICB9XG4gICAgICBsaW5rcy5mb3JFYWNoKChlbGVtZW50OiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgIGxldCBuYW1lRXZlbnRFbWl0dGVyID0gKHRoaXMubm90aWZpY2F0aW9uc1t0aGlzLmdldEluZGV4Q3VycmVudE5vdGlmaWNhdGlvbigpXSkubmFtZUV2ZW50c1tpbmRleF07XG4gICAgICAgICBpZiAobmFtZUV2ZW50RW1pdHRlcikge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0xpbmtIdG1sVGVtcGxhdGUuYmluZCh0aGlzLCBuYW1lRXZlbnRFbWl0dGVyKSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG5cbiAgIGNoZWNrT25lTGluZSgpOiB2b2lkIHtcbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVncm91bmQtbm90aWZpY2F0aW9uX19jb250ZW50Jyk7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5nZXRJbmRleEN1cnJlbnROb3RpZmljYXRpb24oKTtcblxuICAgICAgaWYgKHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnMgJiYgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICBpZiAoZWxlbWVudFtjdXJyZW50SW5kZXhdLm9mZnNldEhlaWdodCA+IDQwKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zW2N1cnJlbnRJbmRleF0uc2hvd01vcmUgPSAhdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9uc1tjdXJyZW50SW5kZXhdLmNvbXBsZXRlVGV4dDtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnNbY3VycmVudEluZGV4XS5zaG93TW9yZSkge1xuICAgICAgICAgICAgICAgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9uc1tjdXJyZW50SW5kZXhdLmNvbXBsZXRlVGV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50W2N1cnJlbnRJbmRleF0sICdsaW1pdC1vbmUtbGluZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnNbY3VycmVudEluZGV4XS5jb21wbGV0ZVRleHQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zW2N1cnJlbnRJbmRleF0uc2hvd01vcmUpIHtcbiAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3R5bGVOb3RpZmljYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKTtcbiAgIH1cblxuICAgY2hlY2tTdGF0dXMoKTogdm9pZCB7XG4gICAgICB0aGlzLnN0YXR1c1ZhbHVlID0gdGhpcy5nZXRTdGF0dXMoKTtcbiAgICAgIHRoaXMuc3RhdHVzSWNvblZhbHVlID0gdGhpcy5nZXRTdGF0dXNJY29uKCk7XG4gICAgICB0aGlzLnN0YXR1c05vdGlmaWNhdGlvbnNWYWx1ZSA9IHRoaXMuZ2V0U3RhdHVzTm90aWZpY2F0aW9ucygpO1xuXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgIH1cblxuICAgZGVjcmVtZW50UGFnZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbiA9IHRoaXMuZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRoaXMuY2hlY2tPbmVMaW5lKCk7XG4gICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLm5vdGlmaWNhdGlvbnNbdGhpcy5nZXRJbmRleEN1cnJlbnROb3RpZmljYXRpb24oKV0uc3RhdHVzO1xuICAgfVxuXG4gICBmaWxsU3RhdHVzTm90aWZpY2F0aW9ucygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvbnMgJiYgdGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5ub3RpZmljYXRpb25zW3RoaXMuZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCldLnN0YXR1cztcbiAgICAgICAgIHRoaXMuY2hlY2tTdGF0dXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5ub3RpZmljYXRpb25zLmZvckVhY2goKCkgPT4ge1xuICAgICAgICAgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9ucy5wdXNoKG5ldyBTdGF0dXNOb3RpZmljYXRpb24oZmFsc2UsIGZhbHNlKSk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCk6IG51bWJlciB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50Tm90aWZpY2F0aW9uIC0gMTtcbiAgIH1cblxuICAgZ2V0U3RhdHVzKCk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKHRoaXMuc3RhdHVzKSB7XG4gICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgY2FzZSAnY3JpdGljYWwnOlxuICAgICAgICAgY2FzZSAncnVubmluZyc6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdkZWZhdWx0JztcbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0U3RhdHVzSWNvbigpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXR1cykge1xuICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICByZXR1cm4gJ2ljb24tY2lyY2xlLWNoZWNrJztcbiAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgICAgcmV0dXJuICdpY29uLWFsZXJ0JztcbiAgICAgICAgIGNhc2UgJ2NyaXRpY2FsJzpcbiAgICAgICAgICAgIHJldHVybiAnaWNvbi1pbmZvMSc7XG4gICAgICAgICBjYXNlICdydW5uaW5nJzpcbiAgICAgICAgICAgIHJldHVybiAnaWNvbi1pbmZvMSc7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdkZWZhdWx0JztcbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0U3RhdHVzTm90aWZpY2F0aW9ucygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMSkgPyAnbW9yZS1saW5lcycgOiAnJztcbiAgIH1cblxuICAgaW5jcmVtZW50UGFnZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbiA9IHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbiArIDE7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRoaXMuY2hlY2tPbmVMaW5lKCk7XG4gICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLm5vdGlmaWNhdGlvbnNbdGhpcy5nZXRJbmRleEN1cnJlbnROb3RpZmljYXRpb24oKV0uc3RhdHVzO1xuICAgfVxuXG4gICBvbkNsaWNrTGlua0h0bWxUZW1wbGF0ZShldmVudDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmNsaWNrTGlua1RlbXBsYXRlLmVtaXQoZXZlbnQpO1xuICAgfVxuXG4gICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICByZW1vdmVTdHlsZU5vdGlmaWNhdGlvbigpOiB2b2lkIHtcbiAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVncm91bmQtbm90aWZpY2F0aW9uX19jb250ZW50Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW1lbnRbdGhpcy5nZXRJbmRleEN1cnJlbnROb3RpZmljYXRpb24oKV0sICdsaW1pdC1vbmUtbGluZScpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgc2hvd1RleHRDb21wbGV0ZSgpOiB2b2lkIHtcbiAgICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmdldEluZGV4Q3VycmVudE5vdGlmaWNhdGlvbigpO1xuICAgICAgaWYgKHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnMgJiYgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICB0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zW2N1cnJlbnRJbmRleF0uc2hvd01vcmUgPSBmYWxzZTtcbiAgICAgICAgIHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnNbY3VycmVudEluZGV4XS5jb21wbGV0ZVRleHQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5yZW1vdmVTdHlsZU5vdGlmaWNhdGlvbigpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cbn1cblxuXG4iXX0=