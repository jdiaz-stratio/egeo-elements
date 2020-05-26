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
export class StFilterSelectorModule {
}
StFilterSelectorModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StDropdownMenuModule, StClickOutsideModule],
                declarations: [StFilterSelectorComponent],
                exports: [StFilterSelectorComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLXNlbGVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZmlsdGVyLXNlbGVjdG9yL3N0LWZpbHRlci1zZWxlY3Rvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFPOUYsTUFBTSxPQUFPLHNCQUFzQjs7O1lBTGxDLFFBQVEsU0FBQztnQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7Z0JBQ25FLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN6QyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0RmlsdGVyU2VsZWN0b3JDb21wb25lbnQgfSBmcm9tICcuL3N0LWZpbHRlci1zZWxlY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3REcm9wZG93bk1lbnVNb2R1bGUgfSBmcm9tICcuLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUubW9kdWxlJztcbmltcG9ydCB7IFN0Q2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9zdC1jbGljay1vdXRzaWRlL3N0LWNsaWNrLW91dHNpZGUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN0RHJvcGRvd25NZW51TW9kdWxlLCBTdENsaWNrT3V0c2lkZU1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdEZpbHRlclNlbGVjdG9yQ29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdEZpbHRlclNlbGVjdG9yQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdEZpbHRlclNlbGVjdG9yTW9kdWxlIHtcbn1cbiJdfQ==