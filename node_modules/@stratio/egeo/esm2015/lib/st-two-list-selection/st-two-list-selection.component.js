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
let StTwoListSelectionComponent = class StTwoListSelectionComponent extends StTwoListSelection {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        super(cd);
        this.cd = cd;
        this.editable = false;
        this.hasAllListAll = false;
        this.hasAllListSelected = false;
        this.hasSearch = true;
        this.isLoading = false;
        this.mode = 'normal';
        this.moveAllToSelectedButton = true;
        this.moveAllToAllButton = true;
        this.moveToSelectedButton = true;
        this.moveToAllButton = true;
        this.orderAllOptions = [];
        this.orderSelectedOptions = [];
        this.sortBy = 'id';
        this.change = new EventEmitter();
        this.changeOrderAll = new EventEmitter();
        this.changeOrderSelected = new EventEmitter();
        this.numItemsSelectedAll = new EventEmitter();
        this.numItemsSelectedSelected = new EventEmitter();
        this.scrollBottomAll = new EventEmitter();
        this.searchOverAll = new EventEmitter();
        this.searchOverSelected = new EventEmitter();
        this.selectedElementsChange = new EventEmitter();
        this.selectExtraLabelAll = new EventEmitter();
        this.selectExtraLabelSelected = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init(this.allElements, this.selectedElements, this.selectedElementsChange, this.sortBy, this.hasAllListAll, this.hasAllListSelected, this.itemAll);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.checkChanges(changes, 'allElements', 'selectedElements');
        this.change.emit();
    }
    /**
     * @return {?}
     */
    get allList() {
        return this.copyAllElement;
    }
    /**
     * @return {?}
     */
    get selectedList() {
        return this.copySelectedElements;
    }
};
StTwoListSelectionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StTwoListSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-two-list-selection',
                template: `
      <st-two-list-selection-view
         [allElements]="allList | stFilterList:searchBy:allSearch"
         [selectedElements]="selectedList | stFilterList:searchBy:selectedSearch"
         [config]="config"
         [editable]="editable"
         [hasAllListAll]="hasAllListAll"
         [hasAllListSelected]="hasAllListSelected"
         [itemAll]="itemAll"
         [qaTag]="qaTag"
         [isLoading]="isLoading"
         [hasSearch]="hasSearch"
         [orderAllOptions]="orderAllOptions"
         [orderSelectedOptions]="orderSelectedOptions"
         [mode]="mode"
         [moveAllToSelectedButton]="moveAllToSelectedButton"
         [moveAllToAllButton]="moveAllToAllButton"
         [moveToAllButton]="moveToAllButton"
         [moveToSelectedButton]="moveToSelectedButton"
         [showSearchNumber]="showSearchNumber"

         (selectAllElement)="onSelectAllElement($event)"
         (selectSelectedElement)="onSelectSelectedElement($event)"
         (searchOverAll)="onSearchOverAll($event)"
         (searchOverSelected)="onSearchOverSelected($event)"
         (moveToSelected)="onMoveToSelected($event)"
         (moveToAll)="onMoveToAll($event)"
         (moveAllToSelected)="onMoveAllToSelected($event)"
         (moveAllToAll)="onMoveAllToAll($event)"
         (numItemsSelectedAll)="numItemsSelectedAll.emit($event)"
         (numItemsSelectedSelected)="numItemsSelectedSelected.emit($event)"
         (selectExtraLabelAll)="selectExtraLabelAll.emit($event)"
         (selectExtraLabelSelected)="selectExtraLabelAll.emit($event)"
         (selectItemNonEditable)="selectItemNonEditable.emit($event)"
         (changeOrderAll)="changeOrderAll.emit($event)"
         (changeOrderSelected)="changeOrderSelected.emit($event)"
         (scrollBottomAll)="scrollBottomAll.emit($event)"
      ></st-two-list-selection-view>
   `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StTwoListSelectionComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdHdvLWxpc3Qtc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdHdvLWxpc3Qtc2VsZWN0aW9uL3N0LXR3by1saXN0LXNlbGVjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLGFBQWEsRUFDZixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0lBK0NoRCwyQkFBMkIsU0FBM0IsMkJBQTRCLFNBQVEsa0JBQWtCOzs7O0lBbUNoRSxZQUFvQixFQUFxQjtRQUN0QyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFETyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQS9CaEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFhLEtBQUssQ0FBQztRQUNoQyx1QkFBa0IsR0FBYSxLQUFLLENBQUM7UUFDckMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQWEsS0FBSyxDQUFDO1FBRTVCLFNBQUksR0FBeUIsUUFBUSxDQUFDO1FBQ3RDLDRCQUF1QixHQUFZLElBQUksQ0FBQztRQUN4Qyx1QkFBa0IsR0FBWSxJQUFJLENBQUM7UUFDbkMseUJBQW9CLEdBQVksSUFBSSxDQUFDO1FBQ3JDLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFlLEdBQXlCLEVBQUUsQ0FBQztRQUMzQyx5QkFBb0IsR0FBeUIsRUFBRSxDQUFDO1FBSWhELFdBQU0sR0FBK0IsSUFBSSxD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QUE0Qzs7SUFDNUMsMkRBQThDOztJQUM5QyxzREFBeUM7O0lBQ3pDLHNEQUFvRDs7SUFDcEQsMkRBQXlEOztJQUN6RCw0Q0FBcUM7O0lBQ3JDLHVEQUFxRTs7SUFDckUsdURBQWtDOztJQUNsQyw2Q0FBbUQ7O0lBRW5ELDZDQUE4RDs7SUFDOUQscURBQXNFOztJQUN0RSwwREFBMkU7O0lBQzNFLDBEQUEyRTs7SUFDM0UsK0RBQWdGOztJQUNoRixzREFBdUU7O0lBQ3ZFLG9EQUEyRTs7SUFDM0UseURBQWdGOztJQUNoRiw2REFBOEg7O0lBQzlILDBEQUFtSTs7SUFDbkksK0RBQXdJOztJQUN4SSw0REFBNkg7Ozs7O0lBRWpILHlDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDb21wb25lbnQsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBJbnB1dCxcbiAgIE9uQ2hhbmdlcyxcbiAgIE9uSW5pdCxcbiAgIE91dHB1dCxcbiAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9yZXF1aXJlLWRlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RUd29MaXN0U2VsZWN0aW9uIH0gZnJvbSAnLi9zdC10d28tbGlzdC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RUd29MaXN0U2VsZWN0aW9uQ29uZmlnLCBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50LCBTdFR3b0xpc3RTZWxlY3RFeHRyYUxhYmVsQWN0aW9uLCBTdFR3b0xpc3RTZWxlY3Rpb25BY3Rpb24gfSBmcm9tICcuL3N0LXR3by1saXN0LXNlbGVjdGlvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10d28tbGlzdC1zZWxlY3Rpb24nLFxuICAgdGVtcGxhdGU6IGBcbiAgICAgIDxzdC10d28tbGlzdC1zZWxlY3Rpb24tdmlld1xuICAgICAgICAgW2FsbEVsZW1lbnRzXT1cImFsbExpc3QgfCBzdEZpbHRlckxpc3Q6c2VhcmNoQnk6YWxsU2VhcmNoXCJcbiAgICAgICAgIFtzZWxlY3RlZEVsZW1lbnRzXT1cInNlbGVjdGVkTGlzdCB8IHN0RmlsdGVyTGlzdDpzZWFyY2hCeTpzZWxlY3RlZFNlYXJjaFwiXG4gICAgICAgICBbY29uZmlnXT1cImNvbmZpZ1wiXG4gICAgICAgICBbZWRpdGFibGVdPVwiZWRpdGFibGVcIlxuICAgICAgICAgW2hhc0FsbExpc3RBbGxdPVwiaGFzQWxsTGlzdEFsbFwiXG4gICAgICAgICBbaGFzQWxsTGlzdFNlbGVjdGVkXT1cImhhc0FsbExpc3RTZWxlY3RlZFwiXG4gICAgICAgICBbaXRlbUFsbF09XCJpdGVtQWxsXCJcbiAgICAgICAgIFtxYVRhZ109XCJxYVRhZ1wiXG4gICAgICAgICBbaXNMb2FkaW5nXT1cImlzTG9hZGluZ1wiXG4gICAgICAgICBbaGFzU2VhcmNoXT1cImhhc1NlYXJjaFwiXG4gICAgICAgICBbb3JkZXJBbGxPcHRpb25zXT1cIm9yZGVyQWxsT3B0aW9uc1wiXG4gICAgICAgICBbb3JkZXJTZWxlY3RlZE9wdGlvbnNdPVwib3JkZXJTZWxlY3RlZE9wdGlvbnNcIlxuICAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgICBbbW92ZUFsbFRvU2VsZWN0ZWRCdXR0b25dPVwibW92ZUFsbFRvU2VsZWN0ZWRCdXR0b25cIlxuICAgICAgICAgW21vdmVBbGxUb0FsbEJ1dHRvbl09XCJtb3ZlQWxsVG9BbGxCdXR0b25cIlxuICAgICAgICAgW21vdmVUb0FsbEJ1dHRvbl09XCJtb3ZlVG9BbGxCdXR0b25cIlxuICAgICAgICAgW21vdmVUb1NlbGVjdGVkQnV0dG9uXT1cIm1vdmVUb1NlbGVjdGVkQnV0dG9uXCJcbiAgICAgICAgIFtzaG93U2VhcmNoTnVtYmVyXT1cInNob3dTZWFyY2hOdW1iZXJcIlxuXG4gICAgICAgICAoc2VsZWN0QWxsRWxlbWVudCk9XCJvblNlbGVjdEFsbEVsZW1lbnQoJGV2ZW50KVwiXG4gICAgICAgICAoc2VsZWN0U2VsZWN0ZWRFbGVtZW50KT1cIm9uU2VsZWN0U2VsZWN0ZWRFbGVtZW50KCRldmVudClcIlxuICAgICAgICAgKHNlYXJjaE92ZXJBbGwpPVwib25TZWFyY2hPdmVyQWxsKCRldmVudClcIlxuICAgICAgICAgKHNlYXJjaE92ZXJTZWxlY3RlZCk9XCJvblNlYXJjaE92ZXJTZWxlY3RlZCgkZXZlbnQpXCJcbiAgICAgICAgIChtb3ZlVG9TZWxlY3RlZCk9XCJvbk1vdmVUb1NlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgKG1vdmVUb0FsbCk9XCJvbk1vdmVUb0FsbCgkZXZlbnQpXCJcbiAgICAgICAgIChtb3ZlQWxsVG9TZWxlY3RlZCk9XCJvbk1vdmVBbGxUb1NlbGVjdGVkKCRldmVudClcIlxuICAgICAgICAgKG1vdmVBbGxUb0FsbCk9XCJvbk1vdmVBbGxUb0FsbCgkZXZlbnQpXCJcbiAgICAgICAgIChudW1JdGVtc1NlbGVjdGVkQWxsKT1cIm51bUl0ZW1zU2VsZWN0ZWRBbGwuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChudW1JdGVtc1NlbGVjdGVkU2VsZWN0ZWQpPVwibnVtSXRlbXNTZWxlY3RlZFNlbGVjdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAoc2VsZWN0RXh0cmFMYWJlbEFsbCk9XCJzZWxlY3RFeHRyYUxhYmVsQWxsLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAoc2VsZWN0RXh0cmFMYWJlbFNlbGVjdGVkKT1cInNlbGVjdEV4dHJhTGFiZWxBbGwuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChzZWxlY3RJdGVtTm9uRWRpdGFibGUpPVwic2VsZWN0SXRlbU5vbkVkaXRhYmxlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAoY2hhbmdlT3JkZXJBbGwpPVwiY2hhbmdlT3JkZXJBbGwuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChjaGFuZ2VPcmRlclNlbGVjdGVkKT1cImNoYW5nZU9yZGVyU2VsZWN0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgIChzY3JvbGxCb3R0b21BbGwpPVwic2Nyb2xsQm90dG9tQWxsLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+PC9zdC10d28tbGlzdC1zZWxlY3Rpb24tdmlldz5cbiAgIGAsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbkBTdEVnZW8oKVxuZXhwb3J0IGNsYXNzIFN0VHdvTGlzdFNlbGVjdGlvbkNvbXBvbmVudCBleHRlbmRzIFN0VHdvTGlzdFNlbGVjdGlvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoJ2VkaXRhYmxlJykgYWxsRWxlbWVudHM6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXTtcbiAgIEBJbnB1dCgpIGNvbmZpZzogU3RUd29MaXN0U2VsZWN0aW9uQ29uZmlnO1xuICAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIGhhc0FsbExpc3RBbGw/OiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBoYXNBbGxMaXN0U2VsZWN0ZWQ/OiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBoYXNTZWFyY2g6IGJvb2xlYW4gPSB0cnVlO1xuICAgQElucHV0KCkgaXNMb2FkaW5nPzogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgaXRlbUFsbD86IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQ7XG4gICBASW5wdXQoKSBtb2RlOiAnY29tcGFjdCcgfCAnbm9ybWFsJyA9ICdub3JtYWwnO1xuICAgQElucHV0KCkgbW92ZUFsbFRvU2VsZWN0ZWRCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuICAgQElucHV0KCkgbW92ZUFsbFRvQWxsQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIG1vdmVUb1NlbGVjdGVkQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcbiAgIEBJbnB1dCgpIG1vdmVUb0FsbEJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gICBASW5wdXQoKSBvcmRlckFsbE9wdGlvbnM6IFN0RHJvcERvd25NZW51SXRlbVtdID0gW107XG4gICBASW5wdXQoKSBvcmRlclNlbGVjdGVkT3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgcWFUYWc6IHN0cmluZztcbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgc2VsZWN0ZWRFbGVtZW50czogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdO1xuICAgQElucHV0KCkgc2hvd1NlYXJjaE51bWJlcjogbnVtYmVyO1xuICAgQElucHV0KCkgc29ydEJ5OiAnaWQnIHwgJ25hbWUnIHwgJ25vdE9yZGVyJyA9ICdpZCc7XG5cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgY2hhbmdlT3JkZXJBbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgY2hhbmdlT3JkZXJTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBudW1JdGVtc1NlbGVjdGVkQWxsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgQE91dHB1dCgpIG51bUl0ZW1zU2VsZWN0ZWRTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgIEBPdXRwdXQoKSBzY3JvbGxCb3R0b21BbGw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICBAT3V0cHV0KCkgc2VhcmNoT3ZlckFsbDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgIEBPdXRwdXQoKSBzZWFyY2hPdmVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0ZWRFbGVtZW50c0NoYW5nZTogRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXT4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RFeHRyYUxhYmVsQWxsOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0RXh0cmFMYWJlbFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0SXRlbU5vbkVkaXRhYmxlOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdPigpO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgc3VwZXIoY2QpO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaW5pdChcbiAgICAgICAgIHRoaXMuYWxsRWxlbWVudHMsXG4gICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHMsXG4gICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudHNDaGFuZ2UsXG4gICAgICAgICB0aGlzLnNvcnRCeSxcbiAgICAgICAgIHRoaXMuaGFzQWxsTGlzdEFsbCxcbiAgICAgICAgIHRoaXMuaGFzQWxsTGlzdFNlbGVjdGVkLFxuICAgICAgICAgdGhpcy5pdGVtQWxsXG4gICAgICApO1xuICAgfVxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICB0aGlzLmNoZWNrQ2hhbmdlcyhjaGFuZ2VzLCAnYWxsRWxlbWVudHMnLCAnc2VsZWN0ZWRFbGVtZW50cycpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdCgpO1xuICAgfVxuXG4gICBnZXQgYWxsTGlzdCgpOiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W10ge1xuICAgICAgcmV0dXJuIHRoaXMuY29weUFsbEVsZW1lbnQ7XG4gICB9XG5cbiAgIGdldCBzZWxlY3RlZExpc3QoKTogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdIHtcbiAgICAgIHJldHVybiB0aGlzLmNvcHlTZWxlY3RlZEVsZW1lbnRzO1xuICAgfVxufVxuIl19