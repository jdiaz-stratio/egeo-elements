import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { StInputError } from './st-input.error.model';
import { StDropDownMenuGroup, StDropDownMenuItem } from '..';
/**
 * @description {Component} Input
 *
 * This component specifies an input field where the user can enter data.
 *
 * @model
 *
 *   [Error messages] {./st-input.error.model.ts#StInputError}
 *
 * @example
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
export declare class StInputComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {
    private _cd;
    /** @input {string} [placeholder=null] The text that appears as placeholder of the input. It is empty by default */
    placeholder: string;
    /** @input {string} [name=''] Input name */
    name: string;
    /** @input {string} [label=''] Label to show over the input. It is empty by default */
    label: string;
    /** @input {'text' | 'number' | 'password'} [fieldType='text'] Input type */
    fieldType: 'text' | 'number' | 'password';
    /** @input {StInputError} [errors=] Customized error messages */
    errors: StInputError;
    /** @Input {string} [qaTag=''] Id value for qa test */
    qaTag: string;
    /** @Input {boolean} [forceValidations=false] If you specify it to 'true', the input checks the errors before being modified by user */
    forceValidations: boolean;
    /** @Input {string} [contextualHelp=''] It will be displayed when user clicks on the info button */
    contextualHelp: string;
    /** @Input {string} [maxLength=''] Define a max-length for input field */
    maxLength: number;
    /** @Input {string} [min=''] Define a minimum number for number inputs */
    min: number;
    /** @Input {string} [max=''] Define a maximum number for number inputs */
    max: number;
    /** @Input {boolean} [isFocused=false] If true, the input will be focused on view init. */
    isFocused: boolean;
    /** @Input {boolean} [readonly=''] This parameter disables the input and it can not be modified by the user */
    readonly: boolean;
    /** @Input {string} [step=''] It specifies the interval between legal numbers in the input field */
    step: string;
    /** @Input {string} [default=] Default value of input */
    default: any;
    /** @input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default */
    autocompleteList: (StDropDownMenuItem | StDropDownMenuGroup)[];
    /** @input {number} [charsToShowAutocompleteList=1] Number of characters before displaying autocomplete list. By default is 1 */
    charsToShowAutocompleteList: number;
    /** @Input {any} [value=''] Value of the input */
    value: any;
    /** @Output {} [blur] Notify when user leaves a field */
    blur: EventEmitter<any>;
    vc: any;
    disabled: boolean;
    displayResetButtonValue: boolean;
    focus: boolean;
    internalControl: FormControl;
    errorMessage: string;
    showErrorValue: boolean;
    expandedMenu: boolean;
    private sub;
    private _value;
    private valueChangeSub;
    private internalInputModel;
    constructor(_cd: ChangeDetectorRef);
    onChange: (_: any) => void;
    onTouched: () => void;
    readonly showAutocompleteList: boolean;
    validate(control: FormControl): any;
    ngOnChanges(change: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disable: boolean): void;
    showError(): boolean;
    readonly labelQaTag: string;
    displayResetButton(): boolean;
    resetToDefault(): void;
    /**  Autocomplete list actions */
    onListSelect(data: StDropDownMenuItem): void;
    onClickOutside(event: Event): void;
    /** Style functions */
    onFocus(event: Event): void;
    onFocusOut(event: Event, emitEvent: boolean): void;
    private checkErrors;
    private getErrorMessage;
    private getTypedValue;
    private showAutocompleteMenu;
}
