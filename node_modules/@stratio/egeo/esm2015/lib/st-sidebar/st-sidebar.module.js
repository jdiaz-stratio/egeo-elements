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
export class StSidebarModule {
}
StSidebarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StSearchModule],
                declarations: [StSidebarComponent, StSidebarItemListComponent],
                exports: [StSidebarComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2lkZWJhci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNpZGViYXIvc3Qtc2lkZWJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUS9ELE1BQU0sT0FBTyxlQUFlOzs7WUFOM0IsUUFBUSxTQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3ZDLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLDBCQUEwQixDQUFDO2dCQUM5RCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0U2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc3Qtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RTaWRlYmFySXRlbUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3N0LXNpZGViYXItaXRlbS1saXN0L3N0LXNpZGViYXItaXRlbS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdFNlYXJjaE1vZHVsZSB9IGZyb20gJy4uL3N0LXNlYXJjaC9zdC1zZWFyY2gubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN0U2VhcmNoTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0U2lkZWJhckNvbXBvbmVudCwgU3RTaWRlYmFySXRlbUxpc3RDb21wb25lbnRdLFxuICAgZXhwb3J0czogW1N0U2lkZWJhckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdFNpZGViYXJNb2R1bGUge1xufVxuIl19