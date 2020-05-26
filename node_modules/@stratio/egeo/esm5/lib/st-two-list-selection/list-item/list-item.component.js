/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-item/list-item.component.ts
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
import { StEgeo, StRequired } from '../../decorators/require-decorators';
import { StDropDownVisualMode } from '../../st-dropdown-menu/st-dropdown-menu.interface';
import { StPopPlacement } from '../../st-pop/st-pop.model';
var ListItemComponent = /** @class */ (function () {
    function ListItemComponent() {
        this.editable = false;
        this.mode = 'normal';
        this.disabled = false;
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.hoverRow = false;
        this.menuVisualMode = StDropDownVisualMode.MENU_LIST;
        this.placement = StPopPlacement.BOTTOM_END;
    }
    Object.defineProperty(ListItemComponent.prototype, "itemName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item && this.item.name !== undefined && this.item.name !== null ? this.item.name : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "itemQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-item-' + this.item.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "checkQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-check-' + this.item.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.selected ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "itemMode", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var style = this.getModeStyle();
            style += this.selected ? ' sth-two-list-selection__selected_item' : '';
            return style;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListItemComponent.prototype.getModeStyle = /**
     * @return {?}
     */
    function () {
        return this.mode === 'normal' ? 'item-normal sth-two-list-selection__item-normal' :
            'item-compact sth-two-list-selection__item-compact';
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ListItemComponent.prototype.emitOnClickNonEditable = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selectItemNonEditable.emit(this.item);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ListItemComponent.prototype.emitOnSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.item.disabled) {
            this.selectItem.emit(this.item);
        }
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.mouseHoverRow = /**
     * @return {?}
     */
    function () {
        this.hoverRow = true;
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.mouseLeftRow = /**
     * @return {?}
     */
    function () {
        this.hoverRow = false;
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.onCloseActionMenu = /**
     * @return {?}
     */
    function () {
        if (this.showActionList) {
            this.showActionList = false;
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    ListItemComponent.prototype.onChangeOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.emitOnClickNonEditable(new CustomEvent('selectItem', { bubbles: true, cancelable: true, detail: Object.assign(this.item, option) }));
    };
    /**
     * @return {?}
     */
    ListItemComponent.prototype.onEllipsisClick = /**
     * @return {?}
     */
    function () {
        this.showActionList = !this.showActionList;
    };
    ListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"item\" [ngClass]=\"itemMode\" [attr.id]=\"itemQaTag\" [title]=\"itemName\">\n   <span *ngIf=\"!editable && !menuOptionList\" class=\"label\">{{itemName}}</span>\n   <div class=\"item__row\" *ngIf=\"!editable && menuOptionList\" (mouseenter)=\"mouseHoverRow()\" (mouseleave)=\"mouseLeftRow()\">\n      <span class=\"label\" [ngClass]=\"{'primary-link': hoverRow}\" (click)=\"emitOnClickNonEditable($event)\">{{itemName}}</span>\n      <st-dropdown-menu *ngIf=\"hoverRow\" class=\"filter-selector\" [items]=\"menuOptionList\" attr.id=\"actionListId\" [placement]=\"placement\"\n           [visualMode]=\"menuVisualMode\" [active]=\"showActionList\" (click)=\"onEllipsisClick()\"\n          (change)=\"onChangeOption($event)\" (clickOutside)=\"onCloseActionMenu()\" [openToLeft]=\"true\">\n         <button class=\"button\" id=\"actions-service\">\n            <i class=\"icon-ellipsis\"></i>\n         </button>\n      </st-dropdown-menu>\n   </div>\n   <st-checkbox [disabled]=\"disabled\" *ngIf=\"editable\" [qaTag]=\"checkQaTag\" [checked]=\"selected\" (click)=\"emitOnSelect($event)\">\n      <span class=\"label\">{{itemName}}</span>\n   </st-checkbox>\n   <span class=\"extraLabel\" *ngIf=\"item.extraLabel\" [innerHTML]=\"item.extraLabel\"\n       (click)=\"selectExtraLabel.emit({element: item, event: $event})\"></span>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.item{display:inline-block;min-width:100%;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:10px}.item__row{display:flex;flex-direction:row-reverse}.item__row .filter-selector{position:absolute}.item__row .filter-selector .icon-ellipsis{font-size:20px}.label{overflow:hidden;text-overflow:ellipsis;flex-grow:1;color:#0f1b27;font-size:.938rem;font-weight:400}.label.primary-link{color:#0776df;cursor:pointer}:host{display:block;padding-right:20px}.item-normal{height:25px;line-height:35px}.item-compact{height:27px;line-height:27px}"]
                }] }
    ];
    /** @nocollapse */
    ListItemComponent.ctorParameters = function () { return []; };
    ListItemComponent.propDecorators = {
        item: [{ type: Input }],
        qaTag: [{ type: Input }],
        editable: [{ type: Input }],
        mode: [{ type: Input }],
        disabled: [{ type: Input }],
        menuOptionList: [{ type: Input }],
        selectItem: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectExtraLabel: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Object)
    ], ListItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", String)
    ], ListItemComponent.prototype, "qaTag", void 0);
    ListItemComponent = tslib_1.__decorate([
        StEgeo(),
        tslib_1.__metadata("design:paramtypes", [])
    ], ListItemComponent);
    return ListItemComponent;
}());
export { ListItemComponent };
if (false) {
    /** @type {?} */
    ListItemComponent.prototype.item;
    /** @type {?} */
    ListItemComponent.prototype.qaTag;
    /** @type {?} */
    ListItemComponent.prototype.editable;
    /** @type {?} */
    ListItemComponent.prototype.mode;
    /** @type {?} */
    ListItemComponent.prototype.disabled;
    /** @type {?} */
    ListItemComponent.prototype.menuOptionList;
    /** @type {?} */
    ListItemComponent.prototype.selectItem;
    /** @type {?} */
    ListItemComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListItemComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListItemComponent.prototype.hoverRow;
    /** @type {?} */
    ListItemComponent.prototype.menuVisualMode;
    /** @type {?} */
    ListItemComponent.prototype.placement;
    /** @type {?} */
    ListItemComponent.prototype.showActionList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdHdvLWxpc3Qtc2VsZWN0aW9uL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUE0QnhEO1FBZlMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixTQUFJLEdBQXlCLFFBQVEsQ0FBQztRQUN0QyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBR3pCLGVBQVUsR0FBNEMsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFDcEcsMEJBQXFCLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO1FBQy9HLHFCQUFnQixHQUFrRCxJQUFJLFlBQVksRUFBbUMsQ0FBQztRQUd6SCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLG1CQUFjLEdBQXlCLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztRQUN0RSxjQUFTLEdBQW1CLGNBQWMsQ0FBQyxVQUFVLENBQUM7SUFHN0MsQ0FBQztJQUVqQixzQkFBSSx1Q0FBUTs7OztRQUFaO1lBQ0csT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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RUwsTUFBTTt3Q0FDTixNQUFNO21DQUNOLE1BQU07O0lBVGdCO1FBQWIsVUFBVSxFQUFFOzttREFBaUM7SUFDaEM7UUFBYixVQUFVLEVBQUU7O29EQUFlO0lBSDNCLGlCQUFpQjtRQUQ3QixNQUFNLEVBQUU7O09BQ0ksaUJBQWlCLENBbUY3QjtJQUFELHdCQUFDO0NBQUEsSUFBQTtTQW5GWSxpQkFBaUI7OztJQUUzQixpQ0FBdUQ7O0lBQ3ZELGtDQUFxQzs7SUFDckMscUNBQW1DOztJQUNuQyxpQ0FBK0M7O0lBQy9DLHFDQUFtQzs7SUFDbkMsMkNBQStDOztJQUUvQyx1Q0FBOEc7O0lBQzlHLGtEQUF5SDs7SUFDekgsNkNBQWdJOztJQUdoSSxxQ0FBaUM7O0lBQ2pDLDJDQUE2RTs7SUFDN0Usc0NBQTZEOztJQUM3RCwyQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50LCBTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uIH0gZnJvbSAnLi4vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLm1vZGVsJztcblxuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVJdGVtLCBTdERyb3BEb3duVmlzdWFsTW9kZSB9IGZyb20gJy4uLy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RQb3BQbGFjZW1lbnQgfSBmcm9tICcuLi8uLi9zdC1wb3Avc3QtcG9wLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ2xpc3QtaXRlbScsXG4gICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5AU3RFZ2VvKClcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUNvbXBvbmVudCB7XG5cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgaXRlbTogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudDtcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgcWFUYWc6IHN0cmluZztcbiAgIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBtb2RlOiAnY29tcGFjdCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xuICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIG1lbnVPcHRpb25MaXN0PzogU3REcm9wRG93bk1lbnVJdGVtW107XG5cbiAgIEBPdXRwdXQoKSBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbU5vbkVkaXRhYmxlOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbDogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uPigpO1xuXG5cbiAgIHB1YmxpYyBob3ZlclJvdzogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIG1lbnVWaXN1YWxNb2RlOiBTdERyb3BEb3duVmlzdWFsTW9kZSA9IFN0RHJvcERvd25WaXN1YWxNb2RlLk1FTlVfTElTVDtcbiAgIHB1YmxpYyBwbGFjZW1lbnQ6IFN0UG9wUGxhY2VtZW50ID0gU3RQb3BQbGFjZW1lbnQuQk9UVE9NX0VORDtcbiAgIHB1YmxpYyBzaG93QWN0aW9uTGlzdDogYm9vbGVhbjtcblxuICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgZ2V0IGl0ZW1OYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtICYmIHRoaXMuaXRlbS5uYW1lICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pdGVtLm5hbWUgIT09IG51bGwgPyB0aGlzLml0ZW0ubmFtZSA6ICcnO1xuICAgfVxuXG4gICBnZXQgaXRlbVFhVGFnKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5xYVRhZyArICctaXRlbS0nICsgdGhpcy5pdGVtLmlkO1xuICAgfVxuXG4gICBnZXQgY2hlY2tRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgKyAnLWNoZWNrLScgKyB0aGlzLml0ZW0uaWQ7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICB9XG5cbiAgIGdldCBpdGVtTW9kZSgpOiBzdHJpbmcge1xuICAgICAgbGV0IHN0eWxlOiBzdHJpbmcgPSB0aGlzLmdldE1vZGVTdHlsZSgpO1xuICAgICAgc3R5bGUgKz0gdGhpcy5zZWxlY3RlZCA/ICcgc3RoLXR3by1saXN0LXNlbGVjdGlvbl9fc2VsZWN0ZWRfaXRlbScgOiAnJztcbiAgICAgIHJldHVybiBzdHlsZTtcbiAgIH1cblxuICAgZ2V0TW9kZVN0eWxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnbm9ybWFsJyA/ICdpdGVtLW5vcm1hbCBzdGgtdHdvLWxpc3Qtc2VsZWN0aW9uX19pdGVtLW5vcm1hbCcgOlxuICAgICAgICAgJ2l0ZW0tY29tcGFjdCBzdGgtdHdvLWxpc3Qtc2VsZWN0aW9uX19pdGVtLWNvbXBhY3QnO1xuICAgfVxuXG4gICBlbWl0T25DbGlja05vbkVkaXRhYmxlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zZWxlY3RJdGVtTm9uRWRpdGFibGUuZW1pdCh0aGlzLml0ZW0pO1xuICAgfVxuXG4gICBlbWl0T25TZWxlY3QoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoIXRoaXMuaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICAgdGhpcy5zZWxlY3RJdGVtLmVtaXQodGhpcy5pdGVtKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbW91c2VIb3ZlclJvdygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG92ZXJSb3cgPSB0cnVlO1xuICAgfVxuXG4gICBtb3VzZUxlZnRSb3coKTogdm9pZCB7XG4gICAgICB0aGlzLmhvdmVyUm93ID0gZmFsc2U7XG4gICB9XG5cbiAgIG9uQ2xvc2VBY3Rpb25NZW51KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc2hvd0FjdGlvbkxpc3QpIHtcbiAgICAgICAgIHRoaXMuc2hvd0FjdGlvbkxpc3QgPSBmYWxzZTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25DaGFuZ2VPcHRpb24ob3B0aW9uOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuZW1pdE9uQ2xpY2tOb25FZGl0YWJsZShuZXcgQ3VzdG9tRXZlbnQoJ3NlbGVjdEl0ZW0nLCB7IGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDogT2JqZWN0LmFzc2lnbih0aGlzLml0ZW0sIG9wdGlvbil9KSk7XG4gICB9XG5cbiAgIG9uRWxsaXBzaXNDbGljaygpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2hvd0FjdGlvbkxpc3QgPSAhdGhpcy5zaG93QWN0aW9uTGlzdDtcbiAgIH1cbn1cbiJdfQ==