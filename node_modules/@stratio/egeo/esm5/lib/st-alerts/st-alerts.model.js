/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.model.ts
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
import { Subject } from 'rxjs';
/** @enum {number} */
var STALERT_SEVERITY = {
    SUCCESS: 0, WARNING: 1, ERROR: 2, INFO: 3,
};
export { STALERT_SEVERITY };
STALERT_SEVERITY[STALERT_SEVERITY.SUCCESS] = 'SUCCESS';
STALERT_SEVERITY[STALERT_SEVERITY.WARNING] = 'WARNING';
STALERT_SEVERITY[STALERT_SEVERITY.ERROR] = 'ERROR';
STALERT_SEVERITY[STALERT_SEVERITY.INFO] = 'INFO';
var StAlertLink = /** @class */ (function () {
    function StAlertLink() {
    }
    return StAlertLink;
}());
export { StAlertLink };
if (false) {
    /** @type {?} */
    StAlertLink.prototype.title;
    /** @type {?} */
    StAlertLink.prototype.link;
}
var StAlert = /** @class */ (function () {
    function StAlert(id, title, message, severity, timeout, extendedTimeout, link) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.severity = severity;
        this.timeout = timeout;
        this.extendedTimeout = extendedTimeout;
        this.link = link;
        this._readed = false;
        this._opacity = 0;
        this._opacityState = new Subject();
        this._removeEvent = new Subject();
    }
    Object.defineProperty(StAlert.prototype, "opacity", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opacityState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StAlert.prototype, "removeAlertEvent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._removeEvent.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StAlert.prototype.notify = /**
     * @return {?}
     */
    function () {
        this.setVisible(true);
    };
    /**
     * @return {?}
     */
    StAlert.prototype.pauseNotify = /**
     * @return {?}
     */
    function () {
        this._opacity = 1;
        this._readed = true;
        this.clearAnimation();
        this.stopLife();
        this._opacityState.next(this._opacity);
    };
    /**
     * @return {?}
     */
    StAlert.prototype.continueNotify = /**
     * @return {?}
     */
    function () {
        this.startLife();
    };
    /**
     * @return {?}
     */
    StAlert.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.setVisible(false);
    };
    /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    StAlert.prototype.setVisible = /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    function (increase) {
        var _this = this;
        this.clearAnimation();
        this._changeVisibilityInterval = window.setInterval((/**
         * @return {?}
         */
        function () { return _this.modifyVisibility(increase); }), 50);
    };
    /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    StAlert.prototype.modifyVisibility = /**
     * @private
     * @param {?} increase
     * @return {?}
     */
    function (increase) {
        this._opacity += increase ? 0.1 : -0.1;
        if (this._opacity >= 1 || this._opacity <= 0) {
            this.clearAnimation();
            if (increase) {
                this.startLife();
            }
            else {
                this.notifyForRemove();
            }
        }
        this._opacityState.next(this._opacity);
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.notifyForRemove = /**
     * @private
     * @return {?}
     */
    function () {
        this._opacityState.complete();
        this._removeEvent.next(this);
        this._removeEvent.complete();
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.clearAnimation = /**
     * @private
     * @return {?}
     */
    function () {
        window.clearInterval(this._changeVisibilityInterval);
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.stopLife = /**
     * @private
     * @return {?}
     */
    function () {
        window.clearTimeout(this._lifeTimeout);
    };
    /**
     * @private
     * @return {?}
     */
    StAlert.prototype.startLife = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var timeout = this._readed ? this.extendedTimeout : this.timeout;
        this._lifeTimeout = window.setTimeout((/**
         * @return {?}
         */
        function () { return _this.setVisible(false); }), timeout);
    };
    return StAlert;
}());
export { StAlert };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._changeVisibilityInterval;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._lifeTimeout;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._readed;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._opacity;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._opacityState;
    /**
     * @type {?}
     * @private
     */
    StAlert.prototype._removeEvent;
    /** @type {?} */
    StAlert.prototype.id;
    /** @type {?} */
    StAlert.prototype.title;
    /** @type {?} */
    StAlert.prototype.message;
    /** @type {?} */
    StAlert.prototype.severity;
    /** @type {?} */
    StAlert.prototype.timeout;
    /** @type {?} */
    StAlert.prototype.extendedTimeout;
    /** @type {?} */
    StAlert.prototype.link;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYWxlcnRzLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1hbGVydHMvc3QtYWxlcnRzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBNEIsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUd6RCxJQUFZLGdCQUFnQjtJQUFHLE9BQU8sR0FBQSxFQUFFLE9BQU8sR0FBQSxFQUFFLEtBQUssR0FBQSxFQUFFLElBQUksR0FBQTtFQUFFOzs7Ozs7QUFFOUQ7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkUsNEJBQXFCOztJQUNyQiwyQkFBb0I7O0FBR3ZCO0lBUUcsaUJBQ1UsRUFBVSxFQUNWLEtBQWEsRUFDYixPQUFlLEVBQ2YsUUFBMEIsRUFDMUIsT0FBZSxFQUNmLGVBQXVCLEVBQ3ZCLElBQWlCO1FBTmpCLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFhO1FBWm5CLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixrQkFBYSxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ3ZELGlCQUFZLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7SUFVNUQsQ0FBQztJQUVMLHNCQUFJLDRCQUFPOzs7O1FBQVg7WUFDRyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBZ0I7Ozs7UUFBcEI7WUFDRyxP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Ozs7OztJQUM3QixnQ0FBK0Q7Ozs7O0lBQy9ELCtCQUFnRTs7SUFHN0QscUJBQWlCOztJQUNqQix3QkFBb0I7O0lBQ3BCLDBCQUFzQjs7SUFDdEIsMkJBQWlDOztJQUNqQywwQkFBc0I7O0lBQ3RCLGtDQUE4Qjs7SUFDOUIsdUJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIE9ic2VydmVyICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuLy8gdHNsaW50OmRpc2FibGU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbmV4cG9ydCBlbnVtIFNUQUxFUlRfU0VWRVJJVFkgeyBTVUNDRVNTLCBXQVJOSU5HLCBFUlJPUiwgSU5GTyB9XG5cbmV4cG9ydCBjbGFzcyBTdEFsZXJ0TGluayB7XG4gICBwdWJsaWMgdGl0bGU6IHN0cmluZztcbiAgIHB1YmxpYyBsaW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdEFsZXJ0IHtcbiAgIHByaXZhdGUgX2NoYW5nZVZpc2liaWxpdHlJbnRlcnZhbDogbnVtYmVyO1xuICAgcHJpdmF0ZSBfbGlmZVRpbWVvdXQ6IG51bWJlcjtcbiAgIHByaXZhdGUgX3JlYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHJpdmF0ZSBfb3BhY2l0eTogbnVtYmVyID0gMDtcbiAgIHByaXZhdGUgX29wYWNpdHlTdGF0ZTogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICAgcHJpdmF0ZSBfcmVtb3ZlRXZlbnQ6IFN1YmplY3Q8U3RBbGVydD4gPSBuZXcgU3ViamVjdDxTdEFsZXJ0PigpO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpZDogbnVtYmVyLFxuICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgcHVibGljIHNldmVyaXR5OiBTVEFMRVJUX1NFVkVSSVRZLFxuICAgICAgcHVibGljIHRpbWVvdXQ6IG51bWJlcixcbiAgICAgIHB1YmxpYyBleHRlbmRlZFRpbWVvdXQ6IG51bWJlcixcbiAgICAgIHB1YmxpYyBsaW5rOiBTdEFsZXJ0TGlua1xuICAgKSB7IH1cblxuICAgZ2V0IG9wYWNpdHkoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9vcGFjaXR5U3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gICB9XG5cbiAgIGdldCByZW1vdmVBbGVydEV2ZW50KCk6IE9ic2VydmFibGU8U3RBbGVydD4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZUV2ZW50LmFzT2JzZXJ2YWJsZSgpO1xuICAgfVxuXG4gICBub3RpZnkoKTogdm9pZCB7XG4gICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XG4gICB9XG5cbiAgIHBhdXNlTm90aWZ5KCk6IHZvaWQge1xuICAgICAgdGhpcy5fb3BhY2l0eSA9IDE7XG4gICAgICB0aGlzLl9yZWFkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5zdG9wTGlmZSgpO1xuICAgICAgdGhpcy5fb3BhY2l0eVN0YXRlLm5leHQodGhpcy5fb3BhY2l0eSk7XG4gICB9XG5cbiAgIGNvbnRpbnVlTm90aWZ5KCk6IHZvaWQge1xuICAgICAgdGhpcy5zdGFydExpZmUoKTtcbiAgIH1cblxuICAgY2FuY2VsKCk6IHZvaWQge1xuICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgIH1cblxuXG4gICBwcml2YXRlIHNldFZpc2libGUoaW5jcmVhc2U6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xlYXJBbmltYXRpb24oKTtcbiAgICAgIHRoaXMuX2NoYW5nZVZpc2liaWxpdHlJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB0aGlzLm1vZGlmeVZpc2liaWxpdHkoaW5jcmVhc2UpLCA1MCk7XG4gICB9XG5cbiAgIHByaXZhdGUgbW9kaWZ5VmlzaWJpbGl0eShpbmNyZWFzZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5fb3BhY2l0eSArPSBpbmNyZWFzZSA/IDAuMSA6IC0wLjE7XG4gICAgICBpZiAodGhpcy5fb3BhY2l0eSA+PSAxIHx8IHRoaXMuX29wYWNpdHkgPD0gMCkge1xuICAgICAgICAgdGhpcy5jbGVhckFuaW1hdGlvbigpO1xuICAgICAgICAgaWYgKGluY3JlYXNlKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0TGlmZSgpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5Rm9yUmVtb3ZlKCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9vcGFjaXR5U3RhdGUubmV4dCh0aGlzLl9vcGFjaXR5KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBub3RpZnlGb3JSZW1vdmUoKTogdm9pZCB7XG4gICAgICB0aGlzLl9vcGFjaXR5U3RhdGUuY29tcGxldGUoKTtcbiAgICAgIHRoaXMuX3JlbW92ZUV2ZW50Lm5leHQodGhpcyk7XG4gICAgICB0aGlzLl9yZW1vdmVFdmVudC5jb21wbGV0ZSgpO1xuICAgfVxuXG4gICBwcml2YXRlIGNsZWFyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fY2hhbmdlVmlzaWJpbGl0eUludGVydmFsKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBzdG9wTGlmZSgpOiB2b2lkIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fbGlmZVRpbWVvdXQpO1xuICAgfVxuXG4gICBwcml2YXRlIHN0YXJ0TGlmZSgpOiB2b2lkIHtcbiAgICAgIGxldCB0aW1lb3V0OiBudW1iZXIgPSB0aGlzLl9yZWFkZWQgPyB0aGlzLmV4dGVuZGVkVGltZW91dCA6IHRoaXMudGltZW91dDtcbiAgICAgIHRoaXMuX2xpZmVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRWaXNpYmxlKGZhbHNlKSwgdGltZW91dCk7XG4gICB9XG59XG4iXX0=