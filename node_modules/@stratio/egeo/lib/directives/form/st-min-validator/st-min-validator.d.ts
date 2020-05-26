import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';
export declare class StMinValidator implements Validator, OnChanges {
    min: string;
    private _validator;
    private _onChange;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    private _createValidator;
}
