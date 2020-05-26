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
export class ItemListScrollComponent {
    constructor() {
        this.qaTag = '';
        this.align = 'left';
        this.selectItem = new EventEmitter();
        this.scrollItems = [];
    }
    /**
     * @return {?}
     */
    get listQaTag() {
        return this.qaTag && this.qaTag + '-scroll-list' || '';
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1saXN0LXNjcm9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWl0ZW0tbGlzdC9pdGVtLWxpc3Qtc2Nyb2xsL2l0ZW0tbGlzdC1zY3JvbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBVSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVN6RSxNQUFNLE9BQU8sdUJBQXVCO0lBTnBDO1FBU1ksVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixVQUFLLEdBQXFCLE1BQU0sQ0FBQztRQUVoQyxlQUFVLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBRTlGLGdCQUFXLEdBQXdCLEVBQUUsQ0FBQztJQUt6QyxDQUFDOzs7O0lBSEUsSUFBSSxTQUFTO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDOzs7WUFsQkgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHdzQkFBZ0Q7Z0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7O21CQUdHLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUVMLE1BQU07O0FBSmdCO0lBQWIsVUFBVSxFQUFFOztxREFBMkI7OztJQUFqRCx1Q0FBaUQ7O0lBQ2pELHdDQUE0Qjs7SUFDNUIsd0NBQTBDOztJQUUxQyw2Q0FBOEY7O0lBRTlGLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uLy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RJdGVtTGlzdEVsZW1lbnQgfSBmcm9tICcuLi9zdC1pdGVtLWxpc3QubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnaXRlbS1saXN0LXNjcm9sbCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vaXRlbS1saXN0LXNjcm9sbC5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9pdGVtLWxpc3Qtc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtTGlzdFNjcm9sbENvbXBvbmVudCB7XG5cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgbGlzdDogU3RJdGVtTGlzdEVsZW1lbnRbXTtcbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmcgPSAnJztcbiAgIEBJbnB1dCgpIGFsaWduOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuXG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbTogRXZlbnRFbWl0dGVyPFN0SXRlbUxpc3RFbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RJdGVtTGlzdEVsZW1lbnQ+KCk7XG5cbiAgIHNjcm9sbEl0ZW1zOiBTdEl0ZW1MaXN0RWxlbWVudFtdID0gW107XG5cbiAgIGdldCBsaXN0UWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICYmIHRoaXMucWFUYWcgKyAnLXNjcm9sbC1saXN0JyB8fCAnJztcbiAgIH1cbn1cbiJdfQ==