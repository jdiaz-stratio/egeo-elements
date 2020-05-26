/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-select.module.ts
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StSelectComponent } from './st-select';
import { StCheckValidationsDirective } from './st-check-validations';
import { StLabelModule } from '../st-label/st-label.module';
import { StClickOutsideModule } from '../directives/st-click-outside/st-click-outside.module';
var StSelectModule = /** @class */ (function () {
    function StSelectModule() {
    }
    StSelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StDropdownMenuModule, FormsModule, ReactiveFormsModule, StLabelModule, StClickOutsideModule],
                    declarations: [StSelectComponent, StCheckValidationsDirective],
                    exports: [StSelectComponent, StCheckValidationsDirective]
                },] }
    ];
    return StSelectModule;
}());
export { StSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtc2VsZWN0L3N0LXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFFOUY7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQztvQkFDcEgsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsMkJBQTJCLENBQUM7b0JBQzlELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLDJCQUEyQixDQUFDO2lCQUMzRDs7SUFFRCxxQkFBQztDQUFBLEFBTkQsSUFNQztTQURZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0RHJvcGRvd25NZW51TW9kdWxlIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdFNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vc3Qtc2VsZWN0JztcbmltcG9ydCB7IFN0Q2hlY2tWYWxpZGF0aW9uc0RpcmVjdGl2ZSB9IGZyb20gJy4vc3QtY2hlY2stdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgU3RMYWJlbE1vZHVsZSB9IGZyb20gJy4uL3N0LWxhYmVsL3N0LWxhYmVsLm1vZHVsZSc7XG5pbXBvcnQgeyBTdENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc3QtY2xpY2stb3V0c2lkZS9zdC1jbGljay1vdXRzaWRlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdERyb3Bkb3duTWVudU1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFN0TGFiZWxNb2R1bGUsIFN0Q2xpY2tPdXRzaWRlTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0U2VsZWN0Q29tcG9uZW50LCBTdENoZWNrVmFsaWRhdGlvbnNEaXJlY3RpdmVdLFxuICAgZXhwb3J0czogW1N0U2VsZWN0Q29tcG9uZW50LCBTdENoZWNrVmFsaWRhdGlvbnNEaXJlY3RpdmVdXG59KVxuZXhwb3J0IGNsYXNzIFN0U2VsZWN0TW9kdWxlIHtcbn1cbiJdfQ==