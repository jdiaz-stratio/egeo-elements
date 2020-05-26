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
export class StPrismComponent {
    constructor() {
        this.async = false;
        this.callback = undefined;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.highlightAll(this.async, this.callback);
    }
    /**
     * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
     * language definitions to use, and returns a string with the HTML produced.
     * @param {?} element
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    highlightElement(element, async, callback) {
        Prism.highlightElement(element, async, callback);
    }
    /**
     * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
     * class and then calls Prism.highlightElement() on each one of them.
     * @param {?} async
     * @param {?=} callback
     * @return {?}
     */
    highlightAll(async, callback) {
        Prism.highlightAll(async, callback);
    }
}
StPrismComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                selector: 'st-prism-highlight',
                template: `<pre class="language-{{language}}" *ngIf="language"><code class="language-{{language}}"><ng-content></ng-content></code></pre>`
            }] }
];
StPrismComponent.propDecorators = {
    language: [{ type: Input, args: ['language',] }],
    async: [{ type: Input, args: ['async',] }],
    callback: [{ type: Input, args: ['callback',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcHJpc20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1kb2NzL3N0LXByaXNtL3N0LXByaXNtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBRUosU0FBUyxFQUNULEtBQUssRUFDTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxTQUFTLENBQUM7QUFDakIsT0FBTyxxQ0FBcUMsQ0FBQztBQVM3QyxNQUFNLE9BQU8sZ0JBQWdCO0lBTDdCO1FBUTBCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUE0QyxTQUFTLENBQUM7SUFxQjNGLENBQUM7Ozs7SUFuQkMsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsT0FBWSxFQUFFLEtBQWMsRUFBRSxRQUFpRDtRQUM5RixLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7OztJQU1ELFlBQVksQ0FBQyxLQUFjLEVBQUUsUUFBaUQ7UUFDNUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBN0JGLFNBQVMsU0FBQztnQkFDVCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLGdJQUFnSTthQUMzSTs7O3VCQUVFLEtBQUssU0FBQyxVQUFVO29CQUVoQixLQUFLLFNBQUMsT0FBTzt1QkFDYixLQUFLLFNBQUMsVUFBVTs7OztJQUhqQixvQ0FBb0M7Ozs7O0lBRXBDLGlDQUErQzs7Ozs7SUFDL0Msb0NBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7XG4gICBBZnRlclZpZXdDaGVja2VkLFxuICAgQ29tcG9uZW50LFxuICAgSW5wdXQsXG4gICBWaWV3RW5jYXBzdWxhdGlvblxuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gaW1wb3J0ICdwcmlzbWpzJztcbiBpbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0JztcblxuZGVjbGFyZSB2YXIgUHJpc207XG5cbiBAQ29tcG9uZW50KHtcbiAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICBzZWxlY3RvcjogJ3N0LXByaXNtLWhpZ2hsaWdodCcsXG4gICB0ZW1wbGF0ZTogYDxwcmUgY2xhc3M9XCJsYW5ndWFnZS17e2xhbmd1YWdlfX1cIiAqbmdJZj1cImxhbmd1YWdlXCI+PGNvZGUgY2xhc3M9XCJsYW5ndWFnZS17e2xhbmd1YWdlfX1cIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9jb2RlPjwvcHJlPmBcbiB9KVxuIGV4cG9ydCBjbGFzcyBTdFByaXNtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gICBASW5wdXQoJ2xhbmd1YWdlJykgbGFuZ3VhZ2U6IHN0cmluZztcblxuICAgQElucHV0KCdhc3luYycpIHByaXZhdGUgYXN5bmM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgnY2FsbGJhY2snKSBwcml2YXRlIGNhbGxiYWNrPzogKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHZvaWQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgdGhpcy5oaWdobGlnaHRBbGwodGhpcy5hc3luYywgdGhpcy5jYWxsYmFjayk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTG93LWxldmVsIGZ1bmN0aW9uLCBvbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdeKAmXJlIGRvaW5nLiBJdCBhY2NlcHRzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXQgYW5kIHRoZVxuICAgICogbGFuZ3VhZ2UgZGVmaW5pdGlvbnMgdG8gdXNlLCBhbmQgcmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSBIVE1MIHByb2R1Y2VkLlxuICAgICovXG4gICBoaWdobGlnaHRFbGVtZW50KGVsZW1lbnQ6IGFueSwgYXN5bmM6IGJvb2xlYW4sIGNhbGxiYWNrPzogKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHZvaWQgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYywgY2FsbGJhY2spO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFRoaXMgaXMgdGhlIG1vc3QgaGlnaC1sZXZlbCBmdW5jdGlvbiBpbiBQcmlzbeKAmXMgQVBJLiBJdCBmZXRjaGVzIGFsbCB0aGUgZWxlbWVudHMgdGhhdCBoYXZlIGEgLmxhbmd1YWdlLXh4eHhcbiAgICAqIGNsYXNzIGFuZCB0aGVuIGNhbGxzIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoKSBvbiBlYWNoIG9uZSBvZiB0aGVtLlxuICAgICovXG4gICBoaWdobGlnaHRBbGwoYXN5bmM6IGJvb2xlYW4sIGNhbGxiYWNrPzogKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHZvaWQgfCB1bmRlZmluZWQpOiB2b2lkIHtcbiAgICAgUHJpc20uaGlnaGxpZ2h0QWxsKGFzeW5jLCBjYWxsYmFjayk7XG4gICB9XG4gfVxuIl19