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
var StRadioModule = /** @class */ (function () {
    function StRadioModule() {
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
    return StRadioModule;
}());
export { StRadioModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1yYWRpby9zdC1yYWRpby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTVEO0lBQUE7SUFZNkIsQ0FBQzs7Z0JBWjdCLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUU7d0JBQ04sWUFBWSxFQUFFLGFBQWE7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDTixnQkFBZ0IsRUFBRSxxQkFBcUI7cUJBQ3pDO29CQUNELFlBQVksRUFBRTt3QkFDWCxnQkFBZ0IsRUFBRSxxQkFBcUI7cUJBQ3pDO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNmOztJQUM0QixvQkFBQztDQUFBLEFBWjlCLElBWThCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFJhZGlvQ29tcG9uZW50LCBTdFJhZGlvR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3N0LXJhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdExhYmVsTW9kdWxlIH0gZnJvbSAnLi4vc3QtbGFiZWwvc3QtbGFiZWwubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSwgU3RMYWJlbE1vZHVsZVxuICAgXSxcbiAgIGV4cG9ydHM6IFtcbiAgICAgIFN0UmFkaW9Db21wb25lbnQsIFN0UmFkaW9Hcm91cENvbXBvbmVudFxuICAgXSxcbiAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgU3RSYWRpb0NvbXBvbmVudCwgU3RSYWRpb0dyb3VwQ29tcG9uZW50XG4gICBdLFxuICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdFJhZGlvTW9kdWxlIHsgfVxuIl19