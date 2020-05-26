/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio/st-radio.module.ts
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
import { StRadioComponent, StRadioGroupComponent } from './st-radio.component';
import { StLabelModule } from '../st-label/st-label.module';
export class StRadioModule {
}
StRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule, StLabelModule
                ],
                exports: [
                    StRadioComponent, StRadioGroupComponent
                ],
                declarations: [
                    StRadioComponent, StRadioGroupComponent
                ],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1yYWRpby9zdC1yYWRpby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBYzVELE1BQU0sT0FBTyxhQUFhOzs7WUFaekIsUUFBUSxTQUFDO2dCQUNQLE9BQU8sRUFBRTtvQkFDTixZQUFZLEVBQUUsYUFBYTtpQkFDN0I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNOLGdCQUFnQixFQUFFLHFCQUFxQjtpQkFDekM7Z0JBQ0QsWUFBWSxFQUFFO29CQUNYLGdCQUFnQixFQUFFLHFCQUFxQjtpQkFDekM7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0UmFkaW9Db21wb25lbnQsIFN0UmFkaW9Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vc3QtcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7IFN0TGFiZWxNb2R1bGUgfSBmcm9tICcuLi9zdC1sYWJlbC9zdC1sYWJlbC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLCBTdExhYmVsTW9kdWxlXG4gICBdLFxuICAgZXhwb3J0czogW1xuICAgICAgU3RSYWRpb0NvbXBvbmVudCwgU3RSYWRpb0dyb3VwQ29tcG9uZW50XG4gICBdLFxuICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICBTdFJhZGlvQ29tcG9uZW50LCBTdFJhZGlvR3JvdXBDb21wb25lbnRcbiAgIF0sXG4gICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN0UmFkaW9Nb2R1bGUgeyB9XG4iXX0=