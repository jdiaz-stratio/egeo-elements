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
let StHorizontalTabsComponent = /**
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
class StHorizontalTabsComponent {
    constructor() {
        /**
         * \@Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
         * active option name as param
         */
        this.changedOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.options && this.options.length > 0) {
            this.activeOption = this.activeOption || this.options[0];
            this.activateOption(this.activeOption);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isActive(option) {
        return this.activeOption === option;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    activateOption(option) {
        this.activeOption = option;
        this.changedOption.emit(option);
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    getTabStatus(tab) {
        return tab.status ? StHorizontalTabStatus[tab.status] : '';
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaG9yaXpvbnRhbC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaG9yaXpvbnRhbC10YWJzL3N0LWhvcml6b250YWwtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEcsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNkJ6RCx5QkFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBekIseUJBQXlCO0lBUnRDOzs7OztRQW9CYSxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztJQXNCaEcsQ0FBQzs7OztJQW5CRSxRQUFRO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6QztJQUNKLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQXVCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBdUI7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBb0I7UUFDOUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RCxDQUFDO0NBQ0gsQ0FBQTs7WUExQ0EsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLG16QkFBa0Q7Z0JBRWxELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7OzJCQUtHLEtBQUs7c0JBSVMsS0FBSztvQkFFbkIsS0FBSzs0QkFJTCxNQUFNOztBQU5nQjtJQUF0QixVQUFVLEVBQUU7OzBEQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOeEMseUJBQXlCO0lBRHJDLE1BQU0sRUFBRTtHQUNJLHlCQUF5QixDQWtDckM7U0FsQ1kseUJBQXlCOzs7Ozs7SUFFbkMsaURBQXVDOzs7Ozs7SUFJdkMsNENBQWtEOzs7OztJQUVsRCwwQ0FBdUI7Ozs7OztJQUl2QixrREFBNkYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaW5kSW5kZXggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU3RIb3Jpem9udGFsVGFiLCBTdEhvcml6b250YWxUYWJTdGF0dXMgfSBmcm9tICcuL3N0LWhvcml6b250YWwtdGFicy5tb2RlbCc7XG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtIb3Jpem9udGFsIHRhYnNdXG4gKlxuICogVGhlIHRhYnMgYXJlIGEgbmF2aWdhdGlvbiBjb21wb25lbnQgdGhhdCBkaXZpZGVzIGNvbnRlbnQgaW50byBzZXBhcmF0ZSB2aWV3cyBoaWRpbmcgdGhlIG9uZXMgdGhhdCB0aGUgdXNlciBpcyBub3QgZm9jdXNlZCBpbi5cbiAqXG4gKiBAbW9kZWxcbiAqXG4gKiAgIFtJZCwgdGV4dCBhbmQgb3B0aW9uYWwgc3RhdHVzIG9mIGEgdGFiXSB7Li9zdC1ob3Jpem9udGFsLXRhYnMubW9kZWwudHMjU3RTdEhvcml6b250YWxUYWJ9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1ob3Jpem9udGFsLXRhYnMgW29wdGlvbnNdPVwib3B0aW9uc1wiIFtxYVRhZ109XCJxYVRhZ1wiPlxuICogPC9zdC1ob3Jpem9udGFsLXRhYnM+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1ob3Jpem9udGFsLXRhYnMnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWhvcml6b250YWwtdGFicy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1ob3Jpem9udGFsLXRhYnMuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5AU3RFZ2VvKClcbmV4cG9ydCBjbGFzcyBTdEhvcml6b250YWxUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIC8qKiBASW5wdXQge1N0SG9yaXpvbnRhbFRhYn0gW2FjdGl2ZU9wdGlvbj0nJ10gQ3VycmVudCBhY3RpdmUgb3B0aW9uICovXG4gICBASW5wdXQoKSBhY3RpdmVPcHRpb246IFN0SG9yaXpvbnRhbFRhYjtcbiAgIC8qKiBASW5wdXQge1N0SG9yaXpvbnRhbFRhYltdfSBbXm9wdGlvbnM9JyddIEFuIGFycmF5IG9mIFN0SG9yaXpvbnRhbFRhYiBvYmplY3RzIChzZWUgYmVsb3cpIHRoYXQgZGVmaW5lcyB0aGUgbGlua3NcbiAgICAqIHRoYXQgd2lsbCBhcHBlYXIgYW5kIHRoYXQgd2lsbCBiZSBkaXNhYmxlZFxuICAgICovXG4gICBAU3RSZXF1aXJlZCgpIEBJbnB1dCgpIG9wdGlvbnM6IFN0SG9yaXpvbnRhbFRhYltdO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcWFUYWc9JyddIFByZWZpeCB1c2VkIHRvIGdlbmVyYXRlIHRoZSBpZCB2YWx1ZXMgZm9yIHFhIHRlc3RzICovXG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgLyoqIEBPdXRwdXQge1N0SG9yaXpvbnRhbFRhYn0gW2NoYW5nZWRPcHRpb249JyddIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCB3aGVuIGFjdGl2ZSBvcHRpb24gaGFzIGNoYW5nZWQuIEl0IGhhcyB0aGVcbiAgICAqIGFjdGl2ZSBvcHRpb24gbmFtZSBhcyBwYXJhbVxuICAgICovXG4gICBAT3V0cHV0KCkgY2hhbmdlZE9wdGlvbjogRXZlbnRFbWl0dGVyPFN0SG9yaXpvbnRhbFRhYj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0SG9yaXpvbnRhbFRhYj4oKTtcblxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gdGhpcy5hY3RpdmVPcHRpb24gfHwgdGhpcy5vcHRpb25zWzBdO1xuICAgICAgICAgdGhpcy5hY3RpdmF0ZU9wdGlvbih0aGlzLmFjdGl2ZU9wdGlvbik7XG4gICAgICB9XG4gICB9XG5cbiAgIGlzQWN0aXZlKG9wdGlvbjogU3RIb3Jpem9udGFsVGFiKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb24gPT09IG9wdGlvbjtcbiAgIH1cblxuICAgYWN0aXZhdGVPcHRpb24ob3B0aW9uOiBTdEhvcml6b250YWxUYWIpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgdGhpcy5jaGFuZ2VkT3B0aW9uLmVtaXQob3B0aW9uKTtcbiAgIH1cblxuICAgZ2V0VGFiU3RhdHVzKHRhYjogU3RIb3Jpem9udGFsVGFiKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0YWIuc3RhdHVzID8gU3RIb3Jpem9udGFsVGFiU3RhdHVzW3RhYi5zdGF0dXNdIDogJyc7XG4gICB9XG59XG4iXX0=