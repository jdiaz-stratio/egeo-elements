/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/item-list-scroll/item-list-scroll.component.ts
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
import { StRequired } from '../../decorators/require-decorators';
var ItemListScrollComponent = /** @class */ (function () {
    function ItemListScrollComponent() {
        this.qaTag = '';
        this.align = 'left';
        this.selectItem = new EventEmitter();
        this.scrollItems = [];
    }
    Object.defineProperty(ItemListScrollComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-scroll-list' || '';
        },
        enumerable: true,
        configurable: true
    });
    ItemListScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'item-list-scroll',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<virtual-scroller [items]=\"list\" (vsUpdate)=\"scrollItems = $event\">\n   <item-list-item *ngFor=\"let item of scrollItems\" [item]=\"item\" [qaTag]=\"listQaTag\" [align]=\"align\" (selectItem)=\"selectItem.emit(item)\"></item-list-item>\n</virtual-scroller>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;max-height:100%;flex:1;min-height:10px}item-list-item{height:35px}virtual-scroller{width:100%}"]
                }] }
    ];
    ItemListScrollComponent.propDecorators = {
        list: [{ type: Input }],
        qaTag: [{ type: Input }],
        align: [{ type: Input }],
        selectItem: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], ItemListScrollComponent.prototype, "list", void 0);
    return ItemListScrollComponent;
}());
export { ItemListScrollComponent };
if (false) {
    /** @type {?} */
    ItemListScrollComponent.prototype.list;
    /** @type {?} */
    ItemListScrollComponent.prototype.qaTag;
    /** @type {?} */
    ItemListScrollComponent.prototype.align;
    /** @type {?} */
    ItemListScrollComponent.prototype.selectItem;
    /** @type {?} */
    ItemListScrollComponent.prototype.scrollItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWl0ZW0tbGlzdC9pdGVtLWxpc3Qtc2Nyb2xsL2l0ZW0tbGlzdC1zY3JvbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd6RTtJQUFBO1FBU1ksVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQXFCLE1BQU0sQ0FBQztRQUVoQyxlQUFVLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBRTlGLGdCQUFXLEdBQXdCLEVBQUUsQ0FBQztJQUt6QyxDQUFDO0lBSEUsc0JBQUksOENBQVM7Ozs7UUFBYjtZQUNHLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsSUFBSSxFQUFFLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7O2dCQWxCSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsd3NCQUFnRDtvQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNqRDs7O3VCQUdHLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUVMLE1BQU07O0lBSmdCO1FBQWIsVUFBVSxFQUFFOzt5REFBMkI7SUFXcEQsOEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWJZLHVCQUF1Qjs7O0lBRWpDLHVDQUFpRDs7SUFDakQsd0NBQTRCOztJQUM1Qix3Q0FBMEM7O0lBRTFDLDZDQUE4Rjs7SUFFOUYsOENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVJdGVtIH0gZnJvbSAnLi4vLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdEl0ZW1MaXN0RWxlbWVudCB9IGZyb20gJy4uL3N0LWl0ZW0tbGlzdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdpdGVtLWxpc3Qtc2Nyb2xsJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9pdGVtLWxpc3Qtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL2l0ZW0tbGlzdC1zY3JvbGwuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1MaXN0U2Nyb2xsQ29tcG9uZW50IHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBsaXN0OiBTdEl0ZW1MaXN0RWxlbWVudFtdO1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZyA9ICcnO1xuICAgQElucHV0KCkgYWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG5cbiAgIEBPdXRwdXQoKSBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U3RJdGVtTGlzdEVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdEl0ZW1MaXN0RWxlbWVudD4oKTtcblxuICAgc2Nyb2xsSXRlbXM6IFN0SXRlbUxpc3RFbGVtZW50W10gPSBbXTtcblxuICAgZ2V0IGxpc3RRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgJiYgdGhpcy5xYVRhZyArICctc2Nyb2xsLWxpc3QnIHx8ICcnO1xuICAgfVxufVxuIl19