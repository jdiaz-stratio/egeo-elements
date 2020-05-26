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
var StPaginationPipe = /** @class */ (function () {
    function StPaginationPipe(service) {
        this.service = service;
    }
    /**
     * @param {?} items
     * @param {?} args
     * @return {?}
     */
    StPaginationPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} args
     * @return {?}
     */
    function (items, args) {
        return this.service.newPage(items, args.currentPage, args.perPage);
    };
    StPaginationPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'paginate',
                    pure: false
                },] }
    ];
    /** @nocollapse */
    StPaginationPipe.ctorParameters = function () { return [
        { type: StPaginationService }
    ]; };
    return StPaginationPipe;
}());
export { StPaginationPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StPaginationPipe.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wYWdpbmF0aW9uL3N0LXBhZ2luYXRpb24ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU5RDtJQUtHLDBCQUNXLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQ25DLENBQUM7Ozs7OztJQUVMLG9DQUFTOzs7OztJQUFULFVBQVUsS0FBWSxFQUFFLElBQVM7UUFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7Z0JBWEgsSUFBSSxTQUFDO29CQUNILElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsS0FBSztpQkFDYjs7OztnQkFMUSxtQkFBbUI7O0lBYzVCLHVCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksZ0JBQWdCOzs7Ozs7SUFFdkIsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0UGFnaW5hdGlvblNlcnZpY2UgfSBmcm9tICcuL3N0LXBhZ2luYXRpb24uc2VydmljZSc7XG5cbkBQaXBlKHtcbiAgIG5hbWU6ICdwYWdpbmF0ZScsXG4gICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBTdFBhZ2luYXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc2VydmljZTogU3RQYWdpbmF0aW9uU2VydmljZVxuICAgKSB7IH1cblxuICAgdHJhbnNmb3JtKGl0ZW1zOiBhbnlbXSwgYXJnczogYW55KTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UubmV3UGFnZShpdGVtcywgYXJncy5jdXJyZW50UGFnZSwgYXJncy5wZXJQYWdlKTtcbiAgIH1cbn1cbiJdfQ==