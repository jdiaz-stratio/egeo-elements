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
export class StInfoBoxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.title === undefined) {
            throw new Error('st-info-box: title is a required field');
        }
        this.styleValue = this.getStyles();
    }
    /**
     * @return {?}
     */
    getStyles() {
        /** @type {?} */
        let result = {};
        if (this.width !== undefined) {
            Object.assign(result, {
                'width': `${this.width}px`,
                'min-width': `${this.width}px`,
                'max-width': `${this.width}px`
            });
        }
        if (this.height !== undefined) {
            Object.assign(result, {
                'height': `${this.height}px`,
                'min-height': `${this.height}px`,
                'max-height': `${this.height}px`
            });
        }
        return result;
    }
}
StInfoBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-info-box',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-info-box sth-info-box\" [ngStyle]=\"styleValue\">\n   <div class=\"st-info-box__header sth-info-box__header\">\n      <label class=\"st-info-box__header__text sth-info-box__header__text\">  <i *ngIf=\"icon\" [ngClass]=\"icon\" class=\"st-info-box__header__icon sth-info-box__header__icon\"></i>{{title}}</label>\n   </div>\n   <div class=\"st-info-box__content\">\n      <ng-content></ng-content>\n   </div>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-info-box{margin:0;height:100%;width:100%;overflow-x:auto}.st-info-box__header{display:block;width:100%;height:50px;line-height:52px;padding:0 30px}.st-info-box__header__icon{width:20px;height:20px;margin-right:10px}.st-info-box__header__text{font-size:18px}.st-info-box__content{padding:20px 30px 30px}:host{display:block}"]
            }] }
];
/** @nocollapse */
StInfoBoxComponent.ctorParameters = () => [];
StInfoBoxComponent.propDecorators = {
    icon: [{ type: Input }],
    title: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaW5mby1ib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1pbmZvLWJveC9zdC1pbmZvLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFTbEYsTUFBTSxPQUFPLGtCQUFrQjtJQVM1QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsU0FBUzs7WUFDRixNQUFNLEdBQVcsRUFBRTtRQUN2QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNuQixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJO2dCQUMxQixXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJO2dCQUM5QixXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJO2FBQ2hDLENBQUMsQ0FBQztTQUNMO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSTtnQkFDNUIsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSTtnQkFDaEMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSTthQUNsQyxDQUFDLENBQUM7U0FDTDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2pCLENBQUM7OztZQTFDSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLDIzQkFBMkM7Z0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7Ozs7bUJBR0csS0FBSztvQkFDTCxLQUFLO29CQUVMLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUpOLGtDQUFzQjs7SUFDdEIsbUNBQXVCOztJQUV2QixtQ0FBdUI7O0lBQ3ZCLG9DQUF3Qjs7SUFFeEIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1pbmZvLWJveCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtaW5mby1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtaW5mby1ib3guY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3RJbmZvQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcblxuICAgcHVibGljIHN0eWxlVmFsdWU6IE9iamVjdDtcblxuICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy50aXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N0LWluZm8tYm94OiB0aXRsZSBpcyBhIHJlcXVpcmVkIGZpZWxkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0eWxlVmFsdWUgPSB0aGlzLmdldFN0eWxlcygpO1xuICAgfVxuXG4gICBnZXRTdHlsZXMoKTogT2JqZWN0IHtcbiAgICAgIGxldCByZXN1bHQ6IE9iamVjdCA9IHt9O1xuICAgICAgaWYgKHRoaXMud2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgT2JqZWN0LmFzc2lnbihyZXN1bHQsIHtcbiAgICAgICAgICAgICd3aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgJ21pbi13aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgJ21heC13aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgXG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICBPYmplY3QuYXNzaWduKHJlc3VsdCwge1xuICAgICAgICAgICAgJ2hlaWdodCc6IGAke3RoaXMuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICdtaW4taGVpZ2h0JzogYCR7dGhpcy5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgJ21heC1oZWlnaHQnOiBgJHt0aGlzLmhlaWdodH1weGBcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgIH1cblxufVxuIl19