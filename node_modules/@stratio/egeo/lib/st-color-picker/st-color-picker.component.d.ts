import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
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
export declare class StColorPickerComponent implements ControlValueAccessor {
    /** @Input {string} [label=] Optional label displayed on the top of the color picker */
    label: string;
    /** @Input {string[]} [palette=] List of colors to be selected */
    palette: string[];
    /** @Output {string} [change=] Event emitted when a color is selected */
    change: EventEmitter<string>;
    private _selected;
    private _disabled;
    private registeredOnChange;
    onChange: (_: string) => void;
    onTouched: () => void;
    selected: string;
    onSelectColor(color: string): void;
    isSelected(color: string): boolean;
    writeValue(value: string): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disable: boolean): void;
}
