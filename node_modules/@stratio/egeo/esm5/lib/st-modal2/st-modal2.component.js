/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal2/st-modal2.component.ts
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
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';
var StModal2Component = /** @class */ (function () {
    function StModal2Component() {
        this.width = 600;
        this.modalTitle = '';
        this.onClose = new EventEmitter();
        this.onEnter = new EventEmitter();
        this.ESCAPE_KEYCODE = 27;
        this.ENTER_KEYCODE = 13;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StModal2Component.prototype.onKeydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.closeOnEscape && event.keyCode === this.ESCAPE_KEYCODE) {
            this.onClose.emit();
        }
        if (event.keyCode === this.ENTER_KEYCODE) {
            this.onEnter.emit();
        }
    };
    StModal2Component.decorators = [
        { type: Component, args: [{
                    selector: 'st-modal2',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-modal-container\">\n  <section class=\"st-modal\" [style.width.px]=\"width\">\n    <ng-container *ngIf=\"emptyModal\">\n      <ng-content></ng-content>\n    </ng-container>\n    <ng-container *ngIf=\"!emptyModal\">\n      <div class=\"st-modal-header\">\n        <div class=\"container\">\n          <p class=\"title\" *ngIf=\"modalTitle && modalTitle.length\">{{modalTitle}}</p>\n          <ng-content select=[st-modal-title]></ng-content>\n          <span class=\"icon-cross close-button\" \n            *ngIf=\"!hideCloseBtn\"\n            (click)=\"onClose.emit()\"></span>\n        </div>\n      </div>\n      <div class=\"st-modal-body\">\n        <div class=\"container\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </ng-container>\n  </section>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-modal-container{width:100%;height:100vh;position:fixed;left:0;top:0;display:flex}.st-modal-container .st-modal{margin:auto;align-self:center;display:flex;flex-direction:column}.st-modal-container .st-modal .st-modal-header{display:flex;flex-direction:row;width:100%;height:70px}.st-modal-container .st-modal .st-modal-header .container{align-items:center;flex-wrap:nowrap}.st-modal-container .st-modal .container{min-width:auto}"]
                }] }
    ];
    StModal2Component.propDecorators = {
        emptyModal: [{ type: Input }],
        width: [{ type: Input }],
        modalTitle: [{ type: Input }],
        closeOnEscape: [{ type: Input }],
        hideCloseBtn: [{ type: Input }],
        onClose: [{ type: Output }],
        onEnter: [{ type: Output }],
        onKeydownHandler: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return StModal2Component;
}());
export { StModal2Component };
if (false) {
    /** @type {?} */
    StModal2Component.prototype.emptyModal;
    /** @type {?} */
    StModal2Component.prototype.width;
    /** @type {?} */
    StModal2Component.prototype.modalTitle;
    /** @type {?} */
    StModal2Component.prototype.closeOnEscape;
    /** @type {?} */
    StModal2Component.prototype.hideCloseBtn;
    /** @type {?} */
    StModal2Component.prototype.onClose;
    /** @type {?} */
    StModal2Component.prototype.onEnter;
    /**
     * @type {?}
     * @private
     */
    StModal2Component.prototype.ESCAPE_KEYCODE;
    /**
     * @type {?}
     * @private
     */
    StModal2Component.prototype.ENTER_KEYCODE;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbW9kYWwyL3N0LW1vZGFsMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUc7SUFBQTtRQVNXLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUl2QixZQUFPLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdkQsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpELG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO0lBV3JDLENBQUM7Ozs7O0lBVCtDLDRDQUFnQjs7OztJQUE5RCxVQUErRCxLQUFvQjtRQUNqRixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdXVDQUF5QztvQkFFekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OzZCQUdFLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzswQkFFTCxNQUFNOzBCQUNOLE1BQU07bUNBS04sWUFBWSxTQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQVM5Qyx3QkFBQztDQUFBLEFBN0JELElBNkJDO1NBdkJZLGlCQUFpQjs7O0lBRTVCLHVDQUE2Qjs7SUFDN0Isa0NBQTZCOztJQUM3Qix1Q0FBaUM7O0lBQ2pDLDBDQUFnQzs7SUFDaEMseUNBQStCOztJQUUvQixvQ0FBaUU7O0lBQ2pFLG9DQUFpRTs7Ozs7SUFFakUsMkNBQW9DOzs7OztJQUNwQywwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QtbW9kYWwyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0LW1vZGFsMi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0LW1vZGFsMi5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdE1vZGFsMkNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZW1wdHlNb2RhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDYwMDtcbiAgQElucHV0KCkgbW9kYWxUaXRsZTogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIGNsb3NlT25Fc2NhcGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZGVDbG9zZUJ0bjogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgb25DbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgb25FbnRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgRVNDQVBFX0tFWUNPREU6IG51bWJlciA9IDI3O1xuICBwcml2YXRlIEVOVEVSX0tFWUNPREU6IG51bWJlciA9IDEzO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKSBvbktleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xvc2VPbkVzY2FwZSAmJiBldmVudC5rZXlDb2RlID09PSB0aGlzLkVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCgpO1xuICAgIH1cblxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSB0aGlzLkVOVEVSX0tFWUNPREUpIHtcbiAgICAgIHRoaXMub25FbnRlci5lbWl0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=