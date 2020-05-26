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
export class StVerticalIconTabsComponent {
    constructor() {
        /**
         * \@Output {StIconTab} [changeOption=] Event emitted when user clicks on an option
         */
        this.changeOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.options && this.options.length > 0) {
            this.activateOption(this.options[0]);
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
        this.changeOption.emit(option);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdmVydGljYWwtaWNvbi10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdmVydGljYWwtaWNvbi10YWJzL3N0LXZlcnRpY2FsLWljb24tdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ3hHLE1BQU0sT0FBTywyQkFBMkI7SUFOeEM7Ozs7UUFZYSxpQkFBWSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO0lBZ0JuRixDQUFDOzs7O0lBZEUsUUFBUTtRQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7SUFDSixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFpQjtRQUN2QixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWlCO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTFCSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsb3lCQUFxRDtnQkFFckQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2pEOzs7MkJBR0csS0FBSztzQkFFTCxLQUFLOzJCQUVMLE1BQU07Ozs7Ozs7SUFKUCxtREFBaUM7Ozs7O0lBRWpDLDhDQUE4Qjs7Ozs7SUFFOUIsbURBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0SWNvblRhYiB9IGZyb20gJy4vc3QtaWNvbi10YWJzLm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1ZlcnRpY2FsIEljb24gVGFic11cbiAqXG4gKiBUaGUgdmVydGljYWwgaWNvbiB0YWJzIGNvbXBvbmVudCBoYXMgYmVlbiBkZXNpZ25lZCB0byBkaXNwbGF5IGNvbnRlbnQgaW4gZGlmZmVyZW50IHNlY3Rpb25zLlxuICpcbiAqIEBtb2RlbFxuICpcbiAqICAgW0ljb24gdGFiXSB7Li9zdC1pY29uLXRhYnMubW9kZWwudHMjU3RJY29uVGFifVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtdmVydGljYWwtaWNvbi10YWJzIGNsYXNzPVwidmVydGljYWwtaWNvbi10YWJzXCJcbiAqIFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuICogW2FjdGl2ZU9wdGlvbl09XCJhY3RpdmVcIlxuICogKGNoYW5nZU9wdGlvbik9XCJvbkNoYW5nZU9wdGlvbigkZXZlbnQpXCI+XG4gKiA8L3N0LXZlcnRpY2FsLWljb24tdGFicz5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXZlcnRpY2FsLWljb24tdGFicycsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdmVydGljYWwtaWNvbi10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXZlcnRpY2FsLWljb24tdGFicy5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RWZXJ0aWNhbEljb25UYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIC8qKiBASW5wdXQge1N0SWNvblRhYn0gW2FjdGl2ZU9wdGlvbj1dIEFjdGl2ZSBvcHRpb24gKi9cbiAgIEBJbnB1dCgpIGFjdGl2ZU9wdGlvbjogU3RJY29uVGFiO1xuICAgLyoqIEBJbnB1dCB7U3RJY29uVGFiW119IFtvcHRpb25zPV0gT3B0aW9uIGxpc3QgKi9cbiAgIEBJbnB1dCgpIG9wdGlvbnM6IFN0SWNvblRhYltdO1xuICAgLyoqIEBPdXRwdXQge1N0SWNvblRhYn0gW2NoYW5nZU9wdGlvbj1dIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiBhbiBvcHRpb24gKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2VPcHRpb246IEV2ZW50RW1pdHRlcjxTdEljb25UYWI+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdEljb25UYWI+KCk7XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgdGhpcy5hY3RpdmF0ZU9wdGlvbih0aGlzLm9wdGlvbnNbMF0pO1xuICAgICAgfVxuICAgfVxuXG4gICBpc0FjdGl2ZShvcHRpb246IFN0SWNvblRhYik6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT3B0aW9uID09PSBvcHRpb247XG4gICB9XG5cbiAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbjogU3RJY29uVGFiKTogdm9pZCB7XG4gICAgICB0aGlzLmNoYW5nZU9wdGlvbi5lbWl0KG9wdGlvbik7XG4gICB9XG5cbn1cbiJdfQ==