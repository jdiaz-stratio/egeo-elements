/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/st-input-adjustable/st-input-adjustable.ts
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
import { Directive, ElementRef, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
export class StInputAdjustable {
    /**
     * @param {?} el
     * @param {?} ngModel
     */
    constructor(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.createHiddenTitle();
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            this.text = value || this.placeholder;
            this.hiddenTitle.innerText = this.text;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.el.nativeElement.parentNode.style.width = this.hiddenTitle.clientWidth + 10 + 'px';
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    createHiddenTitle() {
        if (!this.ngModel.value) {
            this.el.nativeElement.value = null;
            this.el.nativeElement.placeholder = this.placeholder;
        }
        this.hiddenTitle = this.el.nativeElement.parentNode.querySelector('.hidden-text');
        if (!this.hiddenTitle) {
            this.hiddenTitle = document.createElement('span');
            this.el.nativeElement.parentNode.appendChild(this.hiddenTitle);
        }
        this.hiddenTitle.className = 'hidden-text';
        this.hiddenTitle.style.visibility = 'hidden';
        this.hiddenTitle.style.position = 'absolute';
        this.hiddenTitle.style.textTransform = 'none';
        this.hiddenTitle.style.whiteSpace = 'nowrap';
        this.hiddenTitle.style.width = 'auto';
        this.hiddenTitle.style.height = 'auto';
    }
}
StInputAdjustable.decorators = [
    { type: Directive, args: [{
                selector: '[st-input-adjustable]'
            },] }
];
/** @nocollapse */
StInputAdjustable.ctorParameters = () => [
    { type: ElementRef },
    { type: NgModel }
];
StInputAdjustable.propDecorators = {
    placeholder: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StInputAdjustable.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.text;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.hiddenTitle;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.el;
    /**
     * @type {?}
     * @private
     */
    StInputAdjustable.prototype.ngModel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaW5wdXQtYWRqdXN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zdC1pbnB1dC1hZGp1c3RhYmxlL3N0LWlucHV0LWFkanVzdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUVKLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt6QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQU0zQixZQUFvQixFQUFjLEVBQ2QsT0FBZ0I7UUFEaEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFDcEMsQ0FBQzs7OztJQUVELGVBQWU7UUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZDLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDYixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1lBQzNGLENBQUMsRUFBQyxDQUFDO1FBQ04sQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLGlCQUFpQjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7O1lBMUNILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsdUJBQXVCO2FBQ25DOzs7O1lBUEUsVUFBVTtZQUdKLE9BQU87OzswQkFNWixLQUFLOzs7O0lBQU4sd0NBQTZCOzs7OztJQUU3QixpQ0FBcUI7Ozs7O0lBQ3JCLHdDQUFxQzs7Ozs7SUFFekIsK0JBQXNCOzs7OztJQUN0QixvQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBBZnRlclZpZXdJbml0LFxuICAgRGlyZWN0aXZlLFxuICAgRWxlbWVudFJlZixcbiAgIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICBzZWxlY3RvcjogJ1tzdC1pbnB1dC1hZGp1c3RhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RJbnB1dEFkanVzdGFibGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgIHByaXZhdGUgdGV4dDogc3RyaW5nO1xuICAgcHJpdmF0ZSBoaWRkZW5UaXRsZTogSFRNTFNwYW5FbGVtZW50O1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsKSB7XG4gICB9XG5cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3JlYXRlSGlkZGVuVGl0bGUoKTtcbiAgICAgIHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgIHRoaXMudGV4dCA9IHZhbHVlIHx8IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICAgICB0aGlzLmhpZGRlblRpdGxlLmlubmVyVGV4dCA9IHRoaXMudGV4dDtcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuc3R5bGUud2lkdGggPSB0aGlzLmhpZGRlblRpdGxlLmNsaWVudFdpZHRoICsgMTAgKyAncHgnO1xuICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBjcmVhdGVIaWRkZW5UaXRsZSgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5uZ01vZGVsLnZhbHVlKSB7XG4gICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICAgIHRoaXMuaGlkZGVuVGl0bGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuaGlkZGVuLXRleHQnKTtcbiAgICAgIGlmICghdGhpcy5oaWRkZW5UaXRsZSkge1xuICAgICAgICAgdGhpcy5oaWRkZW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuaGlkZGVuVGl0bGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGRlblRpdGxlLmNsYXNzTmFtZSA9ICdoaWRkZW4tdGV4dCc7XG4gICAgICB0aGlzLmhpZGRlblRpdGxlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIHRoaXMuaGlkZGVuVGl0bGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5oaWRkZW5UaXRsZS5zdHlsZS50ZXh0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgICAgdGhpcy5oaWRkZW5UaXRsZS5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG4gICAgICB0aGlzLmhpZGRlblRpdGxlLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgdGhpcy5oaWRkZW5UaXRsZS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XG4gICB9XG5cbn1cbiJdfQ==