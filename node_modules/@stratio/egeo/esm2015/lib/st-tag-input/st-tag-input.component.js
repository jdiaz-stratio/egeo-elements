/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag-input/st-tag-input.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostBinding, Input, ViewChild } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@description {Component} Tag Input
 *
 * This component is a text input box that automatically creates tags out of a typed text.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-tag-input
 *    class="st-form-field"
 *    name="tag-input-reactive"
 *    formControlName="tag-input-reactive"
 *    [autocompleteList]="filteredlist"
 *    [withAutocomplete]="true"
 *    [disabled]="disabled"
 *    [label]="'Tag Input with Reactive Form'"
 *    [id]="'tag-input-reactive'"
 *    [placeholder]="'Add tags separated by commas'"
 *    [tooltip]="'This is a Tag Input component tooltip'"
 *    [forbiddenValues]="['test']"
 *    (input)="onFilterList($event)">
 * </st-tag-input>
 * <st-tag-input
 *    class="st-form-field"
 *    name="tag-input-template-driven"
 *    [(ngModel)]="tags.templateDriven"
 *    [autocompleteList]="filteredlist"
 *    [withAutocomplete]="true"
 *    [disabled]="disabled"
 *    [label]="'Tag Input with Template Driven Form'"
 *    [id]="'tag-input-template-driven'"
 *    [placeholder]="'Add tags separated by commas'"
 *    [tooltip]="'This is a Tag Input component tooltip'"
 *    [regularExpression]="pattern"
 *    (input)="onFilterList($event)">
 * </st-tag-input>
 * ```
 */
export class StTagInputComponent {
    /**
     * @param {?} _selectElement
     * @param {?} _cd
     */
    constructor(_selectElement, _cd) {
        this._selectElement = _selectElement;
        this._cd = _cd;
        /**
         * \@input {string | null} [label=null] Label to show over the input. It is empty by default
         */
        this.label = null;
        /**
         * \@input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default
         */
        this.tooltip = null;
        /**
         * \@input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
         */
        this.placeholder = null;
        /**
         * \@input {string | null} [errorMessage=null] Error message to show. It is empty by default
         */
        this.errorMessage = null;
        /**
         * \@input {string | null} [type=null] Type of the items
         */
        this.type = 'text';
        /**
         * \@input {boolean} [withAutocomplete=false] Enable autocomplete feature. It is false by default
         */
        this.withAutocomplete = false;
        /**
         * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
         */
        this.autocompleteList = [];
        /**
         * \@input {boolean} [charsToShowAutocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
         */
        this.charsToShowAutocompleteList = 1;
        /**
         * \@input {boolean} [allowFreeText=true] Boolean to allow user to type a free text or not
         */
        this.allowFreeText = true;
        /**
         * \@input {string[]} [forbiddenValues=Array()] A list of values that user can not type and if he types one of them,
         * tag input will be invalid. It is empty by default
         */
        this.forbiddenValues = [];
        /**
         * \@input {string} [regularExpression=] Regular expression to validate values. It is null by default
         */
        this.regularExpression = null;
        /**
         * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the tag input checks the errors before being modified by user
         */
        this.forceValidations = false;
        this.expandedMenu = false;
        this.items = [];
        this.innerInputContent = '';
        this.isPristine = true;
        this.showErrorValue = false;
        this._focus = false;
        this._isDisabled = false;
        this._newElementInput = null;
        this._selected = null;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * \@input {boolean} [disabled=false] Disable the component. It is false by default
     * @return {?}
     */
    get disabled() {
        return this._isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._isDisabled = value;
    }
    /**
     * @return {?}
     */
    get hasLabel() {
        return this.label !== null && this.label.length > 0;
    }
    /**
     * @return {?}
     */
    get hasFocus() {
        return this._focus;
    }
    /**
     * @return {?}
     */
    get hasPlaceholder() {
        return !this._focus && !this.items.length && this.placeholder && this.placeholder.length > 0;
    }
    /**
     * @return {?}
     */
    get hasAutocomplete() {
        return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
    }
    /**
     * @return {?}
     */
    get disableValue() {
        return this._isDisabled === true ? '' : null;
    }
    /**
     * @return {?}
     */
    get isValidInput() {
        /** @type {?} */
        const isForbidden = this.forbiddenValues.length && this.forbiddenValues.indexOf(this.innerInputContent) > -1;
        /** @type {?} */
        const isDuplicated = this.items.indexOf(this.innerInputContent) !== -1;
        /** @type {?} */
        const matchedPattern = this.regularExpression ? this._regularExp.test(this.innerInputContent) : true;
        return this.innerInputContent.length ? !isForbidden && !isDuplicated && matchedPattern : true;
    }
    /**
     * @return {?}
     */
    get tagSelected() {
        return this._selected;
    }
    /**
     * @return {?}
     */
    get selectId() {
        /** @type {?} */
        const select = this._selectElement.nativeElement;
        return select.getAttribute('id') !== null ? select.id : null;
    }
    /**
     * @return {?}
     */
    get inputId() {
        return this.selectId !== null ? `${this.selectId}-input` : null;
    }
    /**
     * @return {?}
     */
    get labelId() {
        return this.selectId !== null ? `${this.selectId}-label` : null;
    }
    /**
     * @return {?}
     */
    get tagId() {
        return this.selectId !== null ? `${this.selectId}-tag-` : null;
    }
    /**
     * @return {?}
     */
    get listId() {
        return this.selectId !== null ? `${this.selectId}-autocomplete` : null;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._newElementInput = this.newElementInput.nativeElement;
        switch (this.type) {
            case 'number': {
                this.regularExpression = '^\\d+(\\.\\d+)?$';
                break;
            }
            case 'integer': {
                this.regularExpression = '^\\d+$';
                break;
            }
            default: {
                break;
            }
        }
        this._regularExp = new RegExp(this.regularExpression);
        this.showErrorValue = this.showError();
        this._cd.markForCheck();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.checkAutocompleteMenuChange(changes);
        if (this.forceValidations) {
            this.writeValue(this.items);
        }
        this._cd.markForCheck();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    writeValue(data) {
        if (data && Array.isArray(data) && data.length) {
            this.items = [];
            for (const value of data) {
                /** @type {?} */
                const parsedValue = this._getParsedTag(value);
                if (parsedValue || !isNaN(parsedValue)) {
                    this.items.push(parsedValue);
                }
            }
            this.onChange(this.items);
            this.isPristine = false;
            this._cd.markForCheck();
        }
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
        this._cd.markForCheck();
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
    }
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Input actions
    /**
     * @param {?} text
     * @return {?}
     */
    onInputText(text) {
        this.innerInputContent = text;
        this.showAutocompleteMenu();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputFocusIn(event) {
        if (!this._isDisabled) {
            this._focus = true;
            this._newElementInput.focus();
            this._forceResetAutoCompleteList();
            this.showAutocompleteMenu();
        }
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputFocusOut(event) {
        if (!this.expandedMenu) {
            this._focus = false;
            this.addCurrentTag();
        }
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputKeyDown(event) {
        switch (event.keyCode) {
            case 188: // Comma
            case 13: // Enter
                if (this.innerInputContent.length && this.isValidInput) {
                    this.addTag(this.innerInputContent);
                    this._forceResetAutoCompleteList();
                }
                event.preventDefault();
                break;
            case 9: // Tab
                if (this.innerInputContent.length && this.isValidInput) {
                    this.addTag(this.innerInputContent);
                    event.preventDefault();
                }
                else if (this.innerInputContent.length) {
                    this.clearInput();
                }
                break;
            case 46: // Delete
                if (this.innerInputContent.length) {
                    this.clearInput();
                }
                else if (this.items.length) {
                    event.target.previousElementSibling.focus();
                }
                break;
            case 8: // Backspace
            case 37: // Left
                if (this.items.length && !this.innerInputContent.length) {
                    event.target.previousElementSibling.focus();
                }
                break;
            default:
                break;
        }
    }
    // Tag actions
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onTagKeyDown(event, index) {
        switch (event.keyCode) {
            case 8: // Backspace
            case 46: // Delete
                if (this._selected !== null) {
                    this.deleteTag(this._selected);
                    this._selected = null;
                    this._newElementInput.focus();
                }
                break;
            case 37: // Left
                if (this._selected > 0) {
                    event.target.previousElementSibling.focus();
                }
                break;
            case 39: // Right
                if (this._selected < this.items.length) {
                    event.target.nextElementSibling.focus();
                }
                break;
            default:
                break;
        }
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onTagFocusIn(event, index) {
        if (!this._isDisabled) {
            this._focus = true;
            this.addCurrentTag();
            this.expandedMenu = false;
            this._selected = index;
        }
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onTagFocusOut(event, index) {
        this._focus = false;
        this._selected = null;
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    onTagClick(event, index) {
        event.stopPropagation();
        event.preventDefault();
    }
    // Dropdown actions
    /**
     * @param {?} data
     * @return {?}
     */
    onListSelect(data) {
        this._focus = false;
        if (data.value.length && this.items.indexOf(data.value) === -1) {
            this.addTag(data.value);
        }
        else {
            this.clearInput();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        if (this.expandedMenu) {
            this._focus = false;
            this.addCurrentTag();
        }
    }
    /**
     * @return {?}
     */
    showError() {
        return typeof this.errorMessage === 'string' && (!this.isPristine || this.forceValidations) && !this._focus && !this.disabled;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    deleteTag(index) {
        this.items.splice(index, 1);
        this.onChange(this.items);
        this._newElementInput.value = '';
        this.innerInputContent = '';
        this._newElementInput.dispatchEvent(new Event('input'));
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    addTag(tag) {
        /** @type {?} */
        const parsedValue = this._getParsedTag(tag);
        if (parsedValue || !isNaN(parsedValue)) {
            this.items.push(parsedValue);
            this.clearInput();
            this.onChange(this.items);
            this.isPristine = false;
        }
        this.showErrorValue = this.showError();
    }
    /**
     * @private
     * @return {?}
     */
    addCurrentTag() {
        if (this.innerInputContent.length && this.isValidInput) {
            this.addTag(this.innerInputContent);
        }
        else {
            this.clearInput();
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearInput() {
        if (this.expandedMenu) {
            this.expandedMenu = false;
        }
        this.innerInputContent = '';
        this._newElementInput.innerText = '';
    }
    /**
     * @private
     * @return {?}
     */
    showAutocompleteMenu() {
        if (this.withAutocomplete && !this.expandedMenu && this.charsToShowAutocompleteList <= this.innerInputContent.length) {
            this.expandedMenu = true;
        }
        if (this.innerInputContent === '' && this.charsToShowAutocompleteList) {
            this.expandedMenu = false;
        }
        this._cd.markForCheck();
    }
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    checkAutocompleteMenuChange(changes) {
        if (changes && changes.autocompleteList) {
            this._cd.markForCheck();
        }
    }
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    _getParsedTag(tag) {
        switch (this.type) {
            case 'number': {
                return parseFloat(tag);
            }
            case 'integer': {
                return parseInt(tag, 0);
            }
            default:
                return tag;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _forceResetAutoCompleteList() {
        if (!this.charsToShowAutocompleteList && this.withAutocomplete) {
            this._newElementInput.innerText = '';
            /** @type {?} */
            const event = new Event('input', {
                'bubbles': true
            });
            event.data = '';
            this._newElementInput.dispatchEvent(event);
        }
    }
}
StTagInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-tag-input',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-dropdown-menu [items]=\"autocompleteList\" [attr.id]=\"listId\" [placement]=\"'bottom-start'\" [active]=\"hasAutocomplete\"\n                  (change)=\"onListSelect($event)\">\n\n   <div class=\"st-tag-input\">\n      <label *ngIf=\"hasLabel\" class=\"st-tag-input__label st-label\" [attr.id]=\"labelId\"\n             [attr.title]=\"tooltip\"\n             [attr.disabled]=\"disableValue\"\n             [ngClass]=\"{ 'active': hasFocus, 'error': showErrorValue }\">{{label}}</label>\n\n      <div #inputElement class=\"st-tag-input__input st-input\"\n           [attr.disabled]=\"disableValue\" (clickOutside)=\"onClickOutside($event)\"\n           [ngClass]=\"{ 'active': hasFocus, 'error': showErrorValue }\" (click)=\"onInputFocusIn($event)\">\n\n         <span *ngIf=\"hasPlaceholder\" class=\"st-tag-input__placeholder\" [attr.disabled]=\"disableValue\">{{placeholder}}</span>\n         <div class=\"st-tag-input__item tag-item\" *ngFor=\"let item of items; let i = index;\"\n              [tabindex]=\"0\"\n              [attr.id]=\"tagId + i\"\n              (focusin)=\"onTagFocusIn($event, i)\"\n              (focusout)=\"onTagFocusOut($event, i)\"\n              (blur)=\"onTagFocusOut($event, i)\"\n              (click)=\"onTagClick($event, i)\"\n              (keydown)=\"onTagKeyDown($event, i)\">{{item}}<span *ngIf=\"!disabled\" class=\"icon-cross remove-tag-button\" (click)=\"deleteTag(i); $event.stopPropagation()\"></span>\n         </div>\n\n         <div #newElement type=\"type\"\n              class=\"st-tag-input__text inner-input\"\n              [attr.contenteditable]=\"(disableValue === null && allowFreeText)\"\n              [attr.id]=\"inputId\"\n              [ngClass]=\"{ 'error': !isValidInput }\"\n              (focusin)=\"onInputFocusIn($event)\"\n              (focusout)=\"onInputFocusOut($event)\"\n              (blur)=\"onInputFocusOut($event)\"\n              (input)=\"onInputText($event.target.textContent)\"\n              (keydown)=\"onInputKeyDown($event)\"></div>\n      </div>\n   </div>\n\n</st-dropdown-menu>\n<span class=\"info-message\" *ngIf=\"infoMessage && isPristine\">{{infoMessage}}</span>\n<span *ngIf=\"showErrorValue\" class=\"st-input-error-message\">{{errorMessage}}</span>\n\n\n",
                host: {
                    'class': 'st-tag-input'
                },
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StTagInputComponent)), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StTagInputComponent)), multi: true }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{display:block;width:100%;position:relative}.inner-input{border:0;outline:0;display:inline-block;padding:5px 10px;vertical-align:top;margin-bottom:5px;overflow:hidden;max-width:100%;min-height:30px}.tag-item{display:inline-block;margin-right:5px;overflow:hidden;max-width:100%}.tag-item:focus{outline:0}.st-tag-input__placeholder{display:inline-block;padding-top:5px}"]
            }] }
];
/** @nocollapse */
StTagInputComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
StTagInputComponent.propDecorators = {
    label: [{ type: Input }],
    tooltip: [{ type: Input }],
    placeholder: [{ type: Input }],
    errorMessage: [{ type: Input }],
    type: [{ type: Input }],
    withAutocomplete: [{ type: Input }],
    autocompleteList: [{ type: Input }],
    charsToShowAutocompleteList: [{ type: Input }],
    allowFreeText: [{ type: Input }],
    infoMessage: [{ type: Input }],
    forbiddenValues: [{ type: Input }],
    regularExpression: [{ type: Input }],
    forceValidations: [{ type: Input }],
    newElementInput: [{ type: ViewChild, args: ['newElement', { static: true },] }],
    inputElement: [{ type: ViewChild, args: ['inputElement', { static: false },] }],
    disabled: [{ type: Input }],
    hasAutocomplete: [{ type: HostBinding, args: ['class.st-tag-input--autocomplete',] }]
};
if (false) {
    /**
     * \@input {string | null} [label=null] Label to show over the input. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.label;
    /**
     * \@input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.tooltip;
    /**
     * \@input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.placeholder;
    /**
     * \@input {string | null} [errorMessage=null] Error message to show. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.errorMessage;
    /**
     * \@input {string | null} [type=null] Type of the items
     * @type {?}
     */
    StTagInputComponent.prototype.type;
    /**
     * \@input {boolean} [withAutocomplete=false] Enable autocomplete feature. It is false by default
     * @type {?}
     */
    StTagInputComponent.prototype.withAutocomplete;
    /**
     * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.autocompleteList;
    /**
     * \@input {boolean} [charsToShowAutocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.charsToShowAutocompleteList;
    /**
     * \@input {boolean} [allowFreeText=true] Boolean to allow user to type a free text or not
     * @type {?}
     */
    StTagInputComponent.prototype.allowFreeText;
    /**
     * \@input {string} [infoMessage=] Message used to inform user about what values he has to introduce
     * @type {?}
     */
    StTagInputComponent.prototype.infoMessage;
    /**
     * \@input {string[]} [forbiddenValues=Array()] A list of values that user can not type and if he types one of them,
     * tag input will be invalid. It is empty by default
     * @type {?}
     */
    StTagInputComponent.prototype.forbiddenValues;
    /**
     * \@input {string} [regularExpression=] Regular expression to validate values. It is null by default
     * @type {?}
     */
    StTagInputComponent.prototype.regularExpression;
    /**
     * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the tag input checks the errors before being modified by user
     * @type {?}
     */
    StTagInputComponent.prototype.forceValidations;
    /** @type {?} */
    StTagInputComponent.prototype.newElementInput;
    /** @type {?} */
    StTagInputComponent.prototype.inputElement;
    /** @type {?} */
    StTagInputComponent.prototype.expandedMenu;
    /** @type {?} */
    StTagInputComponent.prototype.items;
    /** @type {?} */
    StTagInputComponent.prototype.innerInputContent;
    /** @type {?} */
    StTagInputComponent.prototype.isPristine;
    /** @type {?} */
    StTagInputComponent.prototype.showErrorValue;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._focus;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._isDisabled;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._newElementInput;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._regularExp;
    /** @type {?} */
    StTagInputComponent.prototype.onChange;
    /** @type {?} */
    StTagInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._selectElement;
    /**
     * @type {?}
     * @private
     */
    StTagInputComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdGFnLWlucHV0L3N0LXRhZy1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFJTCxTQUFTLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFxQyxhQUFhLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RGhILE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBc0Q3QixZQUFvQixjQUEwQixFQUMxQixHQUFzQjtRQUR0QixtQkFBYyxHQUFkLGNBQWMsQ0FBWTtRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQXBEakMsVUFBSyxHQUFrQixJQUFJLENBQUM7Ozs7UUFFNUIsWUFBTyxHQUFrQixJQUFJLENBQUM7Ozs7UUFFOUIsZ0JBQVcsR0FBa0IsSUFBSSxDQUFDOzs7O1FBRWxDLGlCQUFZLEdBQWtCLElBQUksQ0FBQzs7OztRQUVuQyxTQUFJLEdBQWtCLE1BQU0sQ0FBQzs7OztRQUc3QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7Ozs7UUFFbEMscUJBQWdCLEdBQWlELEVBQUUsQ0FBQzs7OztRQUVwRSxnQ0FBMkIsR0FBVyxDQUFDLENBQUM7Ozs7UUFFeEMsa0JBQWEsR0FBWSxJQUFJLENBQUM7Ozs7O1FBTzlCLG9CQUFlLEdBQWEsRUFBRSxDQUFDOzs7O1FBRS9CLHNCQUFpQixHQUFlLElBQUksQ0FBQzs7OztRQUVyQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFLcEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBVyxFQUFFLENBQUM7UUFDL0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUUvQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLHFCQUFnQixHQUE0QixJQUFJLENBQUM7UUFDakQsY0FBUyxHQUFrQixJQUFJLENBQUM7UUFHeEMsYUFBUTs7OztRQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7UUFDdEIsQ0FBQyxFQUFBO1FBRUQsY0FBUzs7O1FBQUcsR0FBRyxFQUFFO1FBQ2pCLENBQUMsRUFBQTtJQUlELENBQUM7Ozs7O0lBR0QsSUFDSSxRQUFRO1FBQ1QsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7O0lBRUQsSUFDSSxlQUFlO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNiLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7O2NBQ1AsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Y0FDdEcsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Y0FDaEUsY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDcEcsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLFlBQVksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRyxDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7O2NBQ0gsTUFBTSxHQUFnQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWE7UUFDN0QsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2xFLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO1FBQzNELFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQixLQUFLLFFBQVEsQ0FBQyxDQUFDO2dCQUNaLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQztnQkFDNUMsTUFBTTthQUNSO1lBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQztnQkFDYixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDO2dCQUNsQyxNQUFNO2FBQ1I7WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDTixNQUFNO2FBQ1I7U0FDSDtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxPQUFzQjtRQUMvQixJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVM7UUFDakIsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxFQUFFOztzQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQy9CO2FBQ0g7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO0lBQ0osQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQW9CO0lBQzdCLENBQUM7Ozs7OztJQUdELGdCQUFnQixDQUFDLEVBQW9CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFHRCxXQUFXLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQ25DLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQVk7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVU7UUFDdEIsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3BCLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUTtZQUNsQixLQUFLLEVBQUUsRUFBRSxRQUFRO2dCQUNkLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztpQkFDckM7Z0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixNQUFNO1lBQ1QsS0FBSyxDQUFDLEVBQUUsTUFBTTtnQkFDWCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDcEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUN6QjtxQkFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztpQkFDcEI7Z0JBQ0QsTUFBTTtZQUNULEtBQUssRUFBRSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO29CQUNoQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQzNCLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzlDO2dCQUNELE1BQU07WUFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVk7WUFDcEIsS0FBSyxFQUFFLEVBQUUsT0FBTztnQkFDYixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtvQkFDdEQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDOUM7Z0JBQ0QsTUFBTTtZQUNUO2dCQUNHLE1BQU07U0FDWDtJQUNKLENBQUM7Ozs7Ozs7SUFHRCxZQUFZLENBQUMsS0FBVSxFQUFFLEtBQWE7UUFDbkMsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUNwQixLQUFLLEVBQUUsRUFBRSxTQUFTO2dCQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNoQztnQkFDRCxNQUFNO1lBQ1QsS0FBSyxFQUFFLEVBQUUsT0FBTztnQkFDYixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO29CQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUM5QztnQkFDRCxNQUFNO1lBQ1QsS0FBSyxFQUFFLEVBQUUsUUFBUTtnQkFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQzFDO2dCQUNELE1BQU07WUFDVDtnQkFDRyxNQUFNO1NBQ1g7SUFDSixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBWSxFQUFFLEtBQWE7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFZLEVBQUUsS0FBYTtRQUNuQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUdELFlBQVksQ0FBQyxJQUF3QjtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjthQUFNO1lBQ0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BCO0lBQ0osQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBWTtRQUN4QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3ZCO0lBQ0osQ0FBQzs7OztJQUVELFNBQVM7UUFDTixPQUFPLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNqSSxDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsR0FBVzs7Y0FDakIsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksV0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEI7SUFDSixDQUFDOzs7OztJQUVPLFVBQVU7UUFDZixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU8sb0JBQW9CO1FBQ3pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsMkJBQTJCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtZQUNuSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVPLDJCQUEyQixDQUFDLE9BQXNCO1FBQ3ZELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzFCO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEdBQVc7UUFDOUIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssUUFBUSxDQUFDLENBQUM7Z0JBQ1osT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekI7WUFDRCxLQUFLLFNBQVMsQ0FBQyxDQUFDO2dCQUNiLE9BQU8sUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQjtZQUNEO2dCQUNHLE9BQU8sR0FBRyxDQUFDO1NBQ2hCO0lBQ0osQ0FBQzs7Ozs7SUFFTywyQkFBMkI7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBMkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7O2tCQUMvQixLQUFLLEdBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNuQyxTQUFTLEVBQUUsSUFBSTthQUNqQixDQUFDO1lBQ0YsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNKLENBQUM7OztZQTVZSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLGtwRkFBNEM7Z0JBRTVDLElBQUksRUFBRTtvQkFDSCxPQUFPLEVBQUUsY0FBYztpQkFDekI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNSLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO29CQUMvRixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQUM7Z0JBQy9GLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7OztZQWhFRSxVQUFVO1lBRlYsaUJBQWlCOzs7b0JBc0VoQixLQUFLO3NCQUVMLEtBQUs7MEJBRUwsS0FBSzsyQkFFTCxLQUFLO21CQUVMLEtBQUs7K0JBR0wsS0FBSzsrQkFFTCxLQUFLOzBDQUVMLEtBQUs7NEJBRUwsS0FBSzswQkFFTCxLQUFLOzhCQUtMLEtBQUs7Z0NBRUwsS0FBSzsrQkFFTCxLQUFLOzhCQUVMLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOzJCQUN0QyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzt1QkF5QnpDLEtBQUs7OEJBcUJMLFdBQVcsU0FBQyxrQ0FBa0M7Ozs7Ozs7SUE3RS9DLG9DQUFxQzs7Ozs7SUFFckMsc0NBQXVDOzs7OztJQUV2QywwQ0FBMkM7Ozs7O0lBRTNDLDJDQUE0Qzs7Ozs7SUFFNUMsbUNBQXNDOzs7OztJQUd0QywrQ0FBMkM7Ozs7O0lBRTNDLCtDQUE2RTs7Ozs7SUFFN0UsMERBQWlEOzs7OztJQUVqRCw0Q0FBdUM7Ozs7O0lBRXZDLDBDQUE2Qjs7Ozs7O0lBSzdCLDhDQUF3Qzs7Ozs7SUFFeEMsZ0RBQThDOzs7OztJQUU5QywrQ0FBMkM7O0lBRTNDLDhDQUFxRTs7SUFDckUsMkNBQXFFOztJQUVyRSwyQ0FBcUM7O0lBQ3JDLG9DQUF5Qjs7SUFDekIsZ0RBQXNDOztJQUN0Qyx5Q0FBa0M7O0lBQ2xDLDZDQUF1Qzs7Ozs7SUFFdkMscUNBQWdDOzs7OztJQUNoQywwQ0FBcUM7Ozs7O0lBQ3JDLCtDQUF5RDs7Ozs7SUFDekQsd0NBQXdDOzs7OztJQUN4QywwQ0FBNEI7O0lBRTVCLHVDQUNDOztJQUVELHdDQUNDOzs7OztJQUVXLDZDQUFrQzs7Ozs7SUFDbEMsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ29tcG9uZW50LFxuICAgRWxlbWVudFJlZixcbiAgIGZvcndhcmRSZWYsXG4gICBIb3N0QmluZGluZyxcbiAgIElucHV0LFxuICAgT25DaGFuZ2VzLFxuICAgT25Jbml0LFxuICAgU2ltcGxlQ2hhbmdlcyxcbiAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IsIFZhbGlkYXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgU3REcm9wRG93bk1lbnVHcm91cCwgU3REcm9wRG93bk1lbnVJdGVtIH0gZnJvbSAnLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFRhZyBJbnB1dFxuICpcbiAqIFRoaXMgY29tcG9uZW50IGlzIGEgdGV4dCBpbnB1dCBib3ggdGhhdCBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgdGFncyBvdXQgb2YgYSB0eXBlZCB0ZXh0LlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtdGFnLWlucHV0XG4gKiAgICBjbGFzcz1cInN0LWZvcm0tZmllbGRcIlxuICogICAgbmFtZT1cInRhZy1pbnB1dC1yZWFjdGl2ZVwiXG4gKiAgICBmb3JtQ29udHJvbE5hbWU9XCJ0YWctaW5wdXQtcmVhY3RpdmVcIlxuICogICAgW2F1dG9jb21wbGV0ZUxpc3RdPVwiZmlsdGVyZWRsaXN0XCJcbiAqICAgIFt3aXRoQXV0b2NvbXBsZXRlXT1cInRydWVcIlxuICogICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAqICAgIFtsYWJlbF09XCInVGFnIElucHV0IHdpdGggUmVhY3RpdmUgRm9ybSdcIlxuICogICAgW2lkXT1cIid0YWctaW5wdXQtcmVhY3RpdmUnXCJcbiAqICAgIFtwbGFjZWhvbGRlcl09XCInQWRkIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hcydcIlxuICogICAgW3Rvb2x0aXBdPVwiJ1RoaXMgaXMgYSBUYWcgSW5wdXQgY29tcG9uZW50IHRvb2x0aXAnXCJcbiAqICAgIFtmb3JiaWRkZW5WYWx1ZXNdPVwiWyd0ZXN0J11cIlxuICogICAgKGlucHV0KT1cIm9uRmlsdGVyTGlzdCgkZXZlbnQpXCI+XG4gKiA8L3N0LXRhZy1pbnB1dD5cbiAqIDxzdC10YWctaW5wdXRcbiAqICAgIGNsYXNzPVwic3QtZm9ybS1maWVsZFwiXG4gKiAgICBuYW1lPVwidGFnLWlucHV0LXRlbXBsYXRlLWRyaXZlblwiXG4gKiAgICBbKG5nTW9kZWwpXT1cInRhZ3MudGVtcGxhdGVEcml2ZW5cIlxuICogICAgW2F1dG9jb21wbGV0ZUxpc3RdPVwiZmlsdGVyZWRsaXN0XCJcbiAqICAgIFt3aXRoQXV0b2NvbXBsZXRlXT1cInRydWVcIlxuICogICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAqICAgIFtsYWJlbF09XCInVGFnIElucHV0IHdpdGggVGVtcGxhdGUgRHJpdmVuIEZvcm0nXCJcbiAqICAgIFtpZF09XCIndGFnLWlucHV0LXRlbXBsYXRlLWRyaXZlbidcIlxuICogICAgW3BsYWNlaG9sZGVyXT1cIidBZGQgdGFncyBzZXBhcmF0ZWQgYnkgY29tbWFzJ1wiXG4gKiAgICBbdG9vbHRpcF09XCInVGhpcyBpcyBhIFRhZyBJbnB1dCBjb21wb25lbnQgdG9vbHRpcCdcIlxuICogICAgW3JlZ3VsYXJFeHByZXNzaW9uXT1cInBhdHRlcm5cIlxuICogICAgKGlucHV0KT1cIm9uRmlsdGVyTGlzdCgkZXZlbnQpXCI+XG4gKiA8L3N0LXRhZy1pbnB1dD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtdGFnLWlucHV0JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC10YWctaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtdGFnLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gICBob3N0OiB7XG4gICAgICAnY2xhc3MnOiAnc3QtdGFnLWlucHV0J1xuICAgfSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RUYWdJbnB1dENvbXBvbmVudCksIG11bHRpOiB0cnVlIH0sXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0VGFnSW5wdXRDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9XSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0VGFnSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgIC8qKiBAaW5wdXQge3N0cmluZyB8IG51bGx9IFtsYWJlbD1udWxsXSBMYWJlbCB0byBzaG93IG92ZXIgdGhlIGlucHV0LiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBsYWJlbDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAvKiogQGlucHV0IHtzdHJpbmcgfCBudWxsfSBbdG9vbHRpcD1udWxsXSBUaGUgdG9vbHRpcCB0byBzaG93ICBvdmVyIHRoZSBsYWJlbC4gSXQgaXMgZW1wdHkgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAvKiogQGlucHV0IHtzdHJpbmcgfCBudWxsfSBbcGxhY2Vob2xkZXI9bnVsbF0gVGhlIHRleHQgdGhhdCBhcHBlYXJzIGFzIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dC4gSXQgaXMgZW1wdHkgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nIHwgbnVsbH0gW2Vycm9yTWVzc2FnZT1udWxsXSBFcnJvciBtZXNzYWdlIHRvIHNob3cuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gICAvKiogQGlucHV0IHtzdHJpbmcgfCBudWxsfSBbdHlwZT1udWxsXSBUeXBlIG9mIHRoZSBpdGVtcyAqL1xuICAgQElucHV0KCkgdHlwZTogc3RyaW5nIHwgbnVsbCA9ICd0ZXh0JztcblxuICAgLyoqIEBpbnB1dCB7Ym9vbGVhbn0gW3dpdGhBdXRvY29tcGxldGU9ZmFsc2VdIEVuYWJsZSBhdXRvY29tcGxldGUgZmVhdHVyZS4gSXQgaXMgZmFsc2UgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KCkgd2l0aEF1dG9jb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBpbnB1dCB7KFN0RHJvcERvd25NZW51SXRlbSB8IFN0RHJvcERvd25NZW51R3JvdXApW119IFthdXRvY29tcGxldGVMaXN0PUFycmF5KCldIExpc3QgdG8gYmUgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIGZlYXR1cmUuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIGF1dG9jb21wbGV0ZUxpc3Q6IChTdERyb3BEb3duTWVudUl0ZW0gfCBTdERyb3BEb3duTWVudUdyb3VwKVtdID0gW107XG4gICAvKiogQGlucHV0IHtib29sZWFufSBbY2hhcnNUb1Nob3dBdXRvY29tcGxldGVMaXN0PUFycmF5KCldIExpc3QgdG8gYmUgdXNlZCBmb3IgYXV0b2NvbXBsZXRlIGZlYXR1cmUuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIGNoYXJzVG9TaG93QXV0b2NvbXBsZXRlTGlzdDogbnVtYmVyID0gMTtcbiAgIC8qKiBAaW5wdXQge2Jvb2xlYW59IFthbGxvd0ZyZWVUZXh0PXRydWVdIEJvb2xlYW4gdG8gYWxsb3cgdXNlciB0byB0eXBlIGEgZnJlZSB0ZXh0IG9yIG5vdCAqL1xuICAgQElucHV0KCkgYWxsb3dGcmVlVGV4dDogYm9vbGVhbiA9IHRydWU7XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtpbmZvTWVzc2FnZT1dIE1lc3NhZ2UgdXNlZCB0byBpbmZvcm0gdXNlciBhYm91dCB3aGF0IHZhbHVlcyBoZSBoYXMgdG8gaW50cm9kdWNlICovXG4gICBASW5wdXQoKSBpbmZvTWVzc2FnZTogc3RyaW5nO1xuXG4gICAvKiogQGlucHV0IHtzdHJpbmdbXX0gW2ZvcmJpZGRlblZhbHVlcz1BcnJheSgpXSBBIGxpc3Qgb2YgdmFsdWVzIHRoYXQgdXNlciBjYW4gbm90IHR5cGUgYW5kIGlmIGhlIHR5cGVzIG9uZSBvZiB0aGVtLFxuICAgICogdGFnIGlucHV0IHdpbGwgYmUgaW52YWxpZC4gSXQgaXMgZW1wdHkgYnkgZGVmYXVsdFxuICAgICovXG4gICBASW5wdXQoKSBmb3JiaWRkZW5WYWx1ZXM6IHN0cmluZ1tdID0gW107XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtyZWd1bGFyRXhwcmVzc2lvbj1dIFJlZ3VsYXIgZXhwcmVzc2lvbiB0byB2YWxpZGF0ZSB2YWx1ZXMuIEl0IGlzIG51bGwgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KCkgcmVndWxhckV4cHJlc3Npb246IGFueSB8IG51bGwgPSBudWxsO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2ZvcmNlVmFsaWRhdGlvbnM9ZmFsc2VdIElmIHlvdSBzcGVjaWZ5IGl0IHRvICd0cnVlJywgdGhlIHRhZyBpbnB1dCBjaGVja3MgdGhlIGVycm9ycyBiZWZvcmUgYmVpbmcgbW9kaWZpZWQgYnkgdXNlciAqL1xuICAgQElucHV0KCkgZm9yY2VWYWxpZGF0aW9uczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBAVmlld0NoaWxkKCduZXdFbGVtZW50Jywge3N0YXRpYzogdHJ1ZX0pIG5ld0VsZW1lbnRJbnB1dDogRWxlbWVudFJlZjtcbiAgIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHtzdGF0aWM6IGZhbHNlfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gICBwdWJsaWMgZXhwYW5kZWRNZW51OiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgaXRlbXM6IGFueVtdID0gW107XG4gICBwdWJsaWMgaW5uZXJJbnB1dENvbnRlbnQ6IHN0cmluZyA9ICcnO1xuICAgcHVibGljIGlzUHJpc3RpbmU6IGJvb2xlYW4gPSB0cnVlO1xuICAgcHVibGljIHNob3dFcnJvclZhbHVlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgIHByaXZhdGUgX2ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF9pc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF9uZXdFbGVtZW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgIHByaXZhdGUgX3NlbGVjdGVkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgIHByaXZhdGUgX3JlZ3VsYXJFeHA6IFJlZ0V4cDtcblxuICAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XG4gICB9XG5cbiAgIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgIH1cblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZWN0RWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgfVxuXG4gICAvKiogQGlucHV0IHtib29sZWFufSBbZGlzYWJsZWQ9ZmFsc2VdIERpc2FibGUgdGhlIGNvbXBvbmVudC4gSXQgaXMgZmFsc2UgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KClcbiAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkO1xuICAgfVxuXG4gICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX2lzRGlzYWJsZWQgPSB2YWx1ZTtcbiAgIH1cblxuICAgZ2V0IGhhc0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubGFiZWwgIT09IG51bGwgJiYgdGhpcy5sYWJlbC5sZW5ndGggPiAwO1xuICAgfVxuXG4gICBnZXQgaGFzRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9jdXM7XG4gICB9XG5cbiAgIGdldCBoYXNQbGFjZWhvbGRlcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhdGhpcy5fZm9jdXMgJiYgIXRoaXMuaXRlbXMubGVuZ3RoICYmIHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlci5sZW5ndGggPiAwO1xuICAgfVxuXG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0LXRhZy1pbnB1dC0tYXV0b2NvbXBsZXRlJylcbiAgIGdldCBoYXNBdXRvY29tcGxldGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5leHBhbmRlZE1lbnUgJiYgdGhpcy5hdXRvY29tcGxldGVMaXN0ICYmIHRoaXMuYXV0b2NvbXBsZXRlTGlzdC5sZW5ndGggPiAwO1xuICAgfVxuXG4gICBnZXQgZGlzYWJsZVZhbHVlKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzRGlzYWJsZWQgPT09IHRydWUgPyAnJyA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBpc1ZhbGlkSW5wdXQoKTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBpc0ZvcmJpZGRlbiA9IHRoaXMuZm9yYmlkZGVuVmFsdWVzLmxlbmd0aCAmJiB0aGlzLmZvcmJpZGRlblZhbHVlcy5pbmRleE9mKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQpID4gLTE7XG4gICAgICBjb25zdCBpc0R1cGxpY2F0ZWQgPSB0aGlzLml0ZW1zLmluZGV4T2YodGhpcy5pbm5lcklucHV0Q29udGVudCkgIT09IC0xO1xuICAgICAgY29uc3QgbWF0Y2hlZFBhdHRlcm4gPSB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID8gdGhpcy5fcmVndWxhckV4cC50ZXN0KHRoaXMuaW5uZXJJbnB1dENvbnRlbnQpIDogdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLmlubmVySW5wdXRDb250ZW50Lmxlbmd0aCA/ICFpc0ZvcmJpZGRlbiAmJiAhaXNEdXBsaWNhdGVkICYmIG1hdGNoZWRQYXR0ZXJuIDogdHJ1ZTtcbiAgIH1cblxuICAgZ2V0IHRhZ1NlbGVjdGVkKCk6IG51bWJlciB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgfVxuXG4gICBnZXQgc2VsZWN0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICBjb25zdCBzZWxlY3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5fc2VsZWN0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgcmV0dXJuIHNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IG51bGwgPyBzZWxlY3QuaWQgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdElkICE9PSBudWxsID8gYCR7dGhpcy5zZWxlY3RJZH0taW5wdXRgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGxhYmVsSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJZCAhPT0gbnVsbCA/IGAke3RoaXMuc2VsZWN0SWR9LWxhYmVsYCA6IG51bGw7XG4gICB9XG5cbiAgIGdldCB0YWdJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdElkICE9PSBudWxsID8gYCR7dGhpcy5zZWxlY3RJZH0tdGFnLWAgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgbGlzdElkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJZCAhPT0gbnVsbCA/IGAke3RoaXMuc2VsZWN0SWR9LWF1dG9jb21wbGV0ZWAgOiBudWxsO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dCA9IHRoaXMubmV3RWxlbWVudElucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgY2FzZSAnbnVtYmVyJzoge1xuICAgICAgICAgICAgdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA9ICdeXFxcXGQrKFxcXFwuXFxcXGQrKT8kJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgICAgICAgY2FzZSAnaW50ZWdlcic6IHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSAnXlxcXFxkKyQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmVndWxhckV4cCA9IG5ldyBSZWdFeHAodGhpcy5yZWd1bGFyRXhwcmVzc2lvbik7XG4gICAgICB0aGlzLnNob3dFcnJvclZhbHVlID0gdGhpcy5zaG93RXJyb3IoKTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hlY2tBdXRvY29tcGxldGVNZW51Q2hhbmdlKGNoYW5nZXMpO1xuICAgICAgaWYgKHRoaXMuZm9yY2VWYWxpZGF0aW9ucykge1xuICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuaXRlbXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUoZGF0YTogYW55KTogdm9pZCB7XG4gICAgICBpZiAoZGF0YSAmJiBBcnJheS5pc0FycmF5KGRhdGEpICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy5fZ2V0UGFyc2VkVGFnKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWRWYWx1ZSB8fCAhaXNOYU4ocGFyc2VkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gocGFyc2VkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLml0ZW1zKTtcbiAgICAgICAgIHRoaXMuaXNQcmlzdGluZSA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICB9XG5cbiAgIC8vIFJlZ2lzdHJ5IHRoZSBjaGFuZ2UgZnVuY3Rpb24gdG8gcHJvcGFnYXRlIGludGVybmFsIG1vZGVsIGNoYW5nZXNcbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgLy8gSW5wdXQgYWN0aW9uc1xuICAgb25JbnB1dFRleHQodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmlubmVySW5wdXRDb250ZW50ID0gdGV4dDtcbiAgICAgIHRoaXMuc2hvd0F1dG9jb21wbGV0ZU1lbnUoKTtcbiAgIH1cblxuICAgb25JbnB1dEZvY3VzSW4oZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuX2lzRGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dC5mb2N1cygpO1xuICAgICAgICAgdGhpcy5fZm9yY2VSZXNldEF1dG9Db21wbGV0ZUxpc3QoKTtcbiAgICAgICAgIHRoaXMuc2hvd0F1dG9jb21wbGV0ZU1lbnUoKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgfVxuXG4gICBvbklucHV0Rm9jdXNPdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuZXhwYW5kZWRNZW51KSB7XG4gICAgICAgICB0aGlzLl9mb2N1cyA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5hZGRDdXJyZW50VGFnKCk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgIH1cblxuICAgb25JbnB1dEtleURvd24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICBjYXNlIDE4ODogLy8gQ29tbWFcbiAgICAgICAgIGNhc2UgMTM6IC8vIEVudGVyXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGggJiYgdGhpcy5pc1ZhbGlkSW5wdXQpIHtcbiAgICAgICAgICAgICAgIHRoaXMuYWRkVGFnKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VSZXNldEF1dG9Db21wbGV0ZUxpc3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgOTogLy8gVGFiXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGggJiYgdGhpcy5pc1ZhbGlkSW5wdXQpIHtcbiAgICAgICAgICAgICAgIHRoaXMuYWRkVGFnKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIDQ2OiAvLyBEZWxldGVcbiAgICAgICAgICAgIGlmICh0aGlzLmlubmVySW5wdXRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIDg6IC8vIEJhY2tzcGFjZVxuICAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoICYmICF0aGlzLmlubmVySW5wdXRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgfVxuXG4gICAvLyBUYWcgYWN0aW9uc1xuICAgb25UYWdLZXlEb3duKGV2ZW50OiBhbnksIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgY2FzZSA4OiAvLyBCYWNrc3BhY2VcbiAgICAgICAgIGNhc2UgNDY6IC8vIERlbGV0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRhZyh0aGlzLl9zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAzNzogLy8gTGVmdFxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkID4gMCkge1xuICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSAzOTogLy8gUmlnaHRcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgIH1cblxuICAgb25UYWdGb2N1c0luKGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLl9pc0Rpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgICAgICB0aGlzLmFkZEN1cnJlbnRUYWcoKTtcbiAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZmFsc2U7XG4gICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGluZGV4O1xuICAgICAgfVxuICAgfVxuXG4gICBvblRhZ0ZvY3VzT3V0KGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgdGhpcy5fZm9jdXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gbnVsbDtcbiAgIH1cblxuICAgb25UYWdDbGljayhldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgIH1cblxuICAgLy8gRHJvcGRvd24gYWN0aW9uc1xuICAgb25MaXN0U2VsZWN0KGRhdGE6IFN0RHJvcERvd25NZW51SXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5fZm9jdXMgPSBmYWxzZTtcbiAgICAgIGlmIChkYXRhLnZhbHVlLmxlbmd0aCAmJiB0aGlzLml0ZW1zLmluZGV4T2YoZGF0YS52YWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICB0aGlzLmFkZFRhZyhkYXRhLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25DbGlja091dHNpZGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5leHBhbmRlZE1lbnUpIHtcbiAgICAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgICAgICB0aGlzLmFkZEN1cnJlbnRUYWcoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2hvd0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLmVycm9yTWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgKCF0aGlzLmlzUHJpc3RpbmUgfHwgdGhpcy5mb3JjZVZhbGlkYXRpb25zKSAmJiAhdGhpcy5fZm9jdXMgJiYgIXRoaXMuZGlzYWJsZWQ7XG4gICB9XG5cblxuICAgZGVsZXRlVGFnKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5pdGVtcyk7XG5cbiAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5pbm5lcklucHV0Q29udGVudCA9ICcnO1xuICAgICAgdGhpcy5fbmV3RWxlbWVudElucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBhZGRUYWcodGFnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gdGhpcy5fZ2V0UGFyc2VkVGFnKHRhZyk7XG4gICAgICBpZiAocGFyc2VkVmFsdWUgfHwgIWlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHBhcnNlZFZhbHVlKTtcbiAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLml0ZW1zKTtcbiAgICAgICAgIHRoaXMuaXNQcmlzdGluZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5zaG93RXJyb3JWYWx1ZSA9IHRoaXMuc2hvd0Vycm9yKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgYWRkQ3VycmVudFRhZygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlubmVySW5wdXRDb250ZW50Lmxlbmd0aCAmJiB0aGlzLmlzVmFsaWRJbnB1dCkge1xuICAgICAgICAgdGhpcy5hZGRUYWcodGhpcy5pbm5lcklucHV0Q29udGVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgY2xlYXJJbnB1dCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmV4cGFuZGVkTWVudSkge1xuICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5uZXJJbnB1dENvbnRlbnQgPSAnJztcbiAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dC5pbm5lclRleHQgPSAnJztcbiAgIH1cblxuICAgcHJpdmF0ZSBzaG93QXV0b2NvbXBsZXRlTWVudSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLndpdGhBdXRvY29tcGxldGUgJiYgIXRoaXMuZXhwYW5kZWRNZW51ICYmIHRoaXMuY2hhcnNUb1Nob3dBdXRvY29tcGxldGVMaXN0IDw9IHRoaXMuaW5uZXJJbnB1dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbm5lcklucHV0Q29udGVudCA9PT0gJycgJiYgdGhpcy5jaGFyc1RvU2hvd0F1dG9jb21wbGV0ZUxpc3QpIHtcbiAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja0F1dG9jb21wbGV0ZU1lbnVDaGFuZ2UoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5hdXRvY29tcGxldGVMaXN0KSB7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBfZ2V0UGFyc2VkVGFnKHRhZzogc3RyaW5nKTogYW55IHtcbiAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICBjYXNlICdudW1iZXInOiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0YWcpO1xuICAgICAgICAgfVxuICAgICAgICAgY2FzZSAnaW50ZWdlcic6IHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0YWcsIDApO1xuICAgICAgICAgfVxuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB0YWc7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgX2ZvcmNlUmVzZXRBdXRvQ29tcGxldGVMaXN0KCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmNoYXJzVG9TaG93QXV0b2NvbXBsZXRlTGlzdCAmJiB0aGlzLndpdGhBdXRvY29tcGxldGUpIHtcbiAgICAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dC5pbm5lclRleHQgPSAnJztcbiAgICAgICAgIGNvbnN0IGV2ZW50OiBhbnkgPSBuZXcgRXZlbnQoJ2lucHV0Jywge1xuICAgICAgICAgICAgJ2J1YmJsZXMnOiB0cnVlXG4gICAgICAgICB9KTtcbiAgICAgICAgIGV2ZW50LmRhdGEgPSAnJztcbiAgICAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==