/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.service.ts
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
import * as _ from 'lodash';
var StPaginationService = /** @class */ (function () {
    function StPaginationService() {
    }
    /**
     * @param {?} items
     * @param {?} currentPage
     * @param {?} perPage
     * @return {?}
     */
    StPaginationService.prototype.newPage = /**
     * @param {?} items
     * @param {?} currentPage
     * @param {?} perPage
     * @return {?}
     */
    function (items, currentPage, perPage) {
        if (currentPage === 1) {
            this.initItem = 0;
        }
        else {
            this.initItem = perPage * (currentPage - 1);
        }
        if (perPage >= items.length) {
            return Object.assign([], items);
        }
        if (this.initItem >= items.length) {
            this.initItem = items.length - (perPage + 1);
            return Object.assign([], _.takeRight(items, perPage));
        }
        this.lastItem = (this.initItem + perPage);
        return Object.assign([], items.slice(this.initItem, this.lastItem));
    };
    StPaginationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StPaginationService.ctorParameters = function () { return []; };
    return StPaginationService;
}());
export { StPaginationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StPaginationService.prototype.initItem;
    /**
     * @type {?}
     * @private
     */
    StPaginationService.prototype.lastItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wYWdpbmF0aW9uL3N0LXBhZ2luYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCO0lBTUc7SUFDQSxDQUFDOzs7Ozs7O0lBRUQscUNBQU87Ozs7OztJQUFQLFVBQVEsS0FBWSxFQUFFLFdBQW1CLEVBQUUsT0FBZTtRQUN2RCxJQUFJLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7O2dCQTVCSCxVQUFVOzs7O0lBNkJYLDBCQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlksbUJBQW1COzs7Ozs7SUFFN0IsdUNBQXlCOzs7OztJQUN6Qix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0UGFnaW5hdGlvblNlcnZpY2Uge1xuXG4gICBwcml2YXRlIGluaXRJdGVtOiBudW1iZXI7XG4gICBwcml2YXRlIGxhc3RJdGVtOiBudW1iZXI7XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgfVxuXG4gICBuZXdQYWdlKGl0ZW1zOiBhbnlbXSwgY3VycmVudFBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKTogYW55W10ge1xuICAgICAgaWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgICAgICB0aGlzLmluaXRJdGVtID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmluaXRJdGVtID0gcGVyUGFnZSAqIChjdXJyZW50UGFnZSAtIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyUGFnZSA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBpdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluaXRJdGVtID49IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgdGhpcy5pbml0SXRlbSA9IGl0ZW1zLmxlbmd0aCAtIChwZXJQYWdlICsgMSk7XG4gICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgXy50YWtlUmlnaHQoaXRlbXMsIHBlclBhZ2UpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0SXRlbSA9ICh0aGlzLmluaXRJdGVtICsgcGVyUGFnZSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBpdGVtcy5zbGljZSh0aGlzLmluaXRJdGVtLCB0aGlzLmxhc3RJdGVtKSk7XG4gICB9XG59XG4iXX0=