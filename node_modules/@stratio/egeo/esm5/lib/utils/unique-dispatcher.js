/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/unique-dispatcher.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SelectOneDispatcher = /** @class */ (function () {
    function SelectOneDispatcher() {
        this.listeners = [];
    }
    /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    SelectOneDispatcher.prototype.notify = /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    function (id, name) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                var listener = _c.value;
                listener(id, name);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} listener
     * @return {?}
     */
    SelectOneDispatcher.prototype.listen = /**
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        this.listeners.push(listener);
    };
    SelectOneDispatcher.decorators = [
        { type: Injectable }
    ];
    return SelectOneDispatcher;
}());
export { SelectOneDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOneDispatcher.prototype.listeners;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3VuaXF1ZS1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUkvRDtJQUFBO1FBRVcsY0FBUyxHQUFtQyxFQUFFLENBQUM7SUFZMUQsQ0FBQzs7Ozs7O0lBVkUsb0NBQU07Ozs7O0lBQU4sVUFBTyxFQUFVLEVBQUUsSUFBWTs7O1lBQzVCLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFoQyxJQUFJLFFBQVEsV0FBQTtnQkFDZCxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JCOzs7Ozs7Ozs7SUFDSixDQUFDOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxRQUFzQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFaSCxVQUFVOztJQWNYLDBCQUFDO0NBQUEsQUFkRCxJQWNDO1NBYlksbUJBQW1COzs7Ozs7SUFDN0Isd0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0T25lRGlzcGFwdGNoZXJMaXN0ZW5lciA9IChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RPbmVEaXNwYXRjaGVyIHtcbiAgIHByaXZhdGUgbGlzdGVuZXJzOiBTZWxlY3RPbmVEaXNwYXB0Y2hlckxpc3RlbmVyW10gPSBbXTtcblxuICAgbm90aWZ5KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgZm9yIChsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgIGxpc3RlbmVyKGlkLCBuYW1lKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGlzdGVuKGxpc3RlbmVyOiBTZWxlY3RPbmVEaXNwYXB0Y2hlckxpc3RlbmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgIH1cblxufVxuIl19