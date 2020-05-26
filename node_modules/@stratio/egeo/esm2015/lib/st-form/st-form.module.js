/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form.module.ts
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StFormComponent } from './st-form.component';
import { PipesModule } from '../pipes/pipes.module';
import { StInputModule } from '../st-input/st-input.module';
import { StFormDirectiveModule } from '../directives/form/form-directives.module';
import { StFormFieldModule } from './st-form-field/st-form-field.module';
import { StSelectModule } from '../st-select/st-select.module';
import { StSwitchModule } from '../st-switch/st-switch.module';
import { StTextareaModule } from '../st-textarea/st-textarea.module';
export class StFormModule {
}
StFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    StFormFieldModule,
                    ReactiveFormsModule,
                    StInputModule,
                    PipesModule,
                    StSelectModule,
                    StSwitchModule,
                    StFormDirectiveModule,
                    StTextareaModule
                ],
                declarations: [StFormComponent],
                exports: [StFormComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZvcm0vc3QtZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFPLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFtQnJFLE1BQU0sT0FBTyxZQUFZOzs7WUFqQnhCLFFBQVEsU0FBQztnQkFDUCxPQUFPLEVBQUU7b0JBQ04sWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsZ0JBQWdCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3N0LWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFBpcGVzTW9kdWxlIH0gZnJvbSAnLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7IFN0SW5wdXRNb2R1bGUgfSBmcm9tICcuLi9zdC1pbnB1dC9zdC1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RGb3JtRGlyZWN0aXZlTW9kdWxlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9mb3JtL2Zvcm0tZGlyZWN0aXZlcy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RGb3JtRmllbGRNb2R1bGUgfSBmcm9tICcuL3N0LWZvcm0tZmllbGQvc3QtZm9ybS1maWVsZC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RTZWxlY3RNb2R1bGUgfSBmcm9tICcuLi9zdC1zZWxlY3Qvc3Qtc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdFN3aXRjaE1vZHVsZSB9IGZyb20gJy4uL3N0LXN3aXRjaC9zdC1zd2l0Y2gubW9kdWxlJztcbmltcG9ydCB7IFN0VGV4dGFyZWFNb2R1bGUgfSBmcm9tICcuLi9zdC10ZXh0YXJlYS9zdC10ZXh0YXJlYS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICBTdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBTdElucHV0TW9kdWxlLFxuICAgICAgUGlwZXNNb2R1bGUsXG4gICAgICBTdFNlbGVjdE1vZHVsZSxcbiAgICAgIFN0U3dpdGNoTW9kdWxlLFxuICAgICAgU3RGb3JtRGlyZWN0aXZlTW9kdWxlLFxuICAgICAgU3RUZXh0YXJlYU1vZHVsZVxuICAgXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0Rm9ybUNvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3RGb3JtQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFN0Rm9ybU1vZHVsZSB7XG59XG4iXX0=