/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-zero-page/st-zero-page.component.ts
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
/**
 * \@description {Component} [Zero Page]
 *
 * Zero page is displayed when there are no results to show in a table
 *
 * \@example
 *
 * {html}
 *
 * ```
 *      <st-zero-page class="zero-page-example"
 *      title="There are no Variables created yet "
 *      info="Variables help you to have consistent values through your Quality Rules, Attributes…"
 *      imageSource="assets/images/variable-icon.svg">
 *      </st-zero-page>
 * ```
 */
var StZeroPageComponent = /** @class */ (function () {
    function StZeroPageComponent() {
    }
    StZeroPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-zero-page',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span class=\"image-container\"><img [attr.src]=\"imageSource\"></span>\n<h1 class=\"st-zero-page__title\">{{title}}</h1>\n<span class=\"st-zero-page__info\">{{info}}</span>\n<ng-content></ng-content>\n",
                    styles: ["@charset \"UTF-8\";:host{text-align:center;width:50%;margin:auto;display:flex;flex-direction:column;justify-content:center}.image-container{margin-bottom:50px}.image-container img{height:145px}.info,.title{width:100%;display:block}"]
                }] }
    ];
    StZeroPageComponent.propDecorators = {
        title: [{ type: Input }],
        info: [{ type: Input }],
        imageSource: [{ type: Input }]
    };
    return StZeroPageComponent;
}());
export { StZeroPageComponent };
if (false) {
    /**
     * \@Input {string} [title=''] Title message
     * @type {?}
     */
    StZeroPageComponent.prototype.title;
    /**
     * \@Input {string} [info=''] Info message
     * @type {?}
     */
    StZeroPageComponent.prototype.info;
    /**
     * \@Input {string} [imageSource=''] Image source path
     * @type {?}
     */
    StZeroPageComponent.prototype.imageSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtemVyby1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtemVyby1wYWdlL3N0LXplcm8tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakQ7SUFBQTtJQWFBLENBQUM7O2dCQWJBLFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsY0FBYztvQkFDeEIsNG9CQUF5Qzs7aUJBRTNDOzs7d0JBSUcsS0FBSzt1QkFFTCxLQUFLOzhCQUVMLEtBQUs7O0lBQ1QsMEJBQUM7Q0FBQSxBQWJELElBYUM7U0FQWSxtQkFBbUI7Ozs7OztJQUU3QixvQ0FBdUI7Ozs7O0lBRXZCLG1DQUFzQjs7Ozs7SUFFdEIsMENBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1plcm8gUGFnZV1cbiAqXG4gKiBaZXJvIHBhZ2UgaXMgZGlzcGxheWVkIHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMgdG8gc2hvdyBpbiBhIHRhYmxlXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgICAgPHN0LXplcm8tcGFnZSBjbGFzcz1cInplcm8tcGFnZS1leGFtcGxlXCJcbiAqICAgICAgdGl0bGU9XCJUaGVyZSBhcmUgbm8gVmFyaWFibGVzIGNyZWF0ZWQgeWV0IFwiXG4gKiAgICAgIGluZm89XCJWYXJpYWJsZXMgaGVscCB5b3UgdG8gaGF2ZSBjb25zaXN0ZW50IHZhbHVlcyB0aHJvdWdoIHlvdXIgUXVhbGl0eSBSdWxlcywgQXR0cmlidXRlc+KAplwiXG4gKiAgICAgIGltYWdlU291cmNlPVwiYXNzZXRzL2ltYWdlcy92YXJpYWJsZS1pY29uLnN2Z1wiPlxuICogICAgICA8L3N0LXplcm8tcGFnZT5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtemVyby1wYWdlJyxcbiAgIHRlbXBsYXRlVXJsOiAnc3QtemVyby1wYWdlLnRlbXBsYXRlLmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJ3N0LXplcm8tcGFnZS5zdHlsZS5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdFplcm9QYWdlQ29tcG9uZW50IHtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3RpdGxlPScnXSBUaXRsZSBtZXNzYWdlICovXG4gICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbaW5mbz0nJ10gSW5mbyBtZXNzYWdlICovXG4gICBASW5wdXQoKSBpbmZvOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtpbWFnZVNvdXJjZT0nJ10gSW1hZ2Ugc291cmNlIHBhdGggKi9cbiAgIEBJbnB1dCgpIGltYWdlU291cmNlOiBzdHJpbmc7XG59XG4iXX0=