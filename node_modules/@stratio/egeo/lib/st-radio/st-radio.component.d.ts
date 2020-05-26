import { EventEmitter, OnInit, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { RadioChange } from './st-radio.change';
import { SelectOneDispatcher } from '../utils/unique-dispatcher';
export declare const MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any;
export declare class StRadioGroupComponent implements ControlValueAccessor {
    change: EventEmitter<RadioChange>;
    qaTag: string;
    value: any;
    name: string;
    selected: StRadioComponent;
    disabled: boolean;
    _radios: QueryList<StRadioComponent>;
    _value: any;
    _selected: StRadioComponent;
    _disabled: boolean;
    _name: string;
    constructor();
    _controlValueAccessorChangeFn: (value: any) => void;
    onTouched: () => any;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    emitChangeEvent(): void;
    checkSelectRadio(): void;
    touch(): void;
    setDisabledState(isDisabled: boolean): void;
    private updateRadioName;
    private updatedSelectRadioFromValue;
}
/**
 * @description {Component} [Radio]
 *
 * The radio component is used normally in a form acting as the standard html radio input but also user can use it out of a form like a template driven form.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-radio-group class ="radio-inline">
 *    <st-radio value="1">Enabled</st-radio>
 *    <st-radio value="2" [disabled]="true">Disabled</st-radio>
 *    <st-radio value="2" [checked]= "true" [disabled]="true">Disabled checked</st-radio>
 * </st-radio-group>
 * ```
 *
 */
export declare class StRadioComponent implements OnInit {
    private _radioDispatcher;
    radioGroup: StRadioGroupComponent;
    /** @Input {string} [id='st-radio-<unique id>'] Input Id value */
    id: string;
    /** @Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test */
    qaTag: string;
    /** @Input {string} [name=''] Input name value */
    name: string;
    /** @Input {boolean} [checked=''] Boolean to check the radio button */
    checked: boolean;
    /** @Input {boolean} [disabled=''] Boolean to disable the radio button */
    disabled: boolean;
    /** @Input {boolean} [value=''] Value of the radio button */
    value: any;
    /** @Output {boolean} [change=''] Boolean emitted when radio button is changed */
    change: EventEmitter<RadioChange>;
    readonly inputId: string;
    _value: any;
    _checked: boolean;
    _disabled: boolean;
    constructor(radioGroup: StRadioGroupComponent, _radioDispatcher: SelectOneDispatcher);
    ngOnInit(): void;
    onInputBlur(): void;
    onInputClick(event: Event): void;
    toggleRadio(event: Event): void;
    private emitChangeEvent;
}
