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
export class StModal2Component {
    constructor() {
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
    onKeydownHandler(event) {
        if (this.closeOnEscape && event.keyCode === this.ESCAPE_KEYCODE) {
            this.onClose.emit();
        }
        if (event.keyCode === this.ENTER_KEYCODE) {
            this.onEnter.emit();
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbW9kYWwyL3N0LW1vZGFsMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFROUcsTUFBTSxPQUFPLGlCQUFpQjtJQU45QjtRQVNXLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUl2QixZQUFPLEdBQXVCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDdkQsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBRXpELG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO0lBV3JDLENBQUM7Ozs7O0lBVCtDLGdCQUFnQixDQUFDLEtBQW9CO1FBQ2pGLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQix1dUNBQXlDO2dCQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozt5QkFHRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBRUwsTUFBTTtzQkFDTixNQUFNOytCQUtOLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVo1Qyx1Q0FBNkI7O0lBQzdCLGtDQUE2Qjs7SUFDN0IsdUNBQWlDOztJQUNqQywwQ0FBZ0M7O0lBQ2hDLHlDQUErQjs7SUFFL0Isb0NBQWlFOztJQUNqRSxvQ0FBaUU7Ozs7O0lBRWpFLDJDQUFvQzs7Ozs7SUFDcEMsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0LW1vZGFsMicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC1tb2RhbDIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdC1tb2RhbDIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RNb2RhbDJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGVtcHR5TW9kYWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSA2MDA7XG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBjbG9zZU9uRXNjYXBlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWRlQ2xvc2VCdG46IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIG9uRW50ZXI6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBwcml2YXRlIEVTQ0FQRV9LRVlDT0RFOiBudW1iZXIgPSAyNztcbiAgcHJpdmF0ZSBFTlRFUl9LRVlDT0RFOiBudW1iZXIgPSAxMztcblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsb3NlT25Fc2NhcGUgJiYgZXZlbnQua2V5Q29kZSA9PT0gdGhpcy5FU0NBUEVfS0VZQ09ERSkge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gdGhpcy5FTlRFUl9LRVlDT0RFKSB7XG4gICAgICB0aGlzLm9uRW50ZXIuZW1pdCgpO1xuICAgIH1cbiAgfVxufVxuIl19