/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-search/st-search.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventWindowManager } from '../utils/event-window-manager';
import { debounceTime } from 'rxjs/operators';
import { StSearchEventOrigin } from './st-search.model';
/**
 * \@description {Component} [Search]
 *
 * The search component has been designed to allow user to find a specific content according to his needs.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * Search without filters
 *  <st-search [placeholder]="placeholder" [qaTag]="qaTag"
 *  [value]="searched" [debounce]="debounceTime" [minLength]="minLength"
 *  (search)="onSearchResult($event)"></st-search>
 *
 *
 * Search with filters
 *  <st-search [placeholder]="placeholder" [qaTag]="qaTag"
 *  [value]="searched" [debounce]="debounceTime" [minLength]="minLength" [filterOptions]="[
 *  { label: 'All', value: 1 },
 *  { label: 'Type ', value: 2 },
 *  { label: 'Color', value: 3 }
 *  ]" (search)="onSearchResult($event)"></st-search>
 * ```
 *
 */
var StSearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StSearchComponent, _super);
    function StSearchComponent(_render, cd) {
        var _this = _super.call(this, _render, cd) || this;
        _this._render = _render;
        _this.cd = cd;
        /**
         * \@Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list
         */
        _this.debounce = 0;
        /**
         * \@Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing
         */
        _this.liveSearch = true;
        /**
         * \@Input {number} [minLength=0] Minimum of characters typed by the user before launching the search
         */
        _this.minLength = 0;
        /**
         * \@Input {string} [placeholder='Search'] Text displayed in the search input
         */
        _this.placeholder = 'Search';
        /**
         * \@Input {boolean} [disabled=false] Boolean to enable or disable the search
         */
        _this.disabled = false;
        /**
         * \@Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing
         */
        _this.withAutocomplete = false;
        /**
         * \@Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing
         */
        _this.autocompleteList = [];
        /**
         * \@Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon
         */
        _this.showIcon = true;
        /**
         * \@Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
         * there are not any item with the typed text
         */
        _this.emptyAutocompleteListMessage = '';
        /**
         * \@Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
         * the text typed by the user and the filter value selected (only if filter is displayed)
         */
        _this.search = new EventEmitter();
        /**
         * \@Output {any} [value=''] Event emitted when filter is changed. It contains
         * the filter value selected
         */
        _this.selectFilter = new EventEmitter();
        /**
         * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
         */
        _this.keyBoardMove = false;
        _this.searchBox = new FormControl();
        _this.subscriptionSearch = undefined;
        _this.subscriptionSearchClearButton = undefined;
        _this.lastEmittedText = undefined;
        return _this;
    }
    Object.defineProperty(StSearchComponent.prototype, "menuId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag ? this.qaTag + '-autocomplete-menu' : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.value) {
            this.searchBox.setValue(this.value);
        }
        // Show clear button if have text
        this.subscriptionSearchClearButton = this.searchBox.valueChanges.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.showClear = (val && val.length > 0); }));
        this.checkDisabled();
        this.manageSubscription();
        if (this.filterOptions) {
            this.filter = this.filterOptions[0].value;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.checkDebounceChange(changes);
        this.checkValueChange(changes);
        this.checkDisableChange(changes);
        this.checkAutoCompleteMenuChange(changes);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StSearchComponent.prototype.onChangeFilter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.selectFilter.emit(value);
        this.emitValue(false, StSearchEventOrigin.FILTER);
    };
    /**
     * @return {?}
     */
    StSearchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.subscriptionSearch !== undefined) {
            this.subscriptionSearch.unsubscribe();
        }
        if (this.subscriptionSearchClearButton !== undefined) {
            this.subscriptionSearchClearButton.unsubscribe();
        }
        this.closeElement();
    };
    /**
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    StSearchComponent.prototype.launchSearch = /**
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    function (force, origin) {
        if (this.canSearch()) {
            this.showAutoCompleteMenu();
            this.emitValue(force, origin);
        }
        else {
            this.closeElement();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StSearchComponent.prototype.onKeyPress = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var key = event.keyCode || event.which;
        if (key === 13) {
            this.launchSearch(true, StSearchEventOrigin.ENTER);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StSearchComponent.prototype.changeOption = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item && item.label) {
            this.subscriptionSearch.unsubscribe();
            this.searchBox.setValue(item.value);
            this.cd.markForCheck();
            this.closeElement();
            this.emitValue(true, StSearchEventOrigin.LIST);
            this.manageSubscription();
        }
    };
    /**
     * @return {?}
     */
    StSearchComponent.prototype.clearInput = /**
     * @return {?}
     */
    function () {
        this.searchBox.setValue('');
        this.closeElement();
        this.emitValue(true, StSearchEventOrigin.INPUT);
    };
    /**
     * @return {?}
     */
    StSearchComponent.prototype.showAutoCompleteMenu = /**
     * @return {?}
     */
    function () {
        if (this.withAutocomplete && !this.isActive) {
            this.openElement();
        }
        if (this.searchBox.value === '') {
            this.closeElement();
        }
        this.cd.markForCheck();
    };
    /**
     * @private
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    StSearchComponent.prototype.emitValue = /**
     * @private
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    function (force, origin) {
        if (this.isEqualPrevious(force)) {
            this.lastEmittedText = this.searchBox.value;
            /** @type {?} */
            var newSearch = { text: this.lastEmittedText || '', origin: origin };
            if (this.filter) {
                newSearch.filter = this.filter;
            }
            this.search.emit(newSearch);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.checkDisabled = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.disabled) {
            this.searchBox.disable();
        }
        else {
            this.searchBox.enable();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.canSearch = /**
     * @private
     * @return {?}
     */
    function () {
        return this.isDefined() && !this.disabled && this.checkMins();
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.isDefined = /**
     * @private
     * @return {?}
     */
    function () {
        return this.searchBox && this.searchBox.value !== null && this.searchBox.value !== undefined;
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.checkMins = /**
     * @private
     * @return {?}
     */
    function () {
        return this.minLength <= (this.searchBox && this.searchBox.value && this.searchBox.value.length) ||
            this.searchBox.value.trim().length === 0;
    };
    /**
     * @private
     * @param {?} force
     * @return {?}
     */
    StSearchComponent.prototype.isEqualPrevious = /**
     * @private
     * @param {?} force
     * @return {?}
     */
    function (force) {
        return this.lastEmittedText !== this.searchBox.value || force;
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkValueChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.value) {
            if (this.subscriptionSearch) {
                this.subscriptionSearch.unsubscribe();
            }
            this.searchBox.setValue(changes.value.currentValue);
            this.manageSubscription();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkDebounceChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.debounce) {
            this.manageSubscription();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkDisableChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.disabled) {
            this.checkDisabled();
        }
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StSearchComponent.prototype.checkAutoCompleteMenuChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.autocompleteList) {
            this.cd.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StSearchComponent.prototype.manageSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.subscriptionSearch !== undefined) {
            this.subscriptionSearch.unsubscribe();
        }
        if (this.liveSearch) {
            this.subscriptionSearch = this.searchBox
                .valueChanges.pipe(debounceTime(this.debounce))
                .subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return _this.launchSearch(false, StSearchEventOrigin.INPUT); }));
        }
    };
    StSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-search',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-search sth-search\">\n   <st-select\n      *ngIf=\"filterOptions && filterOptions.length > 0\"\n      [options]=\"filterOptions\"\n      [(ngModel)]=\"filter\"\n      [disabled]=\"disabled\"\n      name=\"search-filter\"\n      (select)=\"onChangeFilter($event)\"\n      class=\"sth-search-filter st-search-filter\"\n      [ngClass]=\"{'disabled': disabled}\"\n   ></st-select>\n\n   <st-dropdown-menu [items]=\"autocompleteList\" [attr.id]=\"menuId\" class=\"st-search-box\" (change)=\"changeOption($event)\"\n                     [active]=\"isActive && (autocompleteList && autocompleteList.length || emptyAutocompleteListMessage !== '')\"\n                     [placement]=\"'bottom-start'\" [emptyListMessage]=\"emptyAutocompleteListMessage\"\n                     [keyBoardMove]=\"keyBoardMove\">\n      <div #buttonId>\n         <input [attr.id]=\"qaTag\" [formControl]=\"searchBox\" [placeholder]=\"placeholder\" (keypress)=\"onKeyPress($event)\"\n                (focus)=\"showAutoCompleteMenu()\"\n                class=\"st-search-input sth-search-input\"/>\n         <i class=\"st-search-icon sth-search-icon icon-search\" tabindex=\"0\" *ngIf=\"!showClear && showIcon\"></i>\n         <i class=\"st-search-icon sth-search-icon icon-cross\" tabindex=\"0\" *ngIf=\"showClear\" (mousedown)=\"clearInput()\"\n            (keyup.enter)=\"clearInput()\"></i>\n      </div>\n   </st-dropdown-menu>\n\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";input{outline:0;border:none;padding:0;height:40px}.st-search{position:relative;display:flex;min-width:100%}.st-search :invalid{box-shadow:none}.st-search-box{display:flex;flex:2 0}.st-search-input{padding-left:12px;padding-right:40px;width:100%}.st-search-filter{flex:auto 1;height:40px;padding:0;max-width:37%}.st-search-icon{position:absolute;right:10px;top:13px;cursor:pointer}.st-search-icon:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    StSearchComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    StSearchComponent.propDecorators = {
        debounce: [{ type: Input }],
        liveSearch: [{ type: Input }],
        minLength: [{ type: Input }],
        placeholder: [{ type: Input }],
        qaTag: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        withAutocomplete: [{ type: Input }],
        autocompleteList: [{ type: Input }],
        showIcon: [{ type: Input }],
        emptyAutocompleteListMessage: [{ type: Input }],
        filterOptions: [{ type: Input }],
        search: [{ type: Output }],
        selectFilter: [{ type: Output }],
        keyBoardMove: [{ type: Input }],
        _eventElementRef: [{ type: ViewChild, args: ['buttonId', { static: false },] }]
    };
    return StSearchComponent;
}(EventWindowManager));
export { StSearchComponent };
if (false) {
    /**
     * \@Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list
     * @type {?}
     */
    StSearchComponent.prototype.debounce;
    /**
     * \@Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing
     * @type {?}
     */
    StSearchComponent.prototype.liveSearch;
    /**
     * \@Input {number} [minLength=0] Minimum of characters typed by the user before launching the search
     * @type {?}
     */
    StSearchComponent.prototype.minLength;
    /**
     * \@Input {string} [placeholder='Search'] Text displayed in the search input
     * @type {?}
     */
    StSearchComponent.prototype.placeholder;
    /**
     * \@Input {string} [qaTag=''] Label used as id
     * @type {?}
     */
    StSearchComponent.prototype.qaTag;
    /**
     * \@Input {string} [value=''] Initial value of the search text
     * @type {?}
     */
    StSearchComponent.prototype.value;
    /**
     * \@Input {boolean} [disabled=false] Boolean to enable or disable the search
     * @type {?}
     */
    StSearchComponent.prototype.disabled;
    /**
     * \@Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing
     * @type {?}
     */
    StSearchComponent.prototype.withAutocomplete;
    /**
     * \@Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing
     * @type {?}
     */
    StSearchComponent.prototype.autocompleteList;
    /**
     * \@Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon
     * @type {?}
     */
    StSearchComponent.prototype.showIcon;
    /**
     * \@Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
     * there are not any item with the typed text
     * @type {?}
     */
    StSearchComponent.prototype.emptyAutocompleteListMessage;
    /**
     * \@Input {StDropDownMenuItem[]} [filterOptions=''] Options displayed at the filter select. If it is not introduced,
     * filter will not be displayed
     * @type {?}
     */
    StSearchComponent.prototype.filterOptions;
    /**
     * \@Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
     * the text typed by the user and the filter value selected (only if filter is displayed)
     * @type {?}
     */
    StSearchComponent.prototype.search;
    /**
     * \@Output {any} [value=''] Event emitted when filter is changed. It contains
     * the filter value selected
     * @type {?}
     */
    StSearchComponent.prototype.selectFilter;
    /**
     * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
     * @type {?}
     */
    StSearchComponent.prototype.keyBoardMove;
    /** @type {?} */
    StSearchComponent.prototype.searchBox;
    /** @type {?} */
    StSearchComponent.prototype.showClear;
    /** @type {?} */
    StSearchComponent.prototype.filter;
    /** @type {?} */
    StSearchComponent.prototype._eventElementRef;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.subscriptionSearch;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.subscriptionSearchClearButton;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.lastEmittedText;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype._render;
    /**
     * @type {?}
     * @private
     */
    StSearchComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtc2VhcmNoL3N0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFNBQVMsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBaUIsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJ2RTtJQU11Qyw2Q0FBa0I7SUFnRXRELDJCQUFvQixPQUFrQixFQUNsQixFQUFxQjtRQUR6QyxZQUVHLGtCQUFNLE9BQU8sRUFBRSxFQUFFLENBQUMsU0FDcEI7UUFIbUIsYUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixRQUFFLEdBQUYsRUFBRSxDQUFtQjs7OztRQS9EaEMsY0FBUSxHQUFXLENBQUMsQ0FBQzs7OztRQUdyQixnQkFBVSxHQUFZLElBQUksQ0FBQzs7OztRQUczQixlQUFTLEdBQVcsQ0FBQyxDQUFDOzs7O1FBR3RCLGlCQUFXLEdBQVcsUUFBUSxDQUFDOzs7O1FBUy9CLGNBQVEsR0FBWSxLQUFLLENBQUM7Ozs7UUFHMUIsc0JBQWdCLEdBQVksS0FBSyxDQUFDOzs7O1FBR2xDLHNCQUFnQixHQUF5QixFQUFFLENBQUM7Ozs7UUFHNUMsY0FBUSxHQUFhLElBQUksQ0FBQzs7Ozs7UUFLMUIsa0NB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OztJQUc5Qix1Q0FBb0M7Ozs7O0lBR3BDLHNDQUErQjs7Ozs7SUFHL0Isd0NBQXdDOzs7OztJQUd4QyxrQ0FBdUI7Ozs7O0lBR3ZCLGtDQUF1Qjs7Ozs7SUFHdkIscUNBQW1DOzs7OztJQUduQyw2Q0FBMkM7Ozs7O0lBRzNDLDZDQUFxRDs7Ozs7SUFHckQscUNBQW1DOzs7Ozs7SUFLbkMseURBQW1EOzs7Ozs7SUFLbkQsMENBQTZDOzs7Ozs7SUFLN0MsbUNBQWtGOzs7Ozs7SUFLbEYseUNBQW9FOzs7OztJQUlwRSx5Q0FBdUM7O0lBRXZDLHNDQUFrRDs7SUFDbEQsc0NBQTBCOztJQUMxQixtQ0FBc0I7O0lBQ3RCLDZDQUE0RTs7Ozs7SUFFNUUsK0NBQWlFOzs7OztJQUNqRSwwREFBNEU7Ozs7O0lBQzVFLDRDQUF3RDs7Ozs7SUFFNUMsb0NBQTBCOzs7OztJQUMxQiwrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ29tcG9uZW50LFxuICAgRWxlbWVudFJlZixcbiAgIEV2ZW50RW1pdHRlcixcbiAgIElucHV0LFxuICAgT25DaGFuZ2VzLFxuICAgT25EZXN0cm95LFxuICAgT25Jbml0LFxuICAgT3V0cHV0LFxuICAgUmVuZGVyZXIyLFxuICAgU2ltcGxlQ2hhbmdlcyxcbiAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRXZlbnRXaW5kb3dNYW5hZ2VyIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQtd2luZG93LW1hbmFnZXInO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3RTZWFyY2hFdmVudCwgU3RTZWFyY2hFdmVudE9yaWdpbiB9IGZyb20gJy4vc3Qtc2VhcmNoLm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1NlYXJjaF1cbiAqXG4gKiBUaGUgc2VhcmNoIGNvbXBvbmVudCBoYXMgYmVlbiBkZXNpZ25lZCB0byBhbGxvdyB1c2VyIHRvIGZpbmQgYSBzcGVjaWZpYyBjb250ZW50IGFjY29yZGluZyB0byBoaXMgbmVlZHMuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIFNlYXJjaCB3aXRob3V0IGZpbHRlcnNcbiAqICA8c3Qtc2VhcmNoIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIFtxYVRhZ109XCJxYVRhZ1wiXG4gKiAgW3ZhbHVlXT1cInNlYXJjaGVkXCIgW2RlYm91bmNlXT1cImRlYm91bmNlVGltZVwiIFttaW5MZW5ndGhdPVwibWluTGVuZ3RoXCJcbiAqICAoc2VhcmNoKT1cIm9uU2VhcmNoUmVzdWx0KCRldmVudClcIj48L3N0LXNlYXJjaD5cbiAqXG4gKlxuICogU2VhcmNoIHdpdGggZmlsdGVyc1xuICogIDxzdC1zZWFyY2ggW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3FhVGFnXT1cInFhVGFnXCJcbiAqICBbdmFsdWVdPVwic2VhcmNoZWRcIiBbZGVib3VuY2VdPVwiZGVib3VuY2VUaW1lXCIgW21pbkxlbmd0aF09XCJtaW5MZW5ndGhcIiBbZmlsdGVyT3B0aW9uc109XCJbXG4gKiAgeyBsYWJlbDogJ0FsbCcsIHZhbHVlOiAxIH0sXG4gKiAgeyBsYWJlbDogJ1R5cGUgJywgdmFsdWU6IDIgfSxcbiAqICB7IGxhYmVsOiAnQ29sb3InLCB2YWx1ZTogMyB9XG4gKiAgXVwiIChzZWFyY2gpPVwib25TZWFyY2hSZXN1bHQoJGV2ZW50KVwiPjwvc3Qtc2VhcmNoPlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3Qtc2VhcmNoJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3Qtc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFNlYXJjaENvbXBvbmVudCBleHRlbmRzIEV2ZW50V2luZG93TWFuYWdlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQge1xuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbZGVib3VuY2U9MF0gVGltZSBlbGFwc2VkIGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgZGlzcGxheWluZyB0aGUgYXV0b2NvbXBsZXRlIGxpc3QgKi9cbiAgIEBJbnB1dCgpIGRlYm91bmNlOiBudW1iZXIgPSAwO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbbGl2ZVNlYXJjaD10cnVlXSBCb29sZWFuIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhdXRvbWF0aWMgc2VhcmNoIHdoaWxlIHRoZSB1c2VyIGlzIHR5cGluZyAqL1xuICAgQElucHV0KCkgbGl2ZVNlYXJjaDogYm9vbGVhbiA9IHRydWU7XG5cbiAgIC8qKiBASW5wdXQge251bWJlcn0gW21pbkxlbmd0aD0wXSBNaW5pbXVtIG9mIGNoYXJhY3RlcnMgdHlwZWQgYnkgdGhlIHVzZXIgYmVmb3JlIGxhdW5jaGluZyB0aGUgc2VhcmNoICovXG4gICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3BsYWNlaG9sZGVyPSdTZWFyY2gnXSBUZXh0IGRpc3BsYXllZCBpbiB0aGUgc2VhcmNoIGlucHV0ICovXG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJ1NlYXJjaCc7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3FhVGFnPScnXSBMYWJlbCB1c2VkIGFzIGlkICovXG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFt2YWx1ZT0nJ10gSW5pdGlhbCB2YWx1ZSBvZiB0aGUgc2VhcmNoIHRleHQgKi9cbiAgIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtkaXNhYmxlZD1mYWxzZV0gQm9vbGVhbiB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgc2VhcmNoICovXG4gICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbd2l0aEF1dG9jb21wbGV0ZT1mYWxzZV0gRW5hYmxlIG9yIGRpc2FibGUgdGhlIGF1dG9jb21wbGV0ZSBsaXN0IHdoZW4gdXNlciBpcyB0eXBpbmcgKi9cbiAgIEBJbnB1dCgpIHdpdGhBdXRvY29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgLyoqIEBJbnB1dCB7U3REcm9wRG93bk1lbnVJdGVtW119IFthdXRvY29tcGxldGVMaXN0PScnXSBMaXN0IG9mIGl0ZW1zIGRpc3BsYXllZCBpbiB0aGUgYXV0b2NvbXBsZXRlIGxpc3Qgd2hlbiB1c2VyIGlzIHR5cGluZyAqL1xuICAgQElucHV0KCkgYXV0b2NvbXBsZXRlTGlzdDogU3REcm9wRG93bk1lbnVJdGVtW10gPSBbXTtcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3Nob3dJY29uPXRydWVdIEJvb2xlYW4gdG8gaGlkZS9zaG93IHRoZSBsb3VwZSBpY29uICovXG4gICBASW5wdXQoKSBzaG93SWNvbjogYm9vbGVhbiA9ICB0cnVlO1xuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtlbXB0eUF1dG9jb21wbGV0ZUxpc3RNZXNzYWdlPScnXSBNZXNzYWdlIGRpc3BsYXllZCB3aGVuIHRoZSBhdXRvY29tcGxldGUgbGlzdCBpcyBlbmFibGVkIGJ1dFxuICAgICogdGhlcmUgYXJlIG5vdCBhbnkgaXRlbSB3aXRoIHRoZSB0eXBlZCB0ZXh0XG4gICAgKi9cbiAgIEBJbnB1dCgpIGVtcHR5QXV0b2NvbXBsZXRlTGlzdE1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuXG4gICAvKiogQElucHV0IHtTdERyb3BEb3duTWVudUl0ZW1bXX0gW2ZpbHRlck9wdGlvbnM9JyddIE9wdGlvbnMgZGlzcGxheWVkIGF0IHRoZSBmaWx0ZXIgc2VsZWN0LiBJZiBpdCBpcyBub3QgaW50cm9kdWNlZCxcbiAgICAqIGZpbHRlciB3aWxsIG5vdCBiZSBkaXNwbGF5ZWRcbiAgICAqL1xuICAgQElucHV0KCkgZmlsdGVyT3B0aW9uczogU3REcm9wRG93bk1lbnVJdGVtW107XG5cbiAgIC8qKiBAT3V0cHV0IHsgT2JqZWN0KGZpbHRlcj86IHN0cmluZywgdGV4dDogc3RyaW5nKX0gW3NlYXJjaD0nJ10gRXZlbnQgZW1pdHRlZCB3aGVuIHNlYXJjaCBpcyBsYXVuY2hlZC4gSXQgY29udGFpbnNcbiAgICAqIHRoZSB0ZXh0IHR5cGVkIGJ5IHRoZSB1c2VyIGFuZCB0aGUgZmlsdGVyIHZhbHVlIHNlbGVjdGVkIChvbmx5IGlmIGZpbHRlciBpcyBkaXNwbGF5ZWQpXG4gICAgKi9cbiAgIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxTdFNlYXJjaEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RTZWFyY2hFdmVudD4oKTtcblxuICAgLyoqIEBPdXRwdXQge2FueX0gW3ZhbHVlPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gZmlsdGVyIGlzIGNoYW5nZWQuIEl0IGNvbnRhaW5zXG4gICAgKiB0aGUgZmlsdGVyIHZhbHVlIHNlbGVjdGVkXG4gICAgKi9cbiAgIEBPdXRwdXQoKSBzZWxlY3RGaWx0ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtrZXlCb2FyZE1vdmU9ZmFsc2VdIEl0IGlzIG5lZWRlZCB0byBhY3RpdmF0ZSBuYXZpZ2F0aW9uIHRocm91Z2ggb3B0aW9ucyB1c2luZyB0aGUga2V5Ym9hcmRcbiAgICAqL1xuICAgQElucHV0KCkga2V5Qm9hcmRNb3ZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIHB1YmxpYyBzZWFyY2hCb3g6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG4gICBwdWJsaWMgc2hvd0NsZWFyOiBib29sZWFuO1xuICAgcHVibGljIGZpbHRlcjogc3RyaW5nO1xuICAgQFZpZXdDaGlsZCgnYnV0dG9uSWQnLCB7c3RhdGljOiBmYWxzZX0pIHB1YmxpYyBfZXZlbnRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gICBwcml2YXRlIHN1YnNjcmlwdGlvblNlYXJjaDogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25TZWFyY2hDbGVhckJ1dHRvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgcHJpdmF0ZSBsYXN0RW1pdHRlZFRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgc3VwZXIoX3JlbmRlciwgY2QpO1xuICAgfVxuXG4gICBnZXQgbWVudUlkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5xYVRhZyA/IHRoaXMucWFUYWcgKyAnLWF1dG9jb21wbGV0ZS1tZW51JyA6IG51bGw7XG4gICB9XG5cbiAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICB0aGlzLnNlYXJjaEJveC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIC8vIFNob3cgY2xlYXIgYnV0dG9uIGlmIGhhdmUgdGV4dFxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWFyY2hDbGVhckJ1dHRvbiA9IHRoaXMuc2VhcmNoQm94LnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbCkgPT4gdGhpcy5zaG93Q2xlYXIgPSAodmFsICYmIHZhbC5sZW5ndGggPiAwKSk7XG4gICAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICAgIHRoaXMubWFuYWdlU3Vic2NyaXB0aW9uKCk7XG4gICAgICBpZiAodGhpcy5maWx0ZXJPcHRpb25zKSB7XG4gICAgICAgICB0aGlzLmZpbHRlciA9IHRoaXMuZmlsdGVyT3B0aW9uc1swXS52YWx1ZTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hlY2tEZWJvdW5jZUNoYW5nZShjaGFuZ2VzKTtcbiAgICAgIHRoaXMuY2hlY2tWYWx1ZUNoYW5nZShjaGFuZ2VzKTtcbiAgICAgIHRoaXMuY2hlY2tEaXNhYmxlQ2hhbmdlKGNoYW5nZXMpO1xuICAgICAgdGhpcy5jaGVja0F1dG9Db21wbGV0ZU1lbnVDaGFuZ2UoY2hhbmdlcyk7XG4gICB9XG5cbiAgIHB1YmxpYyBvbkNoYW5nZUZpbHRlcih2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnNlbGVjdEZpbHRlci5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuZW1pdFZhbHVlKGZhbHNlLCBTdFNlYXJjaEV2ZW50T3JpZ2luLkZJTFRFUik7XG4gICB9XG5cbiAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvblNlYXJjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlYXJjaC51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoQ2xlYXJCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWFyY2hDbGVhckJ1dHRvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgIH1cblxuICAgcHVibGljIGxhdW5jaFNlYXJjaChmb3JjZTogYm9vbGVhbiwgb3JpZ2luOiBTdFNlYXJjaEV2ZW50T3JpZ2luKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5jYW5TZWFyY2goKSkge1xuICAgICAgICAgdGhpcy5zaG93QXV0b0NvbXBsZXRlTWVudSgpO1xuICAgICAgICAgdGhpcy5lbWl0VmFsdWUoZm9yY2UsIG9yaWdpbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHVibGljIG9uS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgIGxldCBrZXk6IG51bWJlciA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG4gICAgICBpZiAoa2V5ID09PSAxMykge1xuICAgICAgICAgdGhpcy5sYXVuY2hTZWFyY2godHJ1ZSwgU3RTZWFyY2hFdmVudE9yaWdpbi5FTlRFUik7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBjaGFuZ2VPcHRpb24oaXRlbTogU3REcm9wRG93bk1lbnVJdGVtKTogdm9pZCB7XG4gICAgICBpZiAoaXRlbSAmJiBpdGVtLmxhYmVsKSB7XG4gICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlYXJjaC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgdGhpcy5zZWFyY2hCb3guc2V0VmFsdWUoaXRlbS52YWx1ZSk7XG4gICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgICAgICAgIHRoaXMuZW1pdFZhbHVlKHRydWUsIFN0U2VhcmNoRXZlbnRPcmlnaW4uTElTVCk7XG4gICAgICAgICB0aGlzLm1hbmFnZVN1YnNjcmlwdGlvbigpO1xuICAgICAgfVxuICAgfVxuXG4gICBwdWJsaWMgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VhcmNoQm94LnNldFZhbHVlKCcnKTtcbiAgICAgIHRoaXMuY2xvc2VFbGVtZW50KCk7XG4gICAgICB0aGlzLmVtaXRWYWx1ZSh0cnVlLCBTdFNlYXJjaEV2ZW50T3JpZ2luLklOUFVUKTtcbiAgIH1cblxuICAgcHVibGljIHNob3dBdXRvQ29tcGxldGVNZW51KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMud2l0aEF1dG9jb21wbGV0ZSAmJiAhdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgdGhpcy5vcGVuRWxlbWVudCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VhcmNoQm94LnZhbHVlID09PSAnJykge1xuICAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgZW1pdFZhbHVlKGZvcmNlOiBib29sZWFuLCBvcmlnaW46IFN0U2VhcmNoRXZlbnRPcmlnaW4pOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlzRXF1YWxQcmV2aW91cyhmb3JjZSkpIHtcbiAgICAgICAgIHRoaXMubGFzdEVtaXR0ZWRUZXh0ID0gdGhpcy5zZWFyY2hCb3gudmFsdWU7XG4gICAgICAgICBsZXQgbmV3U2VhcmNoOiBTdFNlYXJjaEV2ZW50ID0ge3RleHQ6IHRoaXMubGFzdEVtaXR0ZWRUZXh0IHx8ICcnLCBvcmlnaW46IG9yaWdpbn07XG4gICAgICAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgICAgIG5ld1NlYXJjaC5maWx0ZXIgPSB0aGlzLmZpbHRlcjtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQobmV3U2VhcmNoKTtcbiAgICAgIH1cbiAgIH1cblxuXG5cbiAgIHByaXZhdGUgY2hlY2tEaXNhYmxlZCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLnNlYXJjaEJveC5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5zZWFyY2hCb3guZW5hYmxlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgY2FuU2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXNEZWZpbmVkKCkgJiYgIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5jaGVja01pbnMoKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBpc0RlZmluZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hCb3ggJiYgdGhpcy5zZWFyY2hCb3gudmFsdWUgIT09IG51bGwgJiYgdGhpcy5zZWFyY2hCb3gudmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja01pbnMoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5taW5MZW5ndGggPD0gKHRoaXMuc2VhcmNoQm94ICYmIHRoaXMuc2VhcmNoQm94LnZhbHVlICYmIHRoaXMuc2VhcmNoQm94LnZhbHVlLmxlbmd0aCkgfHxcbiAgICAgICAgIHRoaXMuc2VhcmNoQm94LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDA7XG4gICB9XG5cbiAgIHByaXZhdGUgaXNFcXVhbFByZXZpb3VzKGZvcmNlOiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RW1pdHRlZFRleHQgIT09IHRoaXMuc2VhcmNoQm94LnZhbHVlIHx8IGZvcmNlO1xuICAgfVxuXG4gICBwcml2YXRlIGNoZWNrVmFsdWVDaGFuZ2UoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy52YWx1ZSkge1xuICAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlYXJjaC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5zZWFyY2hCb3guc2V0VmFsdWUoY2hhbmdlcy52YWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICAgdGhpcy5tYW5hZ2VTdWJzY3JpcHRpb24oKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja0RlYm91bmNlQ2hhbmdlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZGVib3VuY2UpIHtcbiAgICAgICAgIHRoaXMubWFuYWdlU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgY2hlY2tEaXNhYmxlQ2hhbmdlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuZGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGNoZWNrQXV0b0NvbXBsZXRlTWVudUNoYW5nZShjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmF1dG9jb21wbGV0ZUxpc3QpIHtcbiAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgbWFuYWdlU3Vic2NyaXB0aW9uKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5saXZlU2VhcmNoKSB7XG4gICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlYXJjaCA9IHRoaXMuc2VhcmNoQm94XG4gICAgICAgICAgICAudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWJvdW5jZSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudCkgPT4gdGhpcy5sYXVuY2hTZWFyY2goZmFsc2UsICBTdFNlYXJjaEV2ZW50T3JpZ2luLklOUFVUKSk7XG4gICAgICB9XG4gICB9XG59XG4iXX0=