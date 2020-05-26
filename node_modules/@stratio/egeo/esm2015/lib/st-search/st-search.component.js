/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-search/st-search.component.ts
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
export class StSearchComponent extends EventWindowManager {
    /**
     * @param {?} _render
     * @param {?} cd
     */
    constructor(_render, cd) {
        super(_render, cd);
        this._render = _render;
        this.cd = cd;
        /**
         * \@Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list
         */
        this.debounce = 0;
        /**
         * \@Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing
         */
        this.liveSearch = true;
        /**
         * \@Input {number} [minLength=0] Minimum of characters typed by the user before launching the search
         */
        this.minLength = 0;
        /**
         * \@Input {string} [placeholder='Search'] Text displayed in the search input
         */
        this.placeholder = 'Search';
        /**
         * \@Input {boolean} [disabled=false] Boolean to enable or disable the search
         */
        this.disabled = false;
        /**
         * \@Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing
         */
        this.withAutocomplete = false;
        /**
         * \@Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing
         */
        this.autocompleteList = [];
        /**
         * \@Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon
         */
        this.showIcon = true;
        /**
         * \@Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
         * there are not any item with the typed text
         */
        this.emptyAutocompleteListMessage = '';
        /**
         * \@Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
         * the text typed by the user and the filter value selected (only if filter is displayed)
         */
        this.search = new EventEmitter();
        /**
         * \@Output {any} [value=''] Event emitted when filter is changed. It contains
         * the filter value selected
         */
        this.selectFilter = new EventEmitter();
        /**
         * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
         */
        this.keyBoardMove = false;
        this.searchBox = new FormControl();
        this.subscriptionSearch = undefined;
        this.subscriptionSearchClearButton = undefined;
        this.lastEmittedText = undefined;
    }
    /**
     * @return {?}
     */
    get menuId() {
        return this.qaTag ? this.qaTag + '-autocomplete-menu' : null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.value) {
            this.searchBox.setValue(this.value);
        }
        // Show clear button if have text
        this.subscriptionSearchClearButton = this.searchBox.valueChanges.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.showClear = (val && val.length > 0)));
        this.checkDisabled();
        this.manageSubscription();
        if (this.filterOptions) {
            this.filter = this.filterOptions[0].value;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.checkDebounceChange(changes);
        this.checkValueChange(changes);
        this.checkDisableChange(changes);
        this.checkAutoCompleteMenuChange(changes);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChangeFilter(value) {
        this.selectFilter.emit(value);
        this.emitValue(false, StSearchEventOrigin.FILTER);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscriptionSearch !== undefined) {
            this.subscriptionSearch.unsubscribe();
        }
        if (this.subscriptionSearchClearButton !== undefined) {
            this.subscriptionSearchClearButton.unsubscribe();
        }
        this.closeElement();
    }
    /**
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    launchSearch(force, origin) {
        if (this.canSearch()) {
            this.showAutoCompleteMenu();
            this.emitValue(force, origin);
        }
        else {
            this.closeElement();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyPress(event) {
        /** @type {?} */
        let key = event.keyCode || event.which;
        if (key === 13) {
            this.launchSearch(true, StSearchEventOrigin.ENTER);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    changeOption(item) {
        if (item && item.label) {
            this.subscriptionSearch.unsubscribe();
            this.searchBox.setValue(item.value);
            this.cd.markForCheck();
            this.closeElement();
            this.emitValue(true, StSearchEventOrigin.LIST);
            this.manageSubscription();
        }
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.searchBox.setValue('');
        this.closeElement();
        this.emitValue(true, StSearchEventOrigin.INPUT);
    }
    /**
     * @return {?}
     */
    showAutoCompleteMenu() {
        if (this.withAutocomplete && !this.isActive) {
            this.openElement();
        }
        if (this.searchBox.value === '') {
            this.closeElement();
        }
        this.cd.markForCheck();
    }
    /**
     * @private
     * @param {?} force
     * @param {?} origin
     * @return {?}
     */
    emitValue(force, origin) {
        if (this.isEqualPrevious(force)) {
            this.lastEmittedText = this.searchBox.value;
            /** @type {?} */
            let newSearch = { text: this.lastEmittedText || '', origin: origin };
            if (this.filter) {
                newSearch.filter = this.filter;
            }
            this.search.emit(newSearch);
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkDisabled() {
        if (this.disabled) {
            this.searchBox.disable();
        }
        else {
            this.searchBox.enable();
        }
    }
    /**
     * @private
     * @return {?}
     */
    canSearch() {
        return this.isDefined() && !this.disabled && this.checkMins();
    }
    /**
     * @private
     * @return {?}
     */
    isDefined() {
        return this.searchBox && this.searchBox.value !== null && this.searchBox.value !== undefined;
    }
    /**
     * @private
     * @return {?}
     */
    checkMins() {
        return this.minLength <= (this.searchBox && this.searchBox.value && this.searchBox.value.length) ||
            this.searchBox.value.trim().length === 0;
    }
    /**
     * @private
     * @param {?} force
     * @return {?}
     */
    isEqualPrevious(force) {
        return this.lastEmittedText !== this.searchBox.value || force;
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    checkValueChange(changes) {
        if (changes && changes.value) {
            if (this.subscriptionSearch) {
                this.subscriptionSearch.unsubscribe();
            }
            this.searchBox.setValue(changes.value.currentValue);
            this.manageSubscription();
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    checkDebounceChange(changes) {
        if (changes && changes.debounce) {
            this.manageSubscription();
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    checkDisableChange(changes) {
        if (changes && changes.disabled) {
            this.checkDisabled();
        }
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    checkAutoCompleteMenuChange(changes) {
        if (changes && changes.autocompleteList) {
            this.cd.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    manageSubscription() {
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
            (event) => this.launchSearch(false, StSearchEventOrigin.INPUT)));
        }
    }
}
StSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-search',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-search sth-search\">\n   <st-select\n      *ngIf=\"filterOptions && filterOptions.length > 0\"\n      [options]=\"filterOptions\"\n      [(ngModel)]=\"filter\"\n      [disabled]=\"disabled\"\n      name=\"search-filter\"\n      (select)=\"onChangeFilter($event)\"\n      class=\"sth-search-filter st-search-filter\"\n      [ngClass]=\"{'disabled': disabled}\"\n   ></st-select>\n\n   <st-dropdown-menu [items]=\"autocompleteList\" [attr.id]=\"menuId\" class=\"st-search-box\" (change)=\"changeOption($event)\"\n                     [active]=\"isActive && (autocompleteList && autocompleteList.length || emptyAutocompleteListMessage !== '')\"\n                     [placement]=\"'bottom-start'\" [emptyListMessage]=\"emptyAutocompleteListMessage\"\n                     [keyBoardMove]=\"keyBoardMove\">\n      <div #buttonId>\n         <input [attr.id]=\"qaTag\" [formControl]=\"searchBox\" [placeholder]=\"placeholder\" (keypress)=\"onKeyPress($event)\"\n                (focus)=\"showAutoCompleteMenu()\"\n                class=\"st-search-input sth-search-input\"/>\n         <i class=\"st-search-icon sth-search-icon icon-search\" tabindex=\"0\" *ngIf=\"!showClear && showIcon\"></i>\n         <i class=\"st-search-icon sth-search-icon icon-cross\" tabindex=\"0\" *ngIf=\"showClear\" (mousedown)=\"clearInput()\"\n            (keyup.enter)=\"clearInput()\"></i>\n      </div>\n   </st-dropdown-menu>\n\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";input{outline:0;border:none;padding:0;height:40px}.st-search{position:relative;display:flex;min-width:100%}.st-search :invalid{box-shadow:none}.st-search-box{display:flex;flex:2 0}.st-search-input{padding-left:12px;padding-right:40px;width:100%}.st-search-filter{flex:auto 1;height:40px;padding:0;max-width:37%}.st-search-icon{position:absolute;right:10px;top:13px;cursor:pointer}.st-search-icon:focus{outline:0}"]
            }] }
];
/** @nocollapse */
StSearchComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtc2VhcmNoL3N0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFpQixtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQ3ZFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxrQkFBa0I7Ozs7O0lBZ0V0RCxZQUFvQixPQUFrQixFQUNsQixFQUFxQjtRQUN0QyxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRkYsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixPQUFFLEdBQUYsRUFBRSxDQUFtQjs7OztRQS9EaEMsYUFBUSxHQUFXLENBQUMsQ0FBQzs7OztRQUdyQixlQUFVLEdBQVksSUFBSSxDQUFDOzs7O1FBRzNCLGNBQVMsR0FBVyxDQUFDLENBQUM7Ozs7UUFHdEIsZ0JBQVcsR0FBVyxRQUFRLENBQUM7Ozs7UUFTL0IsYUFBUSxHQUFZLEtBQUssQ0FBQzs7OztRQUcxQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFHbEMscUJBQWdCLEdBQXlCLEVBQUUsQ0FBQzs7OztRQUc1QyxhQUFRLEdBQWEsSUFBSSxDQUFD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QUU1RSwrQ0FBaUU7Ozs7O0lBQ2pFLDBEQUE0RTs7Ozs7SUFDNUUsNENBQXdEOzs7OztJQUU1QyxvQ0FBMEI7Ozs7O0lBQzFCLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDb21wb25lbnQsXG4gICBFbGVtZW50UmVmLFxuICAgRXZlbnRFbWl0dGVyLFxuICAgSW5wdXQsXG4gICBPbkNoYW5nZXMsXG4gICBPbkRlc3Ryb3ksXG4gICBPbkluaXQsXG4gICBPdXRwdXQsXG4gICBSZW5kZXJlcjIsXG4gICBTaW1wbGVDaGFuZ2VzLFxuICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVJdGVtIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LmludGVyZmFjZSc7XG5pbXBvcnQgeyBFdmVudFdpbmRvd01hbmFnZXIgfSBmcm9tICcuLi91dGlscy9ldmVudC13aW5kb3ctbWFuYWdlcic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdFNlYXJjaEV2ZW50LCBTdFNlYXJjaEV2ZW50T3JpZ2luIH0gZnJvbSAnLi9zdC1zZWFyY2gubW9kZWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbU2VhcmNoXVxuICpcbiAqIFRoZSBzZWFyY2ggY29tcG9uZW50IGhhcyBiZWVuIGRlc2lnbmVkIHRvIGFsbG93IHVzZXIgdG8gZmluZCBhIHNwZWNpZmljIGNvbnRlbnQgYWNjb3JkaW5nIHRvIGhpcyBuZWVkcy5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogU2VhcmNoIHdpdGhvdXQgZmlsdGVyc1xuICogIDxzdC1zZWFyY2ggW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgW3FhVGFnXT1cInFhVGFnXCJcbiAqICBbdmFsdWVdPVwic2VhcmNoZWRcIiBbZGVib3VuY2VdPVwiZGVib3VuY2VUaW1lXCIgW21pbkxlbmd0aF09XCJtaW5MZW5ndGhcIlxuICogIChzZWFyY2gpPVwib25TZWFyY2hSZXN1bHQoJGV2ZW50KVwiPjwvc3Qtc2VhcmNoPlxuICpcbiAqXG4gKiBTZWFyY2ggd2l0aCBmaWx0ZXJzXG4gKiAgPHN0LXNlYXJjaCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbcWFUYWddPVwicWFUYWdcIlxuICogIFt2YWx1ZV09XCJzZWFyY2hlZFwiIFtkZWJvdW5jZV09XCJkZWJvdW5jZVRpbWVcIiBbbWluTGVuZ3RoXT1cIm1pbkxlbmd0aFwiIFtmaWx0ZXJPcHRpb25zXT1cIltcbiAqICB7IGxhYmVsOiAnQWxsJywgdmFsdWU6IDEgfSxcbiAqICB7IGxhYmVsOiAnVHlwZSAnLCB2YWx1ZTogMiB9LFxuICogIHsgbGFiZWw6ICdDb2xvcicsIHZhbHVlOiAzIH1cbiAqICBdXCIgKHNlYXJjaCk9XCJvblNlYXJjaFJlc3VsdCgkZXZlbnQpXCI+PC9zdC1zZWFyY2g+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1zZWFyY2gnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1zZWFyY2guY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0U2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgRXZlbnRXaW5kb3dNYW5hZ2VyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gICAvKiogQElucHV0IHtudW1iZXJ9IFtkZWJvdW5jZT0wXSBUaW1lIGVsYXBzZWQgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSBkaXNwbGF5aW5nIHRoZSBhdXRvY29tcGxldGUgbGlzdCAqL1xuICAgQElucHV0KCkgZGVib3VuY2U6IG51bWJlciA9IDA7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtsaXZlU2VhcmNoPXRydWVdIEJvb2xlYW4gdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGF1dG9tYXRpYyBzZWFyY2ggd2hpbGUgdGhlIHVzZXIgaXMgdHlwaW5nICovXG4gICBASW5wdXQoKSBsaXZlU2VhcmNoOiBib29sZWFuID0gdHJ1ZTtcblxuICAgLyoqIEBJbnB1dCB7bnVtYmVyfSBbbWluTGVuZ3RoPTBdIE1pbmltdW0gb2YgY2hhcmFjdGVycyB0eXBlZCBieSB0aGUgdXNlciBiZWZvcmUgbGF1bmNoaW5nIHRoZSBzZWFyY2ggKi9cbiAgIEBJbnB1dCgpIG1pbkxlbmd0aDogbnVtYmVyID0gMDtcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcGxhY2Vob2xkZXI9J1NlYXJjaCddIFRleHQgZGlzcGxheWVkIGluIHRoZSBzZWFyY2ggaW5wdXQgKi9cbiAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnU2VhcmNoJztcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcWFUYWc9JyddIExhYmVsIHVzZWQgYXMgaWQgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3ZhbHVlPScnXSBJbml0aWFsIHZhbHVlIG9mIHRoZSBzZWFyY2ggdGV4dCAqL1xuICAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2Rpc2FibGVkPWZhbHNlXSBCb29sZWFuIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBzZWFyY2ggKi9cbiAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFt3aXRoQXV0b2NvbXBsZXRlPWZhbHNlXSBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYXV0b2NvbXBsZXRlIGxpc3Qgd2hlbiB1c2VyIGlzIHR5cGluZyAqL1xuICAgQElucHV0KCkgd2l0aEF1dG9jb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAvKiogQElucHV0IHtTdERyb3BEb3duTWVudUl0ZW1bXX0gW2F1dG9jb21wbGV0ZUxpc3Q9JyddIExpc3Qgb2YgaXRlbXMgZGlzcGxheWVkIGluIHRoZSBhdXRvY29tcGxldGUgbGlzdCB3aGVuIHVzZXIgaXMgdHlwaW5nICovXG4gICBASW5wdXQoKSBhdXRvY29tcGxldGVMaXN0OiBTdERyb3BEb3duTWVudUl0ZW1bXSA9IFtdO1xuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2hvd0ljb249dHJ1ZV0gQm9vbGVhbiB0byBoaWRlL3Nob3cgdGhlIGxvdXBlIGljb24gKi9cbiAgIEBJbnB1dCgpIHNob3dJY29uOiBib29sZWFuID0gIHRydWU7XG5cbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2VtcHR5QXV0b2NvbXBsZXRlTGlzdE1lc3NhZ2U9JyddIE1lc3NhZ2UgZGlzcGxheWVkIHdoZW4gdGhlIGF1dG9jb21wbGV0ZSBsaXN0IGlzIGVuYWJsZWQgYnV0XG4gICAgKiB0aGVyZSBhcmUgbm90IGFueSBpdGVtIHdpdGggdGhlIHR5cGVkIHRleHRcbiAgICAqL1xuICAgQElucHV0KCkgZW1wdHlBdXRvY29tcGxldGVMaXN0TWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgIC8qKiBASW5wdXQge1N0RHJvcERvd25NZW51SXRlbVtdfSBbZmlsdGVyT3B0aW9ucz0nJ10gT3B0aW9ucyBkaXNwbGF5ZWQgYXQgdGhlIGZpbHRlciBzZWxlY3QuIElmIGl0IGlzIG5vdCBpbnRyb2R1Y2VkLFxuICAgICogZmlsdGVyIHdpbGwgbm90IGJlIGRpc3BsYXllZFxuICAgICovXG4gICBASW5wdXQoKSBmaWx0ZXJPcHRpb25zOiBTdERyb3BEb3duTWVudUl0ZW1bXTtcblxuICAgLyoqIEBPdXRwdXQgeyBPYmplY3QoZmlsdGVyPzogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpfSBbc2VhcmNoPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gc2VhcmNoIGlzIGxhdW5jaGVkLiBJdCBjb250YWluc1xuICAgICogdGhlIHRleHQgdHlwZWQgYnkgdGhlIHVzZXIgYW5kIHRoZSBmaWx0ZXIgdmFsdWUgc2VsZWN0ZWQgKG9ubHkgaWYgZmlsdGVyIGlzIGRpc3BsYXllZClcbiAgICAqL1xuICAgQE91dHB1dCgpIHNlYXJjaDogRXZlbnRFbWl0dGVyPFN0U2VhcmNoRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFNlYXJjaEV2ZW50PigpO1xuXG4gICAvKiogQE91dHB1dCB7YW55fSBbdmFsdWU9JyddIEV2ZW50IGVtaXR0ZWQgd2hlbiBmaWx0ZXIgaXMgY2hhbmdlZC4gSXQgY29udGFpbnNcbiAgICAqIHRoZSBmaWx0ZXIgdmFsdWUgc2VsZWN0ZWRcbiAgICAqL1xuICAgQE91dHB1dCgpIHNlbGVjdEZpbHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2tleUJvYXJkTW92ZT1mYWxzZV0gSXQgaXMgbmVlZGVkIHRvIGFjdGl2YXRlIG5hdmlnYXRpb24gdGhyb3VnaCBvcHRpb25zIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgICovXG4gICBASW5wdXQoKSBrZXlCb2FyZE1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgcHVibGljIHNlYXJjaEJveDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgIHB1YmxpYyBzaG93Q2xlYXI6IGJvb2xlYW47XG4gICBwdWJsaWMgZmlsdGVyOiBzdHJpbmc7XG4gICBAVmlld0NoaWxkKCdidXR0b25JZCcsIHtzdGF0aWM6IGZhbHNlfSkgcHVibGljIF9ldmVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgIHByaXZhdGUgc3Vic2NyaXB0aW9uU2VhcmNoOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICBwcml2YXRlIHN1YnNjcmlwdGlvblNlYXJjaENsZWFyQnV0dG9uOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICBwcml2YXRlIGxhc3RFbWl0dGVkVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICBzdXBlcihfcmVuZGVyLCBjZCk7XG4gICB9XG5cbiAgIGdldCBtZW51SWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnID8gdGhpcy5xYVRhZyArICctYXV0b2NvbXBsZXRlLW1lbnUnIDogbnVsbDtcbiAgIH1cblxuICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgIHRoaXMuc2VhcmNoQm94LnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgICAgLy8gU2hvdyBjbGVhciBidXR0b24gaWYgaGF2ZSB0ZXh0XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvblNlYXJjaENsZWFyQnV0dG9uID0gdGhpcy5zZWFyY2hCb3gudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsKSA9PiB0aGlzLnNob3dDbGVhciA9ICh2YWwgJiYgdmFsLmxlbmd0aCA+IDApKTtcbiAgICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgICAgdGhpcy5tYW5hZ2VTdWJzY3JpcHRpb24oKTtcbiAgICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbnMpIHtcbiAgICAgICAgIHRoaXMuZmlsdGVyID0gdGhpcy5maWx0ZXJPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgfVxuICAgfVxuXG4gICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgdGhpcy5jaGVja0RlYm91bmNlQ2hhbmdlKGNoYW5nZXMpO1xuICAgICAgdGhpcy5jaGVja1ZhbHVlQ2hhbmdlKGNoYW5nZXMpO1xuICAgICAgdGhpcy5jaGVja0Rpc2FibGVDaGFuZ2UoY2hhbmdlcyk7XG4gICAgICB0aGlzLmNoZWNrQXV0b0NvbXBsZXRlTWVudUNoYW5nZShjaGFuZ2VzKTtcbiAgIH1cblxuICAgcHVibGljIG9uQ2hhbmdlRmlsdGVyKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsdGVyLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5lbWl0VmFsdWUoZmFsc2UsIFN0U2VhcmNoRXZlbnRPcmlnaW4uRklMVEVSKTtcbiAgIH1cblxuICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TZWFyY2hDbGVhckJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblNlYXJjaENsZWFyQnV0dG9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlRWxlbWVudCgpO1xuICAgfVxuXG4gICBwdWJsaWMgbGF1bmNoU2VhcmNoKGZvcmNlOiBib29sZWFuLCBvcmlnaW46IFN0U2VhcmNoRXZlbnRPcmlnaW4pOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmNhblNlYXJjaCgpKSB7XG4gICAgICAgICB0aGlzLnNob3dBdXRvQ29tcGxldGVNZW51KCk7XG4gICAgICAgICB0aGlzLmVtaXRWYWx1ZShmb3JjZSwgb3JpZ2luKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCgpO1xuICAgICAgfVxuICAgfVxuXG4gICBwdWJsaWMgb25LZXlQcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgbGV0IGtleTogbnVtYmVyID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcbiAgICAgIGlmIChrZXkgPT09IDEzKSB7XG4gICAgICAgICB0aGlzLmxhdW5jaFNlYXJjaCh0cnVlLCBTdFNlYXJjaEV2ZW50T3JpZ2luLkVOVEVSKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHVibGljIGNoYW5nZU9wdGlvbihpdGVtOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIGlmIChpdGVtICYmIGl0ZW0ubGFiZWwpIHtcbiAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICB0aGlzLnNlYXJjaEJveC5zZXRWYWx1ZShpdGVtLnZhbHVlKTtcbiAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCgpO1xuICAgICAgICAgdGhpcy5lbWl0VmFsdWUodHJ1ZSwgU3RTZWFyY2hFdmVudE9yaWdpbi5MSVNUKTtcbiAgICAgICAgIHRoaXMubWFuYWdlU3Vic2NyaXB0aW9uKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBjbGVhcklucHV0KCk6IHZvaWQge1xuICAgICAgdGhpcy5zZWFyY2hCb3guc2V0VmFsdWUoJycpO1xuICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuZW1pdFZhbHVlKHRydWUsIFN0U2VhcmNoRXZlbnRPcmlnaW4uSU5QVVQpO1xuICAgfVxuXG4gICBwdWJsaWMgc2hvd0F1dG9Db21wbGV0ZU1lbnUoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy53aXRoQXV0b2NvbXBsZXRlICYmICF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICB0aGlzLm9wZW5FbGVtZW50KCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWFyY2hCb3gudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBlbWl0VmFsdWUoZm9yY2U6IGJvb2xlYW4sIG9yaWdpbjogU3RTZWFyY2hFdmVudE9yaWdpbik6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaXNFcXVhbFByZXZpb3VzKGZvcmNlKSkge1xuICAgICAgICAgdGhpcy5sYXN0RW1pdHRlZFRleHQgPSB0aGlzLnNlYXJjaEJveC52YWx1ZTtcbiAgICAgICAgIGxldCBuZXdTZWFyY2g6IFN0U2VhcmNoRXZlbnQgPSB7dGV4dDogdGhpcy5sYXN0RW1pdHRlZFRleHQgfHwgJycsIG9yaWdpbjogb3JpZ2lufTtcbiAgICAgICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgICAgICAgbmV3U2VhcmNoLmZpbHRlciA9IHRoaXMuZmlsdGVyO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5zZWFyY2guZW1pdChuZXdTZWFyY2gpO1xuICAgICAgfVxuICAgfVxuXG5cblxuICAgcHJpdmF0ZSBjaGVja0Rpc2FibGVkKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMuc2VhcmNoQm94LmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLnNlYXJjaEJveC5lbmFibGUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBjYW5TZWFyY2goKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5pc0RlZmluZWQoKSAmJiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNoZWNrTWlucygpO1xuICAgfVxuXG4gICBwcml2YXRlIGlzRGVmaW5lZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaEJveCAmJiB0aGlzLnNlYXJjaEJveC52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnNlYXJjaEJveC52YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgfVxuXG4gICBwcml2YXRlIGNoZWNrTWlucygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1pbkxlbmd0aCA8PSAodGhpcy5zZWFyY2hCb3ggJiYgdGhpcy5zZWFyY2hCb3gudmFsdWUgJiYgdGhpcy5zZWFyY2hCb3gudmFsdWUubGVuZ3RoKSB8fFxuICAgICAgICAgdGhpcy5zZWFyY2hCb3gudmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMDtcbiAgIH1cblxuICAgcHJpdmF0ZSBpc0VxdWFsUHJldmlvdXMoZm9yY2U6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RFbWl0dGVkVGV4dCAhPT0gdGhpcy5zZWFyY2hCb3gudmFsdWUgfHwgZm9yY2U7XG4gICB9XG5cbiAgIHByaXZhdGUgY2hlY2tWYWx1ZUNoYW5nZShjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLnNlYXJjaEJveC5zZXRWYWx1ZShjaGFuZ2VzLnZhbHVlLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICB0aGlzLm1hbmFnZVN1YnNjcmlwdGlvbigpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGNoZWNrRGVib3VuY2VDaGFuZ2UoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kZWJvdW5jZSkge1xuICAgICAgICAgdGhpcy5tYW5hZ2VTdWJzY3JpcHRpb24oKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja0Rpc2FibGVDaGFuZ2UoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5kaXNhYmxlZCkge1xuICAgICAgICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgY2hlY2tBdXRvQ29tcGxldGVNZW51Q2hhbmdlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuYXV0b2NvbXBsZXRlTGlzdCkge1xuICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBtYW5hZ2VTdWJzY3JpcHRpb24oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25TZWFyY2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25TZWFyY2gudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpdmVTZWFyY2gpIHtcbiAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uU2VhcmNoID0gdGhpcy5zZWFyY2hCb3hcbiAgICAgICAgICAgIC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlYm91bmNlKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLmxhdW5jaFNlYXJjaChmYWxzZSwgIFN0U2VhcmNoRXZlbnRPcmlnaW4uSU5QVVQpKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==