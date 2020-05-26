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

import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @description {Component} [Color picker]
 *
 * The color picker allows user to choose between several colors
 *
 * @example
 *
 * {html}
 *
 * ```
 *   <st-color-picker label="Choose a Status color" [selected]="selectedColor" [palette]="palette"
 *     (change)="onSelectColor($event)">
 *   </st-color-picker>
 * ```
 *
 */

@Component({
   selector: 'st-color-picker',
   templateUrl: './st-color-picker.component.html',
   styleUrls: ['./st-color-picker.component.scss'],
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StColorPickerComponent), multi: true }
   ]
})

export class StColorPickerComponent implements ControlValueAccessor {
   /** @Input {string} [label=] Optional label displayed on the top of the color picker */
   @Input() label: string;
   /** @Input {string[]} [palette=] List of colors to be selected */
   @Input() palette: string[];
   /** @Output {string} [change=] Event emitted when a color is selected */
   @Output() change: EventEmitter<string> = new EventEmitter<string>();

   private _selected: string;
   private _disabled: boolean;
   private registeredOnChange: (_: any) => void;

   onChange = (_: string) => {
      this._selected = _;
      this.change.emit(this._selected);
   }

   onTouched = () => {
   }

   @Input()
   get selected(): string {
      return this._selected;
   }

   set selected(color: string) {
      this._selected = color;
   }

   onSelectColor(color: string): void {
      this.change.emit(color);
      this.onChange(color);
   }

   isSelected(color: string): boolean {
      return this.selected === color;
   }

   // load external change
   writeValue(value: string): void {
      if (!this._disabled) {
         this._selected = value;
         this.change.emit(this._selected);
         if (this.registeredOnChange) {
            this.registeredOnChange(value);
         }
      }
   }

   // Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   // Registry the touch function to propagate internal touch events
   registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
   }

   setDisabledState(disable: boolean): void {
      this._disabled = disable;
   }
}
