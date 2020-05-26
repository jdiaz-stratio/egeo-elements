/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.module.ts
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
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { StDemoGenerator } from './demo-generator';
import { DemoGeneratorProviders } from './demo-generator.interface';
import { routing } from './demo-generator.routing';
export class StDemoGeneratorModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static withComponents(config) {
        return {
            ngModule: StDemoGeneratorModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config.components, multi: true },
                { provide: DemoGeneratorProviders, useValue: config }
            ]
        };
    }
}
StDemoGeneratorModule.decorators = [
    { type: NgModule, args: [{
                id: 'Demo-factory',
                imports: [CommonModule, routing],
                exports: [StDemoGenerator],
                declarations: [StDemoGenerator],
                entryComponents: [StDemoGenerator],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby1nZW5lcmF0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9kZW1vLWdlbmVyYXRvci9kZW1vLWdlbmVyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVVuRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUMvQixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQThCO1FBQ2pELE9BQU87WUFDSixRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDUixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2dCQUNuRixFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQ3ZEO1NBQ0gsQ0FBQztJQUNMLENBQUM7OztZQWpCSCxRQUFRLFNBQUM7Z0JBQ1AsRUFBRSxFQUFFLGNBQWM7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDMUIsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixlQUFlLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2xDLFNBQVMsRUFBRSxFQUFFO2FBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdERlbW9HZW5lcmF0b3IgfSBmcm9tICcuL2RlbW8tZ2VuZXJhdG9yJztcbmltcG9ydCB7IERlbW9HZW5lcmF0b3JQcm92aWRlcnMgfSBmcm9tICcuL2RlbW8tZ2VuZXJhdG9yLmludGVyZmFjZSc7XG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9kZW1vLWdlbmVyYXRvci5yb3V0aW5nJztcblxuQE5nTW9kdWxlKHtcbiAgIGlkOiAnRGVtby1mYWN0b3J5JyxcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIHJvdXRpbmddLFxuICAgZXhwb3J0czogW1N0RGVtb0dlbmVyYXRvcl0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdERlbW9HZW5lcmF0b3JdLFxuICAgZW50cnlDb21wb25lbnRzOiBbU3REZW1vR2VuZXJhdG9yXSxcbiAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3REZW1vR2VuZXJhdG9yTW9kdWxlIHtcbiAgIHN0YXRpYyB3aXRoQ29tcG9uZW50cyhjb25maWc6IERlbW9HZW5lcmF0b3JQcm92aWRlcnMpOiBhbnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIG5nTW9kdWxlOiBTdERlbW9HZW5lcmF0b3JNb2R1bGUsXG4gICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgdXNlVmFsdWU6IGNvbmZpZy5jb21wb25lbnRzLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBEZW1vR2VuZXJhdG9yUHJvdmlkZXJzLCB1c2VWYWx1ZTogY29uZmlnIH1cbiAgICAgICAgIF1cbiAgICAgIH07XG4gICB9XG59XG4iXX0=