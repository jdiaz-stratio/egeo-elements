/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form-list/st-form-list.module.ts
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
import { PipesModule } from '../pipes/pipes.module';
import { StFormDirectiveModule } from '../directives/form/form-directives.module';
import { StFormListComponent } from './st-form-list.component';
import { StFormFieldModule } from '../st-form/st-form-field/st-form-field.module';
var StFormListModule = /** @class */ (function () {
    function StFormListModule() {
    }
    StFormListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        StFormFieldModule,
                        PipesModule,
                        StFormDirectiveModule
                    ],
                    declarations: [StFormListComponent],
                    exports: [StFormListComponent]
                },] }
    ];
    return StFormListModule;
}());
export { StFormListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZm9ybS1saXN0L3N0LWZvcm0tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUVsRjtJQUFBO0lBY0EsQ0FBQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNQLE9BQU8sRUFBRTt3QkFDTixZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLFdBQVc7d0JBQ1gscUJBQXFCO3FCQUN2QjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2hDOztJQUdELHVCQUFDO0NBQUEsQUFkRCxJQWNDO1NBRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBQaXBlc01vZHVsZSB9IGZyb20gJy4uL3BpcGVzL3BpcGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdEZvcm1EaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2Zvcm0vZm9ybS1kaXJlY3RpdmVzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdEZvcm1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdC1mb3JtLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFN0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnLi4vc3QtZm9ybS9zdC1mb3JtLWZpZWxkL3N0LWZvcm0tZmllbGQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtcbiAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgIFN0Rm9ybUZpZWxkTW9kdWxlLFxuICAgICAgUGlwZXNNb2R1bGUsXG4gICAgICBTdEZvcm1EaXJlY3RpdmVNb2R1bGVcbiAgIF0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdEZvcm1MaXN0Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdEZvcm1MaXN0Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFN0Rm9ybUxpc3RNb2R1bGUge1xufVxuIl19