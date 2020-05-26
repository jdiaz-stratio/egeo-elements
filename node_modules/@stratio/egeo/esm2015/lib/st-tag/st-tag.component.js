/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tag/st-tag.component.ts
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
import { ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { StTagItem } from './st-tag.model';
/**
 * \@description {Component} [Tag]
 *
 * The tag component allows to display small texts.
 *
 * \@model
 *
 *   [StTagItem] {./st-tag.model.ts#StTagItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 *  <st-tag [tag]="simpleTag" class="small" [removable]="true"></st-tag>
 *
 * ```
 *
 */
export class StTagComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        /**
         * \@Input {boolean} [clickable=true] Boolean to set tag as clicklable or not
         */
        this.clickable = true;
        /**
         * \@Output {StTagItem} [remove=] Even emitted when cross icon is clicked
         */
        this.remove = new EventEmitter();
        /**
         * \@Output {StTagItem} [click=] Event emitted when tag is clicked
         */
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onRemove() {
        this.remove.emit(this.tag);
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    onClick(filter) {
        this.click.emit(filter);
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    onChangeBubbleVisibility(visible) {
        this.showBubble = visible;
        this._cd.markForCheck();
    }
}
StTagComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-tag',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div (click)=\"onClick(tag)\"\n     (mouseenter)=\"onChangeBubbleVisibility(true)\"\n     (mouseleave)=\"onChangeBubbleVisibility(false)\">\n\n   <div class=\"st-tag__text\"><span *ngIf=\"tag.icon\" class=\"st-tag__icon {{tag.icon}}\"></span>{{tag.text}}</div>\n\n   <span *ngIf=\"removable\" (click)=\"onRemove()\"\n         class=\"st-tag__remove-button\"><i class=\"icon-cross\"></i>\n   </span>\n   <st-bubble *ngIf=\"tag.bubble\" class=\"st-tag__bubble-container\"\n              [animation]=\"false\"\n              [showArrow]=\"true\"\n              [small]=\"true\"\n              [offset]=\"{x: 20, y: 5}\"\n              [hidden]=\"!showBubble\"\n              [text]=\"tag.bubble\">\n      <span bubble-button></span>\n   </st-bubble>\n</div>\n",
                host: { 'class': 'st-tag' },
                styles: ["@charset \"UTF-8\";:host{display:block;vertical-align:middle;border-radius:4px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;padding:0 10px;text-align:center;position:relative}:host .st-tag__bubble-container{position:absolute;bottom:0}:host .st-tag__text{height:100%;display:inline-block}:host .st-tag__icon{margin-right:5px}:host .st-tag__remove-button{display:inline-flex;align-items:center;justify-self:right;cursor:pointer;justify-content:flex-end}"]
            }] }
];
/** @nocollapse */
StTagComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StTagComponent.propDecorators = {
    tag: [{ type: Input }],
    removable: [{ type: HostBinding, args: ['class.st-tag--removable',] }, { type: Input }],
    clickable: [{ type: HostBinding, args: ['class.st-tag--clickable',] }, { type: Input }],
    remove: [{ type: Output }],
    click: [{ type: Output }]
};
if (false) {
    /**
     * \@Input {StTagItem} [tag=] Item that contains the tag info
     * @type {?}
     */
    StTagComponent.prototype.tag;
    /**
     * \@Input {boolean} [removable=] Boolean to display or not the cross icon to remove tag
     * @type {?}
     */
    StTagComponent.prototype.removable;
    /**
     * \@Input {boolean} [clickable=true] Boolean to set tag as clicklable or not
     * @type {?}
     */
    StTagComponent.prototype.clickable;
    /**
     * \@Output {StTagItem} [remove=] Even emitted when cross icon is clicked
     * @type {?}
     */
    StTagComponent.prototype.remove;
    /**
     * \@Output {StTagItem} [click=] Event emitted when tag is clicked
     * @type {?}
     */
    StTagComponent.prototype.click;
    /** @type {?} */
    StTagComponent.prototype.showBubble;
    /**
     * @type {?}
     * @private
     */
    StTagComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdGFnL3N0LXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCM0MsTUFBTSxPQUFPLGNBQWM7Ozs7SUFnQnhCLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBUmpDLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFFekIsV0FBTSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDOzs7O1FBRWhFLFVBQUssR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQU16RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFpQjtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLE9BQWdCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBdENILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsc3JDQUE2QztnQkFFN0MsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs7YUFDN0I7Ozs7WUE1QlEsaUJBQWlCOzs7a0JBZ0N0QixLQUFLO3dCQUVMLFdBQVcsU0FBQyx5QkFBeUIsY0FDckMsS0FBSzt3QkFFTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLEtBQUs7cUJBRUwsTUFBTTtvQkFFTixNQUFNOzs7Ozs7O0lBVlAsNkJBQXdCOzs7OztJQUV4QixtQ0FDNEI7Ozs7O0lBRTVCLG1DQUNtQzs7Ozs7SUFFbkMsZ0NBQTBFOzs7OztJQUUxRSwrQkFBeUU7O0lBRXpFLG9DQUFvQjs7Ozs7SUFFUiw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFRhZ0l0ZW0gfSBmcm9tICcuL3N0LXRhZy5tb2RlbCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtUYWddXG4gKlxuICogVGhlIHRhZyBjb21wb25lbnQgYWxsb3dzIHRvIGRpc3BsYXkgc21hbGwgdGV4dHMuXG4gKlxuICogQG1vZGVsXG4gKlxuICogICBbU3RUYWdJdGVtXSB7Li9zdC10YWcubW9kZWwudHMjU3RUYWdJdGVtfVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiAgPHN0LXRhZyBbdGFnXT1cInNpbXBsZVRhZ1wiIGNsYXNzPVwic21hbGxcIiBbcmVtb3ZhYmxlXT1cInRydWVcIj48L3N0LXRhZz5cbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC10YWcnLFxuICAgdGVtcGxhdGVVcmw6ICdzdC10YWcuY29tcG9uZW50LnRlbXBsYXRlLmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJ3N0LXRhZy5jb21wb25lbnQuc2NzcyddLFxuICAgaG9zdDogeyAnY2xhc3MnOiAnc3QtdGFnJyB9XG59KVxuXG5leHBvcnQgY2xhc3MgU3RUYWdDb21wb25lbnQge1xuICAgLyoqIEBJbnB1dCB7U3RUYWdJdGVtfSBbdGFnPV0gSXRlbSB0aGF0IGNvbnRhaW5zIHRoZSB0YWcgaW5mbyAgKi9cbiAgIEBJbnB1dCgpIHRhZzogU3RUYWdJdGVtO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3JlbW92YWJsZT1dIEJvb2xlYW4gdG8gZGlzcGxheSBvciBub3QgdGhlIGNyb3NzIGljb24gdG8gcmVtb3ZlIHRhZyAqL1xuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC10YWctLXJlbW92YWJsZScpXG4gICBASW5wdXQoKSByZW1vdmFibGU6IGJvb2xlYW47XG4gICAvKiogQElucHV0IHtib29sZWFufSBbY2xpY2thYmxlPXRydWVdIEJvb2xlYW4gdG8gc2V0IHRhZyBhcyBjbGlja2xhYmxlIG9yIG5vdCAqL1xuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC10YWctLWNsaWNrYWJsZScpXG4gICBASW5wdXQoKSBjbGlja2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqIEBPdXRwdXQge1N0VGFnSXRlbX0gW3JlbW92ZT1dIEV2ZW4gZW1pdHRlZCB3aGVuIGNyb3NzIGljb24gaXMgY2xpY2tlZCAgKi9cbiAgIEBPdXRwdXQoKSByZW1vdmU6IEV2ZW50RW1pdHRlcjxTdFRhZ0l0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFRhZ0l0ZW0+KCk7XG4gICAvKiogQE91dHB1dCB7U3RUYWdJdGVtfSBbY2xpY2s9XSBFdmVudCBlbWl0dGVkIHdoZW4gdGFnIGlzIGNsaWNrZWQgKi9cbiAgIEBPdXRwdXQoKSBjbGljazogRXZlbnRFbWl0dGVyPFN0VGFnSXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VGFnSXRlbT4oKTtcblxuICAgc2hvd0J1YmJsZTogYm9vbGVhbjtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgIH1cblxuICAgb25SZW1vdmUoKTogdm9pZCB7XG4gICAgICB0aGlzLnJlbW92ZS5lbWl0KHRoaXMudGFnKTtcbiAgIH1cblxuICAgb25DbGljayhmaWx0ZXI6IFN0VGFnSXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5jbGljay5lbWl0KGZpbHRlcik7XG4gICB9XG5cbiAgIG9uQ2hhbmdlQnViYmxlVmlzaWJpbGl0eSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLnNob3dCdWJibGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbn1cbiJdfQ==