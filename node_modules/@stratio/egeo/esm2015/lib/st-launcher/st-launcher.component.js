/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-launcher/st-launcher.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { isEqual as _isEqual } from 'lodash';
/**
 * \@description {Component} Launcher
 *
 * This components show a launcher for the instances of an item group
 *
 * \@model
 *
 *   [Launcher group] {./st-launcher.model.ts#StLauncherGroup}
 *   [Launcher item] {./st-launcher.model.ts#StLauncherItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 *    <st-launcher
 *       qaTag="launcher-example"
 *       [items]="items"
 *       [groupLimit]="4"
 *       [groupLimitLabel]="'View more'"
 *       (toggle)="onToggle(event)"
 *       (select)="onSelect(event)"
 *       (viewMore)="onViewMore(event)">
 *    </st-launcher>
 * ```
 */
export class StLauncherComponent {
    /**
     * @param {?} _cd
     */
    constructor(_cd) {
        this._cd = _cd;
        /**
         * \@output {StLauncherItem} [change=''] Notify any item selection
         */
        this.select = new EventEmitter();
        /**
         * \@output {StLauncherGroup} [toggle=''] Notify any group expansion or collapsed
         */
        this.toggle = new EventEmitter();
        /**
         * \@output {StLauncherGroup} [viewMore=''] Notify that wants to see more items in a group
         */
        this.viewMore = new EventEmitter();
        this._items = [];
    }
    /**
     * \@input {StLauncherGroup[]} items List of groups of items to show
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set items(items) {
        this._items = items;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.items && !changes.items.firstChange) {
            if (!_isEqual(this._items, changes.items.currentValue)) {
                this._items = changes.items.currentValue;
                this._cd.markForCheck();
            }
        }
    }
    /**
     * @return {?}
     */
    get listQaTag() {
        return this.qaTag && this.qaTag + '-list' || '';
    }
    /**
     * @param {?} groupItem
     * @return {?}
     */
    onToggleGroup(groupItem) {
        groupItem.expanded = !groupItem.expanded;
        this.toggle.emit(groupItem);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelectItem(item) {
        this.select.emit(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onViewMore(item) {
        this.viewMore.emit(item);
    }
}
StLauncherComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-launcher',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div *ngIf=\"items.length\" class=\"launcher\">\n   <div *ngFor=\"let item of items\">\n      <st-launcher-item\n         [item]=\"item\"\n         [qaTag]=\"listQaTag\"\n         [limit]=\"groupLimit\"\n         [limitLabel]=\"groupLimitLabel\"\n         (toggle)=\"onToggleGroup($event)\"\n         (select)=\"onSelectItem($event)\"\n         (view)=\"onViewMore($event)\">\n      </st-launcher-item>\n   </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.launcher{width:100%}"]
            }] }
];
/** @nocollapse */
StLauncherComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
StLauncherComponent.propDecorators = {
    qaTag: [{ type: Input }],
    items: [{ type: Input }],
    groupLimit: [{ type: Input }],
    groupLimitLabel: [{ type: Input }],
    select: [{ type: Output }],
    toggle: [{ type: Output }],
    viewMore: [{ type: Output }]
};
if (false) {
    /**
     * \@input {string} [qaTag=''] For set id for tests
     * @type {?}
     */
    StLauncherComponent.prototype.qaTag;
    /**
     * \@input {number} [groupLimit=undefined] Limit of items to be displayed per group
     * @type {?}
     */
    StLauncherComponent.prototype.groupLimit;
    /**
     * \@input {string} [groupLimitMessage=''] Label when the group items limit is exceeded
     * @type {?}
     */
    StLauncherComponent.prototype.groupLimitLabel;
    /**
     * \@output {StLauncherItem} [change=''] Notify any item selection
     * @type {?}
     */
    StLauncherComponent.prototype.select;
    /**
     * \@output {StLauncherGroup} [toggle=''] Notify any group expansion or collapsed
     * @type {?}
     */
    StLauncherComponent.prototype.toggle;
    /**
     * \@output {StLauncherGroup} [viewMore=''] Notify that wants to see more items in a group
     * @type {?}
     */
    StLauncherComponent.prototype.viewMore;
    /**
     * @type {?}
     * @private
     */
    StLauncherComponent.prototype._items;
    /**
     * @type {?}
     * @private
     */
    StLauncherComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbGF1bmNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1sYXVuY2hlci9zdC1sYXVuY2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQzdDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUEwQjdCLFlBQ1csR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7UUFUdkIsV0FBTSxHQUFpQyxJQUFJLFlBQVksRUFBa0IsQ0FBQzs7OztRQUUxRSxXQUFNLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDOzs7O1FBRTVFLGFBQVEsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFFaEYsV0FBTSxHQUFzQixFQUFFLENBQUM7SUFJbkMsQ0FBQzs7Ozs7SUF2QkwsSUFDSSxLQUFLO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBd0I7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFtQkQsV0FBVyxDQUFDLE9BQXNCO1FBQy9CLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMxQjtTQUNIO0lBQ0osQ0FBQzs7OztJQUVELElBQUksU0FBUztRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsU0FBMEI7UUFDckMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBb0I7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBcUI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7O1lBNURILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsYUFBYTtnQkFDdkIseTJCQUEyQztnQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2pEOzs7O1lBckNFLGlCQUFpQjs7O29CQXlDaEIsS0FBSztvQkFFTCxLQUFLO3lCQVFMLEtBQUs7OEJBRUwsS0FBSztxQkFHTCxNQUFNO3FCQUVOLE1BQU07dUJBRU4sTUFBTTs7Ozs7OztJQW5CUCxvQ0FBdUI7Ozs7O0lBVXZCLHlDQUE0Qjs7Ozs7SUFFNUIsOENBQWlDOzs7OztJQUdqQyxxQ0FBb0Y7Ozs7O0lBRXBGLHFDQUFzRjs7Ozs7SUFFdEYsdUNBQXdGOzs7OztJQUV4RixxQ0FBdUM7Ozs7O0lBR3BDLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ29tcG9uZW50LFxuICAgRXZlbnRFbWl0dGVyLFxuICAgSW5wdXQsXG4gICBPbkluaXQsXG4gICBPdXRwdXQsXG4gICBTaW1wbGVDaGFuZ2VzLFxuICAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0VxdWFsIGFzIF9pc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU3RMYXVuY2hlckdyb3VwLCBTdExhdW5jaGVySXRlbSB9IGZyb20gJy4vc3QtbGF1bmNoZXIubW9kZWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBMYXVuY2hlclxuICpcbiAqIFRoaXMgY29tcG9uZW50cyBzaG93IGEgbGF1bmNoZXIgZm9yIHRoZSBpbnN0YW5jZXMgb2YgYW4gaXRlbSBncm91cFxuICpcbiAqICBAbW9kZWxcbiAqXG4gKiAgIFtMYXVuY2hlciBncm91cF0gey4vc3QtbGF1bmNoZXIubW9kZWwudHMjU3RMYXVuY2hlckdyb3VwfVxuICogICBbTGF1bmNoZXIgaXRlbV0gey4vc3QtbGF1bmNoZXIubW9kZWwudHMjU3RMYXVuY2hlckl0ZW19XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICAgIDxzdC1sYXVuY2hlclxuICogICAgICAgcWFUYWc9XCJsYXVuY2hlci1leGFtcGxlXCJcbiAqICAgICAgIFtpdGVtc109XCJpdGVtc1wiXG4gKiAgICAgICBbZ3JvdXBMaW1pdF09XCI0XCJcbiAqICAgICAgIFtncm91cExpbWl0TGFiZWxdPVwiJ1ZpZXcgbW9yZSdcIlxuICogICAgICAgKHRvZ2dsZSk9XCJvblRvZ2dsZShldmVudClcIlxuICogICAgICAgKHNlbGVjdCk9XCJvblNlbGVjdChldmVudClcIlxuICogICAgICAgKHZpZXdNb3JlKT1cIm9uVmlld01vcmUoZXZlbnQpXCI+XG4gKiAgICA8L3N0LWxhdW5jaGVyPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1sYXVuY2hlcicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtbGF1bmNoZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtbGF1bmNoZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0TGF1bmNoZXJDb21wb25lbnQge1xuXG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gRm9yIHNldCBpZCBmb3IgdGVzdHMgKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKiogQGlucHV0IHtTdExhdW5jaGVyR3JvdXBbXX0gaXRlbXMgTGlzdCBvZiBncm91cHMgb2YgaXRlbXMgdG8gc2hvdyAqL1xuICAgQElucHV0KClcbiAgIGdldCBpdGVtcygpOiBTdExhdW5jaGVyR3JvdXBbXSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICB9XG4gICBzZXQgaXRlbXMoaXRlbXM6IFN0TGF1bmNoZXJHcm91cFtdKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgfVxuICAgLyoqIEBpbnB1dCB7bnVtYmVyfSBbZ3JvdXBMaW1pdD11bmRlZmluZWRdIExpbWl0IG9mIGl0ZW1zIHRvIGJlIGRpc3BsYXllZCBwZXIgZ3JvdXAgKi9cbiAgIEBJbnB1dCgpIGdyb3VwTGltaXQ6IG51bWJlcjtcbiAgIC8qKiBAaW5wdXQge3N0cmluZ30gW2dyb3VwTGltaXRNZXNzYWdlPScnXSBMYWJlbCB3aGVuIHRoZSBncm91cCBpdGVtcyBsaW1pdCBpcyBleGNlZWRlZCAqL1xuICAgQElucHV0KCkgZ3JvdXBMaW1pdExhYmVsOiBzdHJpbmc7XG5cbiAgIC8qKiBAb3V0cHV0IHtTdExhdW5jaGVySXRlbX0gW2NoYW5nZT0nJ10gTm90aWZ5IGFueSBpdGVtIHNlbGVjdGlvbiAqL1xuICAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckl0ZW0+KCk7XG4gICAvKiogQG91dHB1dCB7U3RMYXVuY2hlckdyb3VwfSBbdG9nZ2xlPScnXSBOb3RpZnkgYW55IGdyb3VwIGV4cGFuc2lvbiBvciBjb2xsYXBzZWQgKi9cbiAgIEBPdXRwdXQoKSB0b2dnbGU6IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVyR3JvdXA+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVyR3JvdXA+KCk7XG4gICAvKiogQG91dHB1dCB7U3RMYXVuY2hlckdyb3VwfSBbdmlld01vcmU9JyddIE5vdGlmeSB0aGF0IHdhbnRzIHRvIHNlZSBtb3JlIGl0ZW1zIGluIGEgZ3JvdXAgKi9cbiAgIEBPdXRwdXQoKSB2aWV3TW9yZTogRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJHcm91cD4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJHcm91cD4oKTtcblxuICAgcHJpdmF0ZSBfaXRlbXM6IFN0TGF1bmNoZXJHcm91cFtdID0gW107XG5cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICApIHsgfVxuXG4gICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLml0ZW1zICYmICFjaGFuZ2VzLml0ZW1zLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICBpZiAoIV9pc0VxdWFsKHRoaXMuX2l0ZW1zLCBjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZW1zID0gY2hhbmdlcy5pdGVtcy5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0IGxpc3RRYVRhZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMucWFUYWcgJiYgdGhpcy5xYVRhZyArICctbGlzdCcgfHwgJyc7XG4gICB9XG5cbiAgIG9uVG9nZ2xlR3JvdXAoZ3JvdXBJdGVtOiBTdExhdW5jaGVyR3JvdXApOiB2b2lkIHtcbiAgICAgIGdyb3VwSXRlbS5leHBhbmRlZCA9ICFncm91cEl0ZW0uZXhwYW5kZWQ7XG4gICAgICB0aGlzLnRvZ2dsZS5lbWl0KGdyb3VwSXRlbSk7XG4gICB9XG5cbiAgIG9uU2VsZWN0SXRlbShpdGVtOiBTdExhdW5jaGVySXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChpdGVtKTtcbiAgIH1cblxuICAgb25WaWV3TW9yZShpdGVtOiBTdExhdW5jaGVyR3JvdXApOiB2b2lkIHtcbiAgICAgIHRoaXMudmlld01vcmUuZW1pdChpdGVtKTtcbiAgIH1cbn1cbiJdfQ==