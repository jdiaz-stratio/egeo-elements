/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-prism/st-prism.component.ts
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
import { Component, Input, ViewEncapsulation } from '@angular/core';
import 'prismjs';
import 'prismjs/components/prism-typescript';
var StPrismComponent = /** @class */ (function () {
    function StPrismComponent() {
        this.async = false;
        this.callback = undefined;
    }
    /**
     * @return {?}
     */
    StPrismComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.highlightAll(this.async, this.callback);
    };
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     */
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     * @param {?} element
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    StPrismComponent.prototype.highlightElement = /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     * @param {?} element
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    function (element, async, callback) {
        Prism.highlightElement(element, async, callback);
    };
    /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     */
    /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    StPrismComponent.prototype.highlightAll = /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    function (async, callback) {
        Prism.highlightAll(async, callback);
    };
    StPrismComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'st-prism-highlight',
                    template: "<pre class=\"language-{{language}}\" *ngIf=\"language\"><code class=\"language-{{language}}\"><ng-content></ng-content></code></pre>"
                }] }
    ];
    StPrismComponent.propDecorators = {
        language: [{ type: Input, args: ['language',] }],
        async: [{ type: Input, args: ['async',] }],
        callback: [{ type: Input, args: ['callback',] }]
    };
    return StPrismComponent;
}());
export { StPrismComponent };
if (false) {
    /** @type {?} */
    StPrismComponent.prototype.language;
    /**
     * @type {?}
     * @private
     */
    StPrismComponent.prototype.async;
    /**
     * @type {?}
     * @private
     */
    StPrismComponent.prototype.callback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcHJpc20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1kb2NzL3N0LXByaXNtL3N0LXByaXNtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBRUosU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxTQUFTLENBQUM7QUFDakIsT0FBTyxxQ0FBcUMsQ0FBQztBQUk3QztJQUFBO1FBUTBCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUE0QyxTQUFTLENBQUM7SUFxQjNGLENBQUM7Ozs7SUFuQkMsNkNBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7OztJQUNILDJDQUFnQjs7Ozs7Ozs7SUFBaEIsVUFBaUIsT0FBWSxFQUFFLEtBQWMsRUFBRSxRQUFpRDtRQUM5RixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILHVDQUFZOzs7Ozs7O0lBQVosVUFBYSxLQUFjLEVBQUUsUUFBaUQ7UUFDNUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLHNJQUFnSTtpQkFDM0k7OzsyQkFFRSxLQUFLLFNBQUMsVUFBVTt3QkFFaEIsS0FBSyxTQUFDLE9BQU87MkJBQ2IsS0FBSyxTQUFDLFVBQVU7O0lBcUJuQix1QkFBQztDQUFBLEFBOUJELElBOEJDO1NBekJZLGdCQUFnQjs7O0lBQzNCLG9DQUFvQzs7Ozs7SUFFcEMsaUNBQStDOzs7OztJQUMvQyxvQ0FBeUYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHtcbiAgIEFmdGVyVmlld0NoZWNrZWQsXG4gICBDb21wb25lbnQsXG4gICBJbnB1dCxcbiAgIFZpZXdFbmNhcHN1bGF0aW9uXG4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiBpbXBvcnQgJ3ByaXNtanMnO1xuIGltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHQnO1xuXG5kZWNsYXJlIHZhciBQcmlzbTtcblxuIEBDb21wb25lbnQoe1xuICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgIHNlbGVjdG9yOiAnc3QtcHJpc20taGlnaGxpZ2h0JyxcbiAgIHRlbXBsYXRlOiBgPHByZSBjbGFzcz1cImxhbmd1YWdlLXt7bGFuZ3VhZ2V9fVwiICpuZ0lmPVwibGFuZ3VhZ2VcIj48Y29kZSBjbGFzcz1cImxhbmd1YWdlLXt7bGFuZ3VhZ2V9fVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2NvZGU+PC9wcmU+YFxuIH0pXG4gZXhwb3J0IGNsYXNzIFN0UHJpc21Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgIEBJbnB1dCgnbGFuZ3VhZ2UnKSBsYW5ndWFnZTogc3RyaW5nO1xuXG4gICBASW5wdXQoJ2FzeW5jJykgcHJpdmF0ZSBhc3luYzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCdjYWxsYmFjaycpIHByaXZhdGUgY2FsbGJhY2s/OiAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgICB0aGlzLmhpZ2hsaWdodEFsbCh0aGlzLmFzeW5jLCB0aGlzLmNhbGxiYWNrKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMb3ctbGV2ZWwgZnVuY3Rpb24sIG9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW914oCZcmUgZG9pbmcuIEl0IGFjY2VwdHMgYSBzdHJpbmcgb2YgdGV4dCBhcyBpbnB1dCBhbmQgdGhlXG4gICAgKiBsYW5ndWFnZSBkZWZpbml0aW9ucyB0byB1c2UsIGFuZCByZXR1cm5zIGEgc3RyaW5nIHdpdGggdGhlIEhUTUwgcHJvZHVjZWQuXG4gICAgKi9cbiAgIGhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudDogYW55LCBhc3luYzogYm9vbGVhbiwgY2FsbGJhY2s/OiAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZCB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVGhpcyBpcyB0aGUgbW9zdCBoaWdoLWxldmVsIGZ1bmN0aW9uIGluIFByaXNt4oCZcyBBUEkuIEl0IGZldGNoZXMgYWxsIHRoZSBlbGVtZW50cyB0aGF0IGhhdmUgYSAubGFuZ3VhZ2UteHh4eFxuICAgICogY2xhc3MgYW5kIHRoZW4gY2FsbHMgUHJpc20uaGlnaGxpZ2h0RWxlbWVudCgpIG9uIGVhY2ggb25lIG9mIHRoZW0uXG4gICAgKi9cbiAgIGhpZ2hsaWdodEFsbChhc3luYzogYm9vbGVhbiwgY2FsbGJhY2s/OiAoZWxlbWVudDogRWxlbWVudCkgPT4gdm9pZCB8IHVuZGVmaW5lZCk6IHZvaWQge1xuICAgICBQcmlzbS5oaWdobGlnaHRBbGwoYXN5bmMsIGNhbGxiYWNrKTtcbiAgIH1cbiB9XG4iXX0=