/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.module.ts
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
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { StModalComponent } from './st-modal.component';
import { StModalButtonsComponent } from './st-modal-buttons/st-modal-buttons';
export class StModalModule {
    /**
     * @param {?} components
     * @return {?}
     */
    static withComponents(components) {
        return {
            ngModule: StModalModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    }
}
StModalModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [StModalComponent, StModalButtonsComponent],
                exports: [StModalComponent],
                entryComponents: [StModalComponent],
                providers: []
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1tb2RhbC9zdC1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFTOUUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBQ3ZCLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBaUI7UUFDcEMsT0FBTztZQUNKLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDUixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDOUU7U0FDSCxDQUFDO0lBQ0wsQ0FBQzs7O1lBZkgsUUFBUSxTQUFDO2dCQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDbkMsU0FBUyxFQUFFLEVBQUU7YUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3N0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdE1vZGFsQnV0dG9uc0NvbXBvbmVudCB9IGZyb20gJy4vc3QtbW9kYWwtYnV0dG9ucy9zdC1tb2RhbC1idXR0b25zJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgZGVjbGFyYXRpb25zOiBbU3RNb2RhbENvbXBvbmVudCwgU3RNb2RhbEJ1dHRvbnNDb21wb25lbnRdLFxuICAgZXhwb3J0czogW1N0TW9kYWxDb21wb25lbnRdLFxuICAgZW50cnlDb21wb25lbnRzOiBbU3RNb2RhbENvbXBvbmVudF0sXG4gICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFN0TW9kYWxNb2R1bGUge1xuICAgc3RhdGljIHdpdGhDb21wb25lbnRzKGNvbXBvbmVudHM6IGFueVtdKTogYW55IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICBuZ01vZHVsZTogU3RNb2RhbE1vZHVsZSxcbiAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgeyBwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29tcG9uZW50cywgbXVsdGk6IHRydWUgfVxuICAgICAgICAgXVxuICAgICAgfTtcbiAgIH1cbn1cbiJdfQ==