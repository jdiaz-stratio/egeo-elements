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
export class StDocsModule {
}
StDocsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, StPrismModule, StHorizontalTabsModule],
                declarations: [StDocsComponent],
                exports: [StDocsComponent],
                providers: [StDocsService]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZG9jcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRvY3Mvc3QtZG9jcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFRekQsTUFBTSxPQUFPLFlBQVk7OztZQU54QixRQUFRLFNBQUM7Z0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQztnQkFDaEYsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0RG9jc0NvbXBvbmVudCB9IGZyb20gJy4vc3QtZG9jcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RIb3Jpem9udGFsVGFic01vZHVsZSB9IGZyb20gJy4uL3N0LWhvcml6b250YWwtdGFicy9zdC1ob3Jpem9udGFsLXRhYnMubW9kdWxlJztcbmltcG9ydCB7IFN0RG9jc1NlcnZpY2UgfSBmcm9tICcuL3N0LWRvY3Muc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtTdFByaXNtTW9kdWxlfSBmcm9tICcuL3N0LXByaXNtL3N0LXByaXNtLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBTdFByaXNtTW9kdWxlLCBTdEhvcml6b250YWxUYWJzTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0RG9jc0NvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3REb2NzQ29tcG9uZW50XSxcbiAgIHByb3ZpZGVyczogW1N0RG9jc1NlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIFN0RG9jc01vZHVsZSB7XG59XG4iXX0=