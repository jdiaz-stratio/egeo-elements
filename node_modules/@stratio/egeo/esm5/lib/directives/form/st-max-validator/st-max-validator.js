/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form/st-max-validator/st-max-validator.ts
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
import { Validators, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input, forwardRef } from '@angular/core';
var StMaxValidator = /** @class */ (function () {
    function StMaxValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StMaxValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('max' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    StMaxValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.max == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StMaxValidator.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @private
     * @return {?}
     */
    StMaxValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        this._validator = Validators.max(Number(this.max));
    };
    StMaxValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StMaxValidator; })), multi: true }
                    ],
                    host: { '[attr.max]': 'max ? max : null' }
                },] }
    ];
    StMaxValidator.propDecorators = {
        max: [{ type: Input }]
    };
    return StMaxValidator;
}());
export { StMaxValidator };
if (false) {
    /** @type {?} */
    StMaxValidator.prototype.max;
    /**
     * @type {?}
     * @private
     */
    StMaxValidator.prototype._validator;
    /**
     * @type {?}
     * @private
     */
    StMaxValidator.prototype._onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbWF4LXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3JtL3N0LW1heC12YWxpZGF0b3Ivc3QtbWF4LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQTZELFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0SCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGO0lBQUE7SUErQkEsQ0FBQzs7Ozs7SUFsQkUsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztJQUNKLENBQUM7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLENBQWtCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELGtEQUF5Qjs7OztJQUF6QixVQUEwQixFQUFjO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8seUNBQWdCOzs7O0lBQXhCO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkE5QkgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSwwREFBMEQ7b0JBQ3BFLFNBQVMsRUFBRTt3QkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3hGO29CQUNELElBQUksRUFBRSxFQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBQztpQkFDMUM7OztzQkFFRyxLQUFLOztJQXVCVCxxQkFBQztDQUFBLEFBL0JELElBK0JDO1NBeEJZLGNBQWM7OztJQUN4Qiw2QkFBcUI7Ozs7O0lBRXJCLG9DQUFnQzs7Ozs7SUFDaEMsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvcnMsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICBzZWxlY3RvcjogJ1ttYXhdW2Zvcm1Db250cm9sTmFtZV0sW21heF1bZm9ybUNvbnRyb2xdLFttYXhdW25nTW9kZWxdJyxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdE1heFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH1cbiAgIF0sXG4gICBob3N0OiB7J1thdHRyLm1heF0nOiAnbWF4ID8gbWF4IDogbnVsbCd9XG59KVxuZXhwb3J0IGNsYXNzIFN0TWF4VmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXMge1xuICAgQElucHV0KCkgbWF4OiBzdHJpbmc7XG5cbiAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gICBwcml2YXRlIF9vbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKCdtYXgnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgIHRoaXMuX2NyZWF0ZVZhbGlkYXRvcigpO1xuICAgICAgICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB0aGlzLl9vbkNoYW5nZSgpO1xuICAgICAgfVxuICAgfVxuXG4gICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzfG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMubWF4ID09IG51bGwgPyBudWxsIDogdGhpcy5fdmFsaWRhdG9yKGMpO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICAgfVxuXG4gICBwcml2YXRlIF9jcmVhdGVWYWxpZGF0b3IoKTogdm9pZCB7XG4gICAgICB0aGlzLl92YWxpZGF0b3IgPSBWYWxpZGF0b3JzLm1heChOdW1iZXIodGhpcy5tYXgpKTtcbiAgIH1cbn1cbiJdfQ==