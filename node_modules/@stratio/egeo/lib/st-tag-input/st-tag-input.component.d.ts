import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator } from '@angular/forms';
import { StDropDownMenuGroup, StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
/**
 * @description {Component} Tag Input
 *
 * This component is a text input box that automatically creates tags out of a typed text.
 *
 * @example
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
export declare class StTagInputComponent implements ControlValueAccessor, Validator, OnInit, OnChanges {
    private _selectElement;
    private _cd;
    /** @input {string | null} [label=null] Label to show over the input. It is empty by default */
    label: string | null;
    /** @input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default */
    tooltip: string | null;
    /** @input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default */
    placeholder: string | null;
    /** @input {string | null} [errorMessage=null] Error message to show. It is empty by default */
    errorMessage: string | null;
    /** @input {string | null} [type=null] Type of the items */
    type: string | null;
    /** @input {boolean} [withAutocomplete=false] Enable autocomplete feature. It is false by default */
    withAutocomplete: boolean;
    /** @input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default */
    autocompleteList: (StDropDownMenuItem | StDropDownMenuGroup)[];
    /** @input {boolean} [charsToShowAutocompleteList=Array()] List to be used for autocomplete feature. It is empty by default */
    charsToShowAutocompleteList: number;
    /** @input {boolean} [allowFreeText=true] Boolean to allow user to type a free text or not */
    allowFreeText: boolean;
    /** @input {string} [infoMessage=] Message used to inform user about what values he has to introduce */
    infoMessage: string;
    /** @input {string[]} [forbiddenValues=Array()] A list of values that user can not type and if he types one of them,
     * tag input will be invalid. It is empty by default
     */
    forbiddenValues: string[];
    /** @input {string} [regularExpression=] Regular expression to validate values. It is null by default */
    regularExpression: any | null;
    /** @Input {boolean} [forceValidations=false] If you specify it to 'true', the tag input checks the errors before being modified by user */
    forceValidations: boolean;
    newElementInput: ElementRef;
    inputElement: ElementRef;
    expandedMenu: boolean;
    items: any[];
    innerInputContent: string;
    isPristine: boolean;
    showErrorValue: boolean;
    private _focus;
    private _isDisabled;
    private _newElementInput;
    private _selected;
    private _regularExp;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_selectElement: ElementRef, _cd: ChangeDetectorRef);
    /** @input {boolean} [disabled=false] Disable the component. It is false by default */
    disabled: boolean;
    readonly hasLabel: boolean;
    readonly hasFocus: boolean;
    readonly hasPlaceholder: boolean;
    readonly hasAutocomplete: boolean;
    readonly disableValue: string | null;
    readonly isValidInput: boolean;
    readonly tagSelected: number | null;
    readonly selectId: string | null;
    readonly inputId: string | null;
    readonly labelId: string | null;
    readonly tagId: string | null;
    readonly listId: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(data: any): void;
    setDisabledState(disabled: boolean): void;
    validate(control: FormControl): any;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: any): void;
    onInputText(text: string): void;
    onInputFocusIn(event: Event): void;
    onInputFocusOut(event: Event): void;
    onInputKeyDown(event: any): void;
    onTagKeyDown(event: any, index: number): void;
    onTagFocusIn(event: Event, index: number): void;
    onTagFocusOut(event: Event, index: number): void;
    onTagClick(event: Event, index: number): void;
    onListSelect(data: StDropDownMenuItem): void;
    onClickOutside(event: Event): void;
    showError(): boolean;
    deleteTag(index: number): void;
    private addTag;
    private addCurrentTag;
    private clearInput;
    private showAutocompleteMenu;
    private checkAutocompleteMenuChange;
    private _getParsedTag;
    private _forceResetAutoCompleteList;
}
