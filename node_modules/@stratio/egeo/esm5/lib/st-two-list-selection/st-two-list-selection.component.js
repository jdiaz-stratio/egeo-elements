/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StEgeo, StRequired } from '../decorators/require-decorators';
import { StTwoListSelection } from './st-two-list-selection';
var StTwoListSelectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StTwoListSelectionComponent, _super);
    function StTwoListSelectionComponent(cd) {
        var _this = _super.call(this, cd) || this;
        _this.cd = cd;
        _this.editable = false;
        _this.hasAllListAll = false;
        _this.hasAllListSelected = false;
        _this.hasSearch = true;
        _this.isLoading = false;
        _this.mode = 'normal';
        _this.moveAllToSelectedButton = true;
        _this.moveAllToAllButton = true;
        _this.moveToSelectedButton = true;
        _this.moveToAllButton = true;
        _this.orderAllOptions = [];
        _this.orderSelectedOptions = [];
        _this.sortBy = 'id';
        _this.change = new EventEmitter();
        _this.changeOrderAll = new EventEmitter();
        _this.changeOrderSelected = new EventEmitter();
        _this.numItemsSelectedAll = new EventEmitter();
        _this.numItemsSelectedSelected = new EventEmitter();
        _this.scrollBottomAll = new EventEmitter();
        _this.searchOverAll = new EventEmitter();
        _this.searchOverSelected = new EventEmitter();
        _this.selectedElementsChange = new EventEmitter();
        _this.selectExtraLabelAll = new EventEmitter();
        _this.selectExtraLabelSelected = new EventEmitter();
        _this.selectItemNonEditable = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    StTwoListSelectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.init(this.allElements, this.selectedElements, this.selectedElementsChange, this.sortBy, this.hasAllListAll, this.hasAllListSelected, this.itemAll);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StTwoListSelectionComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.checkChanges(changes, 'allElements', 'selectedElements');
        this.change.emit();
    };
    Object.defineProperty(StTwoListSelectionComponent.prototype, "allList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.copyAllElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionComponent.prototype, "selectedList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.copySelectedElements;
        },
        enumerable: true,
        configurable: true
    });
    StTwoListSelectionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-two-list-selection',
                    template: "\n      <st-two-list-selection-view\n         [allElements]=\"allList | stFilterList:searchBy:allSearch\"\n         [selectedElements]=\"selectedList | stFilterList:searchBy:selectedSearch\"\n         [config]=\"config\"\n         [editable]=\"editable\"\n         [hasAllListAll]=\"hasAllListAll\"\n         [hasAllListSelected]=\"hasAllListSelected\"\n         [itemAll]=\"itemAll\"\n         [qaTag]=\"qaTag\"\n         [isLoading]=\"isLoading\"\n         [hasSearch]=\"hasSearch\"\n         [orderAllOptions]=\"orderAllOptions\"\n         [orderSelectedOptions]=\"orderSelectedOptions\"\n         [mode]=\"mode\"\n         [moveAllToSelectedButton]=\"moveAllToSelectedButton\"\n         [moveAllToAllButton]=\"moveAllToAllButton\"\n         [moveToAllButton]=\"moveToAllButton\"\n         [moveToSelectedButton]=\"moveToSelectedButton\"\n         [showSearchNumber]=\"showSearchNumber\"\n\n         (selectAllElement)=\"onSelectAllElement($event)\"\n         (selectSelectedElement)=\"onSelectSelectedElement($event)\"\n         (searchOverAll)=\"onSearchOverAll($event)\"\n         (searchOverSelected)=\"onSearchOverSelected($event)\"\n         (moveToSelected)=\"onMoveToSelected($event)\"\n         (moveToAll)=\"onMoveToAll($event)\"\n         (moveAllToSelected)=\"onMoveAllToSelected($event)\"\n         (moveAllToAll)=\"onMoveAllToAll($event)\"\n         (numItemsSelectedAll)=\"numItemsSelectedAll.emit($event)\"\n         (numItemsSelectedSelected)=\"numItemsSelectedSelected.emit($event)\"\n         (selectExtraLabelAll)=\"selectExtraLabelAll.emit($event)\"\n         (selectExtraLabelSelected)=\"selectExtraLabelAll.emit($event)\"\n         (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\"\n         (changeOrderAll)=\"changeOrderAll.emit($event)\"\n         (changeOrderSelected)=\"changeOrderSelected.emit($event)\"\n         (scrollBottomAll)=\"scrollBottomAll.emit($event)\"\n      ></st-two-list-selection-view>\n   ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StTwoListSelectionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionComponent.propDecorators = {
        allElements: [{ type: Input }],
        config: [{ type: Input }],
        editable: [{ type: Input }],
        hasAllListAll: [{ type: Input }],
        hasAllListSelected: [{ type: Input }],
        hasSearch: [{ type: Input }],
        isLoading: [{ type: Input }],
        itemAll: [{ type: Input }],
        mode: [{ type: Input }],
        moveAllToSelectedButton: [{ type: Input }],
        moveAllToAllButton: [{ type: Input }],
        moveToSelectedButton: [{ type: Input }],
        moveToAllButton: [{ type: Input }],
        orderAllOptions: [{ type: Input }],
        orderSelectedOptions: [{ type: Input }],
        qaTag: [{ type: Input }],
        selectedElements: [{ type: Input }],
        showSearchNumber: [{ type: Input }],
        sortBy: [{ type: Input }],
        change: [{ type: Output }],
        changeOrderAll: [{ type: Output }],
        changeOrderSelected: [{ type: Output }],
        numItemsSelectedAll: [{ type: Output }],
        numItemsSelectedSelected: [{ type: Output }],
        scrollBottomAll: [{ type: Output }],
        searchOverAll: [{ type: Output }],
        searchOverSelected: [{ type: Output }],
        selectedElementsChange: [{ type: Output }],
        selectExtraLabelAll: [{ type: Output }],
        selectExtraLabelSelected: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired('editable'),
        tslib_1.__metadata("design:type", Array)
    ], StTwoListSelectionComponent.prototype, "allElements", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", String)
    ], StTwoListSelectionComponent.prototype, "qaTag", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], StTwoListSelectionComponent.prototype, "selectedElements", void 0);
    StTwoListSelectionComponent = tslib_1.__decorate([
        StEgeo(),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], StTwoListSelectionComponent);
    return StTwoListSelectionComponent;
}(StTwoListSelection));
export { StTwoListSelectionComponent };
if (false) {
    /** @type {?} */
    StTwoListSelectionComponent.prototype.allElements;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.config;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.editable;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.hasAllListAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.hasAllListSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.hasSearch;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.isLoading;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.itemAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.mode;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveAllToSelectedButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveAllToAllButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveToSelectedButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.moveToAllButton;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.orderAllOptions;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.orderSelectedOptions;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.qaTag;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectedElements;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.showSearchNumber;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.sortBy;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.change;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.changeOrderAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.changeOrderSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.numItemsSelectedAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.numItemsSelectedSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.scrollBottomAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.searchOverAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.searchOverSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectedElementsChange;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectExtraLabelAll;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectExtraLabelSelected;
    /** @type {?} */
    StTwoListSelectionComponent.prototype.selectItemNonEditable;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelectionComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdHdvLWxpc3Qtc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdHdvLWxpc3Qtc2VsZWN0aW9uL3N0LXR3by1saXN0LXNlbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDZixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQStDWix1REFBa0I7SUFtQ2hFLHFDQUFvQixFQUFxQjtRQUF6QyxZQUNHLGtCQUFNLEVBQUUsQ0FBQyxTQUNYO1FBRm1CLFFBQUUsR0FBRixFQUFFLENBQW1CO1FBL0JoQyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLG1CQUFhLEdBQWEsS0FBSyxDQUFDO1FBQ2hDLHdCQUFrQixHQUFhLEtBQUssQ0FBQztRQUNyQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGVBQVMsR0FBYSxLQUFLLENBQUM7UUFFNUIsVUFBSSxHQUF5QixRQUFRLENBQUM7UUFDdEMsNkJBQXVCLEdBQVksSUFBSSxDQUFDO1FBQ3hDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUNuQywwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUFDckMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMscUJBQWUsR0FBeUIsRUFBRSxDQUFDO1FBQzNDLDBCQUFvQixHQUF5QixFQUFFLENBQUM7UUFJaEQsWUFBTSxHQUErQixJQUFJLENBQUM7UUFFekMsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELG9CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDNUQseUJBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakUseUJBQW1CLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakUsOEJBQXdCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEUscUJBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3RCxtQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2pFLHdCQUFrQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RFLDRCQUFzQixHQUE4QyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUNwSCx5QkFBbUIsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDekgsOEJBQXdCLEdBQWtELElBQUksWUFBWSxFQUFtQyxDQUFDO1FBQzlILDJCQUFxQixHQUE4QyxJQUFJLFlBQVksRUFBK0IsQ0FBQzs7SUFJN0gsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQ04sSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsT0FBTyxDQUNkLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGlEQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzQkFBSSxnREFBTzs7OztRQUFYO1lBQ0csT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQVk7Ozs7UUFBaEI7WUFDRyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTs7Z0JBM0J1QixpQkFBaUI7OztnQkEvRTNDLFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsazZEQXNDVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDakQ7Ozs7Z0JBMURFLGlCQUFpQjs7OzhCQThEaEIsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQ0FDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7MENBQ0wsS0FBSztxQ0FDTCxLQUFLO3VDQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7d0JBQ0wsS0FBSzttQ0FDTCxLQUFLO21DQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFFTCxNQUFNO2lDQUNOLE1BQU07c0NBQ04sTUFBTTtzQ0FDTixNQUFNOzJDQUNOLE1BQU07a0NBQ04sTUFBTTtnQ0FDTixNQUFNO3FDQUNOLE1BQU07eUNBQ04sTUFBTTtzQ0FDTixNQUFNOzJDQUNOLE1BQU07d0NBQ04sTUFBTTs7SUEvQjBCO1FBQXZCLFVBQVUsQ0FBQyxVQUFVLENBQUM7O29FQUEwQztJQWVuRDtRQUFiLFVBQVUsRUFBRTs7OERBQWU7SUFDZDtRQUFiLFVBQVUsRUFBRTs7eUVBQStDO0lBbEIzRCwyQkFBMkI7UUFEdkMsTUFBTSxFQUFFO2lEQW9Da0IsaUJBQWlCO09BbkMvQiwyQkFBMkIsQ0ErRHZDO0lBQUQsa0NBQUM7Q0FBQSxDQS9EZ0Qsa0JBQWtCLEdBK0RsRTtTQS9EWSwyQkFBMkI7OztJQUVyQyxrREFBMEU7O0lBQzFFLDZDQUEwQzs7SUFDMUMsK0NBQW1DOztJQUNuQyxvREFBeUM7O0lBQ3pDLHlEQUE4Qzs7SUFDOUMsZ0RBQW1DOztJQUNuQyxnREFBcUM7O0lBQ3JDLDhDQUE2Qzs7SUFDN0MsMkNBQStDOztJQUMvQyw4REFBaUQ7O0lBQ2pELHlEQUE0Qzs7SUFDNUMsMkRBQThDOztJQUM5QyxzREFBeUM7O0lBQ3pDLHNEQUFvRDs7SUFDcEQsMkRBQXlEOztJQUN6RCw0Q0FBcUM7O0lBQ3JDLHVEQUFxRTs7SUFDckUsdURBQWtDOztJQUNsQyw2Q0FBbUQ7O0lBRW5ELDZDQUE4RDs7SUFDOUQscURBQXNFOztJQUN0RSwwREFBMkU7O0lBQzNFLDBEQUEyRTs7SUFDM0UsK0RBQWdGOztJQUNoRixzREFBdUU7O0lBQ3ZFLG9EQUEyRTs7SUFDM0UseURBQWdGOztJQUNoRiw2REFBOEg7O0lBQzlILDBEQUFtSTs7SUFDbkksK0RBQXdJOztJQUN4SSw0REFBNkg7Ozs7O0lBRWpILHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDb21wb25lbnQsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBJbnB1dCxcbiAgIE9uQ2hhbmdlcyxcbiAgIE9uSW5pdCxcbiAgIE91dHB1dCxcbiAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RUd29MaXN0U2VsZWN0aW9uIH0gZnJvbSAnLi9zdC10d28tbGlzdC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RUd29MaXN0U2VsZWN0aW9uQ29uZmlnLCBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50LCBTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uLCBTdFR3b0xpc3RTZWxlY3Rpb25BY3Rpb24gfSBmcm9tICcuL3N0LXR3by1saXN0LXNlbGVjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10d28tbGlzdC1zZWxlY3Rpb24nLFxuICAgdGVtcGxhdGU6IGBcbiAgICAgIDxzdC10d28tbGlzdC1zZWxlY3Rpb24tdmlld1xuICAgICAgICAgW2FsbEVsZW1lbnRzXT1cImFsbExpc3QgfCBzdEZpbHRlckxpc3Q6c2VhcmNoQnk6YWxsU2VhcmNoXCJcbiAgICAgICAgIFtzZWxlY3RlZEVsZW1lbnRzXT1cInNlbGVjdGVkTGlzdCB8IHN0RmlsdGVyTGlzdDpzZWFyY2hCeTpzZWxlY3RlZFNlYXJjaFwiXG4gICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICBbZWRpdGFibGVdPVwiZWRpdGFibGVcIlxuICAgICAgICAgW2hhc0FsbExpc3RBbGxdPVwiaGFzQWxsTGlzdEFsbFwiXG4gICAgICAgICBbaGFzQWxsTGlzdFNlbGVjdGVkXT1cImhhc0FsbExpc3RTZWxlY3RlZFwiXG4gICAgICAgICBbaXRlbUFsbF09XCJpdGVtQWxsXCJcbiAgICAgICAgIFtxYVRhZ109XCJxYVRhZ1wiXG4gICAgICAgICBbaXNMb2FkaW5nXT1cImlzTG9hZGluZ1wiXG4gICAgICAgICBbaGFzU2VhcmNoXT1cImhhc1NlYXJjaFwiXG4gICAgICAgICBbb3JkZXJBbGxPcHRpb25zXT1cIm9yZGVyQWxsT3B0aW9uc1wiXG4gICAgICAgICBbb3JkZXJTZWxlY3RlZE9wdGlvbnNdPVwib3JkZXJTZWxlY3RlZE9wdGlvbnNcIlxuICAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgICBbbW92ZUFsbFRvU2VsZWN0ZWRCdXR0b25dPVwibW92ZUFsbFRvU2VsZWN0ZWRCdXR0b25cIlxuICAgICAgICAgW21vdmVBbGxUb0FsbEJ1dHRvbl09XCJtb3ZlQWxsVG9BbGxCdXR0b25cIlxuICAgICAgICAgW21vdmVUb0FsbEJ1dHRvbl09XCJtb3ZlVG9BbGxCdXR0b25cIlxuICAgICAgICAgW21vdmVUb1NlbGVjdGVkQnV0dG9uXT1cIm1vdmVUb1NlbGVjdGVkQnV0dG9uXCJcbiAgICAgICAgIFtzaG93U2VhcmNoTnVtYmVyXT1cInNob3dTZWFyY2hOdW1iZXJcIlxuXG4gICAgICAgICAoc2VsZWN0QWxsRWxlbWVudCk9XCJvblNlbGVjdEFsbEVsZW1lbnQoJGV2ZW50KVwiXG4gICAgICAgICAoc2VsZWN0U2VsZWN0ZWRFbGVtZW50KT1cIm9uU2VsZWN0U2VsZWN0ZWRFbGVtZW50KCRldmVudClcIlxuICAgICAgICAgKHNlYXJjaE92ZXJBbGwpPVwib25TZWFyY2hPdmVyQWxsKCRldmVudClcIlxuICAgICAgICAgKHNlYXJjaE92ZXJTZWxlY3RlZCk9XCJvblNlYXJjaE92ZXJTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgIChtb3ZlVG9TZWxlY3RlZCk9XCJvbk1vdmVUb1NlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgKG1vdmVUb0FsbCk9XCJvbk1vdmVUb0FsbCgkZXZlbnQpXCJcbiAgICAgICAgIChtb3ZlQWxsVG9TZWxlY3RlZCk9XCJvbk1vdmVBbGxUb1NlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgKG1vdmVBbGxUb0FsbCk9XCJvbk1vdmVBbGxUb0FsbCgkZXZlbnQpXCJcbiAgICAgICAgIChudW1JdGVtc1NlbGVjdGVkQWxsKT1cIm51bUl0ZW1zU2VsZWN0ZWRBbGwuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChudW1JdGVtc1NlbGVjdGVkU2VsZWN0ZWQpPVwibnVtSXRlbXNTZWxlY3RlZFNlbGVjdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAoc2VsZWN0RXh0cmFMYWJlbEFsbCk9XCJzZWxlY3RFeHRyYUxhYmVsQWxsLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAoc2VsZWN0RXh0cmFMYWJlbFNlbGVjdGVkKT1cInNlbGVjdEV4dHJhTGFiZWxBbGwuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChzZWxlY3RJdGVtTm9uRWRpdGFibGUpPVwic2VsZWN0SXRlbU5vbkVkaXRhYmxlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAoY2hhbmdlT3JkZXJBbGwpPVwiY2hhbmdlT3JkZXJBbGwuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChjaGFuZ2VPcmRlclNlbGVjdGVkKT1cImNoYW5nZU9yZGVyU2VsZWN0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChzY3JvbGxCb3R0b21BbGwpPVwic2Nyb2xsQm90dG9tQWxsLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+PC9zdC10d28tbGlzdC1zZWxlY3Rpb24tdmlldz5cbiAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbkBTdEVnZW8oKVxuZXhwb3J0IGNsYXNzIFN0VHdvTGlzdFNlbGVjdGlvbkNvbXBvbmVudCBleHRlbmRzIFN0VHdvTGlzdFNlbGVjdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoJ2VkaXRhYmxlJykgYWxsRWxlbWVudHM6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXTtcbiAgIEBJbnB1dCgpIGNvbmZpZzogU3RUd29MaXN0U2VsZWN0aW9uQ29uZmlnO1xuICAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGhhc0FsbExpc3RBbGw/OiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBoYXNBbGxMaXN0U2VsZWN0ZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBoYXNTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuICAgQElucHV0KCkgaXNMb2FkaW5nPzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaXRlbUFsbD86IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ7XG4gICBASW5wdXQoKSBtb2RlOiAnY29tcGFjdCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xuICAgQElucHV0KCkgbW92ZUFsbFRvU2VsZWN0ZWRCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuICAgQElucHV0KCkgbW92ZUFsbFRvQWxsQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIG1vdmVUb1NlbGVjdGVkQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIG1vdmVUb0FsbEJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gICBASW5wdXQoKSBvcmRlckFsbE9wdGlvbnM6IFN0RHJvcERvd25NZW51SXRlbVtdID0gW107XG4gICBASW5wdXQoKSBvcmRlclNlbGVjdGVkT3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgcWFUYWc6IHN0cmluZztcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgc2VsZWN0ZWRFbGVtZW50czogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdO1xuICAgQElucHV0KCkgc2hvd1NlYXJjaE51bWJlcjogbnVtYmVyO1xuICAgQElucHV0KCkgc29ydEJ5OiAnaWQnIHwgJ25hbWUnIHwgJ25vdE9yZGVyJyA9ICdpZCc7XG5cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgY2hhbmdlT3JkZXJBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgY2hhbmdlT3JkZXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBudW1JdGVtc1NlbGVjdGVkQWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIG51bUl0ZW1zU2VsZWN0ZWRTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBzY3JvbGxCb3R0b21BbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgc2VhcmNoT3ZlckFsbDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgIEBPdXRwdXQoKSBzZWFyY2hPdmVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0ZWRFbGVtZW50c0NoYW5nZTogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXT4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RFeHRyYUxhYmVsQWxsOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbU5vbkVkaXRhYmxlOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdPigpO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgc3VwZXIoY2QpO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaW5pdChcbiAgICAgICAgIHRoaXMuYWxsRWxlbWVudHMsXG4gICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHMsXG4gICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHNDaGFuZ2UsXG4gICAgICAgICB0aGlzLnNvcnRCeSxcbiAgICAgICAgIHRoaXMuaGFzQWxsTGlzdEFsbCxcbiAgICAgICAgIHRoaXMuaGFzQWxsTGlzdFNlbGVjdGVkLFxuICAgICAgICAgdGhpcy5pdGVtQWxsXG4gICAgICApO1xuICAgfVxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICB0aGlzLmNoZWNrQ2hhbmdlcyhjaGFuZ2VzLCAnYWxsRWxlbWVudHMnLCAnc2VsZWN0ZWRFbGVtZW50cycpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCgpO1xuICAgfVxuXG4gICBnZXQgYWxsTGlzdCgpOiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W10ge1xuICAgICAgcmV0dXJuIHRoaXMuY29weUFsbEVsZW1lbnQ7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RlZExpc3QoKTogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdIHtcbiAgICAgIHJldHVybiB0aGlzLmNvcHlTZWxlY3RlZEVsZW1lbnRzO1xuICAgfVxufVxuIl19