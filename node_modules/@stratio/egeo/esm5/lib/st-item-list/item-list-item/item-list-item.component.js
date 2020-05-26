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
var ItemListItemComponent = /** @class */ (function () {
    function ItemListItemComponent() {
        this.qaTag = '';
        this.align = 'left';
        this.selectItem = new EventEmitter();
    }
    Object.defineProperty(ItemListItemComponent.prototype, "itemName", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.selected ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-item-' + this.item.id || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemListItemComponent.prototype, "itemStyle", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var style = "sth-item-list__item item-list-item item-list-item--" + this.align;
            style += this.itemSelected ? ' sth-item-list__item--selected' : '';
            return style;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ItemListItemComponent.prototype.emitOnSelect = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selectItem.emit(this.item);
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
    ItemListItemComponent.ctorParameters = function () { return []; };
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
    return ItemListItemComponent;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1pdGVtLWxpc3QvaXRlbS1saXN0LWl0ZW0vaXRlbS1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7O0lBa0J0RTtRQUxTLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFxQixNQUFNLENBQUM7UUFFaEMsZUFBVSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztJQUU5RSxDQUFDO0lBRWpCLHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7Ozs7UUFBWjtZQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBWTs7OztRQUFoQjtZQUNHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVM7Ozs7UUFBYjtZQUNHLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBUzs7OztRQUFiOztnQkFDTyxLQUFLLEdBQVcsd0RBQXNELElBQUksQ0FBQyxLQUFPO1lBQ3RGLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ25FLE9BQU8sS0FBSyxDQUFDO1FBQ2hCLENBQUM7OztPQUFBOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Z0JBM0NILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixrMUJBQThDO29CQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7Ozt1QkFJRyxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFFTCxNQUFNOztJQUpnQjtRQUFiLFVBQVUsRUFBRTs7dURBQXlCO0lBRnJDLHFCQUFxQjtRQURqQyxNQUFNLEVBQUU7O09BQ0kscUJBQXFCLENBcUNqQztJQUFELDRCQUFDO0NBQUEsSUFBQTtTQXJDWSxxQkFBcUI7OztJQUUvQixxQ0FBK0M7O0lBQy9DLHNDQUE0Qjs7SUFDNUIsc0NBQTBDOztJQUUxQywyQ0FBOEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdEl0ZW1MaXN0RWxlbWVudCB9IGZyb20gJy4uL3N0LWl0ZW0tbGlzdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdpdGVtLWxpc3QtaXRlbScsXG4gICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vaXRlbS1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuQFN0RWdlbygpXG5leHBvcnQgY2xhc3MgSXRlbUxpc3RJdGVtQ29tcG9uZW50IHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBpdGVtOiBTdEl0ZW1MaXN0RWxlbWVudDtcbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmcgPSAnJztcbiAgIEBJbnB1dCgpIGFsaWduOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuXG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbTogRXZlbnRFbWl0dGVyPFN0SXRlbUxpc3RFbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RJdGVtTGlzdEVsZW1lbnQ+KCk7XG5cbiAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgIGdldCBpdGVtTmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbS5uYW1lO1xuICAgfVxuXG4gICBnZXQgaXRlbUljb24oKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0uaWNvbjtcbiAgIH1cblxuICAgZ2V0IGl0ZW1TZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICB9XG5cbiAgIGdldCBpdGVtUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICYmIHRoaXMucWFUYWcgKyAnLWl0ZW0tJyArIHRoaXMuaXRlbS5pZCB8fCAnJztcbiAgIH1cblxuICAgZ2V0IGl0ZW1TdHlsZSgpOiBzdHJpbmcge1xuICAgICAgbGV0IHN0eWxlOiBzdHJpbmcgPSBgc3RoLWl0ZW0tbGlzdF9faXRlbSBpdGVtLWxpc3QtaXRlbSBpdGVtLWxpc3QtaXRlbS0tJHt0aGlzLmFsaWdufWA7XG4gICAgICBzdHlsZSArPSB0aGlzLml0ZW1TZWxlY3RlZCA/ICcgc3RoLWl0ZW0tbGlzdF9faXRlbS0tc2VsZWN0ZWQnIDogJyc7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICB9XG5cbiAgIGVtaXRPblNlbGVjdChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2VsZWN0SXRlbS5lbWl0KHRoaXMuaXRlbSk7XG4gICB9XG59XG5cbiJdfQ==