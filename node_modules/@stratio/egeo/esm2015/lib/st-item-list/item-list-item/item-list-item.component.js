/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/item-list-item/item-list-item.component.ts
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
let ItemListItemComponent = class ItemListItemComponent {
    constructor() {
        this.qaTag = '';
        this.align = 'left';
        this.selectItem = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get itemName() {
        return this.item.name;
    }
    /**
     * @return {?}
     */
    get itemIcon() {
        return this.item.icon;
    }
    /**
     * @return {?}
     */
    get itemSelected() {
        return this.item.selected ? true : false;
    }
    /**
     * @return {?}
     */
    get itemQaTag() {
        return this.qaTag && this.qaTag + '-item-' + this.item.id || '';
    }
    /**
     * @return {?}
     */
    get itemStyle() {
        /** @type {?} */
        let style = `sth-item-list__item item-list-item item-list-item--${this.align}`;
        style += this.itemSelected ? ' sth-item-list__item--selected' : '';
        return style;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitOnSelect(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selectItem.emit(this.item);
    }
};
ItemListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'item-list-item',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div [ngClass]=\"itemStyle\" [attr.id]=\"itemQaTag\" [title]=\"itemName\" (click)=\"emitOnSelect($event)\">\n   <i *ngIf=\"align === 'left'\" class=\"item-list-item__icon item-list-item__icon--left {{itemIcon}}\"></i>\n   <span class=\"item-list-item__name\">{{itemName}}</span>\n   <i *ngIf=\"align === 'right'\" class=\"item-list-item__icon item-list-item__icon--right {{itemIcon}}\"></i>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.item-list-item{display:inline-block;min-width:100%;width:100%;height:100%;padding:5px 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.item-list-item--left{text-align:left}.item-list-item--right{text-align:right}.item-list-item__icon{position:relative;top:2px}.item-list-item__icon--left{margin-right:10px}.item-list-item__icon--right{margin-left:10px}.item-list-item__name{position:relative;top:1px}:host{display:block;padding-right:20px}"]
            }] }
];
/** @nocollapse */
ItemListItemComponent.ctorParameters = () => [];
ItemListItemComponent.propDecorators = {
    item: [{ type: Input }],
    qaTag: [{ type: Input }],
    align: [{ type: Input }],
    selectItem: [{ type: Output }]
};
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", Object)
], ItemListItemComponent.prototype, "item", void 0);
ItemListItemComponent = tslib_1.__decorate([
    StEgeo(),
    tslib_1.__metadata("design:paramtypes", [])
], ItemListItemComponent);
export { ItemListItemComponent };
if (false) {
    /** @type {?} */
    ItemListItemComponent.prototype.item;
    /** @type {?} */
    ItemListItemComponent.prototype.qaTag;
    /** @type {?} */
    ItemListItemComponent.prototype.align;
    /** @type {?} */
    ItemListItemComponent.prototype.selectItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1pdGVtLWxpc3QvaXRlbS1saXN0LWl0ZW0vaXRlbS1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7SUFVNUQscUJBQXFCLFNBQXJCLHFCQUFxQjtJQVEvQjtRQUxTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFxQixNQUFNLENBQUM7UUFFaEMsZUFBVSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztJQUU5RSxDQUFDOzs7O0lBRWpCLElBQUksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7O1lBQ04sS0FBSyxHQUFXLHNEQUFzRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3RGLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25FLE9BQU8sS0FBSyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQVk7UUFDdEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0gsQ0FBQTs7WUE1Q0EsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGsxQkFBOEM7Z0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7Ozs7bUJBSUcsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBRUwsTUFBTTs7QUFKZ0I7SUFBYixVQUFVLEVBQUU7O21EQUF5QjtBQUZyQyxxQkFBcUI7SUFEakMsTUFBTSxFQUFFOztHQUNJLHFCQUFxQixDQXFDakM7U0FyQ1kscUJBQXFCOzs7SUFFL0IscUNBQStDOztJQUMvQyxzQ0FBNEI7O0lBQzVCLHNDQUEwQzs7SUFFMUMsMkNBQThGIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RJdGVtTGlzdEVsZW1lbnQgfSBmcm9tICcuLi9zdC1pdGVtLWxpc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnaXRlbS1saXN0LWl0ZW0nLFxuICAgdGVtcGxhdGVVcmw6ICcuL2l0ZW0tbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL2l0ZW0tbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbkBTdEVnZW8oKVxuZXhwb3J0IGNsYXNzIEl0ZW1MaXN0SXRlbUNvbXBvbmVudCB7XG5cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgaXRlbTogU3RJdGVtTGlzdEVsZW1lbnQ7XG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nID0gJyc7XG4gICBASW5wdXQoKSBhbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcblxuICAgQE91dHB1dCgpIHNlbGVjdEl0ZW06IEV2ZW50RW1pdHRlcjxTdEl0ZW1MaXN0RWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0SXRlbUxpc3RFbGVtZW50PigpO1xuXG4gICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICBnZXQgaXRlbU5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0ubmFtZTtcbiAgIH1cblxuICAgZ2V0IGl0ZW1JY29uKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtLmljb247XG4gICB9XG5cbiAgIGdldCBpdGVtU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtLnNlbGVjdGVkID8gdHJ1ZSA6IGZhbHNlO1xuICAgfVxuXG4gICBnZXQgaXRlbVFhVGFnKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5xYVRhZyAmJiB0aGlzLnFhVGFnICsgJy1pdGVtLScgKyB0aGlzLml0ZW0uaWQgfHwgJyc7XG4gICB9XG5cbiAgIGdldCBpdGVtU3R5bGUoKTogc3RyaW5nIHtcbiAgICAgIGxldCBzdHlsZTogc3RyaW5nID0gYHN0aC1pdGVtLWxpc3RfX2l0ZW0gaXRlbS1saXN0LWl0ZW0gaXRlbS1saXN0LWl0ZW0tLSR7dGhpcy5hbGlnbn1gO1xuICAgICAgc3R5bGUgKz0gdGhpcy5pdGVtU2VsZWN0ZWQgPyAnIHN0aC1pdGVtLWxpc3RfX2l0ZW0tLXNlbGVjdGVkJyA6ICcnO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgfVxuXG4gICBlbWl0T25TZWxlY3QoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNlbGVjdEl0ZW0uZW1pdCh0aGlzLml0ZW0pO1xuICAgfVxufVxuXG4iXX0=