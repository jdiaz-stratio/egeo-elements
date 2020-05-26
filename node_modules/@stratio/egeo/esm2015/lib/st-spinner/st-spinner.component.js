/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-spinner/st-spinner.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
/**
 * \@description {Component} Spinner
 *
 * This component shows a spinner when something is being loaded
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-spinner theme="secondary">
 *    </st-spinner>
 * ```
 */
export class StSpinnerComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        /**
         * \@input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary'
         */
        this.theme = 'primary';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.classesValue = this.getClasses();
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    getClasses() {
        /** @type {?} */
        const result = { path: true };
        if (this.theme) {
            /** @type {?} */
            const themeClass = 'path--' + this.theme;
            result[themeClass] = true;
        }
        return result;
    }
}
StSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-spinner',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-spinner\">\n   <svg class=\"circular\" viewBox=\"25 25 50 50\" width=\"100%\" height=\"100%\">\n      <circle [ngClass]=\"classesValue\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\"/>\n   </svg>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{width:100%;height:100%}.st-spinner{display:inline}"]
            }] }
];
/** @nocollapse */
StSpinnerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StSpinnerComponent.propDecorators = {
    theme: [{ type: Input }]
};
if (false) {
    /**
     * \@input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary'
     * @type {?}
     */
    StSpinnerComponent.prototype.theme;
    /** @type {?} */
    StSpinnerComponent.prototype.classesValue;
    /**
     * @type {?}
     * @private
     */
    StSpinnerComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNwaW5uZXIvc3Qtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQXVCckcsTUFBTSxPQUFPLGtCQUFrQjs7OztJQU01QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQUpqQyxVQUFLLEdBQVcsU0FBUyxDQUFDO0lBSVUsQ0FBQzs7OztJQUU5QyxRQUFRO1FBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsVUFBVTs7Y0FDRCxNQUFNLEdBQVEsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7a0JBQ1AsVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSztZQUN4QyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDakIsQ0FBQzs7O1lBM0JILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsd3NCQUEwQztnQkFFMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2pEOzs7O1lBckJpQyxpQkFBaUI7OztvQkF5Qi9DLEtBQUs7Ozs7Ozs7SUFBTixtQ0FBbUM7O0lBRW5DLDBDQUF5Qjs7Ozs7SUFFYixpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFNwaW5uZXJcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBzaG93cyBhIHNwaW5uZXIgd2hlbiBzb21ldGhpbmcgaXMgYmVpbmcgbG9hZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgIDxzdC1zcGlubmVyIHRoZW1lPVwic2Vjb25kYXJ5XCI+XG4gKiAgICA8L3N0LXNwaW5uZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXNwaW5uZXInLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3Qtc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdFNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nfSBbdGhlbWU9J3ByaW1hcnknXSBOYW1lIG9mIHRoZSBzcGlubmVyIHRoZW1lLiBCeSBkZWZhdWx0IGl0IGlzICdwcmltYXJ5JyAqL1xuICAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9ICdwcmltYXJ5JztcblxuICAgcHVibGljIGNsYXNzZXNWYWx1ZTogYW55O1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5jbGFzc2VzVmFsdWUgPSB0aGlzLmdldENsYXNzZXMoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBnZXRDbGFzc2VzKCk6IGFueSB7XG4gICAgICBjb25zdCByZXN1bHQ6IGFueSA9IHtwYXRoOiB0cnVlfTtcbiAgICAgIGlmICh0aGlzLnRoZW1lKSB7XG4gICAgICAgICBjb25zdCB0aGVtZUNsYXNzID0gJ3BhdGgtLScgKyB0aGlzLnRoZW1lO1xuICAgICAgICAgcmVzdWx0W3RoZW1lQ2xhc3NdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICB9XG59XG4iXX0=