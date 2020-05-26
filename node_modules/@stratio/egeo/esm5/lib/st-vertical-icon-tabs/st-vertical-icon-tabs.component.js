/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-vertical-icon-tabs/st-vertical-icon-tabs.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * \@description {Component} [Vertical Icon Tabs]
 *
 * The vertical icon tabs component has been designed to display content in different sections.
 *
 * \@model
 *
 *   [Icon tab] {./st-icon-tabs.model.ts#StIconTab}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-vertical-icon-tabs class="vertical-icon-tabs"
 * [options]="options"
 * [activeOption]="active"
 * (changeOption)="onChangeOption($event)">
 * </st-vertical-icon-tabs>
 * ```
 *
 */
var StVerticalIconTabsComponent = /** @class */ (function () {
    function StVerticalIconTabsComponent() {
        /**
         * \@Output {StIconTab} [changeOption=] Event emitted when user clicks on an option
         */
        this.changeOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StVerticalIconTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.length > 0) {
            this.activateOption(this.options[0]);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StVerticalIconTabsComponent.prototype.isActive = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this.activeOption === option;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StVerticalIconTabsComponent.prototype.activateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.changeOption.emit(option);
    };
    StVerticalIconTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-vertical-icon-tabs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<nav class=\"st-vertical-icon-tabs\">\n   <a *ngFor=\"let option of options\"\n      class=\"tab\"\n      href=\"javascript:void(0)\"\n      [ngClass]=\"{'tab--active': isActive(option)}\"\n      (click)=\"activateOption(option)\">\n      <i class=\"{{option.iconClass}}\"></i>\n      <span class=\"tab__text\">{{option.text}}</span>\n   </a>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";nav{display:flex;flex-direction:column;min-width:60px;height:100%}.tab{padding:12px 8px 12px 11px;text-align:center}.tab--active{width:101%;border-width:1px 0;border-style:solid;border-right:1px solid #fff}.tab:first-child.tab--active{border-top:none}.tab i{display:block;margin-bottom:6px}"]
                }] }
    ];
    StVerticalIconTabsComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        changeOption: [{ type: Output }]
    };
    return StVerticalIconTabsComponent;
}());
export { StVerticalIconTabsComponent };
if (false) {
    /**
     * \@Input {StIconTab} [activeOption=] Active option
     * @type {?}
     */
    StVerticalIconTabsComponent.prototype.activeOption;
    /**
     * \@Input {StIconTab[]} [options=] Option list
     * @type {?}
     */
    StVerticalIconTabsComponent.prototype.options;
    /**
     * \@Output {StIconTab} [changeOption=] Event emitted when user clicks on an option
     * @type {?}
     */
    StVerticalIconTabsComponent.prototype.changeOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdmVydGljYWwtaWNvbi10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdmVydGljYWwtaWNvbi10YWJzL3N0LXZlcnRpY2FsLWljb24tdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQnhHO0lBQUE7Ozs7UUFZYSxpQkFBWSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO0lBZ0JuRixDQUFDOzs7O0lBZEUsOENBQVE7OztJQUFSO1FBQ0csSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QztJQUNKLENBQUM7Ozs7O0lBRUQsOENBQVE7Ozs7SUFBUixVQUFTLE1BQWlCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxvREFBYzs7OztJQUFkLFVBQWUsTUFBaUI7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBMUJILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxveUJBQXFEO29CQUVyRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7K0JBR0csS0FBSzswQkFFTCxLQUFLOytCQUVMLE1BQU07O0lBZ0JWLGtDQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0F0QlksMkJBQTJCOzs7Ozs7SUFFckMsbURBQWlDOzs7OztJQUVqQyw4Q0FBOEI7Ozs7O0lBRTlCLG1EQUFnRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEljb25UYWIgfSBmcm9tICcuL3N0LWljb24tdGFicy5tb2RlbCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtWZXJ0aWNhbCBJY29uIFRhYnNdXG4gKlxuICogVGhlIHZlcnRpY2FsIGljb24gdGFicyBjb21wb25lbnQgaGFzIGJlZW4gZGVzaWduZWQgdG8gZGlzcGxheSBjb250ZW50IGluIGRpZmZlcmVudCBzZWN0aW9ucy5cbiAqXG4gKiBAbW9kZWxcbiAqXG4gKiAgIFtJY29uIHRhYl0gey4vc3QtaWNvbi10YWJzLm1vZGVsLnRzI1N0SWNvblRhYn1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXZlcnRpY2FsLWljb24tdGFicyBjbGFzcz1cInZlcnRpY2FsLWljb24tdGFic1wiXG4gKiBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAqIFthY3RpdmVPcHRpb25dPVwiYWN0aXZlXCJcbiAqIChjaGFuZ2VPcHRpb24pPVwib25DaGFuZ2VPcHRpb24oJGV2ZW50KVwiPlxuICogPC9zdC12ZXJ0aWNhbC1pY29uLXRhYnM+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC12ZXJ0aWNhbC1pY29uLXRhYnMnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXZlcnRpY2FsLWljb24tdGFicy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC12ZXJ0aWNhbC1pY29uLXRhYnMuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0VmVydGljYWxJY29uVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAvKiogQElucHV0IHtTdEljb25UYWJ9IFthY3RpdmVPcHRpb249XSBBY3RpdmUgb3B0aW9uICovXG4gICBASW5wdXQoKSBhY3RpdmVPcHRpb246IFN0SWNvblRhYjtcbiAgIC8qKiBASW5wdXQge1N0SWNvblRhYltdfSBbb3B0aW9ucz1dIE9wdGlvbiBsaXN0ICovXG4gICBASW5wdXQoKSBvcHRpb25zOiBTdEljb25UYWJbXTtcbiAgIC8qKiBAT3V0cHV0IHtTdEljb25UYWJ9IFtjaGFuZ2VPcHRpb249XSBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBjbGlja3Mgb24gYW4gb3B0aW9uICovXG4gICBAT3V0cHV0KCkgY2hhbmdlT3B0aW9uOiBFdmVudEVtaXR0ZXI8U3RJY29uVGFiPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RJY29uVGFiPigpO1xuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgIHRoaXMuYWN0aXZhdGVPcHRpb24odGhpcy5vcHRpb25zWzBdKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXNBY3RpdmUob3B0aW9uOiBTdEljb25UYWIpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9wdGlvbiA9PT0gb3B0aW9uO1xuICAgfVxuXG4gICBhY3RpdmF0ZU9wdGlvbihvcHRpb246IFN0SWNvblRhYik6IHZvaWQge1xuICAgICAgdGhpcy5jaGFuZ2VPcHRpb24uZW1pdChvcHRpb24pO1xuICAgfVxuXG59XG4iXX0=