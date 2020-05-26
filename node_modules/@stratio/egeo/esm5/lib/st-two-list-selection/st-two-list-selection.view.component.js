/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.view.component.ts
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
import { ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StEgeo, StRequired } from '../decorators/require-decorators';
var StTwoListSelectionViewComponent = /** @class */ (function () {
    function StTwoListSelectionViewComponent(_cd) {
        this._cd = _cd;
        this.editable = false;
        this.hasAllListAll = false;
        this.hasAllListSelected = false;
        this.hasSearch = true;
        this.isLoading = false;
        this.mode = 'normal';
        this.moveAllToSelectedButton = false;
        this.moveAllToAllButton = false;
        this.moveToSelectedButton = false;
        this.moveToAllButton = false;
        this.orderSelectedOptions = [];
        this.orderAllOptions = [];
        this.changeOrderAll = new EventEmitter();
        this.changeOrderSelected = new EventEmitter();
        this.moveAllToAll = new EventEmitter();
        this.moveAllToSelected = new EventEmitter();
        this.moveToAll = new EventEmitter();
        this.moveToSelected = new EventEmitter();
        this.scrollBottomAll = new EventEmitter();
        this.searchOverAll = new EventEmitter();
        this.searchOverSelected = new EventEmitter();
        this.selectAllElement = new EventEmitter();
        this.selectExtraLabelAll = new EventEmitter();
        this.selectExtraLabelSelected = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectSelectedElement = new EventEmitter();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes) {
            this.refreshButtons();
        }
    };
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refreshButtons();
    };
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.allElementsListTitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allSubtitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.allElementsListSubtitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.allElementsSearchPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "fetchingDataText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.fetchingDataText || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "menuOptionList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.menuOptionList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "orderPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.orderPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.selectedElementsListTitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedSubtitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.selectedElementsListSubtitle || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "allQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-all-elements';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.selectedElementsSearchPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTwoListSelectionViewComponent.prototype, "selectedQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag + '-selected-elements';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.checkMoveToSelected = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var existDisabledElements = (this.allElements) ? this.allElements.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.disabled; })) : [];
        // tslint:disable-next-line:max-line-length
        this.checkMoveToSelectedValue = (this.allElements) ? (this.allElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.allElements.length) : false;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.checkMoveToAll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var existDisabledElements = (this.selectedElements) ? this.selectedElements.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.disabled; })) : [];
        // tslint:disable-next-line:max-line-length
        this.checkMoveToAllValue = (this.selectedElements) ? (this.selectedElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.selectedElements.length) : false;
        this._cd.markForCheck();
    };
    /**
     * @return {?}
     */
    StTwoListSelectionViewComponent.prototype.refreshButtons = /**
     * @return {?}
     */
    function () {
        this.checkMoveToSelected();
        this.checkMoveToAll();
    };
    StTwoListSelectionViewComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-two-list-selection-view',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-two-list sth-two-list\">\n   <!--ALL ELEMENTS-->\n   <list-selection *ngIf=\"editable\" class=\"list sth-two-list__list sth-two-list__all-list\" [list]=\"allElements\" [itemAll]=\"itemAll\" [title]=\"allTitle\" [subtitle]=\"allSubtitle\" [searchPlaceholder]=\"allPlaceholder\" [orderPlaceholder]=\"orderPlaceholder\"\n       [qaTag]=\"allQaTag\" [editable]=\"editable\" [showSearchNumber]=\"showSearchNumber\" (search)=\"searchOverAll.emit($event)\" (selectItem)=\"selectAllElement.emit($event)\" [hasAllList]=\"hasAllListAll\" [important]=\"false\" [hasSearch]=\"hasSearch\"\n       (selectExtraLabel)=\"selectExtraLabelAll.emit($event)\" [orderOptions]=\"orderAllOptions\" (changeOrder)=\"changeOrderAll.emit($event)\" [mode]=\"mode\" (scrollBottom)=\"scrollBottomAll.emit($event)\" [isLoading]=\"isLoading\" [fetchingDataText]=\"fetchingDataText\">\n   </list-selection>\n\n   <!--SELECTORS-->\n   <div class=\"pick-buttons\" *ngIf=\"editable\">\n      <button *ngIf=\"moveAllToSelectedButton\" class=\"button button-toolbar\" type=\"button\" title=\"Move all to selected\" (click)=\"moveAllToSelected.emit($event)\" [attr.id]=\"qaTag + '-left-all-button'\"><i class=\"icon-fast-forward\"></i></button>\n      <button class=\"button button-toolbar\" type=\"button\" title=\"Move to selected\" (click)=\"moveToSelected.emit($event)\" [attr.id]=\"qaTag + '-left-button'\" [ngClass]=\"{'empty': checkMoveToSelectedValue }\" [disabled]=\"!moveToAllButton\"><i class=\"icon-arrow2_right\" ></i></button>\n      <button class=\"button button-toolbar\" type=\"button\" title=\"Move to all\" (click)=\"moveToAll.emit($event)\" [attr.id]=\"qaTag + '-right-button'\" [ngClass]=\"{'empty': checkMoveToAllValue }\" [disabled]=\"!moveToSelectedButton\"><i class=\"icon-arrow2_left\"></i></button>\n      <button *ngIf=\"moveAllToAllButton\" class=\"button button-toolbar\" type=\"button\" title=\"Move all to all\" (click)=\"moveAllToAll.emit($event)\" [attr.id]=\"qaTag + '-right-all-button'\"><i class=\"icon-rewind\"></i></button>\n   </div>\n\n   <!--SELECTED ELEMENTS-->\n   <list-selection class=\"list sth-two-list__list sth-two-list__selected-list\" [ngClass]=\"{'not-editable': !editable}\" [list]=\"selectedElements\" [itemAll]=\"itemAll\" [title]=\"selectedTitle\" [subtitle]=\"selectedSubtitle\"\n       [searchPlaceholder]=\"selectedPlaceholder\" [orderPlaceholder]=\"orderPlaceholder\" [showSearchNumber]=\"showSearchNumber\" [qaTag]=\"selectedQaTag\" [editable]=\"editable\" [menuOptionList]=\"menuOptionList\" (search)=\"searchOverSelected.emit($event)\" (selectItem)=\"selectSelectedElement.emit($event)\"\n       [important]=\"true\" [hasSearch]=\"hasSearch\" [hasAllList]=\"hasAllListSelected\" (selectExtraLabel)=\"selectExtraLabelSelected.emit($event)\" (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\" [orderOptions]=\"orderSelectedOptions\" (changeOrder)=\"changeOrderSelected.emit($event)\" [mode]=\"mode\">\n   </list-selection>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;flex:1;flex-grow:1;max-height:100%;min-height:100%}.st-two-list{width:100%;display:flex;justify-content:space-between;max-height:100%}.list{flex-grow:1}.not-editable{width:100%}.pick-buttons{display:flex;flex-direction:column;align-items:center;width:73px;min-width:135px;max-width:135px;margin:auto}.pick-buttons button{margin-bottom:10px}.sth-two-list__all-list,.sth-two-list__selected-list{border-radius:4px;border:1px solid #dbdbdb}button.button-toolbar{width:40px;height:40px;border-radius:4px;background-color:#fff;border:1px solid #ececec;color:#707070}button.button-toolbar.empty{background-color:#ececec;color:#cfcfcf}"]
                }] }
    ];
    /** @nocollapse */
    StTwoListSelectionViewComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTwoListSelectionViewComponent.propDecorators = {
        qaTag: [{ type: Input }],
        selectedElements: [{ type: Input }],
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
        orderSelectedOptions: [{ type: Input }],
        orderAllOptions: [{ type: Input }],
        showSearchNumber: [{ type: Input }],
        changeOrderAll: [{ type: Output }],
        changeOrderSelected: [{ type: Output }],
        moveAllToAll: [{ type: Output }],
        moveAllToSelected: [{ type: Output }],
        moveToAll: [{ type: Output }],
        moveToSelected: [{ type: Output }],
        scrollBottomAll: [{ type: Output }],
        searchOverAll: [{ type: Output }],
        searchOverSelected: [{ type: Output }],
        selectAllElement: [{ type: Output }],
        selectExtraLabelAll: [{ type: Output }],
        selectExtraLabelSelected: [{ type: Output }],
        selectItemNonEditable: [{ type: Output }],
        selectSelectedElement: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", String)
    ], StTwoListSelectionViewComponent.prototype, "qaTag", void 0);
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], StTwoListSelectionViewComponent.prototype, "selectedElements", void 0);
    StTwoListSelectionViewComponent = tslib_1.__decorate([
        StEgeo(),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef])
    ], StTwoListSelectionViewComponent);
    return StTwoListSelectionViewComponent;
}());
export { StTwoListSelectionViewComponent };
if (false) {
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.qaTag;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectedElements;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.allElements;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.config;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.editable;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.hasAllListAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.hasAllListSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.hasSearch;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.isLoading;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.itemAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.mode;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToSelectedButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToAllButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToSelectedButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToAllButton;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.orderSelectedOptions;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.orderAllOptions;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.showSearchNumber;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.changeOrderAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.changeOrderSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveAllToSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.moveToSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.scrollBottomAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.searchOverAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.searchOverSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectAllElement;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectExtraLabelAll;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectExtraLabelSelected;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.selectSelectedElement;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.checkMoveToSelectedValue;
    /** @type {?} */
    StTwoListSelectionViewComponent.prototype.checkMoveToAllValue;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelectionViewComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10d28tbGlzdC1zZWxlY3Rpb24vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJKLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBaURuRSx5Q0FBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQ2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBYSxLQUFLLENBQUM7UUFDaEMsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUU1QixTQUFJLEdBQXlCLFFBQVEsQ0FBQztRQUN0Qyw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyx5QkFBb0IsR0FBeUIsRUFBRSxDQUFDO1FBQ2hELG9CQUFlLEdBQXlCLEVBQUUsQ0FBQztRQUcxQyxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFLGlCQUFZLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDOUQsc0JBQWlCLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDbkUsY0FBUyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBQzNELG1CQUFjLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDaEUsb0JBQWUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3RCxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2pFLHVCQUFrQixHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RFLHFCQUFnQixHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUMxRyx3QkFBbUIsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFDekgsNkJBQXdCLEdBQWtELElBQUksWUFBWSxFQUFtQyxDQUFDO1FBQzlILDBCQUFxQixHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUMvRywwQkFBcUIsR0FBNEMsSUFBSSxZQUFZLEVBQTZCLENBQUM7SUFLNUUsQ0FBQzs7Ozs7SUFFOUMscURBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksT0FBTyxFQUFFO1lBQ1YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0osQ0FBQzs7OztJQUVELGtEQUFROzs7SUFBUjtRQUNHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQUkscURBQVE7Ozs7UUFBWjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixJQUFJLEVBQUUsQ0FBQztRQUNoRSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHdEQUFXOzs7O1FBQWY7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsSUFBSSxFQUFFLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwyREFBYzs7OztRQUFsQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLDRCQUE0QixJQUFJLEVBQUUsQ0FBQztRQUN4RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZEQUFnQjs7OztRQUFwQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztRQUM1RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJEQUFjOzs7O1FBQWxCO1lBQ0csT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkRBQWdCOzs7O1FBQXBCO1lBQ0csT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBRUQsc0JBQUksMERBQWE7Ozs7UUFBakI7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsSUFBSSxFQUFFLENBQUM7UUFDckUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2REFBZ0I7Ozs7UUFBcEI7WUFDRyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsSUFBSSxFQUFFLENBQUM7UUFDeEUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxREFBUTs7OztRQUFaO1lBQ0csT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdFQUFtQjs7OztRQUF2QjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxJQUFJLEVBQUUsQ0FBQztRQUM3RSxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBEQUFhOzs7O1FBQWpCO1lBQ0csT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDO1FBQzVDLENBQUM7OztPQUFBOzs7O0lBRUQsNkRBQW1COzs7SUFBbkI7O1lBQ08scUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztRQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUN0RywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLHdCQUF3QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLElBQUkscUJBQXFCLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwTCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3REFBYzs7O0lBQWQ7O1lBQ08scUJBQXFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU07Ozs7UUFBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDaEgsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUwsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsd0RBQWM7OztJQUFkO1FBQ0csSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O2dCQXpFd0IsaUJBQWlCOzs7Z0JBOUM1QyxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMseTJHQUEwRDtvQkFFMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNqRDs7OztnQkFaUSxpQkFBaUI7Ozt3QkFnQnRCLEtBQUs7bUNBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO3FDQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQ0FDTCxLQUFLO3FDQUNMLEtBQUs7dUNBQ0wsS0FBSztrQ0FDTCxLQUFLO3VDQUNMLEtBQUs7a0NBQ0wsS0FBSzttQ0FDTCxLQUFLO2lDQUVMLE1BQU07c0NBQ04sTUFBTTsrQkFDTixNQUFNO29DQUNOLE1BQU07NEJBQ04sTUFBTTtpQ0FDTixNQUFNO2tDQUNOLE1BQU07Z0NBQ04sTUFBTTtxQ0FDTixNQUFNO21DQUNOLE1BQU07c0NBQ04sTUFBTTsyQ0FDTixNQUFNO3dDQUNOLE1BQU07d0NBQ04sTUFBTTs7SUFoQ2dCO1FBQWIsVUFBVSxFQUFFOztrRUFBZTtJQUNkO1FBQWIsVUFBVSxFQUFFOzs2RUFBK0M7SUFIM0QsK0JBQStCO1FBRDNDLE1BQU0sRUFBRTtpREF3Q21CLGlCQUFpQjtPQXZDaEMsK0JBQStCLENBaUgzQztJQUFELHNDQUFDO0NBQUEsSUFBQTtTQWpIWSwrQkFBK0I7OztJQUV6QyxnREFBcUM7O0lBQ3JDLDJEQUFxRTs7SUFDckUsc0RBQWtEOztJQUNsRCxpREFBMEM7O0lBQzFDLG1EQUFtQzs7SUFDbkMsd0RBQXlDOztJQUN6Qyw2REFBOEM7O0lBQzlDLG9EQUFtQzs7SUFDbkMsb0RBQXFDOztJQUNyQyxrREFBNkM7O0lBQzdDLCtDQUErQzs7SUFDL0Msa0VBQWtEOztJQUNsRCw2REFBNkM7O0lBQzdDLCtEQUErQzs7SUFDL0MsMERBQTBDOztJQUMxQywrREFBeUQ7O0lBQ3pELDBEQUFvRDs7SUFDcEQsMkRBQW1DOztJQUVuQyx5REFBc0U7O0lBQ3RFLDhEQUEyRTs7SUFDM0UsdURBQXdFOztJQUN4RSw0REFBNkU7O0lBQzdFLG9EQUFxRTs7SUFDckUseURBQTBFOztJQUMxRSwwREFBdUU7O0lBQ3ZFLHdEQUEyRTs7SUFDM0UsNkRBQWdGOztJQUNoRiwyREFBb0g7O0lBQ3BILDhEQUFtSTs7SUFDbkksbUVBQXdJOztJQUN4SSxnRUFBeUg7O0lBQ3pILGdFQUF5SDs7SUFFekgsbUVBQXlDOztJQUN6Qyw4REFBb0M7Ozs7O0lBRXhCLDhDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVJdGVtIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdFR3b0xpc3RTZWxlY3Rpb25Db25maWcsIFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQsIFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24gfSBmcm9tICcuL3N0LXR3by1saXN0LXNlbGVjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10d28tbGlzdC1zZWxlY3Rpb24tdmlldycsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnZpZXcuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuQFN0RWdlbygpXG5leHBvcnQgY2xhc3MgU3RUd29MaXN0U2VsZWN0aW9uVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBxYVRhZzogc3RyaW5nO1xuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBzZWxlY3RlZEVsZW1lbnRzOiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W107XG4gICBASW5wdXQoKSBhbGxFbGVtZW50czogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdO1xuICAgQElucHV0KCkgY29uZmlnOiBTdFR3b0xpc3RTZWxlY3Rpb25Db25maWc7XG4gICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaGFzQWxsTGlzdEFsbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGhhc0FsbExpc3RTZWxlY3RlZD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGhhc1NlYXJjaDogYm9vbGVhbiA9IHRydWU7XG4gICBASW5wdXQoKSBpc0xvYWRpbmc/OiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBpdGVtQWxsPzogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudDtcbiAgIEBJbnB1dCgpIG1vZGU6ICdjb21wYWN0JyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XG4gICBASW5wdXQoKSBtb3ZlQWxsVG9TZWxlY3RlZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgbW92ZUFsbFRvQWxsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBtb3ZlVG9TZWxlY3RlZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgbW92ZVRvQWxsQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBvcmRlclNlbGVjdGVkT3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcbiAgIEBJbnB1dCgpIG9yZGVyQWxsT3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcbiAgIEBJbnB1dCgpIHNob3dTZWFyY2hOdW1iZXI/OiBudW1iZXI7XG5cbiAgIEBPdXRwdXQoKSBjaGFuZ2VPcmRlckFsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBjaGFuZ2VPcmRlclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIG1vdmVBbGxUb0FsbDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICBAT3V0cHV0KCkgbW92ZUFsbFRvU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgQE91dHB1dCgpIG1vdmVUb0FsbDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICBAT3V0cHV0KCkgbW92ZVRvU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuICAgQE91dHB1dCgpIHNjcm9sbEJvdHRvbUFsbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBzZWFyY2hPdmVyQWxsOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgQE91dHB1dCgpIHNlYXJjaE92ZXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RBbGxFbGVtZW50OiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbEFsbDogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uPigpO1xuICAgQE91dHB1dCgpIHNlbGVjdEV4dHJhTGFiZWxTZWxlY3RlZDogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uPigpO1xuICAgQE91dHB1dCgpIHNlbGVjdEl0ZW1Ob25FZGl0YWJsZTogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PigpO1xuICAgQE91dHB1dCgpIHNlbGVjdFNlbGVjdGVkRWxlbWVudDogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PigpO1xuXG4gICBwdWJsaWMgY2hlY2tNb3ZlVG9TZWxlY3RlZFZhbHVlOiBib29sZWFuO1xuICAgcHVibGljIGNoZWNrTW92ZVRvQWxsVmFsdWU6IGJvb2xlYW47XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbnMoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnJlZnJlc2hCdXR0b25zKCk7XG4gICB9XG5cbiAgIGdldCBhbGxUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmFsbEVsZW1lbnRzTGlzdFRpdGxlIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgYWxsU3VidGl0bGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5hbGxFbGVtZW50c0xpc3RTdWJ0aXRsZSB8fCAnJztcbiAgIH1cblxuICAgZ2V0IGFsbFBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuYWxsRWxlbWVudHNTZWFyY2hQbGFjZWhvbGRlciB8fCAnJztcbiAgIH1cblxuICAgZ2V0IGZldGNoaW5nRGF0YVRleHQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5mZXRjaGluZ0RhdGFUZXh0IHx8ICcnO1xuICAgfVxuXG4gICBnZXQgbWVudU9wdGlvbkxpc3QoKTogU3REcm9wRG93bk1lbnVJdGVtW10ge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm1lbnVPcHRpb25MaXN0O1xuICAgfVxuXG4gICBnZXQgb3JkZXJQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9yZGVyUGxhY2Vob2xkZXIgfHwgJyc7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RlZFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuc2VsZWN0ZWRFbGVtZW50c0xpc3RUaXRsZSB8fCAnJztcbiAgIH1cblxuICAgZ2V0IHNlbGVjdGVkU3VidGl0bGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5zZWxlY3RlZEVsZW1lbnRzTGlzdFN1YnRpdGxlIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgYWxsUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICsgJy1hbGwtZWxlbWVudHMnO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0ZWRQbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnNlbGVjdGVkRWxlbWVudHNTZWFyY2hQbGFjZWhvbGRlciB8fCAnJztcbiAgIH1cblxuICAgZ2V0IHNlbGVjdGVkUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICsgJy1zZWxlY3RlZC1lbGVtZW50cyc7XG4gICB9XG5cbiAgIGNoZWNrTW92ZVRvU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgICBsZXQgZXhpc3REaXNhYmxlZEVsZW1lbnRzID0gKHRoaXMuYWxsRWxlbWVudHMpID8gdGhpcy5hbGxFbGVtZW50cy5maWx0ZXIoKGVsZW0pID0+IGVsZW0uZGlzYWJsZWQpIDogW107XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLmNoZWNrTW92ZVRvU2VsZWN0ZWRWYWx1ZSA9ICh0aGlzLmFsbEVsZW1lbnRzKSA/ICh0aGlzLmFsbEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgfHwgKGV4aXN0RGlzYWJsZWRFbGVtZW50cyAmJiBleGlzdERpc2FibGVkRWxlbWVudHMubGVuZ3RoID09PSB0aGlzLmFsbEVsZW1lbnRzLmxlbmd0aCkgOiBmYWxzZTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBjaGVja01vdmVUb0FsbCgpOiB2b2lkIHtcbiAgICAgIGxldCBleGlzdERpc2FibGVkRWxlbWVudHMgPSAodGhpcy5zZWxlY3RlZEVsZW1lbnRzKSA/IHRoaXMuc2VsZWN0ZWRFbGVtZW50cy5maWx0ZXIoKGVsZW0pID0+IGVsZW0uZGlzYWJsZWQpIDogW107XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLmNoZWNrTW92ZVRvQWxsVmFsdWUgPSAodGhpcy5zZWxlY3RlZEVsZW1lbnRzKSA/ICh0aGlzLnNlbGVjdGVkRWxlbWVudHMubGVuZ3RoID09PSAwKSB8fCAoZXhpc3REaXNhYmxlZEVsZW1lbnRzICYmIGV4aXN0RGlzYWJsZWRFbGVtZW50cy5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRFbGVtZW50cy5sZW5ndGgpIDogZmFsc2U7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcmVmcmVzaEJ1dHRvbnMoKTogdm9pZCB7XG4gICAgICB0aGlzLmNoZWNrTW92ZVRvU2VsZWN0ZWQoKTtcbiAgICAgIHRoaXMuY2hlY2tNb3ZlVG9BbGwoKTtcbiAgIH1cbn1cbiJdfQ==