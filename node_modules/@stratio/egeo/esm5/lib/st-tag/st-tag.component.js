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
var StTagComponent = /** @class */ (function () {
    function StTagComponent(_cd) {
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
    StTagComponent.prototype.onRemove = /**
     * @return {?}
     */
    function () {
        this.remove.emit(this.tag);
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    StTagComponent.prototype.onClick = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.click.emit(filter);
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    StTagComponent.prototype.onChangeBubbleVisibility = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        this.showBubble = visible;
        this._cd.markForCheck();
    };
    StTagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-tag',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div (click)=\"onClick(tag)\"\n     (mouseenter)=\"onChangeBubbleVisibility(true)\"\n     (mouseleave)=\"onChangeBubbleVisibility(false)\">\n\n   <div class=\"st-tag__text\"><span *ngIf=\"tag.icon\" class=\"st-tag__icon {{tag.icon}}\"></span>{{tag.text}}</div>\n\n   <span *ngIf=\"removable\" (click)=\"onRemove()\"\n         class=\"st-tag__remove-button\"><i class=\"icon-cross\"></i>\n   </span>\n   <st-bubble *ngIf=\"tag.bubble\" class=\"st-tag__bubble-container\"\n              [animation]=\"false\"\n              [showArrow]=\"true\"\n              [small]=\"true\"\n              [offset]=\"{x: 20, y: 5}\"\n              [hidden]=\"!showBubble\"\n              [text]=\"tag.bubble\">\n      <span bubble-button></span>\n   </st-bubble>\n</div>\n",
                    host: { 'class': 'st-tag' },
                    styles: ["@charset \"UTF-8\";:host{display:block;vertical-align:middle;border-radius:4px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;padding:0 10px;text-align:center;position:relative}:host .st-tag__bubble-container{position:absolute;bottom:0}:host .st-tag__text{height:100%;display:inline-block}:host .st-tag__icon{margin-right:5px}:host .st-tag__remove-button{display:inline-flex;align-items:center;justify-self:right;cursor:pointer;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    StTagComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StTagComponent.propDecorators = {
        tag: [{ type: Input }],
        removable: [{ type: HostBinding, args: ['class.st-tag--removable',] }, { type: Input }],
        clickable: [{ type: HostBinding, args: ['class.st-tag--clickable',] }, { type: Input }],
        remove: [{ type: Output }],
        click: [{ type: Output }]
    };
    return StTagComponent;
}());
export { StTagComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdGFnL3N0LXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCM0M7SUF1Qkcsd0JBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBUmpDLGNBQVMsR0FBWSxJQUFJLENBQUM7Ozs7UUFFekIsV0FBTSxHQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDOzs7O1FBRWhFLFVBQUssR0FBNEIsSUFBSSxZQUFZLEVBQWEsQ0FBQztJQU16RSxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0csSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLE1BQWlCO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsaURBQXdCOzs7O0lBQXhCLFVBQXlCLE9BQWdCO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdENILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsc3JDQUE2QztvQkFFN0MsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRTs7aUJBQzdCOzs7O2dCQTVCUSxpQkFBaUI7OztzQkFnQ3RCLEtBQUs7NEJBRUwsV0FBVyxTQUFDLHlCQUF5QixjQUNyQyxLQUFLOzRCQUVMLFdBQVcsU0FBQyx5QkFBeUIsY0FDckMsS0FBSzt5QkFFTCxNQUFNO3dCQUVOLE1BQU07O0lBcUJWLHFCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FqQ1ksY0FBYzs7Ozs7O0lBRXhCLDZCQUF3Qjs7Ozs7SUFFeEIsbUNBQzRCOzs7OztJQUU1QixtQ0FDbUM7Ozs7O0lBRW5DLGdDQUEwRTs7Ozs7SUFFMUUsK0JBQXlFOztJQUV6RSxvQ0FBb0I7Ozs7O0lBRVIsNkJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RUYWdJdGVtIH0gZnJvbSAnLi9zdC10YWcubW9kZWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbVGFnXVxuICpcbiAqIFRoZSB0YWcgY29tcG9uZW50IGFsbG93cyB0byBkaXNwbGF5IHNtYWxsIHRleHRzLlxuICpcbiAqIEBtb2RlbFxuICpcbiAqICAgW1N0VGFnSXRlbV0gey4vc3QtdGFnLm1vZGVsLnRzI1N0VGFnSXRlbX1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogIDxzdC10YWcgW3RhZ109XCJzaW1wbGVUYWdcIiBjbGFzcz1cInNtYWxsXCIgW3JlbW92YWJsZV09XCJ0cnVlXCI+PC9zdC10YWc+XG4gKlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtdGFnJyxcbiAgIHRlbXBsYXRlVXJsOiAnc3QtdGFnLmNvbXBvbmVudC50ZW1wbGF0ZS5odG1sJyxcbiAgIHN0eWxlVXJsczogWydzdC10YWcuY29tcG9uZW50LnNjc3MnXSxcbiAgIGhvc3Q6IHsgJ2NsYXNzJzogJ3N0LXRhZycgfVxufSlcblxuZXhwb3J0IGNsYXNzIFN0VGFnQ29tcG9uZW50IHtcbiAgIC8qKiBASW5wdXQge1N0VGFnSXRlbX0gW3RhZz1dIEl0ZW0gdGhhdCBjb250YWlucyB0aGUgdGFnIGluZm8gICovXG4gICBASW5wdXQoKSB0YWc6IFN0VGFnSXRlbTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtyZW1vdmFibGU9XSBCb29sZWFuIHRvIGRpc3BsYXkgb3Igbm90IHRoZSBjcm9zcyBpY29uIHRvIHJlbW92ZSB0YWcgKi9cbiAgIEBIb3N0QmluZGluZygnY2xhc3Muc3QtdGFnLS1yZW1vdmFibGUnKVxuICAgQElucHV0KCkgcmVtb3ZhYmxlOiBib29sZWFuO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2NsaWNrYWJsZT10cnVlXSBCb29sZWFuIHRvIHNldCB0YWcgYXMgY2xpY2tsYWJsZSBvciBub3QgKi9cbiAgIEBIb3N0QmluZGluZygnY2xhc3Muc3QtdGFnLS1jbGlja2FibGUnKVxuICAgQElucHV0KCkgY2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKiBAT3V0cHV0IHtTdFRhZ0l0ZW19IFtyZW1vdmU9XSBFdmVuIGVtaXR0ZWQgd2hlbiBjcm9zcyBpY29uIGlzIGNsaWNrZWQgICovXG4gICBAT3V0cHV0KCkgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8U3RUYWdJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUYWdJdGVtPigpO1xuICAgLyoqIEBPdXRwdXQge1N0VGFnSXRlbX0gW2NsaWNrPV0gRXZlbnQgZW1pdHRlZCB3aGVuIHRhZyBpcyBjbGlja2VkICovXG4gICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxTdFRhZ0l0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdFRhZ0l0ZW0+KCk7XG5cbiAgIHNob3dCdWJibGU6IGJvb2xlYW47XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuXG4gICB9XG5cbiAgIG9uUmVtb3ZlKCk6IHZvaWQge1xuICAgICAgdGhpcy5yZW1vdmUuZW1pdCh0aGlzLnRhZyk7XG4gICB9XG5cbiAgIG9uQ2xpY2soZmlsdGVyOiBTdFRhZ0l0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2suZW1pdChmaWx0ZXIpO1xuICAgfVxuXG4gICBvbkNoYW5nZUJ1YmJsZVZpc2liaWxpdHkodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5zaG93QnViYmxlID0gdmlzaWJsZTtcbiAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxuXG59XG4iXX0=