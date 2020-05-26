/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/st-table.interface.ts
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
var StTableFilterIconClasses = /** @class */ (function () {
    function StTableFilterIconClasses() {
        this.selected = 'icon-facets-2';
        this.enabled = 'icon-arrow4_down';
    }
    return StTableFilterIconClasses;
}());
export { StTableFilterIconClasses };
if (false) {
    /** @type {?} */
    StTableFilterIconClasses.prototype.selected;
    /** @type {?} */
    StTableFilterIconClasses.prototype.enabled;
}
var StTableIconClasses = /** @class */ (function () {
    function StTableIconClasses() {
        this.filter = new StTableFilterIconClasses();
        this.sort = {
            asc: 'icon-arrow-up',
            desc: 'icon-arrow-down'
        };
    }
    return StTableIconClasses;
}());
export { StTableIconClasses };
if (false) {
    /** @type {?} */
    StTableIconClasses.prototype.filter;
    /** @type {?} */
    StTableIconClasses.prototype.sort;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFibGUuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10YWJsZS9zdC10YWJsZS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7SUFJRztRQUNHLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLENBQUM7SUFDckMsQ0FBQztJQUNKLCtCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQRSw0Q0FBaUI7O0lBQ2pCLDJDQUFnQjs7QUFRbkI7SUFPRztRQUNHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSx3QkFBd0IsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVCxHQUFHLEVBQUUsZUFBZTtZQUNwQixJQUFJLEVBQUUsaUJBQWlCO1NBQ3pCLENBQUM7SUFDTCxDQUFDO0lBQ0oseUJBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQzs7OztJQWJFLG9DQUFpQzs7SUFDakMsa0NBR0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFN0VGFibGVGaWx0ZXJJY29uQ2xhc3NlcyB7XG4gICBzZWxlY3RlZDogc3RyaW5nO1xuICAgZW5hYmxlZDogc3RyaW5nO1xuXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAnaWNvbi1mYWNldHMtMic7XG4gICAgICB0aGlzLmVuYWJsZWQgPSAnaWNvbi1hcnJvdzRfZG93bic7XG4gICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdFRhYmxlSWNvbkNsYXNzZXMge1xuICAgZmlsdGVyOiBTdFRhYmxlRmlsdGVySWNvbkNsYXNzZXM7XG4gICBzb3J0OiB7XG4gICAgICBhc2M6IHN0cmluZztcbiAgICAgIGRlc2M6IHN0cmluZztcbiAgIH07XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5maWx0ZXIgPSBuZXcgU3RUYWJsZUZpbHRlckljb25DbGFzc2VzKCk7XG4gICAgICB0aGlzLnNvcnQgPSB7XG4gICAgICAgICBhc2M6ICdpY29uLWFycm93LXVwJyxcbiAgICAgICAgIGRlc2M6ICdpY29uLWFycm93LWRvd24nXG4gICAgICB9O1xuICAgfVxufVxuIl19