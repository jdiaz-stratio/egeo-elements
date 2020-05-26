/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio/st-radio.component.ts
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
import { Component, Input, EventEmitter, Output, Optional, forwardRef, Directive, ContentChildren, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioChange } from './st-radio.change';
import { SelectOneDispatcher } from '../utils/unique-dispatcher';
/** @type {?} */
export var MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return StRadioGroupComponent; })),
    multi: true
};
/** @type {?} */
var _uniqueIdCounter = 0;
// tslint:disable-next-line:max-classes-per-file
var StRadioGroupComponent = /** @class */ (function () {
    function StRadioGroupComponent() {
        this.change = new EventEmitter();
        // tslint:disable-next-line:no-use-before-declare
        this._radios = null;
        this._value = null;
        this._selected = null;
        this._disabled = false;
        this._name = "st-radio-group-" + _uniqueIdCounter++;
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
    Object.defineProperty(StRadioGroupComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
            }
            this.updatedSelectRadioFromValue();
            this.checkSelectRadio();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioGroupComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this.updateRadioName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioGroupComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this.checkSelectRadio();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioGroupComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StRadioGroupComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    StRadioGroupComponent.prototype.registerOnChange = /**
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
    StRadioGroupComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    StRadioGroupComponent.prototype.emitChangeEvent = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new RadioChange();
        event.source = this._selected;
        event.value = this._value;
        this.change.emit(event);
    };
    /**
     * @return {?}
     */
    StRadioGroupComponent.prototype.checkSelectRadio = /**
     * @return {?}
     */
    function () {
        if (this.selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    /**
     * @return {?}
     */
    StRadioGroupComponent.prototype.touch = /**
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    StRadioGroupComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @private
     * @return {?}
     */
    StRadioGroupComponent.prototype.updateRadioName = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.name = _this.name;
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    StRadioGroupComponent.prototype.updatedSelectRadioFromValue = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isAlreadySelected = this._selected != null && this._selected.value === this._value;
        if (this._radios != null && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            }));
        }
    };
    StRadioGroupComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'st-radio-group',
                    providers: [MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                    host: {
                        role: 'radiogroup'
                    }
                },] }
    ];
    /** @nocollapse */
    StRadioGroupComponent.ctorParameters = function () { return []; };
    StRadioGroupComponent.propDecorators = {
        change: [{ type: Output }],
        qaTag: [{ type: Input }],
        value: [{ type: Input }],
        name: [{ type: Input }],
        selected: [{ type: Input }],
        disabled: [{ type: Input }],
        _radios: [{ type: ContentChildren, args: [forwardRef((/**
                     * @return {?}
                     */
                    function () { return StRadioComponent; })),] }]
    };
    return StRadioGroupComponent;
}());
export { StRadioGroupComponent };
if (false) {
    /** @type {?} */
    StRadioGroupComponent.prototype.change;
    /** @type {?} */
    StRadioGroupComponent.prototype.qaTag;
    /** @type {?} */
    StRadioGroupComponent.prototype._radios;
    /** @type {?} */
    StRadioGroupComponent.prototype._value;
    /** @type {?} */
    StRadioGroupComponent.prototype._selected;
    /** @type {?} */
    StRadioGroupComponent.prototype._disabled;
    /** @type {?} */
    StRadioGroupComponent.prototype._name;
    /** @type {?} */
    StRadioGroupComponent.prototype._controlValueAccessorChangeFn;
    /** @type {?} */
    StRadioGroupComponent.prototype.onTouched;
}
/** @type {?} */
var idUnique = 0;
/**
 * \@description {Component} [Radio]
 *
 * The radio component is used normally in a form acting as the standard html radio input but also user can use it out of a form like a template driven form.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-radio-group class ="radio-inline">
 *    <st-radio value="1">Enabled</st-radio>
 *    <st-radio value="2" [disabled]="true">Disabled</st-radio>
 *    <st-radio value="2" [checked]= "true" [disabled]="true">Disabled checked</st-radio>
 * </st-radio-group>
 * ```
 *
 */
var StRadioComponent = /** @class */ (function () {
    function StRadioComponent(radioGroup, _radioDispatcher) {
        var _this = this;
        this._radioDispatcher = _radioDispatcher;
        /**
         * \@Input {string} [id='st-radio-<unique id>'] Input Id value
         */
        this.id = "st-radio-" + idUnique++;
        /**
         * \@Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test
         */
        this.qaTag = "st-radio-" + idUnique++;
        /**
         * \@Output {boolean} [change=''] Boolean emitted when radio button is changed
         */
        this.change = new EventEmitter();
        this._value = null;
        this.radioGroup = radioGroup;
        _radioDispatcher.listen((/**
         * @param {?} id
         * @param {?} name
         * @return {?}
         */
        function (id, name) {
            if (id !== _this.id && name === _this.name) {
                _this.checked = false;
            }
        }));
    }
    Object.defineProperty(StRadioComponent.prototype, "checked", {
        /** @Input {boolean} [checked=''] Boolean to check the radio button */
        get: /**
         * \@Input {boolean} [checked=''] Boolean to check the radio button
         * @return {?}
         */
        function () {
            return this._checked;
        },
        set: /**
         * @param {?} newCheckedState
         * @return {?}
         */
        function (newCheckedState) {
            if (this._checked !== newCheckedState) {
                this._checked = newCheckedState;
            }
            if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
            }
            else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                this.radioGroup.selected = null;
            }
            if (newCheckedState) {
                this._radioDispatcher.notify(this.id, this.name);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioComponent.prototype, "disabled", {
        /** @Input {boolean} [disabled=''] Boolean to disable the radio button */
        get: /**
         * \@Input {boolean} [disabled=''] Boolean to disable the radio button
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioComponent.prototype, "value", {
        /** @Input {boolean} [value=''] Value of the radio button */
        get: /**
         * \@Input {boolean} [value=''] Value of the radio button
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
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup != null) {
                    if (!this.checked) {
                        this.checked = this.radioGroup.value === value;
                    }
                    else {
                        this.radioGroup.selected = null;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StRadioComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StRadioComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this._value;
        }
        if (this.radioGroup) {
            this.name = this.radioGroup.name;
        }
    };
    /**
     * @return {?}
     */
    StRadioComponent.prototype.onInputBlur = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            this.radioGroup.touch();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StRadioComponent.prototype.onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StRadioComponent.prototype.toggleRadio = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        /** @type {?} */
        var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        if (!this.disabled) {
            this.checked = !this.checked;
            this.emitChangeEvent();
        }
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            if (groupValueChanged) {
                this.radioGroup.emitChangeEvent();
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    StRadioComponent.prototype.emitChangeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var event = new RadioChange();
        event.source = this;
        event.value = this._value;
        this.change.emit(event);
    };
    StRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-radio',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<label [attr.for]=\"inputId\" class=\"st-radio\" [ngClass]=\"{'disabled': disabled}\" #label [attr.id]=\"qaTag\">\n   <input\n      type=\"radio\"\n      [id]=\"inputId\"\n      [attr.id]=\"\"\n      [name]=\"name\"\n      [hidden]=\"true\"\n      [checked]=\"checked\"\n      [disabled]=\"disabled\"\n      (blur)=\"onInputBlur()\"\n      (change)=\"toggleRadio($event)\"\n      (click)=\"onInputClick($event)\"\n      [value]=\"value\">\n\n   <div class=\"custom-radio\" [ngClass]=\"{'checked' : checked, 'disabled': disabled}\"></div>\n   <ng-content></ng-content>\n</label>\n",
                    host: {
                        '[class.sth-radio-checked]': 'checked',
                        '[attr.id]': 'id'
                    },
                    styles: ["@charset \"UTF-8\";.st-radio{box-sizing:border-box;display:flex;align-content:center;align-items:center;cursor:pointer}.st-radio.disabled .custom-radio{cursor:default}.st-radio .custom-radio{width:15px;height:15px;cursor:pointer;display:inline-block;border-radius:100%;text-align:center;position:relative;box-sizing:border-box;margin-right:5px}.st-radio .custom-radio.checked:before{display:block;position:absolute;content:'';border-radius:100%;height:5px;width:5px;top:4px;left:4px;margin:auto;box-sizing:border-box}"]
                }] }
    ];
    /** @nocollapse */
    StRadioComponent.ctorParameters = function () { return [
        { type: StRadioGroupComponent, decorators: [{ type: Optional }] },
        { type: SelectOneDispatcher }
    ]; };
    StRadioComponent.propDecorators = {
        id: [{ type: Input }],
        qaTag: [{ type: Input }],
        name: [{ type: Input }],
        checked: [{ type: Input }],
        disabled: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }]
    };
    return StRadioComponent;
}());
export { StRadioComponent };
if (false) {
    /** @type {?} */
    StRadioComponent.prototype.radioGroup;
    /**
     * \@Input {string} [id='st-radio-<unique id>'] Input Id value
     * @type {?}
     */
    StRadioComponent.prototype.id;
    /**
     * \@Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test
     * @type {?}
     */
    StRadioComponent.prototype.qaTag;
    /**
     * \@Input {string} [name=''] Input name value
     * @type {?}
     */
    StRadioComponent.prototype.name;
    /**
     * \@Output {boolean} [change=''] Boolean emitted when radio button is changed
     * @type {?}
     */
    StRadioComponent.prototype.change;
    /** @type {?} */
    StRadioComponent.prototype._value;
    /** @type {?} */
    StRadioComponent.prototype._checked;
    /** @type {?} */
    StRadioComponent.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    StRadioComponent.prototype._radioDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1yYWRpby9zdC1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFFTixRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUM3RCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVqRSxNQUFNLEtBQU8scUNBQXFDLEdBQVE7SUFDdkQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsRUFBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNiOztJQUVHLGdCQUFnQixHQUFHLENBQUM7O0FBR3hCO0lBZ0VHO1FBdERBLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQzs7UUErQ3BFLFlBQU8sR0FBZ0MsSUFBSSxDQUFDO1FBRTVDLFdBQU0sR0FBUSxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFxQixJQUFJLENBQUM7UUFDbkMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixVQUFLLEdBQVcsb0JBQWtCLGdCQUFnQixFQUFJLENBQUM7UUFLdkQsa0NBQTZCOzs7O1FBQXlCLFVBQUMsS0FBSyxJQUFPLENBQUMsRUFBQztRQUVyRSxjQUFTOzs7UUFBYyxjQUFRLENBQUMsRUFBQztJQUo3QixDQUFDO0lBbERMLHNCQUNJLHdDQUFLOzs7O1FBRFQ7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Q2xCLElBQUksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTFELElBQUksaUJBQWlCLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDcEM7U0FDSDtJQUNKLENBQUM7Ozs7O0lBRU8sMENBQWU7Ozs7SUFBdkI7O1lBQ08sS0FBSyxHQUFHLElBQUksV0FBVyxFQUFFO1FBQzdCLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOztnQkF4SUgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxVQUFVO29CQUNwQixxZ0NBQXdDO29CQUV4QyxJQUFJLEVBQUU7d0JBQ0gsMkJBQTJCLEVBQUUsU0FBUzt3QkFDdEMsV0FBVyxFQUFFLElBQUk7cUJBQ25COztpQkFDSDs7OztnQkF5RTZCLHFCQUFxQix1QkFBNUMsUUFBUTtnQkFuUE4sbUJBQW1COzs7cUJBK0t4QixLQUFLO3dCQUVMLEtBQUs7dUJBRUwsS0FBSzswQkFFTCxLQUFLOzJCQXNCTCxLQUFLO3dCQVNMLEtBQUs7eUJBb0JMLE1BQU07O0lBbUVWLHVCQUFDO0NBQUEsQUF6SUQsSUF5SUM7U0FoSVksZ0JBQWdCOzs7SUFFMUIsc0NBQWtDOzs7OztJQUVsQyw4QkFBK0M7Ozs7O0lBRS9DLGlDQUFrRDs7Ozs7SUFFbEQsZ0NBQXNCOzs7OztJQXFEdEIsa0NBQThFOztJQU05RSxrQ0FBbUI7O0lBQ25CLG9DQUFrQjs7SUFDbEIscUNBQW1COzs7OztJQUloQiw0Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDb21wb25lbnQsXG4gICBJbnB1dCxcbiAgIEV2ZW50RW1pdHRlcixcbiAgIE91dHB1dCxcbiAgIE9uSW5pdCxcbiAgIE9wdGlvbmFsLCBmb3J3YXJkUmVmLCBEaXJlY3RpdmUsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFJhZGlvQ2hhbmdlIH0gZnJvbSAnLi9zdC1yYWRpby5jaGFuZ2UnO1xuaW1wb3J0IHsgU2VsZWN0T25lRGlzcGF0Y2hlciB9IGZyb20gJy4uL3V0aWxzL3VuaXF1ZS1kaXNwYXRjaGVyJztcblxuZXhwb3J0IGNvbnN0IE1EX1JBRElPX0dST1VQX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3RSYWRpb0dyb3VwQ29tcG9uZW50KSxcbiAgIG11bHRpOiB0cnVlXG59O1xuXG5sZXQgX3VuaXF1ZUlkQ291bnRlciA9IDA7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuQERpcmVjdGl2ZSh7XG4gICBzZWxlY3RvcjogJ3N0LXJhZGlvLWdyb3VwJyxcbiAgIHByb3ZpZGVyczogW01EX1JBRElPX0dST1VQX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICAgaG9zdDoge1xuICAgICAgcm9sZTogJ3JhZGlvZ3JvdXAnXG4gICB9XG59KVxuZXhwb3J0IGNsYXNzIFN0UmFkaW9Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgQE91dHB1dCgpXG4gICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxSYWRpb0NoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFJhZGlvQ2hhbmdlPigpO1xuXG4gICBASW5wdXQoKVxuICAgcWFUYWc6IHN0cmluZztcblxuICAgQElucHV0KClcbiAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgfVxuXG4gICBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVkU2VsZWN0UmFkaW9Gcm9tVmFsdWUoKTtcbiAgICAgIHRoaXMuY2hlY2tTZWxlY3RSYWRpbygpO1xuICAgfVxuXG4gICBASW5wdXQoKVxuICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgfVxuXG4gICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVJhZGlvTmFtZSgpO1xuICAgfVxuXG4gICBASW5wdXQoKVxuICAgZ2V0IHNlbGVjdGVkKCk6IFN0UmFkaW9Db21wb25lbnQge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgfVxuICAgc2V0IHNlbGVjdGVkKHNlbGVjdGVkOiBTdFJhZGlvQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy52YWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiBudWxsO1xuICAgICAgdGhpcy5jaGVja1NlbGVjdFJhZGlvKCk7XG4gICB9XG5cbiAgIEBJbnB1dCgpXG4gICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlZCA9ICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlICE9PSBmYWxzZSkgPyB0cnVlIDogbnVsbDtcbiAgIH1cblxuICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICAgQENvbnRlbnRDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFN0UmFkaW9Db21wb25lbnQpKVxuICAgX3JhZGlvczogUXVlcnlMaXN0PFN0UmFkaW9Db21wb25lbnQ+ID0gbnVsbDtcblxuICAgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICAgX3NlbGVjdGVkOiBTdFJhZGlvQ29tcG9uZW50ID0gbnVsbDtcbiAgIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgX25hbWU6IHN0cmluZyA9IGBzdC1yYWRpby1ncm91cC0ke191bmlxdWVJZENvdW50ZXIrK31gO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICkgeyB9XG5cbiAgIF9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICh2YWx1ZSkgPT4geyB9O1xuXG4gICBvblRvdWNoZWQ6ICgpID0+IGFueSA9ICgpID0+IHsgfTtcblxuICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICB0aGlzLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuID0gZm47XG4gICB9XG5cbiAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gICB9XG5cbiAgIGVtaXRDaGFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICAgIGxldCBldmVudCA9IG5ldyBSYWRpb0NoYW5nZSgpO1xuICAgICAgZXZlbnQuc291cmNlID0gdGhpcy5fc2VsZWN0ZWQ7XG4gICAgICBldmVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gICB9XG5cbiAgIGNoZWNrU2VsZWN0UmFkaW8oKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiAhdGhpcy5fc2VsZWN0ZWQuY2hlY2tlZCkge1xuICAgICAgICAgdGhpcy5fc2VsZWN0ZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICB9XG5cbiAgIHRvdWNoKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XG4gICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgfVxuXG4gICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgfVxuXG4gICBwcml2YXRlIHVwZGF0ZVJhZGlvTmFtZSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLl9yYWRpb3MpIHtcbiAgICAgICAgIHRoaXMuX3JhZGlvcy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIHVwZGF0ZWRTZWxlY3RSYWRpb0Zyb21WYWx1ZSgpOiB2b2lkIHtcbiAgICAgIGxldCBpc0FscmVhZHlTZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkICE9IG51bGwgJiYgdGhpcy5fc2VsZWN0ZWQudmFsdWUgPT09IHRoaXMuX3ZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5fcmFkaW9zICE9IG51bGwgJiYgIWlzQWxyZWFkeVNlbGVjdGVkKSB7XG4gICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09PSByYWRpby52YWx1ZTtcbiAgICAgICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHJhZGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICB9XG59XG5cblxubGV0IGlkVW5pcXVlOiBudW1iZXIgPSAwO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbUmFkaW9dXG4gKlxuICogVGhlIHJhZGlvIGNvbXBvbmVudCBpcyB1c2VkIG5vcm1hbGx5IGluIGEgZm9ybSBhY3RpbmcgYXMgdGhlIHN0YW5kYXJkIGh0bWwgcmFkaW8gaW5wdXQgYnV0IGFsc28gdXNlciBjYW4gdXNlIGl0IG91dCBvZiBhIGZvcm0gbGlrZSBhIHRlbXBsYXRlIGRyaXZlbiBmb3JtLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtcmFkaW8tZ3JvdXAgY2xhc3MgPVwicmFkaW8taW5saW5lXCI+XG4gKiAgICA8c3QtcmFkaW8gdmFsdWU9XCIxXCI+RW5hYmxlZDwvc3QtcmFkaW8+XG4gKiAgICA8c3QtcmFkaW8gdmFsdWU9XCIyXCIgW2Rpc2FibGVkXT1cInRydWVcIj5EaXNhYmxlZDwvc3QtcmFkaW8+XG4gKiAgICA8c3QtcmFkaW8gdmFsdWU9XCIyXCIgW2NoZWNrZWRdPSBcInRydWVcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPkRpc2FibGVkIGNoZWNrZWQ8L3N0LXJhZGlvPlxuICogPC9zdC1yYWRpby1ncm91cD5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXJhZGlvJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1yYWRpby5jb21wb25lbnQuc2NzcyddLFxuICAgaG9zdDoge1xuICAgICAgJ1tjbGFzcy5zdGgtcmFkaW8tY2hlY2tlZF0nOiAnY2hlY2tlZCcsXG4gICAgICAnW2F0dHIuaWRdJzogJ2lkJ1xuICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdFJhZGlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgcmFkaW9Hcm91cDogU3RSYWRpb0dyb3VwQ29tcG9uZW50O1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbaWQ9J3N0LXJhZGlvLTx1bmlxdWUgaWQ+J10gSW5wdXQgSWQgdmFsdWUgKi9cbiAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSBgc3QtcmFkaW8tJHtpZFVuaXF1ZSsrfWA7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtxYVRhZz0nc3QtcmFkaW8tPHVuaXF1ZSBpZD4nXSBJZCB2YWx1ZSBmb3IgcWEgdGVzdCAqL1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZyA9IGBzdC1yYWRpby0ke2lkVW5pcXVlKyt9YDtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW25hbWU9JyddIElucHV0IG5hbWUgdmFsdWUgKi9cbiAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtjaGVja2VkPScnXSBCb29sZWFuIHRvIGNoZWNrIHRoZSByYWRpbyBidXR0b24gKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgY2hlY2tlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9jaGVja2VkO1xuICAgfVxuXG4gICBzZXQgY2hlY2tlZChuZXdDaGVja2VkU3RhdGU6IGJvb2xlYW4pIHtcblxuICAgICAgaWYgKHRoaXMuX2NoZWNrZWQgIT09IG5ld0NoZWNrZWRTdGF0ZSkge1xuICAgICAgICAgdGhpcy5fY2hlY2tlZCA9IG5ld0NoZWNrZWRTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0NoZWNrZWRTdGF0ZSAmJiB0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLnZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICB0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQgPSB0aGlzO1xuICAgICAgfSBlbHNlIGlmICghbmV3Q2hlY2tlZFN0YXRlICYmIHRoaXMucmFkaW9Hcm91cCAmJiB0aGlzLnJhZGlvR3JvdXAudmFsdWUgPT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgIHRoaXMuX3JhZGlvRGlzcGF0Y2hlci5ub3RpZnkodGhpcy5pZCwgdGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgIH1cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtkaXNhYmxlZD0nJ10gQm9vbGVhbiB0byBkaXNhYmxlIHRoZSByYWRpbyBidXR0b24gKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQgfHwgKHRoaXMucmFkaW9Hcm91cCAhPSBudWxsICYmIHRoaXMucmFkaW9Hcm91cC5kaXNhYmxlZCk7XG4gICB9XG5cbiAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UpID8gdHJ1ZSA6IG51bGw7XG4gICB9XG4gICAvKiogQElucHV0IHtib29sZWFufSBbdmFsdWU9JyddIFZhbHVlIG9mIHRoZSByYWRpbyBidXR0b24gKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgIH1cblxuICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgIGlmICh0aGlzLnJhZGlvR3JvdXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMucmFkaW9Hcm91cC52YWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnNlbGVjdGVkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgLyoqIEBPdXRwdXQge2Jvb2xlYW59IFtjaGFuZ2U9JyddIEJvb2xlYW4gZW1pdHRlZCB3aGVuIHJhZGlvIGJ1dHRvbiBpcyBjaGFuZ2VkICovXG4gICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8UmFkaW9DaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYWRpb0NoYW5nZT4oKTtcblxuICAgZ2V0IGlucHV0SWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmlkfS1pbnB1dGA7XG4gICB9XG5cbiAgIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgIF9jaGVja2VkOiBib29sZWFuO1xuICAgX2Rpc2FibGVkOiBib29sZWFuO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIHJhZGlvR3JvdXA6IFN0UmFkaW9Hcm91cENvbXBvbmVudCxcbiAgICAgIHByaXZhdGUgX3JhZGlvRGlzcGF0Y2hlcjogU2VsZWN0T25lRGlzcGF0Y2hlclxuICAgKSB7XG5cbiAgICAgIHRoaXMucmFkaW9Hcm91cCA9IHJhZGlvR3JvdXA7XG4gICAgICBfcmFkaW9EaXNwYXRjaGVyLmxpc3RlbigoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICBpZiAoaWQgIT09IHRoaXMuaWQgJiYgbmFtZSA9PT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLnZhbHVlKSB7XG4gICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnJhZGlvR3JvdXAudmFsdWUgPT09IHRoaXMuX3ZhbHVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLnJhZGlvR3JvdXAubmFtZTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25JbnB1dEJsdXIoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAgICB0aGlzLnJhZGlvR3JvdXAudG91Y2goKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25JbnB1dENsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICB9XG5cbiAgIHRvZ2dsZVJhZGlvKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBsZXQgZ3JvdXBWYWx1ZUNoYW5nZWQgPSB0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy52YWx1ZSAhPT0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlO1xuXG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgICAgICB0aGlzLmVtaXRDaGFuZ2VFdmVudCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwKSB7XG4gICAgICAgICB0aGlzLnJhZGlvR3JvdXAuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yQ2hhbmdlRm4odGhpcy52YWx1ZSk7XG5cbiAgICAgICAgIGlmIChncm91cFZhbHVlQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLmVtaXRDaGFuZ2VFdmVudCgpO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGVtaXRDaGFuZ2VFdmVudCgpOiB2b2lkIHtcbiAgICAgIGxldCBldmVudCA9IG5ldyBSYWRpb0NoYW5nZSgpO1xuICAgICAgZXZlbnQuc291cmNlID0gdGhpcztcbiAgICAgIGV2ZW50LnZhbHVlID0gdGhpcy5fdmFsdWU7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KGV2ZW50KTtcbiAgIH1cbn1cbiJdfQ==