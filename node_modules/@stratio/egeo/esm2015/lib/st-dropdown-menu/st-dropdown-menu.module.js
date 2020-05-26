/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.module.ts
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
import { StDropdownMenuComponent } from './st-dropdown-menu.component';
import { StPopModule } from '../st-pop/st-pop.module';
import { StSpinnerModule } from '../st-spinner/st-spinner.module';
import { StDropdownMenuItemModule } from './st-dropdown-menu-item/st-dropdown-menu-item.module';
export class StDropdownMenuModule {
}
StDropdownMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StPopModule, StSpinnerModule, StDropdownMenuItemModule],
                declarations: [StDropdownMenuComponent],
                exports: [StDropdownMenuComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU9oRyxNQUFNLE9BQU8sb0JBQW9COzs7WUFMaEMsUUFBUSxTQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixDQUFDO2dCQUMvRSxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDdkMsT0FBTyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdERyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3QtZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RQb3BNb2R1bGUgfSBmcm9tICcuLi9zdC1wb3Avc3QtcG9wLm1vZHVsZSc7XG5pbXBvcnQgeyBTdFNwaW5uZXJNb2R1bGUgfSBmcm9tICcuLi9zdC1zcGlubmVyL3N0LXNwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IFN0RHJvcGRvd25NZW51SXRlbU1vZHVsZSB9IGZyb20gJy4vc3QtZHJvcGRvd24tbWVudS1pdGVtL3N0LWRyb3Bkb3duLW1lbnUtaXRlbS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RQb3BNb2R1bGUsIFN0U3Bpbm5lck1vZHVsZSwgU3REcm9wZG93bk1lbnVJdGVtTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0RHJvcGRvd25NZW51Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdERyb3Bkb3duTWVudUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3REcm9wZG93bk1lbnVNb2R1bGUgeyB9XG4iXX0=