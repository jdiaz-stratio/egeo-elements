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
var ListScrollComponent = /** @class */ (function () {
    function ListScrollComponent(cd, elemRef) {
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
        function () {
            /** @type {?} */
            var timer = 0;
            return (/**
             * @param {?} callback
             * @param {?} ms
             * @return {?}
             */
            function (callback, ms) {
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
    ListScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.showLoading = this.isLoading;
        this.cd.markForCheck();
    };
    Object.defineProperty(ListScrollComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-scroll-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListScrollComponent.prototype, "listCheckAllQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-check-all-scroll-list';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ListScrollComponent.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var element = this.elemRef.nativeElement.querySelector('#virtualScroll');
        this.showLoading = this.isLoading;
        this.atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        /** @type {?} */
        var debounce = _.throttle((/**
         * @return {?}
         */
        function () {
            if (_this.atBottom) {
                _this.scrollBottom.emit();
                _this.showLoading = false;
            }
        }));
        this.delay(debounce, 1000);
    };
    ListScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-scroll',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<virtual-scroller [items]=\"list\" (vsUpdate)=\"scrollItems = $event\" id=\"virtualScroll\" (scroll)=\"onScroll()\">\n   <list-item class=\"virtual-scroll__list-item\" *ngFor=\"let item of scrollItems; let i = index\" [item]=\"item\" (selectItem)=\"selectItem.emit(item)\" (selectItemNonEditable)=\"selectItemNonEditable.emit(item)\"\n       [qaTag]=\"listQaTag\" [editable]=\"editable\" (selectExtraLabel)=\"selectExtraLabel.emit($event)\" [mode]=\"mode\" [menuOptionList]=\"menuOptionList\" [disabled]=\"item.disabled\"></list-item>\n   <div *ngIf=\"atBottom && showLoading\" class=\"spinner-container\">\n      <st-spinner class=\"spinner\"></st-spinner>\n      <span>{{fetchingDataText}}</span>\n   </div>\n</virtual-scroller>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;max-height:100%;flex:1;min-height:10px}virtual-scroller{width:100%}virtual-scroller__list-item-all{padding:5px 22px 22px;margin-bottom:5px}virtual-scroller__list-item{padding:5px 22px 22px}.virtual-scroll__list-item-all{padding:5px 22px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.virtual-scroll__list-item{padding:5px 22px 0}.spinner-container{width:100%;display:flex;flex-direction:column}.spinner-container span{margin:auto auto 20px;font-weight:400;font-size:1rem;color:#888}.spinner-container .spinner{display:block;margin:20px auto 14px;width:20px;height:20px}"]
                }] }
    ];
    /** @nocollapse */
    ListScrollComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
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
    return ListScrollComponent;
}());
export { ListScrollComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10d28tbGlzdC1zZWxlY3Rpb24vbGlzdC1zY3JvbGwvbGlzdC1zY3JvbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN2SSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekU7SUFvQ0csNkJBQ1csRUFBcUIsRUFDckIsT0FBbUI7UUFEbkIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQTdCckIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFJNUIsU0FBSSxHQUF5QixRQUFRLENBQUM7UUFFckMsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxRCxlQUFVLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO1FBQ3BHLDBCQUFxQixHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUMvRyxxQkFBZ0IsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDdEgsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRXBFLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFROzs7UUFBQzs7Z0JBQ1AsS0FBSyxHQUFRLENBQUM7WUFDbEI7Ozs7O1lBQU8sVUFBQyxRQUFhLEVBQUUsRUFBTztnQkFDM0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwQixLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUM7UUFDTCxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQ0wsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixnQkFBVyxHQUFnQyxFQUFFLENBQUM7UUFDOUMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFLN0IsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQ0csT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFpQjs7OztRQUFyQjtZQUNHLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUNoRCxDQUFDOzs7T0FBQTs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQVlDOztZQVhNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDeEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUM7O1lBRTVFLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUTs7O1FBQUM7WUFDekIsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzthQUMzQjtRQUNKLENBQUMsRUFBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWxFSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGdxQ0FBMkM7b0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDakQ7Ozs7Z0JBWlEsaUJBQWlCO2dCQUFzQyxVQUFVOzs7dUJBZXRFLEtBQUs7MkJBQ0wsS0FBSzttQ0FDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOytCQUVMLE1BQU07NkJBQ04sTUFBTTt3Q0FDTixNQUFNO21DQUNOLE1BQU07eUJBQ04sTUFBTTs7SUFkZ0I7UUFBYixVQUFVLEVBQUU7O3FEQUFtQztJQU9sQztRQUFiLFVBQVUsRUFBRTs7c0RBQWU7SUFvRHhDLDBCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0E3RFksbUJBQW1COzs7SUFFN0IsbUNBQXlEOztJQUN6RCx1Q0FBbUM7O0lBQ25DLCtDQUFrQzs7SUFDbEMseUNBQXNDOztJQUN0Qyx3Q0FBcUM7O0lBQ3JDLHNDQUE2Qzs7SUFDN0MsNkNBQStDOztJQUMvQyxvQ0FBcUM7O0lBQ3JDLG1DQUErQzs7SUFFL0MsMkNBQW9FOztJQUNwRSx5Q0FBOEc7O0lBQzlHLG9EQUF5SDs7SUFDekgsK0NBQWdJOztJQUNoSSxxQ0FBb0U7O0lBRXBFLHVDQUEwQjs7SUFDMUIsb0NBTUs7O0lBQ0wsc0NBQW9COztJQUNwQiwwQ0FBOEM7O0lBQzlDLDBDQUE2Qjs7Ozs7SUFHMUIsaUNBQTZCOzs7OztJQUM3QixzQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUl0ZW0gfSBmcm9tICcuLi8uLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQsIFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24gfSBmcm9tICcuLi9zdC10d28tbGlzdC1zZWxlY3Rpb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnbGlzdC1zY3JvbGwnLFxuICAgdGVtcGxhdGVVcmw6ICcuL2xpc3Qtc2Nyb2xsLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL2xpc3Qtc2Nyb2xsLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2Nyb2xsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBsaXN0OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W107XG4gICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgZmV0Y2hpbmdEYXRhVGV4dDogc3RyaW5nO1xuICAgQElucHV0KCkgaGFzQWxsTGlzdD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGlzTG9hZGluZz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGl0ZW1BbGw/OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50O1xuICAgQElucHV0KCkgbWVudU9wdGlvbkxpc3Q/OiBTdERyb3BEb3duTWVudUl0ZW1bXTtcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgcWFUYWc6IHN0cmluZztcbiAgIEBJbnB1dCgpIG1vZGU6ICdjb21wYWN0JyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XG5cbiAgIEBPdXRwdXQoKSBzY3JvbGxCb3R0b206IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbTogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PigpO1xuICAgQE91dHB1dCgpIHNlbGVjdEl0ZW1Ob25FZGl0YWJsZTogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PigpO1xuICAgQE91dHB1dCgpIHNlbGVjdEV4dHJhTGFiZWw6IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4oKTtcbiAgIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIGF0Qm90dG9tOiBCb29sZWFuID0gZmFsc2U7XG4gICBkZWxheTogYW55ID0gKCgpID0+IHtcbiAgICAgIGxldCB0aW1lcjogYW55ID0gMDtcbiAgICAgIHJldHVybiAoY2FsbGJhY2s6IGFueSwgbXM6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChjYWxsYmFjaywgbXMpO1xuICAgICAgfTtcbiAgIH0pKCk7XG4gICBmaXJzdEVsOiBudW1iZXIgPSAwO1xuICAgc2Nyb2xsSXRlbXM6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXSA9IFtdO1xuICAgc2hvd0xvYWRpbmc6IEJvb2xlYW4gPSBmYWxzZTtcblxuICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIHByaXZhdGUgZWxlbVJlZjogRWxlbWVudFJlZikge1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0aGlzLmlzTG9hZGluZztcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIGdldCBsaXN0UWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICsgJy1zY3JvbGwtbGlzdCc7XG4gICB9XG5cbiAgIGdldCBsaXN0Q2hlY2tBbGxRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgKyAnLWNoZWNrLWFsbC1zY3JvbGwtbGlzdCc7XG4gICB9XG5cbiAgIG9uU2Nyb2xsKCk6IHZvaWQge1xuICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjdmlydHVhbFNjcm9sbCcpO1xuICAgICAgdGhpcy5zaG93TG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nO1xuICAgICAgdGhpcy5hdEJvdHRvbSA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3AgPT09IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgICBjb25zdCBkZWJvdW5jZSA9IF8udGhyb3R0bGUoKCkgPT4ge1xuICAgICAgICAgaWYgKHRoaXMuYXRCb3R0b20pIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tLmVtaXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5kZWxheShkZWJvdW5jZSwgMTAwMCk7XG4gICB9XG59XG4iXX0=