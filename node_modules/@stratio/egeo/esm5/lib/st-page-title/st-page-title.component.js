/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-page-title/st-page-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, forwardRef } from '@angular/core';
import { StEgeo } from '../decorators/require-decorators';
/** @type {?} */
export var PAGETITLE_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return StPageTitleComponent; })),
    multi: true
};
var StPageTitleComponent = /** @class */ (function () {
    function StPageTitleComponent() {
        this.leftButton = '';
        this.editable = false;
        this.clickButton = new EventEmitter();
        this.edit = new EventEmitter();
        this.focus = false;
        this.hasPreTitleValue = false;
        this._controlValueAccessorChangeFn = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(StPageTitleComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this._title;
        },
        set: /**
         * @param {?} title
         * @return {?}
         */
        function (title) {
            if (this._title !== title) {
                this._title = title;
            }
            this._controlValueAccessorChangeFn(this._title);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hasPreTitleValue = this.hasPreTitle();
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onClickedButton = /**
     * @return {?}
     */
    function () {
        this.clickButton.emit();
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.hasPreTitle = /**
     * @return {?}
     */
    function () {
        return this.preTitle !== undefined;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StPageTitleComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._title = value;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    StPageTitleComponent.prototype.onEdit = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.edit.emit(this._title);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StPageTitleComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StPageTitleComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onClickEdit = /**
     * @return {?}
     */
    function () {
        this.focus = true;
        this.input.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focus = true;
    };
    /**
     * @return {?}
     */
    StPageTitleComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focus = false;
    };
    StPageTitleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-page-title',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-page-title sth-page-title\">\n   <div class=\"sth-page-title-button-box button-box\" *ngIf=\"leftButton\">\n      <button class=\"button button-toolbar st-temporal-button-style\" [attr.id]=\"qaTag + '-left-button'\" (click)=\"onClickedButton()\" type=\"button\">\n         <i [ngClass]=\"leftButton\"></i>\n      </button>\n   </div>\n   <div class=\"main-title sth-page-title-main-title\">\n      <span *ngIf=\"hasPreTitleValue\" class=\"sth-page-title-pre-title\">{{preTitle}}: </span>\n      <span *ngIf=\"!editable\" class=\"sth-page-title-title\">{{title}}</span>\n\n      <div class=\"editable-box sth-editable\" *ngIf=\"editable\">\n\n         <span class=\"error_text sth-error-text\" *ngIf=\"errorMessage\">{{errorMessage}}</span>\n\n         <span class=\"sth-page-title-title title\" (click)=\"onClickEdit()\" [ngClass]=\"{'sth-error': error}\">\n            <input type=\"text\" (keyup)=\"onEdit($event)\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [(ngModel)]=\"title\" #input st-input-adjustable placeholder=\"{{placeholder}}\"\n                [maxlength]=\"maxlength\" [minlength]=\"minlength\" [disabled]=\"disabled\" [readOnly]=\"readOnly\" />\n            <i *ngIf=\"!focus\" class=\"button-edit sth-button-edit icon-edit\"></i>\n         </span>\n\n      </div>\n\n   </div>\n   <div>\n      <ng-content></ng-content>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [PAGETITLE_CONTROL_ACCESSOR],
                    styles: ["@charset \"UTF-8\";.st-page-title{width:100%;display:flex;flex-direction:row;align-items:flex-end;flex-wrap:nowrap}.st-page-title input:focus{outline:0}.button-box{padding-right:10px;padding-bottom:8px;margin-right:10px;display:inline-block}.main-title{flex-grow:1;white-space:nowrap;line-height:25px;padding-bottom:10px;vertical-align:bottom;overflow:hidden;text-overflow:ellipsis}.button-edit{font-size:17px;position:relative;top:-2px}.editable-box .title{display:block;width:100%;border:1px solid transparent;cursor:text}.editable-box .title input{display:inline-block;resize:horizontal;width:100%}.editable-box .title:hover{border-color:#e7e7e7}.title-hidden{text-transform:none!important;position:absolute;visibility:hidden;height:auto;width:auto;white-space:nowrap}"]
                }] }
    ];
    StPageTitleComponent.propDecorators = {
        title: [{ type: Input }],
        leftButton: [{ type: Input }],
        qaTag: [{ type: Input }],
        preTitle: [{ type: Input }],
        editable: [{ type: Input }],
        placeholder: [{ type: Input }],
        disabled: [{ type: Input }],
        readOnly: [{ type: Input }],
        maxlength: [{ type: Input }],
        minlength: [{ type: Input }],
        error: [{ type: Input }],
        errorMessage: [{ type: Input }],
        clickButton: [{ type: Output }],
        edit: [{ type: Output }],
        input: [{ type: ViewChild, args: ['input', { static: false },] }]
    };
    StPageTitleComponent = tslib_1.__decorate([
        StEgeo()
    ], StPageTitleComponent);
    return StPageTitleComponent;
}());
export { StPageTitleComponent };
if (false) {
    /** @type {?} */
    StPageTitleComponent.prototype.leftButton;
    /** @type {?} */
    StPageTitleComponent.prototype.qaTag;
    /** @type {?} */
    StPageTitleComponent.prototype.preTitle;
    /** @type {?} */
    StPageTitleComponent.prototype.editable;
    /** @type {?} */
    StPageTitleComponent.prototype.placeholder;
    /** @type {?} */
    StPageTitleComponent.prototype.disabled;
    /** @type {?} */
    StPageTitleComponent.prototype.readOnly;
    /** @type {?} */
    StPageTitleComponent.prototype.maxlength;
    /** @type {?} */
    StPageTitleComponent.prototype.minlength;
    /** @type {?} */
    StPageTitleComponent.prototype.error;
    /** @type {?} */
    StPageTitleComponent.prototype.errorMessage;
    /** @type {?} */
    StPageTitleComponent.prototype.clickButton;
    /** @type {?} */
    StPageTitleComponent.prototype.edit;
    /** @type {?} */
    StPageTitleComponent.prototype.input;
    /** @type {?} */
    StPageTitleComponent.prototype.focus;
    /** @type {?} */
    StPageTitleComponent.prototype.hasPreTitleValue;
    /**
     * @type {?}
     * @private
     */
    StPageTitleComponent.prototype._title;
    /** @type {?} */
    StPageTitleComponent.prototype._controlValueAccessorChangeFn;
    /** @type {?} */
    StPageTitleComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnZS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXBhZ2UtdGl0bGUvc3QtcGFnZS10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFHSixpQkFBaUIsRUFDbkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0osdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQWMsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFdEUsTUFBTSxLQUFPLDBCQUEwQixHQUFRO0lBQzVDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDYjs7SUFFRDtRQXNCWSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFRekIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxTQUFJLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJbkQsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFXekMsa0NBQTZCOzs7O1FBQXlCLFVBQUEsS0FBSyxJQUFLLENBQUMsRUFBQztRQUVsRSxjQUFTOzs7UUFBYyxjQUFPLENBQUMsRUFBQztJQWtDbkMsQ0FBQztJQTdFRSxzQkFDSSx1Q0FBSzs7OztRQURUO1lBRUcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQsVUFBVSxLQUFhO1lBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1lBRUQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxDQUFDOzs7T0FSQTs7OztJQThCRCx1Q0FBUTs7O0lBQVI7UUFDRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFNRCwwQ0FBVzs7O0lBQVg7UUFDRyxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQseUNBQVU7Ozs7SUFBVixVQUFXLEtBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sTUFBVztRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUF3QjtRQUN0QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxzQ0FBTzs7O0lBQVA7UUFDRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQscUNBQU07OztJQUFOO1FBQ0csSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Z0JBcEZILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsZUFBZTtvQkFDekIsK3hEQUE2QztvQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDOztpQkFDekM7Ozt3QkFFRyxLQUFLOzZCQWFMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxNQUFNO3VCQUNOLE1BQU07d0JBRU4sU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBNUJ6QixvQkFBb0I7UUFSaEMsTUFBTSxFQUFFO09BUUksb0JBQW9CLENBOEVoQztJQUFELDJCQUFDO0NBQUEsSUFBQTtTQTlFWSxvQkFBb0I7OztJQWM5QiwwQ0FBaUM7O0lBQ2pDLHFDQUF1Qjs7SUFDdkIsd0NBQXNDOztJQUN0Qyx3Q0FBbUM7O0lBQ25DLDJDQUE2Qjs7SUFDN0Isd0NBQTJCOztJQUMzQix3Q0FBMkI7O0lBQzNCLHlDQUEyQjs7SUFDM0IseUNBQTJCOztJQUMzQixxQ0FBd0I7O0lBQ3hCLDRDQUE4Qjs7SUFDOUIsMkNBQThEOztJQUM5RCxvQ0FBMEQ7O0lBRTFELHFDQUFnRDs7SUFFaEQscUNBQThCOztJQUM5QixnREFBeUM7Ozs7O0lBQ3pDLHNDQUF1Qjs7SUFVdkIsNkRBQWtFOztJQUVsRSx5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgIEZvcm1Hcm91cCxcbiAgIE5HX1ZBTFVFX0FDQ0VTU09SXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENvbXBvbmVudCxcbiAgIEV2ZW50RW1pdHRlcixcbiAgIElucHV0LFxuICAgT25Jbml0LFxuICAgT3V0cHV0LFxuICAgVmlld0NoaWxkLFxuICAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcblxuZXhwb3J0IGNvbnN0IFBBR0VUSVRMRV9DT05UUk9MX0FDQ0VTU09SOiBhbnkgPSB7XG4gICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0UGFnZVRpdGxlQ29tcG9uZW50KSxcbiAgIG11bHRpOiB0cnVlXG59O1xuXG5AU3RFZ2VvKClcbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1wYWdlLXRpdGxlJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1wYWdlLXRpdGxlLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXBhZ2UtdGl0bGUuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgcHJvdmlkZXJzOiBbUEFHRVRJVExFX0NPTlRST0xfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFN0UGFnZVRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gICBASW5wdXQoKVxuICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICB9XG5cbiAgIHNldCB0aXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgICBpZiAodGhpcy5fdGl0bGUgIT09IHRpdGxlKSB7XG4gICAgICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMuX3RpdGxlKTtcbiAgIH1cblxuICAgQElucHV0KCkgbGVmdEJ1dHRvbjogc3RyaW5nID0gJyc7XG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgQElucHV0KCkgcHJlVGl0bGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbjtcbiAgIEBJbnB1dCgpIG1heGxlbmd0aDogbnVtYmVyO1xuICAgQElucHV0KCkgbWlubGVuZ3RoOiBudW1iZXI7XG4gICBASW5wdXQoKSBlcnJvcjogYm9vbGVhbjtcbiAgIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICAgQE91dHB1dCgpIGNsaWNrQnV0dG9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIEBPdXRwdXQoKSBlZGl0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7c3RhdGljOiBmYWxzZX0pIGlucHV0OiBhbnk7XG5cbiAgIHB1YmxpYyBmb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgcHVibGljIGhhc1ByZVRpdGxlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5oYXNQcmVUaXRsZVZhbHVlID0gdGhpcy5oYXNQcmVUaXRsZSgpO1xuICAgfVxuXG4gICBvbkNsaWNrZWRCdXR0b24oKTogdm9pZCB7XG4gICAgICB0aGlzLmNsaWNrQnV0dG9uLmVtaXQoKTtcbiAgIH1cblxuICAgX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm46ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gdmFsdWUgPT4ge307XG5cbiAgIG9uVG91Y2hlZDogKCkgPT4gYW55ID0gKCkgPT4ge307XG5cbiAgIGhhc1ByZVRpdGxlKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucHJlVGl0bGUgIT09IHVuZGVmaW5lZDtcbiAgIH1cblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgfVxuXG4gICBvbkVkaXQoJGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMuZWRpdC5lbWl0KHRoaXMuX3RpdGxlKTtcbiAgIH1cblxuICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4gPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuICAgb25DbGlja0VkaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgfVxuXG4gICBvbkZvY3VzKCk6IHZvaWQge1xuICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICB9XG5cbiAgIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9jdXMgPSBmYWxzZTtcbiAgIH1cbn1cbiJdfQ==