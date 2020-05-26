/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.pipe.ts
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
import { StPaginationService } from './st-pagination.service';
export class StPaginationPipe {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
    }
    /**
     * @param {?} items
     * @param {?} args
     * @return {?}
     */
    transform(items, args) {
        return this.service.newPage(items, args.currentPage, args.perPage);
    }
}
StPaginationPipe.decorators = [
    { type: Pipe, args: [{
                name: 'paginate',
                pure: false
            },] }
];
/** @nocollapse */
StPaginationPipe.ctorParameters = () => [
    { type: StPaginationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StPaginationPipe.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wYWdpbmF0aW9uL3N0LXBhZ2luYXRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQU05RCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzFCLFlBQ1csT0FBNEI7UUFBNUIsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7SUFDbkMsQ0FBQzs7Ozs7O0lBRUwsU0FBUyxDQUFDLEtBQVksRUFBRSxJQUFTO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQVhILElBQUksU0FBQztnQkFDSCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLEtBQUs7YUFDYjs7OztZQUxRLG1CQUFtQjs7Ozs7OztJQVF0QixtQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RQYWdpbmF0aW9uU2VydmljZSB9IGZyb20gJy4vc3QtcGFnaW5hdGlvbi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICAgbmFtZTogJ3BhZ2luYXRlJyxcbiAgIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIFN0UGFnaW5hdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzZXJ2aWNlOiBTdFBhZ2luYXRpb25TZXJ2aWNlXG4gICApIHsgfVxuXG4gICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCBhcmdzOiBhbnkpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5uZXdQYWdlKGl0ZW1zLCBhcmdzLmN1cnJlbnRQYWdlLCBhcmdzLnBlclBhZ2UpO1xuICAgfVxufVxuIl19