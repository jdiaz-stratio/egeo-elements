/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-color-picker/st-color-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * \@description {Component} [Color picker]
 *
 * The color picker allows user to choose between several colors
 *
 * \@example
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
export class StColorPickerComponent {
    constructor() {
        /**
         * \@Output {string} [change=] Event emitted when a color is selected
         */
        this.change = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => {
            this._selected = _;
            this.change.emit(this._selected);
        });
        this.onTouched = (/**
         * @return {?}
         */
        () => {
        });
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    set selected(color) {
        this._selected = color;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    onSelectColor(color) {
        this.change.emit(color);
        this.onChange(color);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    isSelected(color) {
        return this.selected === color;
    }
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!this._disabled) {
            this._selected = value;
            this.change.emit(this._selected);
            if (this.registeredOnChange) {
                this.registeredOnChange(value);
            }
        }
    }
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    // Registry the touch function to propagate internal touch events
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disable
     * @return {?}
     */
    setDisabledState(disable) {
        this._disabled = disable;
    }
}
StColorPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-color-picker',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-color-picker\">\n   <label *ngIf=\"label\" st-label class=\"label\">{{label}}</label>\n   <div class=\"palette\">\n      <span class=\"color-ball\" *ngFor=\"let color of palette\"\n            [ngClass]=\"{'color-ball--selected': isSelected(color)}\"\n            (click)=\"onSelectColor(color)\"\n            [style.background-color]=\"color\">\n      </span>\n   </div>\n</div>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StColorPickerComponent)), multi: true }
                ],
                styles: ["@charset \"UTF-8\";.st-color-picker .label{display:block;margin-bottom:15px}.st-color-picker .palette{display:flex}.st-color-picker .palette .color-ball{width:36px;height:36px;border-radius:50px;margin-left:15px;cursor:pointer}.st-color-picker .palette .color-ball:first-child{margin-left:0}"]
            }] }
];
StColorPickerComponent.propDecorators = {
    label: [{ type: Input }],
    palette: [{ type: Input }],
    change: [{ type: Output }],
    selected: [{ type: Input }]
};
if (false) {
    /**
     * \@Input {string} [label=] Optional label displayed on the top of the color picker
     * @type {?}
     */
    StColorPickerComponent.prototype.label;
    /**
     * \@Input {string[]} [palette=] List of colors to be selected
     * @type {?}
     */
    StColorPickerComponent.prototype.palette;
    /**
     * \@Output {string} [change=] Event emitted when a color is selected
     * @type {?}
     */
    StColorPickerComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    StColorPickerComponent.prototype._selected;
    /**
     * @type {?}
     * @private
     */
    StColorPickerComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    StColorPickerComponent.prototype.registeredOnChange;
    /** @type {?} */
    StColorPickerComponent.prototype.onChange;
    /** @type {?} */
    StColorPickerComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtY29sb3ItcGlja2VyL3N0LWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQTRCekUsTUFBTSxPQUFPLHNCQUFzQjtJQVRuQzs7OztRQWVhLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQU1wRSxhQUFROzs7O1FBQUcsQ0FBQyxDQUFTLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFBO1FBRUQsY0FBUzs7O1FBQUcsR0FBRyxFQUFFO1FBQ2pCLENBQUMsRUFBQTtJQTRDSixDQUFDOzs7O0lBMUNFLElBQ0ksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQUksUUFBUSxDQUFDLEtBQWE7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQztTQUNIO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsRUFBb0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBR0QsaUJBQWlCLENBQUMsRUFBYztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQWdCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7OztZQXRFSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsKzBCQUErQztnQkFFL0MsU0FBUyxFQUFFO29CQUNSLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUNwRzs7YUFDSDs7O29CQUlHLEtBQUs7c0JBRUwsS0FBSztxQkFFTCxNQUFNO3VCQWNOLEtBQUs7Ozs7Ozs7SUFsQk4sdUNBQXVCOzs7OztJQUV2Qix5Q0FBMkI7Ozs7O0lBRTNCLHdDQUFvRTs7Ozs7SUFFcEUsMkNBQTBCOzs7OztJQUMxQiwyQ0FBMkI7Ozs7O0lBQzNCLG9EQUE2Qzs7SUFFN0MsMENBR0M7O0lBRUQsMkNBQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0NvbG9yIHBpY2tlcl1cbiAqXG4gKiBUaGUgY29sb3IgcGlja2VyIGFsbG93cyB1c2VyIHRvIGNob29zZSBiZXR3ZWVuIHNldmVyYWwgY29sb3JzXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgPHN0LWNvbG9yLXBpY2tlciBsYWJlbD1cIkNob29zZSBhIFN0YXR1cyBjb2xvclwiIFtzZWxlY3RlZF09XCJzZWxlY3RlZENvbG9yXCIgW3BhbGV0dGVdPVwicGFsZXR0ZVwiXG4gKiAgICAgKGNoYW5nZSk9XCJvblNlbGVjdENvbG9yKCRldmVudClcIj5cbiAqICAgPC9zdC1jb2xvci1waWNrZXI+XG4gKiBgYGBcbiAqXG4gKi9cblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWNvbG9yLXBpY2tlcicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtY29sb3ItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWNvbG9yLXBpY2tlci5jb21wb25lbnQuc2NzcyddLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdENvbG9yUGlja2VyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0Q29sb3JQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtsYWJlbD1dIE9wdGlvbmFsIGxhYmVsIGRpc3BsYXllZCBvbiB0aGUgdG9wIG9mIHRoZSBjb2xvciBwaWNrZXIgKi9cbiAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmdbXX0gW3BhbGV0dGU9XSBMaXN0IG9mIGNvbG9ycyB0byBiZSBzZWxlY3RlZCAqL1xuICAgQElucHV0KCkgcGFsZXR0ZTogc3RyaW5nW107XG4gICAvKiogQE91dHB1dCB7c3RyaW5nfSBbY2hhbmdlPV0gRXZlbnQgZW1pdHRlZCB3aGVuIGEgY29sb3IgaXMgc2VsZWN0ZWQgKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIHByaXZhdGUgX3NlbGVjdGVkOiBzdHJpbmc7XG4gICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcbiAgIHByaXZhdGUgcmVnaXN0ZXJlZE9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuXG4gICBvbkNoYW5nZSA9IChfOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gXztcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5fc2VsZWN0ZWQpO1xuICAgfVxuXG4gICBvblRvdWNoZWQgPSAoKSA9PiB7XG4gICB9XG5cbiAgIEBJbnB1dCgpXG4gICBnZXQgc2VsZWN0ZWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgIH1cblxuICAgc2V0IHNlbGVjdGVkKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gY29sb3I7XG4gICB9XG5cbiAgIG9uU2VsZWN0Q29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChjb2xvcik7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNvbG9yKTtcbiAgIH1cblxuICAgaXNTZWxlY3RlZChjb2xvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCA9PT0gY29sb3I7XG4gICB9XG5cbiAgIC8vIGxvYWQgZXh0ZXJuYWwgY2hhbmdlXG4gICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdmFsdWU7XG4gICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkKTtcbiAgICAgICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRPbkNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmVkT25DaGFuZ2UodmFsdWUpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICAvLyBSZWdpc3RyeSB0aGUgY2hhbmdlIGZ1bmN0aW9uIHRvIHByb3BhZ2F0ZSBpbnRlcm5hbCBtb2RlbCBjaGFuZ2VzXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIC8vIFJlZ2lzdHJ5IHRoZSB0b3VjaCBmdW5jdGlvbiB0byBwcm9wYWdhdGUgaW50ZXJuYWwgdG91Y2ggZXZlbnRzXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGU7XG4gICB9XG59XG4iXX0=