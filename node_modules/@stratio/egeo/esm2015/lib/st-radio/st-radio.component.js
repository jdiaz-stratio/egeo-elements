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
export const MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line:no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => StRadioGroupComponent)),
    multi: true
};
/** @type {?} */
let _uniqueIdCounter = 0;
// tslint:disable-next-line:max-classes-per-file
export class StRadioGroupComponent {
    constructor() {
        this.change = new EventEmitter();
        // tslint:disable-next-line:no-use-before-declare
        this._radios = null;
        this._value = null;
        this._selected = null;
        this._disabled = false;
        this._name = `st-radio-group-${_uniqueIdCounter++}`;
        this._controlValueAccessorChangeFn = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
        }
        this.updatedSelectRadioFromValue();
        this.checkSelectRadio();
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set name(value) {
        this._name = value;
        this.updateRadioName();
    }
    /**
     * @return {?}
     */
    get selected() {
        return this._selected;
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    set selected(selected) {
        this._selected = selected;
        this.value = selected ? selected.value : null;
        this.checkSelectRadio();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = (value != null && value !== false) ? true : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
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
    emitChangeEvent() {
        /** @type {?} */
        let event = new RadioChange();
        event.source = this._selected;
        event.value = this._value;
        this.change.emit(event);
    }
    /**
     * @return {?}
     */
    checkSelectRadio() {
        if (this.selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    }
    /**
     * @return {?}
     */
    touch() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @private
     * @return {?}
     */
    updateRadioName() {
        if (this._radios) {
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            (radio) => {
                radio.name = this.name;
            }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updatedSelectRadioFromValue() {
        /** @type {?} */
        let isAlreadySelected = this._selected != null && this._selected.value === this._value;
        if (this._radios != null && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach((/**
             * @param {?} radio
             * @return {?}
             */
            (radio) => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            }));
        }
    }
}
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
StRadioGroupComponent.ctorParameters = () => [];
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
                () => StRadioComponent)),] }]
};
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
let idUnique = 0;
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
export class StRadioComponent {
    /**
     * @param {?} radioGroup
     * @param {?} _radioDispatcher
     */
    constructor(radioGroup, _radioDispatcher) {
        this._radioDispatcher = _radioDispatcher;
        /**
         * \@Input {string} [id='st-radio-<unique id>'] Input Id value
         */
        this.id = `st-radio-${idUnique++}`;
        /**
         * \@Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test
         */
        this.qaTag = `st-radio-${idUnique++}`;
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
        (id, name) => {
            if (id !== this.id && name === this.name) {
                this.checked = false;
            }
        }));
    }
    /**
     * \@Input {boolean} [checked=''] Boolean to check the radio button
     * @return {?}
     */
    get checked() {
        return this._checked;
    }
    /**
     * @param {?} newCheckedState
     * @return {?}
     */
    set checked(newCheckedState) {
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
    }
    /**
     * \@Input {boolean} [disabled=''] Boolean to disable the radio button
     * @return {?}
     */
    get disabled() {
        return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = (value != null && value !== false) ? true : null;
    }
    /**
     * \@Input {boolean} [value=''] Value of the radio button
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
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
    }
    /**
     * @return {?}
     */
    get inputId() {
        return `${this.id}-input`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.radioGroup && this.radioGroup.value) {
            this.checked = this.radioGroup.value === this._value;
        }
        if (this.radioGroup) {
            this.name = this.radioGroup.name;
        }
    }
    /**
     * @return {?}
     */
    onInputBlur() {
        if (this.radioGroup) {
            this.radioGroup.touch();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInputClick(event) {
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleRadio(event) {
        event.stopPropagation();
        /** @type {?} */
        let groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
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
    }
    /**
     * @private
     * @return {?}
     */
    emitChangeEvent() {
        /** @type {?} */
        let event = new RadioChange();
        event.source = this;
        event.value = this._value;
        this.change.emit(event);
    }
}
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
StRadioComponent.ctorParameters = () => [
    { type: StRadioGroupComponent, decorators: [{ type: Optional }] },
    { type: SelectOneDispatcher }
];
StRadioComponent.propDecorators = {
    id: [{ type: Input }],
    qaTag: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1yYWRpby9zdC1yYWRpby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFFTixRQUFRLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUM3RCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVqRSxNQUFNLE9BQU8scUNBQXFDLEdBQVE7SUFDdkQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFDO0lBQ3BELEtBQUssRUFBRSxJQUFJO0NBQ2I7O0lBRUcsZ0JBQWdCLEdBQUcsQ0FBQzs7QUFVeEIsTUFBTSxPQUFPLHFCQUFxQjtJQXlEL0I7UUF0REEsV0FBTSxHQUE4QixJQUFJLFlBQVksRUFBZSxDQUFDOztRQStDcEUsWUFBTyxHQUFnQyxJQUFJLENBQUM7UUFFNUMsV0FBTSxHQUFRLElBQUksQ0FBQztRQUNuQixjQUFTLEdBQXFCLElBQUksQ0FBQztRQUNuQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBVyxrQkFBa0IsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1FBS3ZELGtDQUE2Qjs7OztRQUF5QixDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBRXJFLGNBQVM7OztRQUFjLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBQztJ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RTtRQUM3QixLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBeElILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsVUFBVTtnQkFDcEIscWdDQUF3QztnQkFFeEMsSUFBSSxFQUFFO29CQUNILDJCQUEyQixFQUFFLFNBQVM7b0JBQ3RDLFdBQVcsRUFBRSxJQUFJO2lCQUNuQjs7YUFDSDs7OztZQXlFNkIscUJBQXFCLHVCQUE1QyxRQUFRO1lBblBOLG1CQUFtQjs7O2lCQStLeEIsS0FBSztvQkFFTCxLQUFLO21CQUVMLEtBQUs7c0JBRUwsS0FBSzt1QkFzQkwsS0FBSztvQkFTTCxLQUFLO3FCQW9CTCxNQUFNOzs7O0lBM0RQLHNDQUFrQzs7Ozs7SUFFbEMsOEJBQStDOzs7OztJQUUvQyxpQ0FBa0Q7Ozs7O0lBRWxELGdDQUFzQjs7Ozs7SUFxRHRCLGtDQUE4RTs7SUFNOUUsa0NBQW1COztJQUNuQixvQ0FBa0I7O0lBQ2xCLHFDQUFtQjs7Ozs7SUFJaEIsNENBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ29tcG9uZW50LFxuICAgSW5wdXQsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBPdXRwdXQsXG4gICBPbkluaXQsXG4gICBPcHRpb25hbCwgZm9yd2FyZFJlZiwgRGlyZWN0aXZlLCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSYWRpb0NoYW5nZSB9IGZyb20gJy4vc3QtcmFkaW8uY2hhbmdlJztcbmltcG9ydCB7IFNlbGVjdE9uZURpc3BhdGNoZXIgfSBmcm9tICcuLi91dGlscy91bmlxdWUtZGlzcGF0Y2hlcic7XG5cbmV4cG9ydCBjb25zdCBNRF9SQURJT19HUk9VUF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFN0UmFkaW9Hcm91cENvbXBvbmVudCksXG4gICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IF91bmlxdWVJZENvdW50ZXIgPSAwO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbkBEaXJlY3RpdmUoe1xuICAgc2VsZWN0b3I6ICdzdC1yYWRpby1ncm91cCcsXG4gICBwcm92aWRlcnM6IFtNRF9SQURJT19HUk9VUF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgIGhvc3Q6IHtcbiAgICAgIHJvbGU6ICdyYWRpb2dyb3VwJ1xuICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdFJhZGlvR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgIEBPdXRwdXQoKVxuICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8UmFkaW9DaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxSYWRpb0NoYW5nZT4oKTtcblxuICAgQElucHV0KClcbiAgIHFhVGFnOiBzdHJpbmc7XG5cbiAgIEBJbnB1dCgpXG4gICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgIH1cblxuICAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudXBkYXRlZFNlbGVjdFJhZGlvRnJvbVZhbHVlKCk7XG4gICAgICB0aGlzLmNoZWNrU2VsZWN0UmFkaW8oKTtcbiAgIH1cblxuICAgQElucHV0KClcbiAgIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgIH1cblxuICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVSYWRpb05hbWUoKTtcbiAgIH1cblxuICAgQElucHV0KClcbiAgIGdldCBzZWxlY3RlZCgpOiBTdFJhZGlvQ29tcG9uZW50IHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgIH1cbiAgIHNldCBzZWxlY3RlZChzZWxlY3RlZDogU3RSYWRpb0NvbXBvbmVudCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogbnVsbDtcbiAgICAgIHRoaXMuY2hlY2tTZWxlY3RSYWRpbygpO1xuICAgfVxuXG4gICBASW5wdXQoKVxuICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgdGhpcy5fZGlzYWJsZWQgPSAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZSAhPT0gZmFsc2UpID8gdHJ1ZSA6IG51bGw7XG4gICB9XG5cbiAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBTdFJhZGlvQ29tcG9uZW50KSlcbiAgIF9yYWRpb3M6IFF1ZXJ5TGlzdDxTdFJhZGlvQ29tcG9uZW50PiA9IG51bGw7XG5cbiAgIF92YWx1ZTogYW55ID0gbnVsbDtcbiAgIF9zZWxlY3RlZDogU3RSYWRpb0NvbXBvbmVudCA9IG51bGw7XG4gICBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIF9uYW1lOiBzdHJpbmcgPSBgc3QtcmFkaW8tZ3JvdXAtJHtfdW5pcXVlSWRDb3VudGVyKyt9YDtcblxuICAgY29uc3RydWN0b3IoXG4gICApIHsgfVxuXG4gICBfY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbjogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAodmFsdWUpID0+IHsgfTtcblxuICAgb25Ub3VjaGVkOiAoKSA9PiBhbnkgPSAoKSA9PiB7IH07XG5cbiAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgfVxuXG4gICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgdGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JDaGFuZ2VGbiA9IGZuO1xuICAgfVxuXG4gICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgfVxuXG4gICBlbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgUmFkaW9DaGFuZ2UoKTtcbiAgICAgIGV2ZW50LnNvdXJjZSA9IHRoaXMuX3NlbGVjdGVkO1xuICAgICAgZXZlbnQudmFsdWUgPSB0aGlzLl92YWx1ZTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICAgfVxuXG4gICBjaGVja1NlbGVjdFJhZGlvKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgJiYgIXRoaXMuX3NlbGVjdGVkLmNoZWNrZWQpIHtcbiAgICAgICAgIHRoaXMuX3NlbGVjdGVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgfVxuXG4gICB0b3VjaCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLm9uVG91Y2hlZCkge1xuICAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgIH1cblxuICAgcHJpdmF0ZSB1cGRhdGVSYWRpb05hbWUoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSB1cGRhdGVkU2VsZWN0UmFkaW9Gcm9tVmFsdWUoKTogdm9pZCB7XG4gICAgICBsZXQgaXNBbHJlYWR5U2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZCAhPSBudWxsICYmIHRoaXMuX3NlbGVjdGVkLnZhbHVlID09PSB0aGlzLl92YWx1ZTtcblxuICAgICAgaWYgKHRoaXMuX3JhZGlvcyAhPSBudWxsICYmICFpc0FscmVhZHlTZWxlY3RlZCkge1xuICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgICAgdGhpcy5fcmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICByYWRpby5jaGVja2VkID0gdGhpcy52YWx1ZSA9PT0gcmFkaW8udmFsdWU7XG4gICAgICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSByYWRpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxufVxuXG5cbmxldCBpZFVuaXF1ZTogbnVtYmVyID0gMDtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1JhZGlvXVxuICpcbiAqIFRoZSByYWRpbyBjb21wb25lbnQgaXMgdXNlZCBub3JtYWxseSBpbiBhIGZvcm0gYWN0aW5nIGFzIHRoZSBzdGFuZGFyZCBodG1sIHJhZGlvIGlucHV0IGJ1dCBhbHNvIHVzZXIgY2FuIHVzZSBpdCBvdXQgb2YgYSBmb3JtIGxpa2UgYSB0ZW1wbGF0ZSBkcml2ZW4gZm9ybS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXJhZGlvLWdyb3VwIGNsYXNzID1cInJhZGlvLWlubGluZVwiPlxuICogICAgPHN0LXJhZGlvIHZhbHVlPVwiMVwiPkVuYWJsZWQ8L3N0LXJhZGlvPlxuICogICAgPHN0LXJhZGlvIHZhbHVlPVwiMlwiIFtkaXNhYmxlZF09XCJ0cnVlXCI+RGlzYWJsZWQ8L3N0LXJhZGlvPlxuICogICAgPHN0LXJhZGlvIHZhbHVlPVwiMlwiIFtjaGVja2VkXT0gXCJ0cnVlXCIgW2Rpc2FibGVkXT1cInRydWVcIj5EaXNhYmxlZCBjaGVja2VkPC9zdC1yYWRpbz5cbiAqIDwvc3QtcmFkaW8tZ3JvdXA+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1yYWRpbycsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtcmFkaW8uY29tcG9uZW50LnNjc3MnXSxcbiAgIGhvc3Q6IHtcbiAgICAgICdbY2xhc3Muc3RoLXJhZGlvLWNoZWNrZWRdJzogJ2NoZWNrZWQnLFxuICAgICAgJ1thdHRyLmlkXSc6ICdpZCdcbiAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgIHJhZGlvR3JvdXA6IFN0UmFkaW9Hcm91cENvbXBvbmVudDtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2lkPSdzdC1yYWRpby08dW5pcXVlIGlkPiddIElucHV0IElkIHZhbHVlICovXG4gICBASW5wdXQoKSBpZDogc3RyaW5nID0gYHN0LXJhZGlvLSR7aWRVbmlxdWUrK31gO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcWFUYWc9J3N0LXJhZGlvLTx1bmlxdWUgaWQ+J10gSWQgdmFsdWUgZm9yIHFhIHRlc3QgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmcgPSBgc3QtcmFkaW8tJHtpZFVuaXF1ZSsrfWA7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtuYW1lPScnXSBJbnB1dCBuYW1lIHZhbHVlICovXG4gICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbY2hlY2tlZD0nJ10gQm9vbGVhbiB0byBjaGVjayB0aGUgcmFkaW8gYnV0dG9uICovXG4gICBASW5wdXQoKVxuICAgZ2V0IGNoZWNrZWQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgIH1cblxuICAgc2V0IGNoZWNrZWQobmV3Q2hlY2tlZFN0YXRlOiBib29sZWFuKSB7XG5cbiAgICAgIGlmICh0aGlzLl9jaGVja2VkICE9PSBuZXdDaGVja2VkU3RhdGUpIHtcbiAgICAgICAgIHRoaXMuX2NoZWNrZWQgPSBuZXdDaGVja2VkU3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdDaGVja2VkU3RhdGUgJiYgdGhpcy5yYWRpb0dyb3VwICYmIHRoaXMucmFkaW9Hcm91cC52YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnNlbGVjdGVkID0gdGhpcztcbiAgICAgIH0gZWxzZSBpZiAoIW5ld0NoZWNrZWRTdGF0ZSAmJiB0aGlzLnJhZGlvR3JvdXAgJiYgdGhpcy5yYWRpb0dyb3VwLnZhbHVlID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICB0aGlzLnJhZGlvR3JvdXAuc2VsZWN0ZWQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3Q2hlY2tlZFN0YXRlKSB7XG4gICAgICAgICB0aGlzLl9yYWRpb0Rpc3BhdGNoZXIubm90aWZ5KHRoaXMuaWQsIHRoaXMubmFtZSk7XG4gICAgICB9XG4gICB9XG4gICAvKiogQElucHV0IHtib29sZWFufSBbZGlzYWJsZWQ9JyddIEJvb2xlYW4gdG8gZGlzYWJsZSB0aGUgcmFkaW8gYnV0dG9uICovXG4gICBASW5wdXQoKVxuICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkIHx8ICh0aGlzLnJhZGlvR3JvdXAgIT0gbnVsbCAmJiB0aGlzLnJhZGlvR3JvdXAuZGlzYWJsZWQpO1xuICAgfVxuXG4gICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX2Rpc2FibGVkID0gKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlKSA/IHRydWUgOiBudWxsO1xuICAgfVxuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3ZhbHVlPScnXSBWYWx1ZSBvZiB0aGUgcmFkaW8gYnV0dG9uICovXG4gICBASW5wdXQoKVxuICAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICB9XG5cbiAgIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICBpZiAodGhpcy5yYWRpb0dyb3VwICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLnJhZGlvR3JvdXAudmFsdWUgPT09IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5zZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKiBAT3V0cHV0IHtib29sZWFufSBbY2hhbmdlPScnXSBCb29sZWFuIGVtaXR0ZWQgd2hlbiByYWRpbyBidXR0b24gaXMgY2hhbmdlZCAqL1xuICAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPFJhZGlvQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmFkaW9DaGFuZ2U+KCk7XG5cbiAgIGdldCBpbnB1dElkKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pZH0taW5wdXRgO1xuICAgfVxuXG4gICBfdmFsdWU6IGFueSA9IG51bGw7XG4gICBfY2hlY2tlZDogYm9vbGVhbjtcbiAgIF9kaXNhYmxlZDogYm9vbGVhbjtcblxuICAgY29uc3RydWN0b3IoXG4gICAgICBAT3B0aW9uYWwoKSByYWRpb0dyb3VwOiBTdFJhZGlvR3JvdXBDb21wb25lbnQsXG4gICAgICBwcml2YXRlIF9yYWRpb0Rpc3BhdGNoZXI6IFNlbGVjdE9uZURpc3BhdGNoZXJcbiAgICkge1xuXG4gICAgICB0aGlzLnJhZGlvR3JvdXAgPSByYWRpb0dyb3VwO1xuICAgICAgX3JhZGlvRGlzcGF0Y2hlci5saXN0ZW4oKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgaWYgKGlkICE9PSB0aGlzLmlkICYmIG5hbWUgPT09IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5yYWRpb0dyb3VwICYmIHRoaXMucmFkaW9Hcm91cC52YWx1ZSkge1xuICAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5yYWRpb0dyb3VwLnZhbHVlID09PSB0aGlzLl92YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5yYWRpb0dyb3VwLm5hbWU7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uSW5wdXRCbHVyKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLnRvdWNoKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uSW5wdXRDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgfVxuXG4gICB0b2dnbGVSYWRpbyhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbGV0IGdyb3VwVmFsdWVDaGFuZ2VkID0gdGhpcy5yYWRpb0dyb3VwICYmIHRoaXMudmFsdWUgIT09IHRoaXMucmFkaW9Hcm91cC52YWx1ZTtcblxuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucmFkaW9Hcm91cCkge1xuICAgICAgICAgdGhpcy5yYWRpb0dyb3VwLl9jb250cm9sVmFsdWVBY2Nlc3NvckNoYW5nZUZuKHRoaXMudmFsdWUpO1xuXG4gICAgICAgICBpZiAoZ3JvdXBWYWx1ZUNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9Hcm91cC5lbWl0Q2hhbmdlRXZlbnQoKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBlbWl0Q2hhbmdlRXZlbnQoKTogdm9pZCB7XG4gICAgICBsZXQgZXZlbnQgPSBuZXcgUmFkaW9DaGFuZ2UoKTtcbiAgICAgIGV2ZW50LnNvdXJjZSA9IHRoaXM7XG4gICAgICBldmVudC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gICB9XG59XG4iXX0=