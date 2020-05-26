/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar-item-list/st-sidebar-item-list.component.ts
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
import { ChangeDetectionStrategy, Component, Input, EventEmitter, Output } from '@angular/core';
import { StSidebarVisualMode } from '../st-sidebar-visual-mode';
/**
 * \@description {Component} [SidebarItemList]
 *
 * The sidebar item list component has been designed to display a list of items in a sidebar.
 *
 * \@model
 *
 *   [Sidebar items] {../st-sidebar-item.interface.ts#StSidebarItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-sidebar-item-list [items]="items" (change)="onChange($event)" [active]="active" [deep]="deep">
 * </st-sidebar-item-list>
 * ```
 *
 */
export class StSidebarItemListComponent {
    constructor() {
        /**
         * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
         */
        this.items = [];
        /**
         * \@Input {number} [deep=0] Deep of the item list in the sidebar
         */
        this.deep = 0;
        /**
         * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
         */
        this.visualMode = StSidebarVisualMode.normal;
        /**
         * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emit the active item
         */
        this.change = new EventEmitter();
        this.displayAsComplexModeValue = false;
        this.expanded = [];
    }
    /**
     * \@Input {string} [active=''] The id of the current active item
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._active && this.items && this.items.length) {
            this._active = this.items[0];
        }
        this._updateStatus();
        this.displayAsComplexModeValue = this.displayAsComplexMode();
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        if (!this._isActive(active)) {
            this._active = active;
            this._updateStatus();
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    getItemClasses(item, index) {
        /** @type {?} */
        let classes = {};
        /** @type {?} */
        const active = this._isActive(item);
        /** @type {?} */
        const activeChild = this.hasActiveChild(item);
        classes[item.class] = item.class;
        classes['item--complex'] = item.items && item.items.length;
        classes['item--active'] = active;
        classes['item--expanded'] = this.expanded[index];
        classes['item--has-active'] = activeChild;
        classes['item--disabled'] = item.disabled;
        return classes;
    }
    /**
     * @param {?} item
     * @param {?} position
     * @return {?}
     */
    onSelectItem(item, position) {
        if (!item.disabled) {
            if (item.items && item.items.length) {
                this.expanded[position] = !this.expanded[position];
            }
            else {
                if (!this._active || this._active.id !== item.id) {
                    this.change.emit(item);
                    this._closeRestOfItems(item.id);
                }
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    hasActiveChild(item) {
        /** @type {?} */
        let found = false;
        /** @type {?} */
        let i = 0;
        if (item.items && item.items.length) {
            while (!found && i < item.items.length) {
                if (this._isActive(item.items[i])) {
                    found = true;
                }
                ++i;
            }
            if (!found && item.items && item.items.length) {
                return this._hasActiveChildInChildren(item.items);
            }
        }
        return found;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onChange(item) {
        if (!this._isActive(item)) {
            this._closeRestOfItems(item.id);
            this.change.emit(item);
        }
    }
    /**
     * @return {?}
     */
    displayAsComplexMode() {
        return this.visualMode === StSidebarVisualMode.complex;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _isActive(item) {
        return item && this._active && this._active.id === item.id;
    }
    /**
     * @private
     * @return {?}
     */
    _updateStatus() {
        this.items.forEach((/**
         * @param {?} item
         * @param {?} i
         * @return {?}
         */
        (item, i) => {
            if (this.hasActiveChild(item)) {
                this.expanded[i] = true;
            }
        }));
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _hasActiveChildInChildren(items) {
        /** @type {?} */
        let found = false;
        /** @type {?} */
        let i = 0;
        while (!found && i < items.length) {
            if (this.hasActiveChild(items[i])) {
                found = true;
            }
            ++i;
        }
        return found;
    }
    /**
     * @private
     * @param {?} itemId
     * @return {?}
     */
    _closeRestOfItems(itemId) {
        this.expanded.forEach((/**
         * @param {?} open
         * @param {?} i
         * @return {?}
         */
        (open, i) => {
            if (open && this.items[i].id !== itemId) {
                this.expanded[i] = false;
            }
        }));
    }
}
StSidebarItemListComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-sidebar-item-list',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<ul class=\"item-list\" [ngClass]=\"{'item-list--inner': deep > 0, 'complex-mode': displayAsComplexModeValue}\">\n   <li [id]=\"item.id\" class=\"item\" [ngClass]=\"getItemClasses(item, index)\" *ngFor=\"let item of items; let index = index\">\n      <span class=\"item__label\" [ngClass]=\"{'item__label--with-results': item.result}\" (click)=\"onSelectItem(item, index)\">{{item.label}}</span>\n      <span *ngIf=\"item.result\" class=\"result__box\"><span class=\"result__text\">{{item.result}}</span></span>\n      <st-sidebar-item-list *ngIf=\"item.items && item.items.length && expanded[index]\"\n                            [items]=\"item.items\"\n                            [active]=\"active\"\n                            [visualMode]=\"visualMode\"\n                            [deep]=\"deep + 1\"\n                            (change)=\"onChange($event)\">\n      </st-sidebar-item-list>\n   </li>\n</ul>\n",
                providers: [],
                host: { class: 'st-sidebar-item-list' },
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";:host{width:100%;height:100%;display:block}.item-list{list-style:none}.item{cursor:pointer}"]
            }] }
];
StSidebarItemListComponent.propDecorators = {
    items: [{ type: Input }],
    deep: [{ type: Input }],
    visualMode: [{ type: Input }],
    change: [{ type: Output }],
    active: [{ type: Input }]
};
if (false) {
    /**
     * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
     * @type {?}
     */
    StSidebarItemListComponent.prototype.items;
    /**
     * \@Input {number} [deep=0] Deep of the item list in the sidebar
     * @type {?}
     */
    StSidebarItemListComponent.prototype.deep;
    /**
     * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
     * @type {?}
     */
    StSidebarItemListComponent.prototype.visualMode;
    /**
     * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emit the active item
     * @type {?}
     */
    StSidebarItemListComponent.prototype.change;
    /** @type {?} */
    StSidebarItemListComponent.prototype.displayAsComplexModeValue;
    /** @type {?} */
    StSidebarItemListComponent.prototype.expanded;
    /**
     * @type {?}
     * @private
     */
    StSidebarItemListComponent.prototype._active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2lkZWJhci1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1zaWRlYmFyL3N0LXNpZGViYXItaXRlbS1saXN0L3N0LXNpZGViYXItaXRlbS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCaEUsTUFBTSxPQUFPLDBCQUEwQjtJQVJ2Qzs7OztRQVVZLFVBQUssR0FBb0IsRUFBRSxDQUFDOzs7O1FBRTVCLFNBQUksR0FBVyxDQUFDLENBQUM7Ozs7UUFFakIsZUFBVSxHQUF3QixtQkFBbUIsQ0FBQyxNQUFNLENBQUM7Ozs7UUFFNUQsV0FBTSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUUzRSw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDM0MsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQWdIbkMsQ0FBQzs7Ozs7SUEzR0UsSUFBYSxNQUFNO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVB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Q0FBQyxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7WUFsSUgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDAxQ0FBb0Q7Z0JBRXBELFNBQVMsRUFBRSxFQUFFO2dCQUNiLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRTtnQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2pEOzs7b0JBR0csS0FBSzttQkFFTCxLQUFLO3lCQUVMLEtBQUs7cUJBRUwsTUFBTTtxQkFRTixLQUFLOzs7Ozs7O0lBZE4sMkNBQXFDOzs7OztJQUVyQywwQ0FBMEI7Ozs7O0lBRTFCLGdEQUFzRTs7Ozs7SUFFdEUsNENBQWtGOztJQUVsRiwrREFBa0Q7O0lBQ2xELDhDQUFnQzs7Ozs7SUFFaEMsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFNpZGViYXJJdGVtIH0gZnJvbSAnLi4vc3Qtc2lkZWJhci1pdGVtLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdFNpZGViYXJWaXN1YWxNb2RlIH0gZnJvbSAnLi4vc3Qtc2lkZWJhci12aXN1YWwtbW9kZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtTaWRlYmFySXRlbUxpc3RdXG4gKlxuICogVGhlIHNpZGViYXIgaXRlbSBsaXN0IGNvbXBvbmVudCBoYXMgYmVlbiBkZXNpZ25lZCB0byBkaXNwbGF5IGEgbGlzdCBvZiBpdGVtcyBpbiBhIHNpZGViYXIuXG4gKlxuICogIEBtb2RlbFxuICpcbiAqICAgW1NpZGViYXIgaXRlbXNdIHsuLi9zdC1zaWRlYmFyLWl0ZW0uaW50ZXJmYWNlLnRzI1N0U2lkZWJhckl0ZW19XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1zaWRlYmFyLWl0ZW0tbGlzdCBbaXRlbXNdPVwiaXRlbXNcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYWN0aXZlXT1cImFjdGl2ZVwiIFtkZWVwXT1cImRlZXBcIj5cbiAqIDwvc3Qtc2lkZWJhci1pdGVtLWxpc3Q+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1zaWRlYmFyLWl0ZW0tbGlzdCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3Qtc2lkZWJhci1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3Qtc2lkZWJhci1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbiAgIHByb3ZpZGVyczogW10sXG4gICBob3N0OiB7IGNsYXNzOiAnc3Qtc2lkZWJhci1pdGVtLWxpc3QnIH0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdFNpZGViYXJJdGVtTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAvKiogQElucHV0IHtTdFNpZGViYXJJdGVtW119IFtpdGVtcz0nJ10gTGlzdCBvZiBpdGVtcyBkaXNwbGF5ZWQgb24gdGhlIG1lbnUgKi9cbiAgIEBJbnB1dCgpIGl0ZW1zOiBTdFNpZGViYXJJdGVtW10gPSBbXTtcbiAgIC8qKiBASW5wdXQge251bWJlcn0gW2RlZXA9MF0gRGVlcCBvZiB0aGUgaXRlbSBsaXN0IGluIHRoZSBzaWRlYmFyICovXG4gICBASW5wdXQoKSBkZWVwOiBudW1iZXIgPSAwO1xuICAgLyoqIEBJbnB1dCB7U3RTaWRlYmFyVmlzdWFsTW9kZX0gW3Zpc3VhbE1vZGU9J1N0U2lkZWJhclZpc3VhbE1vZGUubm9ybWFsJ10gVmlzdWFsIG1vZGUgdXNlZCB0byBkaXNwbGF5IHRoZSBpdGVtIGxpc3QgKi9cbiAgIEBJbnB1dCgpIHZpc3VhbE1vZGU6IFN0U2lkZWJhclZpc3VhbE1vZGUgPSBTdFNpZGViYXJWaXN1YWxNb2RlLm5vcm1hbDtcbiAgIC8qKiBAT3V0cHV0IHtTdFNpZGViYXJJdGVtfSBbY2hhbmdlPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGFjdGl2ZSBpdGVtIGlzIGNoYW5nZWQuIFRoaXMgZW1pdCB0aGUgYWN0aXZlIGl0ZW0gKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxTdFNpZGViYXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RTaWRlYmFySXRlbT4oKTtcblxuICAgcHVibGljIGRpc3BsYXlBc0NvbXBsZXhNb2RlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbltdID0gW107XG5cbiAgIHByaXZhdGUgX2FjdGl2ZTogU3RTaWRlYmFySXRlbTtcblxuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbYWN0aXZlPScnXSBUaGUgaWQgb2YgdGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW0gKi9cbiAgIEBJbnB1dCgpIGdldCBhY3RpdmUoKTogU3RTaWRlYmFySXRlbSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xuICAgfVxuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5fYWN0aXZlICYmIHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuaXRlbXNbMF07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXR1cygpO1xuICAgICAgdGhpcy5kaXNwbGF5QXNDb21wbGV4TW9kZVZhbHVlID0gdGhpcy5kaXNwbGF5QXNDb21wbGV4TW9kZSgpO1xuICAgfVxuXG4gICBzZXQgYWN0aXZlKGFjdGl2ZTogU3RTaWRlYmFySXRlbSkge1xuICAgICAgaWYgKCF0aGlzLl9pc0FjdGl2ZShhY3RpdmUpKSB7XG4gICAgICAgICB0aGlzLl9hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXMoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgZ2V0SXRlbUNsYXNzZXMoaXRlbTogU3RTaWRlYmFySXRlbSwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgICBsZXQgY2xhc3NlczogYW55ID0ge307XG4gICAgICBjb25zdCBhY3RpdmU6IGJvb2xlYW4gPSB0aGlzLl9pc0FjdGl2ZShpdGVtKTtcbiAgICAgIGNvbnN0IGFjdGl2ZUNoaWxkOiBib29sZWFuID0gdGhpcy5oYXNBY3RpdmVDaGlsZChpdGVtKTtcbiAgICAgIGNsYXNzZXNbaXRlbS5jbGFzc10gPSBpdGVtLmNsYXNzO1xuICAgICAgY2xhc3Nlc1snaXRlbS0tY29tcGxleCddID0gaXRlbS5pdGVtcyAmJiBpdGVtLml0ZW1zLmxlbmd0aDtcbiAgICAgIGNsYXNzZXNbJ2l0ZW0tLWFjdGl2ZSddID0gYWN0aXZlO1xuICAgICAgY2xhc3Nlc1snaXRlbS0tZXhwYW5kZWQnXSA9IHRoaXMuZXhwYW5kZWRbaW5kZXhdO1xuICAgICAgY2xhc3Nlc1snaXRlbS0taGFzLWFjdGl2ZSddID0gYWN0aXZlQ2hpbGQ7XG4gICAgICBjbGFzc2VzWydpdGVtLS1kaXNhYmxlZCddID0gaXRlbS5kaXNhYmxlZDtcblxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICB9XG5cbiAgIG9uU2VsZWN0SXRlbShpdGVtOiBTdFNpZGViYXJJdGVtLCBwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgIGlmIChpdGVtLml0ZW1zICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkW3Bvc2l0aW9uXSA9ICF0aGlzLmV4cGFuZGVkW3Bvc2l0aW9uXTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2FjdGl2ZSB8fCB0aGlzLl9hY3RpdmUuaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgICAgICAgICAgICB0aGlzLl9jbG9zZVJlc3RPZkl0ZW1zKGl0ZW0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBoYXNBY3RpdmVDaGlsZChpdGVtOiBTdFNpZGViYXJJdGVtKTogYm9vbGVhbiB7XG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGlmIChpdGVtLml0ZW1zICYmIGl0ZW0uaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICB3aGlsZSAoIWZvdW5kICYmIGkgPCBpdGVtLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzQWN0aXZlKGl0ZW0uaXRlbXNbaV0pKSB7XG4gICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICB9XG4gICAgICAgICBpZiAoIWZvdW5kICYmIGl0ZW0uaXRlbXMgJiYgaXRlbS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNBY3RpdmVDaGlsZEluQ2hpbGRyZW4oaXRlbS5pdGVtcyk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZm91bmQ7XG4gICB9XG5cbiAgIG9uQ2hhbmdlKGl0ZW06IFN0U2lkZWJhckl0ZW0pOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5faXNBY3RpdmUoaXRlbSkpIHtcbiAgICAgICAgIHRoaXMuX2Nsb3NlUmVzdE9mSXRlbXMoaXRlbS5pZCk7XG4gICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KGl0ZW0pO1xuICAgICAgfVxuICAgfVxuXG4gICBkaXNwbGF5QXNDb21wbGV4TW9kZSgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnZpc3VhbE1vZGUgPT09IFN0U2lkZWJhclZpc3VhbE1vZGUuY29tcGxleDtcbiAgIH1cblxuICAgcHJpdmF0ZSBfaXNBY3RpdmUoaXRlbTogU3RTaWRlYmFySXRlbSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIGl0ZW0gJiYgdGhpcy5fYWN0aXZlICYmIHRoaXMuX2FjdGl2ZS5pZCA9PT0gaXRlbS5pZDtcbiAgIH1cblxuICAgcHJpdmF0ZSBfdXBkYXRlU3RhdHVzKCk6IHZvaWQge1xuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICBpZiAodGhpcy5oYXNBY3RpdmVDaGlsZChpdGVtKSkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZFtpXSA9IHRydWU7XG4gICAgICAgICB9XG4gICAgICB9KTtcbiAgIH1cblxuICAgcHJpdmF0ZSBfaGFzQWN0aXZlQ2hpbGRJbkNoaWxkcmVuKGl0ZW1zOiBTdFNpZGViYXJJdGVtW10pOiBib29sZWFuIHtcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKCFmb3VuZCAmJiBpIDwgaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICBpZiAodGhpcy5oYXNBY3RpdmVDaGlsZChpdGVtc1tpXSkpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgIH1cbiAgICAgICAgICsraTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgfVxuXG4gICBwcml2YXRlIF9jbG9zZVJlc3RPZkl0ZW1zKGl0ZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmV4cGFuZGVkLmZvckVhY2goKG9wZW4sIGkpID0+IHtcbiAgICAgICAgIGlmIChvcGVuICYmIHRoaXMuaXRlbXNbaV0uaWQgIT09IGl0ZW1JZCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZFtpXSA9IGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG59XG4iXX0=