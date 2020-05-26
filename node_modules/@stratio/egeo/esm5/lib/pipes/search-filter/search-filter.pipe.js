/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/search-filter/search-filter.pipe.ts
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
var StFilterList = /** @class */ (function () {
    function StFilterList() {
    }
    /**
     * @param {?} list
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    StFilterList.prototype.transform = /**
     * @param {?} list
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    function (list, field, search) {
        var _this = this;
        this.checkParams(field);
        if (!search) {
            return list;
        }
        if (list && list.length > 0 && field) {
            return list.filter((/**
             * @param {?} element
             * @return {?}
             */
            function (element) { return _this.contains(element, field, search); }));
        }
        else {
            return [];
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    StFilterList.prototype.contains = /**
     * @private
     * @param {?} element
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    function (element, field, search) {
        if (this.isDefined(element) && this.isString(field) && this.isString(search) && this.isString(element[field])) {
            return element[field].toUpperCase().search(search.toUpperCase()) > -1;
        }
        return false;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StFilterList.prototype.isDefined = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && value !== null;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StFilterList.prototype.isString = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.isDefined(value) && typeof value === 'string';
    };
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    StFilterList.prototype.checkParams = /**
     * @private
     * @param {?} field
     * @return {?}
     */
    function (field) {
        if (!this.isString(field)) {
            throw new Error('PIPE: stFilterList: "field" is a required and string parameter');
        }
    };
    StFilterList.decorators = [
        { type: Pipe, args: [{
                    name: 'stFilterList'
                },] }
    ];
    return StFilterList;
}());
export { StFilterList };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zZWFyY2gtZmlsdGVyL3NlYXJjaC1maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBb0NBLENBQUM7Ozs7Ozs7SUFoQ0UsZ0NBQVM7Ozs7OztJQUFULFVBQVUsSUFBVyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQXBELGlCQVVDO1FBVEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQXJDLENBQXFDLEVBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0osT0FBTyxFQUFFLENBQUM7U0FDWjtJQUNKLENBQUM7Ozs7Ozs7O0lBRU8sK0JBQVE7Ozs7Ozs7SUFBaEIsVUFBaUIsT0FBWSxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3pELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1RyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFTyxnQ0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUN6QixPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFTywrQkFBUTs7Ozs7SUFBaEIsVUFBaUIsS0FBVTtRQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO0lBQzdELENBQUM7Ozs7OztJQUVPLGtDQUFXOzs7OztJQUFuQixVQUFvQixLQUFhO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNwRjtJQUNKLENBQUM7O2dCQW5DSCxJQUFJLFNBQUM7b0JBQ0gsSUFBSSxFQUFFLGNBQWM7aUJBQ3RCOztJQWtDRCxtQkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgbmFtZTogJ3N0RmlsdGVyTGlzdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RGaWx0ZXJMaXN0IGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICB0cmFuc2Zvcm0obGlzdDogYW55W10sIGZpZWxkOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKTogYW55W10ge1xuICAgICAgdGhpcy5jaGVja1BhcmFtcyhmaWVsZCk7XG4gICAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgICAgcmV0dXJuIGxpc3Q7XG4gICAgICB9XG4gICAgICBpZiAobGlzdCAmJiBsaXN0Lmxlbmd0aCA+IDAgJiYgZmllbGQpIHtcbiAgICAgICAgIHJldHVybiBsaXN0LmZpbHRlcigoZWxlbWVudCkgPT4gdGhpcy5jb250YWlucyhlbGVtZW50LCBmaWVsZCwgc2VhcmNoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGNvbnRhaW5zKGVsZW1lbnQ6IGFueSwgZmllbGQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGlmICh0aGlzLmlzRGVmaW5lZChlbGVtZW50KSAmJiB0aGlzLmlzU3RyaW5nKGZpZWxkKSAmJiB0aGlzLmlzU3RyaW5nKHNlYXJjaCkgJiYgdGhpcy5pc1N0cmluZyhlbGVtZW50W2ZpZWxkXSkpIHtcbiAgICAgICAgIHJldHVybiBlbGVtZW50W2ZpZWxkXS50b1VwcGVyQ2FzZSgpLnNlYXJjaChzZWFyY2gudG9VcHBlckNhc2UoKSkgPiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgIH1cblxuICAgcHJpdmF0ZSBpc0RlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG4gICB9XG5cbiAgIHByaXZhdGUgaXNTdHJpbmcodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEZWZpbmVkKHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgfVxuXG4gICBwcml2YXRlIGNoZWNrUGFyYW1zKGZpZWxkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5pc1N0cmluZyhmaWVsZCkpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcignUElQRTogc3RGaWx0ZXJMaXN0OiBcImZpZWxkXCIgaXMgYSByZXF1aXJlZCBhbmQgc3RyaW5nIHBhcmFtZXRlcicpO1xuICAgICAgfVxuICAgfVxufVxuIl19