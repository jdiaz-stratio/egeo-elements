/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs-item/st-breadcrumbs-item.component.ts
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
import { Component, Input } from '@angular/core';
export class StBreadcrumbItemComponent {
    /**
     * @return {?}
     */
    get qaTag() {
        return this._qaTag.replace(/ /g, '-');
    }
    /**
     * @param {?} qaTag
     * @return {?}
     */
    set qaTag(qaTag) {
        this._qaTag = qaTag;
    }
}
StBreadcrumbItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-breadcrumbs-item',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<li class=\"st-breadcrumbs__item\" [ngClass]=\"{'last': active}\" [attr.id]=\"qaTag\">\n    <span class=\"st-breadcrumbs__item--text\">\n      <ng-content select=\"i\"></ng-content>\n      <ng-content select=\"span\"></ng-content>\n   </span>\n</li>\n",
                styles: ["@charset \"UTF-8\";.st-breadcrumbs__item{display:inline}.st-breadcrumbs__item--text{cursor:pointer}.last .st-breadcrumbs__item--text{cursor:default;background-color:transparent}"]
            }] }
];
StBreadcrumbItemComponent.propDecorators = {
    qaTag: [{ type: Input }],
    active: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StBreadcrumbItemComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    StBreadcrumbItemComponent.prototype._qaTag;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnJlYWRjcnVtYnMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWJyZWFkY3J1bWJzL3N0LWJyZWFkY3J1bWJzLWl0ZW0vc3QtYnJlYWRjcnVtYnMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUNuQyxJQUNJLEtBQUs7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7O1lBYkgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDZyQkFBbUQ7O2FBRXJEOzs7b0JBRUcsS0FBSztxQkFTTCxLQUFLOzs7O0lBQU4sMkNBQXlCOzs7OztJQUV6QiwyQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWJyZWFkY3J1bWJzLWl0ZW0nLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWJyZWFkY3J1bWJzLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtYnJlYWRjcnVtYnMtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0QnJlYWRjcnVtYkl0ZW1Db21wb25lbnQge1xuICAgQElucHV0KClcbiAgIGdldCBxYVRhZygpOiBTdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3FhVGFnLnJlcGxhY2UoLyAvZywgJy0nKTtcbiAgIH1cblxuICAgc2V0IHFhVGFnKHFhVGFnOiBTdHJpbmcpIHtcbiAgICAgIHRoaXMuX3FhVGFnID0gcWFUYWc7XG4gICB9XG5cbiAgIEBJbnB1dCgpIGFjdGl2ZTogQm9vbGVhbjtcblxuICAgcHJpdmF0ZSBfcWFUYWc6IFN0cmluZztcbn1cbiJdfQ==