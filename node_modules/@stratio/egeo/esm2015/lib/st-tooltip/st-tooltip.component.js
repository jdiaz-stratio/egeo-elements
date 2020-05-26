/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-tooltip/st-tooltip.component.ts
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
import { Component, ElementRef, HostBinding, HostListener, Input, ChangeDetectorRef } from '@angular/core';
export class StTooltipComponent {
    /**
     * @param {?} _el
     * @param {?} _cd
     */
    constructor(_el, _cd) {
        this._el = _el;
        this._cd = _cd;
        this._onClick = this._onClick.bind(this);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = value;
        if (value) {
            this._el.nativeElement.setAttribute('title', value);
        }
        else {
            this._el.nativeElement.removeAttribute('title');
        }
    }
    /**
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.title = this._el.nativeElement.title;
        this._checkTooltipState();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        document.removeEventListener('click', this._onClick);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._el) {
            this._checkTooltipState();
        }
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.showOnClick && this.title) {
            this.classTooltipOn = true;
            document.addEventListener('click', this._onClick);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _checkTooltipState() {
        this.classTooltip = this.title && this.title.length && !this.showOnClick;
        this.classTooltipOn = false;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _onClick(event) {
        if (!this._el.nativeElement.contains(event.target)) {
            this.classTooltipOn = false;
            document.removeEventListener('click', this._onClick);
            this._cd.markForCheck();
        }
    }
}
StTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: '[st-tooltip]',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<span title=\"\"><ng-content></ng-content></span>\n",
                styles: ["@charset \"UTF-8\";:host.st-tooltip,:host.st-tooltip-on{position:relative}:host.st-tooltip-on:before,:host.st-tooltip:before{content:attr(title)}:host.st-tooltip-on:after,:host.st-tooltip:after{content:\" \"}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:after,:host.st-tooltip:before{pointer-events:none;position:absolute}:host.st-tooltip:after,:host.st-tooltip:before{opacity:0;visibility:hidden}:host.st-tooltip-on:after,:host.st-tooltip-on:before,:host.st-tooltip:hover:after,:host.st-tooltip:hover:before{opacity:1;visibility:visible}"]
            }] }
];
/** @nocollapse */
StTooltipComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
StTooltipComponent.propDecorators = {
    classTooltip: [{ type: HostBinding, args: ['class.st-tooltip',] }],
    classTooltipOn: [{ type: HostBinding, args: ['class.st-tooltip-on',] }],
    showOnClick: [{ type: Input }],
    title: [{ type: Input, args: ['attr.title',] }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    StTooltipComponent.prototype.classTooltip;
    /** @type {?} */
    StTooltipComponent.prototype.classTooltipOn;
    /** @type {?} */
    StTooltipComponent.prototype.showOnClick;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._title;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StTooltipComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXRvb2x0aXAvc3QtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLGlCQUFpQixFQUF3QixNQUFNLGVBQWUsQ0FBQztBQU9wSixNQUFNLE9BQU8sa0JBQWtCOzs7OztJQW9CNUIsWUFBb0IsR0FBZSxFQUN4QixHQUFzQjtRQURiLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDeEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQWhCRCxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQzs7OztJQUNELElBQUksS0FBSztRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDOzs7O0lBT0QsUUFBUTtRQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1IsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELFdBQVc7UUFDUixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM1QjtJQUNKLENBQUM7Ozs7SUFFc0IsT0FBTztRQUMzQixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRDtJQUNKLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDekUsSUFBSSxDQUFDLGNBQWMsR0FBSSxLQUFLLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLEtBQVk7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQjtJQUNKLENBQUM7OztZQS9ESCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGNBQWM7Z0JBRXhCLHFmQUEwQzs7YUFDNUM7Ozs7WUFObUIsVUFBVTtZQUF1RCxpQkFBaUI7OzsyQkFTbEcsV0FBVyxTQUFDLGtCQUFrQjs2QkFDOUIsV0FBVyxTQUFDLHFCQUFxQjswQkFFakMsS0FBSztvQkFFTCxLQUFLLFNBQUMsWUFBWTtzQkFpQ2xCLFlBQVksU0FBQyxPQUFPOzs7O0lBdENyQiwwQ0FBdUQ7O0lBQ3ZELDRDQUE0RDs7SUFFNUQseUNBQThCOzs7OztJQUM5QixvQ0FBdUI7Ozs7O0lBY1gsaUNBQXVCOzs7OztJQUNoQyxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ1tzdC10b29sdGlwXScsXG4gICBzdHlsZVVybHM6IFsnLi9zdC10b29sdGlwLmNvbXBvbmVudC5zY3NzJ10sXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtdG9vbHRpcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3RUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cbiAgIEBIb3N0QmluZGluZygnY2xhc3Muc3QtdG9vbHRpcCcpIGNsYXNzVG9vbHRpcDogYm9vbGVhbjtcbiAgIEBIb3N0QmluZGluZygnY2xhc3Muc3QtdG9vbHRpcC1vbicpIGNsYXNzVG9vbHRpcE9uOiBib29sZWFuO1xuXG4gICBASW5wdXQoKSBzaG93T25DbGljazogYm9vbGVhbjtcbiAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XG4gICBASW5wdXQoJ2F0dHIudGl0bGUnKVxuICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgICAgIH1cbiAgIH1cbiAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgfVxuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgdGhpcy5fb25DbGljayA9IHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKTtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC50aXRsZTtcbiAgICAgIHRoaXMuX2NoZWNrVG9vbHRpcFN0YXRlKCk7XG4gICB9XG5cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgIH1cblxuICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fZWwpIHtcbiAgICAgICAgIHRoaXMuX2NoZWNrVG9vbHRpcFN0YXRlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25DbGljaygpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnNob3dPbkNsaWNrICYmIHRoaXMudGl0bGUpIHtcbiAgICAgICAgIHRoaXMuY2xhc3NUb29sdGlwT24gPSB0cnVlO1xuICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBfY2hlY2tUb29sdGlwU3RhdGUoKTogdm9pZCB7XG4gICAgICB0aGlzLmNsYXNzVG9vbHRpcCA9IHRoaXMudGl0bGUgJiYgdGhpcy50aXRsZS5sZW5ndGggJiYgIXRoaXMuc2hvd09uQ2xpY2s7XG4gICAgICB0aGlzLmNsYXNzVG9vbHRpcE9uID0gIGZhbHNlO1xuICAgfVxuXG4gICBwcml2YXRlIF9vbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgIHRoaXMuY2xhc3NUb29sdGlwT24gPSBmYWxzZTtcbiAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljayk7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==