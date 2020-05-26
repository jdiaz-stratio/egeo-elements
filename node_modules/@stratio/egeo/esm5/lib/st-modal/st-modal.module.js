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
var StModalModule = /** @class */ (function () {
    function StModalModule() {
    }
    /**
     * @param {?} components
     * @return {?}
     */
    StModalModule.withComponents = /**
     * @param {?} components
     * @return {?}
     */
    function (components) {
        return {
            ngModule: StModalModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }
            ]
        };
    };
    StModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [StModalComponent, StModalButtonsComponent],
                    exports: [StModalComponent],
                    entryComponents: [StModalComponent],
                    providers: []
                },] }
    ];
    return StModalModule;
}());
export { StModalModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1tb2RhbC9zdC1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFOUU7SUFBQTtJQWdCQSxDQUFDOzs7OztJQVJTLDRCQUFjOzs7O0lBQXJCLFVBQXNCLFVBQWlCO1FBQ3BDLE9BQU87WUFDSixRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1IsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQzlFO1NBQ0gsQ0FBQztJQUNMLENBQUM7O2dCQWZILFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLHVCQUF1QixDQUFDO29CQUN6RCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ25DLFNBQVMsRUFBRSxFQUFFO2lCQUNmOztJQVVELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FUWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc3QtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0TW9kYWxCdXR0b25zQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1tb2RhbC1idXR0b25zL3N0LW1vZGFsLWJ1dHRvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdE1vZGFsQ29tcG9uZW50LCBTdE1vZGFsQnV0dG9uc0NvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3RNb2RhbENvbXBvbmVudF0sXG4gICBlbnRyeUNvbXBvbmVudHM6IFtTdE1vZGFsQ29tcG9uZW50XSxcbiAgIHByb3ZpZGVyczogW11cbn0pXG5leHBvcnQgY2xhc3MgU3RNb2RhbE1vZHVsZSB7XG4gICBzdGF0aWMgd2l0aENvbXBvbmVudHMoY29tcG9uZW50czogYW55W10pOiBhbnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgIG5nTW9kdWxlOiBTdE1vZGFsTW9kdWxlLFxuICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7IHByb3ZpZGU6IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIHVzZVZhbHVlOiBjb21wb25lbnRzLCBtdWx0aTogdHJ1ZSB9XG4gICAgICAgICBdXG4gICAgICB9O1xuICAgfVxufVxuIl19