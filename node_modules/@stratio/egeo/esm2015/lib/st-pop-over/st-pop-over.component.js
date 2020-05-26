/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop-over/st-pop-over.component.ts
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
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';
/**
 * \@description {Component} Pop Over
 *
 * This components pop over a content with a title
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-pop-over [qaTag]="qaTag" [title]="title" [hidden]="hidden">
 *       <!-- CONTENT TO POP OVER -->
 *    </st-pop-over>
 * ```
 */
export class StPopOverComponent {
    constructor() {
        /**
         * \@input {boolean} [hidden=false] Show or hide the pop over
         */
        this.hidden = false;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 17 };
        /**
         * \@Input {boolean} [showSettingBtn=false] when true, settings icon is displayed
         */
        this.showSettingBtn = false;
        /**
         * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
         */
        this.showArrow = true;
        /**
         * \@Input {boolean} [openToLeft=true] when true, modal is placed from left corner of button
         */
        this.openToLeft = true;
        /**
         * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM] Define position of content relative to button
         */
        this.placement = StPopPlacement.BOTTOM;
        /**
         * \@Output {Event} [click] Notify event click
         */
        this.clickConfig = new EventEmitter();
        this.defaultOffset = { x: 21, y: 8 };
    }
    /**
     * @return {?}
     */
    get popOffset() {
        return { x: this.offset.x + (this.defaultOffset.x * (this.openToLeft ? 1 : -1)), y: (this.offset.y + this.defaultOffset.y) };
    }
}
StPopOverComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-pop-over',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop [hidden]=\"hidden\" [placement]=\"placement\" [openToLeft]=\"openToLeft\" [offset]=\"popOffset\" class=\"test\">\n   <div pop-button>\n      <ng-content select=[pop-over-button]></ng-content>\n   </div>\n\n   <div pop-content [style.z-index]=\"9\" class=\"content st-pop-over__content\"\n        [ngClass]=\"{\n           'st-pop-over__content--with-arrow': showArrow,\n            'st-pop-over__content--to-right': showArrow && !openToLeft}\">\n      <div class=\"st-pop-over__header\" [ngClass]=\"{'st-pop-over__header--underlined': title}\"\n           *ngIf=\"title || showSettingBtn\">\n         <span *ngIf=\"title\" class=\"title\">{{title}}</span>\n         <button class=\"button st-pop-over__setting-action\" *ngIf=\"showSettingBtn\" (click)=\"clickConfig.emit($event)\">\n            <i class=\"icon-settings2\"></i>\n         </button>\n      </div>\n      <ng-content select=[pop-over-content]></ng-content>\n   </div>\n</st-pop>\n",
                styles: ["@charset \"UTF-8\";.content{display:inline-block;height:auto;min-width:210px}.arrow{position:relative;width:13px;height:13px;bottom:47px;transform:rotate(-45deg);float:right;margin-right:15px;border-radius:2px}.st-pop-over__title{display:flex;flex-wrap:nowrap;align-items:center}.st-pop-over__setting-action{margin-left:auto}.arrow-with-config{bottom:56px}"]
            }] }
];
StPopOverComponent.propDecorators = {
    qaTag: [{ type: Input }],
    title: [{ type: Input }],
    hidden: [{ type: Input }],
    offset: [{ type: Input }],
    showSettingBtn: [{ type: Input }],
    showArrow: [{ type: Input }],
    openToLeft: [{ type: Input }],
    placement: [{ type: Input }],
    clickConfig: [{ type: Output }]
};
if (false) {
    /**
     * \@input {string} [qaTag=''] For set id for tests
     * @type {?}
     */
    StPopOverComponent.prototype.qaTag;
    /**
     * \@input {string} [title] Title of the pop over
     * @type {?}
     */
    StPopOverComponent.prototype.title;
    /**
     * \@input {boolean} [hidden=false] Show or hide the pop over
     * @type {?}
     */
    StPopOverComponent.prototype.hidden;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
     * @type {?}
     */
    StPopOverComponent.prototype.offset;
    /**
     * \@Input {boolean} [showSettingBtn=false] when true, settings icon is displayed
     * @type {?}
     */
    StPopOverComponent.prototype.showSettingBtn;
    /**
     * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
     * @type {?}
     */
    StPopOverComponent.prototype.showArrow;
    /**
     * \@Input {boolean} [openToLeft=true] when true, modal is placed from left corner of button
     * @type {?}
     */
    StPopOverComponent.prototype.openToLeft;
    /**
     * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM] Define position of content relative to button
     * @type {?}
     */
    StPopOverComponent.prototype.placement;
    /**
     * \@Output {Event} [click] Notify event click
     * @type {?}
     */
    StPopOverComponent.prototype.clickConfig;
    /**
     * @type {?}
     * @private
     */
    StPopOverComponent.prototype.defaultOffset;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcG9wLW92ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wb3Atb3Zlci9zdC1wb3Atb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBc0JyRSxNQUFNLE9BQU8sa0JBQWtCO0lBTC9COzs7O1FBWVksV0FBTSxHQUFZLEtBQUssQ0FBQzs7OztRQUV4QixXQUFNLEdBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Ozs7UUFFdEMsbUJBQWMsR0FBYSxLQUFLLENBQUM7Ozs7UUFFakMsY0FBUyxHQUFhLElBQUksQ0FBQzs7OztRQUUzQixlQUFVLEdBQWEsSUFBSSxDQUFDOzs7O1FBRTVCLGNBQVMsR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7OztRQUdqRCxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBRS9ELGtCQUFhLEdBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFLeEQsQ0FBQzs7OztJQUhFLElBQUksU0FBUztRQUNWLE9BQU8sRUFBRSxDQUFDLEVBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqSSxDQUFDOzs7WUEvQkgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxhQUFhO2dCQUV2QiwwM0NBQTJDOzthQUM3Qzs7O29CQUlHLEtBQUs7b0JBRUwsS0FBSztxQkFFTCxLQUFLO3FCQUVMLEtBQUs7NkJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSzswQkFHTCxNQUFNOzs7Ozs7O0lBakJQLG1DQUF1Qjs7Ozs7SUFFdkIsbUNBQXVCOzs7OztJQUV2QixvQ0FBaUM7Ozs7O0lBRWpDLG9DQUErQzs7Ozs7SUFFL0MsNENBQTBDOzs7OztJQUUxQyx1Q0FBb0M7Ozs7O0lBRXBDLHdDQUFxQzs7Ozs7SUFFckMsdUNBQTJEOzs7OztJQUczRCx5Q0FBdUU7Ozs7O0lBRXZFLDJDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RQb3BPZmZzZXQsIFN0UG9wUGxhY2VtZW50IH0gZnJvbSAnLi4vc3QtcG9wL3N0LXBvcC5tb2RlbCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFBvcCBPdmVyXG4gKlxuICogVGhpcyBjb21wb25lbnRzIHBvcCBvdmVyIGEgY29udGVudCB3aXRoIGEgdGl0bGVcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogICAgPHN0LXBvcC1vdmVyIFtxYVRhZ109XCJxYVRhZ1wiIFt0aXRsZV09XCJ0aXRsZVwiIFtoaWRkZW5dPVwiaGlkZGVuXCI+XG4gKiAgICAgICA8IS0tIENPTlRFTlQgVE8gUE9QIE9WRVIgLS0+XG4gKiAgICA8L3N0LXBvcC1vdmVyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1wb3Atb3ZlcicsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1wb3Atb3Zlci5jb21wb25lbnQuc2NzcyddLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXBvcC1vdmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTdFBvcE92ZXJDb21wb25lbnQge1xuXG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gRm9yIHNldCBpZCBmb3IgdGVzdHMgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFt0aXRsZV0gVGl0bGUgb2YgdGhlIHBvcCBvdmVyICovXG4gICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgLyoqIEBpbnB1dCB7Ym9vbGVhbn0gW2hpZGRlbj1mYWxzZV0gU2hvdyBvciBoaWRlIHRoZSBwb3Agb3ZlciAqL1xuICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtTdFBvcE9mZnNldH0gW29mZnNldD17eDogMCAsIHk6IDE3fV0gRm9yIHBvc2l0aW9uIHdpdGggb2Zmc2V0IGluIHggbyB5IGF4aXMgKi9cbiAgIEBJbnB1dCgpIG9mZnNldDogU3RQb3BPZmZzZXQgPSB7IHg6IDAsIHk6IDE3IH07XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2hvd1NldHRpbmdCdG49ZmFsc2VdIHdoZW4gdHJ1ZSwgc2V0dGluZ3MgaWNvbiBpcyBkaXNwbGF5ZWQgICAgKi9cbiAgIEBJbnB1dCgpIHNob3dTZXR0aW5nQnRuPzogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3Nob3dBcnJvdz10cnVlXSB3aGVuIHRydWUsIGFycm93IGljb24gaXMgZGlzcGxheWVkICAgICovXG4gICBASW5wdXQoKSBzaG93QXJyb3c/OiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtvcGVuVG9MZWZ0PXRydWVdIHdoZW4gdHJ1ZSwgbW9kYWwgaXMgcGxhY2VkIGZyb20gbGVmdCBjb3JuZXIgb2YgYnV0dG9uICAgICovXG4gICBASW5wdXQoKSBvcGVuVG9MZWZ0PzogYm9vbGVhbiA9IHRydWU7XG4gICAvKiogQElucHV0IHtTdFBvcFBsYWNlbWVudH0gW3BsYWNlbWVudD1TdFBvcFBsYWNlbWVudC5CT1RUT01dIERlZmluZSBwb3NpdGlvbiBvZiBjb250ZW50IHJlbGF0aXZlIHRvIGJ1dHRvbiAqL1xuICAgQElucHV0KCkgcGxhY2VtZW50OiBTdFBvcFBsYWNlbWVudCA9IFN0UG9wUGxhY2VtZW50LkJPVFRPTTtcblxuICAgLyoqIEBPdXRwdXQge0V2ZW50fSBbY2xpY2tdIE5vdGlmeSBldmVudCBjbGljayAqL1xuICAgQE91dHB1dCgpIGNsaWNrQ29uZmlnOiBFdmVudEVtaXR0ZXI8RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcblxuICAgcHJpdmF0ZSBkZWZhdWx0T2Zmc2V0OiBTdFBvcE9mZnNldCA9IHsgeDogMjEsIHk6IDggfTtcblxuICAgZ2V0IHBvcE9mZnNldCgpOiBTdFBvcE9mZnNldCB7XG4gICAgICByZXR1cm4geyB4OiAgdGhpcy5vZmZzZXQueCArICh0aGlzLmRlZmF1bHRPZmZzZXQueCAqICh0aGlzLm9wZW5Ub0xlZnQgPyAxIDogLTEpKSwgeTogKHRoaXMub2Zmc2V0LnkgKyB0aGlzLmRlZmF1bHRPZmZzZXQueSkgfTtcbiAgIH1cbn1cbiJdfQ==