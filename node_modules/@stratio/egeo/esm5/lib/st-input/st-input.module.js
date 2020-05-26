/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-input/st-input.module.ts
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
import { StInputComponent } from './st-input.component';
import { StLabelModule } from '../st-label/st-label.module';
import { StFormDirectiveModule } from '../directives/form/form-directives.module';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StClickOutsideModule } from '../directives/st-click-outside/st-click-outside.module';
import { StMinValidator } from '../directives/form/st-min-validator/st-min-validator';
import { StMaxValidator } from '../directives/form/st-max-validator/st-max-validator';
var StInputModule = /** @class */ (function () {
    function StInputModule() {
    }
    StInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ReactiveFormsModule, StLabelModule, StFormDirectiveModule, StDropdownMenuModule, StClickOutsideModule],
                    declarations: [StInputComponent],
                    exports: [StInputComponent, StMinValidator, StMaxValidator]
                },] }
    ];
    return StInputModule;
}());
export { StInputModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaW5wdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1pbnB1dC9zdC1pbnB1dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXRGO0lBQUE7SUFNQSxDQUFDOztnQkFOQSxRQUFRLFNBQUM7b0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxhQUFhLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUM7b0JBQzNJLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO2lCQUM3RDs7SUFFRCxvQkFBQztDQUFBLEFBTkQsSUFNQztTQURZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3N0LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdExhYmVsTW9kdWxlIH0gZnJvbSAnLi4vc3QtbGFiZWwvc3QtbGFiZWwubW9kdWxlJztcbmltcG9ydCB7IFN0Rm9ybURpcmVjdGl2ZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZm9ybS9mb3JtLWRpcmVjdGl2ZXMubW9kdWxlJztcbmltcG9ydCB7IFN0RHJvcGRvd25NZW51TW9kdWxlIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvc3QtY2xpY2stb3V0c2lkZS9zdC1jbGljay1vdXRzaWRlLm1vZHVsZSc7XG5pbXBvcnQgeyBTdE1pblZhbGlkYXRvciB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZm9ybS9zdC1taW4tdmFsaWRhdG9yL3N0LW1pbi12YWxpZGF0b3InO1xuaW1wb3J0IHsgU3RNYXhWYWxpZGF0b3IgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvcm0vc3QtbWF4LXZhbGlkYXRvci9zdC1tYXgtdmFsaWRhdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBTdExhYmVsTW9kdWxlLCBTdEZvcm1EaXJlY3RpdmVNb2R1bGUsIFN0RHJvcGRvd25NZW51TW9kdWxlLCBTdENsaWNrT3V0c2lkZU1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdElucHV0Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdElucHV0Q29tcG9uZW50LCBTdE1pblZhbGlkYXRvciwgU3RNYXhWYWxpZGF0b3JdXG59KVxuZXhwb3J0IGNsYXNzIFN0SW5wdXRNb2R1bGUge1xufVxuIl19