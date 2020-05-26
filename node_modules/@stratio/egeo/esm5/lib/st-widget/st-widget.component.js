/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-widget/st-widget.component.ts
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
import { Component, Input, ElementRef } from '@angular/core';
/**
 * \@description {Component} [Widget]
 *
 * Widget component is a container box for any type of widgets
 *
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-widget title="widget demo" [loading]="isLoading" overwriteLoadingData="Loading..."></st-widget>
 * ```
 *
 */
var StWidgetComponent = /** @class */ (function () {
    function StWidgetComponent(el) {
        this.el = el;
        /**
         * \@Input {bolean} [loading] when true, loading stauts is displayed
         */
        this.loading = false;
        /**
         * \@Input {string} [title] text "loading data" will be overwritten with this parameter
         */
        this.overwriteLoadingData = 'Loading data';
        /**
         * \@Input {boolean} [displaySettingsButton] Boolean to display or hide the settings button
         */
        this.displaySettingsButton = true;
        this._draggable = true;
        this._dragging = false;
    }
    Object.defineProperty(StWidgetComponent.prototype, "widgetId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.el.nativeElement.id ? this.el.nativeElement.id + '-widget' : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StWidgetComponent.prototype, "draggable", {
        /** @Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget */
        get: /**
         * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget
         * @return {?}
         */
        function () {
            return this._draggable;
        },
        set: /**
         * @param {?} draggable
         * @return {?}
         */
        function (draggable) {
            this._draggable = draggable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StWidgetComponent.prototype, "dragging", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dragging;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StWidgetComponent.prototype.updateDragging = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._dragging = value;
    };
    StWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-widget',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"st-widget\" [attr.id]=\"widgetId\" [ngClass]=\"{'dragging': dragging}\" [draggable]=\"draggable && dragging\" (dragend)=\"updateDragging(false)\" >\n   <div class=\"st-widget__header\" >\n      <span *ngIf=\"draggable\" class=\"drag-drop-action\" (mousedown)=\"updateDragging(true)\" (mouseup)=\"updateDragging(false)\">\n         <i class=\"icon-drag\"></i>\n      </span>\n      <span class=\"st-widget__title\">{{title}}</span>\n      <span *ngIf=\"displaySettingsButton\" class=\"setting-action\">\n         <i class=\"icon-settings2\"></i>\n      </span>\n   </div>\n   <div class=\"st-widget__body\">\n      <div class=\"loading-status\" *ngIf=\"loading\">\n         <st-progress-bar class=\"progress-bar\"></st-progress-bar>\n         <span class=\"loading-status-text\">{{overwriteLoadingData}}</span>\n      </div>\n      <div class=\"st-widget__content\" *ngIf=\"!loading\">\n         <ng-content ></ng-content>\n      </div>\n   </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";:host{display:block;padding:0;height:100%;width:100%}:host .st-widget{height:100%;width:100%;border-radius:4px}:host .st-widget__header{height:50px;padding:15px 19.5px}:host .st-widget__header .drag-drop-action{cursor:move}:host .st-widget__header .drag-drop-action .icon-actions{display:inline}:host .st-widget__header .drag-drop-action .icon-actions:last-of-type{margin-left:-13px}:host .st-widget__header .setting-action{cursor:pointer;float:right;visibility:hidden}:host .st-widget__title{text-transform:capitalize}:host .st-widget__body{position:relative;width:100%;height:calc(100% - 50px);padding:30px}:host .st-widget__body .loading-status{align-items:center;background-color:#f3f6f8;color:#a0a0a0;display:flex;font-weight:400;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}:host .st-widget__body .loading-status .progress-bar{position:absolute;top:0;left:0}:host .st-widget__content{height:100%;width:100%;overflow:hidden}:host .st-widget:hover .setting-action{visibility:visible}"]
                }] }
    ];
    /** @nocollapse */
    StWidgetComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StWidgetComponent.propDecorators = {
        title: [{ type: Input }],
        loading: [{ type: Input }],
        overwriteLoadingData: [{ type: Input }],
        displaySettingsButton: [{ type: Input }],
        draggable: [{ type: Input }]
    };
    return StWidgetComponent;
}());
export { StWidgetComponent };
if (false) {
    /**
     * \@Input {string} [title] title will be displayed in the widget header
     * @type {?}
     */
    StWidgetComponent.prototype.title;
    /**
     * \@Input {bolean} [loading] when true, loading stauts is displayed
     * @type {?}
     */
    StWidgetComponent.prototype.loading;
    /**
     * \@Input {string} [title] text "loading data" will be overwritten with this parameter
     * @type {?}
     */
    StWidgetComponent.prototype.overwriteLoadingData;
    /**
     * \@Input {boolean} [displaySettingsButton] Boolean to display or hide the settings button
     * @type {?}
     */
    StWidgetComponent.prototype.displaySettingsButton;
    /**
     * @type {?}
     * @private
     */
    StWidgetComponent.prototype._draggable;
    /**
     * @type {?}
     * @private
     */
    StWidgetComponent.prototype._dragging;
    /**
     * @type {?}
     * @private
     */
    StWidgetComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtd2lkZ2V0L3N0LXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBbUI3RDtJQW1CRywyQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7Ozs7UUFUekIsWUFBTyxHQUFZLEtBQUssQ0FBQzs7OztRQUV6Qix5QkFBb0IsR0FBVyxjQUFjLENBQUM7Ozs7UUFFOUMsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBRXZDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUduQyxDQUFDO0lBRUQsc0JBQUksdUNBQVE7Ozs7UUFBWjtZQUNHLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDdEYsQ0FBQzs7O09BQUE7SUFHRCxzQkFDVyx3Q0FBUztRQUZwQix3RkFBd0Y7Ozs7O1FBQ3hGO1lBRUcsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzFCLENBQUM7Ozs7O1FBQ0QsVUFBcUIsU0FBa0I7WUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQzs7O09BSEE7SUFLRCxzQkFBVyx1Q0FBUTs7OztRQUFuQjtZQUNHLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7Ozs7SUFFTSwwQ0FBYzs7OztJQUFyQixVQUFzQixLQUFjO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzFCLENBQUM7O2dCQXpDSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDY0Q0FBdUM7O2lCQUV6Qzs7OztnQkF2QjBCLFVBQVU7Ozt3QkEyQmpDLEtBQUs7MEJBRUwsS0FBSzt1Q0FFTCxLQUFLO3dDQUVMLEtBQUs7NEJBYUwsS0FBSzs7SUFpQlQsd0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXRDWSxpQkFBaUI7Ozs7OztJQUUzQixrQ0FBdUI7Ozs7O0lBRXZCLG9DQUFrQzs7Ozs7SUFFbEMsaURBQXVEOzs7OztJQUV2RCxrREFBK0M7Ozs7O0lBRS9DLHVDQUFtQzs7Ozs7SUFDbkMsc0NBQW1DOzs7OztJQUV2QiwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RFZ2VvLCBTdFJlcXVpcmVkIH0gZnJvbSAnLi8uLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtXaWRnZXRdXG4gKlxuICogV2lkZ2V0IGNvbXBvbmVudCBpcyBhIGNvbnRhaW5lciBib3ggZm9yIGFueSB0eXBlIG9mIHdpZGdldHNcbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC13aWRnZXQgdGl0bGU9XCJ3aWRnZXQgZGVtb1wiIFtsb2FkaW5nXT1cImlzTG9hZGluZ1wiIG92ZXJ3cml0ZUxvYWRpbmdEYXRhPVwiTG9hZGluZy4uLlwiPjwvc3Qtd2lkZ2V0PlxuICogYGBgXG4gKlxuICovXG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC13aWRnZXQnLFxuICAgdGVtcGxhdGVVcmw6ICdzdC13aWRnZXQuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJ3N0LXdpZGdldC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU3RXaWRnZXRDb21wb25lbnQge1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbdGl0bGVdIHRpdGxlIHdpbGwgYmUgZGlzcGxheWVkIGluIHRoZSB3aWRnZXQgaGVhZGVyICovXG4gICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICAgLyoqIEBJbnB1dCB7Ym9sZWFufSBbbG9hZGluZ10gd2hlbiB0cnVlLCBsb2FkaW5nIHN0YXV0cyBpcyBkaXNwbGF5ZWQgICAgKi9cbiAgIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3RpdGxlXSB0ZXh0IFwibG9hZGluZyBkYXRhXCIgd2lsbCBiZSBvdmVyd3JpdHRlbiB3aXRoIHRoaXMgcGFyYW1ldGVyICovXG4gICBASW5wdXQoKSBvdmVyd3JpdGVMb2FkaW5nRGF0YTogc3RyaW5nID0gJ0xvYWRpbmcgZGF0YSc7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbZGlzcGxheVNldHRpbmdzQnV0dG9uXSBCb29sZWFuIHRvIGRpc3BsYXkgb3IgaGlkZSB0aGUgc2V0dGluZ3MgYnV0dG9uICovXG4gICBASW5wdXQoKSBkaXNwbGF5U2V0dGluZ3NCdXR0b246IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcml2YXRlIF9kcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgcHJpdmF0ZSBfZHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgfVxuXG4gICBnZXQgd2lkZ2V0SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkID8gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkICsgJy13aWRnZXQnIDogdW5kZWZpbmVkO1xuICAgfVxuXG4gICAvKiogQElucHV0IHtib29sZWFufSBbZHJhZ2dhYmxlPXRydWVdIEJvb2xlYW4gdG8gZW5hYmxlIG9yIGRpc2FibGUgZHJhZ2dpbmcgb2Ygd2lkZ2V0ICovXG4gICBASW5wdXQoKVxuICAgcHVibGljIGdldCBkcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZHJhZ2dhYmxlO1xuICAgfVxuICAgcHVibGljIHNldCBkcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKSB7XG4gICAgICB0aGlzLl9kcmFnZ2FibGUgPSBkcmFnZ2FibGU7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXQgZHJhZ2dpbmcoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fZHJhZ2dpbmc7XG4gICB9XG5cbiAgIHB1YmxpYyB1cGRhdGVEcmFnZ2luZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB2YWx1ZTtcbiAgIH1cblxuXG59XG4iXX0=