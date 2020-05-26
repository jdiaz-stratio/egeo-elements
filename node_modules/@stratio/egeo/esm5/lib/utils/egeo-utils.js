/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/egeo-utils.ts
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
var /*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
EgeoUtils = /** @class */ (function () {
    function EgeoUtils() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    EgeoUtils.isDefined = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value !== undefined && value !== null;
    };
    /**
     * @param {?} scope
     * @param {?} inputs
     * @param {?} component
     * @return {?}
     */
    EgeoUtils.validateInputs = /**
     * @param {?} scope
     * @param {?} inputs
     * @param {?} component
     * @return {?}
     */
    function (scope, inputs, component) {
        var _this = this;
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            if (!_this.isDefined(scope[input])) {
                throw new Error(_this.toDash(component) + ": field " + input + " is a required field");
            }
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    EgeoUtils.toDash = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        try {
            return value.replace(/([A-Z])/g, (/**
             * @param {?} $1
             * @return {?}
             */
            function ($1) { return '-' + $1.toLowerCase(); })).substring(1);
        }
        catch (err) {
            return value;
        }
    };
    return EgeoUtils;
}());
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
export { EgeoUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdlby11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZWdlby11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7SUFBQTtJQXFCQSxDQUFDOzs7OztJQW5CUyxtQkFBUzs7OztJQUFoQixVQUFpQixLQUFVO1FBQ3hCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFFTSx3QkFBYzs7Ozs7O0lBQXJCLFVBQXNCLEtBQVUsRUFBRSxNQUFnQixFQUFFLFNBQWlCO1FBQXJFLGlCQU1DO1FBTEUsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLEtBQUs7WUFDbEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQVcsS0FBSyx5QkFBc0IsQ0FBQyxDQUFDO2FBQ25GO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVNLGdCQUFNOzs7O0lBQWIsVUFBYyxLQUFhO1FBQ3hCLElBQUk7WUFDRCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVTs7OztZQUFFLFVBQUMsRUFBRSxJQUFLLE9BQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDZjtJQUNKLENBQUM7SUFDSixnQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmV4cG9ydCBjbGFzcyBFZ2VvVXRpbHMge1xuXG4gICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuICAgfVxuXG4gICBzdGF0aWMgdmFsaWRhdGVJbnB1dHMoc2NvcGU6IGFueSwgaW5wdXRzOiBzdHJpbmdbXSwgY29tcG9uZW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICAgaWYgKCF0aGlzLmlzRGVmaW5lZChzY29wZVtpbnB1dF0pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7dGhpcy50b0Rhc2goY29tcG9uZW50KX06IGZpZWxkICR7aW5wdXR9IGlzIGEgcmVxdWlyZWQgZmllbGRgKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxuXG4gICBzdGF0aWMgdG9EYXNoKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgdHJ5IHtcbiAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oW0EtWl0pL2csICgkMSkgPT4gJy0nICsgJDEudG9Mb3dlckNhc2UoKSkuc3Vic3RyaW5nKDEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICB9XG59XG4iXX0=