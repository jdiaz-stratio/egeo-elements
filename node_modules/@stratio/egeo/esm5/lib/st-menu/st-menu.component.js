/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-menu/st-menu.component.ts
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
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StMenuPosition } from './st-menu.model';
/**
 * \@description {Component} Menu
 *
 * This components shows a dropdown menu with nested submenus
 *
 * \@model
 *
 *   [Menu model] {./st-menu.model.ts#StMenuModel}
 *   [Menu status] {./st-menu.model.ts#StMenuStatus}
 *   [Menu position] {./st-menu.model.ts#StMenuPosition}
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-menu
 *       qaTag="menu-example"
 *       [menuOptions]="options"
 *       [dynamicHeight]="true"
 *       (selectedOption)="onSelectMenuOption(event)">
 *    </st-menu>
 * ```
 * @template T
 */
var StMenuComponent = /** @class */ (function () {
    function StMenuComponent(_cd) {
        this._cd = _cd;
        /**
         * \@input {StMenuPosition} current menu position: left | right
         */
        this.position = StMenuPosition.right;
        /**
         * \@input {string} search input custom label
         */
        this.searchLabel = 'Search';
        /**
         * \@input {boolean} shows menu dropdown animation
         */
        this.animate = true;
        /**
         * \@input {boolean} disable menu toggle
         */
        this.disabled = false;
        /**
         * \@output {StMenuModel<T>} [selectedOption=''] Notify the selected menu option
         */
        this.selectedOption = new EventEmitter();
        /**
         * \@output {string} [searchChange=''] Notify when the search input value changes
         */
        this.searchChange = new EventEmitter();
        this.showMenu = false;
    }
    /**
     * @return {?}
     */
    StMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.search) {
            this.searchFormControl = new FormControl('');
            this._formControlSubscription = this.searchFormControl.valueChanges.subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.searchChange.emit(value);
            }));
        }
    };
    /**
     * @return {?}
     */
    StMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._formControlSubscription) {
            this._formControlSubscription.unsubscribe();
        }
    };
    /**
     * Toggle menu activation
     * @param event
     */
    /**
     * Toggle menu activation
     * @param {?} event
     * @return {?}
     */
    StMenuComponent.prototype.activateMenu = /**
     * Toggle menu activation
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.showMenu) {
            this.hideMenu();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.showMenu = true;
                _this._cd.markForCheck();
            }));
        }
    };
    /**
     * Emits the selected menu option from childs
     * @param event: StMenuModel<T>
     */
    /**
     * Emits the selected menu option from childs
     * @param {?} event
     * @return {?}
     */
    StMenuComponent.prototype.selectedMenuOption = /**
     * Emits the selected menu option from childs
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectedOption.emit(event);
        this.hideMenu();
    };
    /**
     * Hides the menu and reset the search input value if it's enabled
     */
    /**
     * Hides the menu and reset the search input value if it's enabled
     * @return {?}
     */
    StMenuComponent.prototype.hideMenu = /**
     * Hides the menu and reset the search input value if it's enabled
     * @return {?}
     */
    function () {
        this.showMenu = false;
        if (this.searchFormControl) {
            this.searchFormControl.setValue('');
        }
        this._cd.markForCheck();
    };
    StMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-menu',
                    template: "<div class=\"st-menu\" [ngClass]=\"{'st-menu--disabled': disabled}\">\n  <div class=\"st-menu__action\">\n    <div class=\"st-menu__link\"\n      [ngClass]=\"{'st-menu__button--disabled': disabled}\"\n      [id]=\"qaTag\"\n      (click)=\"!disabled && activateMenu($event)\" >\n      <ng-content></ng-content>\n    </div>\n    <div class=\"st-menu__options\"\n      *ngIf=\"showMenu\"\n      clickOutside\n      (clickOutside)=\"hideMenu()\"\n      [ngClass]=\"{'st-menu__options--left': position === 'left'}\">\n      <st-menu-options\n        [searchFormControl]=\"searchFormControl\"\n        [searchLabel]=\"searchLabel\"\n        [menuOptions]=\"menuOptions\"\n        [animate]=\"animate\"\n        [dynamicHeight]=\"dynamicHeight\"\n        [activeOption]=\"activeOption\"\n        [position]=\"position\"\n        [marginTop]=\"marginTop\"\n        [qaTag]=\"qaTag\"\n        (selectedOption)=\"selectedMenuOption($event)\"></st-menu-options>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:inline-block}.st-menu__action{position:relative;display:inline-block}.st-menu__link{cursor:pointer;display:inline-block;position:relative}.st-menu__options{position:absolute;z-index:7500;-webkit-transform:translate3d(0,0,0);top:0;height:100%;margin-top:5px}.st-menu__options--left{right:0}.st-menu--disabled{cursor:not-allowed}.st-menu__button--disabled{pointer-events:none}"]
                }] }
    ];
    /** @nocollapse */
    StMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StMenuComponent.propDecorators = {
        qaTag: [{ type: Input }],
        menuOptions: [{ type: Input }],
        activeOption: [{ type: Input }],
        position: [{ type: Input }],
        search: [{ type: Input }],
        searchLabel: [{ type: Input }],
        dynamicHeight: [{ type: Input }],
        marginTop: [{ type: Input }],
        animate: [{ type: Input }],
        disabled: [{ type: Input }],
        selectedOption: [{ type: Output }],
        searchChange: [{ type: Output }]
    };
    return StMenuComponent;
}());
export { StMenuComponent };
if (false) {
    /**
     * \@input {string} [qaTag=''] For set id for tests
     * @type {?}
     */
    StMenuComponent.prototype.qaTag;
    /**
     * \@input {StMenuModel<T>[]} list of menu items to show
     * @type {?}
     */
    StMenuComponent.prototype.menuOptions;
    /**
     * \@input {any} current selected option
     * @type {?}
     */
    StMenuComponent.prototype.activeOption;
    /**
     * \@input {StMenuPosition} current menu position: left | right
     * @type {?}
     */
    StMenuComponent.prototype.position;
    /**
     * \@input {boolean} show search input
     * @type {?}
     */
    StMenuComponent.prototype.search;
    /**
     * \@input {string} search input custom label
     * @type {?}
     */
    StMenuComponent.prototype.searchLabel;
    /**
     * \@input {boolean} Show menu in full height mode
     * @type {?}
     */
    StMenuComponent.prototype.dynamicHeight;
    /**
     * \@input {number} adjust menu options position
     * @type {?}
     */
    StMenuComponent.prototype.marginTop;
    /**
     * \@input {boolean} shows menu dropdown animation
     * @type {?}
     */
    StMenuComponent.prototype.animate;
    /**
     * \@input {boolean} disable menu toggle
     * @type {?}
     */
    StMenuComponent.prototype.disabled;
    /**
     * \@output {StMenuModel<T>} [selectedOption=''] Notify the selected menu option
     * @type {?}
     */
    StMenuComponent.prototype.selectedOption;
    /**
     * \@output {string} [searchChange=''] Notify when the search input value changes
     * @type {?}
     */
    StMenuComponent.prototype.searchChange;
    /** @type {?} */
    StMenuComponent.prototype.showMenu;
    /** @type {?} */
    StMenuComponent.prototype.searchFormControl;
    /**
     * @type {?}
     * @private
     */
    StMenuComponent.prototype._formControlSubscription;
    /**
     * @type {?}
     * @private
     */
    StMenuComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LW1lbnUvc3QtbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUNKLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFDOUMsdUJBQXVCLEVBQWEsaUJBQWlCLEVBQ3ZELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc3QyxPQUFPLEVBQWUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEI5RDtJQXVDRyx5QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUF4QmpDLGFBQVEsR0FBbUIsY0FBYyxDQUFDLEtBQUssQ0FBQzs7OztRQUloRCxnQkFBVyxHQUFXLFFBQVEsQ0FBQzs7OztRQU0vQixZQUFPLEdBQVksSUFBSSxDQUFDOzs7O1FBRXhCLGFBQVEsR0FBWSxLQUFLLENBQUM7Ozs7UUFHekIsbUJBQWMsR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7Ozs7UUFFbEYsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVuRSxhQUFRLEdBQVksS0FBSyxDQUFDO0lBS2EsQ0FBQzs7OztJQUUvQyxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFPQztRQU5FLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNoRixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUMsQ0FBQztTQUNMO0lBQ0osQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNHLElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHNDQUFZOzs7OztJQUFuQixVQUFvQixLQUFZO1FBQWhDLGlCQVNDO1FBUkUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQjthQUFNO1lBQ0osVUFBVTs7O1lBQUM7Z0JBQ1IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7U0FDTDtJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLDRDQUFrQjs7Ozs7SUFBekIsVUFBMEIsS0FBcUI7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSSxrQ0FBUTs7OztJQUFmO1FBQ0csSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBekZILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsU0FBUztvQkFDbkIsaytCQUF1QztvQkFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNqRDs7OztnQkFwQ3NDLGlCQUFpQjs7O3dCQXdDcEQsS0FBSzs4QkFFTCxLQUFLOytCQUVMLEtBQUs7MkJBRUwsS0FBSzt5QkFFTCxLQUFLOzhCQUVMLEtBQUs7Z0NBRUwsS0FBSzs0QkFFTCxLQUFLOzBCQUVMLEtBQUs7MkJBRUwsS0FBSztpQ0FHTCxNQUFNOytCQUVOLE1BQU07O0lBMERWLHNCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0FwRlksZUFBZTs7Ozs7O0lBR3pCLGdDQUF1Qjs7Ozs7SUFFdkIsc0NBQXVDOzs7OztJQUV2Qyx1Q0FBMkI7Ozs7O0lBRTNCLG1DQUF5RDs7Ozs7SUFFekQsaUNBQXlCOzs7OztJQUV6QixzQ0FBd0M7Ozs7O0lBRXhDLHdDQUFnQzs7Ozs7SUFFaEMsb0NBQTJCOzs7OztJQUUzQixrQ0FBaUM7Ozs7O0lBRWpDLG1DQUFtQzs7Ozs7SUFHbkMseUNBQTRGOzs7OztJQUU1Rix1Q0FBMEU7O0lBRTFFLG1DQUFpQzs7SUFDakMsNENBQXNDOzs7OztJQUV0QyxtREFBK0M7Ozs7O0lBRW5DLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQge1xuICAgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRWxlbWVudFJlZixcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU3RNZW51TW9kZWwsIFN0TWVudVBvc2l0aW9uIH0gZnJvbSAnLi9zdC1tZW51Lm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gTWVudVxuICpcbiAqIFRoaXMgY29tcG9uZW50cyBzaG93cyBhIGRyb3Bkb3duIG1lbnUgd2l0aCBuZXN0ZWQgc3VibWVudXNcbiAqXG4gKiAgQG1vZGVsXG4gKlxuICogICBbTWVudSBtb2RlbF0gey4vc3QtbWVudS5tb2RlbC50cyNTdE1lbnVNb2RlbH1cbiAqICAgW01lbnUgc3RhdHVzXSB7Li9zdC1tZW51Lm1vZGVsLnRzI1N0TWVudVN0YXR1c31cbiAqICAgW01lbnUgcG9zaXRpb25dIHsuL3N0LW1lbnUubW9kZWwudHMjU3RNZW51UG9zaXRpb259XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgIDxzdC1tZW51XG4gKiAgICAgICBxYVRhZz1cIm1lbnUtZXhhbXBsZVwiXG4gKiAgICAgICBbbWVudU9wdGlvbnNdPVwib3B0aW9uc1wiXG4gKiAgICAgICBbZHluYW1pY0hlaWdodF09XCJ0cnVlXCJcbiAqICAgICAgIChzZWxlY3RlZE9wdGlvbik9XCJvblNlbGVjdE1lbnVPcHRpb24oZXZlbnQpXCI+XG4gKiAgICA8L3N0LW1lbnU+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LW1lbnUnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtbWVudS5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RNZW51Q29tcG9uZW50PFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuXG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gRm9yIHNldCBpZCBmb3IgdGVzdHMgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKiogQGlucHV0IHtTdE1lbnVNb2RlbDxUPltdfSBsaXN0IG9mIG1lbnUgaXRlbXMgdG8gc2hvdyAqL1xuICAgQElucHV0KCkgbWVudU9wdGlvbnM6IFN0TWVudU1vZGVsPFQ+W107XG4gICAvKiogQGlucHV0IHthbnl9IGN1cnJlbnQgc2VsZWN0ZWQgb3B0aW9uICovXG4gICBASW5wdXQoKSBhY3RpdmVPcHRpb246IGFueTtcbiAgIC8qKiBAaW5wdXQge1N0TWVudVBvc2l0aW9ufSBjdXJyZW50IG1lbnUgcG9zaXRpb246IGxlZnQgfCByaWdodCAqL1xuICAgQElucHV0KCkgcG9zaXRpb246IFN0TWVudVBvc2l0aW9uID0gU3RNZW51UG9zaXRpb24ucmlnaHQ7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBzaG93IHNlYXJjaCBpbnB1dCAqL1xuICAgQElucHV0KCkgc2VhcmNoOiBib29sZWFuO1xuICAgLyoqIEBpbnB1dCB7c3RyaW5nfSBzZWFyY2ggaW5wdXQgY3VzdG9tIGxhYmVsICovXG4gICBASW5wdXQoKSBzZWFyY2hMYWJlbDogc3RyaW5nID0gJ1NlYXJjaCc7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBTaG93IG1lbnUgaW4gZnVsbCBoZWlnaHQgbW9kZSAqL1xuICAgQElucHV0KCkgZHluYW1pY0hlaWdodDogYm9vbGVhbjtcbiAgIC8qKiBAaW5wdXQge251bWJlcn0gYWRqdXN0IG1lbnUgb3B0aW9ucyBwb3NpdGlvbiAqL1xuICAgQElucHV0KCkgbWFyZ2luVG9wOiBudW1iZXI7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBzaG93cyBtZW51IGRyb3Bkb3duIGFuaW1hdGlvbiAqL1xuICAgQElucHV0KCkgYW5pbWF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICAvKiogQGlucHV0IHtib29sZWFufSBkaXNhYmxlIG1lbnUgdG9nZ2xlICovXG4gICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAvKiogQG91dHB1dCB7U3RNZW51TW9kZWw8VD59IFtzZWxlY3RlZE9wdGlvbj0nJ10gTm90aWZ5IHRoZSBzZWxlY3RlZCBtZW51IG9wdGlvbiAqL1xuICAgQE91dHB1dCgpIHNlbGVjdGVkT3B0aW9uOiBFdmVudEVtaXR0ZXI8U3RNZW51TW9kZWw8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdE1lbnVNb2RlbDxUPj4oKTtcbiAgIC8qKiBAb3V0cHV0IHtzdHJpbmd9IFtzZWFyY2hDaGFuZ2U9JyddIE5vdGlmeSB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgdmFsdWUgY2hhbmdlcyAqL1xuICAgQE91dHB1dCgpIHNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgcHVibGljIHNob3dNZW51OiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgc2VhcmNoRm9ybUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gICBwcml2YXRlIF9mb3JtQ29udHJvbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaCkge1xuICAgICAgICAgdGhpcy5zZWFyY2hGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gICAgICAgICB0aGlzLl9mb3JtQ29udHJvbFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VhcmNoRm9ybUNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaENoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLl9mb3JtQ29udHJvbFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgdGhpcy5fZm9ybUNvbnRyb2xTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLyoqXG4gICAgKiBUb2dnbGUgbWVudSBhY3RpdmF0aW9uXG4gICAgKiBAcGFyYW0gZXZlbnRcbiAgICAqL1xuICAgcHVibGljIGFjdGl2YXRlTWVudShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnNob3dNZW51KSB7XG4gICAgICAgICB0aGlzLmhpZGVNZW51KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dNZW51ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgfSk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogRW1pdHMgdGhlIHNlbGVjdGVkIG1lbnUgb3B0aW9uIGZyb20gY2hpbGRzXG4gICAgKiBAcGFyYW0gZXZlbnQ6IFN0TWVudU1vZGVsPFQ+XG4gICAgKi9cbiAgIHB1YmxpYyBzZWxlY3RlZE1lbnVPcHRpb24oZXZlbnQ6IFN0TWVudU1vZGVsPFQ+KTogdm9pZCB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uLmVtaXQoZXZlbnQpO1xuICAgICAgdGhpcy5oaWRlTWVudSgpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEhpZGVzIHRoZSBtZW51IGFuZCByZXNldCB0aGUgc2VhcmNoIGlucHV0IHZhbHVlIGlmIGl0J3MgZW5hYmxlZFxuICAgICovXG4gICBwdWJsaWMgaGlkZU1lbnUoKTogdm9pZCB7XG4gICAgICB0aGlzLnNob3dNZW51ID0gZmFsc2U7XG4gICAgICBpZiAodGhpcy5zZWFyY2hGb3JtQ29udHJvbCkge1xuICAgICAgICAgdGhpcy5zZWFyY2hGb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cbn1cbiJdfQ==