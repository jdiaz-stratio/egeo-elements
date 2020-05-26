/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble/st-bubble.component.ts
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
import { Component, Input } from '@angular/core';
import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';
/**
 * \@description {Component} [Bubble]
 *
 * This component displays a text inside a floating box
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-bubble [qaTag]="qaTag" [text]="text" [hidden]="hidden">
 *    </st-bubble>
 * ```
 */
export class StBubbleComponent {
    constructor() {
        /**
         * \@input {boolean} [hidden=false] Show or hide the bubble
         */
        this.hidden = false;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 17 };
        /**
         * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
         */
        this.showArrow = true;
        /**
         * \@Input {boolean} [animation=true] when true, bubble is displayed with an animation
         */
        this.animation = true;
        /**
         * \@Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right
         */
        this.openToLeft = true;
        /**
         * \@Input {boolean} [small=false] when true, bubble is displayed with theme small
         */
        this.small = false;
        this.placement = StPopPlacement.BOTTOM;
    }
}
StBubbleComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-bubble',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n\n<st-pop [hidden]=\"hidden\" [placement]=\"placement\" [offset]=\"offset\" class=\"st-bubble\" [openToLeft]=\"openToLeft\">\n   <div pop-button>\n      <ng-content select=[bubble-button]></ng-content>\n   </div>\n   <div pop-content [style.z-index]=\"9\" class=\"st-bubble__content\"\n        [ngClass]=\"{\n        'st-bubble__content--animated': animation,\n        'st-bubble__content--small': small,\n        'st-bubble__content--with-arrow': showArrow,\n        'st-bubble__content--to-left': openToLeft,\n        'st-bubble__content--to-right': !openToLeft,\n        'st-bubble__content--show': !hidden,\n        'st-bubble__content--cut-words': maxWidth}\"\n        [style.min-width]=\"minWidth\"\n        [style.max-width]=\"maxWidth\">\n      <span class=\"text\"> {{text}} </span>\n   </div>\n</st-pop>\n",
                styles: ["@charset \"UTF-8\";.content{display:inline-block}.arrow{border-radius:2px;bottom:47px;float:right;height:13px;margin-right:15px;position:relative;transform:rotate(-45deg);width:13px}.text{display:block;text-align:center}"]
            }] }
];
StBubbleComponent.propDecorators = {
    text: [{ type: Input }],
    hidden: [{ type: Input }],
    offset: [{ type: Input }],
    showArrow: [{ type: Input }],
    animation: [{ type: Input }],
    openToLeft: [{ type: Input }],
    small: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }]
};
if (false) {
    /**
     * \@Input {string} [text=] Text of the bubble
     * @type {?}
     */
    StBubbleComponent.prototype.text;
    /**
     * \@input {boolean} [hidden=false] Show or hide the bubble
     * @type {?}
     */
    StBubbleComponent.prototype.hidden;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis
     * @type {?}
     */
    StBubbleComponent.prototype.offset;
    /**
     * \@Input {boolean} [showArrow=true] when true, arrow icon is displayed
     * @type {?}
     */
    StBubbleComponent.prototype.showArrow;
    /**
     * \@Input {boolean} [animation=true] when true, bubble is displayed with an animation
     * @type {?}
     */
    StBubbleComponent.prototype.animation;
    /**
     * \@Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right
     * @type {?}
     */
    StBubbleComponent.prototype.openToLeft;
    /**
     * \@Input {boolean} [small=false] when true, bubble is displayed with theme small
     * @type {?}
     */
    StBubbleComponent.prototype.small;
    /**
     * \@Input {string} [minWidth=] min width for bubble
     * @type {?}
     */
    StBubbleComponent.prototype.minWidth;
    /**
     * \@Input {string} [maxWidth=] max width for bubble
     * @type {?}
     */
    StBubbleComponent.prototype.maxWidth;
    /** @type {?} */
    StBubbleComponent.prototype.placement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnViYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtYnViYmxlL3N0LWJ1YmJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBcUJyRSxNQUFNLE9BQU8saUJBQWlCO0lBTDlCOzs7O1FBVVksV0FBTSxHQUFZLEtBQUssQ0FBQzs7OztRQUV4QixXQUFNLEdBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Ozs7UUFFdEMsY0FBUyxHQUFhLElBQUksQ0FBQzs7OztRQUUzQixjQUFTLEdBQWEsSUFBSSxDQUFDOzs7O1FBRTNCLGVBQVUsR0FBYSxJQUFJLENBQUM7Ozs7UUFFNUIsVUFBSyxHQUFhLEtBQUssQ0FBQztRQU0xQixjQUFTLEdBQW1CLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFFNUQsQ0FBQzs7O1lBNUJBLFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsV0FBVztnQkFFckIsbXZDQUF5Qzs7YUFDM0M7OzttQkFJRyxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7eUJBRUwsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSzs7Ozs7OztJQWhCTixpQ0FBc0I7Ozs7O0lBRXRCLG1DQUFpQzs7Ozs7SUFFakMsbUNBQStDOzs7OztJQUUvQyxzQ0FBb0M7Ozs7O0lBRXBDLHNDQUFvQzs7Ozs7SUFFcEMsdUNBQXFDOzs7OztJQUVyQyxrQ0FBaUM7Ozs7O0lBRWpDLHFDQUEyQjs7Ozs7SUFFM0IscUNBQTJCOztJQUUzQixzQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFBvcE9mZnNldCwgU3RQb3BQbGFjZW1lbnQgfSBmcm9tICcuLi9zdC1wb3Avc3QtcG9wLm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0J1YmJsZV1cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBkaXNwbGF5cyBhIHRleHQgaW5zaWRlIGEgZmxvYXRpbmcgYm94XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgIDxzdC1idWJibGUgW3FhVGFnXT1cInFhVGFnXCIgW3RleHRdPVwidGV4dFwiIFtoaWRkZW5dPVwiaGlkZGVuXCI+XG4gKiAgICA8L3N0LWJ1YmJsZT5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtYnViYmxlJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWJ1YmJsZS5jb21wb25lbnQuc2NzcyddLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWJ1YmJsZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3RCdWJibGVDb21wb25lbnQge1xuXG4gICAvKiogQElucHV0IHtzdHJpbmd9IFt0ZXh0PV0gVGV4dCBvZiB0aGUgYnViYmxlICovXG4gICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBbaGlkZGVuPWZhbHNlXSBTaG93IG9yIGhpZGUgdGhlIGJ1YmJsZSAqL1xuICAgQElucHV0KCkgaGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtTdFBvcE9mZnNldH0gW29mZnNldD17eDogMCAsIHk6IDE3fV0gRm9yIHBvc2l0aW9uIHdpdGggb2Zmc2V0IGluIHggbyB5IGF4aXMgKi9cbiAgIEBJbnB1dCgpIG9mZnNldDogU3RQb3BPZmZzZXQgPSB7IHg6IDAsIHk6IDE3IH07XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2hvd0Fycm93PXRydWVdIHdoZW4gdHJ1ZSwgYXJyb3cgaWNvbiBpcyBkaXNwbGF5ZWQgICAgKi9cbiAgIEBJbnB1dCgpIHNob3dBcnJvdz86IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2FuaW1hdGlvbj10cnVlXSB3aGVuIHRydWUsIGJ1YmJsZSBpcyBkaXNwbGF5ZWQgd2l0aCBhbiBhbmltYXRpb24gICovXG4gICBASW5wdXQoKSBhbmltYXRpb24/OiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtvcGVuVG9MZWZ0PXRydWVdIHdoZW4gdHJ1ZSwgYnViYmxlIGlzIGRpc3BsYXllZCB3aXRoIHRoZSBhcnJvdyB0byB0aGUgcmlnaHQgICovXG4gICBASW5wdXQoKSBvcGVuVG9MZWZ0PzogYm9vbGVhbiA9IHRydWU7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc21hbGw9ZmFsc2VdIHdoZW4gdHJ1ZSwgYnViYmxlIGlzIGRpc3BsYXllZCB3aXRoIHRoZW1lIHNtYWxsICAqL1xuICAgQElucHV0KCkgc21hbGw/OiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFttaW5XaWR0aD1dIG1pbiB3aWR0aCBmb3IgYnViYmxlICAqL1xuICAgQElucHV0KCkgbWluV2lkdGg/OiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFttYXhXaWR0aD1dIG1heCB3aWR0aCBmb3IgYnViYmxlICAqL1xuICAgQElucHV0KCkgbWF4V2lkdGg/OiBzdHJpbmc7XG5cbiAgIHB1YmxpYyBwbGFjZW1lbnQ6IFN0UG9wUGxhY2VtZW50ID0gU3RQb3BQbGFjZW1lbnQuQk9UVE9NO1xuXG59XG4iXX0=