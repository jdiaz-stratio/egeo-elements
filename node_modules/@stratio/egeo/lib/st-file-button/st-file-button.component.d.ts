import { EventEmitter, OnInit } from '@angular/core';
/**
 * @description {Component} [File button]
 *
 * The file button allows to upload a file with a specified extension.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-file-button text="IMPORT" accepted='json'
 * (selected)="onUploadValidFile($event)"
 * (error)="onUploadInvalidFile()">
 * </st-file-button>
 * ```
 *
 */
export declare class StFileButtonComponent implements OnInit {
    /** @Input {string} [text=''] Displayed text */
    text: string;
    /** @Input {string} [buttonClass=''] Class for button */
    buttonClass: string;
    /** @Input {string} [accepted=''] The allowed extensions */
    accepted: string;
    /** @Input {string} [id=''] Identifier for input */
    id: string;
    /** @Output {File} [selected=''] Event emitted when a file is selected */
    selected: EventEmitter<any>;
    /** @Output {Error} [error=''] Event emitted when an invalid file is selected */
    error: EventEmitter<any>;
    private _accepted;
    ngOnInit(): void;
    onChange(eventData: any): void;
    private areFilesValid;
}
