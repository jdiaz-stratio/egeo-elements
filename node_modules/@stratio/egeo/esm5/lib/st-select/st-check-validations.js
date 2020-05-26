/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-check-validations.ts
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
import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
var StCheckValidationsDirective = /** @class */ (function () {
    function StCheckValidationsDirective(control) {
        this.control = control;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    StCheckValidationsDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @return {?}
     */
    StCheckValidationsDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sub = this.control.statusChanges.subscribe((/**
         * @return {?}
         */
        function () { return _this.notifyErrorsIfExists(); }));
    };
    /**
     * @return {?}
     */
    StCheckValidationsDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    // TODO implement error check and notify correct error
    // TODO implement error check and notify correct error
    /**
     * @private
     * @return {?}
     */
    StCheckValidationsDirective.prototype.notifyErrorsIfExists = 
    // TODO implement error check and notify correct error
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.control.valid && this.onChange) {
            this.onChange(null);
        }
        else if (this.onChange) {
            this.onChange(this.errorMessage);
        }
    };
    StCheckValidationsDirective.decorators = [
        { type: Directive, args: [{ selector: '[stCheckValidations]' },] }
    ];
    /** @nocollapse */
    StCheckValidationsDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    StCheckValidationsDirective.propDecorators = {
        errorMessage: [{ type: Input }]
    };
    return StCheckValidationsDirective;
}());
export { StCheckValidationsDirective };
if (false) {
    /** @type {?} */
    StCheckValidationsDirective.prototype.errorMessage;
    /** @type {?} */
    StCheckValidationsDirective.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    StCheckValidationsDirective.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    StCheckValidationsDirective.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY2hlY2stdmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNlbGVjdC9zdC1jaGVjay12YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNDO0lBUUcscUNBQW9CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7SUFBSSxDQUFDOzs7OztJQUUzQyxzREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBb0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUFBLGlCQUVDO1FBREUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixFQUFFLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztJQUN0RixDQUFDOzs7O0lBRUQsaURBQVc7OztJQUFYO1FBQ0csSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7SUFFRCxzREFBc0Q7Ozs7OztJQUM5QywwREFBb0I7Ozs7OztJQUE1QjtRQUNHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25DO0lBQ0osQ0FBQzs7Z0JBL0JILFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztnQkFKdEMsU0FBUzs7OytCQU1kLEtBQUs7O0lBOEJULGtDQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EvQlksMkJBQTJCOzs7SUFDckMsbURBQThCOztJQUU5QiwrQ0FBMkI7Ozs7O0lBRTNCLDBDQUEwQjs7Ozs7SUFFZCw4Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdENoZWNrVmFsaWRhdGlvbnNdJyB9KVxuZXhwb3J0IGNsYXNzIFN0Q2hlY2tWYWxpZGF0aW9uc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuXG4gICBvbkNoYW5nZTogKF86IGFueSkgPT4gdm9pZDtcblxuICAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLmNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5ub3RpZnlFcnJvcnNJZkV4aXN0cygpKTtcbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8vIFRPRE8gaW1wbGVtZW50IGVycm9yIGNoZWNrIGFuZCBub3RpZnkgY29ycmVjdCBlcnJvclxuICAgcHJpdmF0ZSBub3RpZnlFcnJvcnNJZkV4aXN0cygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmNvbnRyb2wudmFsaWQgJiYgdGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICB9XG59XG4iXX0=