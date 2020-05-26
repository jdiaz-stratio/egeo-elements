/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/menu/menu.ts
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
import { ChangeDetectionStrategy, Component, Input, ElementRef, Output, EventEmitter } from '@angular/core';
var StHeaderMenuComponent = /** @class */ (function () {
    function StHeaderMenuComponent(elementRef) {
        this.elementRef = elementRef;
        this.selectMenu = new EventEmitter();
    }
    Object.defineProperty(StHeaderMenuComponent.prototype, "qaId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.id + '-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StHeaderMenuComponent.prototype, "itemId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.elementRef.nativeElement.id + '-item';
        },
        enumerable: true,
        configurable: true
    });
    StHeaderMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-header-menu',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<nav class=\"st-header-menu\" [attr.id]=\"qaId\">\n   <st-header-menu-option *ngFor=\"let option of menu\" class=\"st-header-menu-item\" [option]=\"option\" [attr.id]=\"itemId\" [showMenuName]=\"showMenuNames\" (selectMenu)=\"selectMenu.emit($event)\"></st-header-menu-option>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StHeaderMenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StHeaderMenuComponent.propDecorators = {
        menu: [{ type: Input }],
        showMenuNames: [{ type: Input }],
        selectMenu: [{ type: Output }]
    };
    return StHeaderMenuComponent;
}());
export { StHeaderMenuComponent };
if (false) {
    /** @type {?} */
    StHeaderMenuComponent.prototype.menu;
    /** @type {?} */
    StHeaderMenuComponent.prototype.showMenuNames;
    /** @type {?} */
    StHeaderMenuComponent.prototype.selectMenu;
    /** @type {?} */
    StHeaderMenuComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaGVhZGVyL21lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQ0osdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUFZRywrQkFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYvQixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFFM0IsQ0FBQztJQUU5QyxzQkFBVyx1Q0FBSTs7OztRQUFmO1lBQ0csT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3JELENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUNBQU07Ozs7UUFBakI7WUFDRyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7O2dCQXBCSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsZ3VCQUEwQjtvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2pEOzs7O2dCQVhFLFVBQVU7Ozt1QkFjVCxLQUFLO2dDQUNMLEtBQUs7NkJBRUwsTUFBTTs7SUFXViw0QkFBQztDQUFBLEFBckJELElBcUJDO1NBaEJZLHFCQUFxQjs7O0lBRS9CLHFDQUFvQzs7SUFDcEMsOENBQWdDOztJQUVoQywyQ0FBd0U7O0lBRTVELDJDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ29tcG9uZW50LFxuICAgSW5wdXQsXG4gICBFbGVtZW50UmVmLFxuICAgT3V0cHV0LFxuICAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEhlYWRlck1lbnVPcHRpb24gfSBmcm9tICcuLi9zdC1oZWFkZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtaGVhZGVyLW1lbnUnLFxuICAgdGVtcGxhdGVVcmw6ICcuL21lbnUuaHRtbCcsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdEhlYWRlck1lbnVDb21wb25lbnQge1xuXG4gICBASW5wdXQoKSBtZW51OiBTdEhlYWRlck1lbnVPcHRpb25bXTtcbiAgIEBJbnB1dCgpIHNob3dNZW51TmFtZXM6IGJvb2xlYW47XG5cbiAgIEBPdXRwdXQoKSBzZWxlY3RNZW51OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgIHB1YmxpYyBnZXQgcWFJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkICsgJy1saXN0JztcbiAgIH1cblxuICAgcHVibGljIGdldCBpdGVtSWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZCArICctaXRlbSc7XG4gICB9XG59XG4iXX0=