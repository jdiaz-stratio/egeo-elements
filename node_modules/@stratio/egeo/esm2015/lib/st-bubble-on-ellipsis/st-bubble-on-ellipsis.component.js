/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.component.ts
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
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { get as _get } from 'lodash';
/**
 * \@description {Component} [StBubbleOnEllipsis]
 *
 * This component displays a bubble below a content if its width is longer than container
 *
 * \@example
 *
 * {html}
 *
 * ```
 *      <st-bubble-on-ellipsis
 *         [text]="'Text for bubble'"
 *         [openToLeft]="true"
 *         [maxWidth]="'40%'">
 *          Any text
 *      </st-bubble-on-ellipsis>
 * ```
 */
export class StBubbleOnEllipsisComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        /**
         * \@Input {string} [lines=1] number of lines where ellipsis is placed
         */
        this.lines = 1;
    }
    /**
     * \@Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right
     * @return {?}
     */
    get openToLeft() {
        return this._openToLeft;
    }
    /**
     * @param {?} _openToLeft
     * @return {?}
     */
    set openToLeft(_openToLeft) {
        this._openToLeft = _openToLeft;
        this.offset = this._openToLeft ? { x: 38, y: 7 } : { x: 0, y: 7 };
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    onShowBubble() {
        if (_get(this.bubbleTrigger, 'nativeElement.parentElement.offsetWidth') < _get(this.bubbleTrigger, 'nativeElement.parentElement.scrollWidth')
            || _get(this.bubbleTrigger, 'nativeElement.parentElement.offsetHeight') < _get(this.bubbleTrigger, 'nativeElement.parentElement.scrollHeight')) {
            this.visible = true;
        }
    }
    /**
     * @return {?}
     */
    onHideBubble() {
        this.visible = false;
    }
}
StBubbleOnEllipsisComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-bubble-on-ellipsis',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<span class=\"bubble-trigger\" #bubbleTrigger\n      (mouseenter)=\"onShowBubble()\"\n      (mouseleave)=\"onHideBubble()\">\n   <ng-content>\n   </ng-content>\n</span>\n\n<st-bubble class=\"bubble\" [ngClass]=\"{'bubble--open-to-left': openToLeft}\"\n           [hidden]=\"!visible\"\n           [small]=\"true\"\n           [text]=\"text\"\n           [animation]=\"false\"\n           [showArrow]=\"true\"\n           [offset]=\"offset\"\n           [openToLeft]=\"openToLeft\"\n           [minWidth]=\"minWidth\"\n           [maxWidth]=\"maxWidth\"\n>\n   <span bubble-button></span>\n</st-bubble>\n\n",
                host: {
                    '[class.multi-line]': 'lines > 1',
                    '[style.-webkit-line-clamp]': 'lines'
                },
                styles: ["@charset \"UTF-8\";:host{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host.multi-line{display:block;display:-webkit-box;word-break:break-word;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;white-space:normal}.bubble-trigger{text-overflow:ellipsis}.bubble{display:block}.bubble--open-to-left{margin-left:50%}"]
            }] }
];
/** @nocollapse */
StBubbleOnEllipsisComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StBubbleOnEllipsisComponent.propDecorators = {
    text: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    lines: [{ type: Input }],
    bubbleTrigger: [{ type: ViewChild, args: ['bubbleTrigger', { static: false },] }],
    openToLeft: [{ type: Input }]
};
if (false) {
    /**
     * \@Input {string} [text=] Text of the bubble
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.text;
    /**
     * \@Input {string} [minWidth=] min width for bubble
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.minWidth;
    /**
     * \@Input {string} [maxWidth=] max width for bubble
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.maxWidth;
    /**
     * \@Input {string} [lines=1] number of lines where ellipsis is placed
     * @type {?}
     */
    StBubbleOnEllipsisComponent.prototype.lines;
    /** @type {?} */
    StBubbleOnEllipsisComponent.prototype.bubbleTrigger;
    /** @type {?} */
    StBubbleOnEllipsisComponent.prototype.offset;
    /** @type {?} */
    StBubbleOnEllipsisComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    StBubbleOnEllipsisComponent.prototype._openToLeft;
    /**
     * @type {?}
     * @private
     */
    StBubbleOnEllipsisComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnViYmxlLW9uLWVsbGlwc2lzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtYnViYmxlLW9uLWVsbGlwc2lzL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDckMsTUFBTSxPQUFPLDJCQUEyQjs7OztJQWtCckMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFUakMsVUFBSyxHQUFZLENBQUMsQ0FBQztJQVU1QixDQUFDOzs7OztJQUdELElBQ0ksVUFBVTtRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELElBQUksVUFBVSxDQUFDLFdBQW9CO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSx5Q0FBeUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLHlDQUF5QyxDQUFDO2VBQ3ZJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLDBDQUEwQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsMENBQTBDLENBQUMsRUFBRTtZQUNoSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUN0QjtJQUNKLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBbkRILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsdUJBQXVCO2dCQUVqQyxpaUNBQXFEO2dCQUNyRCxJQUFJLEVBQUU7b0JBQ0gsb0JBQW9CLEVBQUUsV0FBVztvQkFDakMsNEJBQTRCLEVBQUUsT0FBTztpQkFDdkM7O2FBQ0g7Ozs7WUFoQ1EsaUJBQWlCOzs7bUJBb0N0QixLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSztvQkFFTCxLQUFLOzRCQUVMLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3lCQVc1QyxLQUFLOzs7Ozs7O0lBbkJOLDJDQUFzQjs7Ozs7SUFFdEIsK0NBQTJCOzs7OztJQUUzQiwrQ0FBMkI7Ozs7O0lBRTNCLDRDQUE0Qjs7SUFFNUIsb0RBQXlFOztJQUV6RSw2Q0FBb0I7O0lBQ3BCLDhDQUFpQjs7Ozs7SUFFakIsa0RBQTZCOzs7OztJQUVqQiwwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCBhcyBfZ2V0IH0gZnJvbSAnbG9kYXNoJztcblxuXG5pbXBvcnQgeyBTdFBvcE9mZnNldCB9IGZyb20gJy4uL3N0LXBvcC9zdC1wb3AubW9kZWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbU3RCdWJibGVPbkVsbGlwc2lzXVxuICpcbiAqIFRoaXMgY29tcG9uZW50IGRpc3BsYXlzIGEgYnViYmxlIGJlbG93IGEgY29udGVudCBpZiBpdHMgd2lkdGggaXMgbG9uZ2VyIHRoYW4gY29udGFpbmVyXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgICAgPHN0LWJ1YmJsZS1vbi1lbGxpcHNpc1xuICogICAgICAgICBbdGV4dF09XCInVGV4dCBmb3IgYnViYmxlJ1wiXG4gKiAgICAgICAgIFtvcGVuVG9MZWZ0XT1cInRydWVcIlxuICogICAgICAgICBbbWF4V2lkdGhdPVwiJzQwJSdcIj5cbiAqICAgICAgICAgIEFueSB0ZXh0XG4gKiAgICAgIDwvc3QtYnViYmxlLW9uLWVsbGlwc2lzPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1idWJibGUtb24tZWxsaXBzaXMnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtYnViYmxlLW9uLWVsbGlwc2lzLmNvbXBvbmVudC5zY3NzJ10sXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtYnViYmxlLW9uLWVsbGlwc2lzLmNvbXBvbmVudC5odG1sJyxcbiAgIGhvc3Q6IHtcbiAgICAgICdbY2xhc3MubXVsdGktbGluZV0nOiAnbGluZXMgPiAxJyxcbiAgICAgICdbc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wXSc6ICdsaW5lcydcbiAgIH1cbn0pXG5leHBvcnQgY2xhc3MgU3RCdWJibGVPbkVsbGlwc2lzQ29tcG9uZW50IHtcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbdGV4dD1dIFRleHQgb2YgdGhlIGJ1YmJsZSAqL1xuICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbbWluV2lkdGg9XSBtaW4gd2lkdGggZm9yIGJ1YmJsZSAgKi9cbiAgIEBJbnB1dCgpIG1pbldpZHRoPzogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbbWF4V2lkdGg9XSBtYXggd2lkdGggZm9yIGJ1YmJsZSAgKi9cbiAgIEBJbnB1dCgpIG1heFdpZHRoPzogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbbGluZXM9MV0gbnVtYmVyIG9mIGxpbmVzIHdoZXJlIGVsbGlwc2lzIGlzIHBsYWNlZCAgKi9cbiAgIEBJbnB1dCgpIGxpbmVzPzogbnVtYmVyID0gMTtcblxuICAgQFZpZXdDaGlsZCgnYnViYmxlVHJpZ2dlcicsIHsgc3RhdGljOiBmYWxzZSB9KSBidWJibGVUcmlnZ2VyOiBFbGVtZW50UmVmO1xuXG4gICBvZmZzZXQ6IFN0UG9wT2Zmc2V0O1xuICAgdmlzaWJsZTogYm9vbGVhbjtcblxuICAgcHJpdmF0ZSBfb3BlblRvTGVmdDogYm9vbGVhbjtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICB9XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtvcGVuVG9MZWZ0PXRydWVdIHdoZW4gdHJ1ZSwgYnViYmxlIGlzIGRpc3BsYXllZCB3aXRoIHRoZSBhcnJvdyB0byB0aGUgcmlnaHQgICovXG4gICBASW5wdXQoKVxuICAgZ2V0IG9wZW5Ub0xlZnQoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fb3BlblRvTGVmdDtcbiAgIH1cblxuICAgc2V0IG9wZW5Ub0xlZnQoX29wZW5Ub0xlZnQ6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX29wZW5Ub0xlZnQgPSBfb3BlblRvTGVmdDtcbiAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5fb3BlblRvTGVmdCA/IHsgeDogMzgsIHk6IDcgfSA6IHsgeDogMCwgeTogNyB9O1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIG9uU2hvd0J1YmJsZSgpOiB2b2lkIHtcbiAgICAgIGlmIChfZ2V0KHRoaXMuYnViYmxlVHJpZ2dlciwgJ25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCcpIDwgX2dldCh0aGlzLmJ1YmJsZVRyaWdnZXIsICduYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsV2lkdGgnKVxuICAgICAgICAgfHwgX2dldCh0aGlzLmJ1YmJsZVRyaWdnZXIsICduYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0JykgPCBfZ2V0KHRoaXMuYnViYmxlVHJpZ2dlciwgJ25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxIZWlnaHQnKSkge1xuICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25IaWRlQnViYmxlKCk6IHZvaWQge1xuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICB9XG5cbn1cbiJdfQ==