import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { StTextareaError } from './st-textarea.error.model';
/**
 * @description {Component} [Textare]
 *
 * The textarea component is for use normally inside a form, you can use too outside a form like a template driven form.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-textarea
 *    label="Components"
 *    placeholder="Number of components"
 *    [forceValidations]="forceValidations"
 *    [errors]="errorsTextarea"
 *    name="components-template"
 *    qaTag="components-textarea-template"
 *    required
 *    [(ngModel)]="model.components"
 *    contextualHelp="This is the contextual help of the components"
 *    [cols]="50" [rows]="10">
 * </st-textarea>
 * ```
 *
 */
export declare class StTextareaComponent implements ControlValueAccessor, OnChanges, OnInit, OnDestroy {
    private _cd;
    /** @Input {string} [placeholder=''] The text that appears as placeholder of the textarea. It is empty by default */
    placeholder: string;
    /** @Input {string} [name=''] Name of the textarea */
    name: string;
    /** @Input {string} [label=''] Label to show over the textarea. It is empty by default */
    label: string;
    /** @Input {StTextareaError} [errors=''] Error to show for each error case, if you don\'t provide this parameter,
     * the default behaviour is only to change color without message
     */
    errors: StTextareaError;
    /** @Input {string} [qaTag=''] Id for QA test */
    qaTag: string;
    /** @Input {boolean} [forceValidations=false] If you specify it to 'true', the textarea checks the errors before being modified by user */
    forceValidations: boolean;
    /** @Input {string} [contextualHelp=''] It will be displayed when user clicks on the info button */
    contextualHelp: string;
    /** @Input {string} [maxLength=''] Define a max-length for textarea field */
    maxLength: number;
    /** @Input {boolean} [isFocused=false] If true, the textarea will be focused on view init. */
    isFocused: boolean;
    /** @Input {number} [cols=''] Define textarea number of cols */
    cols: number;
    /** @Input {number} [rows=''] Define textarea number of rows */
    rows: number;
    /** @Input {string} [wrap='soft'] Define type of wrap as html standard */
    wrap: string;
    /** @Input {string} [default=] Default value of textarea */
    default: string;
    /** @Output {} [blur] Notify when user leaves a field */
    blur: EventEmitter<any>;
    vc: any;
    isDisabled: boolean;
    focus: boolean;
    internalControl: FormControl;
    errorMessage: string;
    showErrorValue: boolean;
    private sub;
    private valueChangeSub;
    private internalTextareaModel;
    constructor(_cd: ChangeDetectorRef);
    onChange: (_: any) => void;
    onTouched: () => void;
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
    /** Style functions */
    onFocus(event: Event): void;
    onFocusOut(event: Event, emitEvent: boolean): void;
    displayResetButton(): boolean;
    resetToDefault(): void;
    private checkErrors;
    private getErrorMessage;
}
