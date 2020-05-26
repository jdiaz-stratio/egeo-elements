/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-header/menu-option/menu-option.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StHeaderMenuOption } from '../st-header.model';
import { StDropDownVisualMode } from './../../st-dropdown-menu/st-dropdown-menu.interface';
import { StHeaderUtils } from '../st-header.utils';
var StHeaderMenuOptionComponent = /** @class */ (function () {
    function StHeaderMenuOptionComponent(elementRef, router, cd) {
        var _this = this;
        this.elementRef = elementRef;
        this.router = router;
        this.cd = cd;
        this.selectMenu = new EventEmitter();
        this.visualMode = StDropDownVisualMode.MENU_LIST;
        this._actualPath = '';
        this._subscription = this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this._onRouterEvent(event); }));
        this._actualPath = this.router.url;
    }
    Object.defineProperty(StHeaderMenuOptionComponent.prototype, "isCurrentRoute", {
        get: /**
         * @return {?}
         */
        function () {
            return StHeaderUtils.isRouteActive(this._option, this.router.url);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StHeaderMenuOptionComponent.prototype, "option", {
        get: /**
         * @return {?}
         */
        function () {
            return this._option;
        },
        set: /**
         * @param {?} _option
         * @return {?}
         */
        function (_option) {
            this._option = _option;
            this.hasSubmenu = _option.subMenus && _option.subMenus.length > 0;
            this.qaId = this._getQaId();
            this.submenuList = this._getSubmenuList();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.onMenuClick = /**
     * @return {?}
     */
    function () {
        if (this.hasSubmenu) {
            this.isActive = !this.isActive;
            this.cd.markForCheck();
        }
        else {
            this.selectMenu.emit({
                link: this._option.link,
                external: this._option.external,
                openInNewPage: this._option.openInNewPage
            });
        }
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.changeOption = /**
     * @param {?} selected
     * @return {?}
     */
    function (selected) {
        this.isActive = false;
        this.cd.markForCheck();
        this.selectMenu.emit(selected.selection);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype.onClickOutside = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var isMyComponent = this.isActive && this.menu.nativeElement.contains(event.target);
        if (!isMyComponent && this.isActive) {
            this.isActive = false;
            this.cd.markForCheck();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype._onRouterEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event instanceof NavigationEnd) {
            this._actualPath = event.urlAfterRedirects;
            this.submenuList = this._getSubmenuList();
            this.cd.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype._getQaId = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._option) {
            return null;
        }
        /** @type {?} */
        var id = this.elementRef.nativeElement.id + "-" + this._option.label.toLowerCase();
        id.replace(/\s+/ig, '_');
        return id;
    };
    /**
     * @private
     * @return {?}
     */
    StHeaderMenuOptionComponent.prototype._getSubmenuList = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this._option && this.hasSubmenu ? this._option.subMenus.map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return ({
            label: _.label,
            value: _.link,
            selected: _this._actualPath === _.link,
            selection: (/** @type {?} */ ({
                link: _.link,
                external: _.external,
                openInNewPage: _.openInNewPage
            }))
        }); })) : [];
    };
    StHeaderMenuOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-header-menu-option',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-dropdown-menu [items]=\"submenuList\"\n                  [visualMode]=\"visualMode\"\n                  [active]=\"isActive && hasSubmenu\"\n                  [placement]=\"'bottom-start'\"\n                  [offset]=\"{x: 0, y: 10}\"\n                  (change)=\"changeOption($event)\">\n   <div class=\"st-header-menu-option\" #menu\n        [attr.id]=\"qaId\"\n        (click)=\"onMenuClick()\">\n      <a class=\"st-header-menu-option-name\">\n         <i *ngIf=\"option.icon\"\n            class=\"st-header-menu-option-icon\"\n            [ngClass]=\"option.icon\"\n            [title]=\"option.label\"></i>\n         <div *ngIf=\"showMenuName\" class=\"st-header-menu-option-label\">{{option.label}}</div>\n      </a>\n      <i *ngIf=\"hasSubmenu\" class=\"icon-arrow2_down st-header-menu-option-arrow\"></i>\n   </div>\n</st-dropdown-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{display:flex;justify-content:center;flex-direction:column;height:100%;padding:0 10px}:host.active{background:#566574}:host.active .st-header-menu-option,:host.active .st-header-menu-option:hover{color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    StHeaderMenuOptionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Router },
        { type: ChangeDetectorRef }
    ]; };
    StHeaderMenuOptionComponent.propDecorators = {
        showMenuName: [{ type: Input }],
        selectMenu: [{ type: Output }],
        menu: [{ type: ViewChild, args: ['menu', { static: false },] }],
        isCurrentRoute: [{ type: HostBinding, args: ['class.active',] }],
        option: [{ type: Input }],
        onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return StHeaderMenuOptionComponent;
}());
export { StHeaderMenuOptionComponent };
if (false) {
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.showMenuName;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.selectMenu;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.menu;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.isActive;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.visualMode;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.hasSubmenu;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.qaId;
    /** @type {?} */
    StHeaderMenuOptionComponent.prototype.submenuList;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype._actualPath;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype._option;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    StHeaderMenuOptionComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWhlYWRlci9tZW51LW9wdGlvbi9tZW51LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQ0osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFvQixrQkFBa0IsRUFBcUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQ7SUEwQ0cscUNBQW9CLFVBQXNCLEVBQVUsTUFBYyxFQUFVLEVBQXFCO1FBQWpHLGlCQUdDO1FBSG1CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFoQ3ZGLGVBQVUsR0FBb0MsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFVdkYsZUFBVSxHQUF5QixvQkFBb0IsQ0FBQyxTQUFTLENBQUM7UUFNakUsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFpQjlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFB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a0NBQUM7Q0FBQSxBQWpIRCxJQWlIQztTQTNHWSwyQkFBMkI7OztJQUVyQyxtREFBK0I7O0lBRS9CLGlEQUE4Rjs7SUFFOUYsMkNBQXVEOztJQU92RCwrQ0FBeUI7O0lBQ3pCLGlEQUF5RTs7SUFDekUsaURBQTJCOztJQUMzQiwyQ0FBb0I7O0lBQ3BCLGtEQUF1Qzs7Ozs7SUFFdkMsb0RBQW9DOzs7OztJQUNwQyxrREFBaUM7Ozs7O0lBQ2pDLDhDQUFvQzs7Ozs7SUFleEIsaURBQThCOzs7OztJQUFFLDZDQUFzQjs7Ozs7SUFBRSx5Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ29tcG9uZW50LFxuICAgRWxlbWVudFJlZixcbiAgIEV2ZW50RW1pdHRlcixcbiAgIEhvc3RCaW5kaW5nLFxuICAgSG9zdExpc3RlbmVyLFxuICAgSW5wdXQsXG4gICBPbkRlc3Ryb3ksXG4gICBPdXRwdXQsXG4gICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0SGVhZGVyTWVudUl0ZW0sIFN0SGVhZGVyTWVudU9wdGlvbiwgU3RIZWFkZXJTZWxlY3Rpb24gfSBmcm9tICcuLi9zdC1oZWFkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3REcm9wRG93blZpc3VhbE1vZGUgfSBmcm9tICcuLy4uLy4uL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RIZWFkZXJVdGlscyB9IGZyb20gJy4uL3N0LWhlYWRlci51dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1oZWFkZXItbWVudS1vcHRpb24nLFxuICAgdGVtcGxhdGVVcmw6ICcuL21lbnUtb3B0aW9uLmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vbWVudS1vcHRpb24uc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RIZWFkZXJNZW51T3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICAgQElucHV0KCkgc2hvd01lbnVOYW1lOiBib29sZWFuO1xuXG4gICBAT3V0cHV0KCkgc2VsZWN0TWVudTogRXZlbnRFbWl0dGVyPFN0SGVhZGVyU2VsZWN0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RIZWFkZXJTZWxlY3Rpb24+KCk7XG5cbiAgIEBWaWV3Q2hpbGQoJ21lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWVudTogRWxlbWVudFJlZjtcblxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICAgcHVibGljIGdldCBpc0N1cnJlbnRSb3V0ZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBTdEhlYWRlclV0aWxzLmlzUm91dGVBY3RpdmUodGhpcy5fb3B0aW9uLCB0aGlzLnJvdXRlci51cmwpO1xuICAgfVxuXG4gICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG4gICBwdWJsaWMgdmlzdWFsTW9kZTogU3REcm9wRG93blZpc3VhbE1vZGUgPSBTdERyb3BEb3duVmlzdWFsTW9kZS5NRU5VX0xJU1Q7XG4gICBwdWJsaWMgaGFzU3VibWVudTogYm9vbGVhbjtcbiAgIHB1YmxpYyBxYUlkOiBzdHJpbmc7XG4gICBwdWJsaWMgc3VibWVudUxpc3Q6IFN0SGVhZGVyTWVudUl0ZW1bXTtcblxuICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICBwcml2YXRlIF9hY3R1YWxQYXRoOiBzdHJpbmcgPSAnJztcbiAgIHByaXZhdGUgX29wdGlvbjogU3RIZWFkZXJNZW51T3B0aW9uO1xuXG4gICBASW5wdXQoKVxuICAgZ2V0IG9wdGlvbigpOiBTdEhlYWRlck1lbnVPcHRpb24ge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbjtcbiAgIH1cblxuICAgc2V0IG9wdGlvbihfb3B0aW9uOiBTdEhlYWRlck1lbnVPcHRpb24pIHtcbiAgICAgIHRoaXMuX29wdGlvbiA9IF9vcHRpb247XG4gICAgICB0aGlzLmhhc1N1Ym1lbnUgPSBfb3B0aW9uLnN1Yk1lbnVzICYmIF9vcHRpb24uc3ViTWVudXMubGVuZ3RoID4gMDtcbiAgICAgIHRoaXMucWFJZCA9IHRoaXMuX2dldFFhSWQoKTtcbiAgICAgIHRoaXMuc3VibWVudUxpc3QgPSB0aGlzLl9nZXRTdWJtZW51TGlzdCgpO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQpID0+IHRoaXMuX29uUm91dGVyRXZlbnQoZXZlbnQpKTtcbiAgICAgIHRoaXMuX2FjdHVhbFBhdGggPSB0aGlzLnJvdXRlci51cmw7XG4gICB9XG5cbiAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgfVxuXG4gICBwdWJsaWMgb25NZW51Q2xpY2soKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5oYXNTdWJtZW51KSB7XG4gICAgICAgICB0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0TWVudS5lbWl0KHtcbiAgICAgICAgICAgIGxpbms6IHRoaXMuX29wdGlvbi5saW5rLFxuICAgICAgICAgICAgZXh0ZXJuYWw6IHRoaXMuX29wdGlvbi5leHRlcm5hbCxcbiAgICAgICAgICAgIG9wZW5Jbk5ld1BhZ2U6IHRoaXMuX29wdGlvbi5vcGVuSW5OZXdQYWdlXG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHVibGljIGNoYW5nZU9wdGlvbihzZWxlY3RlZDogU3RIZWFkZXJNZW51SXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMuc2VsZWN0TWVudS5lbWl0KHNlbGVjdGVkLnNlbGVjdGlvbik7XG4gICB9XG5cbiAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgICAgY29uc3QgaXNNeUNvbXBvbmVudDogYm9vbGVhbiA9IHRoaXMuaXNBY3RpdmUgJiYgdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KTtcbiAgICAgIGlmICghaXNNeUNvbXBvbmVudCAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIF9vblJvdXRlckV2ZW50KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgIHRoaXMuX2FjdHVhbFBhdGggPSBldmVudC51cmxBZnRlclJlZGlyZWN0cztcbiAgICAgICAgIHRoaXMuc3VibWVudUxpc3QgPSB0aGlzLl9nZXRTdWJtZW51TGlzdCgpO1xuICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICBwcml2YXRlIF9nZXRRYUlkKCk6IHN0cmluZyB7XG4gICAgICBpZiAoIXRoaXMuX29wdGlvbikge1xuICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBsZXQgaWQ6IHN0cmluZyA9IGAke3RoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlkfS0ke3RoaXMuX29wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpfWA7XG4gICAgICBpZC5yZXBsYWNlKC9cXHMrL2lnLCAnXycpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgfVxuXG5cbiAgIHByaXZhdGUgX2dldFN1Ym1lbnVMaXN0KCk6IFN0SGVhZGVyTWVudUl0ZW1bXSB7XG4gICAgICByZXR1cm4gdGhpcy5fb3B0aW9uICYmIHRoaXMuaGFzU3VibWVudSA/IHRoaXMuX29wdGlvbi5zdWJNZW51cy5tYXAoXyA9PiAoe1xuICAgICAgICAgbGFiZWw6IF8ubGFiZWwsXG4gICAgICAgICB2YWx1ZTogXy5saW5rLFxuICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuX2FjdHVhbFBhdGggPT09IF8ubGluayxcbiAgICAgICAgIHNlbGVjdGlvbjoge1xuICAgICAgICAgICAgbGluazogXy5saW5rLFxuICAgICAgICAgICAgZXh0ZXJuYWw6IF8uZXh0ZXJuYWwsXG4gICAgICAgICAgICBvcGVuSW5OZXdQYWdlOiBfLm9wZW5Jbk5ld1BhZ2VcbiAgICAgICAgIH0gYXMgU3RIZWFkZXJTZWxlY3Rpb25cbiAgICAgIH0pKSA6IFtdO1xuICAgfVxuXG5cbn1cbiJdfQ==