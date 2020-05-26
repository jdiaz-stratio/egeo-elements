/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form/st-form-field/st-form-field.module.ts
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
import { StFormFieldComponent } from './st-form-field.component';
import { StInputModule } from '../../st-input/st-input.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StSelectModule } from '../../st-select/st-select.module';
import { StSwitchModule } from '../../st-switch/st-switch.module';
import { StTextareaModule } from '../../st-textarea/st-textarea.module';
var StFormFieldModule = /** @class */ (function () {
    function StFormFieldModule() {
    }
    StFormFieldModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        StInputModule,
                        StCheckboxModule,
                        StSelectModule,
                        StSwitchModule,
                        StTextareaModule,
                        StFormDirectiveModule],
                    declarations: [StFormFieldComponent],
                    exports: [StFormFieldComponent]
                },] }
    ];
    return StFormFieldModule;
}());
export { StFormFieldModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS1maWVsZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWZvcm0vc3QtZm9ybS1maWVsZC9zdC1mb3JtLWZpZWxkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFeEU7SUFBQTtJQWVBLENBQUM7O2dCQWZBLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZO3dCQUNuQixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLHFCQUFxQixDQUFDO29CQUN6QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2pDOztJQUdELHdCQUFDO0NBQUEsQUFmRCxJQWVDO1NBRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdEZvcm1GaWVsZENvbXBvbmVudCB9IGZyb20gJy4vc3QtZm9ybS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RJbnB1dE1vZHVsZSB9IGZyb20gJy4uLy4uL3N0LWlucHV0L3N0LWlucHV0Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdEZvcm1EaXJlY3RpdmVNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Zvcm0vZm9ybS1kaXJlY3RpdmVzLm1vZHVsZSc7XG5pbXBvcnQgeyBTdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vLi4vc3QtY2hlY2tib3gvc3QtY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IFN0U2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vc3Qtc2VsZWN0L3N0LXNlbGVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RTd2l0Y2hNb2R1bGUgfSBmcm9tICcuLi8uLi9zdC1zd2l0Y2gvc3Qtc3dpdGNoLm1vZHVsZSc7XG5pbXBvcnQgeyBTdFRleHRhcmVhTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3QtdGV4dGFyZWEvc3QtdGV4dGFyZWEubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXG4gICAgICBGb3Jtc01vZHVsZSxcbiAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICBTdElucHV0TW9kdWxlLFxuICAgICAgU3RDaGVja2JveE1vZHVsZSxcbiAgICAgIFN0U2VsZWN0TW9kdWxlLFxuICAgICAgU3RTd2l0Y2hNb2R1bGUsXG4gICAgICBTdFRleHRhcmVhTW9kdWxlLFxuICAgICAgU3RGb3JtRGlyZWN0aXZlTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0Rm9ybUZpZWxkQ29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdEZvcm1GaWVsZENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdEZvcm1GaWVsZE1vZHVsZSB7XG59XG4iXX0=