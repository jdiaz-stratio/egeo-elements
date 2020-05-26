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
export class StVerticalTabsComponent {
    constructor() {
        this.changeOption = new EventEmitter();
        this.activeOptionIndex = 0;
        this.arrowMovement = 39;
        this.arrowMargin = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.activeOption) {
            this.changeActive(changes.activeOption.currentValue);
        }
    }
    /**
     * @param {?} optionName
     * @return {?}
     */
    isActive(optionName) {
        return this.activeOption === optionName;
    }
    /**
     * @param {?} optionName
     * @return {?}
     */
    activateOption(optionName) {
        this.changeActive(optionName);
        this.changeOption.emit(optionName);
    }
    /**
     * @private
     * @param {?} optionName
     * @return {?}
     */
    changeActive(optionName) {
        this.activeOption = optionName;
        this.activeOptionIndex = this.options.indexOf(optionName);
        if (this.activeOptionIndex < 0) {
            this.activeFirstOption();
        }
    }
    /**
     * @private
     * @return {?}
     */
    activeFirstOption() {
        this.changeActive(this.options[0]);
    }
}
StVerticalTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-vertical-tabs',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-vertical-tabs\">\n  <ul class=\"st-vertical-tabs__list\">\n    <li *ngFor=\"let option of options; let i = index;\" class=\"st-vertical-tabs__option sth-vertical-tabs__option\">\n      <a class=\"st-vertical-tabs__option__text sth-vertical-tabs__option__text\" (click)=\"activateOption(option)\"\n         [ngClass]=\"{'sth-vertical-tabs__option--active': isActive(option)}\"\n         [attr.id]=\"qaTag + '-tab-' + i\" href=\"javascript:void(0)\">{{option}}</a>\n    </li>\n  </ul>\n  <div class=\"st-vertical-tabs__line sth-vertical-tabs__line\">\n    <span class=\"st-vertical-tabs__line__arrow sth-vertical-tabs__line__arrow\"\n          [style.margin-top]=\"activeOptionIndex * arrowMovement + arrowMargin + 'px'\">\n    </span>\n  </div>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{display:block}.st-vertical-tabs{height:100%;width:100%;display:block;position:relative}.st-vertical-tabs__list{height:100%;position:relative;list-style:none;float:left;width:90%;padding:0 30px 0 0}.st-vertical-tabs__option{margin-top:-1px;height:40px;line-height:38px;box-sizing:border-box}.st-vertical-tabs__option__text{display:block;line-height:38px;margin-left:15px}.st-vertical-tabs__line{position:relative;height:100%;float:right;width:10%;border-radius:2px}.st-vertical-tabs__line__arrow{position:absolute;width:13px;height:13px;top:14px;transform:rotate(45deg);float:left;margin-left:-6.1px;border-radius:2px}"]
            }] }
];
/** @nocollapse */
StVerticalTabsComponent.ctorParameters = () => [];
StVerticalTabsComponent.propDecorators = {
    activeOption: [{ type: Input }],
    options: [{ type: Input }],
    qaTag: [{ type: Input }],
    changeOption: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdmVydGljYWwtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXZlcnRpY2FsLXRhYnMvc3QtdmVydGljYWwtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBUWpJLE1BQU0sT0FBTyx1QkFBdUI7SUFVakM7UUFOVSxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRTFFLHNCQUFpQixHQUFXLENBQUMsQ0FBQztRQUM5QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQUVSLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNKLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzNCO1NBQ0g7YUFBTTtZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNqRDtJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFDckIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUNsQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkQ7SUFDSixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQjtRQUN4QixPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFVBQWtCO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLFVBQWtCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDM0I7SUFDSixDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUExREgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLDJzQ0FBZ0Q7Z0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7Ozs7MkJBRUcsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsTUFBTTs7OztJQUhQLCtDQUE4Qjs7SUFDOUIsMENBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLCtDQUEwRTs7SUFFMUUsb0RBQThCOztJQUM5QixnREFBMkI7O0lBQzNCLDhDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC12ZXJ0aWNhbC10YWJzJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC12ZXJ0aWNhbC10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXZlcnRpY2FsLXRhYnMuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0VmVydGljYWxUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIEBJbnB1dCgpIGFjdGl2ZU9wdGlvbjogc3RyaW5nO1xuICAgQElucHV0KCkgb3B0aW9uczogc3RyaW5nW107XG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgQE91dHB1dCgpIGNoYW5nZU9wdGlvbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgYWN0aXZlT3B0aW9uSW5kZXg6IG51bWJlciA9IDA7XG4gICBhcnJvd01vdmVtZW50OiBudW1iZXIgPSAzOTtcbiAgIGFycm93TWFyZ2luOiBudW1iZXIgPSAwO1xuXG4gICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5xYVRhZykge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdxYVRhZyBpcyBhIHJlcXVpcmVkIGZpZWxkJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICBpZiAodGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlKHRoaXMuYWN0aXZlT3B0aW9uKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUZpcnN0T3B0aW9uKCk7XG4gICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdvcHRpb25zIGlzIGEgcmVxdWlyZWQgZmllbGQnKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XG4gICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUoY2hhbmdlcy5hY3RpdmVPcHRpb24uY3VycmVudFZhbHVlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgaXNBY3RpdmUob3B0aW9uTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb24gPT09IG9wdGlvbk5hbWU7XG4gICB9XG5cbiAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbk5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUob3B0aW9uTmFtZSk7XG4gICAgICB0aGlzLmNoYW5nZU9wdGlvbi5lbWl0KG9wdGlvbk5hbWUpO1xuICAgfVxuXG4gICBwcml2YXRlIGNoYW5nZUFjdGl2ZShvcHRpb25OYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gb3B0aW9uTmFtZTtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uSW5kZXggPSB0aGlzLm9wdGlvbnMuaW5kZXhPZihvcHRpb25OYW1lKTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbkluZGV4IDwgMCkge1xuICAgICAgICAgdGhpcy5hY3RpdmVGaXJzdE9wdGlvbigpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGFjdGl2ZUZpcnN0T3B0aW9uKCk6IHZvaWQge1xuICAgICAgdGhpcy5jaGFuZ2VBY3RpdmUodGhpcy5vcHRpb25zWzBdKTtcbiAgIH1cbn1cbiJdfQ==