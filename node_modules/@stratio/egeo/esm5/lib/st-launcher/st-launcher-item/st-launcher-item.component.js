/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-launcher/st-launcher-item/st-launcher-item.component.ts
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
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { StLauncherGroup } from '../st-launcher.model';
var StLauncherItemComponent = /** @class */ (function () {
    function StLauncherItemComponent() {
        this.toggle = new EventEmitter();
        this.select = new EventEmitter();
        this.view = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StLauncherItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.item && this.item.expanded === undefined) {
            this.item.expanded = false;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StLauncherItemComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.item && changes.item.currentValue && changes.item.currentValue.expanded === undefined) {
            changes.item.currentValue.expanded = false;
        }
    };
    Object.defineProperty(StLauncherItemComponent.prototype, "itemsFiltered", {
        get: /**
         * @return {?}
         */
        function () {
            return this.item.items.slice(0, this.limit);
        },
        enumerable: true,
        configurable: true
    });
    StLauncherItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-launcher-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-launcher__group\" [ngClass]=\"{ 'st-launcher__group--collapsed': !item.expanded }\" (click)=\"toggle.emit(item)\">\n   <div class=\"group\">\n      <span class=\"title\">{{item.label}}</span>\n         <div class=\"count st-launcher__group--count\">\n            <span>{{item.items.length}}</span>\n         </div>\n   </div>\n   <span *ngIf=\"item.expanded\" class=\"arrow st-launcher__group--arrow\"></span>\n</div>\n\n<div *ngIf=\"item.expanded && item.items.length\">\n   <div *ngFor=\"let subitem of itemsFiltered\" class=\"st-launcher__item\" (click)=\"select.emit(subitem)\">\n      <span [title]=\"subitem.label\" class=\"item-label\">{{subitem.label}}</span>\n   </div>\n   <div *ngIf=\"limit !== undefined && limit < item.items.length\" class=\"st-launcher__more\" (click)=\"view.emit(item)\">\n      <span>{{limitLabel}}</span>\n   </div>\n</div>\n",
                    styles: ["@charset \"UTF-8\";.group{display:flex}.title{margin-top:3px}.count{border-radius:4px;height:28px;width:48px;padding-top:4px;text-align:center;margin-left:auto}.arrow{position:relative;bottom:2px;width:0;height:0;border-style:solid;border-width:0 10px 12px}.item-label{text-overflow:ellipsis;overflow:hidden;display:block;white-space:nowrap}"]
                }] }
    ];
    /** @nocollapse */
    StLauncherItemComponent.ctorParameters = function () { return []; };
    StLauncherItemComponent.propDecorators = {
        item: [{ type: Input }],
        qaTag: [{ type: Input }],
        limit: [{ type: Input }],
        limitLabel: [{ type: Input }],
        toggle: [{ type: Output }],
        select: [{ type: Output }],
        view: [{ type: Output }]
    };
    return StLauncherItemComponent;
}());
export { StLauncherItemComponent };
if (false) {
    /** @type {?} */
    StLauncherItemComponent.prototype.item;
    /** @type {?} */
    StLauncherItemComponent.prototype.qaTag;
    /** @type {?} */
    StLauncherItemComponent.prototype.limit;
    /** @type {?} */
    StLauncherItemComponent.prototype.limitLabel;
    /** @type {?} */
    StLauncherItemComponent.prototype.toggle;
    /** @type {?} */
    StLauncherItemComponent.prototype.select;
    /** @type {?} */
    StLauncherItemComponent.prototype.view;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbGF1bmNoZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWxhdW5jaGVyL3N0LWxhdW5jaGVyLWl0ZW0vc3QtbGF1bmNoZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RTtJQWdCRztRQUpVLFdBQU0sR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDNUUsV0FBTSxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMxRSxTQUFJLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO0lBR3BGLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFDRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNKLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMzRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQzdDO0lBQ0osQ0FBQztJQUVELHNCQUFJLGtEQUFhOzs7O1FBQWpCO1lBQ0csT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTs7Z0JBakNILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw2eUNBQWdEOztpQkFFbEQ7Ozs7O3VCQUdHLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBRUwsTUFBTTt5QkFDTixNQUFNO3VCQUNOLE1BQU07O0lBb0JWLDhCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E3QlksdUJBQXVCOzs7SUFFakMsdUNBQStCOztJQUMvQix3Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFDdkIsNkNBQTRCOztJQUU1Qix5Q0FBc0Y7O0lBQ3RGLHlDQUFvRjs7SUFDcEYsdUNBQW9GIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0TGF1bmNoZXJHcm91cCwgU3RMYXVuY2hlckl0ZW0gfSBmcm9tICcuLi9zdC1sYXVuY2hlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1sYXVuY2hlci1pdGVtJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1sYXVuY2hlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWxhdW5jaGVyLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdExhdW5jaGVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgQElucHV0KCkgaXRlbTogU3RMYXVuY2hlckdyb3VwO1xuICAgQElucHV0KCkgcWFUYWc6IHN0cmluZztcbiAgIEBJbnB1dCgpIGxpbWl0OiBudW1iZXI7XG4gICBASW5wdXQoKSBsaW1pdExhYmVsOiBzdHJpbmc7XG5cbiAgIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVyR3JvdXA+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVyR3JvdXA+KCk7XG4gICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVySXRlbT4oKTtcbiAgIEBPdXRwdXQoKSB2aWV3OiBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckdyb3VwPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckdyb3VwPigpO1xuXG4gICBjb25zdHJ1Y3RvcigpIHtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pdGVtICYmIHRoaXMuaXRlbS5leHBhbmRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICB0aGlzLml0ZW0uZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgIH1cblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5pdGVtICYmIGNoYW5nZXMuaXRlbS5jdXJyZW50VmFsdWUgJiYgY2hhbmdlcy5pdGVtLmN1cnJlbnRWYWx1ZS5leHBhbmRlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICBjaGFuZ2VzLml0ZW0uY3VycmVudFZhbHVlLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICB9XG4gICB9XG5cbiAgIGdldCBpdGVtc0ZpbHRlcmVkKCk6IFN0TGF1bmNoZXJJdGVtW10gIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0uaXRlbXMuc2xpY2UoMCwgdGhpcy5saW1pdCk7XG4gICB9XG59XG4iXX0=