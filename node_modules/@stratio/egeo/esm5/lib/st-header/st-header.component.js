/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/st-header.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StWindowRefService } from '../utils/window-service';
/**
 * \@description {Component} [Header]
 *
 * The header component is a main component of an application.
 * This component must be on top and scroll with page, when scroll is in a calculated position,
 * the header shrinks and fix to top.
 *
 * \@model
 *
 *   [Header menu options] {./st-header.model.ts#StHeaderMenuOption}
 *   [Submenu options] {./st-header.model.ts#StHeaderSubMenuOption}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-header [menu]="headerMenuSchema" id="header">
 *     <div class="st-header-logo">
 *        <!-- Logo as svg, image, etc. -->
 *     </div>
 *     <div class="st-header-user-menu">
 *        <!-- Right header menu, with user menu, notifications, etc -->
 *     </div>
 *
 *  </st-header>
 * ```
 */
var StHeaderComponent = /** @class */ (function () {
    function StHeaderComponent(_router, _windowServiceRef, _el, _cd) {
        this._router = _router;
        this._windowServiceRef = _windowServiceRef;
        this._el = _el;
        this._cd = _cd;
        /**
         * \@Input {StHeaderMenuOption[]} [menu] Array with menu option to show
         */
        this.menu = [];
        /**
         * \@Input {boolean} [navigateByDefault] True if we want menu to manage navigation, false if navigation will be managed from the outside
         */
        this.navigateByDefault = true;
        /**
         * \@Output {StHeaderSelection} [selectMenu] Notify any menu option selection
         */
        this.selectMenu = new EventEmitter();
        this.showMenuNames = true;
        this._headerSize = 0;
    }
    /**
     * @return {?}
     */
    StHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._headerSize = this.headerFixPart.nativeElement.getBoundingClientRect().width + this.userMenuElementWidth + 20;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.checkMenuLabelVisibility();
            _this._cd.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    StHeaderComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.checkMenuLabelVisibility();
        this._cd.markForCheck();
    };
    Object.defineProperty(StHeaderComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._el.nativeElement.id || 'st-header';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} selected
     * @return {?}
     */
    StHeaderComponent.prototype.onSelectMenu = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        if (this.navigateByDefault) {
            if (selected.external) {
                this._windowServiceRef.nativeWindow.open(selected.link, selected.openInNewPage ? '_blank' : '_self');
            }
            else {
                this._router.navigate([selected.link]);
            }
        }
        this.selectMenu.emit(selected);
    };
    Object.defineProperty(StHeaderComponent.prototype, "menuContainerId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.id + "-menu";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StHeaderComponent.prototype, "userMenuElementWidth", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var userMenuContainer = this.userMenuContainer.nativeElement;
            if (userMenuContainer.children && userMenuContainer.children.length > 0) {
                return userMenuContainer.children[0].getBoundingClientRect().width;
            }
            else {
                return userMenuContainer.getBoundingClientRect().width;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    StHeaderComponent.prototype.checkMenuLabelVisibility = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var windowSize = this._windowServiceRef.nativeWindow.innerWidth;
        /** @type {?} */
        var canShowMenuNames = this._headerSize <= windowSize;
        if (this.showMenuNames !== canShowMenuNames) {
            this.showMenuNames = canShowMenuNames;
            this._cd.markForCheck();
        }
    };
    StHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-header',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<header class=\"st-header\" #headerDivElement>\n   <div class=\"st-header-container container\">\n      <div class=\"st-header-container-fix-part\" #headerFixPart>\n         <ng-content select=\".st-header-logo\"></ng-content>\n         <st-header-menu class=\"st-header-menu-component\"\n                         [menu]=\"menu\"\n                         [attr.id]=\"menuContainerId\"\n                         [showMenuNames]=\"showMenuNames\"\n                         (selectMenu)=\"onSelectMenu($event)\">\n         </st-header-menu>\n      </div>\n      <div class=\"st-header-shortcut-buttons-container\" #userMenuContainerElement>\n         <ng-content select=\".st-header-shortcut-buttons\"></ng-content>\n      </div>\n      <div class=\"st-header-user-menu-container\" #userMenuContainerElement>\n         <ng-content select=\".st-header-user-menu\"></ng-content>\n      </div>\n   </div>\n</header>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StHeaderComponent.ctorParameters = function () { return [
        { type: Router },
        { type: StWindowRefService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StHeaderComponent.propDecorators = {
        menu: [{ type: Input }],
        navigateByDefault: [{ type: Input }],
        selectMenu: [{ type: Output }],
        headerDivElement: [{ type: ViewChild, args: ['headerDivElement', { static: false },] }],
        headerFixPart: [{ type: ViewChild, args: ['headerFixPart', { static: false },] }],
        userMenuContainer: [{ type: ViewChild, args: ['userMenuContainerElement', { static: true },] }],
        onResize: [{ type: HostListener, args: ['window:resize', [],] }]
    };
    return StHeaderComponent;
}());
export { StHeaderComponent };
if (false) {
    /**
     * \@Input {StHeaderMenuOption[]} [menu] Array with menu option to show
     * @type {?}
     */
    StHeaderComponent.prototype.menu;
    /**
     * \@Input {boolean} [navigateByDefault] True if we want menu to manage navigation, false if navigation will be managed from the outside
     * @type {?}
     */
    StHeaderComponent.prototype.navigateByDefault;
    /**
     * \@Output {StHeaderSelection} [selectMenu] Notify any menu option selection
     * @type {?}
     */
    StHeaderComponent.prototype.selectMenu;
    /** @type {?} */
    StHeaderComponent.prototype.headerDivElement;
    /** @type {?} */
    StHeaderComponent.prototype.headerFixPart;
    /** @type {?} */
    StHeaderComponent.prototype.userMenuContainer;
    /** @type {?} */
    StHeaderComponent.prototype.showMenuNames;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._headerSize;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._windowServiceRef;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StHeaderComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaGVhZGVyL3N0LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUVKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQjdEO0lBdUJHLDJCQUNXLE9BQWUsRUFDZixpQkFBcUMsRUFDckMsR0FBZSxFQUNmLEdBQXNCO1FBSHRCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW9CO1FBQ3JDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixRQUFHLEdBQUgsR0FBRyxDQUFtQjs7OztRQW5CeEIsU0FBSSxHQUF5QixFQUFFLENBQUM7Ozs7UUFFaEMsc0JBQWlCLEdBQVksSUFBSSxDQUFDOzs7O1FBR2pDLGVBQVUsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFNdkYsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFN0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7SUFPNUIsQ0FBQzs7OztJQUVFLDJDQUFlOzs7SUFBdEI7UUFBQSxpQkFNQztRQUxFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUNuSCxV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Ozs7O0lBRXpDLDhDQUEyQzs7Ozs7SUFHM0MsdUNBQThGOztJQUU5Riw2Q0FBK0U7O0lBQy9FLDBDQUF5RTs7SUFDekUsOENBQXVGOztJQUV2RiwwQ0FBcUM7Ozs7O0lBRXJDLHdDQUFnQzs7Ozs7SUFHN0Isb0NBQXVCOzs7OztJQUN2Qiw4Q0FBNkM7Ozs7O0lBQzdDLGdDQUF1Qjs7Ozs7SUFDdkIsZ0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQWZ0ZXJWaWV3SW5pdCxcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICBDb21wb25lbnQsXG4gICBFbGVtZW50UmVmLFxuICAgRXZlbnRFbWl0dGVyLFxuICAgSG9zdExpc3RlbmVyLFxuICAgSW5wdXQsXG4gICBPdXRwdXQsXG4gICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdEhlYWRlck1lbnVPcHRpb24sIFN0SGVhZGVyU2VsZWN0aW9uIH0gZnJvbSAnLi9zdC1oZWFkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RXaW5kb3dSZWZTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvd2luZG93LXNlcnZpY2UnO1xuXG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtIZWFkZXJdXG4gKlxuICogVGhlIGhlYWRlciBjb21wb25lbnQgaXMgYSBtYWluIGNvbXBvbmVudCBvZiBhbiBhcHBsaWNhdGlvbi5cbiAqIFRoaXMgY29tcG9uZW50IG11c3QgYmUgb24gdG9wIGFuZCBzY3JvbGwgd2l0aCBwYWdlLCB3aGVuIHNjcm9sbCBpcyBpbiBhIGNhbGN1bGF0ZWQgcG9zaXRpb24sXG4gKiB0aGUgaGVhZGVyIHNocmlua3MgYW5kIGZpeCB0byB0b3AuXG4gKlxuICogQG1vZGVsXG4gKlxuICogICBbSGVhZGVyIG1lbnUgb3B0aW9uc10gey4vc3QtaGVhZGVyLm1vZGVsLnRzI1N0SGVhZGVyTWVudU9wdGlvbn1cbiAqICAgW1N1Ym1lbnUgb3B0aW9uc10gey4vc3QtaGVhZGVyLm1vZGVsLnRzI1N0SGVhZGVyU3ViTWVudU9wdGlvbn1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWhlYWRlciBbbWVudV09XCJoZWFkZXJNZW51U2NoZW1hXCIgaWQ9XCJoZWFkZXJcIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwic3QtaGVhZGVyLWxvZ29cIj5cbiAqICAgICAgICA8IS0tIExvZ28gYXMgc3ZnLCBpbWFnZSwgZXRjLiAtLT5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwic3QtaGVhZGVyLXVzZXItbWVudVwiPlxuICogICAgICAgIDwhLS0gUmlnaHQgaGVhZGVyIG1lbnUsIHdpdGggdXNlciBtZW51LCBub3RpZmljYXRpb25zLCBldGMgLS0+XG4gKiAgICAgPC9kaXY+XG4gKlxuICogIDwvc3QtaGVhZGVyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1oZWFkZXInLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAvKiogQElucHV0IHtTdEhlYWRlck1lbnVPcHRpb25bXX0gW21lbnVdIEFycmF5IHdpdGggbWVudSBvcHRpb24gdG8gc2hvdyAqL1xuICAgQElucHV0KCkgbWVudTogU3RIZWFkZXJNZW51T3B0aW9uW10gPSBbXTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtuYXZpZ2F0ZUJ5RGVmYXVsdF0gVHJ1ZSBpZiB3ZSB3YW50IG1lbnUgdG8gbWFuYWdlIG5hdmlnYXRpb24sIGZhbHNlIGlmIG5hdmlnYXRpb24gd2lsbCBiZSBtYW5hZ2VkIGZyb20gdGhlIG91dHNpZGUgKi9cbiAgIEBJbnB1dCgpIG5hdmlnYXRlQnlEZWZhdWx0OiBib29sZWFuID0gdHJ1ZTtcblxuICAgLyoqIEBPdXRwdXQge1N0SGVhZGVyU2VsZWN0aW9ufSBbc2VsZWN0TWVudV0gTm90aWZ5IGFueSBtZW51IG9wdGlvbiBzZWxlY3Rpb24gKi9cbiAgIEBPdXRwdXQoKSBzZWxlY3RNZW51OiBFdmVudEVtaXR0ZXI8U3RIZWFkZXJTZWxlY3Rpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdEhlYWRlclNlbGVjdGlvbj4oKTtcblxuICAgQFZpZXdDaGlsZCgnaGVhZGVyRGl2RWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBoZWFkZXJEaXZFbGVtZW50OiBFbGVtZW50UmVmO1xuICAgQFZpZXdDaGlsZCgnaGVhZGVyRml4UGFydCcsIHsgc3RhdGljOiBmYWxzZSB9KSBoZWFkZXJGaXhQYXJ0OiBFbGVtZW50UmVmO1xuICAgQFZpZXdDaGlsZCgndXNlck1lbnVDb250YWluZXJFbGVtZW50JywgeyBzdGF0aWM6IHRydWUgfSkgdXNlck1lbnVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgIHB1YmxpYyBzaG93TWVudU5hbWVzOiBib29sZWFuID0gdHJ1ZTtcblxuICAgcHJpdmF0ZSBfaGVhZGVyU2l6ZTogbnVtYmVyID0gMDtcblxuICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcbiAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2VSZWY6IFN0V2luZG93UmVmU2VydmljZSxcbiAgICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxuICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICApIHsgfVxuXG4gICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5faGVhZGVyU2l6ZSA9IHRoaXMuaGVhZGVyRml4UGFydC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgdGhpcy51c2VyTWVudUVsZW1lbnRXaWR0aCArIDIwO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICB0aGlzLmNoZWNrTWVudUxhYmVsVmlzaWJpbGl0eSgpO1xuICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFtdKVxuICAgb25SZXNpemUoKTogdm9pZCB7XG4gICAgICB0aGlzLmNoZWNrTWVudUxhYmVsVmlzaWJpbGl0eSgpO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmlkIHx8ICdzdC1oZWFkZXInO1xuICAgfVxuXG4gICBwdWJsaWMgb25TZWxlY3RNZW51KHNlbGVjdGVkOiBTdEhlYWRlclNlbGVjdGlvbik6IHZvaWQge1xuICAgICAgaWYgKHRoaXMubmF2aWdhdGVCeURlZmF1bHQpIHtcbiAgICAgICAgIGlmIChzZWxlY3RlZC5leHRlcm5hbCkge1xuICAgICAgICAgICAgdGhpcy5fd2luZG93U2VydmljZVJlZi5uYXRpdmVXaW5kb3cub3BlbihzZWxlY3RlZC5saW5rLCBzZWxlY3RlZC5vcGVuSW5OZXdQYWdlID8gJ19ibGFuaycgOiAnX3NlbGYnKTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3NlbGVjdGVkLmxpbmtdKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2VsZWN0TWVudS5lbWl0KHNlbGVjdGVkKTtcbiAgIH1cblxuICAgcHVibGljIGdldCBtZW51Q29udGFpbmVySWQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmlkfS1tZW51YDtcbiAgIH1cblxuICAgcHVibGljIGdldCB1c2VyTWVudUVsZW1lbnRXaWR0aCgpOiBudW1iZXIge1xuICAgICAgY29uc3QgdXNlck1lbnVDb250YWluZXI6IEhUTUxFbGVtZW50ID0gdGhpcy51c2VyTWVudUNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAodXNlck1lbnVDb250YWluZXIuY2hpbGRyZW4gJiYgdXNlck1lbnVDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgcmV0dXJuIHVzZXJNZW51Q29udGFpbmVyLmNoaWxkcmVuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiB1c2VyTWVudUNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja01lbnVMYWJlbFZpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgICBjb25zdCB3aW5kb3dTaXplOiBudW1iZXIgPSB0aGlzLl93aW5kb3dTZXJ2aWNlUmVmLm5hdGl2ZVdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgY29uc3QgY2FuU2hvd01lbnVOYW1lcyA9IHRoaXMuX2hlYWRlclNpemUgPD0gd2luZG93U2l6ZTtcbiAgICAgIGlmICh0aGlzLnNob3dNZW51TmFtZXMgIT09IGNhblNob3dNZW51TmFtZXMpIHtcbiAgICAgICAgIHRoaXMuc2hvd01lbnVOYW1lcyA9IGNhblNob3dNZW51TmFtZXM7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==