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
var StFooterComponent = /** @class */ (function () {
    function StFooterComponent(router) {
        this.router = router;
        this.links = [];
        this.link = new EventEmitter();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    StFooterComponent.prototype.goToLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        if (link.url) {
            window.open(link.url, '_blank');
        }
        if (link.router) {
            this.router.navigate([link.router]);
        }
        this.link.emit(link);
    };
    StFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-footer',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<footer class=\"footer st-footer\">\n   <div class=\"st-footer-container\">\n      <div class=\"logo st-footer-logo\" *ngIf=\"image\">\n         <img [src]=\"image\">\n      </div>\n      <div class=\"st-footer-content\">\n         <span class=\"text st-footer-text\" *ngIf=\"rightsText\">{{ rightsText }}</span>\n\n         <ul class=\"st-footer-links links\" *ngIf=\"links.length\">\n            <li *ngFor=\"let link of links; let index = index\">\n               <span *ngIf=\"link.icon\" class=\"icon\" [ngClass]=\"link.icon\" [title]=\"link.title\" (click)=\"goToLink(link)\"></span>\n               <span  *ngIf=\"!link.icon\" class=\"link\" (click)=\"goToLink(link)\" [attr.id]=\"qaTag + '-link-' + index\">{{ link.title }}</span>\n            </li>\n         </ul>\n      </div>\n   </div>\n</footer>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.footer{width:100%;height:215px;padding:55px 30px 35px}.footer .st-footer-container{display:flex;flex-direction:column;justify-content:space-between;height:100%}.footer .st-footer-container .st-footer-content{display:flex;flex-direction:row;justify-content:space-between}.footer .text{display:inline-block;margin:0;padding:0}.footer .links{display:inline;list-style:none;margin:0;padding:0}.footer .links li{display:inline-block;cursor:pointer}.footer .links .separator{margin:0 5px}.footer .logo{margin:0;position:relative}.footer .logo img{width:auto;max-height:100%}"]
                }] }
    ];
    /** @nocollapse */
    StFooterComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    StFooterComponent.propDecorators = {
        rightsText: [{ type: Input }],
        links: [{ type: Input }],
        qaTag: [{ type: Input }],
        image: [{ type: Input }],
        link: [{ type: Output }]
    };
    return StFooterComponent;
}());
export { StFooterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZm9vdGVyL3N0LWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJekM7SUFjRSwyQkFDVyxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5oQixVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUcxQixTQUFJLEdBQStCLElBQUksWUFBWSxFQUFnQixDQUFDO0lBSTFFLENBQUM7Ozs7O0lBRUwsb0NBQVE7Ozs7SUFBUixVQUFTLElBQWtCO1FBQ3hCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiw2dUNBQXlDO29CQUV6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVRRLE1BQU07Ozs2QkFZWixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLE1BQU07O0lBbUJULHdCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F6QlksaUJBQWlCOzs7SUFFNUIsdUNBQTRCOztJQUM1QixrQ0FBb0M7O0lBQ3BDLGtDQUF1Qjs7SUFDdkIsa0NBQXVCOztJQUN2QixpQ0FBOEU7Ozs7O0lBRzNFLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdEZvb3RlckxpbmsgfSBmcm9tICcuL3N0LWZvb3Rlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0LWZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC1mb290ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdC1mb290ZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RGb290ZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHJpZ2h0c1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbGlua3M6IFN0Rm9vdGVyTGlua1tdID0gW107XG4gIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBsaW5rOiBFdmVudEVtaXR0ZXI8U3RGb290ZXJMaW5rPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RGb290ZXJMaW5rPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgZ29Ub0xpbmsobGluazogU3RGb290ZXJMaW5rKTogdm9pZCB7XG4gICAgIGlmIChsaW5rLnVybCkge1xuICAgICAgICB3aW5kb3cub3BlbihsaW5rLnVybCwgJ19ibGFuaycpO1xuICAgICB9XG5cbiAgICAgaWYgKGxpbmsucm91dGVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtsaW5rLnJvdXRlcl0pO1xuICAgICB9XG5cbiAgICAgdGhpcy5saW5rLmVtaXQobGluayk7XG4gIH1cblxuXG59XG4iXX0=