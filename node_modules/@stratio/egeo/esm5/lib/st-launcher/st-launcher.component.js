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
var StLauncherComponent = /** @class */ (function () {
    function StLauncherComponent(_cd) {
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
    Object.defineProperty(StLauncherComponent.prototype, "items", {
        /** @input {StLauncherGroup[]} items List of groups of items to show */
        get: /**
         * \@input {StLauncherGroup[]} items List of groups of items to show
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    StLauncherComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes && changes.items && !changes.items.firstChange) {
            if (!_isEqual(this._items, changes.items.currentValue)) {
                this._items = changes.items.currentValue;
                this._cd.markForCheck();
            }
        }
    };
    Object.defineProperty(StLauncherComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-list' || '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} groupItem
     * @return {?}
     */
    StLauncherComponent.prototype.onToggleGroup = /**
     * @param {?} groupItem
     * @return {?}
     */
    function (groupItem) {
        groupItem.expanded = !groupItem.expanded;
        this.toggle.emit(groupItem);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StLauncherComponent.prototype.onSelectItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.select.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StLauncherComponent.prototype.onViewMore = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.viewMore.emit(item);
    };
    StLauncherComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-launcher',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div *ngIf=\"items.length\" class=\"launcher\">\n   <div *ngFor=\"let item of items\">\n      <st-launcher-item\n         [item]=\"item\"\n         [qaTag]=\"listQaTag\"\n         [limit]=\"groupLimit\"\n         [limitLabel]=\"groupLimitLabel\"\n         (toggle)=\"onToggleGroup($event)\"\n         (select)=\"onSelectItem($event)\"\n         (view)=\"onViewMore($event)\">\n      </st-launcher-item>\n   </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.launcher{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    StLauncherComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StLauncherComponent.propDecorators = {
        qaTag: [{ type: Input }],
        items: [{ type: Input }],
        groupLimit: [{ type: Input }],
        groupLimitLabel: [{ type: Input }],
        select: [{ type: Output }],
        toggle: [{ type: Output }],
        viewMore: [{ type: Output }]
    };
    return StLauncherComponent;
}());
export { StLauncherComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbGF1bmNoZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1sYXVuY2hlci9zdC1sYXVuY2hlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ25CLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLElBQUksUUFBUSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QjdDO0lBZ0NHLDZCQUNXLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7O1FBVHZCLFdBQU0sR0FBaUMsSUFBSSxZQUFZLEVBQWtCLENBQUM7Ozs7UUFFMUUsV0FBTSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQzs7OztRQUU1RSxhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBRWhGLFdBQU0sR0FBc0IsRUFBRSxDQUFDO0lBSW5DLENBQUM7SUF2Qkwsc0JBQ0ksc0NBQUs7UUFGVCx1RUFBdUU7Ozs7O1FBQ3ZFO1lBRUcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBQ0QsVUFBVSxLQUF3QjtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FIQTs7Ozs7SUFzQkQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQy9CLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUMxQjtTQUNIO0lBQ0osQ0FBQztJQUVELHNCQUFJLDBDQUFTOzs7O1FBQWI7WUFDRyxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ25ELENBQUM7OztPQUFBOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxTQUEwQjtRQUNyQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxJQUFvQjtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxJQUFxQjtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkE1REgsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxhQUFhO29CQUN2Qix5MkJBQTJDO29CQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQXJDRSxpQkFBaUI7Ozt3QkF5Q2hCLEtBQUs7d0JBRUwsS0FBSzs2QkFRTCxLQUFLO2tDQUVMLEtBQUs7eUJBR0wsTUFBTTt5QkFFTixNQUFNOzJCQUVOLE1BQU07O0lBaUNWLDBCQUFDO0NBQUEsQUE3REQsSUE2REM7U0F2RFksbUJBQW1COzs7Ozs7SUFHN0Isb0NBQXVCOzs7OztJQVV2Qix5Q0FBNEI7Ozs7O0lBRTVCLDhDQUFpQzs7Ozs7SUFHakMscUNBQW9GOzs7OztJQUVwRixxQ0FBc0Y7Ozs7O0lBRXRGLHVDQUF3Rjs7Ozs7SUFFeEYscUNBQXVDOzs7OztJQUdwQyxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENvbXBvbmVudCxcbiAgIEV2ZW50RW1pdHRlcixcbiAgIElucHV0LFxuICAgT25Jbml0LFxuICAgT3V0cHV0LFxuICAgU2ltcGxlQ2hhbmdlcyxcbiAgIENoYW5nZURldGVjdG9yUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNFcXVhbCBhcyBfaXNFcXVhbCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFN0TGF1bmNoZXJHcm91cCwgU3RMYXVuY2hlckl0ZW0gfSBmcm9tICcuL3N0LWxhdW5jaGVyLm1vZGVsJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gTGF1bmNoZXJcbiAqXG4gKiBUaGlzIGNvbXBvbmVudHMgc2hvdyBhIGxhdW5jaGVyIGZvciB0aGUgaW5zdGFuY2VzIG9mIGFuIGl0ZW0gZ3JvdXBcbiAqXG4gKiAgQG1vZGVsXG4gKlxuICogICBbTGF1bmNoZXIgZ3JvdXBdIHsuL3N0LWxhdW5jaGVyLm1vZGVsLnRzI1N0TGF1bmNoZXJHcm91cH1cbiAqICAgW0xhdW5jaGVyIGl0ZW1dIHsuL3N0LWxhdW5jaGVyLm1vZGVsLnRzI1N0TGF1bmNoZXJJdGVtfVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiAgICA8c3QtbGF1bmNoZXJcbiAqICAgICAgIHFhVGFnPVwibGF1bmNoZXItZXhhbXBsZVwiXG4gKiAgICAgICBbaXRlbXNdPVwiaXRlbXNcIlxuICogICAgICAgW2dyb3VwTGltaXRdPVwiNFwiXG4gKiAgICAgICBbZ3JvdXBMaW1pdExhYmVsXT1cIidWaWV3IG1vcmUnXCJcbiAqICAgICAgICh0b2dnbGUpPVwib25Ub2dnbGUoZXZlbnQpXCJcbiAqICAgICAgIChzZWxlY3QpPVwib25TZWxlY3QoZXZlbnQpXCJcbiAqICAgICAgICh2aWV3TW9yZSk9XCJvblZpZXdNb3JlKGV2ZW50KVwiPlxuICogICAgPC9zdC1sYXVuY2hlcj5cbiAqIGBgYFxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtbGF1bmNoZXInLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LWxhdW5jaGVyLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWxhdW5jaGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdExhdW5jaGVyQ29tcG9uZW50IHtcblxuICAgLyoqIEBpbnB1dCB7c3RyaW5nfSBbcWFUYWc9JyddIEZvciBzZXQgaWQgZm9yIHRlc3RzICovXG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuICAgLyoqIEBpbnB1dCB7U3RMYXVuY2hlckdyb3VwW119IGl0ZW1zIExpc3Qgb2YgZ3JvdXBzIG9mIGl0ZW1zIHRvIHNob3cgKi9cbiAgIEBJbnB1dCgpXG4gICBnZXQgaXRlbXMoKTogU3RMYXVuY2hlckdyb3VwW10ge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgfVxuICAgc2V0IGl0ZW1zKGl0ZW1zOiBTdExhdW5jaGVyR3JvdXBbXSkge1xuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgIH1cbiAgIC8qKiBAaW5wdXQge251bWJlcn0gW2dyb3VwTGltaXQ9dW5kZWZpbmVkXSBMaW1pdCBvZiBpdGVtcyB0byBiZSBkaXNwbGF5ZWQgcGVyIGdyb3VwICovXG4gICBASW5wdXQoKSBncm91cExpbWl0OiBudW1iZXI7XG4gICAvKiogQGlucHV0IHtzdHJpbmd9IFtncm91cExpbWl0TWVzc2FnZT0nJ10gTGFiZWwgd2hlbiB0aGUgZ3JvdXAgaXRlbXMgbGltaXQgaXMgZXhjZWVkZWQgKi9cbiAgIEBJbnB1dCgpIGdyb3VwTGltaXRMYWJlbDogc3RyaW5nO1xuXG4gICAvKiogQG91dHB1dCB7U3RMYXVuY2hlckl0ZW19IFtjaGFuZ2U9JyddIE5vdGlmeSBhbnkgaXRlbSBzZWxlY3Rpb24gKi9cbiAgIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0TGF1bmNoZXJJdGVtPigpO1xuICAgLyoqIEBvdXRwdXQge1N0TGF1bmNoZXJHcm91cH0gW3RvZ2dsZT0nJ10gTm90aWZ5IGFueSBncm91cCBleHBhbnNpb24gb3IgY29sbGFwc2VkICovXG4gICBAT3V0cHV0KCkgdG9nZ2xlOiBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckdyb3VwPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RMYXVuY2hlckdyb3VwPigpO1xuICAgLyoqIEBvdXRwdXQge1N0TGF1bmNoZXJHcm91cH0gW3ZpZXdNb3JlPScnXSBOb3RpZnkgdGhhdCB3YW50cyB0byBzZWUgbW9yZSBpdGVtcyBpbiBhIGdyb3VwICovXG4gICBAT3V0cHV0KCkgdmlld01vcmU6IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVyR3JvdXA+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdExhdW5jaGVyR3JvdXA+KCk7XG5cbiAgIHByaXZhdGUgX2l0ZW1zOiBTdExhdW5jaGVyR3JvdXBbXSA9IFtdO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICAgKSB7IH1cblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5pdGVtcyAmJiAhY2hhbmdlcy5pdGVtcy5maXJzdENoYW5nZSkge1xuICAgICAgICAgaWYgKCFfaXNFcXVhbCh0aGlzLl9pdGVtcywgY2hhbmdlcy5pdGVtcy5jdXJyZW50VmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9pdGVtcyA9IGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGdldCBsaXN0UWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICYmIHRoaXMucWFUYWcgKyAnLWxpc3QnIHx8ICcnO1xuICAgfVxuXG4gICBvblRvZ2dsZUdyb3VwKGdyb3VwSXRlbTogU3RMYXVuY2hlckdyb3VwKTogdm9pZCB7XG4gICAgICBncm91cEl0ZW0uZXhwYW5kZWQgPSAhZ3JvdXBJdGVtLmV4cGFuZGVkO1xuICAgICAgdGhpcy50b2dnbGUuZW1pdChncm91cEl0ZW0pO1xuICAgfVxuXG4gICBvblNlbGVjdEl0ZW0oaXRlbTogU3RMYXVuY2hlckl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoaXRlbSk7XG4gICB9XG5cbiAgIG9uVmlld01vcmUoaXRlbTogU3RMYXVuY2hlckdyb3VwKTogdm9pZCB7XG4gICAgICB0aGlzLnZpZXdNb3JlLmVtaXQoaXRlbSk7XG4gICB9XG59XG4iXX0=