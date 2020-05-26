/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/st-two-list-selection.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { StFilterList } from '../pipes/search-filter/search-filter.pipe';
var StTwoListSelection = /** @class */ (function () {
    function StTwoListSelection(_cd) {
        this._cd = _cd;
        // Work Lists
        this.copyAllElement = [];
        this.copySelectedElements = [];
        this.allSearch = '';
        this.hasCheckboxAllList = false;
        this.hasCheckboxSelectedList = false;
        this.numItemsSelectedAll = new EventEmitter();
        this.numItemsSelectedSelected = new EventEmitter();
        this.searchBy = 'name';
        this.searchOverAll = new EventEmitter();
        this.searchOverSelected = new EventEmitter();
        this.selectedSearch = '';
    }
    // Check selected element
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    StTwoListSelection.prototype.onSelectAllElement = 
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        if (this.hasCheckboxAllList && selection.itemAll) {
            this.copyAllElement = this.applySelectAll(this.copyAllElement, this.allSearch, selection.selected);
            selection.selected = !selection.selected;
        }
        else {
            if (this.canSelect(selection, this.copyAllElement)) {
                selection.selected = !selection.selected;
            }
        }
        this.copyAllElement = _.cloneDeep(this.copyAllElement);
        if (this.copyAllElement) {
            this.numItemsSelectedAll.emit(this.getNumItemsSelected(this.copyAllElement));
        }
    };
    // Check selected element
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    StTwoListSelection.prototype.onSelectSelectedElement = 
    // Check selected element
    /**
     * @param {?} selection
     * @return {?}
     */
    function (selection) {
        if (this.hasCheckboxSelectedList && selection.itemAll) {
            this.copySelectedElements = this.applySelectAll(this.copySelectedElements, this.selectedSearch, selection.selected);
            selection.selected = !selection.selected;
        }
        else {
            if (this.canSelect(selection, this.copySelectedElements)) {
                selection.selected = !selection.selected;
            }
        }
        this.copySelectedElements = _.cloneDeep(this.copySelectedElements);
        if (this.copySelectedElements) {
            this.numItemsSelectedSelected.emit(this.getNumItemsSelected(this.copySelectedElements));
        }
    };
    // Update search filter
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    StTwoListSelection.prototype.onSearchOverAll = 
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        this.allSearch = search.text;
        this.searchOverAll.emit(this.allSearch);
    };
    // Update search filter
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    StTwoListSelection.prototype.onSearchOverSelected = 
    // Update search filter
    /**
     * @param {?} search
     * @return {?}
     */
    function (search) {
        this.selectedSearch = search.text;
        this.searchOverSelected.emit(this.selectedSearch);
    };
    // Move from all to selected
    // Move from all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveToSelected = 
    // Move from all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ids = this.getIdsToMove(this.copyAllElement);
        /** @type {?} */
        var result = this.moveIdsFromAllToSelected(this.originalAll, this.originalSelected, ids);
        this.emitter.emit(result);
        if (this.itemAll)
            this.itemAll.selected = false;
    };
    // Remove from selected
    // Remove from selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveToAll = 
    // Remove from selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var ids = this.getIdsToMove(this.copySelectedElements);
        /** @type {?} */
        var result = this.removeIdsFromSelected(this.originalSelected, ids);
        this.emitter.emit(result);
        if (this.itemAll)
            this.itemAll.selected = false;
    };
    // Move all to selected
    // Move all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveAllToSelected = 
    // Move all to selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emitter.emit(_.cloneDeep(this.originalAll.filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.disabled; }))));
    };
    // Remove All from selected
    // Remove All from selected
    /**
     * @param {?} event
     * @return {?}
     */
    StTwoListSelection.prototype.onMoveAllToAll = 
    // Remove All from selected
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.emitter.emit([]);
    };
    /**
     * @param {?} all
     * @param {?} selected
     * @param {?} changeEmitter
     * @param {?} sorted
     * @param {?=} hasCheckboxAllList
     * @param {?=} hasCheckboxSelectedList
     * @param {?=} itemAll
     * @return {?}
     */
    StTwoListSelection.prototype.init = /**
     * @param {?} all
     * @param {?} selected
     * @param {?} changeEmitter
     * @param {?} sorted
     * @param {?=} hasCheckboxAllList
     * @param {?=} hasCheckboxSelectedList
     * @param {?=} itemAll
     * @return {?}
     */
    function (all, selected, changeEmitter, sorted, hasCheckboxAllList, hasCheckboxSelectedList, itemAll) {
        if (hasCheckboxAllList === void 0) { hasCheckboxAllList = false; }
        if (hasCheckboxSelectedList === void 0) { hasCheckboxSelectedList = false; }
        if (itemAll === void 0) { itemAll = (/** @type {?} */ (null)); }
        this.emitter = changeEmitter;
        this.sortLists = sorted;
        this.originalAll = all;
        this.originalSelected = selected;
        this.generateWorkLists();
        this.hasCheckboxAllList = hasCheckboxAllList;
        this.hasCheckboxSelectedList = hasCheckboxSelectedList;
        this.itemAll = itemAll;
    };
    /**
     * @param {?} changes
     * @param {?} allList
     * @param {?} selectedList
     * @return {?}
     */
    StTwoListSelection.prototype.checkChanges = /**
     * @param {?} changes
     * @param {?} allList
     * @param {?} selectedList
     * @return {?}
     */
    function (changes, allList, selectedList) {
        if (changes[allList] !== undefined) {
            this.originalAll = changes[allList].currentValue;
        }
        if (changes[selectedList] !== undefined) {
            this.originalSelected = changes[selectedList].currentValue;
        }
        if (changes[allList] !== undefined || changes[selectedList] !== undefined) {
            this.generateWorkLists();
        }
    };
    /**
     * @private
     * @param {?} twoList
     * @param {?} elemSearched
     * @param {?} allSelected
     * @return {?}
     */
    StTwoListSelection.prototype.applySelectAll = /**
     * @private
     * @param {?} twoList
     * @param {?} elemSearched
     * @param {?} allSelected
     * @return {?}
     */
    function (twoList, elemSearched, allSelected) {
        /** @type {?} */
        var filterPipe = new StFilterList();
        /** @type {?} */
        var filteredBySearch = filterPipe.transform(twoList, 'name', elemSearched);
        if (elemSearched) {
            twoList.forEach((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                if (!elem.disabled) {
                    elem.selected = false;
                    if (filteredBySearch.find((/**
                     * @param {?} filtered
                     * @return {?}
                     */
                    function (filtered) { return filtered.name === elem.name; })) !== undefined) {
                        elem.selected = !allSelected;
                    }
                }
            }));
            this._cd.markForCheck();
        }
        else {
            twoList = _.cloneDeep(this.changeSelectedItemList(twoList, !allSelected));
        }
        return twoList;
    };
    /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    StTwoListSelection.prototype.changeSelectedItemList = /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    function (list, selected) {
        return _.cloneDeep(list).map((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            elem.selected = (!elem.disabled) ? selected : elem.selected;
            return elem;
        }));
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    StTwoListSelection.prototype.getNumItemsSelected = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var reducer = (/**
         * @param {?} accumulator
         * @param {?} currentValue
         * @return {?}
         */
        function (accumulator, currentValue) {
            return (currentValue.selected) ? accumulator + 1 : accumulator + 0;
        });
        return list.reduce(reducer, 0);
    };
    /**
     * @private
     * @return {?}
     */
    StTwoListSelection.prototype.generateWorkLists = /**
     * @private
     * @return {?}
     */
    function () {
        this.copyAllElement = this.copyLists(this.originalAll, this.copyAllElement, this.originalSelected);
        this.copySelectedElements = this.copyLists(this.originalSelected, this.copySelectedElements);
        if (this.sortLists !== undefined && (this.sortLists === 'id' || this.sortLists === 'name')) {
            this.copyAllElement = this.orderListBy(this.copyAllElement, this.sortLists);
            this.copySelectedElements = this.orderListBy(this.copySelectedElements, this.sortLists);
        }
    };
    /**
     * @private
     * @param {?} newValue
     * @param {?} prevState
     * @param {?=} without
     * @return {?}
     */
    StTwoListSelection.prototype.copyLists = /**
     * @private
     * @param {?} newValue
     * @param {?} prevState
     * @param {?=} without
     * @return {?}
     */
    function (newValue, prevState, without) {
        /** @type {?} */
        var list = _.cloneDeep(newValue);
        if (without && without.length > 0) {
            list = _.differenceBy(list, without, 'id');
        }
        /** @type {?} */
        var selected = this.getIdsToMove(prevState);
        this.searchAndSelect(list, selected);
        return list;
    };
    /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    StTwoListSelection.prototype.searchAndSelect = /**
     * @private
     * @param {?} list
     * @param {?} selected
     * @return {?}
     */
    function (list, selected) {
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var actualIndex = -1;
        while (selected.length > 0 && i < list.length) {
            actualIndex = selected.indexOf(list[i].id);
            if (actualIndex > -1) {
                list[i].selected = true;
                selected.splice(actualIndex, 1);
                actualIndex = -1;
            }
            i++;
        }
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    StTwoListSelection.prototype.getIdsToMove = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return list.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            if (curr.selected) {
                curr.selected = false;
                prev.push(curr.id);
            }
            return prev;
        }), []);
    };
    /**
     * @private
     * @param {?} all
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    StTwoListSelection.prototype.moveIdsFromAllToSelected = /**
     * @private
     * @param {?} all
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    function (all, selected, ids) {
        /** @type {?} */
        var items = all.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _.includes(ids, item.id); }));
        return _.xorBy(selected, _.cloneDeep(items), 'id');
    };
    /**
     * @private
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    StTwoListSelection.prototype.removeIdsFromSelected = /**
     * @private
     * @param {?} selected
     * @param {?} ids
     * @return {?}
     */
    function (selected, ids) {
        return selected.reduce((/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) {
            if (!_.includes(ids, curr.id)) {
                prev.push(_.clone(curr));
            }
            return prev;
        }), []);
    };
    /**
     * @private
     * @param {?} list
     * @param {?} by
     * @return {?}
     */
    StTwoListSelection.prototype.orderListBy = /**
     * @private
     * @param {?} list
     * @param {?} by
     * @return {?}
     */
    function (list, by) {
        return _.sortBy(list, by);
    };
    /**
     * @private
     * @param {?} selection
     * @param {?} list
     * @return {?}
     */
    StTwoListSelection.prototype.canSelect = /**
     * @private
     * @param {?} selection
     * @param {?} list
     * @return {?}
     */
    function (selection, list) {
        return selection && !selection.disabled && list !== undefined && list.length > 0;
    };
    return StTwoListSelection;
}());
export { StTwoListSelection };
if (false) {
    /** @type {?} */
    StTwoListSelection.prototype.originalAll;
    /** @type {?} */
    StTwoListSelection.prototype.originalSelected;
    /** @type {?} */
    StTwoListSelection.prototype.copyAllElement;
    /** @type {?} */
    StTwoListSelection.prototype.copySelectedElements;
    /** @type {?} */
    StTwoListSelection.prototype.allSearch;
    /** @type {?} */
    StTwoListSelection.prototype.hasCheckboxAllList;
    /** @type {?} */
    StTwoListSelection.prototype.hasCheckboxSelectedList;
    /** @type {?} */
    StTwoListSelection.prototype.itemAll;
    /** @type {?} */
    StTwoListSelection.prototype.numItemsSelectedAll;
    /** @type {?} */
    StTwoListSelection.prototype.numItemsSelectedSelected;
    /** @type {?} */
    StTwoListSelection.prototype.searchBy;
    /** @type {?} */
    StTwoListSelection.prototype.searchOverAll;
    /** @type {?} */
    StTwoListSelection.prototype.searchOverSelected;
    /** @type {?} */
    StTwoListSelection.prototype.selectedSearch;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelection.prototype.emitter;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelection.prototype.sortLists;
    /**
     * @type {?}
     * @private
     */
    StTwoListSelection.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdHdvLWxpc3Qtc2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC10d28tbGlzdC1zZWxlY3Rpb24vc3QtdHdvLWxpc3Qtc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBcUIsWUFBWSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUc1QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFLekU7SUF3QkcsNEJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQWpCbkMsbUJBQWMsR0FBUyxFQUFFLENBQUM7UUFDMUIseUJBQW9CLEdBQVMsRUFBRSxDQUFDO1FBRWhDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsdUJBQWtCLEdBQWEsS0FBSyxDQUFDO1FBQ3JDLDRCQUF1QixHQUFhLEtBQUssQ0FBQztRQUUxQyx3QkFBbUIsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN2RSw2QkFBd0IsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM1RSxhQUFRLEdBQVcsTUFBTSxDQUFDO1FBQzFCLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDakUsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEUsbUJBQWMsR0FBVyxFQUFFLENBQUM7SUFLVyxDQUFDO0lBRS9DLHlCQUF5Qjs7Ozs7O0lBQ3pCLCtDQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLFNBQW9DO1FBQ3BELElBQUksSUFBSSxDQUFDLGtCQUFrQixJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNB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QUM5RSxzREFBbUY7O0lBQ25GLHNDQUFpQzs7SUFDakMsMkNBQXdFOztJQUN4RSxnREFBNkU7O0lBQzdFLDRDQUFtQzs7Ozs7SUFFbkMscUNBQW9DOzs7OztJQUNwQyx1Q0FBOEM7Ozs7O0lBRWxDLGlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50IH0gZnJvbSAnLi9zdC10d28tbGlzdC1zZWxlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgU3RGaWx0ZXJMaXN0IH0gZnJvbSAnLi4vcGlwZXMvc2VhcmNoLWZpbHRlci9zZWFyY2gtZmlsdGVyLnBpcGUnO1xuXG5leHBvcnQgdHlwZSBMaXN0ID0gU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdO1xuZXhwb3J0IHR5cGUgSWRMaXN0ID0gQXJyYXk8c3RyaW5nIHwgbnVtYmVyPjtcblxuZXhwb3J0IGNsYXNzIFN0VHdvTGlzdFNlbGVjdGlvbiB7XG5cbiAgIC8vIE9yaWdpbmFsIExpc3RzXG4gICBwdWJsaWMgb3JpZ2luYWxBbGw6IExpc3Q7XG4gICBwdWJsaWMgb3JpZ2luYWxTZWxlY3RlZDogTGlzdDtcblxuICAgLy8gV29yayBMaXN0c1xuICAgcHVibGljIGNvcHlBbGxFbGVtZW50OiBMaXN0ID0gW107XG4gICBwdWJsaWMgY29weVNlbGVjdGVkRWxlbWVudHM6IExpc3QgPSBbXTtcblxuICAgcHVibGljIGFsbFNlYXJjaDogc3RyaW5nID0gJyc7XG4gICBwdWJsaWMgaGFzQ2hlY2tib3hBbGxMaXN0PzogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGhhc0NoZWNrYm94U2VsZWN0ZWRMaXN0PzogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGl0ZW1BbGw/OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50O1xuICAgcHVibGljIG51bUl0ZW1zU2VsZWN0ZWRBbGw6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gICBwdWJsaWMgbnVtSXRlbXNTZWxlY3RlZFNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICAgcHVibGljIHNlYXJjaEJ5OiBzdHJpbmcgPSAnbmFtZSc7XG4gICBwdWJsaWMgc2VhcmNoT3ZlckFsbDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgIHB1YmxpYyBzZWFyY2hPdmVyU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gICBwdWJsaWMgc2VsZWN0ZWRTZWFyY2g6IHN0cmluZyA9ICcnO1xuXG4gICBwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxMaXN0PjtcbiAgIHByaXZhdGUgc29ydExpc3RzOiAnaWQnIHwgJ25hbWUnIHwgJ25vdE9yZGVyJztcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgLy8gQ2hlY2sgc2VsZWN0ZWQgZWxlbWVudFxuICAgb25TZWxlY3RBbGxFbGVtZW50KHNlbGVjdGlvbjogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaGFzQ2hlY2tib3hBbGxMaXN0ICYmIHNlbGVjdGlvbi5pdGVtQWxsKSB7XG4gICAgICAgICB0aGlzLmNvcHlBbGxFbGVtZW50ID0gdGhpcy5hcHBseVNlbGVjdEFsbCh0aGlzLmNvcHlBbGxFbGVtZW50LCB0aGlzLmFsbFNlYXJjaCwgc2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZCA9ICFzZWxlY3Rpb24uc2VsZWN0ZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgaWYgKHRoaXMuY2FuU2VsZWN0KHNlbGVjdGlvbiwgdGhpcy5jb3B5QWxsRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi5zZWxlY3RlZCA9ICFzZWxlY3Rpb24uc2VsZWN0ZWQ7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvcHlBbGxFbGVtZW50ID0gXy5jbG9uZURlZXAodGhpcy5jb3B5QWxsRWxlbWVudCk7XG4gICAgICBpZiAodGhpcy5jb3B5QWxsRWxlbWVudCkge1xuICAgICAgICAgdGhpcy5udW1JdGVtc1NlbGVjdGVkQWxsLmVtaXQodGhpcy5nZXROdW1JdGVtc1NlbGVjdGVkKHRoaXMuY29weUFsbEVsZW1lbnQpKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gQ2hlY2sgc2VsZWN0ZWQgZWxlbWVudFxuICAgb25TZWxlY3RTZWxlY3RlZEVsZW1lbnQoc2VsZWN0aW9uOiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5oYXNDaGVja2JveFNlbGVjdGVkTGlzdCAmJiBzZWxlY3Rpb24uaXRlbUFsbCkge1xuICAgICAgICAgdGhpcy5jb3B5U2VsZWN0ZWRFbGVtZW50cyA9ICB0aGlzLmFwcGx5U2VsZWN0QWxsKHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMsIHRoaXMuc2VsZWN0ZWRTZWFyY2gsIHNlbGVjdGlvbi5zZWxlY3RlZCk7XG4gICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWQgPSAhc2VsZWN0aW9uLnNlbGVjdGVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGlmICh0aGlzLmNhblNlbGVjdChzZWxlY3Rpb24sIHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMpKSB7XG4gICAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWQgPSAhc2VsZWN0aW9uLnNlbGVjdGVkO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb3B5U2VsZWN0ZWRFbGVtZW50cyA9IF8uY2xvbmVEZWVwKHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMpO1xuICAgICAgaWYgKHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMpIHtcbiAgICAgICAgIHRoaXMubnVtSXRlbXNTZWxlY3RlZFNlbGVjdGVkLmVtaXQodGhpcy5nZXROdW1JdGVtc1NlbGVjdGVkKHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMpKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gVXBkYXRlIHNlYXJjaCBmaWx0ZXJcbiAgIG9uU2VhcmNoT3ZlckFsbChzZWFyY2g6IHsgdGV4dDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAgIHRoaXMuYWxsU2VhcmNoID0gc2VhcmNoLnRleHQ7XG4gICAgICB0aGlzLnNlYXJjaE92ZXJBbGwuZW1pdCh0aGlzLmFsbFNlYXJjaCk7XG4gICB9XG5cbiAgIC8vIFVwZGF0ZSBzZWFyY2ggZmlsdGVyXG4gICBvblNlYXJjaE92ZXJTZWxlY3RlZChzZWFyY2g6IHsgdGV4dDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRTZWFyY2ggPSBzZWFyY2gudGV4dDtcbiAgICAgIHRoaXMuc2VhcmNoT3ZlclNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZFNlYXJjaCk7XG4gICB9XG5cbiAgIC8vIE1vdmUgZnJvbSBhbGwgdG8gc2VsZWN0ZWRcbiAgIG9uTW92ZVRvU2VsZWN0ZWQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBsZXQgaWRzOiBJZExpc3QgPSB0aGlzLmdldElkc1RvTW92ZSh0aGlzLmNvcHlBbGxFbGVtZW50KTtcbiAgICAgIGxldCByZXN1bHQ6IExpc3QgPSB0aGlzLm1vdmVJZHNGcm9tQWxsVG9TZWxlY3RlZCh0aGlzLm9yaWdpbmFsQWxsLCB0aGlzLm9yaWdpbmFsU2VsZWN0ZWQsIGlkcyk7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChyZXN1bHQpO1xuICAgICAgaWYgKHRoaXMuaXRlbUFsbCkgdGhpcy5pdGVtQWxsLnNlbGVjdGVkID0gZmFsc2U7XG4gICB9XG5cbiAgIC8vIFJlbW92ZSBmcm9tIHNlbGVjdGVkXG4gICBvbk1vdmVUb0FsbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGxldCBpZHM6IElkTGlzdCA9IHRoaXMuZ2V0SWRzVG9Nb3ZlKHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMpO1xuICAgICAgbGV0IHJlc3VsdDogTGlzdCA9IHRoaXMucmVtb3ZlSWRzRnJvbVNlbGVjdGVkKHRoaXMub3JpZ2luYWxTZWxlY3RlZCwgaWRzKTtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHJlc3VsdCk7XG4gICAgICBpZiAodGhpcy5pdGVtQWxsKSB0aGlzLml0ZW1BbGwuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgIH1cblxuICAgLy8gTW92ZSBhbGwgdG8gc2VsZWN0ZWRcbiAgIG9uTW92ZUFsbFRvU2VsZWN0ZWQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChfLmNsb25lRGVlcCh0aGlzLm9yaWdpbmFsQWxsLmZpbHRlcigoZWxlbSkgPT4gIWVsZW0uZGlzYWJsZWQpKSk7XG4gICB9XG5cbiAgIC8vIFJlbW92ZSBBbGwgZnJvbSBzZWxlY3RlZFxuICAgb25Nb3ZlQWxsVG9BbGwoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICB0aGlzLmVtaXR0ZXIuZW1pdChbXSk7XG4gICB9XG5cbiAgIGluaXQoYWxsOiBMaXN0LCBzZWxlY3RlZDogTGlzdCwgY2hhbmdlRW1pdHRlcjogRXZlbnRFbWl0dGVyPExpc3Q+LCBzb3J0ZWQ6ICdpZCcgfCAnbmFtZScgfCAnbm90T3JkZXInLFxuICAgICAgaGFzQ2hlY2tib3hBbGxMaXN0OiBib29sZWFuID0gZmFsc2UsIGhhc0NoZWNrYm94U2VsZWN0ZWRMaXN0OiBib29sZWFuID0gZmFsc2UsIGl0ZW1BbGw6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQgPSA8YW55Pm51bGwpOiB2b2lkIHtcbiAgICAgIHRoaXMuZW1pdHRlciA9IGNoYW5nZUVtaXR0ZXI7XG4gICAgICB0aGlzLnNvcnRMaXN0cyA9IHNvcnRlZDtcbiAgICAgIHRoaXMub3JpZ2luYWxBbGwgPSBhbGw7XG4gICAgICB0aGlzLm9yaWdpbmFsU2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuZ2VuZXJhdGVXb3JrTGlzdHMoKTtcbiAgICAgIHRoaXMuaGFzQ2hlY2tib3hBbGxMaXN0ID0gaGFzQ2hlY2tib3hBbGxMaXN0O1xuICAgICAgdGhpcy5oYXNDaGVja2JveFNlbGVjdGVkTGlzdCA9IGhhc0NoZWNrYm94U2VsZWN0ZWRMaXN0O1xuICAgICAgdGhpcy5pdGVtQWxsID0gaXRlbUFsbDtcbiAgIH1cblxuICAgY2hlY2tDaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMsIGFsbExpc3Q6IHN0cmluZywgc2VsZWN0ZWRMaXN0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzW2FsbExpc3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMub3JpZ2luYWxBbGwgPSBjaGFuZ2VzW2FsbExpc3RdLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzW3NlbGVjdGVkTGlzdF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5vcmlnaW5hbFNlbGVjdGVkID0gY2hhbmdlc1tzZWxlY3RlZExpc3RdLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzW2FsbExpc3RdICE9PSB1bmRlZmluZWQgfHwgY2hhbmdlc1tzZWxlY3RlZExpc3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuZ2VuZXJhdGVXb3JrTGlzdHMoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBhcHBseVNlbGVjdEFsbCh0d29MaXN0OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W10sIGVsZW1TZWFyY2hlZDogc3RyaW5nLCBhbGxTZWxlY3RlZDogYm9vbGVhbik6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnRbXSB7XG4gICAgICBsZXQgZmlsdGVyUGlwZSA9IG5ldyBTdEZpbHRlckxpc3QoKTtcbiAgICAgIGxldCBmaWx0ZXJlZEJ5U2VhcmNoID0gZmlsdGVyUGlwZS50cmFuc2Zvcm0odHdvTGlzdCwgJ25hbWUnLCBlbGVtU2VhcmNoZWQpO1xuICAgICAgaWYgKGVsZW1TZWFyY2hlZCkge1xuICAgICAgICAgdHdvTGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVsZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgIGVsZW0uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgIGlmIChmaWx0ZXJlZEJ5U2VhcmNoLmZpbmQoZmlsdGVyZWQgPT4gZmlsdGVyZWQubmFtZSA9PT0gZWxlbS5uYW1lKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBlbGVtLnNlbGVjdGVkID0gIWFsbFNlbGVjdGVkO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0d29MaXN0ID0gXy5jbG9uZURlZXAodGhpcy5jaGFuZ2VTZWxlY3RlZEl0ZW1MaXN0KHR3b0xpc3QsICFhbGxTZWxlY3RlZCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR3b0xpc3Q7XG4gICB9XG5cbiAgIHByaXZhdGUgY2hhbmdlU2VsZWN0ZWRJdGVtTGlzdChsaXN0OiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50W10sIHNlbGVjdGVkOiBib29sZWFuKTogU3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudFtdIHtcbiAgICAgIHJldHVybiBfLmNsb25lRGVlcChsaXN0KS5tYXAoKGVsZW0pID0+IHtcbiAgICAgICAgIGVsZW0uc2VsZWN0ZWQgPSAoIWVsZW0uZGlzYWJsZWQpID8gc2VsZWN0ZWQgOiBlbGVtLnNlbGVjdGVkO1xuICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICB9KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBnZXROdW1JdGVtc1NlbGVjdGVkKGxpc3Q6IExpc3QpOiBudW1iZXIge1xuICAgICAgY29uc3QgcmVkdWNlciA9IChhY2N1bXVsYXRvcjogbnVtYmVyLCBjdXJyZW50VmFsdWU6IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQpID0+IHtcbiAgICAgICAgIHJldHVybiAoY3VycmVudFZhbHVlLnNlbGVjdGVkKSA/IGFjY3VtdWxhdG9yICsgMSA6IGFjY3VtdWxhdG9yICsgMDtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbGlzdC5yZWR1Y2UocmVkdWNlciwgMCk7XG4gICB9XG5cbiAgIHByaXZhdGUgZ2VuZXJhdGVXb3JrTGlzdHMoKTogdm9pZCB7XG4gICAgICB0aGlzLmNvcHlBbGxFbGVtZW50ID0gdGhpcy5jb3B5TGlzdHModGhpcy5vcmlnaW5hbEFsbCwgdGhpcy5jb3B5QWxsRWxlbWVudCwgdGhpcy5vcmlnaW5hbFNlbGVjdGVkKTtcbiAgICAgIHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMgPSB0aGlzLmNvcHlMaXN0cyh0aGlzLm9yaWdpbmFsU2VsZWN0ZWQsIHRoaXMuY29weVNlbGVjdGVkRWxlbWVudHMpO1xuICAgICAgaWYgKHRoaXMuc29ydExpc3RzICE9PSB1bmRlZmluZWQgJiYgKHRoaXMuc29ydExpc3RzID09PSAnaWQnIHx8IHRoaXMuc29ydExpc3RzID09PSAnbmFtZScpKSB7XG4gICAgICAgICB0aGlzLmNvcHlBbGxFbGVtZW50ID0gdGhpcy5vcmRlckxpc3RCeSh0aGlzLmNvcHlBbGxFbGVtZW50LCB0aGlzLnNvcnRMaXN0cyk7XG4gICAgICAgICB0aGlzLmNvcHlTZWxlY3RlZEVsZW1lbnRzID0gdGhpcy5vcmRlckxpc3RCeSh0aGlzLmNvcHlTZWxlY3RlZEVsZW1lbnRzLCB0aGlzLnNvcnRMaXN0cyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgY29weUxpc3RzKG5ld1ZhbHVlOiBMaXN0LCBwcmV2U3RhdGU6IExpc3QsIHdpdGhvdXQ/OiBMaXN0KTogTGlzdCB7XG4gICAgICBsZXQgbGlzdDogTGlzdCA9IF8uY2xvbmVEZWVwKG5ld1ZhbHVlKTtcbiAgICAgIGlmICh3aXRob3V0ICYmIHdpdGhvdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgbGlzdCA9IF8uZGlmZmVyZW5jZUJ5KGxpc3QsIHdpdGhvdXQsICdpZCcpO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2VsZWN0ZWQ6IElkTGlzdCA9IHRoaXMuZ2V0SWRzVG9Nb3ZlKHByZXZTdGF0ZSk7XG4gICAgICB0aGlzLnNlYXJjaEFuZFNlbGVjdChsaXN0LCBzZWxlY3RlZCk7XG4gICAgICByZXR1cm4gbGlzdDtcbiAgIH1cblxuICAgcHJpdmF0ZSBzZWFyY2hBbmRTZWxlY3QobGlzdDogTGlzdCwgc2VsZWN0ZWQ6IElkTGlzdCk6IHZvaWQge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IGFjdHVhbEluZGV4ID0gLTE7XG4gICAgICB3aGlsZSAoc2VsZWN0ZWQubGVuZ3RoID4gMCAmJiBpIDwgbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgIGFjdHVhbEluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihsaXN0W2ldLmlkKTtcbiAgICAgICAgIGlmIChhY3R1YWxJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBsaXN0W2ldLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGVjdGVkLnNwbGljZShhY3R1YWxJbmRleCwgMSk7XG4gICAgICAgICAgICBhY3R1YWxJbmRleCA9IC0xO1xuICAgICAgICAgfVxuICAgICAgICAgaSsrO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGdldElkc1RvTW92ZShsaXN0OiBMaXN0KTogSWRMaXN0IHtcbiAgICAgIHJldHVybiBsaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgaWYgKGN1cnIuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGN1cnIuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHByZXYucHVzaChjdXJyLmlkKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwgW10pO1xuICAgfVxuXG4gICBwcml2YXRlIG1vdmVJZHNGcm9tQWxsVG9TZWxlY3RlZChhbGw6IExpc3QsIHNlbGVjdGVkOiBMaXN0LCBpZHM6IElkTGlzdCk6IExpc3Qge1xuICAgICAgbGV0IGl0ZW1zOiBMaXN0ID0gYWxsLmZpbHRlcigoaXRlbSkgPT4gXy5pbmNsdWRlcyhpZHMsIGl0ZW0uaWQpKTtcbiAgICAgIHJldHVybiBfLnhvckJ5KHNlbGVjdGVkLCBfLmNsb25lRGVlcChpdGVtcyksICdpZCcpO1xuICAgfVxuXG4gICBwcml2YXRlIHJlbW92ZUlkc0Zyb21TZWxlY3RlZChzZWxlY3RlZDogTGlzdCwgaWRzOiBJZExpc3QpOiBMaXN0IHtcbiAgICAgIHJldHVybiBzZWxlY3RlZC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgIGlmICghXy5pbmNsdWRlcyhpZHMsIGN1cnIuaWQpKSB7XG4gICAgICAgICAgICBwcmV2LnB1c2goXy5jbG9uZShjdXJyKSk7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0sIFtdKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBvcmRlckxpc3RCeShsaXN0OiBMaXN0LCBieTogc3RyaW5nKTogTGlzdCB7XG4gICAgICByZXR1cm4gXy5zb3J0QnkobGlzdCwgYnkpO1xuICAgfVxuXG4gICBwcml2YXRlIGNhblNlbGVjdChzZWxlY3Rpb246IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQsIGxpc3Q6IExpc3QpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBzZWxlY3Rpb24gJiYgIXNlbGVjdGlvbi5kaXNhYmxlZCAmJiBsaXN0ICE9PSB1bmRlZmluZWQgJiYgbGlzdC5sZW5ndGggPiAwO1xuICAgfVxufVxuIl19