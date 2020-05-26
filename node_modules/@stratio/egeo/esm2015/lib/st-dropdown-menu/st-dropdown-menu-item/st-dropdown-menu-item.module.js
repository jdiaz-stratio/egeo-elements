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
export class StDropdownMenuItemModule {
}
StDropdownMenuItemModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StBubbleModule],
                declarations: [StDropdownMenuItemComponent],
                exports: [StDropdownMenuItemComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS1pdGVtLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LWl0ZW0vc3QtZHJvcGRvd24tbWVudS1pdGVtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRaEYsTUFBTSxPQUFPLHdCQUF3Qjs7O1lBTHBDLFFBQVEsU0FBQztnQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUN2QyxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RCdWJibGVNb2R1bGUgfSBmcm9tICcuLy4uLy4uL3N0LWJ1YmJsZS9zdC1idWJibGUubW9kdWxlJztcbmltcG9ydCB7IFN0RHJvcGRvd25NZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc3QtZHJvcGRvd24tbWVudS1pdGVtLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN0QnViYmxlTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0RHJvcGRvd25NZW51SXRlbUNvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3REcm9wZG93bk1lbnVJdGVtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdERyb3Bkb3duTWVudUl0ZW1Nb2R1bGUgeyB9XG4iXX0=