/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/unique-dispatcher.ts
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
export class SelectOneDispatcher {
    constructor() {
        this.listeners = [];
    }
    /**
     * @param {?} id
     * @param {?} name
     * @return {?}
     */
    notify(id, name) {
        for (let listener of this.listeners) {
            listener(id, name);
        }
    }
    /**
     * @param {?} listener
     * @return {?}
     */
    listen(listener) {
        this.listeners.push(listener);
    }
}
SelectOneDispatcher.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOneDispatcher.prototype.listeners;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL3VuaXF1ZS1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxVQUFVLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBSy9ELE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFVyxjQUFTLEdBQW1DLEVBQUUsQ0FBQztJQVkxRCxDQUFDOzs7Ozs7SUFWRSxNQUFNLENBQUMsRUFBVSxFQUFFLElBQVk7UUFDNUIsS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckI7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFzQztRQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFaSCxVQUFVOzs7Ozs7O0lBRVIsd0NBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0T25lRGlzcGFwdGNoZXJMaXN0ZW5lciA9IChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RPbmVEaXNwYXRjaGVyIHtcbiAgIHByaXZhdGUgbGlzdGVuZXJzOiBTZWxlY3RPbmVEaXNwYXB0Y2hlckxpc3RlbmVyW10gPSBbXTtcblxuICAgbm90aWZ5KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgZm9yIChsZXQgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgIGxpc3RlbmVyKGlkLCBuYW1lKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbGlzdGVuKGxpc3RlbmVyOiBTZWxlY3RPbmVEaXNwYXB0Y2hlckxpc3RlbmVyKTogdm9pZCB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgIH1cblxufVxuIl19