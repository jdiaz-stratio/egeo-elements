/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dynamic-table/st-dynamic-table.module.ts
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
import { StTableModule } from '../st-table/st-table.module';
import { StDynamicTableComponent } from './st-dynamic-table.component';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';
var StDynamicTableModule = /** @class */ (function () {
    function StDynamicTableModule() {
    }
    StDynamicTableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StTableModule, StCheckboxModule],
                    declarations: [StDynamicTableComponent],
                    exports: [StDynamicTableComponent]
                },] }
    ];
    return StDynamicTableModule;
}());
export { StDynamicTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHluYW1pYy10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWR5bmFtaWMtdGFibGUvc3QtZHluYW1pYy10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFO0lBQUE7SUFPQSxDQUFDOztnQkFQQSxRQUFRLFNBQUM7b0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDeEQsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDO2lCQUNwQzs7SUFHRCwyQkFBQztDQUFBLEFBUEQsSUFPQztTQURZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0VGFibGVNb2R1bGUgfSBmcm9tICcuLi9zdC10YWJsZS9zdC10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3REeW5hbWljVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3N0LWR5bmFtaWMtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9zdC1jaGVja2JveC9zdC1jaGVja2JveC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RUYWJsZU1vZHVsZSwgU3RDaGVja2JveE1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdER5bmFtaWNUYWJsZUNvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3REeW5hbWljVGFibGVDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgU3REeW5hbWljVGFibGVNb2R1bGUge1xufVxuIl19