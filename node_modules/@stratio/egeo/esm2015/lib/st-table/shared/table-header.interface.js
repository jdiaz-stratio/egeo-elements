/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/table-header.interface.ts
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
/**
 * @record
 */
export function StFilterElement() { }
if (false) {
    /** @type {?} */
    StFilterElement.prototype.id;
    /** @type {?} */
    StFilterElement.prototype.name;
    /** @type {?|undefined} */
    StFilterElement.prototype.selected;
}
/**
 * @record
 */
export function StFilterHeader() { }
if (false) {
    /** @type {?|undefined} */
    StFilterHeader.prototype.filterConfig;
    /** @type {?|undefined} */
    StFilterHeader.prototype.showSettingBtn;
    /** @type {?} */
    StFilterHeader.prototype.title;
    /** @type {?|undefined} */
    StFilterHeader.prototype.buttonText;
    /** @type {?|undefined} */
    StFilterHeader.prototype.templateRef;
}
/**
 * @record
 */
export function StTableHeader() { }
if (false) {
    /** @type {?} */
    StTableHeader.prototype.id;
    /** @type {?} */
    StTableHeader.prototype.label;
    /** @type {?|undefined} */
    StTableHeader.prototype.sortable;
    /** @type {?|undefined} */
    StTableHeader.prototype.filters;
    /** @type {?|undefined} */
    StTableHeader.prototype.filterable;
    /** @type {?|undefined} */
    StTableHeader.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLmludGVyZmFjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdGFibGUvc2hhcmVkL3RhYmxlLWhlYWRlci5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EscUNBSUM7OztJQUhFLDZCQUFvQjs7SUFDcEIsK0JBQXNCOztJQUN0QixtQ0FBbUI7Ozs7O0FBR3RCLG9DQU1DOzs7SUFMRSxzQ0FBaUM7O0lBQ2pDLHdDQUF5Qjs7SUFDekIsK0JBQWM7O0lBQ2Qsb0NBQW9COztJQUNwQixxQ0FBcUI7Ozs7O0FBR3hCLG1DQU9DOzs7SUFORSwyQkFBVzs7SUFDWCw4QkFBYzs7SUFDZCxpQ0FBbUI7O0lBQ25CLGdDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixvQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBTdEZpbHRlckVsZW1lbnQge1xuICAgaWQ6IFN0cmluZyB8IG51bWJlcjtcbiAgIG5hbWU6IFN0cmluZyB8IG51bWJlcjtcbiAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdEZpbHRlckhlYWRlciB7XG4gICBmaWx0ZXJDb25maWc/OiBTdEZpbHRlckVsZW1lbnRbXTtcbiAgIHNob3dTZXR0aW5nQnRuPzogYm9vbGVhbjtcbiAgIHRpdGxlOiBzdHJpbmc7XG4gICBidXR0b25UZXh0Pzogc3RyaW5nO1xuICAgdGVtcGxhdGVSZWY/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RUYWJsZUhlYWRlciB7XG4gICBpZDogc3RyaW5nO1xuICAgbGFiZWw6IHN0cmluZztcbiAgIHNvcnRhYmxlPzogYm9vbGVhbjtcbiAgIGZpbHRlcnM/OiBTdEZpbHRlckhlYWRlcjtcbiAgIGZpbHRlcmFibGU/OiBib29sZWFuO1xuICAgdGVtcGxhdGVSZWY/OiBzdHJpbmc7XG59XG4iXX0=