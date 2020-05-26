/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag-input/st-tag-input.component.ts
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
var StTagInputComponent = /** @class */ (function () {
    function StTagInputComponent(_selectElement, _cd) {
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
        function (_) {
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StTagInputComponent.prototype, "disabled", {
        /** @input {boolean} [disabled=false] Disable the component. It is false by default */
        get: /**
         * \@input {boolean} [disabled=false] Disable the component. It is false by default
         * @return {?}
         */
        function () {
            return this._isDisabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDisabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.label !== null && this.label.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._focus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !this._focus && !this.items.length && this.placeholder && this.placeholder.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "hasAutocomplete", {
        get: /**
         * @return {?}
         */
        function () {
            return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "disableValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isDisabled === true ? '' : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "isValidInput", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var isForbidden = this.forbiddenValues.length && this.forbiddenValues.indexOf(this.innerInputContent) > -1;
            /** @type {?} */
            var isDuplicated = this.items.indexOf(this.innerInputContent) !== -1;
            /** @type {?} */
            var matchedPattern = this.regularExpression ? this._regularExp.test(this.innerInputContent) : true;
            return this.innerInputContent.length ? !isForbidden && !isDuplicated && matchedPattern : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "tagSelected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "selectId", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var select = this._selectElement.nativeElement;
            return select.getAttribute('id') !== null ? select.id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-input" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "labelId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-label" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "tagId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-tag-" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StTagInputComponent.prototype, "listId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectId !== null ? this.selectId + "-autocomplete" : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTagInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StTagInputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.checkAutocompleteMenuChange(changes);
        if (this.forceValidations) {
            this.writeValue(this.items);
        }
        this._cd.markForCheck();
    };
    /**
     * @param {?} data
     * @return {?}
     */
    StTagInputComponent.prototype.writeValue = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a;
        if (data && Array.isArray(data) && data.length) {
            this.items = [];
            try {
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var value = data_1_1.value;
                    /** @type {?} */
                    var parsedValue = this._getParsedTag(value);
                    if (parsedValue || !isNaN(parsedValue)) {
                        this.items.push(parsedValue);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.onChange(this.items);
            this.isPristine = false;
            this._cd.markForCheck();
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    StTagInputComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
        this._cd.markForCheck();
    };
    /**
     * @param {?} control
     * @return {?}
     */
    StTagInputComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StTagInputComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StTagInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // Input actions
    // Input actions
    /**
     * @param {?} text
     * @return {?}
     */
    StTagInputComponent.prototype.onInputText = 
    // Input actions
    /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.innerInputContent = text;
        this.showAutocompleteMenu();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onInputFocusIn = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isDisabled) {
            this._focus = true;
            this._newElementInput.focus();
            this._forceResetAutoCompleteList();
            this.showAutocompleteMenu();
        }
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onInputFocusOut = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.expandedMenu) {
            this._focus = false;
            this.addCurrentTag();
        }
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onInputKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    // Tag actions
    // Tag actions
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagKeyDown = 
    // Tag actions
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
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
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagFocusIn = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        if (!this._isDisabled) {
            this._focus = true;
            this.addCurrentTag();
            this.expandedMenu = false;
            this._selected = index;
        }
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagFocusOut = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        this._focus = false;
        this._selected = null;
    };
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.onTagClick = /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        event.stopPropagation();
        event.preventDefault();
    };
    // Dropdown actions
    // Dropdown actions
    /**
     * @param {?} data
     * @return {?}
     */
    StTagInputComponent.prototype.onListSelect = 
    // Dropdown actions
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._focus = false;
        if (data.value.length && this.items.indexOf(data.value) === -1) {
            this.addTag(data.value);
        }
        else {
            this.clearInput();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StTagInputComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.expandedMenu) {
            this._focus = false;
            this.addCurrentTag();
        }
    };
    /**
     * @return {?}
     */
    StTagInputComponent.prototype.showError = /**
     * @return {?}
     */
    function () {
        return typeof this.errorMessage === 'string' && (!this.isPristine || this.forceValidations) && !this._focus && !this.disabled;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    StTagInputComponent.prototype.deleteTag = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.items.splice(index, 1);
        this.onChange(this.items);
        this._newElementInput.value = '';
        this.innerInputContent = '';
        this._newElementInput.dispatchEvent(new Event('input'));
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    StTagInputComponent.prototype.addTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var parsedValue = this._getParsedTag(tag);
        if (parsedValue || !isNaN(parsedValue)) {
            this.items.push(parsedValue);
            this.clearInput();
            this.onChange(this.items);
            this.isPristine = false;
        }
        this.showErrorValue = this.showError();
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype.addCurrentTag = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.innerInputContent.length && this.isValidInput) {
            this.addTag(this.innerInputContent);
        }
        else {
            this.clearInput();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype.clearInput = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.expandedMenu) {
            this.expandedMenu = false;
        }
        this.innerInputContent = '';
        this._newElementInput.innerText = '';
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype.showAutocompleteMenu = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.withAutocomplete && !this.expandedMenu && this.charsToShowAutocompleteList <= this.innerInputContent.length) {
            this.expandedMenu = true;
        }
        if (this.innerInputContent === '' && this.charsToShowAutocompleteList) {
            this.expandedMenu = false;
        }
        this._cd.markForCheck();
    };
    /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    StTagInputComponent.prototype.checkAutocompleteMenuChange = /**
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.autocompleteList) {
            this._cd.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    StTagInputComponent.prototype._getParsedTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
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
    };
    /**
     * @private
     * @return {?}
     */
    StTagInputComponent.prototype._forceResetAutoCompleteList = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.charsToShowAutocompleteList && this.withAutocomplete) {
            this._newElementInput.innerText = '';
            /** @type {?} */
            var event_1 = new Event('input', {
                'bubbles': true
            });
            event_1.data = '';
            this._newElementInput.dispatchEvent(event_1);
        }
    };
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
                            function () { return StTagInputComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StTagInputComponent; })), multi: true }
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:block;width:100%;position:relative}.inner-input{border:0;outline:0;display:inline-block;padding:5px 10px;vertical-align:top;margin-bottom:5px;overflow:hidden;max-width:100%;min-height:30px}.tag-item{display:inline-block;margin-right:5px;overflow:hidden;max-width:100%}.tag-item:focus{outline:0}.st-tag-input__placeholder{display:inline-block;padding-top:5px}"]
                }] }
    ];
    /** @nocollapse */
    StTagInputComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return StTagInputComponent;
}());
export { StTagInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdGFnLWlucHV0L3N0LXRhZy1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLE9BQU8sRUFDSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBSUwsU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBcUMsYUFBYSxFQUFFLGlCQUFpQixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENoSDtJQWtFRyw2QkFBb0IsY0FBMEIsRUFDMUIsR0FBc0I7UUFEdEIsbUJBQWMsR0FBZCxjQUFjLENBQVk7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFwRGpDLFVBQUssR0FBa0IsSUFBSSxDQUFDOzs7O1FBRTVCLFlBQU8sR0FBa0IsSUFBSSxDQUFDOzs7O1FBRTlCLGdCQUFXLEdBQWtCLElBQUksQ0FBQzs7OztRQUVsQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7Ozs7UUFFbkMsU0FBSSxHQUFrQixNQUFNLENBQUM7Ozs7UUFHN0IscUJBQWdCLEdBQVksS0FBSyxDQUFDOzs7O1FBRWxDLHFCQUFnQixHQUFpRCxFQUFFLENBQUM7Ozs7UUFFcEUsZ0NBQTJCLEdBQVcsQ0FBQyxDQUFDOzs7O1FBRXhDLGtCQUFhLEdBQVksSUFBSSxDQUFDOzs7OztRQU85QixvQkFBZSxHQUFhLEVBQUUsQ0FBQzs7OztRQUUvQixzQkFBaUIsR0FBZSxJQUFJLENBQUM7Ozs7UUFFckMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBS3BDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLFVBQUssR0FBVSxFQUFF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O3dCQXNFaEIsS0FBSzswQkFFTCxLQUFLOzhCQUVMLEtBQUs7K0JBRUwsS0FBSzt1QkFFTCxLQUFLO21DQUdMLEtBQUs7bUNBRUwsS0FBSzs4Q0FFTCxLQUFLO2dDQUVMLEtBQUs7OEJBRUwsS0FBSztrQ0FLTCxLQUFLO29DQUVMLEtBQUs7bUNBRUwsS0FBSztrQ0FFTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzsrQkFDdEMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7MkJBeUJ6QyxLQUFLO2tDQXFCTCxXQUFXLFNBQUMsa0NBQWtDOztJQWlUbEQsMEJBQUM7Q0FBQSxBQTdZRCxJQTZZQztTQWpZWSxtQkFBbUI7Ozs7OztJQUc3QixvQ0FBcUM7Ozs7O0lBRXJDLHNDQUF1Qzs7Ozs7SUFFdkMsMENBQTJDOzs7OztJQUUzQywyQ0FBNEM7Ozs7O0lBRTVDLG1DQUFzQzs7Ozs7SUFHdEMsK0NBQTJDOzs7OztJQUUzQywrQ0FBNkU7Ozs7O0lBRTdFLDBEQUFpRDs7Ozs7SUFFakQsNENBQXVDOzs7OztJQUV2QywwQ0FBNkI7Ozs7OztJQUs3Qiw4Q0FBd0M7Ozs7O0lBRXhDLGdEQUE4Qzs7Ozs7SUFFOUMsK0NBQTJDOztJQUUzQyw4Q0FBcUU7O0lBQ3JFLDJDQUFxRTs7SUFFckUsMkNBQXFDOztJQUNyQyxvQ0FBeUI7O0lBQ3pCLGdEQUFzQzs7SUFDdEMseUNBQWtDOztJQUNsQyw2Q0FBdUM7Ozs7O0lBRXZDLHFDQUFnQzs7Ozs7SUFDaEMsMENBQXFDOzs7OztJQUNyQywrQ0FBeUQ7Ozs7O0lBQ3pELHdDQUF3Qzs7Ozs7SUFDeEMsMENBQTRCOztJQUU1Qix1Q0FDQzs7SUFFRCx3Q0FDQzs7Ozs7SUFFVyw2Q0FBa0M7Ozs7O0lBQ2xDLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgIENvbXBvbmVudCxcbiAgIEVsZW1lbnRSZWYsXG4gICBmb3J3YXJkUmVmLFxuICAgSG9zdEJpbmRpbmcsXG4gICBJbnB1dCxcbiAgIE9uQ2hhbmdlcyxcbiAgIE9uSW5pdCxcbiAgIFNpbXBsZUNoYW5nZXMsXG4gICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIE5HX1ZBTFVFX0FDQ0VTU09SLCBWYWxpZGF0b3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFN0RHJvcERvd25NZW51R3JvdXAsIFN0RHJvcERvd25NZW51SXRlbSB9IGZyb20gJy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBUYWcgSW5wdXRcbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBhIHRleHQgaW5wdXQgYm94IHRoYXQgYXV0b21hdGljYWxseSBjcmVhdGVzIHRhZ3Mgb3V0IG9mIGEgdHlwZWQgdGV4dC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXRhZy1pbnB1dFxuICogICAgY2xhc3M9XCJzdC1mb3JtLWZpZWxkXCJcbiAqICAgIG5hbWU9XCJ0YWctaW5wdXQtcmVhY3RpdmVcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwidGFnLWlucHV0LXJlYWN0aXZlXCJcbiAqICAgIFthdXRvY29tcGxldGVMaXN0XT1cImZpbHRlcmVkbGlzdFwiXG4gKiAgICBbd2l0aEF1dG9jb21wbGV0ZV09XCJ0cnVlXCJcbiAqICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gKiAgICBbbGFiZWxdPVwiJ1RhZyBJbnB1dCB3aXRoIFJlYWN0aXZlIEZvcm0nXCJcbiAqICAgIFtpZF09XCIndGFnLWlucHV0LXJlYWN0aXZlJ1wiXG4gKiAgICBbcGxhY2Vob2xkZXJdPVwiJ0FkZCB0YWdzIHNlcGFyYXRlZCBieSBjb21tYXMnXCJcbiAqICAgIFt0b29sdGlwXT1cIidUaGlzIGlzIGEgVGFnIElucHV0IGNvbXBvbmVudCB0b29sdGlwJ1wiXG4gKiAgICBbZm9yYmlkZGVuVmFsdWVzXT1cIlsndGVzdCddXCJcbiAqICAgIChpbnB1dCk9XCJvbkZpbHRlckxpc3QoJGV2ZW50KVwiPlxuICogPC9zdC10YWctaW5wdXQ+XG4gKiA8c3QtdGFnLWlucHV0XG4gKiAgICBjbGFzcz1cInN0LWZvcm0tZmllbGRcIlxuICogICAgbmFtZT1cInRhZy1pbnB1dC10ZW1wbGF0ZS1kcml2ZW5cIlxuICogICAgWyhuZ01vZGVsKV09XCJ0YWdzLnRlbXBsYXRlRHJpdmVuXCJcbiAqICAgIFthdXRvY29tcGxldGVMaXN0XT1cImZpbHRlcmVkbGlzdFwiXG4gKiAgICBbd2l0aEF1dG9jb21wbGV0ZV09XCJ0cnVlXCJcbiAqICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gKiAgICBbbGFiZWxdPVwiJ1RhZyBJbnB1dCB3aXRoIFRlbXBsYXRlIERyaXZlbiBGb3JtJ1wiXG4gKiAgICBbaWRdPVwiJ3RhZy1pbnB1dC10ZW1wbGF0ZS1kcml2ZW4nXCJcbiAqICAgIFtwbGFjZWhvbGRlcl09XCInQWRkIHRhZ3Mgc2VwYXJhdGVkIGJ5IGNvbW1hcydcIlxuICogICAgW3Rvb2x0aXBdPVwiJ1RoaXMgaXMgYSBUYWcgSW5wdXQgY29tcG9uZW50IHRvb2x0aXAnXCJcbiAqICAgIFtyZWd1bGFyRXhwcmVzc2lvbl09XCJwYXR0ZXJuXCJcbiAqICAgIChpbnB1dCk9XCJvbkZpbHRlckxpc3QoJGV2ZW50KVwiPlxuICogPC9zdC10YWctaW5wdXQ+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXRhZy1pbnB1dCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdGFnLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXRhZy1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICAgaG9zdDoge1xuICAgICAgJ2NsYXNzJzogJ3N0LXRhZy1pbnB1dCdcbiAgIH0sXG4gICBwcm92aWRlcnM6IFtcbiAgICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0VGFnSW5wdXRDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdFRhZ0lucHV0Q29tcG9uZW50KSwgbXVsdGk6IHRydWUgfV0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFRhZ0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAvKiogQGlucHV0IHtzdHJpbmcgfCBudWxsfSBbbGFiZWw9bnVsbF0gTGFiZWwgdG8gc2hvdyBvdmVyIHRoZSBpbnB1dC4gSXQgaXMgZW1wdHkgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nIHwgbnVsbH0gW3Rvb2x0aXA9bnVsbF0gVGhlIHRvb2x0aXAgdG8gc2hvdyAgb3ZlciB0aGUgbGFiZWwuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nIHwgbnVsbH0gW3BsYWNlaG9sZGVyPW51bGxdIFRoZSB0ZXh0IHRoYXQgYXBwZWFycyBhcyBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXQuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgIC8qKiBAaW5wdXQge3N0cmluZyB8IG51bGx9IFtlcnJvck1lc3NhZ2U9bnVsbF0gRXJyb3IgbWVzc2FnZSB0byBzaG93LiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nIHwgbnVsbH0gW3R5cGU9bnVsbF0gVHlwZSBvZiB0aGUgaXRlbXMgKi9cbiAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZyB8IG51bGwgPSAndGV4dCc7XG5cbiAgIC8qKiBAaW5wdXQge2Jvb2xlYW59IFt3aXRoQXV0b2NvbXBsZXRlPWZhbHNlXSBFbmFibGUgYXV0b2NvbXBsZXRlIGZlYXR1cmUuIEl0IGlzIGZhbHNlIGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIHdpdGhBdXRvY29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBAaW5wdXQgeyhTdERyb3BEb3duTWVudUl0ZW0gfCBTdERyb3BEb3duTWVudUdyb3VwKVtdfSBbYXV0b2NvbXBsZXRlTGlzdD1BcnJheSgpXSBMaXN0IHRvIGJlIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSBmZWF0dXJlLiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBhdXRvY29tcGxldGVMaXN0OiAoU3REcm9wRG93bk1lbnVJdGVtIHwgU3REcm9wRG93bk1lbnVHcm91cClbXSA9IFtdO1xuICAgLyoqIEBpbnB1dCB7Ym9vbGVhbn0gW2NoYXJzVG9TaG93QXV0b2NvbXBsZXRlTGlzdD1BcnJheSgpXSBMaXN0IHRvIGJlIHVzZWQgZm9yIGF1dG9jb21wbGV0ZSBmZWF0dXJlLiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBjaGFyc1RvU2hvd0F1dG9jb21wbGV0ZUxpc3Q6IG51bWJlciA9IDE7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBbYWxsb3dGcmVlVGV4dD10cnVlXSBCb29sZWFuIHRvIGFsbG93IHVzZXIgdG8gdHlwZSBhIGZyZWUgdGV4dCBvciBub3QgKi9cbiAgIEBJbnB1dCgpIGFsbG93RnJlZVRleHQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nfSBbaW5mb01lc3NhZ2U9XSBNZXNzYWdlIHVzZWQgdG8gaW5mb3JtIHVzZXIgYWJvdXQgd2hhdCB2YWx1ZXMgaGUgaGFzIHRvIGludHJvZHVjZSAqL1xuICAgQElucHV0KCkgaW5mb01lc3NhZ2U6IHN0cmluZztcblxuICAgLyoqIEBpbnB1dCB7c3RyaW5nW119IFtmb3JiaWRkZW5WYWx1ZXM9QXJyYXkoKV0gQSBsaXN0IG9mIHZhbHVlcyB0aGF0IHVzZXIgY2FuIG5vdCB0eXBlIGFuZCBpZiBoZSB0eXBlcyBvbmUgb2YgdGhlbSxcbiAgICAqIHRhZyBpbnB1dCB3aWxsIGJlIGludmFsaWQuIEl0IGlzIGVtcHR5IGJ5IGRlZmF1bHRcbiAgICAqL1xuICAgQElucHV0KCkgZm9yYmlkZGVuVmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nfSBbcmVndWxhckV4cHJlc3Npb249XSBSZWd1bGFyIGV4cHJlc3Npb24gdG8gdmFsaWRhdGUgdmFsdWVzLiBJdCBpcyBudWxsIGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpIHJlZ3VsYXJFeHByZXNzaW9uOiBhbnkgfCBudWxsID0gbnVsbDtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtmb3JjZVZhbGlkYXRpb25zPWZhbHNlXSBJZiB5b3Ugc3BlY2lmeSBpdCB0byAndHJ1ZScsIHRoZSB0YWcgaW5wdXQgY2hlY2tzIHRoZSBlcnJvcnMgYmVmb3JlIGJlaW5nIG1vZGlmaWVkIGJ5IHVzZXIgKi9cbiAgIEBJbnB1dCgpIGZvcmNlVmFsaWRhdGlvbnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgQFZpZXdDaGlsZCgnbmV3RWxlbWVudCcsIHtzdGF0aWM6IHRydWV9KSBuZXdFbGVtZW50SW5wdXQ6IEVsZW1lbnRSZWY7XG4gICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7c3RhdGljOiBmYWxzZX0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcblxuICAgcHVibGljIGV4cGFuZGVkTWVudTogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGl0ZW1zOiBhbnlbXSA9IFtdO1xuICAgcHVibGljIGlubmVySW5wdXRDb250ZW50OiBzdHJpbmcgPSAnJztcbiAgIHB1YmxpYyBpc1ByaXN0aW5lOiBib29sZWFuID0gdHJ1ZTtcbiAgIHB1YmxpYyBzaG93RXJyb3JWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBwcml2YXRlIF9mb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHJpdmF0ZSBfaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHJpdmF0ZSBfbmV3RWxlbWVudElucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICBwcml2YXRlIF9zZWxlY3RlZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gICBwcml2YXRlIF9yZWd1bGFyRXhwOiBSZWdFeHA7XG5cbiAgIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge1xuICAgfVxuXG4gICBvblRvdWNoZWQgPSAoKSA9PiB7XG4gICB9XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGVjdEVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgLyoqIEBpbnB1dCB7Ym9vbGVhbn0gW2Rpc2FibGVkPWZhbHNlXSBEaXNhYmxlIHRoZSBjb21wb25lbnQuIEl0IGlzIGZhbHNlIGJ5IGRlZmF1bHQgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5faXNEaXNhYmxlZDtcbiAgIH1cblxuICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9pc0Rpc2FibGVkID0gdmFsdWU7XG4gICB9XG5cbiAgIGdldCBoYXNMYWJlbCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmxhYmVsICE9PSBudWxsICYmIHRoaXMubGFiZWwubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgZ2V0IGhhc0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzO1xuICAgfVxuXG4gICBnZXQgaGFzUGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gIXRoaXMuX2ZvY3VzICYmICF0aGlzLml0ZW1zLmxlbmd0aCAmJiB0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMucGxhY2Vob2xkZXIubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC10YWctaW5wdXQtLWF1dG9jb21wbGV0ZScpXG4gICBnZXQgaGFzQXV0b2NvbXBsZXRlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRNZW51ICYmIHRoaXMuYXV0b2NvbXBsZXRlTGlzdCAmJiB0aGlzLmF1dG9jb21wbGV0ZUxpc3QubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgZ2V0IGRpc2FibGVWYWx1ZSgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0Rpc2FibGVkID09PSB0cnVlID8gJycgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgaXNWYWxpZElucHV0KCk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgaXNGb3JiaWRkZW4gPSB0aGlzLmZvcmJpZGRlblZhbHVlcy5sZW5ndGggJiYgdGhpcy5mb3JiaWRkZW5WYWx1ZXMuaW5kZXhPZih0aGlzLmlubmVySW5wdXRDb250ZW50KSA+IC0xO1xuICAgICAgY29uc3QgaXNEdXBsaWNhdGVkID0gdGhpcy5pdGVtcy5pbmRleE9mKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQpICE9PSAtMTtcbiAgICAgIGNvbnN0IG1hdGNoZWRQYXR0ZXJuID0gdGhpcy5yZWd1bGFyRXhwcmVzc2lvbiA/IHRoaXMuX3JlZ3VsYXJFeHAudGVzdCh0aGlzLmlubmVySW5wdXRDb250ZW50KSA6IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGggPyAhaXNGb3JiaWRkZW4gJiYgIWlzRHVwbGljYXRlZCAmJiBtYXRjaGVkUGF0dGVybiA6IHRydWU7XG4gICB9XG5cbiAgIGdldCB0YWdTZWxlY3RlZCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgIH1cblxuICAgZ2V0IHNlbGVjdElkKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgY29uc3Qgc2VsZWN0OiBIVE1MRWxlbWVudCA9IHRoaXMuX3NlbGVjdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIHJldHVybiBzZWxlY3QuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSBudWxsID8gc2VsZWN0LmlkIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJZCAhPT0gbnVsbCA/IGAke3RoaXMuc2VsZWN0SWR9LWlucHV0YCA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBsYWJlbElkKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0SWQgIT09IG51bGwgPyBgJHt0aGlzLnNlbGVjdElkfS1sYWJlbGAgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgdGFnSWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RJZCAhPT0gbnVsbCA/IGAke3RoaXMuc2VsZWN0SWR9LXRhZy1gIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGxpc3RJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0SWQgIT09IG51bGwgPyBgJHt0aGlzLnNlbGVjdElkfS1hdXRvY29tcGxldGVgIDogbnVsbDtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQgPSB0aGlzLm5ld0VsZW1lbnRJbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgIGNhc2UgJ251bWJlcic6IHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhckV4cHJlc3Npb24gPSAnXlxcXFxkKyhcXFxcLlxcXFxkKyk/JCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgJ2ludGVnZXInOiB7XG4gICAgICAgICAgICB0aGlzLnJlZ3VsYXJFeHByZXNzaW9uID0gJ15cXFxcZCskJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3JlZ3VsYXJFeHAgPSBuZXcgUmVnRXhwKHRoaXMucmVndWxhckV4cHJlc3Npb24pO1xuICAgICAgdGhpcy5zaG93RXJyb3JWYWx1ZSA9IHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICB0aGlzLmNoZWNrQXV0b2NvbXBsZXRlTWVudUNoYW5nZShjaGFuZ2VzKTtcbiAgICAgIGlmICh0aGlzLmZvcmNlVmFsaWRhdGlvbnMpIHtcbiAgICAgICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLml0ZW1zKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICB3cml0ZVZhbHVlKGRhdGE6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKGRhdGEgJiYgQXJyYXkuaXNBcnJheShkYXRhKSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMuX2dldFBhcnNlZFRhZyh2YWx1ZSk7XG4gICAgICAgICAgICBpZiAocGFyc2VkVmFsdWUgfHwgIWlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKHBhcnNlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5pdGVtcyk7XG4gICAgICAgICB0aGlzLmlzUHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgdmFsaWRhdGUoY29udHJvbDogRm9ybUNvbnRyb2wpOiBhbnkge1xuICAgfVxuXG4gICAvLyBSZWdpc3RyeSB0aGUgY2hhbmdlIGZ1bmN0aW9uIHRvIHByb3BhZ2F0ZSBpbnRlcm5hbCBtb2RlbCBjaGFuZ2VzXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIC8vIElucHV0IGFjdGlvbnNcbiAgIG9uSW5wdXRUZXh0KHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5pbm5lcklucHV0Q29udGVudCA9IHRleHQ7XG4gICAgICB0aGlzLnNob3dBdXRvY29tcGxldGVNZW51KCk7XG4gICB9XG5cbiAgIG9uSW5wdXRGb2N1c0luKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLl9pc0Rpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgIHRoaXMuX2ZvcmNlUmVzZXRBdXRvQ29tcGxldGVMaXN0KCk7XG4gICAgICAgICB0aGlzLnNob3dBdXRvY29tcGxldGVNZW51KCk7XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgIH1cblxuICAgb25JbnB1dEZvY3VzT3V0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmV4cGFuZGVkTWVudSkge1xuICAgICAgICAgdGhpcy5fZm9jdXMgPSBmYWxzZTtcbiAgICAgICAgIHRoaXMuYWRkQ3VycmVudFRhZygpO1xuICAgICAgfVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICB9XG5cbiAgIG9uSW5wdXRLZXlEb3duKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgY2FzZSAxODg6IC8vIENvbW1hXG4gICAgICAgICBjYXNlIDEzOiAvLyBFbnRlclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQubGVuZ3RoICYmIHRoaXMuaXNWYWxpZElucHV0KSB7XG4gICAgICAgICAgICAgICB0aGlzLmFkZFRhZyh0aGlzLmlubmVySW5wdXRDb250ZW50KTtcbiAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlUmVzZXRBdXRvQ29tcGxldGVMaXN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIDk6IC8vIFRhYlxuICAgICAgICAgICAgaWYgKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQubGVuZ3RoICYmIHRoaXMuaXNWYWxpZElucHV0KSB7XG4gICAgICAgICAgICAgICB0aGlzLmFkZFRhZyh0aGlzLmlubmVySW5wdXRDb250ZW50KTtcbiAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSA0NjogLy8gRGVsZXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSA4OiAvLyBCYWNrc3BhY2VcbiAgICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCAmJiAhdGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gVGFnIGFjdGlvbnNcbiAgIG9uVGFnS2V5RG93bihldmVudDogYW55LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgIGNhc2UgODogLy8gQmFja3NwYWNlXG4gICAgICAgICBjYXNlIDQ2OiAvLyBEZWxldGVcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgdGhpcy5kZWxldGVUYWcodGhpcy5fc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgdGhpcy5fbmV3RWxlbWVudElucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgMzc6IC8vIExlZnRcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCA+IDApIHtcbiAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgMzk6IC8vIFJpZ2h0XG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uVGFnRm9jdXNJbihldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5faXNEaXNhYmxlZCkge1xuICAgICAgICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgICAgICAgdGhpcy5hZGRDdXJyZW50VGFnKCk7XG4gICAgICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBpbmRleDtcbiAgICAgIH1cbiAgIH1cblxuICAgb25UYWdGb2N1c091dChldmVudDogRXZlbnQsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gICB9XG5cbiAgIG9uVGFnQ2xpY2soZXZlbnQ6IEV2ZW50LCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICB9XG5cbiAgIC8vIERyb3Bkb3duIGFjdGlvbnNcbiAgIG9uTGlzdFNlbGVjdChkYXRhOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gZmFsc2U7XG4gICAgICBpZiAoZGF0YS52YWx1ZS5sZW5ndGggJiYgdGhpcy5pdGVtcy5pbmRleE9mKGRhdGEudmFsdWUpID09PSAtMSkge1xuICAgICAgICAgdGhpcy5hZGRUYWcoZGF0YS52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuZXhwYW5kZWRNZW51KSB7XG4gICAgICAgICB0aGlzLl9mb2N1cyA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5hZGRDdXJyZW50VGFnKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHNob3dFcnJvcigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5lcnJvck1lc3NhZ2UgPT09ICdzdHJpbmcnICYmICghdGhpcy5pc1ByaXN0aW5lIHx8IHRoaXMuZm9yY2VWYWxpZGF0aW9ucykgJiYgIXRoaXMuX2ZvY3VzICYmICF0aGlzLmRpc2FibGVkO1xuICAgfVxuXG5cbiAgIGRlbGV0ZVRhZyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuaXRlbXMpO1xuXG4gICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuaW5uZXJJbnB1dENvbnRlbnQgPSAnJztcbiAgICAgIHRoaXMuX25ld0VsZW1lbnRJbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICB9XG5cbiAgIHByaXZhdGUgYWRkVGFnKHRhZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZSA9IHRoaXMuX2dldFBhcnNlZFRhZyh0YWcpO1xuICAgICAgaWYgKHBhcnNlZFZhbHVlIHx8ICFpc05hTihwYXJzZWRWYWx1ZSkpIHtcbiAgICAgICAgIHRoaXMuaXRlbXMucHVzaChwYXJzZWRWYWx1ZSk7XG4gICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5pdGVtcyk7XG4gICAgICAgICB0aGlzLmlzUHJpc3RpbmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd0Vycm9yVmFsdWUgPSB0aGlzLnNob3dFcnJvcigpO1xuICAgfVxuXG4gICBwcml2YXRlIGFkZEN1cnJlbnRUYWcoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pbm5lcklucHV0Q29udGVudC5sZW5ndGggJiYgdGhpcy5pc1ZhbGlkSW5wdXQpIHtcbiAgICAgICAgIHRoaXMuYWRkVGFnKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGNsZWFySW5wdXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5leHBhbmRlZE1lbnUpIHtcbiAgICAgICAgIHRoaXMuZXhwYW5kZWRNZW51ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmlubmVySW5wdXRDb250ZW50ID0gJyc7XG4gICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQuaW5uZXJUZXh0ID0gJyc7XG4gICB9XG5cbiAgIHByaXZhdGUgc2hvd0F1dG9jb21wbGV0ZU1lbnUoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy53aXRoQXV0b2NvbXBsZXRlICYmICF0aGlzLmV4cGFuZGVkTWVudSAmJiB0aGlzLmNoYXJzVG9TaG93QXV0b2NvbXBsZXRlTGlzdCA8PSB0aGlzLmlubmVySW5wdXRDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaW5uZXJJbnB1dENvbnRlbnQgPT09ICcnICYmIHRoaXMuY2hhcnNUb1Nob3dBdXRvY29tcGxldGVMaXN0KSB7XG4gICAgICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgY2hlY2tBdXRvY29tcGxldGVNZW51Q2hhbmdlKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuYXV0b2NvbXBsZXRlTGlzdCkge1xuICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgX2dldFBhcnNlZFRhZyh0YWc6IHN0cmluZyk6IGFueSB7XG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgY2FzZSAnbnVtYmVyJzoge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGFnKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGNhc2UgJ2ludGVnZXInOiB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGFnLCAwKTtcbiAgICAgICAgIH1cbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdGFnO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIF9mb3JjZVJlc2V0QXV0b0NvbXBsZXRlTGlzdCgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5jaGFyc1RvU2hvd0F1dG9jb21wbGV0ZUxpc3QgJiYgdGhpcy53aXRoQXV0b2NvbXBsZXRlKSB7XG4gICAgICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgICBjb25zdCBldmVudDogYW55ID0gbmV3IEV2ZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgICdidWJibGVzJzogdHJ1ZVxuICAgICAgICAgfSk7XG4gICAgICAgICBldmVudC5kYXRhID0gJyc7XG4gICAgICAgICB0aGlzLl9uZXdFbGVtZW50SW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICB9XG4gICB9XG59XG4iXX0=