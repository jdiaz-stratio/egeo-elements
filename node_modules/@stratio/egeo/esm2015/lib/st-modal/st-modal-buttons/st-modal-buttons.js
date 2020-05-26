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
export class StModalButtonsComponent {
    constructor() {
        this.buttonConfig = [];
        this.fullscreen = false;
        this.click = new EventEmitter();
        this.hasButtonsValue = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hasButtonsValue = this.hasButtons();
    }
    /**
     * @return {?}
     */
    hasButtons() {
        return this.buttonConfig && this.buttonConfig.length > 0;
    }
    /**
     * @param {?} button
     * @return {?}
     */
    getButtonClass(button) {
        /** @type {?} */
        let classes = button && button.classes ? button.classes : '';
        return classes.trim();
    }
    /**
     * @param {?} button
     * @return {?}
     */
    getButtonId(button) {
        return button && button.label ? `st-modal-button-${this.getButtonLabelWithoutSpaces(button.label)}` : null;
    }
    /**
     * @param {?} label
     * @return {?}
     */
    getButtonLabelWithoutSpaces(label) {
        return label.replace(/\s+/g, '_');
    }
    /**
     * INTERACTION WITH MODAL
     * @param {?} button
     * @param {?} event
     * @return {?}
     */
    clickButton(button, event) {
        if (button.response) {
            button.response(event);
        }
        else if (button.responseValue !== undefined) {
            this.click.emit({ response: button.responseValue, close: button.closeOnClick });
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwtYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbW9kYWwvc3QtbW9kYWwtYnV0dG9ucy9zdC1tb2RhbC1idXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFVeEcsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQVFZLGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUNuQyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzNCLFVBQUssR0FBd0MsSUFBSSxZQUFZLEVBQXlCLENBQUM7UUFFMUYsb0JBQWUsR0FBWSxLQUFLLENBQUM7SUErQjNDLENBQUM7Ozs7SUE3QkUsUUFBUTtRQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxNQUFxQjs7WUFDN0IsT0FBTyxHQUFXLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BFLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQXFCO1FBQzlCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixJQUFJLENBQUMsMkJBQTJCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RyxDQUFDOzs7OztJQUVELDJCQUEyQixDQUFDLEtBQWE7UUFDdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBR0QsV0FBVyxDQUFDLE1BQXFCLEVBQUUsS0FBaUI7UUFDakQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0osQ0FBQzs7O1lBMUNILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixvNUJBQXNDO2dCQUV0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7OzsyQkFHRyxLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsTUFBTTs7OztJQUZQLCtDQUE0Qzs7SUFDNUMsNkNBQXFDOztJQUNyQyx3Q0FBaUc7O0lBRWpHLGtEQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RNb2RhbEJ1dHRvbiwgU3RNb2RhbFJlc3BvbnNlLCBTdE1vZGFsQnV0dG9uUmVzcG9uc2UgfSBmcm9tICcuLi9zdC1tb2RhbC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1tb2RhbC1idXR0b25zJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1tb2RhbC1idXR0b25zLmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtbW9kYWwtYnV0dG9ucy5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdE1vZGFsQnV0dG9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgIEBJbnB1dCgpIGJ1dHRvbkNvbmZpZzogU3RNb2RhbEJ1dHRvbltdID0gW107XG4gICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxTdE1vZGFsQnV0dG9uUmVzcG9uc2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdE1vZGFsQnV0dG9uUmVzcG9uc2U+KCk7XG5cbiAgIHB1YmxpYyBoYXNCdXR0b25zVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmhhc0J1dHRvbnNWYWx1ZSA9IHRoaXMuaGFzQnV0dG9ucygpO1xuICAgfVxuXG4gICBoYXNCdXR0b25zKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uQ29uZmlnICYmIHRoaXMuYnV0dG9uQ29uZmlnLmxlbmd0aCA+IDA7XG4gICB9XG5cbiAgIGdldEJ1dHRvbkNsYXNzKGJ1dHRvbjogU3RNb2RhbEJ1dHRvbik6IHN0cmluZyB7XG4gICAgICBsZXQgY2xhc3Nlczogc3RyaW5nID0gYnV0dG9uICYmIGJ1dHRvbi5jbGFzc2VzID8gYnV0dG9uLmNsYXNzZXMgOiAnJztcbiAgICAgIHJldHVybiBjbGFzc2VzLnRyaW0oKTtcbiAgIH1cblxuICAgZ2V0QnV0dG9uSWQoYnV0dG9uOiBTdE1vZGFsQnV0dG9uKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gYnV0dG9uICYmIGJ1dHRvbi5sYWJlbCA/IGBzdC1tb2RhbC1idXR0b24tJHt0aGlzLmdldEJ1dHRvbkxhYmVsV2l0aG91dFNwYWNlcyhidXR0b24ubGFiZWwpfWAgOiBudWxsO1xuICAgfVxuXG4gICBnZXRCdXR0b25MYWJlbFdpdGhvdXRTcGFjZXMobGFiZWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gbGFiZWwucmVwbGFjZSgvXFxzKy9nLCAnXycpO1xuICAgfVxuXG4gICAvKiogSU5URVJBQ1RJT04gV0lUSCBNT0RBTCAqL1xuICAgY2xpY2tCdXR0b24oYnV0dG9uOiBTdE1vZGFsQnV0dG9uLCBldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGJ1dHRvbi5yZXNwb25zZSkge1xuICAgICAgICAgYnV0dG9uLnJlc3BvbnNlKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoYnV0dG9uLnJlc3BvbnNlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5jbGljay5lbWl0KHsgcmVzcG9uc2U6IGJ1dHRvbi5yZXNwb25zZVZhbHVlLCBjbG9zZTogYnV0dG9uLmNsb3NlT25DbGljayB9KTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==