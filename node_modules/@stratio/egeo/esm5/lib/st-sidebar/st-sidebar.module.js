/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar.module.ts
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
import { StSidebarComponent } from './st-sidebar.component';
import { StSidebarItemListComponent } from './st-sidebar-item-list/st-sidebar-item-list.component';
import { StSearchModule } from '../st-search/st-search.module';
var StSidebarModule = /** @class */ (function () {
    function StSidebarModule() {
    }
    StSidebarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSearchModule],
                    declarations: [StSidebarComponent, StSidebarItemListComponent],
                    exports: [StSidebarComponent]
                },] }
    ];
    return StSidebarModule;
}());
export { StSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNpZGViYXIvc3Qtc2lkZWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9EO0lBQUE7SUFPQSxDQUFDOztnQkFQQSxRQUFRLFNBQUM7b0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQztvQkFDdkMsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsMEJBQTBCLENBQUM7b0JBQzlELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUMvQjs7SUFHRCxzQkFBQztDQUFBLEFBUEQsSUFPQztTQURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3N0LXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0U2lkZWJhckl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdC1zaWRlYmFyLWl0ZW0tbGlzdC9zdC1zaWRlYmFyLWl0ZW0tbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RTZWFyY2hNb2R1bGUgfSBmcm9tICcuLi9zdC1zZWFyY2gvc3Qtc2VhcmNoLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdFNlYXJjaE1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdFNpZGViYXJDb21wb25lbnQsIFN0U2lkZWJhckl0ZW1MaXN0Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdFNpZGViYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgU3RTaWRlYmFyTW9kdWxlIHtcbn1cbiJdfQ==