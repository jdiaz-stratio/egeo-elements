/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-label/st-label.component.ts
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
import { Component, HostBinding, ChangeDetectorRef, ElementRef } from '@angular/core';
import { StTooltipComponent } from '../st-tooltip/st-tooltip.component';
export class StLabelComponent extends StTooltipComponent {
    /**
     * @param {?} _el
     * @param {?} _cd
     */
    constructor(_el, _cd) {
        super(_el, _cd);
        this.classStLabel = true;
    }
}
StLabelComponent.decorators = [
    { type: Component, args: [{
                selector: '[st-label]',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span title=\"\"><ng-content></ng-content></span>\n",
                styles: ["@charset \"UTF-8\";:host.st-tooltip,:host.st-tooltip-on{position:relative}:host.st-tooltip-on:before,:host.st-tooltip:before{content:attr(title)}:host.st-tooltip-on:after,:host.st-tooltip:after{content:\" \"}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:after,:host.st-tooltip:before{pointer-events:none;position:absolute}:host.st-tooltip:after,:host.st-tooltip:before{opacity:0;visibility:hidden}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:hover:after,:host.st-tooltip:hover:before{opacity:1;visibility:visible}"]
            }] }
];
/** @nocollapse */
StLabelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
StLabelComponent.propDecorators = {
    classStLabel: [{ type: HostBinding, args: ['class.st-label',] }]
};
if (false) {
    /** @type {?} */
    StLabelComponent.prototype.classStLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1sYWJlbC9zdC1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBUXhFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxrQkFBa0I7Ozs7O0lBR3JELFlBQVksR0FBZSxFQUFFLEdBQXNCO1FBQ2hELEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFIWSxpQkFBWSxHQUFZLElBQUksQ0FBQztJQUk1RCxDQUFDOzs7WUFYSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLFlBQVk7Z0JBRXRCLHFmQUF3Qzs7YUFDMUM7Ozs7WUFQbUQsVUFBVTtZQUE3QixpQkFBaUI7OzsyQkFVOUMsV0FBVyxTQUFDLGdCQUFnQjs7OztJQUE3Qix3Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0VG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4uL3N0LXRvb2x0aXAvc3QtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnW3N0LWxhYmVsXScsXG4gICBzdHlsZVVybHM6IFsnLi4vc3QtdG9vbHRpcC9zdC10b29sdGlwLmNvbXBvbmVudC5zY3NzJ10sXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU3RMYWJlbENvbXBvbmVudCBleHRlbmRzIFN0VG9vbHRpcENvbXBvbmVudCB7XG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0LWxhYmVsJykgY2xhc3NTdExhYmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgY29uc3RydWN0b3IoX2VsOiBFbGVtZW50UmVmLCBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICBzdXBlcihfZWwsIF9jZCk7XG4gICB9XG59XG4iXX0=