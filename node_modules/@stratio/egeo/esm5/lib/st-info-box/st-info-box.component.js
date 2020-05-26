/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-info-box/st-info-box.component.ts
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
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
var StInfoBoxComponent = /** @class */ (function () {
    function StInfoBoxComponent() {
    }
    /**
     * @return {?}
     */
    StInfoBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.title === undefined) {
            throw new Error('st-info-box: title is a required field');
        }
        this.styleValue = this.getStyles();
    };
    /**
     * @return {?}
     */
    StInfoBoxComponent.prototype.getStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = {};
        if (this.width !== undefined) {
            Object.assign(result, {
                'width': this.width + "px",
                'min-width': this.width + "px",
                'max-width': this.width + "px"
            });
        }
        if (this.height !== undefined) {
            Object.assign(result, {
                'height': this.height + "px",
                'min-height': this.height + "px",
                'max-height': this.height + "px"
            });
        }
        return result;
    };
    StInfoBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-info-box',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-info-box sth-info-box\" [ngStyle]=\"styleValue\">\n   <div class=\"st-info-box__header sth-info-box__header\">\n      <label class=\"st-info-box__header__text sth-info-box__header__text\">  <i *ngIf=\"icon\" [ngClass]=\"icon\" class=\"st-info-box__header__icon sth-info-box__header__icon\"></i>{{title}}</label>\n   </div>\n   <div class=\"st-info-box__content\">\n      <ng-content></ng-content>\n   </div>\n</section>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-info-box{margin:0;height:100%;width:100%;overflow-x:auto}.st-info-box__header{display:block;width:100%;height:50px;line-height:52px;padding:0 30px}.st-info-box__header__icon{width:20px;height:20px;margin-right:10px}.st-info-box__header__text{font-size:18px}.st-info-box__content{padding:20px 30px 30px}:host{display:block}"]
                }] }
    ];
    /** @nocollapse */
    StInfoBoxComponent.ctorParameters = function () { return []; };
    StInfoBoxComponent.propDecorators = {
        icon: [{ type: Input }],
        title: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }]
    };
    return StInfoBoxComponent;
}());
export { StInfoBoxComponent };
if (false) {
    /** @type {?} */
    StInfoBoxComponent.prototype.icon;
    /** @type {?} */
    StInfoBoxComponent.prototype.title;
    /** @type {?} */
    StInfoBoxComponent.prototype.width;
    /** @type {?} */
    StInfoBoxComponent.prototype.height;
    /** @type {?} */
    StInfoBoxComponent.prototype.styleValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaW5mby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1pbmZvLWJveC9zdC1pbmZvLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEY7SUFnQkc7SUFBZ0IsQ0FBQzs7OztJQUVqQixxQ0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7O1lBQ08sTUFBTSxHQUFXLEVBQUU7UUFDdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsT0FBTyxFQUFLLElBQUksQ0FBQyxLQUFLLE9BQUk7Z0JBQzFCLFdBQVcsRUFBSyxJQUFJLENBQUMsS0FBSyxPQUFJO2dCQUM5QixXQUFXLEVBQUssSUFBSSxDQUFDLEtBQUssT0FBSTthQUNoQyxDQUFDLENBQUM7U0FDTDtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLFFBQVEsRUFBSyxJQUFJLENBQUMsTUFBTSxPQUFJO2dCQUM1QixZQUFZLEVBQUssSUFBSSxDQUFDLE1BQU0sT0FBSTtnQkFDaEMsWUFBWSxFQUFLLElBQUksQ0FBQyxNQUFNLE9BQUk7YUFDbEMsQ0FBQyxDQUFDO1NBQ0w7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNqQixDQUFDOztnQkExQ0gsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyM0JBQTJDO29CQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7Ozt1QkFHRyxLQUFLO3dCQUNMLEtBQUs7d0JBRUwsS0FBSzt5QkFDTCxLQUFLOztJQWdDVCx5QkFBQztDQUFBLEFBNUNELElBNENDO1NBckNZLGtCQUFrQjs7O0lBQzVCLGtDQUFzQjs7SUFDdEIsbUNBQXVCOztJQUV2QixtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFFeEIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1pbmZvLWJveCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtaW5mby1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtaW5mby1ib3guY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3RJbmZvQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcblxuICAgcHVibGljIHN0eWxlVmFsdWU6IE9iamVjdDtcblxuICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0LWluZm8tYm94OiB0aXRsZSBpcyBhIHJlcXVpcmVkIGZpZWxkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0eWxlVmFsdWUgPSB0aGlzLmdldFN0eWxlcygpO1xuICAgfVxuXG4gICBnZXRTdHlsZXMoKTogT2JqZWN0IHtcbiAgICAgIGxldCByZXN1bHQ6IE9iamVjdCA9IHt9O1xuICAgICAgaWYgKHRoaXMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICd3aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgJ21pbi13aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgJ21heC13aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgXG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwge1xuICAgICAgICAgICAgJ2hlaWdodCc6IGAke3RoaXMuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICdtaW4taGVpZ2h0JzogYCR7dGhpcy5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgJ21heC1oZWlnaHQnOiBgJHt0aGlzLmhlaWdodH1weGBcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgIH1cblxufVxuIl19