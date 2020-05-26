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
export class StPopComponent {
    /**
     * @param {?} _el
     * @param {?} _cd
     */
    constructor(_el, _cd) {
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
    /**
     * \@Input {boleean} [hidden=true]  TRUE: show pop content, FALSE: hide pop content
     * @param {?} value
     * @return {?}
     */
    set hidden(value) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (!value) {
                this.calculatePosition();
            }
            this._hidden = value;
            this._cd.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    get hidden() {
        return this._hidden;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.calculatePosition();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.calculatePosition();
    }
    /**
     * @return {?}
     */
    updateWidth() {
        this.calculatePosition();
    }
    /**
     * @private
     * @return {?}
     */
    getContentElement() {
        return this._el.nativeElement.querySelector('[pop-content]');
    }
    /**
     * @private
     * @return {?}
     */
    calculatePosition() {
        /** @type {?} */
        const buttonParentEl = this._el.nativeElement.querySelector('[pop-button]');
        /** @type {?} */
        const contentEl = this.getContentElement();
        /** @type {?} */
        const buttonEl = buttonParentEl && buttonParentEl.firstElementChild ?
            buttonParentEl.firstElementChild : undefined;
        if (buttonEl) {
            /** @type {?} */
            const coords = this.getCoords(buttonEl);
            contentEl.style.position = 'absolute';
            contentEl.style.transform = `translate3d(${coords.x}px, ${coords.y}px, ${coords.z}px)`;
        }
    }
    /**
     * @private
     * @param {?} buttonEl
     * @return {?}
     */
    getCoords(buttonEl) {
        /** @type {?} */
        const coords = { x: 0, y: 0, z: 0 };
        /** @type {?} */
        const direction = this.openToLeft ? this.getContentElement().getBoundingClientRect().width : 0;
        /** @type {?} */
        const clientRect = buttonEl.getBoundingClientRect();
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
    }
}
StPopComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-pop',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content select=[pop-button]></ng-content>\n<div [style.visibility]=\"hidden ? 'hidden' : 'visible'\" class=\"content\">\n   <ng-content select=[pop-content]></ng-content>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.content{height:0}"]
            }] }
];
/** @nocollapse */
StPopComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
StPopComponent.propDecorators = {
    placement: [{ type: Input }],
    offset: [{ type: Input }],
    openToLeft: [{ type: Input }],
    hidden: [{ type: Input }],
    updateWidth: [{ type: HostListener, args: ['window:load',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtcG9wL3N0LXBvcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRWhLLE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCN0QsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBNEJ4QixZQUFvQixHQUFlLEVBQVUsR0FBc0I7UUFBL0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBekIxRCxjQUFTLEdBQW1CLGNBQWMsQ0FBQyxZQUFZLENBQUM7Ozs7UUFHeEQsV0FBTSxHQUFnQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7O1FBRXJDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFN0IsWUFBTyxHQUFZLElBQUksQ0FBQztJQW1CaEMsQ0FBQzs7Ozs7O0lBaEJELElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdEIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7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QUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDOzs7WUFsR0gsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxRQUFRO2dCQUVsQiwwbkJBQXNDO2dCQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7Ozs7WUE3QjhFLFVBQVU7WUFBeEMsaUJBQWlCOzs7d0JBaUM5RCxLQUFLO3FCQUdMLEtBQUs7eUJBRUwsS0FBSztxQkFLTCxLQUFLOzBCQTBCTCxZQUFZLFNBQUMsYUFBYTs7Ozs7OztJQXBDM0IsbUNBQWlFOzs7OztJQUdqRSxnQ0FBOEM7Ozs7O0lBRTlDLG9DQUFxQzs7Ozs7SUFFckMsaUNBQWdDOzs7OztJQWtCcEIsNkJBQXVCOzs7OztJQUFFLDZCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFBvcE9mZnNldCwgU3RQb3BQbGFjZW1lbnQgfSBmcm9tICcuL3N0LXBvcC5tb2RlbCc7XG5cbi8vIEludGVybmFsIHR5cGVcbnR5cGUgU3RDb29yZHMgPSB7IHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIgfTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1BvcF1cbiAqXG4gKiBUaGUgcG9wIGlzIGEgY29tcG9uZW50IGZvciBtYW5hZ2UgZmxvYXRpbmcgZWxlbWVudHMgbGlrZSBwb3B1cHMgb3IgZHJvcGRvd24tbWVudS4gVGhpcyBlbGVtZW50IG5lZWQgdHdvIGVsZW1lbnQgaW5zaWRlLFxuICogYSBidXR0b24gZWxlbWVudCB0aGF0IGxhdW5jaCBwb3BwZXIgYW5kIGEgY29udGVudCBlbGVtZW50IHRoYXQgd2hvc2UgcG9zaXRpb24gd2lsbCBiZSByZWxhdGl2byB0byBidXR0b24gZWxlbWVudC5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXBvcCBbaGlkZGVuXT1cImZhbHNlXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XG4gKiAgICA8ZGl2IHBvcC1idXR0b24+QnV0dG9uPC9kaXY+XG4gKiAgICA8ZGl2IHBvcC1jb250ZW50PkNvbnRlbnQ8L2Rpdj5cbiAqIDwvc3QtcG9wPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1wb3AnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtcG9wLmNvbXBvbmVudC5zY3NzJ10sXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcG9wLmNvbXBvbmVudC5odG1sJyxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0UG9wQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgIC8qKiBASW5wdXQge1N0UG9wUGxhY2VtZW50fSBbcGxhY2VtZW50PVN0UG9wUGxhY2VtZW50LkJPVE9NX1NUQVJUXSBEZWZpbmUgcG9zaXRpb24gb2YgY29udGVudCByZWxhdGl2ZSB0byBidXR0b24gKi9cbiAgIEBJbnB1dCgpIHBsYWNlbWVudDogU3RQb3BQbGFjZW1lbnQgPSBTdFBvcFBsYWNlbWVudC5CT1RUT01fU1RBUlQ7XG5cbiAgIC8qKiBASW5wdXQge1N0UG9wT2Zmc2V0fSBbb2Zmc2V0PXt4OiAwICwgeTogMH1dIEZvciBwb3NpdGlvbiB3aXRoIG9mZnNldCBpbiB4IG8geSBheGlzICovXG4gICBASW5wdXQoKSBvZmZzZXQ6IFN0UG9wT2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG4gICAvKiogQElucHV0IHtib29sZWFufSBbb3BlblRvTGVmdD1mYWxzZV0gRm9yIGNhbGN1bGF0aW5nIGFsbCBwb3NpdGlvbnMgZnJvbSB0aGUgcmlnaHQgY29ybmVyICovXG4gICBASW5wdXQoKSBvcGVuVG9MZWZ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgIHByaXZhdGUgX2hpZGRlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgIC8qKiBASW5wdXQge2JvbGVlYW59IFtoaWRkZW49dHJ1ZV0gIFRSVUU6IHNob3cgcG9wIGNvbnRlbnQsIEZBTFNFOiBoaWRlIHBvcCBjb250ZW50ICAqL1xuICAgQElucHV0KClcbiAgIHNldCBoaWRkZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgfVxuICAgICAgICAgdGhpcy5faGlkZGVuID0gdmFsdWU7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgfVxuXG4gICBnZXQgaGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2hpZGRlbjtcbiAgIH1cblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgfVxuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICB9XG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oKTtcbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmxvYWQnKVxuICAgdXBkYXRlV2lkdGgoKTogdm9pZCB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0Q29udGVudEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgcmV0dXJuIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignW3BvcC1jb250ZW50XScpO1xuICAgfVxuXG4gICBwcml2YXRlIGNhbGN1bGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgYnV0dG9uUGFyZW50RWw6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbcG9wLWJ1dHRvbl0nKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRFbDogSFRNTEVsZW1lbnQgPSB0aGlzLmdldENvbnRlbnRFbGVtZW50KCk7XG4gICAgICBjb25zdCBidXR0b25FbDogRWxlbWVudCB8IHVuZGVmaW5lZCA9IGJ1dHRvblBhcmVudEVsICYmIGJ1dHRvblBhcmVudEVsLmZpcnN0RWxlbWVudENoaWxkID9cbiAgICAgICAgIGJ1dHRvblBhcmVudEVsLmZpcnN0RWxlbWVudENoaWxkIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKGJ1dHRvbkVsKSB7XG4gICAgICAgICBjb25zdCBjb29yZHM6IFN0Q29vcmRzID0gdGhpcy5nZXRDb29yZHMoYnV0dG9uRWwpO1xuXG4gICAgICAgICBjb250ZW50RWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgY29udGVudEVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke2Nvb3Jkcy54fXB4LCAke2Nvb3Jkcy55fXB4LCAke2Nvb3Jkcy56fXB4KWA7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0Q29vcmRzKGJ1dHRvbkVsOiBFbGVtZW50KTogU3RDb29yZHMge1xuICAgICAgY29uc3QgY29vcmRzOiBTdENvb3JkcyA9IHsgeDogMCwgeTogMCwgejogMCB9O1xuICAgICAgY29uc3QgZGlyZWN0aW9uOiBudW1iZXIgPSB0aGlzLm9wZW5Ub0xlZnQgPyB0aGlzLmdldENvbnRlbnRFbGVtZW50KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiAwO1xuICAgICAgY29uc3QgY2xpZW50UmVjdDogQ2xpZW50UmVjdCA9IGJ1dHRvbkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMucGxhY2VtZW50KSB7XG4gICAgICAgICBjYXNlIFN0UG9wUGxhY2VtZW50LkJPVFRPTTpcbiAgICAgICAgICAgIGNvb3Jkcy54ID0gY2xpZW50UmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGNhc2UgU3RQb3BQbGFjZW1lbnQuQk9UVE9NX0VORDpcbiAgICAgICAgICAgIGNvb3Jkcy54ID0gY2xpZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBTdFBvcFBsYWNlbWVudC5UT1A6XG4gICAgICAgICAgICBjb29yZHMueSA9IGNsaWVudFJlY3QuaGVpZ2h0ICogLTE7XG4gICAgICAgICAgICBjb29yZHMueCA9IGNsaWVudFJlY3Qud2lkdGggLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIFN0UG9wUGxhY2VtZW50LlRPUF9TVEFSVDpcbiAgICAgICAgICAgIGNvb3Jkcy55ID0gY2xpZW50UmVjdC5oZWlnaHQgKiAtMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBTdFBvcFBsYWNlbWVudC5UT1BfRU5EOlxuICAgICAgICAgICAgY29vcmRzLnkgPSBjbGllbnRSZWN0LmhlaWdodCAqIC0xO1xuICAgICAgICAgICAgY29vcmRzLnggPSBjbGllbnRSZWN0LndpZHRoO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvb3Jkcy54ID0gTWF0aC5jZWlsKGNvb3Jkcy54ICsgdGhpcy5vZmZzZXQueCAtIGRpcmVjdGlvbik7XG4gICAgICBjb29yZHMueSA9IE1hdGguY2VpbChjb29yZHMueSArIHRoaXMub2Zmc2V0LnkpO1xuXG4gICAgICByZXR1cm4gY29vcmRzO1xuICAgfVxufVxuIl19