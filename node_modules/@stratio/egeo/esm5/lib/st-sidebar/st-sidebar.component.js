/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-sidebar/st-sidebar.component.ts
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
import { StSidebarVisualMode } from './st-sidebar-visual-mode';
/**
 * \@description {Component} [Sidebar]
 *
 * The sidebar component has been designed to navigate through different sections of a web page.
 *
 * \@model
 *
 *   [Sidebar items] {./st-sidebar-item.interface.ts#StSidebarItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-sidebar class="sidebar" title="Mesos Manager" [items]="items" qaTag="sidebar-demo">
 * </st-sidebar>
 * ```
 *
 */
var StSidebarComponent = /** @class */ (function () {
    function StSidebarComponent() {
        /**
         * \@Input {string} [title=''] Title displayed on the top of menu
         */
        this.title = '';
        /**
         * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
         */
        this.items = [];
        /**
         * \@Input {boolean} [searchMode=''] Boolean to enable or disable the search mode. By default, it is disabled
         */
        this.searchMode = false;
        /**
         * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
         */
        this.visualMode = StSidebarVisualMode.normal;
        /**
         * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emits the active item
         */
        this.change = new EventEmitter();
        /**
         * \@Output {string} [search=''] Event emitted when search mode is enabled and user interacts with the search input
         */
        this.search = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    StSidebarComponent.prototype.onChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this.active || this.active.id !== item.id) {
            this.change.emit(item);
        }
    };
    /**
     * @param {?} searchData
     * @return {?}
     */
    StSidebarComponent.prototype.onSearch = /**
     * @param {?} searchData
     * @return {?}
     */
    function (searchData) {
        if (searchData) {
            this.search.emit(searchData.text);
        }
    };
    StSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-sidebar',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content select=[sidebar-header]></ng-content>\n<h1 class=\"title\" *ngIf=\"title\"> {{title}}</h1>\n<st-search class=\"search\" *ngIf=\"searchMode\" (search)=\"onSearch($event)\"></st-search>\n<ul class=\"item-list\">\n   <st-sidebar-item-list [active]=\"active\" [items]=\"items\" [visualMode]=\"visualMode\" (change)=\"onChange($event)\">\n   </st-sidebar-item-list>\n</ul>\n<ng-content select=[sidebar-footer]></ng-content>\n",
                    providers: [],
                    host: { class: 'st-sidebar' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{width:100%;height:100%;display:block}.search{display:block;padding-bottom:30px}"]
                }] }
    ];
    StSidebarComponent.propDecorators = {
        title: [{ type: Input }],
        active: [{ type: Input }],
        items: [{ type: Input }],
        searchMode: [{ type: Input }],
        visualMode: [{ type: Input }],
        change: [{ type: Output }],
        search: [{ type: Output }]
    };
    return StSidebarComponent;
}());
export { StSidebarComponent };
if (false) {
    /**
     * \@Input {string} [title=''] Title displayed on the top of menu
     * @type {?}
     */
    StSidebarComponent.prototype.title;
    /**
     * \@Input {StSidebarItem} [active=''] The current active item
     * @type {?}
     */
    StSidebarComponent.prototype.active;
    /**
     * \@Input {StSidebarItem[]} [items=''] List of items displayed on the menu
     * @type {?}
     */
    StSidebarComponent.prototype.items;
    /**
     * \@Input {boolean} [searchMode=''] Boolean to enable or disable the search mode. By default, it is disabled
     * @type {?}
     */
    StSidebarComponent.prototype.searchMode;
    /**
     * \@Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list
     * @type {?}
     */
    StSidebarComponent.prototype.visualMode;
    /**
     * \@Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emits the active item
     * @type {?}
     */
    StSidebarComponent.prototype.change;
    /**
     * \@Output {string} [search=''] Event emitted when search mode is enabled and user interacts with the search input
     * @type {?}
     */
    StSidebarComponent.prototype.search;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNpZGViYXIvc3Qtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQi9EO0lBQUE7Ozs7UUFVWSxVQUFLLEdBQVcsRUFBRSxDQUFDOzs7O1FBSW5CLFVBQUssR0FBb0IsRUFBRSxDQUFDOzs7O1FBRTVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Ozs7UUFFNUIsZUFBVSxHQUF3QixtQkFBbUIsQ0FBQyxNQUFNLENBQUM7Ozs7UUFFNUQsV0FBTSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7OztRQUV4RSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFjdkUsQ0FBQzs7Ozs7SUFYRSxxQ0FBUTs7OztJQUFSLFVBQVMsSUFBbUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNKLENBQUM7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLFVBQWU7UUFDckIsSUFBSSxVQUFVLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSixDQUFDOztnQkFuQ0gsU0FBUyxTQUFDO29CQUNSLFFBQVEsRUFBRSxZQUFZO29CQUN0QixrM0JBQTBDO29CQUUxQyxTQUFTLEVBQUUsRUFBRTtvQkFDYixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO29CQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7d0JBR0csS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFFTCxLQUFLO3lCQUVMLE1BQU07eUJBRU4sTUFBTTs7SUFjVix5QkFBQztDQUFBLEFBcENELElBb0NDO1NBNUJZLGtCQUFrQjs7Ozs7O0lBRTVCLG1DQUE0Qjs7Ozs7SUFFNUIsb0NBQStCOzs7OztJQUUvQixtQ0FBcUM7Ozs7O0lBRXJDLHdDQUFxQzs7Ozs7SUFFckMsd0NBQXNFOzs7OztJQUV0RSxvQ0FBa0Y7Ozs7O0lBRWxGLG9DQUFvRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0U2lkZWJhckl0ZW0gfSBmcm9tICcuL3N0LXNpZGViYXItaXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU3RTaWRlYmFyVmlzdWFsTW9kZSB9IGZyb20gJy4vc3Qtc2lkZWJhci12aXN1YWwtbW9kZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtTaWRlYmFyXVxuICpcbiAqIFRoZSBzaWRlYmFyIGNvbXBvbmVudCBoYXMgYmVlbiBkZXNpZ25lZCB0byBuYXZpZ2F0ZSB0aHJvdWdoIGRpZmZlcmVudCBzZWN0aW9ucyBvZiBhIHdlYiBwYWdlLlxuICpcbiAqICBAbW9kZWxcbiAqXG4gKiAgIFtTaWRlYmFyIGl0ZW1zXSB7Li9zdC1zaWRlYmFyLWl0ZW0uaW50ZXJmYWNlLnRzI1N0U2lkZWJhckl0ZW19XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1zaWRlYmFyIGNsYXNzPVwic2lkZWJhclwiIHRpdGxlPVwiTWVzb3MgTWFuYWdlclwiIFtpdGVtc109XCJpdGVtc1wiIHFhVGFnPVwic2lkZWJhci1kZW1vXCI+XG4gKiA8L3N0LXNpZGViYXI+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1zaWRlYmFyJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LXNpZGViYXIuY29tcG9uZW50LnNjc3MnXSxcbiAgIHByb3ZpZGVyczogW10sXG4gICBob3N0OiB7IGNsYXNzOiAnc3Qtc2lkZWJhcicgfSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0U2lkZWJhckNvbXBvbmVudCB7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFt0aXRsZT0nJ10gVGl0bGUgZGlzcGxheWVkIG9uIHRoZSB0b3Agb2YgbWVudSAqL1xuICAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgLyoqIEBJbnB1dCB7U3RTaWRlYmFySXRlbX0gW2FjdGl2ZT0nJ10gVGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW0gKi9cbiAgIEBJbnB1dCgpIGFjdGl2ZTogU3RTaWRlYmFySXRlbTtcbiAgIC8qKiBASW5wdXQge1N0U2lkZWJhckl0ZW1bXX0gW2l0ZW1zPScnXSBMaXN0IG9mIGl0ZW1zIGRpc3BsYXllZCBvbiB0aGUgbWVudSAqL1xuICAgQElucHV0KCkgaXRlbXM6IFN0U2lkZWJhckl0ZW1bXSA9IFtdO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3NlYXJjaE1vZGU9JyddIEJvb2xlYW4gdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHNlYXJjaCBtb2RlLiBCeSBkZWZhdWx0LCBpdCBpcyBkaXNhYmxlZCAqL1xuICAgQElucHV0KCkgc2VhcmNoTW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgLyoqIEBJbnB1dCB7U3RTaWRlYmFyVmlzdWFsTW9kZX0gW3Zpc3VhbE1vZGU9J1N0U2lkZWJhclZpc3VhbE1vZGUubm9ybWFsJ10gVmlzdWFsIG1vZGUgdXNlZCB0byBkaXNwbGF5IHRoZSBpdGVtIGxpc3QgKi9cbiAgIEBJbnB1dCgpIHZpc3VhbE1vZGU6IFN0U2lkZWJhclZpc3VhbE1vZGUgPSBTdFNpZGViYXJWaXN1YWxNb2RlLm5vcm1hbDtcbiAgIC8qKiBAT3V0cHV0IHtTdFNpZGViYXJJdGVtfSBbY2hhbmdlPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gdGhlIGFjdGl2ZSBpdGVtIGlzIGNoYW5nZWQuIFRoaXMgZW1pdHMgdGhlIGFjdGl2ZSBpdGVtICovXG4gICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8U3RTaWRlYmFySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0U2lkZWJhckl0ZW0+KCk7XG4gICAvKiogQE91dHB1dCB7c3RyaW5nfSBbc2VhcmNoPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gc2VhcmNoIG1vZGUgaXMgZW5hYmxlZCBhbmQgdXNlciBpbnRlcmFjdHMgd2l0aCB0aGUgc2VhcmNoIGlucHV0ICovXG4gICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cbiAgIG9uQ2hhbmdlKGl0ZW06IFN0U2lkZWJhckl0ZW0pOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmUgfHwgdGhpcy5hY3RpdmUuaWQgIT09IGl0ZW0uaWQpIHtcbiAgICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoaXRlbSk7XG4gICAgICB9XG4gICB9XG5cbiAgIG9uU2VhcmNoKHNlYXJjaERhdGE6IGFueSk6IHZvaWQge1xuICAgICAgaWYgKHNlYXJjaERhdGEpIHtcbiAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQoc2VhcmNoRGF0YS50ZXh0KTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==