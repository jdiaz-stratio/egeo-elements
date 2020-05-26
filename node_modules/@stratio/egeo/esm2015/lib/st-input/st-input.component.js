/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-input/st-input.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostBinding, Input, Output, ViewChildren } from '@angular/core';
import { FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@description {Component} Input
 *
 * This component specifies an input field where the user can enter data.
 *
 * \@model
 *
 *   [Error messages] {./st-input.error.model.ts#StInputError}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-input class="st-form-field"
 *    type="text"
 *    formControlName="name"
 *    placeholder="Enter your name"
 *    label="Field"
 *    default="default name"
 *    contextualHelp="This is a normal field">
 * </st-input>
 * ```
 */
export class StInputComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        /**
         * \@input {string} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
         */
        this.placeholder = '';
        /**
         * \@input {string} [name=''] Input name
         */
        this.name = '';
        /**
         * \@input {string} [label=''] Label to show over the input. It is empty by default
         */
        this.label = '';
        /**
         * \@input {'text' | 'number' | 'password'} [fieldType='text'] Input type
         */
        this.fieldType = 'text';
        /**
         * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the input checks the errors before being modified by user
         */
        this.forceValidations = false;
        /**
         * \@Input {boolean} [isFocused=false] If true, the input will be focused on view init.
         */
        this.isFocused = false;
        /**
         * \@Input {boolean} [readonly=''] This parameter disables the input and it can not be modified by the user
         */
        this.readonly = false;
        /**
         * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
         */
        this.autocompleteList = [];
        /**
         * \@input {number} [charsToShowAutocompleteList=1] Number of characters before displaying autocomplete list. By default is 1
         */
        this.charsToShowAutocompleteList = 1;
        /**
         * \@Output {} [blur] Notify when user leaves a field
         */
        this.blur = new EventEmitter();
        this.disabled = false; // To check disable
        // To check disable
        this.displayResetButtonValue = false;
        this.focus = false;
        this.errorMessage = undefined;
        this.showErrorValue = false;
        this.expandedMenu = false;
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
     * \@Input {any} [value=''] Value of the input
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @return {?}
     */
    get showAutocompleteList() {
        return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = control.statusChanges.subscribe((/**
         * @return {?}
         */
        () => this.checkErrors(control)));
    }
    /**
     * @param {?} change
     * @return {?}
     */
    ngOnChanges(change) {
        if (this.forceValidations && this.internalControl) {
            this.writeValue(this.internalControl.value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.internalControl = new FormControl(this.internalInputModel);
        this.valueChangeSub = this.internalControl.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.onChange(this.getTypedValue(value));
            this.showAutocompleteMenu();
            this.showErrorValue = this.showError();
            this.displayResetButtonValue = this.displayResetButton();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isFocused) {
            this.focus = true;
            this.vc.first.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.valueChangeSub) {
            this.valueChangeSub.unsubscribe();
        }
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.internalInputModel = value;
        this._value = value;
        this.internalControl.setValue(this.getTypedValue(value));
    }
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // Registry the touch function to propagate internal touch events TODO: make this function.
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disable
     * @return {?}
     */
    setDisabledState(disable) {
        this.disabled = disable;
        if (this.disabled && this.internalControl && this.internalControl.enabled) {
            this.internalControl.disable();
        }
        else if (!this.disabled && this.internalControl && this.internalControl.disabled) {
            this.internalControl.enable();
        }
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    showError() {
        return this.errorMessage !== undefined && (!this.internalControl.pristine || this.forceValidations) && !this.focus && !this.disabled;
    }
    /**
     * @return {?}
     */
    get labelQaTag() {
        return (this.qaTag || this.name) + '-label';
    }
    /**
     * @return {?}
     */
    displayResetButton() {
        return this.default !== undefined && this.internalControl.dirty && this.internalControl.value !== this.default;
    }
    /**
     * @return {?}
     */
    resetToDefault() {
        this.writeValue(this.default);
        this._cd.markForCheck();
    }
    /**
     * Autocomplete list actions
     * @param {?} data
     * @return {?}
     */
    onListSelect(data) {
        if (data && data.value && data.value.length) {
            this.writeValue(data.value);
        }
        else {
            this.writeValue('');
        }
        this.expandedMenu = false;
        this._cd.markForCheck();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        if (this.expandedMenu) {
            this.expandedMenu = false;
        }
    }
    /**
     * Style functions
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        this.showErrorValue = this.showError();
        this.showAutocompleteMenu();
    }
    /**
     * @param {?} event
     * @param {?} emitEvent
     * @return {?}
     */
    onFocusOut(event, emitEvent) {
        this.focus = false;
        if (emitEvent) {
            this.blur.emit();
        }
        this.showErrorValue = this.showError();
    }
    // When status change call this function to check if have errors
    /**
     * @private
     * @param {?} control
     * @return {?}
     */
    checkErrors(control) {
        /** @type {?} */
        let errors = control.errors;
        this.errorMessage = this.getErrorMessage(errors);
        this._cd.markForCheck();
    }
    // Get error message in function of error list.
    /**
     * @private
     * @param {?} errors
     * @return {?}
     */
    getErrorMessage(errors) {
        if (!errors) {
            return undefined;
        }
        if (!this.errors) {
            return '';
        }
        if (errors.hasOwnProperty('required')) {
            return this.errors.required || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('fieldType')) {
            return this.errors.type || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('minlength')) {
            return this.errors.minLength || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('maxlength')) {
            return this.errors.maxLength || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('pattern')) {
            return this.errors.pattern || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('min')) {
            return this.errors.min || this.errors.generic || '';
        }
        if (errors.hasOwnProperty('max')) {
            return this.errors.max || this.errors.generic || '';
        }
        return '';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getTypedValue(value) {
        switch (this.fieldType) {
            case 'number':
                if (!value || isNaN(Number(value))) {
                    return value;
                }
                else {
                    return Number(value);
                }
            default:
                return value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    showAutocompleteMenu() {
        this.expandedMenu = this.focus && this.internalControl && this.charsToShowAutocompleteList <= (this.internalControl.value || '').length;
        this._cd.markForCheck();
    }
}
StInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-input',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<label *ngIf=\"label\" st-label class=\"st-input__label\"\n       [ngClass]=\"{error: showErrorValue, active: focus, disabled: disabled}\" name=\"name\"\n       [attr.id]=\"labelQaTag\" [attr.title]=\"contextualHelp\">\n   {{label}}\n</label>\n<div class=\"input-container\"  (clickOutside)=\"onClickOutside($event)\">\n   <input #input class=\"st-input\" (focus)=\"onFocus($event)\"\n          (focusout)=\"onFocusOut($event, false)\"\n          (blur)=\"onFocusOut($event, true)\"\n          [formControl]=\"internalControl\"\n          [placeholder]=\"placeholder\"\n          [step]=\"step\"\n          [name]=\"name\" [attr.type]=\"fieldType\" [attr.id]=\"qaTag\" [attr.maxlength]=\"maxLength\" [attr.min]=\"min\"\n          [attr.max]=\"max\"\n          [value]=\"value || null\" [readonly]=\"readonly\" [ngClass]=\"{error: showErrorValue}\">\n   <span *ngIf=\"displayResetButtonValue\" class=\"st-form-control-reset-button\" (click)=\"resetToDefault()\"\n         [style.opacity]=\"focus ? 1 : 0\">\n      <i class=\"icon-reload2\"></i>\n   </span>\n\n   <st-dropdown-menu *ngIf=\"autocompleteList\"\n      [attr.id]=\"labelQaTag + '-list'\"\n      [items]=\"autocompleteList\"\n      [placement]=\"'bottom-start'\"\n      [active]=\"showAutocompleteList\"\n      (change)=\"onListSelect($event)\">\n   </st-dropdown-menu>\n</div>\n\n<div class=\"st-input-error-layout\" *ngIf=\"showErrorValue\">\n   <span class=\"st-input-error-message\">{{errorMessage}}</span>\n</div>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StInputComponent)), multi: true },
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StInputComponent)), multi: true }
                ],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-input-container{position:relative}.st-input-container :invalid{box-shadow:none}.st-input{width:100%}.input-container{position:relative}"]
            }] }
];
/** @nocollapse */
StInputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StInputComponent.propDecorators = {
    placeholder: [{ type: Input }],
    name: [{ type: Input }],
    label: [{ type: Input }],
    fieldType: [{ type: Input }],
    errors: [{ type: Input }],
    qaTag: [{ type: Input }],
    forceValidations: [{ type: Input }],
    contextualHelp: [{ type: Input }],
    maxLength: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    isFocused: [{ type: Input }],
    readonly: [{ type: Input }],
    step: [{ type: Input }],
    default: [{ type: Input }],
    autocompleteList: [{ type: Input }],
    charsToShowAutocompleteList: [{ type: Input }],
    value: [{ type: Input }],
    blur: [{ type: Output }],
    vc: [{ type: ViewChildren, args: ['input',] }],
    showAutocompleteList: [{ type: HostBinding, args: ['class.st-input--autocomplete',] }]
};
if (false) {
    /**
     * \@input {string} [placeholder=null] The text that appears as placeholder of the input. It is empty by default
     * @type {?}
     */
    StInputComponent.prototype.placeholder;
    /**
     * \@input {string} [name=''] Input name
     * @type {?}
     */
    StInputComponent.prototype.name;
    /**
     * \@input {string} [label=''] Label to show over the input. It is empty by default
     * @type {?}
     */
    StInputComponent.prototype.label;
    /**
     * \@input {'text' | 'number' | 'password'} [fieldType='text'] Input type
     * @type {?}
     */
    StInputComponent.prototype.fieldType;
    /**
     * \@input {StInputError} [errors=] Customized error messages
     * @type {?}
     */
    StInputComponent.prototype.errors;
    /**
     * \@Input {string} [qaTag=''] Id value for qa test
     * @type {?}
     */
    StInputComponent.prototype.qaTag;
    /**
     * \@Input {boolean} [forceValidations=false] If you specify it to 'true', the input checks the errors before being modified by user
     * @type {?}
     */
    StInputComponent.prototype.forceValidations;
    /**
     * \@Input {string} [contextualHelp=''] It will be displayed when user clicks on the info button
     * @type {?}
     */
    StInputComponent.prototype.contextualHelp;
    /**
     * \@Input {string} [maxLength=''] Define a max-length for input field
     * @type {?}
     */
    StInputComponent.prototype.maxLength;
    /**
     * \@Input {string} [min=''] Define a minimum number for number inputs
     * @type {?}
     */
    StInputComponent.prototype.min;
    /**
     * \@Input {string} [max=''] Define a maximum number for number inputs
     * @type {?}
     */
    StInputComponent.prototype.max;
    /**
     * \@Input {boolean} [isFocused=false] If true, the input will be focused on view init.
     * @type {?}
     */
    StInputComponent.prototype.isFocused;
    /**
     * \@Input {boolean} [readonly=''] This parameter disables the input and it can not be modified by the user
     * @type {?}
     */
    StInputComponent.prototype.readonly;
    /**
     * \@Input {string} [step=''] It specifies the interval between legal numbers in the input field
     * @type {?}
     */
    StInputComponent.prototype.step;
    /**
     * \@Input {string} [default=] Default value of input
     * @type {?}
     */
    StInputComponent.prototype.default;
    /**
     * \@input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default
     * @type {?}
     */
    StInputComponent.prototype.autocompleteList;
    /**
     * \@input {number} [charsToShowAutocompleteList=1] Number of characters before displaying autocomplete list. By default is 1
     * @type {?}
     */
    StInputComponent.prototype.charsToShowAutocompleteList;
    /**
     * \@Output {} [blur] Notify when user leaves a field
     * @type {?}
     */
    StInputComponent.prototype.blur;
    /** @type {?} */
    StInputComponent.prototype.vc;
    /** @type {?} */
    StInputComponent.prototype.disabled;
    /** @type {?} */
    StInputComponent.prototype.displayResetButtonValue;
    /** @type {?} */
    StInputComponent.prototype.focus;
    /** @type {?} */
    StInputComponent.prototype.internalControl;
    /** @type {?} */
    StInputComponent.prototype.errorMessage;
    /** @type {?} */
    StInputComponent.prototype.showErrorValue;
    /** @type {?} */
    StInputComponent.prototype.expandedMenu;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype.valueChangeSub;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype.internalInputModel;
    /** @type {?} */
    StInputComponent.prototype.onChange;
    /** @type {?} */
    StInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StInputComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1pbnB1dC9zdC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFJTCxNQUFNLEVBQ04sWUFBWSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENyRyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBa0UxQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQWhFakMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7Ozs7UUFFekIsU0FBSSxHQUFXLEVBQUUsQ0FBQzs7OztRQUVsQixVQUFLLEdBQVcsRUFBRSxDQUFDOzs7O1FBRW5CLGNBQVMsR0FBbUMsTUFBTSxDQUFDOzs7O1FBTW5ELHFCQUFnQixHQUFZLEtBQUssQ0FBQzs7OztRQVVsQyxjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBRTNCLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7UUFNMUIscUJBQWdCLEdBQWlELEVBQUUsQ0FBQzs7OztRQUVwRSxnQ0FBMkIsR0FBVyxDQUFDLENBQUM7Ozs7UUFjdkMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBSXJELGFBQVEsR0FBWSxLQUFLLENBQUMsQ0FBQyxtQkFBbUI7O1FBQzlDLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6QyxVQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLG1CQUFjLEdB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Ozs7OztJQUVyQywrQkFBMEI7Ozs7O0lBQzFCLGtDQUFvQjs7Ozs7SUFDcEIsMENBQXFDOzs7OztJQUNyQyw4Q0FBZ0M7O0lBTWhDLG9DQUNDOztJQUVELHFDQUNDOzs7OztJQVBXLCtCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDb21wb25lbnQsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBmb3J3YXJkUmVmLFxuICAgSG9zdEJpbmRpbmcsXG4gICBJbnB1dCxcbiAgIE9uQ2hhbmdlcyxcbiAgIE9uRGVzdHJveSxcbiAgIE9uSW5pdCxcbiAgIE91dHB1dCxcbiAgIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQ29udHJvbCwgTkdfVkFMSURBVE9SUywgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RJbnB1dEVycm9yIH0gZnJvbSAnLi9zdC1pbnB1dC5lcnJvci5tb2RlbCc7XG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUdyb3VwLCBTdERyb3BEb3duTWVudUl0ZW0gfSBmcm9tICcuLic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IElucHV0XG4gKlxuICogVGhpcyBjb21wb25lbnQgc3BlY2lmaWVzIGFuIGlucHV0IGZpZWxkIHdoZXJlIHRoZSB1c2VyIGNhbiBlbnRlciBkYXRhLlxuICpcbiAqIEBtb2RlbFxuICpcbiAqICAgW0Vycm9yIG1lc3NhZ2VzXSB7Li9zdC1pbnB1dC5lcnJvci5tb2RlbC50cyNTdElucHV0RXJyb3J9XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1pbnB1dCBjbGFzcz1cInN0LWZvcm0tZmllbGRcIlxuICogICAgdHlwZT1cInRleHRcIlxuICogICAgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiXG4gKiAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXG4gKiAgICBsYWJlbD1cIkZpZWxkXCJcbiAqICAgIGRlZmF1bHQ9XCJkZWZhdWx0IG5hbWVcIlxuICogICAgY29udGV4dHVhbEhlbHA9XCJUaGlzIGlzIGEgbm9ybWFsIGZpZWxkXCI+XG4gKiA8L3N0LWlucHV0PlxuICogYGBgXG4gKi9cblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWlucHV0JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdElucHV0Q29tcG9uZW50KSwgbXVsdGk6IHRydWUgfSxcbiAgICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RJbnB1dENvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgIF0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFN0SW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtwbGFjZWhvbGRlcj1udWxsXSBUaGUgdGV4dCB0aGF0IGFwcGVhcnMgYXMgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0LiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtuYW1lPScnXSBJbnB1dCBuYW1lICovXG4gICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgIC8qKiBAaW5wdXQge3N0cmluZ30gW2xhYmVsPScnXSBMYWJlbCB0byBzaG93IG92ZXIgdGhlIGlucHV0LiBJdCBpcyBlbXB0eSBieSBkZWZhdWx0ICovXG4gICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAvKiogQGlucHV0IHsndGV4dCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCd9IFtmaWVsZFR5cGU9J3RleHQnXSBJbnB1dCB0eXBlICovXG4gICBASW5wdXQoKSBmaWVsZFR5cGU6ICd0ZXh0JyB8ICdudW1iZXInIHwgJ3Bhc3N3b3JkJyA9ICd0ZXh0JztcbiAgIC8qKiBAaW5wdXQge1N0SW5wdXRFcnJvcn0gW2Vycm9ycz1dIEN1c3RvbWl6ZWQgZXJyb3IgbWVzc2FnZXMgKi9cbiAgIEBJbnB1dCgpIGVycm9yczogU3RJbnB1dEVycm9yO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcWFUYWc9JyddIElkIHZhbHVlIGZvciBxYSB0ZXN0ICovXG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2ZvcmNlVmFsaWRhdGlvbnM9ZmFsc2VdIElmIHlvdSBzcGVjaWZ5IGl0IHRvICd0cnVlJywgdGhlIGlucHV0IGNoZWNrcyB0aGUgZXJyb3JzIGJlZm9yZSBiZWluZyBtb2RpZmllZCBieSB1c2VyICovXG4gICBASW5wdXQoKSBmb3JjZVZhbGlkYXRpb25zOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtjb250ZXh0dWFsSGVscD0nJ10gSXQgd2lsbCBiZSBkaXNwbGF5ZWQgd2hlbiB1c2VyIGNsaWNrcyBvbiB0aGUgaW5mbyBidXR0b24gKi9cbiAgIEBJbnB1dCgpIGNvbnRleHR1YWxIZWxwOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFttYXhMZW5ndGg9JyddIERlZmluZSBhIG1heC1sZW5ndGggZm9yIGlucHV0IGZpZWxkICovXG4gICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlcjtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW21pbj0nJ10gRGVmaW5lIGEgbWluaW11bSBudW1iZXIgZm9yIG51bWJlciBpbnB1dHMgKi9cbiAgIEBJbnB1dCgpIG1pbjogbnVtYmVyO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbbWF4PScnXSBEZWZpbmUgYSBtYXhpbXVtIG51bWJlciBmb3IgbnVtYmVyIGlucHV0cyAqL1xuICAgQElucHV0KCkgbWF4OiBudW1iZXI7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbaXNGb2N1c2VkPWZhbHNlXSBJZiB0cnVlLCB0aGUgaW5wdXQgd2lsbCBiZSBmb2N1c2VkIG9uIHZpZXcgaW5pdC4gKi9cbiAgIEBJbnB1dCgpIGlzRm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3JlYWRvbmx5PScnXSBUaGlzIHBhcmFtZXRlciBkaXNhYmxlcyB0aGUgaW5wdXQgYW5kIGl0IGNhbiBub3QgYmUgbW9kaWZpZWQgYnkgdGhlIHVzZXIgKi9cbiAgIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtzdGVwPScnXSBJdCBzcGVjaWZpZXMgdGhlIGludGVydmFsIGJldHdlZW4gbGVnYWwgbnVtYmVycyBpbiB0aGUgaW5wdXQgZmllbGQgKi9cbiAgIEBJbnB1dCgpIHN0ZXA6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2RlZmF1bHQ9XSBEZWZhdWx0IHZhbHVlIG9mIGlucHV0ICovXG4gICBASW5wdXQoKSBkZWZhdWx0OiBhbnk7XG4gICAvKiogQGlucHV0IHsoU3REcm9wRG93bk1lbnVJdGVtIHwgU3REcm9wRG93bk1lbnVHcm91cClbXX0gW2F1dG9jb21wbGV0ZUxpc3Q9QXJyYXkoKV0gTGlzdCB0byBiZSB1c2VkIGZvciBhdXRvY29tcGxldGUgZmVhdHVyZS4gSXQgaXMgZW1wdHkgYnkgZGVmYXVsdCAqL1xuICAgQElucHV0KCkgYXV0b2NvbXBsZXRlTGlzdDogKFN0RHJvcERvd25NZW51SXRlbSB8IFN0RHJvcERvd25NZW51R3JvdXApW10gPSBbXTtcbiAgIC8qKiBAaW5wdXQge251bWJlcn0gW2NoYXJzVG9TaG93QXV0b2NvbXBsZXRlTGlzdD0xXSBOdW1iZXIgb2YgY2hhcmFjdGVycyBiZWZvcmUgZGlzcGxheWluZyBhdXRvY29tcGxldGUgbGlzdC4gQnkgZGVmYXVsdCBpcyAxICovXG4gICBASW5wdXQoKSBjaGFyc1RvU2hvd0F1dG9jb21wbGV0ZUxpc3Q6IG51bWJlciA9IDE7XG5cbiAgIC8qKiBASW5wdXQge2FueX0gW3ZhbHVlPScnXSBWYWx1ZSBvZiB0aGUgaW5wdXQgKi9cblxuICAgQElucHV0KClcbiAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgfVxuXG4gICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgIH1cblxuICAgLyoqIEBPdXRwdXQge30gW2JsdXJdIE5vdGlmeSB3aGVuIHVzZXIgbGVhdmVzIGEgZmllbGQgKi9cbiAgIEBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICBAVmlld0NoaWxkcmVuKCdpbnB1dCcpIHZjOiBhbnk7XG5cbiAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlOyAvLyBUbyBjaGVjayBkaXNhYmxlXG4gICBwdWJsaWMgZGlzcGxheVJlc2V0QnV0dG9uVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBmb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGludGVybmFsQ29udHJvbDogRm9ybUNvbnRyb2w7XG4gICBwdWJsaWMgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gICBwdWJsaWMgc2hvd0Vycm9yVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBleHBhbmRlZE1lbnU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gICBwcml2YXRlIHZhbHVlQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XG4gICBwcml2YXRlIGludGVybmFsSW5wdXRNb2RlbDogYW55O1xuXG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgfVxuXG4gICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHtcbiAgIH1cblxuICAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICAgfVxuXG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN0LWlucHV0LS1hdXRvY29tcGxldGUnKVxuICAgZ2V0IHNob3dBdXRvY29tcGxldGVMaXN0KCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kZWRNZW51ICYmIHRoaXMuYXV0b2NvbXBsZXRlTGlzdCAmJiB0aGlzLmF1dG9jb21wbGV0ZUxpc3QubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgdmFsaWRhdGUoY29udHJvbDogRm9ybUNvbnRyb2wpOiBhbnkge1xuICAgICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWIgPSBjb250cm9sLnN0YXR1c0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hlY2tFcnJvcnMoY29udHJvbCkpO1xuICAgfVxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2U6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuZm9yY2VWYWxpZGF0aW9ucyAmJiB0aGlzLmludGVybmFsQ29udHJvbCkge1xuICAgICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmludGVybmFsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmludGVybmFsSW5wdXRNb2RlbCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlU3ViID0gdGhpcy5pbnRlcm5hbENvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5nZXRUeXBlZFZhbHVlKHZhbHVlKSk7XG4gICAgICAgICB0aGlzLnNob3dBdXRvY29tcGxldGVNZW51KCk7XG4gICAgICAgICB0aGlzLnNob3dFcnJvclZhbHVlID0gdGhpcy5zaG93RXJyb3IoKTtcbiAgICAgICAgIHRoaXMuZGlzcGxheVJlc2V0QnV0dG9uVmFsdWUgPSB0aGlzLmRpc3BsYXlSZXNldEJ1dHRvbigpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgICAgICB0aGlzLnZjLmZpcnN0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy52YWx1ZUNoYW5nZVN1Yikge1xuICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgfVxuXG4gICAvLyBXaGVuIHZhbHVlIGlzIHJlY2VpdmVkIGZyb20gb3V0c2lkZVxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmludGVybmFsSW5wdXRNb2RlbCA9IHZhbHVlO1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaW50ZXJuYWxDb250cm9sLnNldFZhbHVlKHRoaXMuZ2V0VHlwZWRWYWx1ZSh2YWx1ZSkpO1xuICAgfVxuXG4gICAvLyBSZWdpc3RyeSB0aGUgY2hhbmdlIGZ1bmN0aW9uIHRvIHByb3BhZ2F0ZSBpbnRlcm5hbCBtb2RlbCBjaGFuZ2VzXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIC8vIFJlZ2lzdHJ5IHRoZSB0b3VjaCBmdW5jdGlvbiB0byBwcm9wYWdhdGUgaW50ZXJuYWwgdG91Y2ggZXZlbnRzIFRPRE86IG1ha2UgdGhpcyBmdW5jdGlvbi5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgfVxuXG4gICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlO1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wuZW5hYmxlZCkge1xuICAgICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmludGVybmFsQ29udHJvbCAmJiB0aGlzLmludGVybmFsQ29udHJvbC5kaXNhYmxlZCkge1xuICAgICAgICAgdGhpcy5pbnRlcm5hbENvbnRyb2wuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgc2hvd0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZXJyb3JNZXNzYWdlICE9PSB1bmRlZmluZWQgJiYgKCF0aGlzLmludGVybmFsQ29udHJvbC5wcmlzdGluZSB8fCB0aGlzLmZvcmNlVmFsaWRhdGlvbnMpICYmICF0aGlzLmZvY3VzICYmICF0aGlzLmRpc2FibGVkO1xuICAgfVxuXG4gICBnZXQgbGFiZWxRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICh0aGlzLnFhVGFnIHx8IHRoaXMubmFtZSkgKyAnLWxhYmVsJztcbiAgIH1cblxuICAgZGlzcGxheVJlc2V0QnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaW50ZXJuYWxDb250cm9sLmRpcnR5ICYmIHRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlICE9PSB0aGlzLmRlZmF1bHQ7XG4gICB9XG5cbiAgIHJlc2V0VG9EZWZhdWx0KCk6IHZvaWQge1xuICAgICAgdGhpcy53cml0ZVZhbHVlKHRoaXMuZGVmYXVsdCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgLyoqICBBdXRvY29tcGxldGUgbGlzdCBhY3Rpb25zICovXG5cbiAgIG9uTGlzdFNlbGVjdChkYXRhOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIGlmIChkYXRhICYmIGRhdGEudmFsdWUgJiYgZGF0YS52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgIHRoaXMud3JpdGVWYWx1ZShkYXRhLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLndyaXRlVmFsdWUoJycpO1xuICAgICAgfVxuICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG4gICBvbkNsaWNrT3V0c2lkZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmV4cGFuZGVkTWVudSkge1xuICAgICAgICAgdGhpcy5leHBhbmRlZE1lbnUgPSBmYWxzZTtcbiAgICAgIH1cbiAgIH1cblxuICAgLyoqIFN0eWxlIGZ1bmN0aW9ucyAqL1xuICAgb25Gb2N1cyhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgICAgdGhpcy5zaG93RXJyb3JWYWx1ZSA9IHRoaXMuc2hvd0Vycm9yKCk7XG4gICAgICB0aGlzLnNob3dBdXRvY29tcGxldGVNZW51KCk7XG4gICB9XG5cbiAgIG9uRm9jdXNPdXQoZXZlbnQ6IEV2ZW50LCBlbWl0RXZlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcblxuICAgICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgICAgdGhpcy5ibHVyLmVtaXQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2hvd0Vycm9yVmFsdWUgPSB0aGlzLnNob3dFcnJvcigpO1xuICAgfVxuXG4gICAvLyBXaGVuIHN0YXR1cyBjaGFuZ2UgY2FsbCB0aGlzIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGhhdmUgZXJyb3JzXG4gICBwcml2YXRlIGNoZWNrRXJyb3JzKGNvbnRyb2w6IEZvcm1Db250cm9sKTogdm9pZCB7XG4gICAgICBsZXQgZXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gY29udHJvbC5lcnJvcnM7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVycm9ycyk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgLy8gR2V0IGVycm9yIG1lc3NhZ2UgaW4gZnVuY3Rpb24gb2YgZXJyb3IgbGlzdC5cbiAgIHByaXZhdGUgZ2V0RXJyb3JNZXNzYWdlKGVycm9yczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHN0cmluZyB7XG4gICAgICBpZiAoIWVycm9ycykge1xuICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmVycm9ycykge1xuICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KCdyZXF1aXJlZCcpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMucmVxdWlyZWQgfHwgdGhpcy5lcnJvcnMuZ2VuZXJpYyB8fCAnJztcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvcnMuaGFzT3duUHJvcGVydHkoJ2ZpZWxkVHlwZScpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMudHlwZSB8fCB0aGlzLmVycm9ycy5nZW5lcmljIHx8ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eSgnbWlubGVuZ3RoJykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5taW5MZW5ndGggfHwgdGhpcy5lcnJvcnMuZ2VuZXJpYyB8fCAnJztcbiAgICAgIH1cbiAgICAgIGlmIChlcnJvcnMuaGFzT3duUHJvcGVydHkoJ21heGxlbmd0aCcpKSB7XG4gICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMubWF4TGVuZ3RoIHx8IHRoaXMuZXJyb3JzLmdlbmVyaWMgfHwgJyc7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KCdwYXR0ZXJuJykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5wYXR0ZXJuIHx8IHRoaXMuZXJyb3JzLmdlbmVyaWMgfHwgJyc7XG4gICAgICB9XG4gICAgICBpZiAoZXJyb3JzLmhhc093blByb3BlcnR5KCdtaW4nKSkge1xuICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLm1pbiB8fCB0aGlzLmVycm9ycy5nZW5lcmljIHx8ICcnO1xuICAgICAgfVxuICAgICAgaWYgKGVycm9ycy5oYXNPd25Qcm9wZXJ0eSgnbWF4JykpIHtcbiAgICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5tYXggfHwgdGhpcy5lcnJvcnMuZ2VuZXJpYyB8fCAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJztcbiAgIH1cblxuICAgcHJpdmF0ZSBnZXRUeXBlZFZhbHVlKHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgICAgc3dpdGNoICh0aGlzLmZpZWxkVHlwZSkge1xuICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGlmICghdmFsdWUgfHwgaXNOYU4oTnVtYmVyKHZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgc2hvd0F1dG9jb21wbGV0ZU1lbnUoKTogdm9pZCB7XG4gICAgICB0aGlzLmV4cGFuZGVkTWVudSA9IHRoaXMuZm9jdXMgJiYgdGhpcy5pbnRlcm5hbENvbnRyb2wgJiYgdGhpcy5jaGFyc1RvU2hvd0F1dG9jb21wbGV0ZUxpc3QgPD0gKHRoaXMuaW50ZXJuYWxDb250cm9sLnZhbHVlIHx8ICcnKS5sZW5ndGg7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxufVxuIl19