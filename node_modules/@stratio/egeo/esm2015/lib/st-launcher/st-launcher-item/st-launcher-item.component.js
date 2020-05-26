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
export class StLauncherItemComponent {
    constructor() {
        this.toggle = new EventEmitter();
        this.select = new EventEmitter();
        this.view = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.item && this.item.expanded === undefined) {
            this.item.expanded = false;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.item && changes.item.currentValue && changes.item.currentValue.expanded === undefined) {
            changes.item.currentValue.expanded = false;
        }
    }
    /**
     * @return {?}
     */
    get itemsFiltered() {
        return this.item.items.slice(0, this.limit);
    }
}
StLauncherItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-launcher-item',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-launcher__group\" [ngClass]=\"{ 'st-launcher__group--collapsed': !item.expanded }\" (click)=\"toggle.emit(item)\">\n   <div class=\"group\">\n      <span class=\"title\">{{item.label}}</span>\n         <div class=\"count st-launcher__group--count\">\n            <span>{{item.items.length}}</span>\n         </div>\n   </div>\n   <span *ngIf=\"item.expanded\" class=\"arrow st-launcher__group--arrow\"></span>\n</div>\n\n<div *ngIf=\"item.expanded && item.items.length\">\n   <div *ngFor=\"let subitem of itemsFiltered\" class=\"st-launcher__item\" (click)=\"select.emit(subitem)\">\n      <span [title]=\"subitem.label\" class=\"item-label\">{{subitem.label}}</span>\n   </div>\n   <div *ngIf=\"limit !== undefined && limit < item.items.length\" class=\"st-launcher__more\" (click)=\"view.emit(item)\">\n      <span>{{limitLabel}}</span>\n   </div>\n</div>\n",
                styles: ["@charset \"UTF-8\";.group{display:flex}.title{margin-top:3px}.count{border-radius:4px;height:28px;width:48px;padding-top:4px;text-align:center;margin-left:auto}.arrow{position:relative;bottom:2px;width:0;height:0;border-style:solid;border-width:0 10px 12px}.item-label{text-overflow:ellipsis;overflow:hidden;display:block;white-space:nowrap}"]
            }] }
];
/** @nocollapse */
StLauncherItemComponent.ctorParameters = () => [];
StLauncherItemComponent.propDecorators = {
    item: [{ type: Input }],
    qaTag: [{ type: Input }],
    limit: [{ type: Input }],
    limitLabel: [{ type: Input }],
    toggle: [{ type: Output }],
    select: [{ type: Output }],
    view: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbGF1bmNoZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWxhdW5jaGVyL3N0LWxhdW5jaGVyLWl0ZW0vc3QtbGF1bmNoZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxzQkFBc0IsQ0FBQztBQU92RSxNQUFNLE9BQU8sdUJBQXVCO0lBV2pDO1FBSlUsV0FBTSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM1RSxXQUFNLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQzFFLFNBQUksR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7SUFHcEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUM3QjtJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQy9CLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUMzRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQzdDO0lBQ0osQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBakNILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw2eUNBQWdEOzthQUVsRDs7Ozs7bUJBR0csS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFFTCxNQUFNO3FCQUNOLE1BQU07bUJBQ04sTUFBTTs7OztJQVBQLHVDQUErQjs7SUFDL0Isd0NBQXVCOztJQUN2Qix3Q0FBdUI7O0lBQ3ZCLDZDQUE0Qjs7SUFFNUIseUNBQXNGOztJQUN0Rix5Q0FBb0Y7O0lBQ3BGLHVDQUFvRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdExhdW5jaGVyR3JvdXAsIFN0TGF1bmNoZXJJdGVtIH0gZnJvbSAnLi4vc3QtbGF1bmNoZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtbGF1bmNoZXItaXRlbScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtbGF1bmNoZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1sYXVuY2hlci1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RMYXVuY2hlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgIEBJbnB1dCgpIGl0ZW06IFN0TGF1bmNoZXJHcm91cDtcbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICBASW5wdXQoKSBsaW1pdDogbnVtYmVyO1xuICAgQElucHV0KCkgbGltaXRMYWJlbDogc3RyaW5nO1xuXG4gICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckdyb3VwPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckdyb3VwPigpO1xuICAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckl0ZW0+KCk7XG4gICBAT3V0cHV0KCkgdmlldzogRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJHcm91cD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJHcm91cD4oKTtcblxuICAgY29uc3RydWN0b3IoKSB7XG4gICB9XG5cbiAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaXRlbSAmJiB0aGlzLml0ZW0uZXhwYW5kZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgdGhpcy5pdGVtLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICB9XG4gICB9XG5cbiAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuaXRlbSAmJiBjaGFuZ2VzLml0ZW0uY3VycmVudFZhbHVlICYmIGNoYW5nZXMuaXRlbS5jdXJyZW50VmFsdWUuZXhwYW5kZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgY2hhbmdlcy5pdGVtLmN1cnJlbnRWYWx1ZS5leHBhbmRlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgfVxuXG4gICBnZXQgaXRlbXNGaWx0ZXJlZCgpOiBTdExhdW5jaGVySXRlbVtdICB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtLml0ZW1zLnNsaWNlKDAsIHRoaXMubGltaXQpO1xuICAgfVxufVxuIl19