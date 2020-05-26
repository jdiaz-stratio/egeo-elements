/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-toggle-buttons/st-toggle-buttons.component.ts
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
export class StToggleButtonsComponent {
    constructor() {
        this.select = new EventEmitter();
    }
    /**
     * @param {?} tabs
     * @return {?}
     */
    set tabs(tabs) {
        this.parsedTabs = tabs
            .map((/**
         * @param {?} __0
         * @return {?}
         */
        (_a) => {
            var { label } = _a, props = tslib_1.__rest(_a, ["label"]);
            return (Object.assign({}, props, { label, trimLabel: label.replace(/[^a-zA-Z0-9]/g, '') }));
        }));
    }
    /**
     * @param {?} selectedTab
     * @return {?}
     */
    onClick(selectedTab) {
        for (let tab of this.parsedTabs) {
            tab.active = false;
        }
        selectedTab.active = true;
        this.select.emit(selectedTab);
    }
}
StToggleButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-toggle-buttons',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-toggle-buttons\">\n   <div *ngIf=\"description\" class=\"st-toggle-buttons__description sth-toggle-buttons__description\">\n      {{description}}\n   </div>\n   <ul class=\"st-toggle-buttons__buttons sth-toggle-buttons__buttons\">\n      <li *ngFor=\"let tab of parsedTabs; let i = index;\"\n         (click)=\"onClick(tab)\">\n         <button [attr.id]=\"qaTag + '-' + tab.trimLabel\" class=\"st-toggle-buttons__button sth-toggle-buttons__button\"\n         [ngClass]=\"{'st-toggle-buttons__button--active': tab.active, 'sth-toggle-buttons__button--active': tab.active}\">\n            {{tab.label}}\n            <span *ngIf=\"tab.number?.toFixed\">({{tab.number}})</span>\n         </button>\n      </li>\n   </ul>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-toggle-buttons{list-style:none}.st-toggle-buttons li{display:inline-block}.st-toggle-buttons .st-toggle-buttons__description{display:inline-block;height:35px;line-height:35px;padding-right:10px}.st-toggle-buttons .st-toggle-buttons__buttons{display:inline-block;border-width:1px;border-style:solid;border-radius:4px}.st-toggle-buttons .st-toggle-buttons__button{display:inline-block;padding:11px 21px;cursor:pointer;box-shadow:none}.st-toggle-buttons .st-toggle-buttons__button:focus{outline:0}"]
            }] }
];
StToggleButtonsComponent.propDecorators = {
    description: [{ type: Input }],
    qaTag: [{ type: Input }],
    select: [{ type: Output }],
    tabs: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StToggleButtonsComponent.prototype.description;
    /** @type {?} */
    StToggleButtonsComponent.prototype.qaTag;
    /** @type {?} */
    StToggleButtonsComponent.prototype.select;
    /** @type {?} */
    StToggleButtonsComponent.prototype.parsedTabs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdG9nZ2xlLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10b2dnbGUtYnV0dG9ucy9zdC10b2dnbGUtYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTaEcsTUFBTSxPQUFPLHdCQUF3QjtJQU5yQztRQVVhLFdBQU0sR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFtQnZGLENBQUM7Ozs7O0lBZkUsSUFBYSxJQUFJLENBQUMsSUFBc0I7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJO2FBQ3JCLEdBQUc7Ozs7UUFDRCxDQUFDLEVBQW1CLEVBQUUsRUFBRTtnQkFBdkIsRUFBRSxLQUFLLE9BQVksRUFBVixxQ0FBUTtZQUFPLE9BQUEsbUJBQU0sS0FBSyxJQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLElBQUcsQ0FBQTtTQUFBLEVBQy9GLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxXQUEyQjtRQUNoQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDOUIsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7UUFDRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUEzQkgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGlyQ0FBaUQ7Z0JBRWpELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7OzBCQUdHLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNO21CQUlOLEtBQUs7Ozs7SUFOTiwrQ0FBNkI7O0lBQzdCLHlDQUF1Qjs7SUFDdkIsMENBQW9GOztJQUVwRiw4Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RUb2dnbGVCdXR0b24sIFN0UGFyc2VkVG9nZ2xlQnV0dG9uIH0gZnJvbSAnLi9zdC10b2dnbGUtYnV0dG9ucy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtdG9nZ2xlLWJ1dHRvbnMnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXRvZ2dsZS1idXR0b25zLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXRvZ2dsZS1idXR0b25zLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFRvZ2dsZUJ1dHRvbnNDb21wb25lbnQge1xuXG4gICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxTdFRvZ2dsZUJ1dHRvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VG9nZ2xlQnV0dG9uPigpO1xuXG4gICBwdWJsaWMgcGFyc2VkVGFiczogU3RQYXJzZWRUb2dnbGVCdXR0b25bXTtcblxuICAgQElucHV0KCkgc2V0IHRhYnModGFiczogU3RUb2dnbGVCdXR0b25bXSkge1xuICAgICAgdGhpcy5wYXJzZWRUYWJzID0gdGFic1xuICAgICAgLm1hcChcbiAgICAgICAgICh7IGxhYmVsLCAuLi5wcm9wcyB9KSA9PiAoeyAuLi5wcm9wcywgbGFiZWwsIHRyaW1MYWJlbDogbGFiZWwucmVwbGFjZSgvW15hLXpBLVowLTldL2csICcnKSB9KVxuICAgICAgKTtcbiAgIH1cblxuICAgb25DbGljayhzZWxlY3RlZFRhYjogU3RUb2dnbGVCdXR0b24pOiB2b2lkIHtcbiAgICAgIGZvciAobGV0IHRhYiBvZiB0aGlzLnBhcnNlZFRhYnMpIHtcbiAgICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkVGFiLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHNlbGVjdGVkVGFiKTtcbiAgIH1cblxufVxuIl19