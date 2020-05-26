/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-docs/st-docs.module.ts
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
import { StDocsComponent } from './st-docs.component';
import { StHorizontalTabsModule } from '../st-horizontal-tabs/st-horizontal-tabs.module';
import { StDocsService } from './st-docs.service';
import { HttpClientModule } from '@angular/common/http';
import { StPrismModule } from './st-prism/st-prism.module';
var StDocsModule = /** @class */ (function () {
    function StDocsModule() {
    }
    StDocsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, StPrismModule, StHorizontalTabsModule],
                    declarations: [StDocsComponent],
                    exports: [StDocsComponent],
                    providers: [StDocsService]
                },] }
    ];
    return StDocsModule;
}());
export { StDocsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZG9jcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRvY3Mvc3QtZG9jcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFekQ7SUFBQTtJQU9BLENBQUM7O2dCQVBBLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixDQUFDO29CQUNoRixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDMUIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUM1Qjs7SUFFRCxtQkFBQztDQUFBLEFBUEQsSUFPQztTQURZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdERvY3NDb21wb25lbnQgfSBmcm9tICcuL3N0LWRvY3MuY29tcG9uZW50JztcbmltcG9ydCB7IFN0SG9yaXpvbnRhbFRhYnNNb2R1bGUgfSBmcm9tICcuLi9zdC1ob3Jpem9udGFsLXRhYnMvc3QtaG9yaXpvbnRhbC10YWJzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdERvY3NTZXJ2aWNlIH0gZnJvbSAnLi9zdC1kb2NzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7U3RQcmlzbU1vZHVsZX0gZnJvbSAnLi9zdC1wcmlzbS9zdC1wcmlzbS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgU3RQcmlzbU1vZHVsZSwgU3RIb3Jpem9udGFsVGFic01vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdERvY3NDb21wb25lbnRdLFxuICAgZXhwb3J0czogW1N0RG9jc0NvbXBvbmVudF0sXG4gICBwcm92aWRlcnM6IFtTdERvY3NTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBTdERvY3NNb2R1bGUge1xufVxuIl19