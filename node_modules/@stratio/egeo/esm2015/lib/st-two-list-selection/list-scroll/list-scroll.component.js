/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-scroll/list-scroll.component.ts
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
import { ChangeDetectorRef, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as _ from 'lodash';
import { StRequired } from '../../decorators/require-decorators';
export class ListScrollComponent {
    /**
     * @param {?} cd
     * @param {?} elemRef
     */
    constructor(cd, elemRef) {
        this.cd = cd;
        this.elemRef = elemRef;
        this.editable = false;
        this.hasAllList = false;
        this.isLoading = false;
        this.mode = 'normal';
        this.scrollBottom = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.search = new EventEmitter();
        this.atBottom = false;
        this.delay = ((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let timer = 0;
            return (/**
             * @param {?} callback
             * @param {?} ms
             * @return {?}
             */
            (callback, ms) => {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            });
        }))();
        this.firstEl = 0;
        this.scrollItems = [];
        this.showLoading = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.showLoading = this.isLoading;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get listQaTag() {
        return this.qaTag + '-scroll-list';
    }
    /**
     * @return {?}
     */
    get listCheckAllQaTag() {
        return this.qaTag + '-check-all-scroll-list';
    }
    /**
     * @return {?}
     */
    onScroll() {
        /** @type {?} */
        let element = this.elemRef.nativeElement.querySelector('#virtualScroll');
        this.showLoading = this.isLoading;
        this.atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        /** @type {?} */
        const debounce = _.throttle((/**
         * @return {?}
         */
        () => {
            if (this.atBottom) {
                this.scrollBottom.emit();
                this.showLoading = false;
            }
        }));
        this.delay(debounce, 1000);
    }
}
ListScrollComponent.decorators = [
    { type: Component, args: [{
                selector: 'list-scroll',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<virtual-scroller [items]=\"list\" (vsUpdate)=\"scrollItems = $event\" id=\"virtualScroll\" (scroll)=\"onScroll()\">\n   <list-item class=\"virtual-scroll__list-item\" *ngFor=\"let item of scrollItems; let i = index\" [item]=\"item\" (selectItem)=\"selectItem.emit(item)\" (selectItemNonEditable)=\"selectItemNonEditable.emit(item)\"\n       [qaTag]=\"listQaTag\" [editable]=\"editable\" (selectExtraLabel)=\"selectExtraLabel.emit($event)\" [mode]=\"mode\" [menuOptionList]=\"menuOptionList\" [disabled]=\"item.disabled\"></list-item>\n   <div *ngIf=\"atBottom && showLoading\" class=\"spinner-container\">\n      <st-spinner class=\"spinner\"></st-spinner>\n      <span>{{fetchingDataText}}</span>\n   </div>\n</virtual-scroller>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{display:flex;max-height:100%;flex:1;min-height:10px}virtual-scroller{width:100%}virtual-scroller__list-item-all{padding:5px 22px 22px;margin-bottom:5px}virtual-scroller__list-item{padding:5px 22px 22px}.virtual-scroll__list-item-all{padding:5px 22px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.virtual-scroll__list-item{padding:5px 22px 0}.spinner-container{width:100%;display:flex;flex-direction:column}.spinner-container span{margin:auto auto 20px;font-weight:400;font-size:1rem;color:#888}.spinner-container .spinner{display:block;margin:20px auto 14px;width:20px;height:20px}"]
            }] }
];
/** @nocollapse */
ListScrollComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
ListScrollComponent.propDecorators = {
    list: [{ type: Input }],
    editable: [{ type: Input }],
    fetchingDataText: [{ type: Input }],
    hasAllList: [{ type: Input }],
    isLoading: [{ type: Input }],
    itemAll: [{ type: Input }],
    menuOptionList: [{ type: Input }],
    qaTag: [{ type: Input }],
    mode: [{ type: Input }],
    scrollBottom: [{ type: Output }],
    selectItem: [{ type: Output }],
    selectItemNonEditable: [{ type: Output }],
    selectExtraLabel: [{ type: Output }],
    search: [{ type: Output }]
};
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", Array)
], ListScrollComponent.prototype, "list", void 0);
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", String)
], ListScrollComponent.prototype, "qaTag", void 0);
if (false) {
    /** @type {?} */
    ListScrollComponent.prototype.list;
    /** @type {?} */
    ListScrollComponent.prototype.editable;
    /** @type {?} */
    ListScrollComponent.prototype.fetchingDataText;
    /** @type {?} */
    ListScrollComponent.prototype.hasAllList;
    /** @type {?} */
    ListScrollComponent.prototype.isLoading;
    /** @type {?} */
    ListScrollComponent.prototype.itemAll;
    /** @type {?} */
    ListScrollComponent.prototype.menuOptionList;
    /** @type {?} */
    ListScrollComponent.prototype.qaTag;
    /** @type {?} */
    ListScrollComponent.prototype.mode;
    /** @type {?} */
    ListScrollComponent.prototype.scrollBottom;
    /** @type {?} */
    ListScrollComponent.prototype.selectItem;
    /** @type {?} */
    ListScrollComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListScrollComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListScrollComponent.prototype.search;
    /** @type {?} */
    ListScrollComponent.prototype.atBottom;
    /** @type {?} */
    ListScrollComponent.prototype.delay;
    /** @type {?} */
    ListScrollComponent.prototype.firstEl;
    /** @type {?} */
    ListScrollComponent.prototype.scrollItems;
    /** @type {?} */
    ListScrollComponent.prototype.showLoading;
    /**
     * @type {?}
     * @private
     */
    ListScrollComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ListScrollComponent.prototype.elemRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10d28tbGlzdC1zZWxlY3Rpb24vbGlzdC1zY3JvbGwvbGlzdC1zY3JvbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFTekUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUE4QjdCLFlBQ1csRUFBcUIsRUFDckIsT0FBbUI7UUFEbkIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCckIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFJNUIsU0FBSSxHQUF5QixRQUFRLENBQUM7UUFFckMsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxRCxlQUFVLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO1FBQ3BHLDBCQUFxQixHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUMvRyxxQkFBZ0IsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDdEgsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFROzs7UUFBQyxHQUFHLEVBQUU7O2dCQUNaLEtBQUssR0FBUSxDQUFDO1lBQ2xCOzs7OztZQUFPLENBQUMsUUFBYSxFQUFFLEVBQU8sRUFBUSxFQUFFO2dCQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQztRQUNMLENBQUMsRUFBQyxFQUFFLENBQUM7UUFDTCxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFXLEdBQWdDLEVBQUUsQ0FBQztRQUM5QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztJQUs3QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNsQixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsd0JBQXdCLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLFlBQVksQ0FBQzs7Y0FFNUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFROzs7UUFBQyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMzQjtRQUNKLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWxFSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLGdxQ0FBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7OztZQVpRLGlCQUFpQjtZQUFzQyxVQUFVOzs7bUJBZXRFLEtBQUs7dUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzZCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLOzJCQUVMLE1BQU07eUJBQ04sTUFBTTtvQ0FDTixNQUFNOytCQUNOLE1BQU07cUJBQ04sTUFBTTs7QUFkZ0I7SUFBYixVQUFVLEVBQUU7O2lEQUFtQztBQU9sQztJQUFiLFVBQVUsRUFBRTs7a0RBQWU7OztJQVByQyxtQ0FBeUQ7O0lBQ3pELHVDQUFtQzs7SUFDbkMsK0NBQWtDOztJQUNsQyx5Q0FBc0M7O0lBQ3RDLHdDQUFxQzs7SUFDckMsc0NBQTZDOztJQUM3Qyw2Q0FBK0M7O0lBQy9DLG9DQUFxQzs7SUFDckMsbUNBQStDOztJQUUvQywyQ0FBb0U7O0lBQ3BFLHlDQUE4Rzs7SUFDOUcsb0RBQXlIOztJQUN6SCwrQ0FBZ0k7O0lBQ2hJLHFDQUFvRTs7SUFFcEUsdUNBQTBCOztJQUMxQixvQ0FNSzs7SUFDTCxzQ0FBb0I7O0lBQ3BCLDBDQUE4Qzs7SUFDOUMsMENBQTZCOzs7OztJQUcxQixpQ0FBNkI7Ozs7O0lBQzdCLHNDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uLy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudCwgU3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbiB9IGZyb20gJy4uL3N0LXR3by1saXN0LXNlbGVjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdsaXN0LXNjcm9sbCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vbGlzdC1zY3JvbGwuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vbGlzdC1zY3JvbGwuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTY3JvbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICBASW5wdXQoKSBAU3RSZXF1aXJlZCgpIGxpc3Q6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXTtcbiAgIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBmZXRjaGluZ0RhdGFUZXh0OiBzdHJpbmc7XG4gICBASW5wdXQoKSBoYXNBbGxMaXN0PzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaXNMb2FkaW5nPzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaXRlbUFsbD86IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ7XG4gICBASW5wdXQoKSBtZW51T3B0aW9uTGlzdD86IFN0RHJvcERvd25NZW51SXRlbVtdO1xuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBxYVRhZzogc3RyaW5nO1xuICAgQElucHV0KCkgbW9kZTogJ2NvbXBhY3QnIHwgJ25vcm1hbCcgPSAnbm9ybWFsJztcblxuICAgQE91dHB1dCgpIHNjcm9sbEJvdHRvbTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbU5vbkVkaXRhYmxlOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbDogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uPigpO1xuICAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgYXRCb3R0b206IEJvb2xlYW4gPSBmYWxzZTtcbiAgIGRlbGF5OiBhbnkgPSAoKCkgPT4ge1xuICAgICAgbGV0IHRpbWVyOiBhbnkgPSAwO1xuICAgICAgcmV0dXJuIChjYWxsYmFjazogYW55LCBtczogYW55KTogdm9pZCA9PiB7XG4gICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCBtcyk7XG4gICAgICB9O1xuICAgfSkoKTtcbiAgIGZpcnN0RWw6IG51bWJlciA9IDA7XG4gICBzY3JvbGxJdGVtczogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdID0gW107XG4gICBzaG93TG9hZGluZzogQm9vbGVhbiA9IGZhbHNlO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmKSB7XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgZ2V0IGxpc3RRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgKyAnLXNjcm9sbC1saXN0JztcbiAgIH1cblxuICAgZ2V0IGxpc3RDaGVja0FsbFFhVGFnKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5xYVRhZyArICctY2hlY2stYWxsLXNjcm9sbC1saXN0JztcbiAgIH1cblxuICAgb25TY3JvbGwoKTogdm9pZCB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aXJ0dWFsU2Nyb2xsJyk7XG4gICAgICB0aGlzLnNob3dMb2FkaW5nID0gdGhpcy5pc0xvYWRpbmc7XG4gICAgICB0aGlzLmF0Qm90dG9tID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IGRlYm91bmNlID0gXy50aHJvdHRsZSgoKSA9PiB7XG4gICAgICAgICBpZiAodGhpcy5hdEJvdHRvbSkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxCb3R0b20uZW1pdCgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmRlbGF5KGRlYm91bmNlLCAxMDAwKTtcbiAgIH1cbn1cbiJdfQ==