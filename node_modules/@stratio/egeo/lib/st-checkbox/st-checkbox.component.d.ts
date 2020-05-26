import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CHECKBOX_CONTROL_ACCESSOR: any;
/**
 * @description {Component} [Checkbox]
 *
 * The checkbox component represents a custom input of the checkbox type.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-checkbox name="option" value="1">
 *    Option 1
 * </st-checkbox>
 * ```
 *
 */
export declare class StCheckboxComponent implements ControlValueAccessor {
    private _changeDetectorRef;
    /** @Input {boolean} [checked='']  */
    checked: boolean;
    /** @Input {boolean} [name=''] This parameter shows the final name of the input */
    name: string;
    /** @Input {boolean} [qaTag=''] Id value for qa test */
    qaTag: string;
    /** @Input {boolean} [disabled=''] It allows to disable the input component of the checkbox */
    disabled: boolean;
    /** @Input {boolean} [required=''] It converts the component into a mandatory field in a form */
    required: boolean;
    /** @Input {boolean} [readonly=''] This parameter disables the checkbox and it can not be modified by the user */
    readonly: boolean;
    /** @Input {any} [value=''] The value of the checkbox */
    value: any;
    /** @Input {string} [contextualHelp=''] Information displayed at a tooltip */
    contextualHelp: string;
    /** @Output {{ checked: boolean, value: any }} [change=''] This is emitted when user clicks on the checkbox */
    change: EventEmitter<{
        checked: boolean;
        value: any;
    }>;
    private _checked;
    constructor(_changeDetectorRef: ChangeDetectorRef);
    _controlValueAccessorChangeFn: (value: any) => void;
    onTouched: () => any;
    readonly labelQaTag: string;
    handleClick(): void;
    handleChange($event: Event): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
