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
var StDropdownMenuModule = /** @class */ (function () {
    function StDropdownMenuModule() {
    }
    StDropdownMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StPopModule, StSpinnerModule, StDropdownMenuItemModule],
                    declarations: [StDropdownMenuComponent],
                    exports: [StDropdownMenuComponent]
                },] }
    ];
    return StDropdownMenuModule;
}());
export { StDropdownMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUVoRztJQUFBO0lBS29DLENBQUM7O2dCQUxwQyxRQUFRLFNBQUM7b0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsd0JBQXdCLENBQUM7b0JBQy9FLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO29CQUN2QyxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDcEM7O0lBQ21DLDJCQUFDO0NBQUEsQUFMckMsSUFLcUM7U0FBeEIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3REcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICcuL3N0LWRyb3Bkb3duLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0UG9wTW9kdWxlIH0gZnJvbSAnLi4vc3QtcG9wL3N0LXBvcC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RTcGlubmVyTW9kdWxlIH0gZnJvbSAnLi4vc3Qtc3Bpbm5lci9zdC1zcGlubmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBTdERyb3Bkb3duTWVudUl0ZW1Nb2R1bGUgfSBmcm9tICcuL3N0LWRyb3Bkb3duLW1lbnUtaXRlbS9zdC1kcm9wZG93bi1tZW51LWl0ZW0ubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN0UG9wTW9kdWxlLCBTdFNwaW5uZXJNb2R1bGUsIFN0RHJvcGRvd25NZW51SXRlbU1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdERyb3Bkb3duTWVudUNvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3REcm9wZG93bk1lbnVDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN0RHJvcGRvd25NZW51TW9kdWxlIHsgfVxuIl19