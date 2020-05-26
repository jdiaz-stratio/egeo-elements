/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-filter-selector/st-filter-selector.module.ts
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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StFilterSelectorComponent } from './st-filter-selector.component';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StClickOutsideModule } from '../directives/st-click-outside/st-click-outside.module';
var StFilterSelectorModule = /** @class */ (function () {
    function StFilterSelectorModule() {
    }
    StFilterSelectorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StDropdownMenuModule, StClickOutsideModule],
                    declarations: [StFilterSelectorComponent],
                    exports: [StFilterSelectorComponent]
                },] }
    ];
    return StFilterSelectorModule;
}());
export { StFilterSelectorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZmlsdGVyLXNlbGVjdG9yL3N0LWZpbHRlci1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFOUY7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7b0JBQ25FLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO29CQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdEM7O0lBRUQsNkJBQUM7Q0FBQSxBQU5ELElBTUM7U0FEWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEZpbHRlclNlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1maWx0ZXItc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFN0RHJvcGRvd25NZW51TW9kdWxlIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc3QtY2xpY2stb3V0c2lkZS9zdC1jbGljay1vdXRzaWRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdERyb3Bkb3duTWVudU1vZHVsZSwgU3RDbGlja091dHNpZGVNb2R1bGVdLFxuICAgZGVjbGFyYXRpb25zOiBbU3RGaWx0ZXJTZWxlY3RvckNvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3RGaWx0ZXJTZWxlY3RvckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3RGaWx0ZXJTZWxlY3Rvck1vZHVsZSB7XG59XG4iXX0=