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
export class StSidebarComponent {
    constructor() {
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
    onChange(item) {
        if (!this.active || this.active.id !== item.id) {
            this.change.emit(item);
        }
    }
    /**
     * @param {?} searchData
     * @return {?}
     */
    onSearch(searchData) {
        if (searchData) {
            this.search.emit(searchData.text);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtc2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNpZGViYXIvc3Qtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Qi9ELE1BQU0sT0FBTyxrQkFBa0I7SUFSL0I7Ozs7UUFVWSxVQUFLLEdBQVcsRUFBRSxDQUFDOzs7O1FBSW5CLFVBQUssR0FBb0IsRUFBRSxDQUFDOzs7O1FBRTVCLGVBQVUsR0FBWSxLQUFLLENBQUM7Ozs7UUFFNUIsZUFBVSxHQUF3QixtQkFBbUIsQ0FBQyxNQUFNLENBQUM7Ozs7UUFFNUQsV0FBTSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQzs7OztRQUV4RSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFjdkUsQ0FBQzs7Ozs7SUFYRSxRQUFRLENBQUMsSUFBbUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNKLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFVBQWU7UUFDckIsSUFBSSxVQUFVLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSixDQUFDOzs7WUFuQ0gsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixrM0JBQTBDO2dCQUUxQyxTQUFTLEVBQUUsRUFBRTtnQkFDYixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dCQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDakQ7OztvQkFHRyxLQUFLO3FCQUVMLEtBQUs7b0JBRUwsS0FBSzt5QkFFTCxLQUFLO3lCQUVMLEtBQUs7cUJBRUwsTUFBTTtxQkFFTixNQUFNOzs7Ozs7O0lBWlAsbUNBQTRCOzs7OztJQUU1QixvQ0FBK0I7Ozs7O0lBRS9CLG1DQUFxQzs7Ozs7SUFFckMsd0NBQXFDOzs7OztJQUVyQyx3Q0FBc0U7Ozs7O0lBRXRFLG9DQUFrRjs7Ozs7SUFFbEYsb0NBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RTaWRlYmFySXRlbSB9IGZyb20gJy4vc3Qtc2lkZWJhci1pdGVtLmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdFNpZGViYXJWaXN1YWxNb2RlIH0gZnJvbSAnLi9zdC1zaWRlYmFyLXZpc3VhbC1tb2RlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1NpZGViYXJdXG4gKlxuICogVGhlIHNpZGViYXIgY29tcG9uZW50IGhhcyBiZWVuIGRlc2lnbmVkIHRvIG5hdmlnYXRlIHRocm91Z2ggZGlmZmVyZW50IHNlY3Rpb25zIG9mIGEgd2ViIHBhZ2UuXG4gKlxuICogIEBtb2RlbFxuICpcbiAqICAgW1NpZGViYXIgaXRlbXNdIHsuL3N0LXNpZGViYXItaXRlbS5pbnRlcmZhY2UudHMjU3RTaWRlYmFySXRlbX1cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LXNpZGViYXIgY2xhc3M9XCJzaWRlYmFyXCIgdGl0bGU9XCJNZXNvcyBNYW5hZ2VyXCIgW2l0ZW1zXT1cIml0ZW1zXCIgcWFUYWc9XCJzaWRlYmFyLWRlbW9cIj5cbiAqIDwvc3Qtc2lkZWJhcj5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXNpZGViYXInLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3Qtc2lkZWJhci5jb21wb25lbnQuc2NzcyddLFxuICAgcHJvdmlkZXJzOiBbXSxcbiAgIGhvc3Q6IHsgY2xhc3M6ICdzdC1zaWRlYmFyJyB9LFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RTaWRlYmFyQ29tcG9uZW50IHtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3RpdGxlPScnXSBUaXRsZSBkaXNwbGF5ZWQgb24gdGhlIHRvcCBvZiBtZW51ICovXG4gICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAvKiogQElucHV0IHtTdFNpZGViYXJJdGVtfSBbYWN0aXZlPScnXSBUaGUgY3VycmVudCBhY3RpdmUgaXRlbSAqL1xuICAgQElucHV0KCkgYWN0aXZlOiBTdFNpZGViYXJJdGVtO1xuICAgLyoqIEBJbnB1dCB7U3RTaWRlYmFySXRlbVtdfSBbaXRlbXM9JyddIExpc3Qgb2YgaXRlbXMgZGlzcGxheWVkIG9uIHRoZSBtZW51ICovXG4gICBASW5wdXQoKSBpdGVtczogU3RTaWRlYmFySXRlbVtdID0gW107XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc2VhcmNoTW9kZT0nJ10gQm9vbGVhbiB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgc2VhcmNoIG1vZGUuIEJ5IGRlZmF1bHQsIGl0IGlzIGRpc2FibGVkICovXG4gICBASW5wdXQoKSBzZWFyY2hNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtTdFNpZGViYXJWaXN1YWxNb2RlfSBbdmlzdWFsTW9kZT0nU3RTaWRlYmFyVmlzdWFsTW9kZS5ub3JtYWwnXSBWaXN1YWwgbW9kZSB1c2VkIHRvIGRpc3BsYXkgdGhlIGl0ZW0gbGlzdCAqL1xuICAgQElucHV0KCkgdmlzdWFsTW9kZTogU3RTaWRlYmFyVmlzdWFsTW9kZSA9IFN0U2lkZWJhclZpc3VhbE1vZGUubm9ybWFsO1xuICAgLyoqIEBPdXRwdXQge1N0U2lkZWJhckl0ZW19IFtjaGFuZ2U9JyddIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgYWN0aXZlIGl0ZW0gaXMgY2hhbmdlZC4gVGhpcyBlbWl0cyB0aGUgYWN0aXZlIGl0ZW0gKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxTdFNpZGViYXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RTaWRlYmFySXRlbT4oKTtcbiAgIC8qKiBAT3V0cHV0IHtzdHJpbmd9IFtzZWFyY2g9JyddIEV2ZW50IGVtaXR0ZWQgd2hlbiBzZWFyY2ggbW9kZSBpcyBlbmFibGVkIGFuZCB1c2VyIGludGVyYWN0cyB3aXRoIHRoZSBzZWFyY2ggaW5wdXQgKi9cbiAgIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblxuICAgb25DaGFuZ2UoaXRlbTogU3RTaWRlYmFySXRlbSk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCB0aGlzLmFjdGl2ZS5pZCAhPT0gaXRlbS5pZCkge1xuICAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdChpdGVtKTtcbiAgICAgIH1cbiAgIH1cblxuICAgb25TZWFyY2goc2VhcmNoRGF0YTogYW55KTogdm9pZCB7XG4gICAgICBpZiAoc2VhcmNoRGF0YSkge1xuICAgICAgICAgdGhpcy5zZWFyY2guZW1pdChzZWFyY2hEYXRhLnRleHQpO1xuICAgICAgfVxuICAgfVxufVxuIl19