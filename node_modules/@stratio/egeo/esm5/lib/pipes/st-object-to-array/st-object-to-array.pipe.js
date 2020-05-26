/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/st-object-to-array/st-object-to-array.pipe.ts
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
import { Pipe } from '@angular/core';
var StObjectToArrayPipe = /** @class */ (function () {
    function StObjectToArrayPipe() {
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    StObjectToArrayPipe.prototype.transform = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj ? Object.keys(obj).map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ({ key: key, value: obj[key] }); })) : [];
    };
    StObjectToArrayPipe.decorators = [
        { type: Pipe, args: [{ 'name': 'stObjectToArray' },] }
    ];
    return StObjectToArrayPipe;
}());
export { StObjectToArrayPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtb2JqZWN0LXRvLWFycmF5LnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL3N0LW9iamVjdC10by1hcnJheS9zdC1vYmplY3QtdG8tYXJyYXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUMsSUFBSSxFQUFnQixNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQUFBO0lBS0EsQ0FBQzs7Ozs7SUFIRSx1Q0FBUzs7OztJQUFULFVBQVcsR0FBUTtRQUNoQixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEVBQUMsR0FBRyxLQUFBLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNFLENBQUM7O2dCQUpILElBQUksU0FBQyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRTs7SUFLbkMsMEJBQUM7Q0FBQSxBQUxELElBS0M7U0FKWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHsgJ25hbWUnOiAnc3RPYmplY3RUb0FycmF5JyB9KVxuZXhwb3J0IGNsYXNzIFN0T2JqZWN0VG9BcnJheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgIHRyYW5zZm9ybSAob2JqOiBhbnkpOiB7a2V5OiBzdHJpbmcsIHZhbHVlOiBhbnl9W10ge1xuICAgICAgcmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGtleSA9PiAoe2tleSwgdmFsdWU6IG9ialtrZXldfSkpIDogW107XG4gICB9XG59XG4iXX0=