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
var StForegroundNotificationsComponent = /** @class */ (function () {
    function StForegroundNotificationsComponent(cd, elemRef, renderer) {
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
    Object.defineProperty(StForegroundNotificationsComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        /** @Input {boolean} [visible=false] When true the notification is shown */
        set: /**
         * \@Input {boolean} [visible=false] When true the notification is shown
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== undefined) {
                this._visible = value;
                this.visibleChange.emit(this._visible);
            }
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.autoCloseTime) {
            if (this.notifications.length === 1 && this.notifications[0].status === 'success') {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.onClose(); }), this.autoCloseTime);
            }
        }
        this.fillStatusNotifications();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var htmlElement = this.elemRef.nativeElement.querySelector('.foreground-notification__html');
        if (htmlElement !== null) {
            this.addStyleLinks(htmlElement);
        }
        if (this.notifications && this.notifications.length > 0) {
            this.checkOneLine();
        }
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.notifications && this.notifications.length < this.currentNotification) {
            this.currentNotification = this.notifications.length;
        }
        this.listStatusNotifications = [];
        this.fillStatusNotifications();
    };
    /**
     * @param {?} htmlElement
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.addStyleLinks = /**
     * @param {?} htmlElement
     * @return {?}
     */
    function (htmlElement) {
        var _this = this;
        /** @type {?} */
        var links = htmlElement.querySelectorAll('a');
        if (links.constructor !== Array) {
            links = ((/** @type {?} */ (Object))).values(links);
        }
        links.forEach((/**
         * @param {?} element
         * @param {?} index
         * @return {?}
         */
        function (element, index) {
            /** @type {?} */
            var nameEventEmitter = (_this.notifications[_this.getIndexCurrentNotification()]).nameEvents[index];
            if (nameEventEmitter) {
                element.addEventListener('click', _this.onClickLinkHtmlTemplate.bind(_this, nameEventEmitter));
                _this.renderer.setStyle(element, 'text-decoration', 'underline');
                _this.renderer.setStyle(element, 'cursor', 'pointer');
            }
        }));
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.checkOneLine = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
        /** @type {?} */
        var currentIndex = this.getIndexCurrentNotification();
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
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.checkStatus = /**
     * @return {?}
     */
    function () {
        this.statusValue = this.getStatus();
        this.statusIconValue = this.getStatusIcon();
        this.statusNotificationsValue = this.getStatusNotifications();
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.decrementPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentNotification = this.getIndexCurrentNotification();
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkOneLine();
            _this.cd.detectChanges();
        }));
        this.status = this.notifications[this.getIndexCurrentNotification()].status;
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.fillStatusNotifications = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.notifications && this.notifications.length > 0) {
            this.status = this.notifications[this.getIndexCurrentNotification()].status;
            this.checkStatus();
        }
        this.notifications.forEach((/**
         * @return {?}
         */
        function () {
            _this.listStatusNotifications.push(new StatusNotification(false, false));
        }));
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getIndexCurrentNotification = /**
     * @return {?}
     */
    function () {
        return this.currentNotification - 1;
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getStatus = /**
     * @return {?}
     */
    function () {
        switch (this.status) {
            case 'success':
            case 'warning':
            case 'critical':
            case 'running':
                return this.status;
            default:
                return 'default';
        }
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getStatusIcon = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.getStatusNotifications = /**
     * @return {?}
     */
    function () {
        return (this.notifications.length > 1) ? 'more-lines' : '';
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.incrementPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.currentNotification = this.currentNotification + 1;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkOneLine();
            _this.cd.detectChanges();
        }));
        this.status = this.notifications[this.getIndexCurrentNotification()].status;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.onClickLinkHtmlTemplate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.clickLinkTemplate.emit(event);
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.visible = false;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.removeStyleNotification = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elemRef.nativeElement.querySelectorAll('.foreground-notification__content');
        this.renderer.removeClass(element[this.getIndexCurrentNotification()], 'limit-one-line');
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StForegroundNotificationsComponent.prototype.showTextComplete = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentIndex = this.getIndexCurrentNotification();
        if (this.listStatusNotifications && this.listStatusNotifications.length > 0) {
            this.listStatusNotifications[currentIndex].showMore = false;
            this.listStatusNotifications[currentIndex].completeText = true;
        }
        this.removeStyleNotification();
        this.cd.markForCheck();
    };
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
    StForegroundNotificationsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    StForegroundNotificationsComponent.propDecorators = {
        visible: [{ type: Input }],
        autoCloseTime: [{ type: Input }],
        notifications: [{ type: Input }],
        clickLinkTemplate: [{ type: Output }],
        visibleChange: [{ type: Output }]
    };
    return StForegroundNotificationsComponent;
}());
export { StForegroundNotificationsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnMvc3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQ2xHLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxrQkFBa0IsRUFBeUIsTUFBTSxxQ0FBcUMsQ0FBQztBQUVoRztJQWdFRyw0Q0FBb0IsRUFBcUIsRUFBVSxPQUFtQixFQUFVLFFBQW1CO1FBQS9FLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7UUFsQjFGLGtCQUFhLEdBQTZCLEVBQUUsQ0FBQzs7OztRQUc1QyxzQkFBaUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUcxRCxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdELHdCQUFtQixHQUFXLENBQUMsQ0FBQztRQUloQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBRTNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsNEJBQXVCLEdBQThCLEVBQUUsQ0FBQztJQUV3QyxDQUFDO0lBcEN4RyxzQkFDSSx1REFBTzs7OztRQU9YO1lBQ0csT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUM7UUFYRCwyRUFBMkU7Ozs7OztRQUMzRSxVQUNZLEtBQWM7WUFDdkIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUN0QixJQUFJLENBQUMs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TTtnQ0FHTixNQUFNOztJQWdMVix5Q0FBQztDQUFBLEFBcE9ELElBb09DO1NBM01ZLGtDQUFrQzs7Ozs7OztJQWtCNUMsMkRBQStCOzs7OztJQUcvQiwyREFBc0Q7Ozs7O0lBR3RELCtEQUFvRTs7Ozs7SUFHcEUsMkRBQW9FOztJQUVwRSxpRUFBdUM7O0lBQ3ZDLDZEQUErQjs7SUFDL0Isc0VBQXdDOztJQUN4Qyx5REFBMkI7O0lBQzNCLDBEQUFxQzs7SUFDckMsb0RBQWtDOztJQUVsQyxzREFBaUM7O0lBQ2pDLHFFQUErRDs7Ozs7SUFFbkQsZ0RBQTZCOzs7OztJQUFFLHFEQUEyQjs7Ozs7SUFBRSxzREFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIsXG4gICBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0YXR1c05vdGlmaWNhdGlvbiwgU3ROb3RpZmljYXRpb25FbGVtZW50IH0gZnJvbSAnLi9zdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zJyxcbiAgIHRlbXBsYXRlVXJsOiAnc3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zLmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJ3N0LWZvcmVncm91bmQtbm90aWZpY2F0aW9ucy5zY3NzJ10sXG4gICBob3N0OiB7XG4gICAgICAnW2NsYXNzLnZpc2libGVdJzogJ192aXNpYmxlJ1xuICAgfSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0ZvcmVncm91bmQgbm90aWZpY2F0aW9uc11cbiAqXG4gKiBGb3JlZ3JvdW5kIG5vdGlmaWNhdGlvbnMgYXJlIG1hZGUgdG8gbGV0IHRoZSB1c2VyIGtub3cgaW5mbyBhYm91dCBhIHByb2Nlc3Mgc2hlIGlzIHBlcmZvcm1pbmcgaW4gcmVhbCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtZm9yZWdyb3VuZC1ub3RpZmljYXRpb25zIFtub3RpZmljYXRpb25zXT1cIm5vdGlmaWNhdGlvbnNcIiBbKHZpc2libGUpXT1cInRydWVcIiBbYXV0b0Nsb3NlVGltZV09XCIxMDAwXCI+PC9zdC1mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbnM+XG4gKlxuICogYGBgXG4gKi9cblxuXG5leHBvcnQgY2xhc3MgU3RGb3JlZ3JvdW5kTm90aWZpY2F0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3Zpc2libGU9ZmFsc2VdIFdoZW4gdHJ1ZSB0aGUgbm90aWZpY2F0aW9uIGlzIHNob3duICovXG4gICBASW5wdXQoKVxuICAgc2V0IHZpc2libGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XG4gICAgICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0aGlzLl92aXNpYmxlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG4gICBnZXQgdmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXNpYmxlO1xuICAgfVxuXG4gICAvKiogQElucHV0IHthdXRvQ2xvc2VUaW1lfSBbYXV0b0Nsb3NlVGltZT0nMTAwMCddIERlZmluZXMgdGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciBhdXRvY2xvc2UgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICAqICBUaGUgYXV0b2Nsb3NlIG9ubHkgYXBwbGllcyBpZiBvbmx5IGhhdmUgb25lIG5vdGlmaWNhdGlvbiBhbmQgc3RhdHVzIGlzIHN1Y2Nlc3NcbiAgICAqL1xuICAgQElucHV0KCkgYXV0b0Nsb3NlVGltZTogbnVtYmVyO1xuXG4gICAvKiogQElucHV0IHtTdE5vdGlmaWNhdGlvbkVsZW1lbnQgW119IFtub3RpZmljYXRpb25zPSdbXSddIEFycmF5IG9mIG5vdGlmaWNhdGlvbnMgKi9cbiAgIEBJbnB1dCgpIG5vdGlmaWNhdGlvbnM/OiBTdE5vdGlmaWNhdGlvbkVsZW1lbnRbXSA9IFtdO1xuXG4gICAgLyoqIEBvdXRwdXQge2NsaWNrTGlua1RlbXBsYXRlfSBbY2xpY2tdIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGNsaWNrIGluIGEgaHJlZiBsaW5rICovXG4gICBAT3V0cHV0KCkgY2xpY2tMaW5rVGVtcGxhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAvKiogQG91dHB1dCB7dmlzaWJsZUNoYW5nZX0gW2NsaWNrXSBFdmVudCBlbWl0dGVkIHdoZW4gc2V0IHBhcmFtIHZpc2libGUgKi9cbiAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIHB1YmxpYyBjdXJyZW50Tm90aWZpY2F0aW9uOiBudW1iZXIgPSAxO1xuICAgcHVibGljIHN0YXR1c0ljb25WYWx1ZTogc3RyaW5nO1xuICAgcHVibGljIHN0YXR1c05vdGlmaWNhdGlvbnNWYWx1ZTogc3RyaW5nO1xuICAgcHVibGljIHN0YXR1c1ZhbHVlOiBzdHJpbmc7XG4gICBwdWJsaWMgc2hvd0xpbmtNb3JlOiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgc3RhdHVzOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG5cbiAgIHB1YmxpYyBfdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGxpc3RTdGF0dXNOb3RpZmljYXRpb25zOiBBcnJheTxTdGF0dXNOb3RpZmljYXRpb24+ID0gW107XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuYXV0b0Nsb3NlVGltZSkge1xuICAgICAgICAgaWYgKCB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAxICYmIHRoaXMubm90aWZpY2F0aW9uc1swXS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm9uQ2xvc2UoKSwgdGhpcy5hdXRvQ2xvc2VUaW1lKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsbFN0YXR1c05vdGlmaWNhdGlvbnMoKTtcbiAgIH1cblxuICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgbGV0IGh0bWxFbGVtZW50ID0gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVncm91bmQtbm90aWZpY2F0aW9uX19odG1sJyk7XG4gICAgICBpZiAoaHRtbEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgIHRoaXMuYWRkU3R5bGVMaW5rcyhodG1sRWxlbWVudCk7XG4gICAgICB9XG4gICAgICBpZiAoIHRoaXMubm90aWZpY2F0aW9ucyAmJiB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgdGhpcy5jaGVja09uZUxpbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICB9XG5cbiAgIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9ucyAmJiB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoIDwgdGhpcy5jdXJyZW50Tm90aWZpY2F0aW9uKSB7XG4gICAgICAgICB0aGlzLmN1cnJlbnROb3RpZmljYXRpb24gPSB0aGlzLm5vdGlmaWNhdGlvbnMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5maWxsU3RhdHVzTm90aWZpY2F0aW9ucygpO1xuICAgfVxuXG4gICBhZGRTdHlsZUxpbmtzKGh0bWxFbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgIGxldCBsaW5rcyA9IGh0bWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcbiAgICAgIGlmIChsaW5rcy5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHtcbiAgICAgICAgIGxpbmtzID0gKDxhbnk+T2JqZWN0KS52YWx1ZXMobGlua3MpO1xuICAgICAgfVxuICAgICAgbGlua3MuZm9yRWFjaCgoZWxlbWVudDogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICBsZXQgbmFtZUV2ZW50RW1pdHRlciA9ICh0aGlzLm5vdGlmaWNhdGlvbnNbdGhpcy5nZXRJbmRleEN1cnJlbnROb3RpZmljYXRpb24oKV0pLm5hbWVFdmVudHNbaW5kZXhdO1xuICAgICAgICAgaWYgKG5hbWVFdmVudEVtaXR0ZXIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tMaW5rSHRtbFRlbXBsYXRlLmJpbmQodGhpcywgbmFtZUV2ZW50RW1pdHRlcikpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAndGV4dC1kZWNvcmF0aW9uJywgJ3VuZGVybGluZScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnY3Vyc29yJywgJ3BvaW50ZXInKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxuXG4gICBjaGVja09uZUxpbmUoKTogdm9pZCB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbl9fY29udGVudCcpO1xuICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCk7XG5cbiAgICAgIGlmICh0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zICYmIHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgaWYgKGVsZW1lbnRbY3VycmVudEluZGV4XS5vZmZzZXRIZWlnaHQgPiA0MCkge1xuICAgICAgICAgICAgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9uc1tjdXJyZW50SW5kZXhdLnNob3dNb3JlID0gIXRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnNbY3VycmVudEluZGV4XS5jb21wbGV0ZVRleHQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zW2N1cnJlbnRJbmRleF0uc2hvd01vcmUpIHtcbiAgICAgICAgICAgICAgIHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnNbY3VycmVudEluZGV4XS5jb21wbGV0ZVRleHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFtjdXJyZW50SW5kZXhdLCAnbGltaXQtb25lLWxpbmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zW2N1cnJlbnRJbmRleF0uY29tcGxldGVUZXh0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9uc1tjdXJyZW50SW5kZXhdLnNob3dNb3JlKSB7XG4gICAgICAgICAgICAgICB0aGlzLnJlbW92ZVN0eWxlTm90aWZpY2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrU3RhdHVzKCk7XG4gICB9XG5cbiAgIGNoZWNrU3RhdHVzKCk6IHZvaWQge1xuICAgICAgdGhpcy5zdGF0dXNWYWx1ZSA9IHRoaXMuZ2V0U3RhdHVzKCk7XG4gICAgICB0aGlzLnN0YXR1c0ljb25WYWx1ZSA9IHRoaXMuZ2V0U3RhdHVzSWNvbigpO1xuICAgICAgdGhpcy5zdGF0dXNOb3RpZmljYXRpb25zVmFsdWUgPSB0aGlzLmdldFN0YXR1c05vdGlmaWNhdGlvbnMoKTtcblxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICB9XG5cbiAgIGRlY3JlbWVudFBhZ2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmN1cnJlbnROb3RpZmljYXRpb24gPSB0aGlzLmdldEluZGV4Q3VycmVudE5vdGlmaWNhdGlvbigpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICB0aGlzLmNoZWNrT25lTGluZSgpO1xuICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5ub3RpZmljYXRpb25zW3RoaXMuZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCldLnN0YXR1cztcbiAgIH1cblxuICAgZmlsbFN0YXR1c05vdGlmaWNhdGlvbnMoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5ub3RpZmljYXRpb25zICYmIHRoaXMubm90aWZpY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMubm90aWZpY2F0aW9uc1t0aGlzLmdldEluZGV4Q3VycmVudE5vdGlmaWNhdGlvbigpXS5zdGF0dXM7XG4gICAgICAgICB0aGlzLmNoZWNrU3RhdHVzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubm90aWZpY2F0aW9ucy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgIHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnMucHVzaChuZXcgU3RhdHVzTm90aWZpY2F0aW9uKGZhbHNlLCBmYWxzZSkpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIGdldEluZGV4Q3VycmVudE5vdGlmaWNhdGlvbigpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE5vdGlmaWNhdGlvbiAtIDE7XG4gICB9XG5cbiAgIGdldFN0YXR1cygpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoICh0aGlzLnN0YXR1cykge1xuICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgIGNhc2UgJ2NyaXRpY2FsJzpcbiAgICAgICAgIGNhc2UgJ3J1bm5pbmcnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzO1xuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnZGVmYXVsdCc7XG4gICAgICB9XG4gICB9XG5cbiAgIGdldFN0YXR1c0ljb24oKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAodGhpcy5zdGF0dXMpIHtcbiAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgcmV0dXJuICdpY29uLWNpcmNsZS1jaGVjayc7XG4gICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgIHJldHVybiAnaWNvbi1hbGVydCc7XG4gICAgICAgICBjYXNlICdjcml0aWNhbCc6XG4gICAgICAgICAgICByZXR1cm4gJ2ljb24taW5mbzEnO1xuICAgICAgICAgY2FzZSAncnVubmluZyc6XG4gICAgICAgICAgICByZXR1cm4gJ2ljb24taW5mbzEnO1xuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnZGVmYXVsdCc7XG4gICAgICB9XG4gICB9XG5cbiAgIGdldFN0YXR1c05vdGlmaWNhdGlvbnMoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAodGhpcy5ub3RpZmljYXRpb25zLmxlbmd0aCA+IDEpID8gJ21vcmUtbGluZXMnIDogJyc7XG4gICB9XG5cbiAgIGluY3JlbWVudFBhZ2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmN1cnJlbnROb3RpZmljYXRpb24gPSB0aGlzLmN1cnJlbnROb3RpZmljYXRpb24gKyAxO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICB0aGlzLmNoZWNrT25lTGluZSgpO1xuICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5ub3RpZmljYXRpb25zW3RoaXMuZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCldLnN0YXR1cztcbiAgIH1cblxuICAgb25DbGlja0xpbmtIdG1sVGVtcGxhdGUoZXZlbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5jbGlja0xpbmtUZW1wbGF0ZS5lbWl0KGV2ZW50KTtcbiAgIH1cblxuICAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcmVtb3ZlU3R5bGVOb3RpZmljYXRpb24oKTogdm9pZCB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlZ3JvdW5kLW5vdGlmaWNhdGlvbl9fY29udGVudCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50W3RoaXMuZ2V0SW5kZXhDdXJyZW50Tm90aWZpY2F0aW9uKCldLCAnbGltaXQtb25lLWxpbmUnKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHNob3dUZXh0Q29tcGxldGUoKTogdm9pZCB7XG4gICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5nZXRJbmRleEN1cnJlbnROb3RpZmljYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zICYmIHRoaXMubGlzdFN0YXR1c05vdGlmaWNhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgdGhpcy5saXN0U3RhdHVzTm90aWZpY2F0aW9uc1tjdXJyZW50SW5kZXhdLnNob3dNb3JlID0gZmFsc2U7XG4gICAgICAgICB0aGlzLmxpc3RTdGF0dXNOb3RpZmljYXRpb25zW2N1cnJlbnRJbmRleF0uY29tcGxldGVUZXh0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlU3R5bGVOb3RpZmljYXRpb24oKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG59XG5cblxuIl19