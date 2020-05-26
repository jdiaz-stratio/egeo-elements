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
let StTwoListSelectionViewComponent = class StTwoListSelectionViewComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
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
    ngOnChanges(changes) {
        if (changes) {
            this.refreshButtons();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.refreshButtons();
    }
    /**
     * @return {?}
     */
    get allTitle() {
        return this.config && this.config.allElementsListTitle || '';
    }
    /**
     * @return {?}
     */
    get allSubtitle() {
        return this.config && this.config.allElementsListSubtitle || '';
    }
    /**
     * @return {?}
     */
    get allPlaceholder() {
        return this.config && this.config.allElementsSearchPlaceholder || '';
    }
    /**
     * @return {?}
     */
    get fetchingDataText() {
        return this.config && this.config.fetchingDataText || '';
    }
    /**
     * @return {?}
     */
    get menuOptionList() {
        return this.config && this.config.menuOptionList;
    }
    /**
     * @return {?}
     */
    get orderPlaceholder() {
        return this.config && this.config.orderPlaceholder || '';
    }
    /**
     * @return {?}
     */
    get selectedTitle() {
        return this.config && this.config.selectedElementsListTitle || '';
    }
    /**
     * @return {?}
     */
    get selectedSubtitle() {
        return this.config && this.config.selectedElementsListSubtitle || '';
    }
    /**
     * @return {?}
     */
    get allQaTag() {
        return this.qaTag + '-all-elements';
    }
    /**
     * @return {?}
     */
    get selectedPlaceholder() {
        return this.config && this.config.selectedElementsSearchPlaceholder || '';
    }
    /**
     * @return {?}
     */
    get selectedQaTag() {
        return this.qaTag + '-selected-elements';
    }
    /**
     * @return {?}
     */
    checkMoveToSelected() {
        /** @type {?} */
        let existDisabledElements = (this.allElements) ? this.allElements.filter((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => elem.disabled)) : [];
        // tslint:disable-next-line:max-line-length
        this.checkMoveToSelectedValue = (this.allElements) ? (this.allElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.allElements.length) : false;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    checkMoveToAll() {
        /** @type {?} */
        let existDisabledElements = (this.selectedElements) ? this.selectedElements.filter((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => elem.disabled)) : [];
        // tslint:disable-next-line:max-line-length
        this.checkMoveToAllValue = (this.selectedElements) ? (this.selectedElements.length === 0) || (existDisabledElements && existDisabledElements.length === this.selectedElements.length) : false;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    refreshButtons() {
        this.checkMoveToSelected();
        this.checkMoveToAll();
    }
};
StTwoListSelectionViewComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StTwoListSelectionViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-two-list-selection-view',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-two-list sth-two-list\">\n   <!--ALL ELEMENTS-->\n   <list-selection *ngIf=\"editable\" class=\"list sth-two-list__list sth-two-list__all-list\" [list]=\"allElements\" [itemAll]=\"itemAll\" [title]=\"allTitle\" [subtitle]=\"allSubtitle\" [searchPlaceholder]=\"allPlaceholder\" [orderPlaceholder]=\"orderPlaceholder\"\n       [qaTag]=\"allQaTag\" [editable]=\"editable\" [showSearchNumber]=\"showSearchNumber\" (search)=\"searchOverAll.emit($event)\" (selectItem)=\"selectAllElement.emit($event)\" [hasAllList]=\"hasAllListAll\" [important]=\"false\" [hasSearch]=\"hasSearch\"\n       (selectExtraLabel)=\"selectExtraLabelAll.emit($event)\" [orderOptions]=\"orderAllOptions\" (changeOrder)=\"changeOrderAll.emit($event)\" [mode]=\"mode\" (scrollBottom)=\"scrollBottomAll.emit($event)\" [isLoading]=\"isLoading\" [fetchingDataText]=\"fetchingDataText\">\n   </list-selection>\n\n   <!--SELECTORS-->\n   <div class=\"pick-buttons\" *ngIf=\"editable\">\n      <button *ngIf=\"moveAllToSelectedButton\" class=\"button button-toolbar\" type=\"button\" title=\"Move all to selected\" (click)=\"moveAllToSelected.emit($event)\" [attr.id]=\"qaTag + '-left-all-button'\"><i class=\"icon-fast-forward\"></i></button>\n      <button class=\"button button-toolbar\" type=\"button\" title=\"Move to selected\" (click)=\"moveToSelected.emit($event)\" [attr.id]=\"qaTag + '-left-button'\" [ngClass]=\"{'empty': checkMoveToSelectedValue }\" [disabled]=\"!moveToAllButton\"><i class=\"icon-arrow2_right\" ></i></button>\n      <button class=\"button button-toolbar\" type=\"button\" title=\"Move to all\" (click)=\"moveToAll.emit($event)\" [attr.id]=\"qaTag + '-right-button'\" [ngClass]=\"{'empty': checkMoveToAllValue }\" [disabled]=\"!moveToSelectedButton\"><i class=\"icon-arrow2_left\"></i></button>\n      <button *ngIf=\"moveAllToAllButton\" class=\"button button-toolbar\" type=\"button\" title=\"Move all to all\" (click)=\"moveAllToAll.emit($event)\" [attr.id]=\"qaTag + '-right-all-button'\"><i class=\"icon-rewind\"></i></button>\n   </div>\n\n   <!--SELECTED ELEMENTS-->\n   <list-selection class=\"list sth-two-list__list sth-two-list__selected-list\" [ngClass]=\"{'not-editable': !editable}\" [list]=\"selectedElements\" [itemAll]=\"itemAll\" [title]=\"selectedTitle\" [subtitle]=\"selectedSubtitle\"\n       [searchPlaceholder]=\"selectedPlaceholder\" [orderPlaceholder]=\"orderPlaceholder\" [showSearchNumber]=\"showSearchNumber\" [qaTag]=\"selectedQaTag\" [editable]=\"editable\" [menuOptionList]=\"menuOptionList\" (search)=\"searchOverSelected.emit($event)\" (selectItem)=\"selectSelectedElement.emit($event)\"\n       [important]=\"true\" [hasSearch]=\"hasSearch\" [hasAllList]=\"hasAllListSelected\" (selectExtraLabel)=\"selectExtraLabelSelected.emit($event)\" (selectItemNonEditable)=\"selectItemNonEditable.emit($event)\" [orderOptions]=\"orderSelectedOptions\" (changeOrder)=\"changeOrderSelected.emit($event)\" [mode]=\"mode\">\n   </list-selection>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{display:flex;flex:1;flex-grow:1;max-height:100%;min-height:100%}.st-two-list{width:100%;display:flex;justify-content:space-between;max-height:100%}.list{flex-grow:1}.not-editable{width:100%}.pick-buttons{display:flex;flex-direction:column;align-items:center;width:73px;min-width:135px;max-width:135px;margin:auto}.pick-buttons button{margin-bottom:10px}.sth-two-list__all-list,.sth-two-list__selected-list{border-radius:4px;border:1px solid #dbdbdb}button.button-toolbar{width:40px;height:40px;border-radius:4px;background-color:#fff;border:1px solid #ececec;color:#707070}button.button-toolbar.empty{background-color:#ececec;color:#cfcfcf}"]
            }] }
];
/** @nocollapse */
StTwoListSelectionViewComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10d28tbGlzdC1zZWxlY3Rpb24vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJKLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7SUFVekQsK0JBQStCLFNBQS9CLCtCQUErQjs7OztJQXVDekMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFqQ2pDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBYSxLQUFLLENBQUM7UUFDaEMsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFhLEtBQUssQ0FBQztRQUU1QixTQUFJLEdBQXlCLFFBQVEsQ0FBQztRQUN0Qyw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QyxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyx5QkFBb0IsR0FBeUIsRUFBRSxDQUFDO1FBQ2hELG9CQUFlLEdBQXlCLEVBQUUsQ0FBQztRQUcxQyxtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVELHdCQUFtQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pFLGlCQUFZLEdBQXdCLElBQUksWUFB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REFBMEU7O0lBQzFFLDBEQUF1RTs7SUFDdkUsd0RBQTJFOztJQUMzRSw2REFBZ0Y7O0lBQ2hGLDJEQUFvSDs7SUFDcEgsOERBQW1JOztJQUNuSSxtRUFBd0k7O0lBQ3hJLGdFQUF5SDs7SUFDekgsZ0VBQXlIOztJQUV6SCxtRUFBeUM7O0lBQ3pDLDhEQUFvQzs7Ozs7SUFFeEIsOENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUl0ZW0gfSBmcm9tICcuLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IFN0VHdvTGlzdFNlbGVjdGlvbkNvbmZpZywgU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudCwgU3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbiB9IGZyb20gJy4vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXR3by1saXN0LXNlbGVjdGlvbi12aWV3JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC10d28tbGlzdC1zZWxlY3Rpb24udmlldy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC10d28tbGlzdC1zZWxlY3Rpb24udmlldy5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5AU3RFZ2VvKClcbmV4cG9ydCBjbGFzcyBTdFR3b0xpc3RTZWxlY3Rpb25WaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICBASW5wdXQoKSBAU3RSZXF1aXJlZCgpIHFhVGFnOiBzdHJpbmc7XG4gICBASW5wdXQoKSBAU3RSZXF1aXJlZCgpIHNlbGVjdGVkRWxlbWVudHM6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXTtcbiAgIEBJbnB1dCgpIGFsbEVsZW1lbnRzOiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W107XG4gICBASW5wdXQoKSBjb25maWc6IFN0VHdvTGlzdFNlbGVjdGlvbkNvbmZpZztcbiAgIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBoYXNBbGxMaXN0QWxsPzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaGFzQWxsTGlzdFNlbGVjdGVkPzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaGFzU2VhcmNoOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIGlzTG9hZGluZz86IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGl0ZW1BbGw/OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50O1xuICAgQElucHV0KCkgbW9kZTogJ2NvbXBhY3QnIHwgJ25vcm1hbCcgPSAnbm9ybWFsJztcbiAgIEBJbnB1dCgpIG1vdmVBbGxUb1NlbGVjdGVkQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBtb3ZlQWxsVG9BbGxCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIG1vdmVUb1NlbGVjdGVkQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBtb3ZlVG9BbGxCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIG9yZGVyU2VsZWN0ZWRPcHRpb25zOiBTdERyb3BEb3duTWVudUl0ZW1bXSA9IFtdO1xuICAgQElucHV0KCkgb3JkZXJBbGxPcHRpb25zOiBTdERyb3BEb3duTWVudUl0ZW1bXSA9IFtdO1xuICAgQElucHV0KCkgc2hvd1NlYXJjaE51bWJlcj86IG51bWJlcjtcblxuICAgQE91dHB1dCgpIGNoYW5nZU9yZGVyQWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIGNoYW5nZU9yZGVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgbW92ZUFsbFRvQWxsOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgIEBPdXRwdXQoKSBtb3ZlQWxsVG9TZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICBAT3V0cHV0KCkgbW92ZVRvQWxsOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcbiAgIEBPdXRwdXQoKSBtb3ZlVG9TZWxlY3RlZDogRXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RXZlbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2Nyb2xsQm90dG9tQWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIHNlYXJjaE92ZXJBbGw6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICBAT3V0cHV0KCkgc2VhcmNoT3ZlclNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgQE91dHB1dCgpIHNlbGVjdEFsbEVsZW1lbnQ6IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RFeHRyYUxhYmVsQWxsOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbU5vbkVkaXRhYmxlOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0U2VsZWN0ZWRFbGVtZW50OiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ+KCk7XG5cbiAgIHB1YmxpYyBjaGVja01vdmVUb1NlbGVjdGVkVmFsdWU6IGJvb2xlYW47XG4gICBwdWJsaWMgY2hlY2tNb3ZlVG9BbGxWYWx1ZTogYm9vbGVhbjtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgdGhpcy5yZWZyZXNoQnV0dG9ucygpO1xuICAgICAgfVxuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMucmVmcmVzaEJ1dHRvbnMoKTtcbiAgIH1cblxuICAgZ2V0IGFsbFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuYWxsRWxlbWVudHNMaXN0VGl0bGUgfHwgJyc7XG4gICB9XG5cbiAgIGdldCBhbGxTdWJ0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmFsbEVsZW1lbnRzTGlzdFN1YnRpdGxlIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgYWxsUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5hbGxFbGVtZW50c1NlYXJjaFBsYWNlaG9sZGVyIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgZmV0Y2hpbmdEYXRhVGV4dCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmZldGNoaW5nRGF0YVRleHQgfHwgJyc7XG4gICB9XG5cbiAgIGdldCBtZW51T3B0aW9uTGlzdCgpOiBTdERyb3BEb3duTWVudUl0ZW1bXSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcubWVudU9wdGlvbkxpc3Q7XG4gICB9XG5cbiAgIGdldCBvcmRlclBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub3JkZXJQbGFjZWhvbGRlciB8fCAnJztcbiAgIH1cblxuICAgZ2V0IHNlbGVjdGVkVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5zZWxlY3RlZEVsZW1lbnRzTGlzdFRpdGxlIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0ZWRTdWJ0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnNlbGVjdGVkRWxlbWVudHNMaXN0U3VidGl0bGUgfHwgJyc7XG4gICB9XG5cbiAgIGdldCBhbGxRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgKyAnLWFsbC1lbGVtZW50cyc7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RlZFBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuc2VsZWN0ZWRFbGVtZW50c1NlYXJjaFBsYWNlaG9sZGVyIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0ZWRRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgKyAnLXNlbGVjdGVkLWVsZW1lbnRzJztcbiAgIH1cblxuICAgY2hlY2tNb3ZlVG9TZWxlY3RlZCgpOiB2b2lkIHtcbiAgICAgIGxldCBleGlzdERpc2FibGVkRWxlbWVudHMgPSAodGhpcy5hbGxFbGVtZW50cykgPyB0aGlzLmFsbEVsZW1lbnRzLmZpbHRlcigoZWxlbSkgPT4gZWxlbS5kaXNhYmxlZCkgOiBbXTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuY2hlY2tNb3ZlVG9TZWxlY3RlZFZhbHVlID0gKHRoaXMuYWxsRWxlbWVudHMpID8gKHRoaXMuYWxsRWxlbWVudHMubGVuZ3RoID09PSAwKSB8fCAoZXhpc3REaXNhYmxlZEVsZW1lbnRzICYmIGV4aXN0RGlzYWJsZWRFbGVtZW50cy5sZW5ndGggPT09IHRoaXMuYWxsRWxlbWVudHMubGVuZ3RoKSA6IGZhbHNlO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIGNoZWNrTW92ZVRvQWxsKCk6IHZvaWQge1xuICAgICAgbGV0IGV4aXN0RGlzYWJsZWRFbGVtZW50cyA9ICh0aGlzLnNlbGVjdGVkRWxlbWVudHMpID8gdGhpcy5zZWxlY3RlZEVsZW1lbnRzLmZpbHRlcigoZWxlbSkgPT4gZWxlbS5kaXNhYmxlZCkgOiBbXTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgIHRoaXMuY2hlY2tNb3ZlVG9BbGxWYWx1ZSA9ICh0aGlzLnNlbGVjdGVkRWxlbWVudHMpID8gKHRoaXMuc2VsZWN0ZWRFbGVtZW50cy5sZW5ndGggPT09IDApIHx8IChleGlzdERpc2FibGVkRWxlbWVudHMgJiYgZXhpc3REaXNhYmxlZEVsZW1lbnRzLmxlbmd0aCA9PT0gdGhpcy5zZWxlY3RlZEVsZW1lbnRzLmxlbmd0aCkgOiBmYWxzZTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICByZWZyZXNoQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hlY2tNb3ZlVG9TZWxlY3RlZCgpO1xuICAgICAgdGhpcy5jaGVja01vdmVUb0FsbCgpO1xuICAgfVxufVxuIl19