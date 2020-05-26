/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

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
@Component({
   selector: 'st-file-button',
   styleUrls: ['st-file-button.component.scss'],
   templateUrl: 'st-file-button.component.html'
})

export class StFileButtonComponent implements OnInit {
   /** @Input {string} [text=''] Displayed text */
   @Input() text: string;
   /** @Input {string} [buttonClass=''] Class for button */
   @Input() buttonClass: string = 'button-primary';
   /** @Input {string} [accepted=''] The allowed extensions */
   @Input() accepted: string = '';
   /** @Input {string} [id=''] Identifier for input */
   @Input() id: string;
   /** @Output {File} [selected=''] Event emitted when a file is selected */
   @Output() selected: EventEmitter<any> = new EventEmitter();
   /** @Output {Error} [error=''] Event emitted when an invalid file is selected */
   @Output() error: EventEmitter<any> = new EventEmitter();

   private _accepted: Array<string>;

   ngOnInit(): void {
      this._accepted = this.accepted.split(',');
   }

   onChange(eventData: any): void {
      let files: File[] = eventData.target.files;
      if (this.areFilesValid(files)) {
         this.selected.emit(eventData.target.files);
      } else {
         this.error.emit();
      }
      eventData.srcElement.value = '';
   }

   private areFilesValid(files: File[]): boolean {
      for (let i = 0; i < files.length; ++i) {
         let file: File = files[i];
         if (file.type && this._accepted.indexOf(file.type.split('/').pop()) === -1
            || (!file.type && this._accepted.indexOf(file.name.split('.').pop()) === -1 )) {
            return false;
         }
      }

      return true;
   }
}
