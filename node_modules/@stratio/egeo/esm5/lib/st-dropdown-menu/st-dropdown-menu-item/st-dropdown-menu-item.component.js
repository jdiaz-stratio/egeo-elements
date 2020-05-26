/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu-item/st-dropdown-menu-item.component.ts
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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { StDropDownMenuItem } from '../st-dropdown-menu.interface';
var StDropdownMenuItemComponent = /** @class */ (function () {
    function StDropdownMenuItemComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.index = 0;
        this.item = undefined;
        this.selectedItem = undefined;
        this.styleSelected = true;
        this.change = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StDropdownMenuItemComponent.prototype.onChangeItem = /**
     * @return {?}
     */
    function () {
        if (!this.item.disabled) {
            this.change.emit(this.item);
        }
    };
    /**
     * @return {?}
     */
    StDropdownMenuItemComponent.prototype.onToggleExtraButtonBubble = /**
     * @return {?}
     */
    function () {
        this.visibleExtraButtonBubble = !this.visibleExtraButtonBubble;
    };
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "isSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.hasItem && this.item.selected && this.styleSelected) ||
                (this.hasItem && this.selectedItem !== undefined && this.item.value === this.selectedItem.value && this.styleSelected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasIcon ? this.item.icon : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "html", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item && this.item.label ? this.sanitizer.bypassSecurityTrustHtml(this.item.label) : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "hasIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasItem && this.item.icon !== undefined && this.item.icon !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "hasExtraIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasItem && this.item.extraIcon !== undefined && this.item.extraIcon !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuItemComponent.prototype, "hasItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item !== undefined && this.item !== null;
        },
        enumerable: true,
        configurable: true
    });
    StDropdownMenuItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-dropdown-menu-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<li *ngIf=\"hasItem\"\n    [attr.tabindex]=\"index\"\n    [ngClass]=\"{'selected': isSelected, 'disabled': item.disabled, 'top-separator': item.topSeparator, 'bottom-separator': item.bottomSeparator}\"\n    class=\"st-dropdown-menu-item\"\n    (click)=\"onChangeItem()\"\n    (keyup.enter)=\"onChangeItem()\"\n>\n   <i *ngIf=\"hasIcon\" class=\"icon\" [ngClass]=\"icon\" [style.color]=\"item.iconColor\"></i>\n   <div *ngIf=\"!item.hasHtml\" class=\"label-container\">\n      <span class=\"label\">\n         <span [style.color]=\"item.labelColor\">{{item.label}}</span>\n         <span *ngIf=\"item.textInfo\" class=\"text-info\">{{item.textInfo}}</span>\n      </span>\n      <ng-container *ngIf=\"hasExtraIcon\">\n         <i class=\"extra-icon\" *ngIf=\"!item.extraIconBubble\"\n            [ngClass]=\"item.extraIcon\"\n            [style.color]=\"item.extraIconColor\">\n         </i>\n         <st-bubble *ngIf=\"item.extraIconBubble\" class=\"extra-icon__bubble\"\n                    [hidden]=\"!visibleExtraButtonBubble\"\n                    [small]=\"true\"\n                    [text]=\"item.extraIconBubble\"\n                    [animation]=\"false\"\n                    [showArrow]=\"true\"\n                    [offset]=\"{x: 38, y: 9}\"\n                    [openToLeft]=\"true\">\n            <i bubble-button\n               [ngClass]=\"item.extraIcon\"\n               [style.color]=\"item.extraIconColor\"\n               (mouseenter)=\"onToggleExtraButtonBubble()\"\n               (mouseleave)=\"onToggleExtraButtonBubble()\">\n            </i>\n         </st-bubble>\n      </ng-container>\n   </div>\n\n   <div *ngIf=\"item.hasHtml\" [innerHTML]=\"html\"></div>\n</li>\n"
                }] }
    ];
    /** @nocollapse */
    StDropdownMenuItemComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    StDropdownMenuItemComponent.propDecorators = {
        index: [{ type: Input }],
        item: [{ type: Input }],
        selectedItem: [{ type: Input }],
        styleSelected: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StDropdownMenuItemComponent;
}());
export { StDropdownMenuItemComponent };
if (false) {
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.index;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.item;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.selectedItem;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.styleSelected;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.change;
    /** @type {?} */
    StDropdownMenuItemComponent.prototype.visibleExtraButtonBubble;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuItemComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LWl0ZW0vc3QtZHJvcGRvd24tbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVuRTtJQWNHLHFDQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBVGxDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBSSxHQUF1QixTQUFTLENBQUM7UUFDckMsaUJBQVksR0FBdUIsU0FBUyxDQUFDO1FBQzdDLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRTdCLFdBQU0sR0FBcUMsSUFBSSxZQUFZLEVBQXNCLENBQUM7SUFNNUYsQ0FBQzs7OztJQUVELGtEQUFZOzs7SUFBWjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7SUFDSixDQUFDOzs7O0lBRUQsK0RBQXlCOzs7SUFBekI7UUFDRyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFDbEUsQ0FBQztJQUVELHNCQUFJLG1EQUFVOzs7O1FBQWQ7WUFDRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM5RCxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdILENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQUk7Ozs7UUFBUjtZQUNHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFJOzs7O1FBQVI7WUFDRyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3RHLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0RBQU87Ozs7UUFBWDtZQUNHLE9BQU8sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1FBQ2xGLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQVk7Ozs7UUFBaEI7WUFDRyxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQztRQUM1RixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFPOzs7O1FBQVg7WUFDRyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO1FBQ3hELENBQUM7OztPQUFBOztnQkFuREgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLG1tRUFBcUQ7aUJBQ3ZEOzs7O2dCQVBRLFlBQVk7Ozt3QkFTakIsS0FBSzt1QkFDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFFTCxNQUFNOztJQTBDVixrQ0FBQztDQUFBLEFBcERELElBb0RDO1NBaERZLDJCQUEyQjs7O0lBQ3JDLDRDQUEyQjs7SUFDM0IsMkNBQThDOztJQUM5QyxtREFBc0Q7O0lBQ3RELG9EQUF1Qzs7SUFFdkMsNkNBQTRGOztJQUU1RiwrREFBa0M7Ozs7O0lBRXRCLGdEQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVJdGVtIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtZHJvcGRvd24tbWVudS1pdGVtJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1kcm9wZG93bi1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN0RHJvcGRvd25NZW51SXRlbUNvbXBvbmVudCB7XG4gICBASW5wdXQoKSBpbmRleDogbnVtYmVyID0gMDtcbiAgIEBJbnB1dCgpIGl0ZW06IFN0RHJvcERvd25NZW51SXRlbSA9IHVuZGVmaW5lZDtcbiAgIEBJbnB1dCgpIHNlbGVjdGVkSXRlbTogU3REcm9wRG93bk1lbnVJdGVtID0gdW5kZWZpbmVkO1xuICAgQElucHV0KCkgc3R5bGVTZWxlY3RlZDogYm9vbGVhbiA9IHRydWU7XG5cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+KCk7XG5cbiAgIHZpc2libGVFeHRyYUJ1dHRvbkJ1YmJsZTogYm9vbGVhbjtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuXG4gICB9XG5cbiAgIG9uQ2hhbmdlSXRlbSgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5pdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuaXRlbSk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uVG9nZ2xlRXh0cmFCdXR0b25CdWJibGUoKTogdm9pZCB7XG4gICAgICB0aGlzLnZpc2libGVFeHRyYUJ1dHRvbkJ1YmJsZSA9ICF0aGlzLnZpc2libGVFeHRyYUJ1dHRvbkJ1YmJsZTtcbiAgIH1cblxuICAgZ2V0IGlzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKHRoaXMuaGFzSXRlbSAmJiB0aGlzLml0ZW0uc2VsZWN0ZWQgJiYgdGhpcy5zdHlsZVNlbGVjdGVkKSB8fFxuICAgICAgICAgKHRoaXMuaGFzSXRlbSAmJiB0aGlzLnNlbGVjdGVkSXRlbSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXRlbS52YWx1ZSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUgJiYgdGhpcy5zdHlsZVNlbGVjdGVkKTtcbiAgIH1cblxuICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc0ljb24gPyB0aGlzLml0ZW0uaWNvbiA6ICcnO1xuICAgfVxuXG4gICBnZXQgaHRtbCgpOiBTYWZlSHRtbCB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtICYmIHRoaXMuaXRlbS5sYWJlbCA/IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRoaXMuaXRlbS5sYWJlbCkgOiAnJztcbiAgIH1cblxuICAgZ2V0IGhhc0ljb24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNJdGVtICYmIHRoaXMuaXRlbS5pY29uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pdGVtLmljb24gIT09IG51bGw7XG4gICB9XG5cbiAgIGdldCBoYXNFeHRyYUljb24oKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNJdGVtICYmIHRoaXMuaXRlbS5leHRyYUljb24gIT09IHVuZGVmaW5lZCAmJiB0aGlzLml0ZW0uZXh0cmFJY29uICE9PSBudWxsO1xuICAgfVxuXG4gICBnZXQgaGFzSXRlbSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLml0ZW0gIT09IG51bGw7XG4gICB9XG59XG4iXX0=