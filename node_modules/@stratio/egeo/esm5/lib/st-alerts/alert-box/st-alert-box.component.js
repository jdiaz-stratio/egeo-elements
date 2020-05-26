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
var StAlertBoxComponent = /** @class */ (function () {
    function StAlertBoxComponent(_cd) {
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
    StAlertBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alert.opacity.subscribe((/**
         * @param {?} opacity
         * @return {?}
         */
        function (opacity) { return _this.changeOpacity(opacity); }));
        this.alert.notify();
        if (this.showInConsole) {
            this.notifyConsole();
        }
        this.severityColorValue = this.getSeverityColor();
        this.iconValue = this.getIcon();
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.closeAlert = /**
     * @return {?}
     */
    function () {
        this.alert.cancel();
        this.close.emit(true);
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.getIcon = /**
     * @return {?}
     */
    function () {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR: return 'icon-circle-alert';
            case STALERT_SEVERITY.WARNING: return 'icon-alert';
            case STALERT_SEVERITY.SUCCESS: return 'icon-circle-check';
            case STALERT_SEVERITY.INFO: return 'icon-info';
            default: return '';
        }
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.getSeverityColor = /**
     * @return {?}
     */
    function () {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR: return 'sth-alert-box-error';
            case STALERT_SEVERITY.WARNING: return 'sth-alert-box-warning';
            case STALERT_SEVERITY.SUCCESS: return 'sth-alert-box-success';
            case STALERT_SEVERITY.INFO: return 'sth-alert-box-info';
            default: return '';
        }
    };
    /**
     * @return {?}
     */
    StAlertBoxComponent.prototype.goTo = /**
     * @return {?}
     */
    function () {
        this.clickLink.emit(this.alert.link);
    };
    /**
     * @param {?} opacity
     * @return {?}
     */
    StAlertBoxComponent.prototype.changeOpacity = /**
     * @param {?} opacity
     * @return {?}
     */
    function (opacity) {
        this.opacity = opacity;
        this._cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    StAlertBoxComponent.prototype.notifyConsole = /**
     * @private
     * @return {?}
     */
    function () {
        switch (this.alert.severity) {
            case STALERT_SEVERITY.ERROR:
                console.error("ERROR-" + this.alert.title + ": " + this.alert.message);
                break;
            case STALERT_SEVERITY.WARNING:
                console.warn("WARNING-" + this.alert.title + ": " + this.alert.message);
                break;
            case STALERT_SEVERITY.SUCCESS:
                console.log("SUCCESS-" + this.alert.title + ": " + this.alert.message);
                break;
            default:
                console.error("ERROR: severity not found for " + this.alert.title + ": " + this.alert.message);
                break;
        }
    };
    StAlertBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-alert-box',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"sth-alert-box\" [ngClass]=\"severityColorValue\" [ngStyle]=\"{opacity: opacity}\">\n   <div class=\"sth-alert-box-content\">\n      <div class=\"sth-alert-box-close-button\">\n         <i (click)=\"closeAlert()\" class=\"icon-cross\"></i>\n      </div>\n      <header class=\"sth-alert-box-header\">\n         <i class=\"status-icon\" [ngClass]=\"iconValue\"></i>\n         <span>{{alert.title}}</span>\n      </header>\n      <div class=\"sth-alert-box-body\">\n         <p>{{alert.message}}</p>\n      </div>\n   </div>\n   <footer *ngIf=\"alert.link\" class=\"sth-alert-box-footer\">\n      <a (click)=\"goTo()\">{{alert.link.title}}</a>\n   </footer>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StAlertBoxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StAlertBoxComponent.propDecorators = {
        alert: [{ type: Input }],
        showInConsole: [{ type: Input }],
        clickLink: [{ type: Output }],
        close: [{ type: Output }]
    };
    return StAlertBoxComponent;
}());
export { StAlertBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYWxlcnQtYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtYWxlcnRzL2FsZXJ0LWJveC9zdC1hbGVydC1ib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSixTQUFTLEVBQ1QsS0FBSyxFQUVMLGlCQUFpQixFQUNqQix1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUMvQyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFlLE1BQU0sb0JBQW9CLENBQUM7QUFFNUU7SUFpQ0csNkJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBVmpDLGtCQUFhLEdBQVksS0FBSyxDQUFDOzs7O1FBRTlCLGNBQVMsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUUxRCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHckQsWUFBTyxHQUFXLENBQUMsQ0FBQztJQUkzQixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQUEsaUJBUUM7UUFQRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFD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QXhGRCxJQXdGQztTQXJFWSxtQkFBbUI7Ozs7OztJQUU3QixvQ0FBd0I7Ozs7O0lBRXhCLDRDQUF3Qzs7Ozs7SUFFeEMsd0NBQW9FOzs7OztJQUVwRSxvQ0FBNEQ7O0lBRTVELHdDQUF5Qjs7SUFDekIsc0NBQTJCOztJQUMzQixpREFBa0M7Ozs7O0lBRXRCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENvbXBvbmVudCxcbiAgIElucHV0LFxuICAgT25Jbml0LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNUQUxFUlRfU0VWRVJJVFksIFN0QWxlcnQsIFN0QWxlcnRMaW5rIH0gZnJvbSAnLi4vc3QtYWxlcnRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWFsZXJ0LWJveCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtYWxlcnQtYm94LmNvbXBvbmVudC5odG1sJyxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0FsZXJ0IEJveF1cbiAqXG4gKiBBbGVydCBib3ggaXMgbWFkZSB0byBsZXQgdGhlIHVzZXIga25vdyBlcnJvcnMgb3IgaW5mb3JtYXRpb24gYWJvdXQgaGUgaXMgdHJ5aW5nIHRvIGRvLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtYWxlcnQtYm94IFthbGVydF09XCJhbGVydFwiIFtzaG93SW5Db25zb2xlXT1cInNob3dJbkNvbnNvbGVcIj48L3N0LWFsZXJ0LWJveD5cbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNsYXNzIFN0QWxlcnRCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgLyoqIEBJbnB1dCB7U3RBbGVydH0gW2FsZXJ0PV0gRGF0YSBvZiB0aGUgYWxlcnQgKi9cbiAgIEBJbnB1dCgpIGFsZXJ0OiBTdEFsZXJ0O1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3Nob3dJbkNvbnNvbGU9ZmFsc2VdIERpc3BsYXkgbG9ncyBpbiBjb25zb2xlICovXG4gICBASW5wdXQoKSBzaG93SW5Db25zb2xlOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQE91dHB1dCB7U3RBbGVydExpbmt9IFtjbGlja0xpbms9XSBFdmVudCBlbWl0dGVkIHdoZW4gbGluayBpcyBjbGlja2VkICovXG4gICBAT3V0cHV0KCkgY2xpY2tMaW5rOiBFdmVudEVtaXR0ZXI8U3RBbGVydExpbms+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgLyoqIEBPdXRwdXQge2Jvb2xlYW59IFtjbG9zZT1dIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbGVydCBpcyBjbG9zZWQgKi9cbiAgIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBwdWJsaWMgaWNvblZhbHVlOiBzdHJpbmc7XG4gICBwdWJsaWMgb3BhY2l0eTogbnVtYmVyID0gMDtcbiAgIHB1YmxpYyBzZXZlcml0eUNvbG9yVmFsdWU6IHN0cmluZztcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5hbGVydC5vcGFjaXR5LnN1YnNjcmliZShvcGFjaXR5ID0+IHRoaXMuY2hhbmdlT3BhY2l0eShvcGFjaXR5KSk7XG4gICAgICB0aGlzLmFsZXJ0Lm5vdGlmeSgpO1xuICAgICAgaWYgKHRoaXMuc2hvd0luQ29uc29sZSkge1xuICAgICAgICAgdGhpcy5ub3RpZnlDb25zb2xlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldmVyaXR5Q29sb3JWYWx1ZSA9IHRoaXMuZ2V0U2V2ZXJpdHlDb2xvcigpO1xuICAgICAgdGhpcy5pY29uVmFsdWUgPSB0aGlzLmdldEljb24oKTtcbiAgIH1cblxuICAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWxlcnQuY2FuY2VsKCk7XG4gICAgICB0aGlzLmNsb3NlLmVtaXQodHJ1ZSk7XG4gICB9XG5cbiAgIGdldEljb24oKTogc3RyaW5nIHtcbiAgICAgIHN3aXRjaCAodGhpcy5hbGVydC5zZXZlcml0eSkge1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLkVSUk9SOiByZXR1cm4gJ2ljb24tY2lyY2xlLWFsZXJ0JztcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5XQVJOSU5HOiByZXR1cm4gJ2ljb24tYWxlcnQnO1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLlNVQ0NFU1M6IHJldHVybiAnaWNvbi1jaXJjbGUtY2hlY2snO1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLklORk86IHJldHVybiAnaWNvbi1pbmZvJztcbiAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAnJztcbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0U2V2ZXJpdHlDb2xvcigpOiBzdHJpbmcge1xuICAgICAgc3dpdGNoICh0aGlzLmFsZXJ0LnNldmVyaXR5KSB7XG4gICAgICAgICBjYXNlIFNUQUxFUlRfU0VWRVJJVFkuRVJST1I6IHJldHVybiAnc3RoLWFsZXJ0LWJveC1lcnJvcic7XG4gICAgICAgICBjYXNlIFNUQUxFUlRfU0VWRVJJVFkuV0FSTklORzogcmV0dXJuICdzdGgtYWxlcnQtYm94LXdhcm5pbmcnO1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLlNVQ0NFU1M6IHJldHVybiAnc3RoLWFsZXJ0LWJveC1zdWNjZXNzJztcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5JTkZPOiByZXR1cm4gJ3N0aC1hbGVydC1ib3gtaW5mbyc7XG4gICAgICAgICBkZWZhdWx0OiByZXR1cm4gJyc7XG4gICAgICB9XG4gICB9XG5cbiAgIGdvVG8oKTogdm9pZCB7XG4gICAgICB0aGlzLmNsaWNrTGluay5lbWl0KHRoaXMuYWxlcnQubGluayk7XG4gICB9XG5cbiAgIGNoYW5nZU9wYWNpdHkob3BhY2l0eTogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgbm90aWZ5Q29uc29sZSgpOiB2b2lkIHtcbiAgICAgIHN3aXRjaCAodGhpcy5hbGVydC5zZXZlcml0eSkge1xuICAgICAgICAgY2FzZSBTVEFMRVJUX1NFVkVSSVRZLkVSUk9SOiBjb25zb2xlLmVycm9yKGBFUlJPUi0ke3RoaXMuYWxlcnQudGl0bGV9OiAke3RoaXMuYWxlcnQubWVzc2FnZX1gKTsgYnJlYWs7XG4gICAgICAgICBjYXNlIFNUQUxFUlRfU0VWRVJJVFkuV0FSTklORzogY29uc29sZS53YXJuKGBXQVJOSU5HLSR7dGhpcy5hbGVydC50aXRsZX06ICR7dGhpcy5hbGVydC5tZXNzYWdlfWApOyBicmVhaztcbiAgICAgICAgIGNhc2UgU1RBTEVSVF9TRVZFUklUWS5TVUNDRVNTOiBjb25zb2xlLmxvZyhgU1VDQ0VTUy0ke3RoaXMuYWxlcnQudGl0bGV9OiAke3RoaXMuYWxlcnQubWVzc2FnZX1gKTsgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0OiBjb25zb2xlLmVycm9yKGBFUlJPUjogc2V2ZXJpdHkgbm90IGZvdW5kIGZvciAke3RoaXMuYWxlcnQudGl0bGV9OiAke3RoaXMuYWxlcnQubWVzc2FnZX1gKTsgYnJlYWs7XG4gICAgICB9XG4gICB9XG59XG4iXX0=