/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-horizontal-tabs/st-horizontal-tabs.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { StHorizontalTabStatus } from './st-horizontal-tabs.model';
import { StEgeo, StRequired } from '../decorators/require-decorators';
/**
 * \@description {Component} [Horizontal tabs]
 *
 * The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.
 *
 * \@model
 *
 *   [Id, text and optional status of a tab] {./st-horizontal-tabs.model.ts#StStHorizontalTab}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-horizontal-tabs [options]="options" [qaTag]="qaTag">
 * </st-horizontal-tabs>
 * ```
 *
 */
var StHorizontalTabsComponent = /** @class */ (function () {
    function StHorizontalTabsComponent() {
        /**
         * \@Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
         * active option name as param
         */
        this.changedOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options && this.options.length > 0) {
            this.activeOption = this.activeOption || this.options[0];
            this.activateOption(this.activeOption);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.isActive = /**
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
    StHorizontalTabsComponent.prototype.activateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.activeOption = option;
        this.changedOption.emit(option);
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    StHorizontalTabsComponent.prototype.getTabStatus = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        return tab.status ? StHorizontalTabStatus[tab.status] : '';
    };
    StHorizontalTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-horizontal-tabs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<nav class=\"st-horizontal-tabs\">\n   <a *ngFor=\"let option of options; let i = index;\"\n      class=\"tab {{getTabStatus(option)}}\"\n      (click)=\"activateOption(option)\"\n      href=\"javascript:void(0)\"\n      [ngClass]=\"{'tab--active': isActive(option)}\"\n      [attr.id]=\"qaTag + '-tab-' + i\">{{option.text}}</a>\n   <ng-content></ng-content>\n</nav>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-horizontal-tabs{position:relative;display:flex;width:100%;list-style:none}.tab{display:inline-block;text-align:center;box-sizing:border-box;line-height:1;padding:0 30px 7px;margin-top:auto;cursor:pointer}.tab--active{padding-bottom:5px}.line{display:block;transition:.4s ease-in-out}"]
                }] }
    ];
    StHorizontalTabsComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        qaTag: [{ type: Input }],
        changedOption: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], StHorizontalTabsComponent.prototype, "options", void 0);
    /**
     * \@description {Component} [Horizontal tabs]
     *
     * The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.
     *
     * \@model
     *
     *   [Id, text and optional status of a tab] {./st-horizontal-tabs.model.ts#StStHorizontalTab}
     *
     * \@example
     *
     * {html}
     *
     * ```
     * <st-horizontal-tabs [options]="options" [qaTag]="qaTag">
     * </st-horizontal-tabs>
     * ```
     *
     */
    StHorizontalTabsComponent = tslib_1.__decorate([
        StEgeo()
    ], StHorizontalTabsComponent);
    return StHorizontalTabsComponent;
}());
export { StHorizontalTabsComponent };
if (false) {
    /**
     * \@Input {StHorizontalTab} [activeOption=''] Current active option
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.activeOption;
    /**
     * \@Input {StHorizontalTab[]} [^options=''] An array of StHorizontalTab objects (see below) that defines the links
     * that will appear and that will be disabled
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.options;
    /**
     * \@Input {string} [qaTag=''] Prefix used to generate the id values for qa tests
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.qaTag;
    /**
     * \@Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
     * active option name as param
     * @type {?}
     */
    StHorizontalTabsComponent.prototype.changedOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaG9yaXpvbnRhbC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaG9yaXpvbnRhbC10YWJzL3N0LWhvcml6b250YWwtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXFCdEU7Ozs7O1FBb0JhLGtCQUFhLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBc0JoRyxDQUFDOzs7O0lBbkJFLDRDQUFROzs7SUFBUjtRQUNHLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7SUFDSixDQUFDOzs7OztJQUVELDRDQUFROzs7O0lBQVIsVUFBUyxNQUF1QjtRQUM3QixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLE1BQXVCO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7O0lBRUQsZ0RBQVk7Ozs7SUFBWixVQUFhLEdBQW9CO1FBQzlCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUQsQ0FBQzs7Z0JBekNILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtekJBQWtEO29CQUVsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7K0JBS0csS0FBSzswQkFJUyxLQUFLO3dCQUVuQixLQUFLO2dDQUlMLE1BQU07O0lBTmdCO1FBQXRCLFVBQVUsRUFBRTs7OERBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU54Qyx5QkFBeUI7UUFEckMsTUFBTSxFQUFFO09BQ0kseUJBQXlCLENBa0NyQztJQUFELGdDQUFDO0NBQUEsSUFBQTtTQWxDWSx5QkFBeUI7Ozs7OztJQUVuQyxpREFBdUM7Ozs7OztJQUl2Qyw0Q0FBa0Q7Ozs7O0lBRWxELDBDQUF1Qjs7Ozs7O0lBSXZCLGtEQUE2RiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbmRJbmRleCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTdEhvcml6b250YWxUYWIsIFN0SG9yaXpvbnRhbFRhYlN0YXR1cyB9IGZyb20gJy4vc3QtaG9yaXpvbnRhbC10YWJzLm1vZGVsJztcbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0hvcml6b250YWwgdGFic11cbiAqXG4gKiBUaGUgdGFicyBhcmUgYSBuYXZpZ2F0aW9uIGNvbXBvbmVudCB0aGF0IGRpdmlkZXMgY29udGVudCBpbnRvIHNlcGFyYXRlIHZpZXdzIGhpZGluZyB0aGUgb25lcyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBmb2N1c2VkIGluLlxuICpcbiAqIEBtb2RlbFxuICpcbiAqICAgW0lkLCB0ZXh0IGFuZCBvcHRpb25hbCBzdGF0dXMgb2YgYSB0YWJdIHsuL3N0LWhvcml6b250YWwtdGFicy5tb2RlbC50cyNTdFN0SG9yaXpvbnRhbFRhYn1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWhvcml6b250YWwtdGFicyBbb3B0aW9uc109XCJvcHRpb25zXCIgW3FhVGFnXT1cInFhVGFnXCI+XG4gKiA8L3N0LWhvcml6b250YWwtdGFicz5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWhvcml6b250YWwtdGFicycsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtaG9yaXpvbnRhbC10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWhvcml6b250YWwtdGFicy5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbkBTdEVnZW8oKVxuZXhwb3J0IGNsYXNzIFN0SG9yaXpvbnRhbFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgLyoqIEBJbnB1dCB7U3RIb3Jpem9udGFsVGFifSBbYWN0aXZlT3B0aW9uPScnXSBDdXJyZW50IGFjdGl2ZSBvcHRpb24gKi9cbiAgIEBJbnB1dCgpIGFjdGl2ZU9wdGlvbjogU3RIb3Jpem9udGFsVGFiO1xuICAgLyoqIEBJbnB1dCB7U3RIb3Jpem9udGFsVGFiW119IFteb3B0aW9ucz0nJ10gQW4gYXJyYXkgb2YgU3RIb3Jpem9udGFsVGFiIG9iamVjdHMgKHNlZSBiZWxvdykgdGhhdCBkZWZpbmVzIHRoZSBsaW5rc1xuICAgICogdGhhdCB3aWxsIGFwcGVhciBhbmQgdGhhdCB3aWxsIGJlIGRpc2FibGVkXG4gICAgKi9cbiAgIEBTdFJlcXVpcmVkKCkgQElucHV0KCkgb3B0aW9uczogU3RIb3Jpem9udGFsVGFiW107XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gUHJlZml4IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGlkIHZhbHVlcyBmb3IgcWEgdGVzdHMgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKiogQE91dHB1dCB7U3RIb3Jpem9udGFsVGFifSBbY2hhbmdlZE9wdGlvbj0nJ10gVGhpcyBldmVudCBpcyBlbWl0dGVkIHdoZW4gYWN0aXZlIG9wdGlvbiBoYXMgY2hhbmdlZC4gSXQgaGFzIHRoZVxuICAgICogYWN0aXZlIG9wdGlvbiBuYW1lIGFzIHBhcmFtXG4gICAgKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2VkT3B0aW9uOiBFdmVudEVtaXR0ZXI8U3RIb3Jpem9udGFsVGFiPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RIb3Jpem9udGFsVGFiPigpO1xuXG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24gPSB0aGlzLmFjdGl2ZU9wdGlvbiB8fCB0aGlzLm9wdGlvbnNbMF07XG4gICAgICAgICB0aGlzLmFjdGl2YXRlT3B0aW9uKHRoaXMuYWN0aXZlT3B0aW9uKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXNBY3RpdmUob3B0aW9uOiBTdEhvcml6b250YWxUYWIpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU9wdGlvbiA9PT0gb3B0aW9uO1xuICAgfVxuXG4gICBhY3RpdmF0ZU9wdGlvbihvcHRpb246IFN0SG9yaXpvbnRhbFRhYik6IHZvaWQge1xuICAgICAgdGhpcy5hY3RpdmVPcHRpb24gPSBvcHRpb247XG4gICAgICB0aGlzLmNoYW5nZWRPcHRpb24uZW1pdChvcHRpb24pO1xuICAgfVxuXG4gICBnZXRUYWJTdGF0dXModGFiOiBTdEhvcml6b250YWxUYWIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRhYi5zdGF0dXMgPyBTdEhvcml6b250YWxUYWJTdGF0dXNbdGFiLnN0YXR1c10gOiAnJztcbiAgIH1cbn1cbiJdfQ==