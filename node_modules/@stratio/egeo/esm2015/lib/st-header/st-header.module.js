/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/st-header.module.ts
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
import { RouterModule } from '@angular/router';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StHeaderComponent } from './st-header.component';
import { StHeaderMenuOptionComponent } from './menu-option/menu-option';
import { StHeaderMenuComponent } from './menu/menu';
export class StHeaderModule {
}
StHeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    StDropdownMenuModule
                ],
                declarations: [
                    StHeaderComponent,
                    StHeaderMenuOptionComponent,
                    StHeaderMenuComponent
                ],
                exports: [StHeaderComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaGVhZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaGVhZGVyL3N0LWhlYWRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQWdCcEQsTUFBTSxPQUFPLGNBQWM7OztZQWIxQixRQUFRLFNBQUM7Z0JBQ1AsT0FBTyxFQUFFO29CQUNOLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixvQkFBb0I7aUJBQ3RCO2dCQUNELFlBQVksRUFBRTtvQkFDWCxpQkFBaUI7b0JBQ2pCLDJCQUEyQjtvQkFDM0IscUJBQXFCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdERyb3Bkb3duTWVudU1vZHVsZSB9IGZyb20gJy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBTdEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vc3QtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdEhlYWRlck1lbnVPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL21lbnUtb3B0aW9uL21lbnUtb3B0aW9uJztcbmltcG9ydCB7IFN0SGVhZGVyTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9tZW51JztcblxuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW1xuICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgU3REcm9wZG93bk1lbnVNb2R1bGVcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgIFN0SGVhZGVyQ29tcG9uZW50LFxuICAgICAgU3RIZWFkZXJNZW51T3B0aW9uQ29tcG9uZW50LFxuICAgICAgU3RIZWFkZXJNZW51Q29tcG9uZW50XG4gICBdLFxuICAgZXhwb3J0czogW1N0SGVhZGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdEhlYWRlck1vZHVsZSB7IH1cbiJdfQ==