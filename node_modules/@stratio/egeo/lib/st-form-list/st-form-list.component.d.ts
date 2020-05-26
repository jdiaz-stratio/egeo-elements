import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormArray } from '@angular/forms';
/**
 * @description {Component} [Form list]
 *
 * The form list component allows to create dynamically list of items.
 *
 * @example
 *
 * {html}
 *
 * ```
 *
 * <st-form-list [schema]="jsonSchema" [ngModel]="model1" name="list"
 * (blur)="onBlur($event)" (add)="onAddItem($event)" (remove)="onRemoveItem($event)">
 * </st-form-list>
 *
 * ```
 *
 *
 */
export declare class StFormListComponent implements ControlValueAccessor {
    private _cd;
    /** @Input {any} [schema=''] JSON schema of items */
    schema: any;
    /** @Input {string} [buttonLabel='Add one more item'] String displayed in the button to add more items */
    buttonLabel: string;
    /** @Output {any[]} [valueChange] Notify any value change */
    valueChange: EventEmitter<any>;
    /** @Output {number} [add]  Notify the position of the added item and the modified model */
    add: EventEmitter<{
        position: number;
        model: any[];
    }>;
    /** @Output {number} [remove] Notify the position of the removed item and the modified model */
    remove: EventEmitter<{
        position: number;
        model: any[];
    }>;
    /** @Output {any[]} [blur] Notify when user leaves a field */
    blur: EventEmitter<any[]>;
    formArray: FormArray;
    private _value;
    constructor(_cd: ChangeDetectorRef);
    value: any;
    onChange(_: any): void;
    onTouched: () => void;
    addItem(): void;
    removeItem(position: number): void;
    isRequired(propertyName: string): boolean;
    generateItemFormGroup(position?: number): FormGroup;
    validate(control: FormControl): any;
    onChangeProperty(value: any, rowPosition: number, property: string): void;
    onBlur(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disable: boolean): void;
    private updateForm;
}
