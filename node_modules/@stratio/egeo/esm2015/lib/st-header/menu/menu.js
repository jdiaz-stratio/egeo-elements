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
export class StHeaderMenuComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selectMenu = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get qaId() {
        return this.elementRef.nativeElement.id + '-list';
    }
    /**
     * @return {?}
     */
    get itemId() {
        return this.elementRef.nativeElement.id + '-item';
    }
}
StHeaderMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-header-menu',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<nav class=\"st-header-menu\" [attr.id]=\"qaId\">\n   <st-header-menu-option *ngFor=\"let option of menu\" class=\"st-header-menu-item\" [option]=\"option\" [attr.id]=\"itemId\" [showMenuName]=\"showMenuNames\" (selectMenu)=\"selectMenu.emit($event)\"></st-header-menu-option>\n</nav>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StHeaderMenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
StHeaderMenuComponent.propDecorators = {
    menu: [{ type: Input }],
    showMenuNames: [{ type: Input }],
    selectMenu: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaGVhZGVyL21lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQ0osdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkIsTUFBTSxPQUFPLHFCQUFxQjs7OztJQU8vQixZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRi9CLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUUzQixDQUFDOzs7O0lBRTlDLElBQVcsSUFBSTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsSUFBVyxNQUFNO1FBQ2QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQ3JELENBQUM7OztZQXBCSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsZ3VCQUEwQjtnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDakQ7Ozs7WUFYRSxVQUFVOzs7bUJBY1QsS0FBSzs0QkFDTCxLQUFLO3lCQUVMLE1BQU07Ozs7SUFIUCxxQ0FBb0M7O0lBQ3BDLDhDQUFnQzs7SUFFaEMsMkNBQXdFOztJQUU1RCwyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENvbXBvbmVudCxcbiAgIElucHV0LFxuICAgRWxlbWVudFJlZixcbiAgIE91dHB1dCxcbiAgIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RIZWFkZXJNZW51T3B0aW9uIH0gZnJvbSAnLi4vc3QtaGVhZGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWhlYWRlci1tZW51JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9tZW51Lmh0bWwnLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RIZWFkZXJNZW51Q29tcG9uZW50IHtcblxuICAgQElucHV0KCkgbWVudTogU3RIZWFkZXJNZW51T3B0aW9uW107XG4gICBASW5wdXQoKSBzaG93TWVudU5hbWVzOiBib29sZWFuO1xuXG4gICBAT3V0cHV0KCkgc2VsZWN0TWVudTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICBwdWJsaWMgZ2V0IHFhSWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZCArICctbGlzdCc7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXQgaXRlbUlkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaWQgKyAnLWl0ZW0nO1xuICAgfVxufVxuIl19