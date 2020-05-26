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
var StSpinnerComponent = /** @class */ (function () {
    function StSpinnerComponent(_cd) {
        this._cd = _cd;
        /**
         * \@input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary'
         */
        this.theme = 'primary';
    }
    /**
     * @return {?}
     */
    StSpinnerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.classesValue = this.getClasses();
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StSpinnerComponent.prototype.getClasses = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = { path: true };
        if (this.theme) {
            /** @type {?} */
            var themeClass = 'path--' + this.theme;
            result[themeClass] = true;
        }
        return result;
    };
    StSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-spinner',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-spinner\">\n   <svg class=\"circular\" viewBox=\"25 25 50 50\" width=\"100%\" height=\"100%\">\n      <circle [ngClass]=\"classesValue\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\"/>\n   </svg>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%;height:100%}.st-spinner{display:inline}"]
                }] }
    ];
    /** @nocollapse */
    StSpinnerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StSpinnerComponent.propDecorators = {
        theme: [{ type: Input }]
    };
    return StSpinnerComponent;
}());
export { StSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNwaW5uZXIvc3Qtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWdCckc7SUFhRyw0QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFKakMsVUFBSyxHQUFXLFNBQVMsQ0FBQztJQUlVLENBQUM7Ozs7SUFFOUMscUNBQVE7OztJQUFSO1FBQ0csSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWOztZQUNTLE1BQU0sR0FBUSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFDUCxVQUFVLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ3hDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDOztnQkEzQkgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxZQUFZO29CQUN0Qix3c0JBQTBDO29CQUUxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQXJCaUMsaUJBQWlCOzs7d0JBeUIvQyxLQUFLOztJQW1CVCx5QkFBQztDQUFBLEFBNUJELElBNEJDO1NBckJZLGtCQUFrQjs7Ozs7O0lBRTVCLG1DQUFtQzs7SUFFbkMsMENBQXlCOzs7OztJQUViLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gU3Bpbm5lclxuICpcbiAqIFRoaXMgY29tcG9uZW50IHNob3dzIGEgc3Bpbm5lciB3aGVuIHNvbWV0aGluZyBpcyBiZWluZyBsb2FkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogICAgPHN0LXNwaW5uZXIgdGhlbWU9XCJzZWNvbmRhcnlcIj5cbiAqICAgIDwvc3Qtc3Bpbm5lcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3Qtc3Bpbm5lcicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3Qtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN0U3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFt0aGVtZT0ncHJpbWFyeSddIE5hbWUgb2YgdGhlIHNwaW5uZXIgdGhlbWUuIEJ5IGRlZmF1bHQgaXQgaXMgJ3ByaW1hcnknICovXG4gICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gJ3ByaW1hcnknO1xuXG4gICBwdWJsaWMgY2xhc3Nlc1ZhbHVlOiBhbnk7XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNsYXNzZXNWYWx1ZSA9IHRoaXMuZ2V0Q2xhc3NlcygpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIGdldENsYXNzZXMoKTogYW55IHtcbiAgICAgIGNvbnN0IHJlc3VsdDogYW55ID0ge3BhdGg6IHRydWV9O1xuICAgICAgaWYgKHRoaXMudGhlbWUpIHtcbiAgICAgICAgIGNvbnN0IHRoZW1lQ2xhc3MgPSAncGF0aC0tJyArIHRoaXMudGhlbWU7XG4gICAgICAgICByZXN1bHRbdGhlbWVDbGFzc10gPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgIH1cbn1cbiJdfQ==