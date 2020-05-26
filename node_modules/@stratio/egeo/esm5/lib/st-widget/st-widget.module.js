/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-widget/st-widget.module.ts
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
import { StProgressBarModule } from '../st-progress-bar/st-progress-bar.module';
import { StWidgetComponent } from './st-widget.component';
var StWidgetModule = /** @class */ (function () {
    function StWidgetModule() {
    }
    StWidgetModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StProgressBarModule],
                    exports: [StWidgetComponent],
                    declarations: [StWidgetComponent]
                },] }
    ];
    return StWidgetModule;
}());
export { StWidgetModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtd2lkZ2V0L3N0LXdpZGdldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFBQTtJQUs4QixDQUFDOztnQkFMOUIsUUFBUSxTQUFDO29CQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztvQkFDNUMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUNuQzs7SUFDNkIscUJBQUM7Q0FBQSxBQUwvQixJQUsrQjtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFByb2dyZXNzQmFyTW9kdWxlIH0gZnJvbSAnLi4vc3QtcHJvZ3Jlc3MtYmFyL3N0LXByb2dyZXNzLWJhci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3N0LXdpZGdldC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RQcm9ncmVzc0Jhck1vZHVsZV0sXG4gICBleHBvcnRzOiBbU3RXaWRnZXRDb21wb25lbnRdLFxuICAgZGVjbGFyYXRpb25zOiBbU3RXaWRnZXRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN0V2lkZ2V0TW9kdWxlIHsgfVxuIl19