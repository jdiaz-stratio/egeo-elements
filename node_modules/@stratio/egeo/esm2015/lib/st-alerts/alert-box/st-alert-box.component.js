/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/alert-box/st-alert-box.component.ts
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
import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { STALERT_SEVERITY, StAlert } from '../st-alerts.model';
/**
 * @description {Component} [Alert Box]
 *
 * Alert box is made to let the user know errors or information about he is trying to do.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-alert-box [alert]="alert" [showInConsole]="showInConsole"></st-alert-box>
 *
 * ```
 */
export class StAlertBoxComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [showInConsole=false] Display logs in console
         */
        this.showInConsole = false;
        /**
         * \@Output {StAlertLink} [clickLink=] Event emitted when link is clicked
         */
        this.clickLink = new EventEmitter();
        /**
         * \@Output {boolean} [close=] Event emitted when alert is closed
         */
        this.close = new EventEmitter();
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.alert.opacity.subscribe((/**
         * @param {?} opacity
         * @return {?}
         */
        opacity => this.changeOpacity(opacity)));
        this.alert.notify();
        if (this.showInConsole) {
            this.notifyConsole();
        }
        this.severityColorValue = this.getSeverityColor();
        this.iconValue = this.getIcon();
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.alert.cancel();
        this.close.emit(true);
    }
    /**
     * @return {?}
     */
    getIcon() {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR: return 'icon-circle-alert';
            case STALERT_SEVERITY.WARNING: return 'icon-alert';
            case STALERT_SEVERITY.SUCCESS: return 'icon-circle-check';
            case STALERT_SEVERITY.INFO: return 'icon-info';
            default: return '';
        }
    }
    /**
     * @return {?}
     */
    getSeverityColor() {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR: return 'sth-alert-box-error';
            case STALERT_SEVERITY.WARNING: return 'sth-alert-box-warning';
            case STALERT_SEVERITY.SUCCESS: return 'sth-alert-box-success';
            case STALERT_SEVERITY.INFO: return 'sth-alert-box-info';
            default: return '';
        }
    }
    /**
     * @return {?}
     */
    goTo() {
        this.clickLink.emit(this.alert.link);
    }
    /**
     * @param {?} opacity
     * @return {?}
     */
    changeOpacity(opacity) {
        this.opacity = opacity;
        this._cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    notifyConsole() {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR:
                console.error(`ERROR-${this.alert.title}: ${this.alert.message}`);
                break;
            case STALERT_SEVERITY.WARNING:
                console.warn(`WARNING-${this.alert.title}: ${this.alert.message}`);
                break;
            case STALERT_SEVERITY.SUCCESS:
                console.log(`SUCCESS-${this.alert.title}: ${this.alert.message}`);
                break;
            default:
                console.error(`ERROR: severity not found for ${this.alert.title}: ${this.alert.message}`);
                break;
        }
    }
}
StAlertBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-alert-box',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"sth-alert-box\" [ngClass]=\"severityColorValue\" [ngStyle]=\"{opacity: opacity}\">\n   <div class=\"sth-alert-box-content\">\n      <div class=\"sth-alert-box-close-button\">\n         <i (click)=\"closeAlert()\" class=\"icon-cross\"></i>\n      </div>\n      <header class=\"sth-alert-box-header\">\n         <i class=\"status-icon\" [ngClass]=\"iconValue\"></i>\n         <span>{{alert.title}}</span>\n      </header>\n      <div class=\"sth-alert-box-body\">\n         <p>{{alert.message}}</p>\n      </div>\n   </div>\n   <footer *ngIf=\"alert.link\" class=\"sth-alert-box-footer\">\n      <a (click)=\"goTo()\">{{alert.link.title}}</a>\n   </footer>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StAlertBoxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StAlertBoxComponent.propDecorators = {
    alert: [{ type: Input }],
    showInConsole: [{ type: Input }],
    clickLink: [{ type: Output }],
    close: [{ type: Output }]
};
if (false) {
    /**
     * \@Input {StAlert} [alert=] Data of the alert
     * @type {?}
     */
    StAlertBoxComponent.prototype.alert;
    /**
     * \@Input {boolean} [showInConsole=false] Display logs in console
     * @type {?}
     */
    StAlertBoxComponent.prototype.showInConsole;
    /**
     * \@Output {StAlertLink} [clickLink=] Event emitted when link is clicked
     * @type {?}
     */
    StAlertBoxComponent.prototype.clickLink;
    /**
     * \@Output {boolean} [close=] Event emitted when alert is closed
     * @type {?}
     */
    StAlertBoxComponent.prototype.close;
    /** @type {?} */
    StAlertBoxComponent.prototype.iconValue;
    /** @type {?} */
    StAlertBoxComponent.prototype.opacity;
    /** @type {?} */
    StAlertBoxComponent.prototype.severityColorValue;
    /**
     * @type {?}
     * @private
     */
    StAlertBoxComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtYWxlcnRzL2FsZXJ0LWJveC9zdC1hbGVydC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSixTQUFTLEVBQ1QsS0FBSyxFQUVMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUMvQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFPNUU7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFjN0IsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFWakMsa0JBQWEsR0FBWSxLQUFLLENBQUM7Ozs7UUFFOUIsY0FBUyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDOzs7O1FBRTFELFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyRCxZQUFPLEdBQVcsQ0FBQyxDQUFDO0lBSTNCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFP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RXhDLHdDQUFvRTs7Ozs7SUFFcEUsb0NBQTREOztJQUU1RCx3Q0FBeUI7O0lBQ3pCLHNDQUEyQjs7SUFDM0IsaURBQWtDOzs7OztJQUV0QixrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDb21wb25lbnQsXG4gICBJbnB1dCxcbiAgIE9uSW5pdCxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTVEFMRVJUX1NFVkVSSVRZLCBTdEFsZXJ0LCBTdEFsZXJ0TGluayB9IGZyb20gJy4uL3N0LWFsZXJ0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1hbGVydC1ib3gnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWFsZXJ0LWJveC5jb21wb25lbnQuaHRtbCcsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtBbGVydCBCb3hdXG4gKlxuICogQWxlcnQgYm94IGlzIG1hZGUgdG8gbGV0IHRoZSB1c2VyIGtub3cgZXJyb3JzIG9yIGluZm9ybWF0aW9uIGFib3V0IGhlIGlzIHRyeWluZyB0byBkby5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWFsZXJ0LWJveCBbYWxlcnRdPVwiYWxlcnRcIiBbc2hvd0luQ29uc29sZV09XCJzaG93SW5Db25zb2xlXCI+PC9zdC1hbGVydC1ib3g+XG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBTdEFsZXJ0Qm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIC8qKiBASW5wdXQge1N0QWxlcnR9IFthbGVydD1dIERhdGEgb2YgdGhlIGFsZXJ0ICovXG4gICBASW5wdXQoKSBhbGVydDogU3RBbGVydDtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzaG93SW5Db25zb2xlPWZhbHNlXSBEaXNwbGF5IGxvZ3MgaW4gY29uc29sZSAqL1xuICAgQElucHV0KCkgc2hvd0luQ29uc29sZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBPdXRwdXQge1N0QWxlcnRMaW5rfSBbY2xpY2tMaW5rPV0gRXZlbnQgZW1pdHRlZCB3aGVuIGxpbmsgaXMgY2xpY2tlZCAqL1xuICAgQE91dHB1dCgpIGNsaWNrTGluazogRXZlbnRFbWl0dGVyPFN0QWxlcnRMaW5rPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIC8qKiBAT3V0cHV0IHtib29sZWFufSBbY2xvc2U9XSBFdmVudCBlbWl0dGVkIHdoZW4gYWxlcnQgaXMgY2xvc2VkICovXG4gICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgcHVibGljIGljb25WYWx1ZTogc3RyaW5nO1xuICAgcHVibGljIG9wYWNpdHk6IG51bWJlciA9IDA7XG4gICBwdWJsaWMgc2V2ZXJpdHlDb2xvclZhbHVlOiBzdHJpbmc7XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWxlcnQub3BhY2l0eS5zdWJzY3JpYmUob3BhY2l0eSA9PiB0aGlzLmNoYW5nZU9wYWNpdHkob3BhY2l0eSkpO1xuICAgICAgdGhpcy5hbGVydC5ub3RpZnkoKTtcbiAgICAgIGlmICh0aGlzLnNob3dJbkNvbnNvbGUpIHtcbiAgICAgICAgIHRoaXMubm90aWZ5Q29uc29sZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXZlcml0eUNvbG9yVmFsdWUgPSB0aGlzLmdldFNldmVyaXR5Q29sb3IoKTtcbiAgICAgIHRoaXMuaWNvblZhbHVlID0gdGhpcy5nZXRJY29uKCk7XG4gICB9XG5cbiAgIGNsb3NlQWxlcnQoKTogdm9pZCB7XG4gICAgICB0aGlzLmFsZXJ0LmNhbmNlbCgpO1xuICAgICAgdGhpcy5jbG9zZS5lbWl0KHRydWUpO1xuICAgfVxuXG4gICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgICBzd2l0Y2ggKHRoaXMuYWxlcnQuc2V2ZXJpdHkpIHtcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5FUlJPUjogcmV0dXJuICdpY29uLWNpcmNsZS1hbGVydCc7XG4gICAgICAgICBjYXNlIFNUQUxFUlRfU0VWRVJJVFkuV0FSTklORzogcmV0dXJuICdpY29uLWFsZXJ0JztcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5TVUNDRVNTOiByZXR1cm4gJ2ljb24tY2lyY2xlLWNoZWNrJztcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5JTkZPOiByZXR1cm4gJ2ljb24taW5mbyc7XG4gICAgICAgICBkZWZhdWx0OiByZXR1cm4gJyc7XG4gICAgICB9XG4gICB9XG5cbiAgIGdldFNldmVyaXR5Q29sb3IoKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAodGhpcy5hbGVydC5zZXZlcml0eSkge1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLkVSUk9SOiByZXR1cm4gJ3N0aC1hbGVydC1ib3gtZXJyb3InO1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLldBUk5JTkc6IHJldHVybiAnc3RoLWFsZXJ0LWJveC13YXJuaW5nJztcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5TVUNDRVNTOiByZXR1cm4gJ3N0aC1hbGVydC1ib3gtc3VjY2Vzcyc7XG4gICAgICAgICBjYXNlIFNUQUxFUlRfU0VWRVJJVFkuSU5GTzogcmV0dXJuICdzdGgtYWxlcnQtYm94LWluZm8nO1xuICAgICAgICAgZGVmYXVsdDogcmV0dXJuICcnO1xuICAgICAgfVxuICAgfVxuXG4gICBnb1RvKCk6IHZvaWQge1xuICAgICAgdGhpcy5jbGlja0xpbmsuZW1pdCh0aGlzLmFsZXJ0LmxpbmspO1xuICAgfVxuXG4gICBjaGFuZ2VPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBwcml2YXRlIG5vdGlmeUNvbnNvbGUoKTogdm9pZCB7XG4gICAgICBzd2l0Y2ggKHRoaXMuYWxlcnQuc2V2ZXJpdHkpIHtcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5FUlJPUjogY29uc29sZS5lcnJvcihgRVJST1ItJHt0aGlzLmFsZXJ0LnRpdGxlfTogJHt0aGlzLmFsZXJ0Lm1lc3NhZ2V9YCk7IGJyZWFrO1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLldBUk5JTkc6IGNvbnNvbGUud2FybihgV0FSTklORy0ke3RoaXMuYWxlcnQudGl0bGV9OiAke3RoaXMuYWxlcnQubWVzc2FnZX1gKTsgYnJlYWs7XG4gICAgICAgICBjYXNlIFNUQUxFUlRfU0VWRVJJVFkuU1VDQ0VTUzogY29uc29sZS5sb2coYFNVQ0NFU1MtJHt0aGlzLmFsZXJ0LnRpdGxlfTogJHt0aGlzLmFsZXJ0Lm1lc3NhZ2V9YCk7IGJyZWFrO1xuICAgICAgICAgZGVmYXVsdDogY29uc29sZS5lcnJvcihgRVJST1I6IHNldmVyaXR5IG5vdCBmb3VuZCBmb3IgJHt0aGlzLmFsZXJ0LnRpdGxlfTogJHt0aGlzLmFsZXJ0Lm1lc3NhZ2V9YCk7IGJyZWFrO1xuICAgICAgfVxuICAgfVxufVxuIl19