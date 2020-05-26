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
export class StPaginationService {
    constructor() {
    }
    /**
     * @param {?} items
     * @param {?} currentPage
     * @param {?} perPage
     * @return {?}
     */
    newPage(items, currentPage, perPage) {
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
    }
}
StPaginationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StPaginationService.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wYWdpbmF0aW9uL3N0LXBhZ2luYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRzVCLE1BQU0sT0FBTyxtQkFBbUI7SUFLN0I7SUFDQSxDQUFDOzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVksRUFBRSxXQUFtQixFQUFFLE9BQWU7UUFDdkQsSUFBSSxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDMUIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUUxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7WUE1QkgsVUFBVTs7Ozs7Ozs7O0lBR1IsdUNBQXlCOzs7OztJQUN6Qix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0UGFnaW5hdGlvblNlcnZpY2Uge1xuXG4gICBwcml2YXRlIGluaXRJdGVtOiBudW1iZXI7XG4gICBwcml2YXRlIGxhc3RJdGVtOiBudW1iZXI7XG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgfVxuXG4gICBuZXdQYWdlKGl0ZW1zOiBhbnlbXSwgY3VycmVudFBhZ2U6IG51bWJlciwgcGVyUGFnZTogbnVtYmVyKTogYW55W10ge1xuICAgICAgaWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgICAgICB0aGlzLmluaXRJdGVtID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmluaXRJdGVtID0gcGVyUGFnZSAqIChjdXJyZW50UGFnZSAtIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGVyUGFnZSA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBpdGVtcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluaXRJdGVtID49IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgdGhpcy5pbml0SXRlbSA9IGl0ZW1zLmxlbmd0aCAtIChwZXJQYWdlICsgMSk7XG4gICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihbXSwgXy50YWtlUmlnaHQoaXRlbXMsIHBlclBhZ2UpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0SXRlbSA9ICh0aGlzLmluaXRJdGVtICsgcGVyUGFnZSk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFtdLCBpdGVtcy5zbGljZSh0aGlzLmluaXRJdGVtLCB0aGlzLmxhc3RJdGVtKSk7XG4gICB9XG59XG4iXX0=