/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal-buttons/st-modal-buttons.ts
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
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
var StModalButtonsComponent = /** @class */ (function () {
    function StModalButtonsComponent() {
        this.buttonConfig = [];
        this.fullscreen = false;
        this.click = new EventEmitter();
        this.hasButtonsValue = false;
    }
    /**
     * @return {?}
     */
    StModalButtonsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.hasButtonsValue = this.hasButtons();
    };
    /**
     * @return {?}
     */
    StModalButtonsComponent.prototype.hasButtons = /**
     * @return {?}
     */
    function () {
        return this.buttonConfig && this.buttonConfig.length > 0;
    };
    /**
     * @param {?} button
     * @return {?}
     */
    StModalButtonsComponent.prototype.getButtonClass = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        /** @type {?} */
        var classes = button && button.classes ? button.classes : '';
        return classes.trim();
    };
    /**
     * @param {?} button
     * @return {?}
     */
    StModalButtonsComponent.prototype.getButtonId = /**
     * @param {?} button
     * @return {?}
     */
    function (button) {
        return button && button.label ? "st-modal-button-" + this.getButtonLabelWithoutSpaces(button.label) : null;
    };
    /**
     * @param {?} label
     * @return {?}
     */
    StModalButtonsComponent.prototype.getButtonLabelWithoutSpaces = /**
     * @param {?} label
     * @return {?}
     */
    function (label) {
        return label.replace(/\s+/g, '_');
    };
    /** INTERACTION WITH MODAL */
    /**
     * INTERACTION WITH MODAL
     * @param {?} button
     * @param {?} event
     * @return {?}
     */
    StModalButtonsComponent.prototype.clickButton = /**
     * INTERACTION WITH MODAL
     * @param {?} button
     * @param {?} event
     * @return {?}
     */
    function (button, event) {
        if (button.response) {
            button.response(event);
        }
        else if (button.responseValue !== undefined) {
            this.click.emit({ response: button.responseValue, close: button.closeOnClick });
        }
    };
    StModalButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-modal-buttons',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div *ngIf=\"hasButtonsValue\" class=\"st-modal-buttons\">\n   <button *ngFor=\"let button of buttonConfig\" [attr.id]=\"getButtonId(button)\" class=\"button\" [ngClass]=\"getButtonClass(button)\" (click)=\"clickButton(button, $event)\"\n       type=\"button\">\n      <i *ngIf=\"button.leftIcon\" [ngClass]=\"button.leftIcon\"></i>\n      <span>{{button.label}}</span>\n      <i *ngIf=\"button.rightIcon\" [ngClass]=\"button.rightIcon\"></i>\n   </button>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;width:100%;flex-grow:1}.st-modal-buttons{display:flex;flex-direction:row;justify-content:flex-end;width:100%}"]
                }] }
    ];
    StModalButtonsComponent.propDecorators = {
        buttonConfig: [{ type: Input }],
        fullscreen: [{ type: Input }],
        click: [{ type: Output }]
    };
    return StModalButtonsComponent;
}());
export { StModalButtonsComponent };
if (false) {
    /** @type {?} */
    StModalButtonsComponent.prototype.buttonConfig;
    /** @type {?} */
    StModalButtonsComponent.prototype.fullscreen;
    /** @type {?} */
    StModalButtonsComponent.prototype.click;
    /** @type {?} */
    StModalButtonsComponent.prototype.hasButtonsValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwtYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbW9kYWwvc3QtbW9kYWwtYnV0dG9ucy9zdC1tb2RhbC1idXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJeEc7SUFBQTtRQVFZLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUNuQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFFMUYsb0JBQWUsR0FBWSxLQUFLLENBQUM7SUErQjNDLENBQUM7Ozs7SUE3QkUsMENBQVE7OztJQUFSO1FBQ0csSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNHLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7Ozs7SUFFRCxnREFBYzs7OztJQUFkLFVBQWUsTUFBcUI7O1lBQzdCLE9BQU8sR0FBVyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNwRSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxNQUFxQjtRQUM5QixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBbUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlHLENBQUM7Ozs7O0lBRUQsNkRBQTJCOzs7O0lBQTNCLFVBQTRCLEtBQWE7UUFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsNkJBQTZCOzs7Ozs7O0lBQzdCLDZDQUFXOzs7Ozs7SUFBWCxVQUFZLE1BQXFCLEVBQUUsS0FBaUI7UUFDakQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0osQ0FBQzs7Z0JBMUNILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixvNUJBQXNDO29CQUV0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7K0JBR0csS0FBSzs2QkFDTCxLQUFLO3dCQUNMLE1BQU07O0lBaUNWLDhCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FyQ1ksdUJBQXVCOzs7SUFFakMsK0NBQTRDOztJQUM1Qyw2Q0FBcUM7O0lBQ3JDLHdDQUFpRzs7SUFFakcsa0RBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdE1vZGFsQnV0dG9uLCBTdE1vZGFsUmVzcG9uc2UsIFN0TW9kYWxCdXR0b25SZXNwb25zZSB9IGZyb20gJy4uL3N0LW1vZGFsLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LW1vZGFsLWJ1dHRvbnMnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LW1vZGFsLWJ1dHRvbnMuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1tb2RhbC1idXR0b25zLnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0TW9kYWxCdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgQElucHV0KCkgYnV0dG9uQ29uZmlnOiBTdE1vZGFsQnV0dG9uW10gPSBbXTtcbiAgIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPFN0TW9kYWxCdXR0b25SZXNwb25zZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0TW9kYWxCdXR0b25SZXNwb25zZT4oKTtcblxuICAgcHVibGljIGhhc0J1dHRvbnNWYWx1ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaGFzQnV0dG9uc1ZhbHVlID0gdGhpcy5oYXNCdXR0b25zKCk7XG4gICB9XG5cbiAgIGhhc0J1dHRvbnMoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5idXR0b25Db25maWcgJiYgdGhpcy5idXR0b25Db25maWcubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgZ2V0QnV0dG9uQ2xhc3MoYnV0dG9uOiBTdE1vZGFsQnV0dG9uKTogc3RyaW5nIHtcbiAgICAgIGxldCBjbGFzc2VzOiBzdHJpbmcgPSBidXR0b24gJiYgYnV0dG9uLmNsYXNzZXMgPyBidXR0b24uY2xhc3NlcyA6ICcnO1xuICAgICAgcmV0dXJuIGNsYXNzZXMudHJpbSgpO1xuICAgfVxuXG4gICBnZXRCdXR0b25JZChidXR0b246IFN0TW9kYWxCdXR0b24pOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiBidXR0b24gJiYgYnV0dG9uLmxhYmVsID8gYHN0LW1vZGFsLWJ1dHRvbi0ke3RoaXMuZ2V0QnV0dG9uTGFiZWxXaXRob3V0U3BhY2VzKGJ1dHRvbi5sYWJlbCl9YCA6IG51bGw7XG4gICB9XG5cbiAgIGdldEJ1dHRvbkxhYmVsV2l0aG91dFNwYWNlcyhsYWJlbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBsYWJlbC5yZXBsYWNlKC9cXHMrL2csICdfJyk7XG4gICB9XG5cbiAgIC8qKiBJTlRFUkFDVElPTiBXSVRIIE1PREFMICovXG4gICBjbGlja0J1dHRvbihidXR0b246IFN0TW9kYWxCdXR0b24sIGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICBpZiAoYnV0dG9uLnJlc3BvbnNlKSB7XG4gICAgICAgICBidXR0b24ucmVzcG9uc2UoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChidXR0b24ucmVzcG9uc2VWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLmNsaWNrLmVtaXQoeyByZXNwb25zZTogYnV0dG9uLnJlc3BvbnNlVmFsdWUsIGNsb3NlOiBidXR0b24uY2xvc2VPbkNsaWNrIH0pO1xuICAgICAgfVxuICAgfVxufVxuIl19