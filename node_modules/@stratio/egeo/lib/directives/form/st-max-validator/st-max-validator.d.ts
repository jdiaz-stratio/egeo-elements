import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { OnChanges, SimpleChanges } from '@angular/core';
export declare class StMaxValidator implements Validator, OnChanges {
    max: string;
    private _validator;
    private _onChange;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    private _createValidator;
}
