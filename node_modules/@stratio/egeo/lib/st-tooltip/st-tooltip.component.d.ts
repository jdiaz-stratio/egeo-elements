import { ElementRef, OnChanges, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
export declare class StTooltipComponent implements OnChanges, OnDestroy, OnInit {
    private _el;
    private _cd;
    classTooltip: boolean;
    classTooltipOn: boolean;
    showOnClick: boolean;
    private _title;
    title: string;
    constructor(_el: ElementRef, _cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    onClick(): void;
    private _checkTooltipState;
    private _onClick;
}
