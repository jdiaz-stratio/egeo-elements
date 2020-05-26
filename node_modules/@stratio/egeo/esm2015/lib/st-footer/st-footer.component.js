/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-footer/st-footer.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
export class StFooterComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.links = [];
        this.link = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    goToLink(link) {
        if (link.url) {
            window.open(link.url, '_blank');
        }
        if (link.router) {
            this.router.navigate([link.router]);
        }
        this.link.emit(link);
    }
}
StFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-footer',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<footer class=\"footer st-footer\">\n   <div class=\"st-footer-container\">\n      <div class=\"logo st-footer-logo\" *ngIf=\"image\">\n         <img [src]=\"image\">\n      </div>\n      <div class=\"st-footer-content\">\n         <span class=\"text st-footer-text\" *ngIf=\"rightsText\">{{ rightsText }}</span>\n\n         <ul class=\"st-footer-links links\" *ngIf=\"links.length\">\n            <li *ngFor=\"let link of links; let index = index\">\n               <span *ngIf=\"link.icon\" class=\"icon\" [ngClass]=\"link.icon\" [title]=\"link.title\" (click)=\"goToLink(link)\"></span>\n               <span  *ngIf=\"!link.icon\" class=\"link\" (click)=\"goToLink(link)\" [attr.id]=\"qaTag + '-link-' + index\">{{ link.title }}</span>\n            </li>\n         </ul>\n      </div>\n   </div>\n</footer>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.footer{width:100%;height:215px;padding:55px 30px 35px}.footer .st-footer-container{display:flex;flex-direction:column;justify-content:space-between;height:100%}.footer .st-footer-container .st-footer-content{display:flex;flex-direction:row;justify-content:space-between}.footer .text{display:inline-block;margin:0;padding:0}.footer .links{display:inline;list-style:none;margin:0;padding:0}.footer .links li{display:inline-block;cursor:pointer}.footer .links .separator{margin:0 5px}.footer .logo{margin:0;position:relative}.footer .logo img{width:auto;max-height:100%}"]
            }] }
];
/** @nocollapse */
StFooterComponent.ctorParameters = () => [
    { type: Router }
];
StFooterComponent.propDecorators = {
    rightsText: [{ type: Input }],
    links: [{ type: Input }],
    qaTag: [{ type: Input }],
    image: [{ type: Input }],
    link: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StFooterComponent.prototype.rightsText;
    /** @type {?} */
    StFooterComponent.prototype.links;
    /** @type {?} */
    StFooterComponent.prototype.qaTag;
    /** @type {?} */
    StFooterComponent.prototype.image;
    /** @type {?} */
    StFooterComponent.prototype.link;
    /**
     * @type {?}
     * @private
     */
    StFooterComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZm9vdGVyL3N0LWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFVekMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQVE1QixZQUNXLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTmhCLFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBRzFCLFNBQUksR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFJMUUsQ0FBQzs7Ozs7SUFFTCxRQUFRLENBQUMsSUFBa0I7UUFDeEIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDZ1Q0FBeUM7Z0JBRXpDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVRRLE1BQU07Ozt5QkFZWixLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLE1BQU07Ozs7SUFKUCx1Q0FBNEI7O0lBQzVCLGtDQUFvQzs7SUFDcEMsa0NBQXVCOztJQUN2QixrQ0FBdUI7O0lBQ3ZCLGlDQUE4RTs7Ozs7SUFHM0UsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN0Rm9vdGVyTGluayB9IGZyb20gJy4vc3QtZm9vdGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0LWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0LWZvb3Rlci5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdEZvb3RlckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgcmlnaHRzVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBsaW5rczogU3RGb290ZXJMaW5rW10gPSBbXTtcbiAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiAgQE91dHB1dCgpIGxpbms6IEV2ZW50RW1pdHRlcjxTdEZvb3Rlckxpbms+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdEZvb3Rlckxpbms+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7IH1cblxuICBnb1RvTGluayhsaW5rOiBTdEZvb3RlckxpbmspOiB2b2lkIHtcbiAgICAgaWYgKGxpbmsudXJsKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGxpbmsudXJsLCAnX2JsYW5rJyk7XG4gICAgIH1cblxuICAgICBpZiAobGluay5yb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2xpbmsucm91dGVyXSk7XG4gICAgIH1cblxuICAgICB0aGlzLmxpbmsuZW1pdChsaW5rKTtcbiAgfVxuXG5cbn1cbiJdfQ==