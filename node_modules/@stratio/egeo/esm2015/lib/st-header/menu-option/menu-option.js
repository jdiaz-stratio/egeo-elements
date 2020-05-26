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
export class StHeaderMenuOptionComponent {
    /**
     * @param {?} elementRef
     * @param {?} router
     * @param {?} cd
     */
    constructor(elementRef, router, cd) {
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
        (event) => this._onRouterEvent(event)));
        this._actualPath = this.router.url;
    }
    /**
     * @return {?}
     */
    get isCurrentRoute() {
        return StHeaderUtils.isRouteActive(this._option, this.router.url);
    }
    /**
     * @return {?}
     */
    get option() {
        return this._option;
    }
    /**
     * @param {?} _option
     * @return {?}
     */
    set option(_option) {
        this._option = _option;
        this.hasSubmenu = _option.subMenus && _option.subMenus.length > 0;
        this.qaId = this._getQaId();
        this.submenuList = this._getSubmenuList();
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isActive = false;
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    onMenuClick() {
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
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    changeOption(selected) {
        this.isActive = false;
        this.cd.markForCheck();
        this.selectMenu.emit(selected.selection);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        /** @type {?} */
        const isMyComponent = this.isActive && this.menu.nativeElement.contains(event.target);
        if (!isMyComponent && this.isActive) {
            this.isActive = false;
            this.cd.markForCheck();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    _onRouterEvent(event) {
        if (event instanceof NavigationEnd) {
            this._actualPath = event.urlAfterRedirects;
            this.submenuList = this._getSubmenuList();
            this.cd.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getQaId() {
        if (!this._option) {
            return null;
        }
        /** @type {?} */
        let id = `${this.elementRef.nativeElement.id}-${this._option.label.toLowerCase()}`;
        id.replace(/\s+/ig, '_');
        return id;
    }
    /**
     * @private
     * @return {?}
     */
    _getSubmenuList() {
        return this._option && this.hasSubmenu ? this._option.subMenus.map((/**
         * @param {?} _
         * @return {?}
         */
        _ => ({
            label: _.label,
            value: _.link,
            selected: this._actualPath === _.link,
            selection: (/** @type {?} */ ({
                link: _.link,
                external: _.external,
                openInNewPage: _.openInNewPage
            }))
        }))) : [];
    }
}
StHeaderMenuOptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-header-menu-option',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<st-dropdown-menu [items]=\"submenuList\"\n                  [visualMode]=\"visualMode\"\n                  [active]=\"isActive && hasSubmenu\"\n                  [placement]=\"'bottom-start'\"\n                  [offset]=\"{x: 0, y: 10}\"\n                  (change)=\"changeOption($event)\">\n   <div class=\"st-header-menu-option\" #menu\n        [attr.id]=\"qaId\"\n        (click)=\"onMenuClick()\">\n      <a class=\"st-header-menu-option-name\">\n         <i *ngIf=\"option.icon\"\n            class=\"st-header-menu-option-icon\"\n            [ngClass]=\"option.icon\"\n            [title]=\"option.label\"></i>\n         <div *ngIf=\"showMenuName\" class=\"st-header-menu-option-label\">{{option.label}}</div>\n      </a>\n      <i *ngIf=\"hasSubmenu\" class=\"icon-arrow2_down st-header-menu-option-arrow\"></i>\n   </div>\n</st-dropdown-menu>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{display:flex;justify-content:center;flex-direction:column;height:100%;padding:0 10px}:host.active{background:#566574}:host.active .st-header-menu-option,:host.active .st-header-menu-option:hover{color:#fff}"]
            }] }
];
/** @nocollapse */
StHeaderMenuOptionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Router },
    { type: ChangeDetectorRef }
];
StHeaderMenuOptionComponent.propDecorators = {
    showMenuName: [{ type: Input }],
    selectMenu: [{ type: Output }],
    menu: [{ type: ViewChild, args: ['menu', { static: false },] }],
    isCurrentRoute: [{ type: HostBinding, args: ['class.active',] }],
    option: [{ type: Input }],
    onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vcHRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWhlYWRlci9tZW51LW9wdGlvbi9tZW51LW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQ0osdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHeEQsT0FBTyxFQUFvQixrQkFBa0IsRUFBcUIsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRbkQsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBb0NyQyxZQUFvQixVQUFzQixFQUFVLE1BQWMsRUFBVSxFQUFxQjtRQUE3RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBaEN2RixlQUFVLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBVXZGLGVBQVUsR0FBeUIsb0JBQW9CLENBQUMsU0FBUyxDQUFDO1FBTWpFLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBaUI5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDdEMsQ0FBQzs7OztJQS9CRCxJQUNXLGNBQWM7UUFDdEIsT0FBTyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBWUQsSUFDSSxNQUFNO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsT0FBMkI7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFPTSxXQUFXO1FBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRU0sV0FBVztRQUNmLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtnQkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtnQkFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTthQUMzQyxDQUFDLENBQUM7U0FDTDtJQUNKLENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLFFBQTBCO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBR0QsY0FBYyxDQUFDLEtBQVk7O2NBQ2xCLGFBQWEsR0FBWSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlGLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3pCO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQVU7UUFDOUIsSUFBSSxLQUFLLFlBQVksYUFBYSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDekI7SUFDSixDQUFDOzs7OztJQUdPLFFBQVE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLElBQUksQ0FBQztTQUNkOztZQUNHLEVBQUUsR0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUMxRixFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QixPQUFPLEVBQUUsQ0FBQztJQUNiLENBQUM7Ozs7O0lBR08sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUs7WUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSTtZQUNyQyxTQUFTLEVBQUUsbUJBQUE7Z0JBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO2dCQUNaLFFBQVEsRUFBRSxDQUFDLENBQUMsUUFBUTtnQkFDcEIsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhO2FBQ2hDLEVBQXFCO1NBQ3hCLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUE5R0gsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDJ4Q0FBaUM7Z0JBRWpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7OztZQXJCRSxVQUFVO1lBU1csTUFBTTtZQVgzQixpQkFBaUI7OzsyQkEwQmhCLEtBQUs7eUJBRUwsTUFBTTttQkFFTixTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs2QkFFbkMsV0FBVyxTQUFDLGNBQWM7cUJBZTFCLEtBQUs7NkJBMENMLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQS9EMUMsbURBQStCOztJQUUvQixpREFBOEY7O0lBRTlGLDJDQUF1RDs7SUFPdkQsK0NBQXlCOztJQUN6QixpREFBeUU7O0lBQ3pFLGlEQUEyQjs7SUFDM0IsMkNBQW9COztJQUNwQixrREFBdUM7Ozs7O0lBRXZDLG9EQUFvQzs7Ozs7SUFDcEMsa0RBQWlDOzs7OztJQUNqQyw4Q0FBb0M7Ozs7O0lBZXhCLGlEQUE4Qjs7Ozs7SUFBRSw2Q0FBc0I7Ozs7O0lBQUUseUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgIENvbXBvbmVudCxcbiAgIEVsZW1lbnRSZWYsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBIb3N0QmluZGluZyxcbiAgIEhvc3RMaXN0ZW5lcixcbiAgIElucHV0LFxuICAgT25EZXN0cm95LFxuICAgT3V0cHV0LFxuICAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTdEhlYWRlck1lbnVJdGVtLCBTdEhlYWRlck1lbnVPcHRpb24sIFN0SGVhZGVyU2VsZWN0aW9uIH0gZnJvbSAnLi4vc3QtaGVhZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0RHJvcERvd25WaXN1YWxNb2RlIH0gZnJvbSAnLi8uLi8uLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0SGVhZGVyVXRpbHMgfSBmcm9tICcuLi9zdC1oZWFkZXIudXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtaGVhZGVyLW1lbnUtb3B0aW9uJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9tZW51LW9wdGlvbi5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL21lbnUtb3B0aW9uLnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0SGVhZGVyTWVudU9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgIEBJbnB1dCgpIHNob3dNZW51TmFtZTogYm9vbGVhbjtcblxuICAgQE91dHB1dCgpIHNlbGVjdE1lbnU6IEV2ZW50RW1pdHRlcjxTdEhlYWRlclNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0SGVhZGVyU2VsZWN0aW9uPigpO1xuXG4gICBAVmlld0NoaWxkKCdtZW51JywgeyBzdGF0aWM6IGZhbHNlIH0pIG1lbnU6IEVsZW1lbnRSZWY7XG5cbiAgIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgIHB1YmxpYyBnZXQgaXNDdXJyZW50Um91dGUoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gU3RIZWFkZXJVdGlscy5pc1JvdXRlQWN0aXZlKHRoaXMuX29wdGlvbiwgdGhpcy5yb3V0ZXIudXJsKTtcbiAgIH1cblxuICAgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xuICAgcHVibGljIHZpc3VhbE1vZGU6IFN0RHJvcERvd25WaXN1YWxNb2RlID0gU3REcm9wRG93blZpc3VhbE1vZGUuTUVOVV9MSVNUO1xuICAgcHVibGljIGhhc1N1Ym1lbnU6IGJvb2xlYW47XG4gICBwdWJsaWMgcWFJZDogc3RyaW5nO1xuICAgcHVibGljIHN1Ym1lbnVMaXN0OiBTdEhlYWRlck1lbnVJdGVtW107XG5cbiAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgcHJpdmF0ZSBfYWN0dWFsUGF0aDogc3RyaW5nID0gJyc7XG4gICBwcml2YXRlIF9vcHRpb246IFN0SGVhZGVyTWVudU9wdGlvbjtcblxuICAgQElucHV0KClcbiAgIGdldCBvcHRpb24oKTogU3RIZWFkZXJNZW51T3B0aW9uIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcHRpb247XG4gICB9XG5cbiAgIHNldCBvcHRpb24oX29wdGlvbjogU3RIZWFkZXJNZW51T3B0aW9uKSB7XG4gICAgICB0aGlzLl9vcHRpb24gPSBfb3B0aW9uO1xuICAgICAgdGhpcy5oYXNTdWJtZW51ID0gX29wdGlvbi5zdWJNZW51cyAmJiBfb3B0aW9uLnN1Yk1lbnVzLmxlbmd0aCA+IDA7XG4gICAgICB0aGlzLnFhSWQgPSB0aGlzLl9nZXRRYUlkKCk7XG4gICAgICB0aGlzLnN1Ym1lbnVMaXN0ID0gdGhpcy5fZ2V0U3VibWVudUxpc3QoKTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB0aGlzLl9vblJvdXRlckV2ZW50KGV2ZW50KSk7XG4gICAgICB0aGlzLl9hY3R1YWxQYXRoID0gdGhpcy5yb3V0ZXIudXJsO1xuICAgfVxuXG4gICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgIH1cblxuICAgcHVibGljIG9uTWVudUNsaWNrKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaGFzU3VibWVudSkge1xuICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLnNlbGVjdE1lbnUuZW1pdCh7XG4gICAgICAgICAgICBsaW5rOiB0aGlzLl9vcHRpb24ubGluayxcbiAgICAgICAgICAgIGV4dGVybmFsOiB0aGlzLl9vcHRpb24uZXh0ZXJuYWwsXG4gICAgICAgICAgICBvcGVuSW5OZXdQYWdlOiB0aGlzLl9vcHRpb24ub3BlbkluTmV3UGFnZVxuICAgICAgICAgfSk7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBjaGFuZ2VPcHRpb24oc2VsZWN0ZWQ6IFN0SGVhZGVyTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnNlbGVjdE1lbnUuZW1pdChzZWxlY3RlZC5zZWxlY3Rpb24pO1xuICAgfVxuXG4gICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gICBvbkNsaWNrT3V0c2lkZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGlzTXlDb21wb25lbnQ6IGJvb2xlYW4gPSB0aGlzLmlzQWN0aXZlICYmIHRoaXMubWVudS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCk7XG4gICAgICBpZiAoIWlzTXlDb21wb25lbnQgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBfb25Sb3V0ZXJFdmVudChldmVudDogYW55KTogdm9pZCB7XG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICB0aGlzLl9hY3R1YWxQYXRoID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHM7XG4gICAgICAgICB0aGlzLnN1Ym1lbnVMaXN0ID0gdGhpcy5fZ2V0U3VibWVudUxpc3QoKTtcbiAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICB9XG5cblxuICAgcHJpdmF0ZSBfZ2V0UWFJZCgpOiBzdHJpbmcge1xuICAgICAgaWYgKCF0aGlzLl9vcHRpb24pIHtcbiAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGV0IGlkOiBzdHJpbmcgPSBgJHt0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5pZH0tJHt0aGlzLl9vcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKX1gO1xuICAgICAgaWQucmVwbGFjZSgvXFxzKy9pZywgJ18nKTtcbiAgICAgIHJldHVybiBpZDtcbiAgIH1cblxuXG4gICBwcml2YXRlIF9nZXRTdWJtZW51TGlzdCgpOiBTdEhlYWRlck1lbnVJdGVtW10ge1xuICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbiAmJiB0aGlzLmhhc1N1Ym1lbnUgPyB0aGlzLl9vcHRpb24uc3ViTWVudXMubWFwKF8gPT4gKHtcbiAgICAgICAgIGxhYmVsOiBfLmxhYmVsLFxuICAgICAgICAgdmFsdWU6IF8ubGluayxcbiAgICAgICAgIHNlbGVjdGVkOiB0aGlzLl9hY3R1YWxQYXRoID09PSBfLmxpbmssXG4gICAgICAgICBzZWxlY3Rpb246IHtcbiAgICAgICAgICAgIGxpbms6IF8ubGluayxcbiAgICAgICAgICAgIGV4dGVybmFsOiBfLmV4dGVybmFsLFxuICAgICAgICAgICAgb3BlbkluTmV3UGFnZTogXy5vcGVuSW5OZXdQYWdlXG4gICAgICAgICB9IGFzIFN0SGVhZGVyU2VsZWN0aW9uXG4gICAgICB9KSkgOiBbXTtcbiAgIH1cblxuXG59XG4iXX0=