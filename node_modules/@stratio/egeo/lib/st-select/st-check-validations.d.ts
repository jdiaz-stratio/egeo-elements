import { OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';
export declare class StCheckValidationsDirective implements OnInit, OnDestroy {
    private control;
    errorMessage: string;
    onChange: (_: any) => void;
    private sub;
    constructor(control: NgControl);
    registerOnChange(fn: (_: any) => void): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private notifyErrorsIfExists;
}
