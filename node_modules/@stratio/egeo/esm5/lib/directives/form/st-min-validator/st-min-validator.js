/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form/st-min-validator/st-min-validator.ts
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
var StMinValidator = /** @class */ (function () {
    function StMinValidator() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StMinValidator.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('min' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    StMinValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        return this.min == null ? null : this._validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StMinValidator.prototype.registerOnValidatorChange = /**
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
    StMinValidator.prototype._createValidator = /**
     * @private
     * @return {?}
     */
    function () {
        this._validator = Validators.min(Number(this.min));
    };
    StMinValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StMinValidator; })), multi: true }
                    ], host: { '[attr.min]': 'min ? min : null' }
                },] }
    ];
    StMinValidator.propDecorators = {
        min: [{ type: Input }]
    };
    return StMinValidator;
}());
export { StMinValidator };
if (false) {
    /** @type {?} */
    StMinValidator.prototype.min;
    /**
     * @type {?}
     * @private
     */
    StMinValidator.prototype._validator;
    /**
     * @type {?}
     * @private
     */
    StMinValidator.prototype._onChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbWluLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3JtL3N0LW1pbi12YWxpZGF0b3Ivc3QtbWluLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQTZELFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0SCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZGO0lBQUE7SUErQkEsQ0FBQzs7Ozs7SUFsQkUsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN2QztJQUNKLENBQUM7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLENBQWtCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELGtEQUF5Qjs7OztJQUF6QixVQUEwQixFQUFjO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8seUNBQWdCOzs7O0lBQXhCO1FBQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkE5QkgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSwwREFBMEQ7b0JBQ3BFLFNBQVMsRUFBRTt3QkFDUixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3hGLEVBQUksSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFDO2lCQUMvQzs7O3NCQUVHLEtBQUs7O0lBd0JULHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F6QlksY0FBYzs7O0lBQ3hCLDZCQUFxQjs7Ozs7SUFFckIsb0NBQWdDOzs7OztJQUVoQyxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9ycywgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgIHNlbGVjdG9yOiAnW21pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0TWluVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuICAgXSwgICBob3N0OiB7J1thdHRyLm1pbl0nOiAnbWluID8gbWluIDogbnVsbCd9XG59KVxuZXhwb3J0IGNsYXNzIFN0TWluVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXMge1xuICAgQElucHV0KCkgbWluOiBzdHJpbmc7XG5cbiAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgIHByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoJ21pbicgaW4gY2hhbmdlcykge1xuICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5taW4gPT0gbnVsbCA/IG51bGwgOiB0aGlzLl92YWxpZGF0b3IoYyk7XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluKE51bWJlcih0aGlzLm1pbikpO1xuICAgfVxufVxuIl19