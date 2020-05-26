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
var StInputAdjustable = /** @class */ (function () {
    function StInputAdjustable(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    /**
     * @return {?}
     */
    StInputAdjustable.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.createHiddenTitle();
        this.ngModel.valueChanges.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.text = value || _this.placeholder;
            _this.hiddenTitle.innerText = _this.text;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.el.nativeElement.parentNode.style.width = _this.hiddenTitle.clientWidth + 10 + 'px';
            }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StInputAdjustable.prototype.createHiddenTitle = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    StInputAdjustable.decorators = [
        { type: Directive, args: [{
                    selector: '[st-input-adjustable]'
                },] }
    ];
    /** @nocollapse */
    StInputAdjustable.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgModel }
    ]; };
    StInputAdjustable.propDecorators = {
        placeholder: [{ type: Input }]
    };
    return StInputAdjustable;
}());
export { StInputAdjustable };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaW5wdXQtYWRqdXN0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zdC1pbnB1dC1hZGp1c3RhYmxlL3N0LWlucHV0LWFkanVzdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUVKLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6QztJQVNHLDJCQUFvQixFQUFjLEVBQ2QsT0FBZ0I7UUFEaEIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFDcEMsQ0FBQzs7OztJQUVELDJDQUFlOzs7SUFBZjtRQUFBLGlCQVNDO1FBUkUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUN0QyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkMsVUFBVTs7O1lBQUM7Z0JBQ1IsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUMzRixDQUFDLEVBQUMsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTyw2Q0FBaUI7Ozs7SUFBekI7UUFDRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDMUMsQ0FBQzs7Z0JBMUNILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsdUJBQXVCO2lCQUNuQzs7OztnQkFQRSxVQUFVO2dCQUdKLE9BQU87Ozs4QkFNWixLQUFLOztJQXdDVCx3QkFBQztDQUFBLEFBNUNELElBNENDO1NBekNZLGlCQUFpQjs7O0lBQzNCLHdDQUE2Qjs7Ozs7SUFFN0IsaUNBQXFCOzs7OztJQUNyQix3Q0FBcUM7Ozs7O0lBRXpCLCtCQUFzQjs7Ozs7SUFDdEIsb0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQWZ0ZXJWaWV3SW5pdCxcbiAgIERpcmVjdGl2ZSxcbiAgIEVsZW1lbnRSZWYsXG4gICBJbnB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgc2VsZWN0b3I6ICdbc3QtaW5wdXQtYWRqdXN0YWJsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFN0SW5wdXRBZGp1c3RhYmxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgIHByaXZhdGUgaGlkZGVuVGl0bGU6IEhUTUxTcGFuRWxlbWVudDtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgIHByaXZhdGUgbmdNb2RlbDogTmdNb2RlbCkge1xuICAgfVxuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNyZWF0ZUhpZGRlblRpdGxlKCk7XG4gICAgICB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZSB8fCB0aGlzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgdGhpcy5oaWRkZW5UaXRsZS5pbm5lclRleHQgPSB0aGlzLnRleHQ7XG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLndpZHRoID0gdGhpcy5oaWRkZW5UaXRsZS5jbGllbnRXaWR0aCArIDEwICsgJ3B4JztcbiAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIHByaXZhdGUgY3JlYXRlSGlkZGVuVGl0bGUoKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMubmdNb2RlbC52YWx1ZSkge1xuICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgICB0aGlzLmhpZGRlblRpdGxlID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmhpZGRlbi10ZXh0Jyk7XG4gICAgICBpZiAoIXRoaXMuaGlkZGVuVGl0bGUpIHtcbiAgICAgICAgIHRoaXMuaGlkZGVuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLmhpZGRlblRpdGxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5oaWRkZW5UaXRsZS5jbGFzc05hbWUgPSAnaGlkZGVuLXRleHQnO1xuICAgICAgdGhpcy5oaWRkZW5UaXRsZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICB0aGlzLmhpZGRlblRpdGxlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuaGlkZGVuVGl0bGUuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICdub25lJztcbiAgICAgIHRoaXMuaGlkZGVuVGl0bGUuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgdGhpcy5oaWRkZW5UaXRsZS5zdHlsZS53aWR0aCA9ICdhdXRvJztcbiAgICAgIHRoaXMuaGlkZGVuVGl0bGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgfVxuXG59XG4iXX0=