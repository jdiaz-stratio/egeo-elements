/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-label/st-label.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var StLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StLabelComponent, _super);
    function StLabelComponent(_el, _cd) {
        var _this = _super.call(this, _el, _cd) || this;
        _this.classStLabel = true;
        return _this;
    }
    StLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-label]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span title=\"\"><ng-content></ng-content></span>\n",
                    styles: ["@charset \"UTF-8\";:host.st-tooltip,:host.st-tooltip-on{position:relative}:host.st-tooltip-on:before,:host.st-tooltip:before{content:attr(title)}:host.st-tooltip-on:after,:host.st-tooltip:after{content:\" \"}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:after,:host.st-tooltip:before{pointer-events:none;position:absolute}:host.st-tooltip:after,:host.st-tooltip:before{opacity:0;visibility:hidden}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:hover:after,:host.st-tooltip:hover:before{opacity:1;visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    StLabelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StLabelComponent.propDecorators = {
        classStLabel: [{ type: HostBinding, args: ['class.st-label',] }]
    };
    return StLabelComponent;
}(StTooltipComponent));
export { StLabelComponent };
if (false) {
    /** @type {?} */
    StLabelComponent.prototype.classStLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1sYWJlbC9zdC1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV4RTtJQU1zQyw0Q0FBa0I7SUFHckQsMEJBQVksR0FBZSxFQUFFLEdBQXNCO1FBQW5ELFlBQ0csa0JBQU0sR0FBRyxFQUFFLEdBQUcsQ0FBQyxTQUNqQjtRQUo4QixrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFJNUQsQ0FBQzs7Z0JBWEgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxZQUFZO29CQUV0QixxZkFBd0M7O2lCQUMxQzs7OztnQkFQbUQsVUFBVTtnQkFBN0IsaUJBQWlCOzs7K0JBVTlDLFdBQVcsU0FBQyxnQkFBZ0I7O0lBS2hDLHVCQUFDO0NBQUEsQUFaRCxDQU1zQyxrQkFBa0IsR0FNdkQ7U0FOWSxnQkFBZ0I7OztJQUMxQix3Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0VG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4uL3N0LXRvb2x0aXAvc3QtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnW3N0LWxhYmVsXScsXG4gICBzdHlsZVVybHM6IFsnLi4vc3QtdG9vbHRpcC9zdC10b29sdGlwLmNvbXBvbmVudC5zY3NzJ10sXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtbGFiZWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU3RMYWJlbENvbXBvbmVudCBleHRlbmRzIFN0VG9vbHRpcENvbXBvbmVudCB7XG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0LWxhYmVsJykgY2xhc3NTdExhYmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgY29uc3RydWN0b3IoX2VsOiBFbGVtZW50UmVmLCBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICBzdXBlcihfZWwsIF9jZCk7XG4gICB9XG59XG4iXX0=