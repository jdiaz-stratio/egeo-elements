/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-form-list/st-form-list.component.ts
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
import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS, FormGroup, FormArray } from '@angular/forms';
import { cloneDeep as _cloneDeep } from 'lodash';
/**
 * \@description {Component} [Form list]
 *
 * The form list component allows to create dynamically list of items.
 *
 * \@example
 *
 * {html}
 *
 * ```
 *
 * <st-form-list [schema]="jsonSchema" [ngModel]="model1" name="list"
 * (blur)="onBlur($event)" (add)="onAddItem($event)" (remove)="onRemoveItem($event)">
 * </st-form-list>
 *
 * ```
 *
 *
 */
var StFormListComponent = /** @class */ (function () {
    function StFormListComponent(_cd) {
        this._cd = _cd;
        /**
         * \@Input {string} [buttonLabel='Add one more item'] String displayed in the button to add more items
         */
        this.buttonLabel = 'Add one more item';
        /**
         * \@Output {any[]} [valueChange] Notify any value change
         */
        this.valueChange = new EventEmitter();
        /**
         * \@Output {number} [add]  Notify the position of the added item and the modified model
         */
        this.add = new EventEmitter();
        /**
         * \@Output {number} [remove] Notify the position of the removed item and the modified model
         */
        this.remove = new EventEmitter();
        /**
         * \@Output {any[]} [blur] Notify when user leaves a field
         */
        this.blur = new EventEmitter();
        this.formArray = new FormArray([]);
        this._value = [];
        this.onTouched = (/**
         * @return {?}
         */
        function () {
        });
    }
    Object.defineProperty(StFormListComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._value) {
                this._value = _cloneDeep(value);
                this.updateForm();
                this.onChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // Function to call when the value changes.
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    StFormListComponent.prototype.onChange = 
    // Function to call when the value changes.
    /**
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    /**
     * @return {?}
     */
    StFormListComponent.prototype.addItem = /**
     * @return {?}
     */
    function () {
        this._value.push({});
        this.formArray.push(this.generateItemFormGroup());
        this.valueChange.emit(this._value);
        this.add.emit({ position: this._value.length - 1, model: this._value });
        this.onChange(this._value);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    StFormListComponent.prototype.removeItem = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.formArray.removeAt(position);
        this._value.splice(position, 1);
        this.valueChange.emit(this._value);
        this.remove.emit({ position: position, model: this._value });
        this.onChange(this._value);
    };
    /**
     * @param {?} propertyName
     * @return {?}
     */
    StFormListComponent.prototype.isRequired = /**
     * @param {?} propertyName
     * @return {?}
     */
    function (propertyName) {
        return propertyName && this.schema.required && this.schema.required.indexOf(propertyName) !== -1;
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    StFormListComponent.prototype.generateItemFormGroup = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var formGroup = new FormGroup({});
        /** @type {?} */
        var properties = Object.keys(this.schema.properties);
        for (var i = 0; i < properties.length; ++i) {
            /** @type {?} */
            var property = properties[i];
            /** @type {?} */
            var value = this.schema.properties[property].default;
            if (position !== undefined && this._value[i]) {
                value = position !== undefined ? this._value[i][property] : null;
            }
            formGroup.addControl(properties[i], new FormControl(value));
        }
        return formGroup;
    };
    /**
     * @param {?} control
     * @return {?}
     */
    StFormListComponent.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var errors = null;
        if (this.formArray) {
            var _loop_1 = function (i) {
                /** @type {?} */
                var rowFormGroup = (/** @type {?} */ (this_1.formArray.controls[i]));
                Object.keys(rowFormGroup.controls).forEach((/**
                 * @param {?} propertyName
                 * @return {?}
                 */
                function (propertyName) {
                    if (rowFormGroup.controls[propertyName] && rowFormGroup.controls[propertyName].errors) {
                        if (!errors) {
                            errors = [];
                        }
                        if (!errors[i]) {
                            errors[i] = {};
                        }
                        errors[i][propertyName] = rowFormGroup.controls[propertyName].errors;
                    }
                }));
            };
            var this_1 = this;
            for (var i = 0; i < this.formArray.controls.length; ++i) {
                _loop_1(i);
            }
        }
        return errors;
    };
    /**
     * @param {?} value
     * @param {?} rowPosition
     * @param {?} property
     * @return {?}
     */
    StFormListComponent.prototype.onChangeProperty = /**
     * @param {?} value
     * @param {?} rowPosition
     * @param {?} property
     * @return {?}
     */
    function (value, rowPosition, property) {
        var _this = this;
        this._value[rowPosition][property] = value;
        this.valueChange.emit(this._value);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.onChange(_this._value);
        }));
    };
    /**
     * @return {?}
     */
    StFormListComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.blur.emit(this._value);
    };
    // When value is received from outside
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    StFormListComponent.prototype.writeValue = 
    // When value is received from outside
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && this._value !== value) {
            this._value = _cloneDeep(value);
            this.updateForm();
            this._cd.markForCheck();
        }
    };
    // Registry the change function to propagate internal model changes
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormListComponent.prototype.registerOnChange = 
    // Registry the change function to propagate internal model changes
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StFormListComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // Allows Angular to disable the form.
    // Allows Angular to disable the form.
    /**
     * @param {?} disable
     * @return {?}
     */
    StFormListComponent.prototype.setDisabledState = 
    // Allows Angular to disable the form.
    /**
     * @param {?} disable
     * @return {?}
     */
    function (disable) {
        if (disable) {
            this.formArray.disable();
        }
        else {
            this.formArray.enable();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StFormListComponent.prototype.updateForm = /**
     * @private
     * @return {?}
     */
    function () {
        this.formArray = new FormArray([]);
        if (this._value) {
            for (var i = 0; i < this._value.length; ++i) {
                this.formArray.push(this.generateItemFormGroup(i));
            }
        }
    };
    StFormListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-form-list',
                    template: "<form novalidate class=\"st-form-list\">\n   <div *ngFor=\"let row of value; let i=index\" class=\"st-form-list__row\">\n         <st-form-field class=\"st-form-list__row-item\"\n                        *ngFor=\"let property of schema.properties | stObjectToArray\"\n                        [schema]=\"property\"\n                        [formControl]=\"formArray.controls[i].get(property.key)\"\n                        [ngModel]=\"row[property.key]\"\n                        (ngModelChange)=\"onChangeProperty($event, i, property.key)\"\n                        name=\"{{property.key}}\"\n                        qaTag=\"{{property.key}}-{{i}}\"\n                        (blur)=\"onBlur()\"\n                        [required]=\"isRequired(property.key)\">\n         </st-form-field>\n         <i class=\"icon-cross remove-button\" (click)=\"removeItem(i)\"></i>\n   </div>\n\n   <button *ngIf=\"formArray && !formArray.disabled\" class=\"button button-link\" (click)=\"addItem()\">\n      <i class=\"icon-circle-plus\"></i><span>{{buttonLabel}}</span>\n   </button>\n</form>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormListComponent; })), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return StFormListComponent; })), multi: true }
                    ],
                    styles: [".st-form-list{width:100%}.st-form-list__row{display:flex;position:relative}.st-form-list__row :first-child{margin-right:10px}.st-form-list__row-item{flex:1;margin-bottom:20px}.st-form-list__row:first-of-type .remove-button{margin-top:25px}.st-form-list__row:not(first-of-type) .remove-button{margin-top:6px}.button.button-link{margin-top:4px}.button.button-link>i{padding-right:4px}.remove-button{vertical-align:middle;padding-left:15px;cursor:pointer;position:absolute;right:-30px;top:0}"]
                }] }
    ];
    /** @nocollapse */
    StFormListComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StFormListComponent.propDecorators = {
        schema: [{ type: Input }],
        buttonLabel: [{ type: Input }],
        valueChange: [{ type: Output }],
        add: [{ type: Output }],
        remove: [{ type: Output }],
        blur: [{ type: Output }],
        value: [{ type: Input }]
    };
    return StFormListComponent;
}());
export { StFormListComponent };
if (false) {
    /**
     * \@Input {any} [schema=''] JSON schema of items
     * @type {?}
     */
    StFormListComponent.prototype.schema;
    /**
     * \@Input {string} [buttonLabel='Add one more item'] String displayed in the button to add more items
     * @type {?}
     */
    StFormListComponent.prototype.buttonLabel;
    /**
     * \@Output {any[]} [valueChange] Notify any value change
     * @type {?}
     */
    StFormListComponent.prototype.valueChange;
    /**
     * \@Output {number} [add]  Notify the position of the added item and the modified model
     * @type {?}
     */
    StFormListComponent.prototype.add;
    /**
     * \@Output {number} [remove] Notify the position of the removed item and the modified model
     * @type {?}
     */
    StFormListComponent.prototype.remove;
    /**
     * \@Output {any[]} [blur] Notify when user leaves a field
     * @type {?}
     */
    StFormListComponent.prototype.blur;
    /** @type {?} */
    StFormListComponent.prototype.formArray;
    /**
     * @type {?}
     * @private
     */
    StFormListComponent.prototype._value;
    /** @type {?} */
    StFormListComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    StFormListComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9ybS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZm9ybS1saXN0L3N0LWZvcm0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFlBQVksRUFDWixNQUFNLEVBQ04sVUFBVSxFQUNWLGlCQUFpQixFQUNuQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0osaUJBQWlCLEVBRWpCLFdBQVcsRUFDWCxhQUFhLEVBQ2IsU0FBUyxFQUNULFNBQVMsRUFDWCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLElBQUksVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCakQ7SUFnQ0csNkJBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBakJqQyxnQkFBVyxHQUFXLG1CQUFtQixDQUFDOzs7O1FBR3pDLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFHekQsUUFBRyxHQUFtRCxJQUFJLFlBQVksRUFBb0MsQ0FBQzs7OztRQUczRyxXQUFNLEdBQW9ELElBQUksWUFBWSxFQUFvQyxDQUFDOzs7O1FBRy9HLFNBQUksR0FBd0IsSUFBSSxZQUFZLEVBQVMsQ0FBQztRQUV6RCxjQUFTLEdBQWMsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsV0FBTSxHQUFVLEVBQUUsQ0FBQztRQXFCM0IsY0FBUzs7O1FBQUc7UUFDWixDQUFDLEVBQUE7SUFuQkQsQ0FBQztJQUVELHNCQUFhLHNDQUFLOzs7O1FBQWxCO1lBQ0csT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQsVUFBVSxLQUFVO1lBQ2pCLElB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LGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENvbXBvbmVudCxcbiAgIElucHV0LFxuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBFdmVudEVtaXR0ZXIsXG4gICBPdXRwdXQsXG4gICBmb3J3YXJkUmVmLFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgTkdfVkFMVUVfQUNDRVNTT1IsXG4gICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgIEZvcm1Db250cm9sLFxuICAgTkdfVkFMSURBVE9SUyxcbiAgIEZvcm1Hcm91cCxcbiAgIEZvcm1BcnJheVxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjbG9uZURlZXAgYXMgX2Nsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtGb3JtIGxpc3RdXG4gKlxuICogVGhlIGZvcm0gbGlzdCBjb21wb25lbnQgYWxsb3dzIHRvIGNyZWF0ZSBkeW5hbWljYWxseSBsaXN0IG9mIGl0ZW1zLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKlxuICogPHN0LWZvcm0tbGlzdCBbc2NoZW1hXT1cImpzb25TY2hlbWFcIiBbbmdNb2RlbF09XCJtb2RlbDFcIiBuYW1lPVwibGlzdFwiXG4gKiAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiIChhZGQpPVwib25BZGRJdGVtKCRldmVudClcIiAocmVtb3ZlKT1cIm9uUmVtb3ZlSXRlbSgkZXZlbnQpXCI+XG4gKiA8L3N0LWZvcm0tbGlzdD5cbiAqXG4gKiBgYGBcbiAqXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtZm9ybS1saXN0JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1mb3JtLWxpc3QuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1mb3JtLWxpc3Quc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICBwcm92aWRlcnM6IFtcbiAgICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0Rm9ybUxpc3RDb21wb25lbnQpLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTdEZvcm1MaXN0Q29tcG9uZW50KSwgbXVsdGk6IHRydWUgfVxuICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0Rm9ybUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gICAvKiogQElucHV0IHthbnl9IFtzY2hlbWE9JyddIEpTT04gc2NoZW1hIG9mIGl0ZW1zICovXG4gICBASW5wdXQoKSBzY2hlbWE6IGFueTtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2J1dHRvbkxhYmVsPSdBZGQgb25lIG1vcmUgaXRlbSddIFN0cmluZyBkaXNwbGF5ZWQgaW4gdGhlIGJ1dHRvbiB0byBhZGQgbW9yZSBpdGVtcyAqL1xuICAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZyA9ICdBZGQgb25lIG1vcmUgaXRlbSc7XG5cbiAgIC8qKiBAT3V0cHV0IHthbnlbXX0gW3ZhbHVlQ2hhbmdlXSBOb3RpZnkgYW55IHZhbHVlIGNoYW5nZSAqL1xuICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAvKiogQE91dHB1dCB7bnVtYmVyfSBbYWRkXSAgTm90aWZ5IHRoZSBwb3NpdGlvbiBvZiB0aGUgYWRkZWQgaXRlbSBhbmQgdGhlIG1vZGlmaWVkIG1vZGVsICovXG4gICBAT3V0cHV0KCkgYWRkOiBFdmVudEVtaXR0ZXI8e3Bvc2l0aW9uOiBudW1iZXIsIG1vZGVsOiBhbnlbXX0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7cG9zaXRpb246IG51bWJlciwgbW9kZWw6IGFueVtdfT4oKTtcblxuICAgLyoqIEBPdXRwdXQge251bWJlcn0gW3JlbW92ZV0gTm90aWZ5IHRoZSBwb3NpdGlvbiBvZiB0aGUgcmVtb3ZlZCBpdGVtIGFuZCB0aGUgbW9kaWZpZWQgbW9kZWwgKi9cbiAgIEBPdXRwdXQoKSByZW1vdmU6ICBFdmVudEVtaXR0ZXI8e3Bvc2l0aW9uOiBudW1iZXIsIG1vZGVsOiBhbnlbXX0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7cG9zaXRpb246IG51bWJlciwgbW9kZWw6IGFueVtdfT4oKTtcblxuICAgLyoqIEBPdXRwdXQge2FueVtdfSBbYmx1cl0gTm90aWZ5IHdoZW4gdXNlciBsZWF2ZXMgYSBmaWVsZCAqL1xuICAgQE91dHB1dCgpIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xuXG4gICBwdWJsaWMgZm9ybUFycmF5OiBGb3JtQXJyYXkgPSBuZXcgRm9ybUFycmF5KFtdKTtcbiAgIHByaXZhdGUgX3ZhbHVlOiBhbnlbXSA9IFtdO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgQElucHV0KCkgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICB9XG5cbiAgIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICAgICB0aGlzLl92YWx1ZSA9IF9jbG9uZURlZXAodmFsdWUpO1xuICAgICAgICAgdGhpcy51cGRhdGVGb3JtKCk7XG4gICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgb25DaGFuZ2UoXzogYW55KTogdm9pZCB7XG4gICB9XG5cbiAgIG9uVG91Y2hlZCA9ICgpID0+IHtcbiAgIH1cblxuICAgYWRkSXRlbSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3ZhbHVlLnB1c2goe30pO1xuICAgICAgdGhpcy5mb3JtQXJyYXkucHVzaCh0aGlzLmdlbmVyYXRlSXRlbUZvcm1Hcm91cCgpKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLmFkZC5lbWl0KHsgcG9zaXRpb246IHRoaXMuX3ZhbHVlLmxlbmd0aCAtIDEsIG1vZGVsOiB0aGlzLl92YWx1ZSB9KTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgfVxuXG4gICByZW1vdmVJdGVtKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuZm9ybUFycmF5LnJlbW92ZUF0KHBvc2l0aW9uKTtcbiAgICAgIHRoaXMuX3ZhbHVlLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xuICAgICAgdGhpcy5yZW1vdmUuZW1pdCh7IHBvc2l0aW9uOiBwb3NpdGlvbiwgbW9kZWw6IHRoaXMuX3ZhbHVlIH0pO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XG4gICB9XG5cbiAgIGlzUmVxdWlyZWQocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWUgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQgJiYgdGhpcy5zY2hlbWEucmVxdWlyZWQuaW5kZXhPZihwcm9wZXJ0eU5hbWUpICE9PSAtMTtcbiAgIH1cblxuICAgZ2VuZXJhdGVJdGVtRm9ybUdyb3VwKHBvc2l0aW9uPzogbnVtYmVyKTogRm9ybUdyb3VwIHtcbiAgICAgIGxldCBmb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICAgIGxldCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgIGxldCBwcm9wZXJ0eTogc3RyaW5nID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgIGxldCB2YWx1ZTogYW55ID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uZGVmYXVsdDtcbiAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMuX3ZhbHVlW2ldKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBvc2l0aW9uICE9PSB1bmRlZmluZWQgPyB0aGlzLl92YWx1ZVtpXVtwcm9wZXJ0eV0gOiBudWxsO1xuICAgICAgICAgfVxuICAgICAgICAgZm9ybUdyb3VwLmFkZENvbnRyb2wocHJvcGVydGllc1tpXSwgbmV3IEZvcm1Db250cm9sKHZhbHVlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybUdyb3VwO1xuICAgfVxuXG4gICB2YWxpZGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCk6IGFueSB7XG4gICAgICBsZXQgZXJyb3JzOiBhbnkgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5mb3JtQXJyYXkpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mb3JtQXJyYXkuY29udHJvbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCByb3dGb3JtR3JvdXA6IEZvcm1Hcm91cCA9IDxGb3JtR3JvdXA+IHRoaXMuZm9ybUFycmF5LmNvbnRyb2xzW2ldO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocm93Rm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgIGlmIChyb3dGb3JtR3JvdXAuY29udHJvbHNbcHJvcGVydHlOYW1lXSAmJiByb3dGb3JtR3JvdXAuY29udHJvbHNbcHJvcGVydHlOYW1lXS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICghZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghZXJyb3JzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICBlcnJvcnNbaV0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVycm9yc1tpXVtwcm9wZXJ0eU5hbWVdID0gcm93Rm9ybUdyb3VwLmNvbnRyb2xzW3Byb3BlcnR5TmFtZV0uZXJyb3JzO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZXJyb3JzO1xuICAgfVxuXG4gICBvbkNoYW5nZVByb3BlcnR5KHZhbHVlOiBhbnksIHJvd1Bvc2l0aW9uOiBudW1iZXIsIHByb3BlcnR5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRoaXMuX3ZhbHVlW3Jvd1Bvc2l0aW9uXVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5fdmFsdWUpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIG9uQmx1cigpOiB2b2lkIHtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KHRoaXMuX3ZhbHVlKTtcbiAgIH1cblxuLy8gV2hlbiB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIG91dHNpZGVcbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHZhbHVlICYmIHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgdGhpcy5fdmFsdWUgPSBfY2xvbmVEZWVwKHZhbHVlKTtcbiAgICAgICAgIHRoaXMudXBkYXRlRm9ybSgpO1xuICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICB9XG5cbi8vIFJlZ2lzdHJ5IHRoZSBjaGFuZ2UgZnVuY3Rpb24gdG8gcHJvcGFnYXRlIGludGVybmFsIG1vZGVsIGNoYW5nZXNcbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgIH1cblxuICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgIH1cblxuXG4vLyBBbGxvd3MgQW5ndWxhciB0byBkaXNhYmxlIHRoZSBmb3JtLlxuICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICBpZiAoZGlzYWJsZSkge1xuICAgICAgICAgdGhpcy5mb3JtQXJyYXkuZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuZm9ybUFycmF5LmVuYWJsZSgpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIHVwZGF0ZUZvcm0oKTogdm9pZCB7XG4gICAgICB0aGlzLmZvcm1BcnJheSA9IG5ldyBGb3JtQXJyYXkoW10pO1xuXG4gICAgICBpZiAodGhpcy5fdmFsdWUpIHtcbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUFycmF5LnB1c2godGhpcy5nZW5lcmF0ZUl0ZW1Gb3JtR3JvdXAoaSkpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxufVxuIl19