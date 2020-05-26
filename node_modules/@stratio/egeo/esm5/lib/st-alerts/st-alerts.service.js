/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.service.ts
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
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StAlert } from './st-alerts.model';
var StAlertsService = /** @class */ (function () {
    function StAlertsService() {
        this._alertsList = [];
        this._nextId = 0;
        this._alertsStream = new BehaviorSubject([]);
    }
    Object.defineProperty(StAlertsService.prototype, "alertList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._alertsStream.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} title
     * @param {?} message
     * @param {?} severity
     * @param {?=} link
     * @param {?=} timeout
     * @param {?=} extendedTimeout
     * @return {?}
     */
    StAlertsService.prototype.notifyAlert = /**
     * @param {?} title
     * @param {?} message
     * @param {?} severity
     * @param {?=} link
     * @param {?=} timeout
     * @param {?=} extendedTimeout
     * @return {?}
     */
    function (title, message, severity, link, timeout, extendedTimeout) {
        var _this = this;
        timeout = timeout !== undefined ? timeout : 5000;
        extendedTimeout = extendedTimeout !== undefined ? extendedTimeout : 4000;
        /** @type {?} */
        var alert = new StAlert(this._nextId, title, message, severity, timeout, extendedTimeout, link);
        alert.removeAlertEvent.subscribe((/**
         * @param {?} alertToRemove
         * @return {?}
         */
        function (alertToRemove) { return _this.onNotifyRemove(alertToRemove); }));
        this.insertAlert(alert);
        this._nextId++;
    };
    /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    StAlertsService.prototype.insertAlert = /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
        this._alertsList.push(alert);
        this._alertsStream.next(this._alertsList);
    };
    /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    StAlertsService.prototype.onNotifyRemove = /**
     * @private
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
        /** @type {?} */
        var pos = this._alertsList.findIndex((/**
         * @param {?} internalAlert
         * @return {?}
         */
        function (internalAlert) { return internalAlert.id === alert.id; }));
        this._alertsList.splice(pos, 1);
        this._alertsStream.next(this._alertsList);
    };
    StAlertsService.decorators = [
        { type: Injectable }
    ];
    return StAlertsService;
}());
export { StAlertsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StAlertsService.prototype._alertsList;
    /**
     * @type {?}
     * @private
     */
    StAlertsService.prototype._nextId;
    /**
     * @type {?}
     * @private
     */
    StAlertsService.prototype._alertsStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYWxlcnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWFsZXJ0cy9zdC1hbGVydHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLE9BQU8sRUFBaUMsTUFBTSxtQkFBbUIsQ0FBQztBQUUzRTtJQUFBO1FBRVcsZ0JBQVcsR0FBYyxFQUFFLENBQUM7UUFDNUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixrQkFBYSxHQUErQixJQUFJLGVBQWUsQ0FBWSxFQUFFLENBQUMsQ0FBQztJQXlCMUYsQ0FBQztJQXZCRSxzQkFBSSxzQ0FBUzs7OztRQUFiO1lBQ0csT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBOzs7Ozs7Ozs7O0lBRU0scUNBQVc7Ozs7Ozs7OztJQUFsQixVQUFtQixLQUFhLEVBQUUsT0FBZSxFQUFFLFFBQTBCLEVBQUUsSUFBa0IsRUFBRSxPQUFnQixFQUFFLGVBQXdCO1FBQTdJLGlCQU9DO1FBTkUsT0FBTyxHQUFHLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELGVBQWUsR0FBRyxlQUFlLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7WUFDckUsS0FBSyxHQUFZLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUM7UUFDeEcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFTyxxQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsS0FBYztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBRU8sd0NBQWM7Ozs7O0lBQXRCLFVBQXVCLEtBQWM7O1lBQzlCLEdBQUcsR0FBVyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBN0IsQ0FBNkIsRUFBQztRQUM1RixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQTdCSCxVQUFVOztJQThCWCxzQkFBQztDQUFBLEFBOUJELElBOEJDO1NBN0JZLGVBQWU7Ozs7OztJQUN6QixzQ0FBb0M7Ozs7O0lBQ3BDLGtDQUE0Qjs7Ozs7SUFFNUIsd0NBQXVGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RBbGVydCwgU1RBTEVSVF9TRVZFUklUWSwgU3RBbGVydExpbmsgfSBmcm9tICcuL3N0LWFsZXJ0cy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdEFsZXJ0c1NlcnZpY2Uge1xuICAgcHJpdmF0ZSBfYWxlcnRzTGlzdDogU3RBbGVydFtdID0gW107XG4gICBwcml2YXRlIF9uZXh0SWQ6IG51bWJlciA9IDA7XG5cbiAgIHByaXZhdGUgX2FsZXJ0c1N0cmVhbTogQmVoYXZpb3JTdWJqZWN0PFN0QWxlcnRbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFN0QWxlcnRbXT4oW10pO1xuXG4gICBnZXQgYWxlcnRMaXN0KCk6IE9ic2VydmFibGU8U3RBbGVydFtdPiB7XG4gICAgICByZXR1cm4gdGhpcy5fYWxlcnRzU3RyZWFtLmFzT2JzZXJ2YWJsZSgpO1xuICAgfVxuXG4gICBwdWJsaWMgbm90aWZ5QWxlcnQodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBzZXZlcml0eTogU1RBTEVSVF9TRVZFUklUWSwgbGluaz86IFN0QWxlcnRMaW5rLCB0aW1lb3V0PzogbnVtYmVyLCBleHRlbmRlZFRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRpbWVvdXQgPSB0aW1lb3V0ICE9PSB1bmRlZmluZWQgPyB0aW1lb3V0IDogNTAwMDtcbiAgICAgIGV4dGVuZGVkVGltZW91dCA9IGV4dGVuZGVkVGltZW91dCAhPT0gdW5kZWZpbmVkID8gZXh0ZW5kZWRUaW1lb3V0IDogNDAwMDtcbiAgICAgIGxldCBhbGVydDogU3RBbGVydCA9IG5ldyBTdEFsZXJ0KHRoaXMuX25leHRJZCwgdGl0bGUsIG1lc3NhZ2UsIHNldmVyaXR5LCB0aW1lb3V0LCBleHRlbmRlZFRpbWVvdXQsIGxpbmspO1xuICAgICAgYWxlcnQucmVtb3ZlQWxlcnRFdmVudC5zdWJzY3JpYmUoYWxlcnRUb1JlbW92ZSA9PiB0aGlzLm9uTm90aWZ5UmVtb3ZlKGFsZXJ0VG9SZW1vdmUpKTtcbiAgICAgIHRoaXMuaW5zZXJ0QWxlcnQoYWxlcnQpO1xuICAgICAgdGhpcy5fbmV4dElkKys7XG4gICB9XG5cbiAgIHByaXZhdGUgaW5zZXJ0QWxlcnQoYWxlcnQ6IFN0QWxlcnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2FsZXJ0c0xpc3QucHVzaChhbGVydCk7XG4gICAgICB0aGlzLl9hbGVydHNTdHJlYW0ubmV4dCh0aGlzLl9hbGVydHNMaXN0KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBvbk5vdGlmeVJlbW92ZShhbGVydDogU3RBbGVydCk6IHZvaWQge1xuICAgICAgbGV0IHBvczogbnVtYmVyID0gdGhpcy5fYWxlcnRzTGlzdC5maW5kSW5kZXgoaW50ZXJuYWxBbGVydCA9PiBpbnRlcm5hbEFsZXJ0LmlkID09PSBhbGVydC5pZCk7XG4gICAgICB0aGlzLl9hbGVydHNMaXN0LnNwbGljZShwb3MsIDEpO1xuICAgICAgdGhpcy5fYWxlcnRzU3RyZWFtLm5leHQodGhpcy5fYWxlcnRzTGlzdCk7XG4gICB9XG59XG4iXX0=