/**
 * @fileoverview added by tsickle
 * Generated from: lib/egeo.module.ts
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
import { StAlertsService } from './st-alerts/st-alerts.service';
import { StModalService } from './st-modal/st-modal.service';
import { StPaginationService } from './st-pagination/st-pagination.service';
import { EgeoResolveService } from './utils/egeo-resolver/egeo-resolve.service';
import { SelectOneDispatcher } from './utils/unique-dispatcher';
import { StWindowRefService } from './utils/window-service';
import { DECLARATIONS } from './barrels';
export class EgeoModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
EgeoModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ...DECLARATIONS
                ],
                declarations: [],
                exports: [
                    ...DECLARATIONS
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdlby5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL2VnZW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFZekMsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWCxPQUFPO1lBQ0osUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNSLGNBQWM7Z0JBQ2QsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixrQkFBa0I7YUFDcEI7U0FDSCxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkJILFFBQVEsU0FBQztnQkFDUCxPQUFPLEVBQUU7b0JBQ04sWUFBWTtvQkFDWixHQUFHLFlBQVk7aUJBQ2pCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUU7b0JBQ04sR0FBRyxZQUFZO2lCQUNqQjthQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RBbGVydHNTZXJ2aWNlIH0gZnJvbSAnLi9zdC1hbGVydHMvc3QtYWxlcnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3N0LW1vZGFsL3N0LW1vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RQYWdpbmF0aW9uU2VydmljZSB9IGZyb20gJy4vc3QtcGFnaW5hdGlvbi9zdC1wYWdpbmF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRWdlb1Jlc29sdmVTZXJ2aWNlIH0gZnJvbSAnLi91dGlscy9lZ2VvLXJlc29sdmVyL2VnZW8tcmVzb2x2ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlbGVjdE9uZURpc3BhdGNoZXIgfSBmcm9tICcuL3V0aWxzL3VuaXF1ZS1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0V2luZG93UmVmU2VydmljZSB9IGZyb20gJy4vdXRpbHMvd2luZG93LXNlcnZpY2UnO1xuXG5pbXBvcnQgeyBERUNMQVJBVElPTlMgfSBmcm9tICcuL2JhcnJlbHMnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgLi4uREVDTEFSQVRJT05TXG4gICBdLFxuICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgIGV4cG9ydHM6IFtcbiAgICAgIC4uLkRFQ0xBUkFUSU9OU1xuICAgXVxufSlcbmV4cG9ydCBjbGFzcyBFZ2VvTW9kdWxlIHtcbiAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIG5nTW9kdWxlOiBFZ2VvTW9kdWxlLFxuICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICBTdE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgIFN0UGFnaW5hdGlvblNlcnZpY2UsXG4gICAgICAgICAgICBFZ2VvUmVzb2x2ZVNlcnZpY2UsXG4gICAgICAgICAgICBTZWxlY3RPbmVEaXNwYXRjaGVyLFxuICAgICAgICAgICAgU3RBbGVydHNTZXJ2aWNlLFxuICAgICAgICAgICAgU3RXaW5kb3dSZWZTZXJ2aWNlXG4gICAgICAgICBdXG4gICAgICB9O1xuICAgfVxufVxuIl19