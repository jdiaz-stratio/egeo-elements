import { AfterViewInit, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
export declare class StInputAdjustable implements AfterViewInit {
    private el;
    private ngModel;
    placeholder: string;
    private text;
    private hiddenTitle;
    constructor(el: ElementRef, ngModel: NgModel);
    ngAfterViewInit(): void;
    private createHiddenTitle;
}
