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
export class StHeaderComponent {
    /**
     * @param {?} _router
     * @param {?} _windowServiceRef
     * @param {?} _el
     * @param {?} _cd
     */
    constructor(_router, _windowServiceRef, _el, _cd) {
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
    ngAfterViewInit() {
        this._headerSize = this.headerFixPart.nativeElement.getBoundingClientRect().width + this.userMenuElementWidth + 20;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkMenuLabelVisibility();
            this._cd.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    onResize() {
        this.checkMenuLabelVisibility();
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    get id() {
        return this._el.nativeElement.id || 'st-header';
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    onSelectMenu(selected) {
        if (this.navigateByDefault) {
            if (selected.external) {
                this._windowServiceRef.nativeWindow.open(selected.link, selected.openInNewPage ? '_blank' : '_self');
            }
            else {
                this._router.navigate([selected.link]);
            }
        }
        this.selectMenu.emit(selected);
    }
    /**
     * @return {?}
     */
    get menuContainerId() {
        return `${this.id}-menu`;
    }
    /**
     * @return {?}
     */
    get userMenuElementWidth() {
        /** @type {?} */
        const userMenuContainer = this.userMenuContainer.nativeElement;
        if (userMenuContainer.children && userMenuContainer.children.length > 0) {
            return userMenuContainer.children[0].getBoundingClientRect().width;
        }
        else {
            return userMenuContainer.getBoundingClientRect().width;
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkMenuLabelVisibility() {
        /** @type {?} */
        const windowSize = this._windowServiceRef.nativeWindow.innerWidth;
        /** @type {?} */
        const canShowMenuNames = this._headerSize <= windowSize;
        if (this.showMenuNames !== canShowMenuNames) {
            this.showMenuNames = canShowMenuNames;
            this._cd.markForCheck();
        }
    }
}
StHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-header',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<header class=\"st-header\" #headerDivElement>\n   <div class=\"st-header-container container\">\n      <div class=\"st-header-container-fix-part\" #headerFixPart>\n         <ng-content select=\".st-header-logo\"></ng-content>\n         <st-header-menu class=\"st-header-menu-component\"\n                         [menu]=\"menu\"\n                         [attr.id]=\"menuContainerId\"\n                         [showMenuNames]=\"showMenuNames\"\n                         (selectMenu)=\"onSelectMenu($event)\">\n         </st-header-menu>\n      </div>\n      <div class=\"st-header-shortcut-buttons-container\" #userMenuContainerElement>\n         <ng-content select=\".st-header-shortcut-buttons\"></ng-content>\n      </div>\n      <div class=\"st-header-user-menu-container\" #userMenuContainerElement>\n         <ng-content select=\".st-header-user-menu\"></ng-content>\n      </div>\n   </div>\n</header>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
StHeaderComponent.ctorParameters = () => [
    { type: Router },
    { type: StWindowRefService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
StHeaderComponent.propDecorators = {
    menu: [{ type: Input }],
    navigateByDefault: [{ type: Input }],
    selectMenu: [{ type: Output }],
    headerDivElement: [{ type: ViewChild, args: ['headerDivElement', { static: false },] }],
    headerFixPart: [{ type: ViewChild, args: ['headerFixPart', { static: false },] }],
    userMenuContainer: [{ type: ViewChild, args: ['userMenuContainerElement', { static: true },] }],
    onResize: [{ type: HostListener, args: ['window:resize', [],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaGVhZGVyL3N0LWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUVKLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQzdELE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7SUFrQjNCLFlBQ1csT0FBZSxFQUNmLGlCQUFxQyxFQUNyQyxHQUFlLEVBQ2YsR0FBc0I7UUFIdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7UUFDckMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBbkJ4QixTQUFJLEdBQXlCLEVBQUUsQ0FBQzs7OztRQUVoQyxzQkFBaUIsR0FBWSxJQUFJLENBQUM7Ozs7UUFHakMsZUFBVSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQU12RixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVyxHQUFXLENBQUMsQ0FBQztJQU81QixDQUFDOzs7O0lBRUUsZUFBZTtRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDbkgsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBVyxFQUFFO1FBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRU0sWUFBWSxDQUFDLFFBQTJCO1FBQzVDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3pCLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZHO2lCQUFNO2dCQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDekM7U0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxJQUFXLGVBQWU7UUFDdkIsT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsSUFBVyxvQkFBb0I7O2NBQ3RCLGlCQUFpQixHQUFnQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYTtRQUUzRSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0RSxPQUFPLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNyRTthQUFNO1lBQ0osT0FBTyxpQkFBaUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUN6RDtJQUNKLENBQUM7Ozs7O0lBRU8sd0JBQXdCOztjQUN2QixVQUFVLEdBQVcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxVQUFVOztjQUNuRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFVBQVU7UUFDdkQsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLGdCQUFnQixFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUM7WUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUMxQjtJQUNKLENBQUM7OztZQWhGSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLGsxQ0FBeUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2pEOzs7O1lBdENRLE1BQU07WUFHTixrQkFBa0I7WUFWeEIsVUFBVTtZQUZWLGlCQUFpQjs7O21CQW1EaEIsS0FBSztnQ0FFTCxLQUFLO3lCQUdMLE1BQU07K0JBRU4sU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs0QkFDL0MsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0NBQzVDLFNBQVMsU0FBQywwQkFBMEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBcUJ0RCxZQUFZLFNBQUMsZUFBZSxFQUFFLEVBQUU7Ozs7Ozs7SUE5QmpDLGlDQUF5Qzs7Ozs7SUFFekMsOENBQTJDOzs7OztJQUczQyx1Q0FBOEY7O0lBRTlGLDZDQUErRTs7SUFDL0UsMENBQXlFOztJQUN6RSw4Q0FBdUY7O0lBRXZGLDBDQUFxQzs7Ozs7SUFFckMsd0NBQWdDOzs7OztJQUc3QixvQ0FBdUI7Ozs7O0lBQ3ZCLDhDQUE2Qzs7Ozs7SUFDN0MsZ0NBQXVCOzs7OztJQUN2QixnQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBBZnRlclZpZXdJbml0LFxuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgIENvbXBvbmVudCxcbiAgIEVsZW1lbnRSZWYsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBIb3N0TGlzdGVuZXIsXG4gICBJbnB1dCxcbiAgIE91dHB1dCxcbiAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN0SGVhZGVyTWVudU9wdGlvbiwgU3RIZWFkZXJTZWxlY3Rpb24gfSBmcm9tICcuL3N0LWhlYWRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdFdpbmRvd1JlZlNlcnZpY2UgfSBmcm9tICcuLi91dGlscy93aW5kb3ctc2VydmljZSc7XG5cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0hlYWRlcl1cbiAqXG4gKiBUaGUgaGVhZGVyIGNvbXBvbmVudCBpcyBhIG1haW4gY29tcG9uZW50IG9mIGFuIGFwcGxpY2F0aW9uLlxuICogVGhpcyBjb21wb25lbnQgbXVzdCBiZSBvbiB0b3AgYW5kIHNjcm9sbCB3aXRoIHBhZ2UsIHdoZW4gc2Nyb2xsIGlzIGluIGEgY2FsY3VsYXRlZCBwb3NpdGlvbixcbiAqIHRoZSBoZWFkZXIgc2hyaW5rcyBhbmQgZml4IHRvIHRvcC5cbiAqXG4gKiBAbW9kZWxcbiAqXG4gKiAgIFtIZWFkZXIgbWVudSBvcHRpb25zXSB7Li9zdC1oZWFkZXIubW9kZWwudHMjU3RIZWFkZXJNZW51T3B0aW9ufVxuICogICBbU3VibWVudSBvcHRpb25zXSB7Li9zdC1oZWFkZXIubW9kZWwudHMjU3RIZWFkZXJTdWJNZW51T3B0aW9ufVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtaGVhZGVyIFttZW51XT1cImhlYWRlck1lbnVTY2hlbWFcIiBpZD1cImhlYWRlclwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJzdC1oZWFkZXItbG9nb1wiPlxuICogICAgICAgIDwhLS0gTG9nbyBhcyBzdmcsIGltYWdlLCBldGMuIC0tPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJzdC1oZWFkZXItdXNlci1tZW51XCI+XG4gKiAgICAgICAgPCEtLSBSaWdodCBoZWFkZXIgbWVudSwgd2l0aCB1c2VyIG1lbnUsIG5vdGlmaWNhdGlvbnMsIGV0YyAtLT5cbiAqICAgICA8L2Rpdj5cbiAqXG4gKiAgPC9zdC1oZWFkZXI+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWhlYWRlcicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgIC8qKiBASW5wdXQge1N0SGVhZGVyTWVudU9wdGlvbltdfSBbbWVudV0gQXJyYXkgd2l0aCBtZW51IG9wdGlvbiB0byBzaG93ICovXG4gICBASW5wdXQoKSBtZW51OiBTdEhlYWRlck1lbnVPcHRpb25bXSA9IFtdO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW25hdmlnYXRlQnlEZWZhdWx0XSBUcnVlIGlmIHdlIHdhbnQgbWVudSB0byBtYW5hZ2UgbmF2aWdhdGlvbiwgZmFsc2UgaWYgbmF2aWdhdGlvbiB3aWxsIGJlIG1hbmFnZWQgZnJvbSB0aGUgb3V0c2lkZSAqL1xuICAgQElucHV0KCkgbmF2aWdhdGVCeURlZmF1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAvKiogQE91dHB1dCB7U3RIZWFkZXJTZWxlY3Rpb259IFtzZWxlY3RNZW51XSBOb3RpZnkgYW55IG1lbnUgb3B0aW9uIHNlbGVjdGlvbiAqL1xuICAgQE91dHB1dCgpIHNlbGVjdE1lbnU6IEV2ZW50RW1pdHRlcjxTdEhlYWRlclNlbGVjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0SGVhZGVyU2VsZWN0aW9uPigpO1xuXG4gICBAVmlld0NoaWxkKCdoZWFkZXJEaXZFbGVtZW50JywgeyBzdGF0aWM6IGZhbHNlIH0pIGhlYWRlckRpdkVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICBAVmlld0NoaWxkKCdoZWFkZXJGaXhQYXJ0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGhlYWRlckZpeFBhcnQ6IEVsZW1lbnRSZWY7XG4gICBAVmlld0NoaWxkKCd1c2VyTWVudUNvbnRhaW5lckVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSB1c2VyTWVudUNvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuICAgcHVibGljIHNob3dNZW51TmFtZXM6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBwcml2YXRlIF9oZWFkZXJTaXplOiBudW1iZXIgPSAwO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZVJlZjogU3RXaW5kb3dSZWZTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgICkgeyB9XG5cbiAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9oZWFkZXJTaXplID0gdGhpcy5oZWFkZXJGaXhQYXJ0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyB0aGlzLnVzZXJNZW51RWxlbWVudFdpZHRoICsgMjA7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIHRoaXMuY2hlY2tNZW51TGFiZWxWaXNpYmlsaXR5KCk7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgW10pXG4gICBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hlY2tNZW51TGFiZWxWaXNpYmlsaXR5KCk7XG4gICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgIH1cblxuICAgcHVibGljIGdldCBpZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuaWQgfHwgJ3N0LWhlYWRlcic7XG4gICB9XG5cbiAgIHB1YmxpYyBvblNlbGVjdE1lbnUoc2VsZWN0ZWQ6IFN0SGVhZGVyU2VsZWN0aW9uKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5uYXZpZ2F0ZUJ5RGVmYXVsdCkge1xuICAgICAgICAgaWYgKHNlbGVjdGVkLmV4dGVybmFsKSB7XG4gICAgICAgICAgICB0aGlzLl93aW5kb3dTZXJ2aWNlUmVmLm5hdGl2ZVdpbmRvdy5vcGVuKHNlbGVjdGVkLmxpbmssIHNlbGVjdGVkLm9wZW5Jbk5ld1BhZ2UgPyAnX2JsYW5rJyA6ICdfc2VsZicpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbc2VsZWN0ZWQubGlua10pO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZWxlY3RNZW51LmVtaXQoc2VsZWN0ZWQpO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0IG1lbnVDb250YWluZXJJZCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaWR9LW1lbnVgO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0IHVzZXJNZW51RWxlbWVudFdpZHRoKCk6IG51bWJlciB7XG4gICAgICBjb25zdCB1c2VyTWVudUNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB0aGlzLnVzZXJNZW51Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIGlmICh1c2VyTWVudUNvbnRhaW5lci5jaGlsZHJlbiAmJiB1c2VyTWVudUNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICByZXR1cm4gdXNlck1lbnVDb250YWluZXIuY2hpbGRyZW5bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIHVzZXJNZW51Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGNoZWNrTWVudUxhYmVsVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHdpbmRvd1NpemU6IG51bWJlciA9IHRoaXMuX3dpbmRvd1NlcnZpY2VSZWYubmF0aXZlV2luZG93LmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBjYW5TaG93TWVudU5hbWVzID0gdGhpcy5faGVhZGVyU2l6ZSA8PSB3aW5kb3dTaXplO1xuICAgICAgaWYgKHRoaXMuc2hvd01lbnVOYW1lcyAhPT0gY2FuU2hvd01lbnVOYW1lcykge1xuICAgICAgICAgdGhpcy5zaG93TWVudU5hbWVzID0gY2FuU2hvd01lbnVOYW1lcztcbiAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgfVxufVxuIl19