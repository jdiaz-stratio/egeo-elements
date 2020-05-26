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
export class StWidgetComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    /**
     * @return {?}
     */
    get widgetId() {
        return this.el.nativeElement.id ? this.el.nativeElement.id + '-widget' : undefined;
    }
    /**
     * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget
     * @return {?}
     */
    get draggable() {
        return this._draggable;
    }
    /**
     * @param {?} draggable
     * @return {?}
     */
    set draggable(draggable) {
        this._draggable = draggable;
    }
    /**
     * @return {?}
     */
    get dragging() {
        return this._dragging;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateDragging(value) {
        this._dragging = value;
    }
}
StWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-widget',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"st-widget\" [attr.id]=\"widgetId\" [ngClass]=\"{'dragging': dragging}\" [draggable]=\"draggable && dragging\" (dragend)=\"updateDragging(false)\" >\n   <div class=\"st-widget__header\" >\n      <span *ngIf=\"draggable\" class=\"drag-drop-action\" (mousedown)=\"updateDragging(true)\" (mouseup)=\"updateDragging(false)\">\n         <i class=\"icon-drag\"></i>\n      </span>\n      <span class=\"st-widget__title\">{{title}}</span>\n      <span *ngIf=\"displaySettingsButton\" class=\"setting-action\">\n         <i class=\"icon-settings2\"></i>\n      </span>\n   </div>\n   <div class=\"st-widget__body\">\n      <div class=\"loading-status\" *ngIf=\"loading\">\n         <st-progress-bar class=\"progress-bar\"></st-progress-bar>\n         <span class=\"loading-status-text\">{{overwriteLoadingData}}</span>\n      </div>\n      <div class=\"st-widget__content\" *ngIf=\"!loading\">\n         <ng-content ></ng-content>\n      </div>\n   </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";:host{display:block;padding:0;height:100%;width:100%}:host .st-widget{height:100%;width:100%;border-radius:4px}:host .st-widget__header{height:50px;padding:15px 19.5px}:host .st-widget__header .drag-drop-action{cursor:move}:host .st-widget__header .drag-drop-action .icon-actions{display:inline}:host .st-widget__header .drag-drop-action .icon-actions:last-of-type{margin-left:-13px}:host .st-widget__header .setting-action{cursor:pointer;float:right;visibility:hidden}:host .st-widget__title{text-transform:capitalize}:host .st-widget__body{position:relative;width:100%;height:calc(100% - 50px);padding:30px}:host .st-widget__body .loading-status{align-items:center;background-color:#f3f6f8;color:#a0a0a0;display:flex;font-weight:400;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}:host .st-widget__body .loading-status .progress-bar{position:absolute;top:0;left:0}:host .st-widget__content{height:100%;width:100%;overflow:hidden}:host .st-widget:hover .setting-action{visibility:visible}"]
            }] }
];
/** @nocollapse */
StWidgetComponent.ctorParameters = () => [
    { type: ElementRef }
];
StWidgetComponent.propDecorators = {
    title: [{ type: Input }],
    loading: [{ type: Input }],
    overwriteLoadingData: [{ type: Input }],
    displaySettingsButton: [{ type: Input }],
    draggable: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3Qtd2lkZ2V0L3N0LXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBeUI3RCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBYTNCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzs7O1FBVHpCLFlBQU8sR0FBWSxLQUFLLENBQUM7Ozs7UUFFekIseUJBQW9CLEdBQVcsY0FBYyxDQUFDOzs7O1FBRTlDLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUV2QyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFHbkMsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEYsQ0FBQzs7Ozs7SUFHRCxJQUNXLFNBQVM7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBQ0QsSUFBVyxTQUFTLENBQUMsU0FBa0I7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELElBQVcsUUFBUTtRQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsS0FBYztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7WUF6Q0gsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw2NENBQXVDOzthQUV6Qzs7OztZQXZCMEIsVUFBVTs7O29CQTJCakMsS0FBSztzQkFFTCxLQUFLO21DQUVMLEtBQUs7b0NBRUwsS0FBSzt3QkFhTCxLQUFLOzs7Ozs7O0lBbkJOLGtDQUF1Qjs7Ozs7SUFFdkIsb0NBQWtDOzs7OztJQUVsQyxpREFBdUQ7Ozs7O0lBRXZELGtEQUErQzs7Ozs7SUFFL0MsdUNBQW1DOzs7OztJQUNuQyxzQ0FBbUM7Ozs7O0lBRXZCLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1dpZGdldF1cbiAqXG4gKiBXaWRnZXQgY29tcG9uZW50IGlzIGEgY29udGFpbmVyIGJveCBmb3IgYW55IHR5cGUgb2Ygd2lkZ2V0c1xuICpcbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXdpZGdldCB0aXRsZT1cIndpZGdldCBkZW1vXCIgW2xvYWRpbmddPVwiaXNMb2FkaW5nXCIgb3ZlcndyaXRlTG9hZGluZ0RhdGE9XCJMb2FkaW5nLi4uXCI+PC9zdC13aWRnZXQ+XG4gKiBgYGBcbiAqXG4gKi9cblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXdpZGdldCcsXG4gICB0ZW1wbGF0ZVVybDogJ3N0LXdpZGdldC5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnc3Qtd2lkZ2V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdFdpZGdldENvbXBvbmVudCB7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFt0aXRsZV0gdGl0bGUgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gdGhlIHdpZGdldCBoZWFkZXIgKi9cbiAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtib2xlYW59IFtsb2FkaW5nXSB3aGVuIHRydWUsIGxvYWRpbmcgc3RhdXRzIGlzIGRpc3BsYXllZCAgICAqL1xuICAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbdGl0bGVdIHRleHQgXCJsb2FkaW5nIGRhdGFcIiB3aWxsIGJlIG92ZXJ3cml0dGVuIHdpdGggdGhpcyBwYXJhbWV0ZXIgKi9cbiAgIEBJbnB1dCgpIG92ZXJ3cml0ZUxvYWRpbmdEYXRhOiBzdHJpbmcgPSAnTG9hZGluZyBkYXRhJztcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtkaXNwbGF5U2V0dGluZ3NCdXR0b25dIEJvb2xlYW4gdG8gZGlzcGxheSBvciBoaWRlIHRoZSBzZXR0aW5ncyBidXR0b24gKi9cbiAgIEBJbnB1dCgpIGRpc3BsYXlTZXR0aW5nc0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgIHByaXZhdGUgX2RyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gICBwcml2YXRlIF9kcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICB9XG5cbiAgIGdldCB3aWRnZXRJZCgpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQgPyB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQgKyAnLXdpZGdldCcgOiB1bmRlZmluZWQ7XG4gICB9XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtkcmFnZ2FibGU9dHJ1ZV0gQm9vbGVhbiB0byBlbmFibGUgb3IgZGlzYWJsZSBkcmFnZ2luZyBvZiB3aWRnZXQgKi9cbiAgIEBJbnB1dCgpXG4gICBwdWJsaWMgZ2V0IGRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kcmFnZ2FibGU7XG4gICB9XG4gICBwdWJsaWMgc2V0IGRyYWdnYWJsZShkcmFnZ2FibGU6IGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuX2RyYWdnYWJsZSA9IGRyYWdnYWJsZTtcbiAgIH1cblxuICAgcHVibGljIGdldCBkcmFnZ2luZygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9kcmFnZ2luZztcbiAgIH1cblxuICAgcHVibGljIHVwZGF0ZURyYWdnaW5nKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICB0aGlzLl9kcmFnZ2luZyA9IHZhbHVlO1xuICAgfVxuXG5cbn1cbiJdfQ==