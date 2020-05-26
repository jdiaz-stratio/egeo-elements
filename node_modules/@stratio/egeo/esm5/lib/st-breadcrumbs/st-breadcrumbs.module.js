/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs.module.ts
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
import { StBreadCrumbsComponent } from './st-breadcrumbs.component';
import { StBreadcrumbItemComponent } from './st-breadcrumbs-item/st-breadcrumbs-item.component';
var StBreadcrumbsModule = /** @class */ (function () {
    function StBreadcrumbsModule() {
    }
    StBreadcrumbsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [StBreadCrumbsComponent, StBreadcrumbItemComponent],
                    declarations: [StBreadCrumbsComponent, StBreadcrumbItemComponent]
                },] }
    ];
    return StBreadcrumbsModule;
}());
export { StBreadcrumbsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnJlYWRjcnVtYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1icmVhZGNydW1icy9zdC1icmVhZGNydW1icy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFaEc7SUFBQTtJQUtrQyxDQUFDOztnQkFMbEMsUUFBUSxTQUFDO29CQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUseUJBQXlCLENBQUM7b0JBQzVELFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLHlCQUF5QixDQUFDO2lCQUNuRTs7SUFDaUMsMEJBQUM7Q0FBQSxBQUxuQyxJQUttQztTQUF0QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEJyZWFkQ3J1bWJzQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1icmVhZGNydW1icy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RCcmVhZGNydW1iSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc3QtYnJlYWRjcnVtYnMtaXRlbS9zdC1icmVhZGNydW1icy1pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgIGV4cG9ydHM6IFtTdEJyZWFkQ3J1bWJzQ29tcG9uZW50LCBTdEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50XSxcbiAgIGRlY2xhcmF0aW9uczogW1N0QnJlYWRDcnVtYnNDb21wb25lbnQsIFN0QnJlYWRjcnVtYkl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN0QnJlYWRjcnVtYnNNb2R1bGUge31cbiJdfQ==