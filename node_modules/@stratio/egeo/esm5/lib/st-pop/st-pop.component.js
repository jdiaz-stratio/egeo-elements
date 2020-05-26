/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pop/st-pop.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input } from '@angular/core';
import { StPopOffset, StPopPlacement } from './st-pop.model';
/**
 * \@description {Component} [Pop]
 *
 * The pop is a component for manage floating elements like popups or dropdown-menu. This element need two element inside,
 * a button element that launch popper and a content element that whose position will be relativo to button element.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-pop [hidden]="false" placement="bottom">
 *    <div pop-button>Button</div>
 *    <div pop-content>Content</div>
 * </st-pop>
 * ```
 */
var StPopComponent = /** @class */ (function () {
    function StPopComponent(_el, _cd) {
        this._el = _el;
        this._cd = _cd;
        /**
         * \@Input {StPopPlacement} [placement=StPopPlacement.BOTOM_START] Define position of content relative to button
         */
        this.placement = StPopPlacement.BOTTOM_START;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 0 };
        /**
         * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
         */
        this.openToLeft = false;
        this._hidden = true;
    }
    Object.defineProperty(StPopComponent.prototype, "hidden", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hidden;
        },
        /** @Input {boleean} [hidden=true]  TRUE: show pop content, FALSE: hide pop content  */
        set: /**
         * \@Input {boleean} [hidden=true]  TRUE: show pop content, FALSE: hide pop content
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (!value) {
                    _this.calculatePosition();
                }
                _this._hidden = value;
                _this._cd.markForCheck();
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StPopComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calculatePosition();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StPopComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.calculatePosition();
    };
    /**
     * @return {?}
     */
    StPopComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        this.calculatePosition();
    };
    /**
     * @private
     * @return {?}
     */
    StPopComponent.prototype.getContentElement = /**
     * @private
     * @return {?}
     */
    function () {
        return this._el.nativeElement.querySelector('[pop-content]');
    };
    /**
     * @private
     * @return {?}
     */
    StPopComponent.prototype.calculatePosition = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var buttonParentEl = this._el.nativeElement.querySelector('[pop-button]');
        /** @type {?} */
        var contentEl = this.getContentElement();
        /** @type {?} */
        var buttonEl = buttonParentEl && buttonParentEl.firstElementChild ?
            buttonParentEl.firstElementChild : undefined;
        if (buttonEl) {
            /** @type {?} */
            var coords = this.getCoords(buttonEl);
            contentEl.style.position = 'absolute';
            contentEl.style.transform = "translate3d(" + coords.x + "px, " + coords.y + "px, " + coords.z + "px)";
        }
    };
    /**
     * @private
     * @param {?} buttonEl
     * @return {?}
     */
    StPopComponent.prototype.getCoords = /**
     * @private
     * @param {?} buttonEl
     * @return {?}
     */
    function (buttonEl) {
        /** @type {?} */
        var coords = { x: 0, y: 0, z: 0 };
        /** @type {?} */
        var direction = this.openToLeft ? this.getContentElement().getBoundingClientRect().width : 0;
        /** @type {?} */
        var clientRect = buttonEl.getBoundingClientRect();
        switch (this.placement) {
            case StPopPlacement.BOTTOM:
                coords.x = clientRect.width / 2;
                break;
            case StPopPlacement.BOTTOM_END:
                coords.x = clientRect.width;
                break;
            case StPopPlacement.TOP:
                coords.y = clientRect.height * -1;
                coords.x = clientRect.width / 2;
                break;
            case StPopPlacement.TOP_START:
                coords.y = clientRect.height * -1;
                break;
            case StPopPlacement.TOP_END:
                coords.y = clientRect.height * -1;
                coords.x = clientRect.width;
                break;
            default:
                break;
        }
        coords.x = Math.ceil(coords.x + this.offset.x - direction);
        coords.y = Math.ceil(coords.y + this.offset.y);
        return coords;
    };
    StPopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-pop',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content select=[pop-button]></ng-content>\n<div [style.visibility]=\"hidden ? 'hidden' : 'visible'\" class=\"content\">\n   <ng-content select=[pop-content]></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.content{height:0}"]
                }] }
    ];
    /** @nocollapse */
    StPopComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    StPopComponent.propDecorators = {
        placement: [{ type: Input }],
        offset: [{ type: Input }],
        openToLeft: [{ type: Input }],
        hidden: [{ type: Input }],
        updateWidth: [{ type: HostListener, args: ['window:load',] }]
    };
    return StPopComponent;
}());
export { StPopComponent };
if (false) {
    /**
     * \@Input {StPopPlacement} [placement=StPopPlacement.BOTOM_START] Define position of content relative to button
     * @type {?}
     */
    StPopComponent.prototype.placement;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
     * @type {?}
     */
    StPopComponent.prototype.offset;
    /**
     * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
     * @type {?}
     */
    StPopComponent.prototype.openToLeft;
    /**
     * @type {?}
     * @private
     */
    StPopComponent.prototype._hidden;
    /**
     * @type {?}
     * @private
     */
    StPopComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    StPopComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtcG9wL3N0LXBvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWhLLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCN0Q7SUFrQ0csd0JBQW9CLEdBQWUsRUFBVSxHQUFzQjtRQUEvQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUF6QjFELGNBQVMsR0FBbUIsY0FBYyxDQUFDLFlBQVksQ0FBQzs7OztRQUd4RCxXQUFNLEdBQWdCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7UUFFckMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU3QixZQUFPLEdBQVksSUFBSSxDQUFDO0lBbUJoQyxDQUFDO0lBaEJELHNCQUNJLGtDQUFNOzs7O1FBVVY7WUFDRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdkIsQ0FBQztRQWRELHVGQUF1Rjs7Ozs7O1FBQ3ZGLFVBQ1csS0FBYztZQUR6QixpQkFTQztZQVBFLFVBQVU7OztZQUFDO2dCQUNSLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1QsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7aUJBQzNCO2dCQUNELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixLQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBQyxDQUFDO1FBQ04sQ0FBQzs7O09B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TUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDOztnQkFsR0gsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxRQUFRO29CQUVsQiwwbkJBQXNDO29CQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQTdCOEUsVUFBVTtnQkFBeEMsaUJBQWlCOzs7NEJBaUM5RCxLQUFLO3lCQUdMLEtBQUs7NkJBRUwsS0FBSzt5QkFLTCxLQUFLOzhCQTBCTCxZQUFZLFNBQUMsYUFBYTs7SUFzRDlCLHFCQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0E3RlksY0FBYzs7Ozs7O0lBR3hCLG1DQUFpRTs7Ozs7SUFHakUsZ0NBQThDOzs7OztJQUU5QyxvQ0FBcUM7Ozs7O0lBRXJDLGlDQUFnQzs7Ozs7SUFrQnBCLDZCQUF1Qjs7Ozs7SUFBRSw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RQb3BPZmZzZXQsIFN0UG9wUGxhY2VtZW50IH0gZnJvbSAnLi9zdC1wb3AubW9kZWwnO1xuXG4vLyBJbnRlcm5hbCB0eXBlXG50eXBlIFN0Q29vcmRzID0geyB4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyIH07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtQb3BdXG4gKlxuICogVGhlIHBvcCBpcyBhIGNvbXBvbmVudCBmb3IgbWFuYWdlIGZsb2F0aW5nIGVsZW1lbnRzIGxpa2UgcG9wdXBzIG9yIGRyb3Bkb3duLW1lbnUuIFRoaXMgZWxlbWVudCBuZWVkIHR3byBlbGVtZW50IGluc2lkZSxcbiAqIGEgYnV0dG9uIGVsZW1lbnQgdGhhdCBsYXVuY2ggcG9wcGVyIGFuZCBhIGNvbnRlbnQgZWxlbWVudCB0aGF0IHdob3NlIHBvc2l0aW9uIHdpbGwgYmUgcmVsYXRpdm8gdG8gYnV0dG9uIGVsZW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1wb3AgW2hpZGRlbl09XCJmYWxzZVwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICogICAgPGRpdiBwb3AtYnV0dG9uPkJ1dHRvbjwvZGl2PlxuICogICAgPGRpdiBwb3AtY29udGVudD5Db250ZW50PC9kaXY+XG4gKiA8L3N0LXBvcD5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtcG9wJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXBvcC5jb21wb25lbnQuc2NzcyddLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXBvcC5jb21wb25lbnQuaHRtbCcsXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFBvcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAvKiogQElucHV0IHtTdFBvcFBsYWNlbWVudH0gW3BsYWNlbWVudD1TdFBvcFBsYWNlbWVudC5CT1RPTV9TVEFSVF0gRGVmaW5lIHBvc2l0aW9uIG9mIGNvbnRlbnQgcmVsYXRpdmUgdG8gYnV0dG9uICovXG4gICBASW5wdXQoKSBwbGFjZW1lbnQ6IFN0UG9wUGxhY2VtZW50ID0gU3RQb3BQbGFjZW1lbnQuQk9UVE9NX1NUQVJUO1xuXG4gICAvKiogQElucHV0IHtTdFBvcE9mZnNldH0gW29mZnNldD17eDogMCAsIHk6IDB9XSBGb3IgcG9zaXRpb24gd2l0aCBvZmZzZXQgaW4geCBvIHkgYXhpcyAqL1xuICAgQElucHV0KCkgb2Zmc2V0OiBTdFBvcE9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW29wZW5Ub0xlZnQ9ZmFsc2VdIEZvciBjYWxjdWxhdGluZyBhbGwgcG9zaXRpb25zIGZyb20gdGhlIHJpZ2h0IGNvcm5lciAqL1xuICAgQElucHV0KCkgb3BlblRvTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBwcml2YXRlIF9oaWRkZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAvKiogQElucHV0IHtib2xlZWFufSBbaGlkZGVuPXRydWVdICBUUlVFOiBzaG93IHBvcCBjb250ZW50LCBGQUxTRTogaGlkZSBwb3AgY29udGVudCAgKi9cbiAgIEBJbnB1dCgpXG4gICBzZXQgaGlkZGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMuX2hpZGRlbiA9IHZhbHVlO1xuICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgZ2V0IGhpZGRlbigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9oaWRkZW47XG4gICB9XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgIH1cblxuICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgfVxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICB9XG5cbiAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpsb2FkJylcbiAgIHVwZGF0ZVdpZHRoKCk6IHZvaWQge1xuICAgICAgdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgfVxuXG4gICBwcml2YXRlIGdldENvbnRlbnRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1twb3AtY29udGVudF0nKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBjYWxjdWxhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGJ1dHRvblBhcmVudEVsOiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW3BvcC1idXR0b25dJyk7XG4gICAgICBjb25zdCBjb250ZW50RWw6IEhUTUxFbGVtZW50ID0gdGhpcy5nZXRDb250ZW50RWxlbWVudCgpO1xuICAgICAgY29uc3QgYnV0dG9uRWw6IEVsZW1lbnQgfCB1bmRlZmluZWQgPSBidXR0b25QYXJlbnRFbCAmJiBidXR0b25QYXJlbnRFbC5maXJzdEVsZW1lbnRDaGlsZCA/XG4gICAgICAgICBidXR0b25QYXJlbnRFbC5maXJzdEVsZW1lbnRDaGlsZCA6IHVuZGVmaW5lZDtcbiAgICAgIGlmIChidXR0b25FbCkge1xuICAgICAgICAgY29uc3QgY29vcmRzOiBTdENvb3JkcyA9IHRoaXMuZ2V0Q29vcmRzKGJ1dHRvbkVsKTtcblxuICAgICAgICAgY29udGVudEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgIGNvbnRlbnRFbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHtjb29yZHMueH1weCwgJHtjb29yZHMueX1weCwgJHtjb29yZHMuen1weClgO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGdldENvb3JkcyhidXR0b25FbDogRWxlbWVudCk6IFN0Q29vcmRzIHtcbiAgICAgIGNvbnN0IGNvb3JkczogU3RDb29yZHMgPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbjogbnVtYmVyID0gdGhpcy5vcGVuVG9MZWZ0ID8gdGhpcy5nZXRDb250ZW50RWxlbWVudCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMDtcbiAgICAgIGNvbnN0IGNsaWVudFJlY3Q6IENsaWVudFJlY3QgPSBidXR0b25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgc3dpdGNoICh0aGlzLnBsYWNlbWVudCkge1xuICAgICAgICAgY2FzZSBTdFBvcFBsYWNlbWVudC5CT1RUT006XG4gICAgICAgICAgICBjb29yZHMueCA9IGNsaWVudFJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIFN0UG9wUGxhY2VtZW50LkJPVFRPTV9FTkQ6XG4gICAgICAgICAgICBjb29yZHMueCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgU3RQb3BQbGFjZW1lbnQuVE9QOlxuICAgICAgICAgICAgY29vcmRzLnkgPSBjbGllbnRSZWN0LmhlaWdodCAqIC0xO1xuICAgICAgICAgICAgY29vcmRzLnggPSBjbGllbnRSZWN0LndpZHRoIC8gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBTdFBvcFBsYWNlbWVudC5UT1BfU1RBUlQ6XG4gICAgICAgICAgICBjb29yZHMueSA9IGNsaWVudFJlY3QuaGVpZ2h0ICogLTE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgU3RQb3BQbGFjZW1lbnQuVE9QX0VORDpcbiAgICAgICAgICAgIGNvb3Jkcy55ID0gY2xpZW50UmVjdC5oZWlnaHQgKiAtMTtcbiAgICAgICAgICAgIGNvb3Jkcy54ID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjb29yZHMueCA9IE1hdGguY2VpbChjb29yZHMueCArIHRoaXMub2Zmc2V0LnggLSBkaXJlY3Rpb24pO1xuICAgICAgY29vcmRzLnkgPSBNYXRoLmNlaWwoY29vcmRzLnkgKyB0aGlzLm9mZnNldC55KTtcblxuICAgICAgcmV0dXJuIGNvb3JkcztcbiAgIH1cbn1cbiJdfQ==