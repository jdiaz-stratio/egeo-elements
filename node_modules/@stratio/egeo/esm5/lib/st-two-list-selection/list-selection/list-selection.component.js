/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-selection/list-selection.component.ts
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
var ListSelectionComponent = /** @class */ (function () {
    function ListSelectionComponent() {
        this.editable = false;
        this.important = false;
        this.hasAllList = false;
        this.hasSearch = true;
        this.isLoading = false;
        this.orderOptions = [];
        this.mode = 'normal';
        this.scrollBottom = new EventEmitter();
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.search = new EventEmitter();
        this.changeOrder = new EventEmitter();
        this.scrollItems = [];
    }
    Object.defineProperty(ListSelectionComponent.prototype, "searchQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-search';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectionComponent.prototype, "listCheckAllQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-all-checkbox';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectionComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-list';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListSelectionComponent.prototype, "hasOrder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.orderOptions && this.orderOptions.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ListSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'list-selection',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"list-selection\">\n   <div class=\"list-selection__rectangle\">\n      <p class=\"title sth-two-list__list-title\" [ngClass]=\"{'sth-two-list__important-title': important}\">{{title}}</p>\n      <p class=\"subtitle sth-two-list__list-subtitle\">{{subtitle}}</p>\n      <st-search class=\"search\" *ngIf=\"hasSearch && ( list && list.length >= showSearchNumber) || (hasSearch && !showSearchNumber)\" [placeholder]=\"searchPlaceholder\" [qaTag]=\"searchQaTag\" (search)=\"search.emit($event)\"></st-search>\n   </div>\n   <list-item [disabled]=\"list.length === 0\" class=\"list-selection__list-item-all\" *ngIf=\"hasAllList && scrollItems\" [item]=\"itemAll\"\n      (selectItem)=\"selectItem.emit(itemAll);\" [editable]=\"editable\" [qaTag]=\"listCheckAllQaTag\"></list-item>\n\n   <list-scroll [list]=\"list\" [itemAll]=\"itemAll\" [mode]=\"mode\" (selectItem)=\"selectItem.emit($event)\" (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\"  [hasAllList]=\"hasAllList\" [qaTag]=\"listQaTag\" [editable]=\"editable\" [qaTag]=\"listQaTag\" [editable]=\"editable\"\n             (selectExtraLabel)=\"selectExtraLabel.emit($event)\" (scrollBottom)=\"scrollBottom.emit($event)\" [isLoading]=\"isLoading\" [fetchingDataText]=\"fetchingDataText\" [menuOptionList]=\"menuOptionList\"></list-scroll>\n   <div class=\"list-selection__rectangle bottom\" *ngIf=\"hasOrder\" >\n         <st-select [disabled]=\"list.length === 0\" class=\"order-select\" button=\"Order\" [options]=\"orderOptions\" (select)=\"changeOrder.emit($event)\" [placeholder]=\"orderPlaceholder\"></st-select>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.list-selection{display:flex;flex-direction:column;flex-wrap:nowrap;width:100%;height:100%}.list-selection__rectangle{background-color:#fafafa;padding:22px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.list-selection__rectangle.bottom{border-bottom-width:0;border-top-width:1px;border-top-color:#dbdbdb}.list-selection__list-item-all{padding:5px 22px;margin-bottom:5px;border-bottom-width:1px;border-bottom-color:#dbdbdb}.title{width:100%;margin-bottom:5px;padding:0;font-weight:400;font-size:.938rem;color:#585858}.subtitle{font-size:1rem;color:#585858;font-weight:400;font-style:normal;font-stretch:normal}.list{list-style:none;padding:0;width:100%;height:80%;overflow:auto}.list.with-order{height:71%}.search{margin-top:18px;display:block}.order-select{display:block}virtual-scroll{display:block;width:100%;height:100%}"]
                }] }
    ];
    ListSelectionComponent.propDecorators = {
        list: [{ type: Input }],
        editable: [{ type: Input }],
        title: [{ type: Input }],
        subtitle: [{ type: Input }],
        searchPlaceholder: [{ type: Input }],
        qaTag: [{ type: Input }],
        important: [{ type: Input }],
        hasAllList: [{ type: Input }],
        hasSearch: [{ type: Input }],
        isLoading: [{ type: Input }],
        itemAll: [{ type: Input }],
        menuOptionList: [{ type: Input }],
        orderOptions: [{ type: Input }],
        orderPlaceholder: [{ type: Input }],
        mode: [{ type: Input }],
        showSearchNumber: [{ type: Input }],
        fetchingDataText: [{ type: Input }],
        scrollBottom: [{ type: Output }],
        selectItem: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectExtraLabel: [{ type: Output }],
        search: [{ type: Output }],
        changeOrder: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], ListSelectionComponent.prototype, "list", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", String)
    ], ListSelectionComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", String)
    ], ListSelectionComponent.prototype, "searchPlaceholder", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", String)
    ], ListSelectionComponent.prototype, "qaTag", void 0);
    return ListSelectionComponent;
}());
export { ListSelectionComponent };
if (false) {
    /** @type {?} */
    ListSelectionComponent.prototype.list;
    /** @type {?} */
    ListSelectionComponent.prototype.editable;
    /** @type {?} */
    ListSelectionComponent.prototype.title;
    /** @type {?} */
    ListSelectionComponent.prototype.subtitle;
    /** @type {?} */
    ListSelectionComponent.prototype.searchPlaceholder;
    /** @type {?} */
    ListSelectionComponent.prototype.qaTag;
    /** @type {?} */
    ListSelectionComponent.prototype.important;
    /** @type {?} */
    ListSelectionComponent.prototype.hasAllList;
    /** @type {?} */
    ListSelectionComponent.prototype.hasSearch;
    /** @type {?} */
    ListSelectionComponent.prototype.isLoading;
    /** @type {?} */
    ListSelectionComponent.prototype.itemAll;
    /** @type {?} */
    ListSelectionComponent.prototype.menuOptionList;
    /** @type {?} */
    ListSelectionComponent.prototype.orderOptions;
    /** @type {?} */
    ListSelectionComponent.prototype.orderPlaceholder;
    /** @type {?} */
    ListSelectionComponent.prototype.mode;
    /** @type {?} */
    ListSelectionComponent.prototype.showSearchNumber;
    /** @type {?} */
    ListSelectionComponent.prototype.fetchingDataText;
    /** @type {?} */
    ListSelectionComponent.prototype.scrollBottom;
    /** @type {?} */
    ListSelectionComponent.prototype.selectItem;
    /** @type {?} */
    ListSelectionComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListSelectionComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListSelectionComponent.prototype.search;
    /** @type {?} */
    ListSelectionComponent.prototype.changeOrder;
    /** @type {?} */
    ListSelectionComponent.prototype.scrollItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10d28tbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdqRTtJQUFBO1FBU1ksYUFBUSxHQUFZLEtBQUssQ0FBQztRQUsxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFDN0IsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBRzVCLGlCQUFZLEdBQXlCLEVBQUUsQ0FBQztRQUV4QyxTQUFJLEdBQXlCLFFBQVEsQ0FBQztRQUlyQyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELGVBQVUsR0FBNEMsSUFBSSxZQUFZLEVBQTZCLENBQUM7UUFDcEcsMEJBQXFCLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO1FBQy9HLHFCQUFnQixHQUFrRCxJQUFJLFlBQVksRUFBbUMsQ0FBQztRQUN0SCxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDMUQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVuRSxnQkFBVyxHQUFnQyxFQUFFLENBQUM7SUFpQmpELENBQUM7SUFmRSxzQkFBSSwrQ0FBVzs7OztRQUFmO1lBQ0csT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFEQUFpQjs7OztRQUFyQjtZQUNHLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBUzs7OztRQUFiO1lBQ0csT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFROzs7O1FBQVo7WUFDRyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzVELENBQUM7OztPQUFBOztnQkFqREgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGtoRUFBOEM7b0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDakQ7Ozt1QkFHRyxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLO29DQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSzsrQkFDTCxLQUFLO21DQUNMLEtBQUs7dUJBQ0wsS0FBSzttQ0FDTCxLQUFLO21DQUNMLEtBQUs7K0JBRUwsTUFBTTs2QkFDTixNQUFNO3dDQUNOLE1BQU07bUNBQ04sTUFBTTt5QkFDTixNQUFNOzhCQUNOLE1BQU07O0lBdkJnQjtRQUFiLFVBQVUsRUFBRTs7d0RBQW1DO0lBRWxDO1FBQWIsVUFBVSxFQUFFOzt5REFBZTtJQUVkO1FBQWIsVUFBVSxFQUFFOztxRUFBMkI7SUFDMUI7UUFBYixVQUFVLEVBQUU7O3lEQUFlO0lBcUN4Qyw2QkFBQztDQUFBLEFBbERELElBa0RDO1NBNUNZLHNCQUFzQjs7O0lBRWhDLHNDQUF5RDs7SUFDekQsMENBQW1DOztJQUNuQyx1Q0FBcUM7O0lBQ3JDLDBDQUEyQjs7SUFDM0IsbURBQWlEOztJQUNqRCx1Q0FBcUM7O0lBQ3JDLDJDQUFvQzs7SUFDcEMsNENBQXNDOztJQUN0QywyQ0FBbUM7O0lBQ25DLDJDQUFxQzs7SUFDckMseUNBQTZDOztJQUM3QyxnREFBK0M7O0lBQy9DLDhDQUFpRDs7SUFDakQsa0RBQW1DOztJQUNuQyxzQ0FBK0M7O0lBQy9DLGtEQUFtQzs7SUFDbkMsa0RBQWtDOztJQUVsQyw4Q0FBb0U7O0lBQ3BFLDRDQUE4Rzs7SUFDOUcsdURBQXlIOztJQUN6SCxrREFBZ0k7O0lBQ2hJLHdDQUFvRTs7SUFDcEUsNkNBQW1FOztJQUVuRSw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUl0ZW0gfSBmcm9tICcuLi8uLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0UmVxdWlyZWQgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50LCBTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uIH0gZnJvbSAnLi4vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ2xpc3Qtc2VsZWN0aW9uJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9saXN0LXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdGlvbkNvbXBvbmVudCB7XG5cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgbGlzdDogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdO1xuICAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgdGl0bGU6IHN0cmluZztcbiAgIEBJbnB1dCgpIHN1YnRpdGxlPzogc3RyaW5nO1xuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBxYVRhZzogc3RyaW5nO1xuICAgQElucHV0KCkgaW1wb3J0YW50OiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBoYXNBbGxMaXN0PzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaGFzU2VhcmNoOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIGlzTG9hZGluZz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGl0ZW1BbGw/OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50O1xuICAgQElucHV0KCkgbWVudU9wdGlvbkxpc3Q/OiBTdERyb3BEb3duTWVudUl0ZW1bXTtcbiAgIEBJbnB1dCgpIG9yZGVyT3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcbiAgIEBJbnB1dCgpIG9yZGVyUGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICBASW5wdXQoKSBtb2RlOiAnY29tcGFjdCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xuICAgQElucHV0KCkgc2hvd1NlYXJjaE51bWJlcj86IG51bWJlcjtcbiAgIEBJbnB1dCgpIGZldGNoaW5nRGF0YVRleHQ6IHN0cmluZztcblxuICAgQE91dHB1dCgpIHNjcm9sbEJvdHRvbTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbU5vbkVkaXRhYmxlOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbDogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uPigpO1xuICAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgIEBPdXRwdXQoKSBjaGFuZ2VPcmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgc2Nyb2xsSXRlbXM6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXSA9IFtdO1xuXG4gICBnZXQgc2VhcmNoUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICsgJy1zZWFyY2gnO1xuICAgfVxuXG4gICBnZXQgbGlzdENoZWNrQWxsUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICsgJy1hbGwtY2hlY2tib3gnO1xuICAgfVxuXG4gICBnZXQgbGlzdFFhVGFnKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5xYVRhZyArICctbGlzdCc7XG4gICB9XG5cbiAgIGdldCBoYXNPcmRlcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyT3B0aW9ucyAmJiB0aGlzLm9yZGVyT3B0aW9ucy5sZW5ndGggPiAwO1xuICAgfVxufVxuIl19