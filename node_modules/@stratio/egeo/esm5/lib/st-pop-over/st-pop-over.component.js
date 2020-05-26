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
var StPopOverComponent = /** @class */ (function () {
    function StPopOverComponent() {
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
    Object.defineProperty(StPopOverComponent.prototype, "popOffset", {
        get: /**
         * @return {?}
         */
        function () {
            return { x: this.offset.x + (this.defaultOffset.x * (this.openToLeft ? 1 : -1)), y: (this.offset.y + this.defaultOffset.y) };
        },
        enumerable: true,
        configurable: true
    });
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
    return StPopOverComponent;
}());
export { StPopOverComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcG9wLW92ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wb3Atb3Zlci9zdC1wb3Atb3Zlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyRTtJQUFBOzs7O1FBWVksV0FBTSxHQUFZLEtBQUssQ0FBQzs7OztRQUV4QixXQUFNLEdBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Ozs7UUFFdEMsbUJBQWMsR0FBYSxLQUFLLENBQUM7Ozs7UUFFakMsY0FBUyxHQUFhLElBQUksQ0FBQzs7OztRQUUzQixlQUFVLEdBQWEsSUFBSSxDQUFDOzs7O1FBRTVCLGNBQVMsR0FBbUIsY0FBYyxDQUFDLE1BQU0sQ0FBQzs7OztRQUdqRCxnQkFBVyxHQUF3QixJQUFJLFlBQVksRUFBUyxDQUFDO1FBRS9ELGtCQUFhLEdBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFLeEQsQ0FBQztJQUhFLHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRyxPQUFPLEVBQUUsQ0FBQyxFQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDakksQ0FBQzs7O09BQUE7O2dCQS9CSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLGFBQWE7b0JBRXZCLDAzQ0FBMkM7O2lCQUM3Qzs7O3dCQUlHLEtBQUs7d0JBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7aUNBRUwsS0FBSzs0QkFFTCxLQUFLOzZCQUVMLEtBQUs7NEJBRUwsS0FBSzs4QkFHTCxNQUFNOztJQU9WLHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksa0JBQWtCOzs7Ozs7SUFHNUIsbUNBQXVCOzs7OztJQUV2QixtQ0FBdUI7Ozs7O0lBRXZCLG9DQUFpQzs7Ozs7SUFFakMsb0NBQStDOzs7OztJQUUvQyw0Q0FBMEM7Ozs7O0lBRTFDLHVDQUFvQzs7Ozs7SUFFcEMsd0NBQXFDOzs7OztJQUVyQyx1Q0FBMkQ7Ozs7O0lBRzNELHlDQUF1RTs7Ozs7SUFFdkUsMkNBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFBvcE9mZnNldCwgU3RQb3BQbGFjZW1lbnQgfSBmcm9tICcuLi9zdC1wb3Avc3QtcG9wLm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gUG9wIE92ZXJcbiAqXG4gKiBUaGlzIGNvbXBvbmVudHMgcG9wIG92ZXIgYSBjb250ZW50IHdpdGggYSB0aXRsZVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiAgICA8c3QtcG9wLW92ZXIgW3FhVGFnXT1cInFhVGFnXCIgW3RpdGxlXT1cInRpdGxlXCIgW2hpZGRlbl09XCJoaWRkZW5cIj5cbiAqICAgICAgIDwhLS0gQ09OVEVOVCBUTyBQT1AgT1ZFUiAtLT5cbiAqICAgIDwvc3QtcG9wLW92ZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXBvcC1vdmVyJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXBvcC1vdmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcG9wLW92ZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN0UG9wT3ZlckNvbXBvbmVudCB7XG5cbiAgIC8qKiBAaW5wdXQge3N0cmluZ30gW3FhVGFnPScnXSBGb3Igc2V0IGlkIGZvciB0ZXN0cyAqL1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIC8qKiBAaW5wdXQge3N0cmluZ30gW3RpdGxlXSBUaXRsZSBvZiB0aGUgcG9wIG92ZXIgKi9cbiAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBbaGlkZGVuPWZhbHNlXSBTaG93IG9yIGhpZGUgdGhlIHBvcCBvdmVyICovXG4gICBASW5wdXQoKSBoaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBASW5wdXQge1N0UG9wT2Zmc2V0fSBbb2Zmc2V0PXt4OiAwICwgeTogMTd9XSBGb3IgcG9zaXRpb24gd2l0aCBvZmZzZXQgaW4geCBvIHkgYXhpcyAqL1xuICAgQElucHV0KCkgb2Zmc2V0OiBTdFBvcE9mZnNldCA9IHsgeDogMCwgeTogMTcgfTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzaG93U2V0dGluZ0J0bj1mYWxzZV0gd2hlbiB0cnVlLCBzZXR0aW5ncyBpY29uIGlzIGRpc3BsYXllZCAgICAqL1xuICAgQElucHV0KCkgc2hvd1NldHRpbmdCdG4/OiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2hvd0Fycm93PXRydWVdIHdoZW4gdHJ1ZSwgYXJyb3cgaWNvbiBpcyBkaXNwbGF5ZWQgICAgKi9cbiAgIEBJbnB1dCgpIHNob3dBcnJvdz86IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW29wZW5Ub0xlZnQ9dHJ1ZV0gd2hlbiB0cnVlLCBtb2RhbCBpcyBwbGFjZWQgZnJvbSBsZWZ0IGNvcm5lciBvZiBidXR0b24gICAgKi9cbiAgIEBJbnB1dCgpIG9wZW5Ub0xlZnQ/OiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKiBASW5wdXQge1N0UG9wUGxhY2VtZW50fSBbcGxhY2VtZW50PVN0UG9wUGxhY2VtZW50LkJPVFRPTV0gRGVmaW5lIHBvc2l0aW9uIG9mIGNvbnRlbnQgcmVsYXRpdmUgdG8gYnV0dG9uICovXG4gICBASW5wdXQoKSBwbGFjZW1lbnQ6IFN0UG9wUGxhY2VtZW50ID0gU3RQb3BQbGFjZW1lbnQuQk9UVE9NO1xuXG4gICAvKiogQE91dHB1dCB7RXZlbnR9IFtjbGlja10gTm90aWZ5IGV2ZW50IGNsaWNrICovXG4gICBAT3V0cHV0KCkgY2xpY2tDb25maWc6IEV2ZW50RW1pdHRlcjxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xuXG4gICBwcml2YXRlIGRlZmF1bHRPZmZzZXQ6IFN0UG9wT2Zmc2V0ID0geyB4OiAyMSwgeTogOCB9O1xuXG4gICBnZXQgcG9wT2Zmc2V0KCk6IFN0UG9wT2Zmc2V0IHtcbiAgICAgIHJldHVybiB7IHg6ICB0aGlzLm9mZnNldC54ICsgKHRoaXMuZGVmYXVsdE9mZnNldC54ICogKHRoaXMub3BlblRvTGVmdCA/IDEgOiAtMSkpLCB5OiAodGhpcy5vZmZzZXQueSArIHRoaXMuZGVmYXVsdE9mZnNldC55KSB9O1xuICAgfVxufVxuIl19