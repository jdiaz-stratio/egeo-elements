/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu-item/st-dropdown-menu-item.module.ts
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
import { StBubbleModule } from './../../st-bubble/st-bubble.module';
import { StDropdownMenuItemComponent } from './st-dropdown-menu-item.component';
var StDropdownMenuItemModule = /** @class */ (function () {
    function StDropdownMenuItemModule() {
    }
    StDropdownMenuItemModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StBubbleModule],
                    declarations: [StDropdownMenuItemComponent],
                    exports: [StDropdownMenuItemComponent]
                },] }
    ];
    return StDropdownMenuItemModule;
}());
export { StDropdownMenuItemModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS1pdGVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LWl0ZW0vc3QtZHJvcGRvd24tbWVudS1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHaEY7SUFBQTtJQUt3QyxDQUFDOztnQkFMeEMsUUFBUSxTQUFDO29CQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLENBQUM7b0JBQ3ZDLFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDeEM7O0lBQ3VDLCtCQUFDO0NBQUEsQUFMekMsSUFLeUM7U0FBNUIsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0QnViYmxlTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9zdC1idWJibGUvc3QtYnViYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBTdERyb3Bkb3duTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3N0LWRyb3Bkb3duLW1lbnUtaXRlbS5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdEJ1YmJsZU1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdERyb3Bkb3duTWVudUl0ZW1Db21wb25lbnRdLFxuICAgZXhwb3J0czogW1N0RHJvcGRvd25NZW51SXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgU3REcm9wZG93bk1lbnVJdGVtTW9kdWxlIHsgfVxuIl19