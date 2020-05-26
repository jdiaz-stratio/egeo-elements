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
var StColorPickerComponent = /** @class */ (function () {
    function StColorPickerComponent() {
        var _this = this;
        /**
         * \@Output {string} [change=] Event emitted when a color is selected
         */
        this.change = new EventEmitter();
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this._selected = _;
            _this.change.emit(_this._selected);
        });
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StColorPickerComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._selected = color;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} color
     * @return {?}
     */
    StColorPickerComponent.prototype.onSelectColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.change.emit(color);
        this.onChange(color);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    StColorPickerComponent.prototype.isSelected = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return this.selected === color;
    };
    // load external change
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    StColorPickerComponent.prototype.writeValue = 
    // load external change
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this._disabled) {
            this._selected = value;
            this.change.emit(this._selected);
            if (this.registeredOnChange) {
                this.registeredOnChange(value);
            }
        }
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StColorPickerComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    // Registry the touch function to propagate internal touch events
    // Registry the touch function to propagate internal touch events
    /**
     * @param {?} fn
     * @return {?}
     */
    StColorPickerComponent.prototype.registerOnTouched = 
    // Registry the touch function to propagate internal touch events
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disable
     * @return {?}
     */
    StColorPickerComponent.prototype.setDisabledState = /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        this._disabled = disable;
    };
    StColorPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-color-picker',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-color-picker\">\n   <label *ngIf=\"label\" st-label class=\"label\">{{label}}</label>\n   <div class=\"palette\">\n      <span class=\"color-ball\" *ngFor=\"let color of palette\"\n            [ngClass]=\"{'color-ball--selected': isSelected(color)}\"\n            (click)=\"onSelectColor(color)\"\n            [style.background-color]=\"color\">\n      </span>\n   </div>\n</div>\n",
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StColorPickerComponent; })), multi: true }
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
    return StColorPickerComponent;
}());
export { StColorPickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtY29sb3ItcGlja2VyL3N0LWNvbG9yLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CekU7SUFBQTtRQUFBLGlCQXVFQzs7OztRQXhEWSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFNcEUsYUFBUTs7OztRQUFHLFVBQUMsQ0FBUztZQUNsQixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFBO1FBRUQsY0FBUzs7O1FBQUc7UUFDWixDQUFDLEVBQUE7SUE0Q0osQ0FBQztJQTFDRSxzQkFDSSw0Q0FBUTs7OztRQURaO1lBRUcsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBRUQsVUFBYSxLQUFhO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUpBOzs7OztJQU1ELDhDQUFhOzs7O0lBQWIsVUFBYyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCwyQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1QkFBdUI7Ozs7OztJQUN2QiwyQ0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO1NBQ0g7SUFDSixDQUFDO0lBRUQsbUVBQW1FOzs7Ozs7SUFDbkUsaURBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsRUFBb0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGlFQUFpRTs7Ozs7O0lBQ2pFLGtEQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxpREFBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBZ0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQzs7Z0JBdEVILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwrMEJBQStDO29CQUUvQyxTQUFTLEVBQUU7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUNwRzs7aUJBQ0g7Ozt3QkFJRyxLQUFLOzBCQUVMLEtBQUs7eUJBRUwsTUFBTTsyQkFjTixLQUFLOztJQTBDVCw2QkFBQztDQUFBLEFBdkVELElBdUVDO1NBOURZLHNCQUFzQjs7Ozs7O0lBRWhDLHVDQUF1Qjs7Ozs7SUFFdkIseUNBQTJCOzs7OztJQUUzQix3Q0FBb0U7Ozs7O0lBRXBFLDJDQUEwQjs7Ozs7SUFDMUIsMkNBQTJCOzs7OztJQUMzQixvREFBNkM7O0lBRTdDLDBDQUdDOztJQUVELDJDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtDb2xvciBwaWNrZXJdXG4gKlxuICogVGhlIGNvbG9yIHBpY2tlciBhbGxvd3MgdXNlciB0byBjaG9vc2UgYmV0d2VlbiBzZXZlcmFsIGNvbG9yc1xuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiAgIDxzdC1jb2xvci1waWNrZXIgbGFiZWw9XCJDaG9vc2UgYSBTdGF0dXMgY29sb3JcIiBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRDb2xvclwiIFtwYWxldHRlXT1cInBhbGV0dGVcIlxuICogICAgIChjaGFuZ2UpPVwib25TZWxlY3RDb2xvcigkZXZlbnQpXCI+XG4gKiAgIDwvc3QtY29sb3ItcGlja2VyPlxuICogYGBgXG4gKlxuICovXG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1jb2xvci1waWNrZXInLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWNvbG9yLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1jb2xvci1waWNrZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RDb2xvclBpY2tlckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdENvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbbGFiZWw9XSBPcHRpb25hbCBsYWJlbCBkaXNwbGF5ZWQgb24gdGhlIHRvcCBvZiB0aGUgY29sb3IgcGlja2VyICovXG4gICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nW119IFtwYWxldHRlPV0gTGlzdCBvZiBjb2xvcnMgdG8gYmUgc2VsZWN0ZWQgKi9cbiAgIEBJbnB1dCgpIHBhbGV0dGU6IHN0cmluZ1tdO1xuICAgLyoqIEBPdXRwdXQge3N0cmluZ30gW2NoYW5nZT1dIEV2ZW50IGVtaXR0ZWQgd2hlbiBhIGNvbG9yIGlzIHNlbGVjdGVkICovXG4gICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gICBwcml2YXRlIF9zZWxlY3RlZDogc3RyaW5nO1xuICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XG4gICBwcml2YXRlIHJlZ2lzdGVyZWRPbkNoYW5nZTogKF86IGFueSkgPT4gdm9pZDtcblxuICAgb25DaGFuZ2UgPSAoXzogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IF87XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX3NlbGVjdGVkKTtcbiAgIH1cblxuICAgb25Ub3VjaGVkID0gKCkgPT4ge1xuICAgfVxuXG4gICBASW5wdXQoKVxuICAgZ2V0IHNlbGVjdGVkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gICB9XG5cbiAgIHNldCBzZWxlY3RlZChjb2xvcjogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGNvbG9yO1xuICAgfVxuXG4gICBvblNlbGVjdENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoY29sb3IpO1xuICAgICAgdGhpcy5vbkNoYW5nZShjb2xvcik7XG4gICB9XG5cbiAgIGlzU2VsZWN0ZWQoY29sb3I6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgPT09IGNvbG9yO1xuICAgfVxuXG4gICAvLyBsb2FkIGV4dGVybmFsIGNoYW5nZVxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLl9zZWxlY3RlZCk7XG4gICAgICAgICBpZiAodGhpcy5yZWdpc3RlcmVkT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJlZE9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgLy8gUmVnaXN0cnkgdGhlIGNoYW5nZSBmdW5jdGlvbiB0byBwcm9wYWdhdGUgaW50ZXJuYWwgbW9kZWwgY2hhbmdlc1xuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgfVxuXG4gICAvLyBSZWdpc3RyeSB0aGUgdG91Y2ggZnVuY3Rpb24gdG8gcHJvcGFnYXRlIGludGVybmFsIHRvdWNoIGV2ZW50c1xuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlO1xuICAgfVxufVxuIl19