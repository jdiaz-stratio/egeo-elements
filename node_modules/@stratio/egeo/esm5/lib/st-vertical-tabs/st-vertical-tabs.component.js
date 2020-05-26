/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-vertical-tabs/st-vertical-tabs.component.ts
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
var StVerticalTabsComponent = /** @class */ (function () {
    function StVerticalTabsComponent() {
        this.changeOption = new EventEmitter();
        this.activeOptionIndex = 0;
        this.arrowMovement = 39;
        this.arrowMargin = 0;
    }
    /**
     * @return {?}
     */
    StVerticalTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.qaTag) {
            throw new Error('qaTag is a required field');
        }
        if (this.options && this.options.length > 0) {
            if (this.activeOption) {
                this.changeActive(this.activeOption);
            }
            else {
                this.activeFirstOption();
            }
        }
        else {
            throw new Error('options is a required field');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StVerticalTabsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.activeOption) {
            this.changeActive(changes.activeOption.currentValue);
        }
    };
    /**
     * @param {?} optionName
     * @return {?}
     */
    StVerticalTabsComponent.prototype.isActive = /**
     * @param {?} optionName
     * @return {?}
     */
    function (optionName) {
        return this.activeOption === optionName;
    };
    /**
     * @param {?} optionName
     * @return {?}
     */
    StVerticalTabsComponent.prototype.activateOption = /**
     * @param {?} optionName
     * @return {?}
     */
    function (optionName) {
        this.changeActive(optionName);
        this.changeOption.emit(optionName);
    };
    /**
     * @private
     * @param {?} optionName
     * @return {?}
     */
    StVerticalTabsComponent.prototype.changeActive = /**
     * @private
     * @param {?} optionName
     * @return {?}
     */
    function (optionName) {
        this.activeOption = optionName;
        this.activeOptionIndex = this.options.indexOf(optionName);
        if (this.activeOptionIndex < 0) {
            this.activeFirstOption();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StVerticalTabsComponent.prototype.activeFirstOption = /**
     * @private
     * @return {?}
     */
    function () {
        this.changeActive(this.options[0]);
    };
    StVerticalTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-vertical-tabs',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-vertical-tabs\">\n  <ul class=\"st-vertical-tabs__list\">\n    <li *ngFor=\"let option of options; let i = index;\" class=\"st-vertical-tabs__option sth-vertical-tabs__option\">\n      <a class=\"st-vertical-tabs__option__text sth-vertical-tabs__option__text\" (click)=\"activateOption(option)\"\n         [ngClass]=\"{'sth-vertical-tabs__option--active': isActive(option)}\"\n         [attr.id]=\"qaTag + '-tab-' + i\" href=\"javascript:void(0)\">{{option}}</a>\n    </li>\n  </ul>\n  <div class=\"st-vertical-tabs__line sth-vertical-tabs__line\">\n    <span class=\"st-vertical-tabs__line__arrow sth-vertical-tabs__line__arrow\"\n          [style.margin-top]=\"activeOptionIndex * arrowMovement + arrowMargin + 'px'\">\n    </span>\n  </div>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:block}.st-vertical-tabs{height:100%;width:100%;display:block;position:relative}.st-vertical-tabs__list{height:100%;position:relative;list-style:none;float:left;width:90%;padding:0 30px 0 0}.st-vertical-tabs__option{margin-top:-1px;height:40px;line-height:38px;box-sizing:border-box}.st-vertical-tabs__option__text{display:block;line-height:38px;margin-left:15px}.st-vertical-tabs__line{position:relative;height:100%;float:right;width:10%;border-radius:2px}.st-vertical-tabs__line__arrow{position:absolute;width:13px;height:13px;top:14px;transform:rotate(45deg);float:left;margin-left:-6.1px;border-radius:2px}"]
                }] }
    ];
    /** @nocollapse */
    StVerticalTabsComponent.ctorParameters = function () { return []; };
    StVerticalTabsComponent.propDecorators = {
        activeOption: [{ type: Input }],
        options: [{ type: Input }],
        qaTag: [{ type: Input }],
        changeOption: [{ type: Output }]
    };
    return StVerticalTabsComponent;
}());
export { StVerticalTabsComponent };
if (false) {
    /** @type {?} */
    StVerticalTabsComponent.prototype.activeOption;
    /** @type {?} */
    StVerticalTabsComponent.prototype.options;
    /** @type {?} */
    StVerticalTabsComponent.prototype.qaTag;
    /** @type {?} */
    StVerticalTabsComponent.prototype.changeOption;
    /** @type {?} */
    StVerticalTabsComponent.prototype.activeOptionIndex;
    /** @type {?} */
    StVerticalTabsComponent.prototype.arrowMovement;
    /** @type {?} */
    StVerticalTabsComponent.prototype.arrowMargin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdmVydGljYWwtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXZlcnRpY2FsLXRhYnMvc3QtdmVydGljYWwtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBRWpJO0lBZ0JHO1FBTlUsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUUxRSxzQkFBaUIsR0FBVyxDQUFDLENBQUM7UUFDOUIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7SUFFUixDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNKLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzNCO1NBQ0g7YUFBTTtZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNqRDtJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQVk7UUFDckIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQ7SUFDSixDQUFDOzs7OztJQUVELDBDQUFROzs7O0lBQVIsVUFBUyxVQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsZ0RBQWM7Ozs7SUFBZCxVQUFlLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8sOENBQVk7Ozs7O0lBQXBCLFVBQXFCLFVBQWtCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDM0I7SUFDSixDQUFDOzs7OztJQUVPLG1EQUFpQjs7OztJQUF6QjtRQUNHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQTFESCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMnNDQUFnRDtvQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNqRDs7Ozs7K0JBRUcsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsTUFBTTs7SUFpRFYsOEJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXJEWSx1QkFBdUI7OztJQUNqQywrQ0FBOEI7O0lBQzlCLDBDQUEyQjs7SUFDM0Isd0NBQXVCOztJQUN2QiwrQ0FBMEU7O0lBRTFFLG9EQUE4Qjs7SUFDOUIsZ0RBQTJCOztJQUMzQiw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtdmVydGljYWwtdGFicycsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdmVydGljYWwtdGFicy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC12ZXJ0aWNhbC10YWJzLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFZlcnRpY2FsVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICBASW5wdXQoKSBhY3RpdmVPcHRpb246IHN0cmluZztcbiAgIEBJbnB1dCgpIG9wdGlvbnM6IHN0cmluZ1tdO1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIEBPdXRwdXQoKSBjaGFuZ2VPcHRpb246IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIGFjdGl2ZU9wdGlvbkluZGV4OiBudW1iZXIgPSAwO1xuICAgYXJyb3dNb3ZlbWVudDogbnVtYmVyID0gMzk7XG4gICBhcnJvd01hcmdpbjogbnVtYmVyID0gMDtcblxuICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMucWFUYWcpIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcigncWFUYWcgaXMgYSByZXF1aXJlZCBmaWVsZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZSh0aGlzLmFjdGl2ZU9wdGlvbik7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVGaXJzdE9wdGlvbigpO1xuICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9ucyBpcyBhIHJlcXVpcmVkIGZpZWxkJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlKGNoYW5nZXMuYWN0aXZlT3B0aW9uLmN1cnJlbnRWYWx1ZSk7XG4gICAgICB9XG4gICB9XG5cbiAgIGlzQWN0aXZlKG9wdGlvbk5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlT3B0aW9uID09PSBvcHRpb25OYW1lO1xuICAgfVxuXG4gICBhY3RpdmF0ZU9wdGlvbihvcHRpb25OYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hhbmdlQWN0aXZlKG9wdGlvbk5hbWUpO1xuICAgICAgdGhpcy5jaGFuZ2VPcHRpb24uZW1pdChvcHRpb25OYW1lKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBjaGFuZ2VBY3RpdmUob3B0aW9uTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmFjdGl2ZU9wdGlvbiA9IG9wdGlvbk5hbWU7XG4gICAgICB0aGlzLmFjdGl2ZU9wdGlvbkluZGV4ID0gdGhpcy5vcHRpb25zLmluZGV4T2Yob3B0aW9uTmFtZSk7XG4gICAgICBpZiAodGhpcy5hY3RpdmVPcHRpb25JbmRleCA8IDApIHtcbiAgICAgICAgIHRoaXMuYWN0aXZlRmlyc3RPcHRpb24oKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBhY3RpdmVGaXJzdE9wdGlvbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hhbmdlQWN0aXZlKHRoaXMub3B0aW9uc1swXSk7XG4gICB9XG59XG4iXX0=