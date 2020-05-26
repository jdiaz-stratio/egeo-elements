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
export class StZeroPageComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtemVyby1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtemVyby1wYWdlL3N0LXplcm8tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCakQsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsY0FBYztnQkFDeEIsNG9CQUF5Qzs7YUFFM0M7OztvQkFJRyxLQUFLO21CQUVMLEtBQUs7MEJBRUwsS0FBSzs7Ozs7OztJQUpOLG9DQUF1Qjs7Ozs7SUFFdkIsbUNBQXNCOzs7OztJQUV0QiwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbWmVybyBQYWdlXVxuICpcbiAqIFplcm8gcGFnZSBpcyBkaXNwbGF5ZWQgd2hlbiB0aGVyZSBhcmUgbm8gcmVzdWx0cyB0byBzaG93IGluIGEgdGFibGVcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogICAgICA8c3QtemVyby1wYWdlIGNsYXNzPVwiemVyby1wYWdlLWV4YW1wbGVcIlxuICogICAgICB0aXRsZT1cIlRoZXJlIGFyZSBubyBWYXJpYWJsZXMgY3JlYXRlZCB5ZXQgXCJcbiAqICAgICAgaW5mbz1cIlZhcmlhYmxlcyBoZWxwIHlvdSB0byBoYXZlIGNvbnNpc3RlbnQgdmFsdWVzIHRocm91Z2ggeW91ciBRdWFsaXR5IFJ1bGVzLCBBdHRyaWJ1dGVz4oCmXCJcbiAqICAgICAgaW1hZ2VTb3VyY2U9XCJhc3NldHMvaW1hZ2VzL3ZhcmlhYmxlLWljb24uc3ZnXCI+XG4gKiAgICAgIDwvc3QtemVyby1wYWdlPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC16ZXJvLXBhZ2UnLFxuICAgdGVtcGxhdGVVcmw6ICdzdC16ZXJvLXBhZ2UudGVtcGxhdGUuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnc3QtemVyby1wYWdlLnN0eWxlLnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0WmVyb1BhZ2VDb21wb25lbnQge1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbdGl0bGU9JyddIFRpdGxlIG1lc3NhZ2UgKi9cbiAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtpbmZvPScnXSBJbmZvIG1lc3NhZ2UgKi9cbiAgIEBJbnB1dCgpIGluZm86IHN0cmluZztcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2ltYWdlU291cmNlPScnXSBJbWFnZSBzb3VyY2UgcGF0aCAqL1xuICAgQElucHV0KCkgaW1hZ2VTb3VyY2U6IHN0cmluZztcbn1cbiJdfQ==