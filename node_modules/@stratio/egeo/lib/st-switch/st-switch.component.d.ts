import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
export declare class StSwitchComponent implements ControlValueAccessor {
    private _cd;
    qaTag: string;
    label: string;
    name: string;
    contextualHelp: string;
    change: EventEmitter<boolean>;
    private _value;
    private _disabled;
    private registeredOnChange;
    constructor(_cd: ChangeDetectorRef);
    value: boolean;
    disabled: boolean;
    readonly labelQaTag: string;
    readonly relatedInput: string;
    validate(control: FormControl): any;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disable: boolean): void;
    onChange(event: MouseEvent): void;
}
