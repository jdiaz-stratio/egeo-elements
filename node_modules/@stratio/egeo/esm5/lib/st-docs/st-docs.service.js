/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-docs.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
var StDocsService = /** @class */ (function () {
    function StDocsService(http) {
        this.http = http;
    }
    /**
     * @param {?=} route
     * @return {?}
     */
    StDocsService.prototype.getFile = /**
     * @param {?=} route
     * @return {?}
     */
    function (route) {
        return this.http.get(location.pathname + "assets/source-code/" + route, { responseType: 'text' }).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return ((/** @type {?} */ (response))); })), catchError((/**
         * @return {?}
         */
        function () {
            return of(null);
        })));
    };
    StDocsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StDocsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return StDocsService;
}());
export { StDocsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StDocsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZG9jcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1kb2NzL3N0LWRvY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQ7SUFHRyx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7Ozs7O0lBRXpDLCtCQUFPOzs7O0lBQVAsVUFBUSxLQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksUUFBUSxDQUFDLFFBQVEsMkJBQXNCLEtBQU8sRUFBRSxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FDakcsR0FBRzs7OztRQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsQ0FBQyxtQkFBSyxRQUFRLEVBQUEsQ0FBQyxFQUFmLENBQWUsRUFBQyxFQUNoQyxVQUFVOzs7UUFBRTtZQUNULE9BQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsRUFBQyxDQUNKLENBQUM7SUFDTCxDQUFDOztnQkFaSCxVQUFVOzs7O2dCQUZGLFVBQVU7O0lBZW5CLG9CQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksYUFBYTs7Ozs7O0lBRVgsNkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxNy4gU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbmNlIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2Z9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0RG9jc1NlcnZpY2Uge1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICBnZXRGaWxlKHJvdXRlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke2xvY2F0aW9uLnBhdGhuYW1lfWFzc2V0cy9zb3VyY2UtY29kZS8ke3JvdXRlfWAsIHtyZXNwb25zZVR5cGU6ICd0ZXh0J30pLnBpcGUoXG4gICAgICAgICBtYXAocmVzcG9uc2UgPT4gKDxhbnk+cmVzcG9uc2UpKSxcbiAgICAgICAgIGNhdGNoRXJyb3IoICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAgb2YobnVsbCk7XG4gICAgICAgICB9KVxuICAgICAgKTtcbiAgIH1cbn1cbiJdfQ==