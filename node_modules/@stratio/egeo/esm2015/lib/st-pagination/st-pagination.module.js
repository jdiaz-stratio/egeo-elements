/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.module.ts
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
import { StPaginationComponent } from './st-pagination.component';
import { StPaginationPipe } from './st-pagination.pipe';
import { StPaginationService } from './st-pagination.service';
import { StSelectModule } from '../st-select/st-select.module';
export class StPaginationModule {
}
StPaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StSelectModule],
                exports: [StPaginationComponent, StPaginationPipe],
                declarations: [StPaginationComponent, StPaginationPipe],
                providers: [
                    StPaginationService
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXBhZ2luYXRpb24vc3QtcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVS9ELE1BQU0sT0FBTyxrQkFBa0I7OztZQVI5QixRQUFRLFNBQUM7Z0JBQ1AsT0FBTyxFQUFFLENBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBRTtnQkFDekMsT0FBTyxFQUFFLENBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUU7Z0JBQ3BELFlBQVksRUFBRSxDQUFFLHFCQUFxQixFQUFFLGdCQUFnQixDQUFFO2dCQUN6RCxTQUFTLEVBQUU7b0JBQ1IsbUJBQW1CO2lCQUNyQjthQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1wYWdpbmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdFBhZ2luYXRpb25QaXBlIH0gZnJvbSAnLi9zdC1wYWdpbmF0aW9uLnBpcGUnO1xuaW1wb3J0IHsgU3RQYWdpbmF0aW9uU2VydmljZSB9IGZyb20gJy4vc3QtcGFnaW5hdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFN0U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc3Qtc2VsZWN0L3N0LXNlbGVjdC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIFN0U2VsZWN0TW9kdWxlIF0sXG4gICBleHBvcnRzOiBbIFN0UGFnaW5hdGlvbkNvbXBvbmVudCwgU3RQYWdpbmF0aW9uUGlwZSBdLFxuICAgZGVjbGFyYXRpb25zOiBbIFN0UGFnaW5hdGlvbkNvbXBvbmVudCwgU3RQYWdpbmF0aW9uUGlwZSBdLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICBTdFBhZ2luYXRpb25TZXJ2aWNlXG4gICBdXG59KVxuZXhwb3J0IGNsYXNzIFN0UGFnaW5hdGlvbk1vZHVsZSB7IH1cbiJdfQ==