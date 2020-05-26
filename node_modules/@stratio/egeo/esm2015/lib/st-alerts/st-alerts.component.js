/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-alerts/st-alerts.component.ts
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
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { StAlertsService } from './st-alerts.service';
/**
 * @description {Component} [Alerts]
 *
 * Alerts are made to let the user know errors or information about he is trying to do.
 *
 * @model
 *
 *  [Alert] {./st-alerts.model.ts#StAlert}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-alerts [showInConsole]="true"></st-alerts>
 *
 * ```
 */
export class StAlertsComponent {
    /**
     * @param {?} alertService
     */
    constructor(alertService) {
        this.alertService = alertService;
        /**
         * \@Input {boolean} [showInConsole=false] Display logs in console
         */
        this.showInConsole = false;
        /**
         * \@Input {string} [qaTag=] Component qa tag
         */
        this.qaTag = 'st-alert-manager';
    }
}
StAlertsComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-alerts',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div [attr.id]='qaTag' class=\"st-alerts sth-alerts\">\n   <st-alert-box class=\"st-alert-box\" *ngFor=\"let alert of (alertService.alertList | async)\" [alert]=\"alert\" [showInConsole]=\"showInConsole\"></st-alert-box>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-alert-box{margin-top:15px;display:block}.st-alerts{width:288px;position:fixed;right:15px;top:0}"]
            }] }
];
/** @nocollapse */
StAlertsComponent.ctorParameters = () => [
    { type: StAlertsService }
];
StAlertsComponent.propDecorators = {
    showInConsole: [{ type: Input }],
    qaTag: [{ type: Input }]
};
if (false) {
    /**
     * \@Input {boolean} [showInConsole=false] Display logs in console
     * @type {?}
     */
    StAlertsComponent.prototype.showInConsole;
    /**
     * \@Input {string} [qaTag=] Component qa tag
     * @type {?}
     */
    StAlertsComponent.prototype.qaTag;
    /** @type {?} */
    StAlertsComponent.prototype.alertService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYWxlcnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtYWxlcnRzL3N0LWFsZXJ0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVF0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBTTNCLFlBQ1UsWUFBNkI7UUFBN0IsaUJBQVksR0FBWixZQUFZLENBQWlCOzs7O1FBTDlCLGtCQUFhLEdBQVksS0FBSyxDQUFDOzs7O1FBRS9CLFVBQUssR0FBVyxrQkFBa0IsQ0FBQztJQUl4QyxDQUFDOzs7WUFoQ1AsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxXQUFXO2dCQUNyQix3cUJBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7Ozs7WUFQUSxlQUFlOzs7NEJBNEJwQixLQUFLO29CQUVMLEtBQUs7Ozs7Ozs7SUFGTiwwQ0FBd0M7Ozs7O0lBRXhDLGtDQUE0Qzs7SUFHekMseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RBbGVydCB9IGZyb20gJy4vc3QtYWxlcnRzLm1vZGVsJztcbmltcG9ydCB7IFN0QWxlcnRzU2VydmljZSB9IGZyb20gJy4vc3QtYWxlcnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtYWxlcnRzJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1hbGVydHMuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtYWxlcnRzLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtBbGVydHNdXG4gKlxuICogQWxlcnRzIGFyZSBtYWRlIHRvIGxldCB0aGUgdXNlciBrbm93IGVycm9ycyBvciBpbmZvcm1hdGlvbiBhYm91dCBoZSBpcyB0cnlpbmcgdG8gZG8uXG4gKlxuICogQG1vZGVsXG4gKlxuICogIFtBbGVydF0gey4vc3QtYWxlcnRzLm1vZGVsLnRzI1N0QWxlcnR9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1hbGVydHMgW3Nob3dJbkNvbnNvbGVdPVwidHJ1ZVwiPjwvc3QtYWxlcnRzPlxuICpcbiAqIGBgYFxuICovXG5leHBvcnQgY2xhc3MgU3RBbGVydHNDb21wb25lbnQge1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3Nob3dJbkNvbnNvbGU9ZmFsc2VdIERpc3BsYXkgbG9ncyBpbiBjb25zb2xlICovXG4gICBASW5wdXQoKSBzaG93SW5Db25zb2xlOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtxYVRhZz1dIENvbXBvbmVudCBxYSB0YWcgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmcgPSAnc3QtYWxlcnQtbWFuYWdlcic7XG5cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIGFsZXJ0U2VydmljZTogU3RBbGVydHNTZXJ2aWNlXG4gICApIHsgfVxufVxuIl19