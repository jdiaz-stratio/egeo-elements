/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tooltip/st-tooltip.component.ts
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
import { Component, ElementRef, HostBinding, HostListener, Input, ChangeDetectorRef } from '@angular/core';
var StTooltipComponent = /** @class */ (function () {
    function StTooltipComponent(_el, _cd) {
        this._el = _el;
        this._cd = _cd;
        this._onClick = this._onClick.bind(this);
    }
    Object.defineProperty(StTooltipComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._title = value;
            if (value) {
                this._el.nativeElement.setAttribute('title', value);
            }
            else {
                this._el.nativeElement.removeAttribute('title');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.title = this._el.nativeElement.title;
        this._checkTooltipState();
    };
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        document.removeEventListener('click', this._onClick);
    };
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._el) {
            this._checkTooltipState();
        }
    };
    /**
     * @return {?}
     */
    StTooltipComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.showOnClick && this.title) {
            this.classTooltipOn = true;
            document.addEventListener('click', this._onClick);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StTooltipComponent.prototype._checkTooltipState = /**
     * @private
     * @return {?}
     */
    function () {
        this.classTooltip = this.title && this.title.length && !this.showOnClick;
        this.classTooltipOn = false;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    StTooltipComponent.prototype._onClick = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._el.nativeElement.contains(event.target)) {
            this.classTooltipOn = false;
            document.removeEventListener('click', this._onClick);
            this._cd.markForCheck();
        }
    };
    StTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-tooltip]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span title=\"\"><ng-content></ng-content></span>\n",
                    styles: ["@charset \"UTF-8\";:host.st-tooltip,:host.st-tooltip-on{position:relative}:host.st-tooltip-on:before,:host.st-tooltip:before{content:attr(title)}:host.st-tooltip-on:after,:host.st-tooltip:after{content:\" \"}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:after,:host.st-tooltip:before{pointer-events:none;position:absolute}:host.st-tooltip:after,:host.st-tooltip:before{opacity:0;visibility:hidden}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:hover:after,:host.st-tooltip:hover:before{opacity:1;visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    StTooltipComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StTooltipComponent.propDecorators = {
        classTooltip: [{ type: HostBinding, args: ['class.st-tooltip',] }],
        classTooltipOn: [{ type: HostBinding, args: ['class.st-tooltip-on',] }],
        showOnClick: [{ type: Input }],
        title: [{ type: Input, args: ['attr.title',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return StTooltipComponent;
}());
export { StTooltipComponent };
if (false) {
    /** @type {?} */
    StTooltipComponent.prototype.classTooltip;
    /** @type {?} */
    StTooltipComponent.prototype.classTooltipOn;
    /** @type {?} */
    StTooltipComponent.prototype.showOnClick;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._title;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXRvb2x0aXAvc3QtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUVwSjtJQXlCRyw0QkFBb0IsR0FBZSxFQUN4QixHQUFzQjtRQURiLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBaEJELHNCQUNJLHFDQUFLOzs7O1FBUVQ7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFYRCxVQUNVLEtBQWE7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDSixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEQ7UUFDSixDQUFDOzs7T0FBQTs7OztJQVVELHFDQUFROzs7SUFBUjtRQUNHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRyxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0csSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDNUI7SUFDSixDQUFDOzs7O0lBRXNCLG9DQUFPOzs7SUFBOUI7UUFDRyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtJQUNKLENBQUM7Ozs7O0lBRU8sK0NBQWtCOzs7O0lBQTFCO1FBQ0csSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxHQUFJLEtBQUssQ0FBQztJQUNoQyxDQUFDOzs7Ozs7SUFFTyxxQ0FBUTs7Ozs7SUFBaEIsVUFBaUIsS0FBWTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztZQUM1QixRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO0lBQ0osQ0FBQzs7Z0JBL0RILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsY0FBYztvQkFFeEIscWZBQTBDOztpQkFDNUM7Ozs7Z0JBTm1CLFVBQVU7Z0JBQXVELGlCQUFpQjs7OytCQVNsRyxXQUFXLFNBQUMsa0JBQWtCO2lDQUM5QixXQUFXLFNBQUMscUJBQXFCOzhCQUVqQyxLQUFLO3dCQUVMLEtBQUssU0FBQyxZQUFZOzBCQWlDbEIsWUFBWSxTQUFDLE9BQU87O0lBbUJ4Qix5QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBM0RZLGtCQUFrQjs7O0lBRTVCLDBDQUF1RDs7SUFDdkQsNENBQTREOztJQUU1RCx5Q0FBOEI7Ozs7O0lBQzlCLG9DQUF1Qjs7Ozs7SUFjWCxpQ0FBdUI7Ozs7O0lBQ2hDLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnW3N0LXRvb2x0aXBdJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXRvb2x0aXAuY29tcG9uZW50LnNjc3MnXSxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC10b29sdGlwLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcblxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC10b29sdGlwJykgY2xhc3NUb29sdGlwOiBib29sZWFuO1xuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC10b29sdGlwLW9uJykgY2xhc3NUb29sdGlwT246IGJvb2xlYW47XG5cbiAgIEBJbnB1dCgpIHNob3dPbkNsaWNrOiBib29sZWFuO1xuICAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcbiAgIEBJbnB1dCgnYXR0ci50aXRsZScpXG4gICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgfVxuICAgfVxuICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICB9XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnRpdGxlO1xuICAgICAgdGhpcy5fY2hlY2tUb29sdGlwU3RhdGUoKTtcbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgfVxuXG4gICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLl9lbCkge1xuICAgICAgICAgdGhpcy5fY2hlY2tUb29sdGlwU3RhdGUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc2hvd09uQ2xpY2sgJiYgdGhpcy50aXRsZSkge1xuICAgICAgICAgdGhpcy5jbGFzc1Rvb2x0aXBPbiA9IHRydWU7XG4gICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2spO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIF9jaGVja1Rvb2x0aXBTdGF0ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xhc3NUb29sdGlwID0gdGhpcy50aXRsZSAmJiB0aGlzLnRpdGxlLmxlbmd0aCAmJiAhdGhpcy5zaG93T25DbGljaztcbiAgICAgIHRoaXMuY2xhc3NUb29sdGlwT24gPSAgZmFsc2U7XG4gICB9XG5cbiAgIHByaXZhdGUgX29uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgdGhpcy5jbGFzc1Rvb2x0aXBPbiA9IGZhbHNlO1xuICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgfVxufVxuIl19