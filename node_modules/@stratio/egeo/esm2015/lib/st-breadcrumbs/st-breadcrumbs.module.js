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
export class StBreadcrumbsModule {
}
StBreadcrumbsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [StBreadCrumbsComponent, StBreadcrumbItemComponent],
                declarations: [StBreadCrumbsComponent, StBreadcrumbItemComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnJlYWRjcnVtYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1icmVhZGNydW1icy9zdC1icmVhZGNydW1icy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFPaEcsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTC9CLFFBQVEsU0FBQztnQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLHlCQUF5QixDQUFDO2dCQUM1RCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSx5QkFBeUIsQ0FBQzthQUNuRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0QnJlYWRDcnVtYnNDb21wb25lbnQgfSBmcm9tICcuL3N0LWJyZWFkY3J1bWJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdEJyZWFkY3J1bWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1icmVhZGNydW1icy1pdGVtL3N0LWJyZWFkY3J1bWJzLWl0ZW0uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgZXhwb3J0czogW1N0QnJlYWRDcnVtYnNDb21wb25lbnQsIFN0QnJlYWRjcnVtYkl0ZW1Db21wb25lbnRdLFxuICAgZGVjbGFyYXRpb25zOiBbU3RCcmVhZENydW1ic0NvbXBvbmVudCwgU3RCcmVhZGNydW1iSXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3RCcmVhZGNydW1ic01vZHVsZSB7fVxuIl19