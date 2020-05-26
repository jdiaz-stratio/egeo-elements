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
export class StMinValidator {
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('min' in changes) {
            this._createValidator();
            if (this._onChange)
                this._onChange();
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.min == null ? null : this._validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._onChange = fn;
    }
    /**
     * @private
     * @return {?}
     */
    _createValidator() {
        this._validator = Validators.min(Number(this.min));
    }
}
StMinValidator.decorators = [
    { type: Directive, args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => StMinValidator)), multi: true }
                ], host: { '[attr.min]': 'min ? min : null' }
            },] }
];
StMinValidator.propDecorators = {
    min: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbWluLXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3JtL3N0LW1pbi12YWxpZGF0b3Ivc3QtbWluLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQTZELFVBQVUsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0SCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZGLE1BQU0sT0FBTyxjQUFjOzs7OztJQU94QixXQUFXLENBQUMsT0FBc0I7UUFDL0IsSUFBSSxLQUFLLElBQUksT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVM7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3ZDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsQ0FBa0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQseUJBQXlCLENBQUMsRUFBYztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLGdCQUFnQjtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTlCSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLDBEQUEwRDtnQkFDcEUsU0FBUyxFQUFFO29CQUNSLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQ3hGLEVBQUksSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFFLGtCQUFrQixFQUFDO2FBQy9DOzs7a0JBRUcsS0FBSzs7OztJQUFOLDZCQUFxQjs7Ozs7SUFFckIsb0NBQWdDOzs7OztJQUVoQyxtQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9ycywgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgIHNlbGVjdG9yOiAnW21pbl1bZm9ybUNvbnRyb2xOYW1lXSxbbWluXVtmb3JtQ29udHJvbF0sW21pbl1bbmdNb2RlbF0nLFxuICAgcHJvdmlkZXJzOiBbXG4gICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0TWluVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuICAgXSwgICBob3N0OiB7J1thdHRyLm1pbl0nOiAnbWluID8gbWluIDogbnVsbCd9XG59KVxuZXhwb3J0IGNsYXNzIFN0TWluVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkNoYW5nZXMge1xuICAgQElucHV0KCkgbWluOiBzdHJpbmc7XG5cbiAgIHByaXZhdGUgX3ZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG5cbiAgIHByaXZhdGUgX29uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoJ21pbicgaW4gY2hhbmdlcykge1xuICAgICAgICAgdGhpcy5fY3JlYXRlVmFsaWRhdG9yKCk7XG4gICAgICAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHRoaXMuX29uQ2hhbmdlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnN8bnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5taW4gPT0gbnVsbCA/IG51bGwgOiB0aGlzLl92YWxpZGF0b3IoYyk7XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIHByaXZhdGUgX2NyZWF0ZVZhbGlkYXRvcigpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3ZhbGlkYXRvciA9IFZhbGlkYXRvcnMubWluKE51bWJlcih0aGlzLm1pbikpO1xuICAgfVxufVxuIl19