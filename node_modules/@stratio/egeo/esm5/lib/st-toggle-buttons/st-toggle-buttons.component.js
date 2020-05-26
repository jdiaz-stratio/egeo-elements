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
var StToggleButtonsComponent = /** @class */ (function () {
    function StToggleButtonsComponent() {
        this.select = new EventEmitter();
    }
    Object.defineProperty(StToggleButtonsComponent.prototype, "tabs", {
        set: /**
         * @param {?} tabs
         * @return {?}
         */
        function (tabs) {
            this.parsedTabs = tabs
                .map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var label = _a.label, props = tslib_1.__rest(_a, ["label"]);
                return (tslib_1.__assign({}, props, { label: label, trimLabel: label.replace(/[^a-zA-Z0-9]/g, '') }));
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selectedTab
     * @return {?}
     */
    StToggleButtonsComponent.prototype.onClick = /**
     * @param {?} selectedTab
     * @return {?}
     */
    function (selectedTab) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.parsedTabs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var tab = _c.value;
                tab.active = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        selectedTab.active = true;
        this.select.emit(selectedTab);
    };
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
    return StToggleButtonsComponent;
}());
export { StToggleButtonsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdG9nZ2xlLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10b2dnbGUtYnV0dG9ucy9zdC10b2dnbGUtYnV0dG9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEc7SUFBQTtRQVVhLFdBQU0sR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7SUFtQnZGLENBQUM7SUFmRSxzQkFBYSwwQ0FBSTs7Ozs7UUFBakIsVUFBa0IsSUFBc0I7WUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJO2lCQUNyQixHQUFHOzs7O1lBQ0QsVUFBQyxFQUFtQjtnQkFBakIsSUFBQSxnQkFBSyxFQUFFLHFDQUFRO2dCQUFPLE9BQUEsc0JBQU0sS0FBSyxJQUFFLEtBQUssT0FBQSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsSUFBRyxDQUFBO2FBQUEsRUFDL0YsQ0FBQztRQUNMLENBQUM7OztPQUFBOzs7OztJQUVELDBDQUFPOzs7O0lBQVAsVUFBUSxXQUEyQjs7O1lBQ2hDLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFBLGdCQUFBLDRCQUFFO2dCQUE1QixJQUFJLEdBQUcsV0FBQTtnQkFDVCxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjs7Ozs7Ozs7O1FBQ0QsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0JBM0JILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixpckNBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7OEJBR0csS0FBSzt3QkFDTCxLQUFLO3lCQUNMLE1BQU07dUJBSU4sS0FBSzs7SUFlVCwrQkFBQztDQUFBLEFBN0JELElBNkJDO1NBdkJZLHdCQUF3Qjs7O0lBRWxDLCtDQUE2Qjs7SUFDN0IseUNBQXVCOztJQUN2QiwwQ0FBb0Y7O0lBRXBGLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdFRvZ2dsZUJ1dHRvbiwgU3RQYXJzZWRUb2dnbGVCdXR0b24gfSBmcm9tICcuL3N0LXRvZ2dsZS1idXR0b25zLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10b2dnbGUtYnV0dG9ucycsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdG9nZ2xlLWJ1dHRvbnMuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtdG9nZ2xlLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0VG9nZ2xlQnV0dG9uc0NvbXBvbmVudCB7XG5cbiAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFN0VG9nZ2xlQnV0dG9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUb2dnbGVCdXR0b24+KCk7XG5cbiAgIHB1YmxpYyBwYXJzZWRUYWJzOiBTdFBhcnNlZFRvZ2dsZUJ1dHRvbltdO1xuXG4gICBASW5wdXQoKSBzZXQgdGFicyh0YWJzOiBTdFRvZ2dsZUJ1dHRvbltdKSB7XG4gICAgICB0aGlzLnBhcnNlZFRhYnMgPSB0YWJzXG4gICAgICAubWFwKFxuICAgICAgICAgKHsgbGFiZWwsIC4uLnByb3BzIH0pID0+ICh7IC4uLnByb3BzLCBsYWJlbCwgdHJpbUxhYmVsOiBsYWJlbC5yZXBsYWNlKC9bXmEtekEtWjAtOV0vZywgJycpIH0pXG4gICAgICApO1xuICAgfVxuXG4gICBvbkNsaWNrKHNlbGVjdGVkVGFiOiBTdFRvZ2dsZUJ1dHRvbik6IHZvaWQge1xuICAgICAgZm9yIChsZXQgdGFiIG9mIHRoaXMucGFyc2VkVGFicykge1xuICAgICAgICAgdGFiLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgc2VsZWN0ZWRUYWIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoc2VsZWN0ZWRUYWIpO1xuICAgfVxuXG59XG4iXX0=