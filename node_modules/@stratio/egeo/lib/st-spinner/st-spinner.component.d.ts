import { ChangeDetectorRef, OnInit } from '@angular/core';
/**
 * @description {Component} Spinner
 *
 * This component shows a spinner when something is being loaded
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-spinner theme="secondary">
 *    </st-spinner>
 * ```
 */
export declare class StSpinnerComponent implements OnInit {
    private _cd;
    /** @input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary' */
    theme: string;
    classesValue: any;
    constructor(_cd: ChangeDetectorRef);
    ngOnInit(): void;
    getClasses(): any;
}
