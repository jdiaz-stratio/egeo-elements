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
export const PAGETITLE_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => StPageTitleComponent)),
    multi: true
};
let StPageTitleComponent = class StPageTitleComponent {
    constructor() {
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
        value => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @param {?} title
     * @return {?}
     */
    set title(title) {
        if (this._title !== title) {
            this._title = title;
        }
        this._controlValueAccessorChangeFn(this._title);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hasPreTitleValue = this.hasPreTitle();
    }
    /**
     * @return {?}
     */
    onClickedButton() {
        this.clickButton.emit();
    }
    /**
     * @return {?}
     */
    hasPreTitle() {
        return this.preTitle !== undefined;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._title = value;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onEdit($event) {
        this.edit.emit(this._title);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    onClickEdit() {
        this.focus = true;
        this.input.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focus = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focus = false;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnZS10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXBhZ2UtdGl0bGUvc3QtcGFnZS10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFHSixpQkFBaUIsRUFDbkIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQ0osdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsVUFBVSxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQWMsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFdEUsTUFBTSxPQUFPLDBCQUEwQixHQUFRO0lBQzVDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNiO0lBVVksb0JBQW9CLFNBQXBCLG9CQUFvQjtJQVJqQztRQXNCWSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFRekIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxTQUFJLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJbkQsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFXekMsa0NBQTZCOzs7O1FBQXlCLEtBQUssQ0FBQyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBRWxFLGNBQVM7OztRQUFjLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztJQWtDbkMsQ0FBQzs7OztJQTdFRSxJQUNJLEtBQUs7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFzQkQsUUFBUTtRQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELGVBQWU7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFNRCxXQUFXO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQVc7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF3QjtRQUN0QyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsV0FBVztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELE1BQU07UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0NBQ0gsQ0FBQTs7WUFyRkEsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwreERBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7O2FBQ3pDOzs7b0JBRUcsS0FBSzt5QkFhTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBQ0wsTUFBTTttQkFDTixNQUFNO29CQUVOLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztBQTVCekIsb0JBQW9CO0lBUmhDLE1BQU0sRUFBRTtHQVFJLG9CQUFvQixDQThFaEM7U0E5RVksb0JBQW9COzs7SUFjOUIsMENBQWlDOztJQUNqQyxxQ0FBdUI7O0lBQ3ZCLHdDQUFzQzs7SUFDdEMsd0NBQW1DOztJQUNuQywyQ0FBNkI7O0lBQzdCLHdDQUEyQjs7SUFDM0Isd0NBQTJCOztJQUMzQix5Q0FBMkI7O0lBQzNCLHlDQUEyQjs7SUFDM0IscUNBQXdCOztJQUN4Qiw0Q0FBOEI7O0lBQzlCLDJDQUE4RDs7SUFDOUQsb0NBQTBEOztJQUUxRCxxQ0FBZ0Q7O0lBRWhELHFDQUE4Qjs7SUFDOUIsZ0RBQXlDOzs7OztJQUN6QyxzQ0FBdUI7O0lBVXZCLDZEQUFrRTs7SUFFbEUseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gICBGb3JtR3JvdXAsXG4gICBOR19WQUxVRV9BQ0NFU1NPUlxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDb21wb25lbnQsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBJbnB1dCxcbiAgIE9uSW5pdCxcbiAgIE91dHB1dCxcbiAgIFZpZXdDaGlsZCxcbiAgIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBQQUdFVElUTEVfQ09OVFJPTF9BQ0NFU1NPUjogYW55ID0ge1xuICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdFBhZ2VUaXRsZUNvbXBvbmVudCksXG4gICBtdWx0aTogdHJ1ZVxufTtcblxuQFN0RWdlbygpXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtcGFnZS10aXRsZScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcGFnZS10aXRsZS5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1wYWdlLXRpdGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgIHByb3ZpZGVyczogW1BBR0VUSVRMRV9DT05UUk9MX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBTdFBhZ2VUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xuICAgQElucHV0KClcbiAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgfVxuXG4gICBzZXQgdGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgICAgaWYgKHRoaXMuX3RpdGxlICE9PSB0aXRsZSkge1xuICAgICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbih0aGlzLl90aXRsZSk7XG4gICB9XG5cbiAgIEBJbnB1dCgpIGxlZnRCdXR0b246IHN0cmluZyA9ICcnO1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIEBJbnB1dCgpIHByZVRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICBASW5wdXQoKSBlZGl0YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW47XG4gICBASW5wdXQoKSBtYXhsZW5ndGg6IG51bWJlcjtcbiAgIEBJbnB1dCgpIG1pbmxlbmd0aDogbnVtYmVyO1xuICAgQElucHV0KCkgZXJyb3I6IGJvb2xlYW47XG4gICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgIEBPdXRwdXQoKSBjbGlja0J1dHRvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICBAT3V0cHV0KCkgZWRpdDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIEBWaWV3Q2hpbGQoJ2lucHV0Jywge3N0YXRpYzogZmFsc2V9KSBpbnB1dDogYW55O1xuXG4gICBwdWJsaWMgZm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBoYXNQcmVUaXRsZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICBwcml2YXRlIF90aXRsZTogc3RyaW5nO1xuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaGFzUHJlVGl0bGVWYWx1ZSA9IHRoaXMuaGFzUHJlVGl0bGUoKTtcbiAgIH1cblxuICAgb25DbGlja2VkQnV0dG9uKCk6IHZvaWQge1xuICAgICAgdGhpcy5jbGlja0J1dHRvbi5lbWl0KCk7XG4gICB9XG5cbiAgIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9IHZhbHVlID0+IHt9O1xuXG4gICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHt9O1xuXG4gICBoYXNQcmVUaXRsZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnByZVRpdGxlICE9PSB1bmRlZmluZWQ7XG4gICB9XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgIH1cblxuICAgb25FZGl0KCRldmVudDogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmVkaXQuZW1pdCh0aGlzLl90aXRsZSk7XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIG9uQ2xpY2tFZGl0KCk6IHZvaWQge1xuICAgICAgdGhpcy5mb2N1cyA9IHRydWU7XG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgIH1cblxuICAgb25Gb2N1cygpOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9jdXMgPSB0cnVlO1xuICAgfVxuXG4gICBvbkJsdXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmZvY3VzID0gZmFsc2U7XG4gICB9XG59XG4iXX0=