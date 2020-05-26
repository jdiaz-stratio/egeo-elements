/**
 * @fileoverview added by tsickle
 * Generated from: lib/egeo.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { StAlertsService } from './st-alerts/st-alerts.service';
import { StModalService } from './st-modal/st-modal.service';
import { StPaginationService } from './st-pagination/st-pagination.service';
import { EgeoResolveService } from './utils/egeo-resolver/egeo-resolve.service';
import { SelectOneDispatcher } from './utils/unique-dispatcher';
import { StWindowRefService } from './utils/window-service';
import { DECLARATIONS } from './barrels';
var EgeoModule = /** @class */ (function () {
    function EgeoModule() {
    }
    /**
     * @return {?}
     */
    EgeoModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: EgeoModule,
            providers: [
                StModalService,
                StPaginationService,
                EgeoResolveService,
                SelectOneDispatcher,
                StAlertsService,
                StWindowRefService
            ]
        };
    };
    EgeoModule.decorators = [
        { type: NgModule, args: [{
                    imports: tslib_1.__spread([
                        CommonModule
                    ], DECLARATIONS),
                    declarations: [],
                    exports: tslib_1.__spread(DECLARATIONS)
                },] }
    ];
    return EgeoModule;
}());
export { EgeoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdlby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL2VnZW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXpDO0lBQUE7SUF3QkEsQ0FBQzs7OztJQWJTLGtCQUFPOzs7SUFBZDtRQUNHLE9BQU87WUFDSixRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1IsY0FBYztnQkFDZCxtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQixlQUFlO2dCQUNmLGtCQUFrQjthQUNwQjtTQUNILENBQUM7SUFDTCxDQUFDOztnQkF2QkgsUUFBUSxTQUFDO29CQUNQLE9BQU87d0JBQ0osWUFBWTt1QkFDVCxZQUFZLENBQ2pCO29CQUNELFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLG1CQUNELFlBQVksQ0FDakI7aUJBQ0g7O0lBZUQsaUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQWRZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEFsZXJ0c1NlcnZpY2UgfSBmcm9tICcuL3N0LWFsZXJ0cy9zdC1hbGVydHMuc2VydmljZSc7XG5pbXBvcnQgeyBTdE1vZGFsU2VydmljZSB9IGZyb20gJy4vc3QtbW9kYWwvc3QtbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBTdFBhZ2luYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zdC1wYWdpbmF0aW9uL3N0LXBhZ2luYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBFZ2VvUmVzb2x2ZVNlcnZpY2UgfSBmcm9tICcuL3V0aWxzL2VnZW8tcmVzb2x2ZXIvZWdlby1yZXNvbHZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0T25lRGlzcGF0Y2hlciB9IGZyb20gJy4vdXRpbHMvdW5pcXVlLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RXaW5kb3dSZWZTZXJ2aWNlIH0gZnJvbSAnLi91dGlscy93aW5kb3ctc2VydmljZSc7XG5cbmltcG9ydCB7IERFQ0xBUkFUSU9OUyB9IGZyb20gJy4vYmFycmVscyc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbXG4gICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAuLi5ERUNMQVJBVElPTlNcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgZXhwb3J0czogW1xuICAgICAgLi4uREVDTEFSQVRJT05TXG4gICBdXG59KVxuZXhwb3J0IGNsYXNzIEVnZW9Nb2R1bGUge1xuICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgbmdNb2R1bGU6IEVnZW9Nb2R1bGUsXG4gICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIFN0TW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgU3RQYWdpbmF0aW9uU2VydmljZSxcbiAgICAgICAgICAgIEVnZW9SZXNvbHZlU2VydmljZSxcbiAgICAgICAgICAgIFNlbGVjdE9uZURpc3BhdGNoZXIsXG4gICAgICAgICAgICBTdEFsZXJ0c1NlcnZpY2UsXG4gICAgICAgICAgICBTdFdpbmRvd1JlZlNlcnZpY2VcbiAgICAgICAgIF1cbiAgICAgIH07XG4gICB9XG59XG4iXX0=