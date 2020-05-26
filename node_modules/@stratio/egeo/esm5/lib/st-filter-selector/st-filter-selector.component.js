/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-filter-selector/st-filter-selector.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software – including all its source code – contains proprietary
 * information of Stratio Big Data Inc., Sucursal en España and
 * may not be revealed, sold, transferred, modified, distributed or
 * otherwise made available, licensed or sublicensed to third parties;
 * nor reverse engineered, disassembled or decompiled, without express
 * written authorization from Stratio Big Data Inc., Sucursal en España.
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StDropDownMenuItem, StDropDownVisualMode } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StPopPlacement } from '../st-pop/st-pop.model';
/**
 * \@description {Component} [Filter selector]
 *
 * The filter selector allows display a filter with a list of options
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-filter-selector
 *    [filterList]="filter"
 *    [openFilter]="openFilter"
 *    [selected]="selectedFilter"
 *    (clickFilter)="onFilter($event)"
 *    (changeFilterVisibility)="onChangeFilterVisibility()"
 *    (closeFilter)="onCloseFilter()">
 * </st-filter-selector>
 * ```
 *
 */
var StFilterSelectorComponent = /** @class */ (function () {
    function StFilterSelectorComponent() {
        /**
         * \@Input {boolean} [openFilter=false] This boolean is needed to specify the status of the filter (open or closed)
         */
        this.openFilter = false;
        /**
         * \@Input {boolean} [menuAlignedToRight=false] Boolean to indicate if menu has to be displayed aligned to the right
         */
        this.menuAlignedToRight = false;
        /**
         * \@Output {StDropDownMenuItem} [clickFilter=] Event emitted when an option is selected
         */
        this.clickFilter = new EventEmitter();
        /**
         * \@Output {boolean} [changeFilterVisibility=] Event emitted when visibility of options changes
         */
        this.changeFilterVisibility = new EventEmitter();
        /**
         * \@Output {boolean} [closeFilter=] Event emitted when option menu is closed
         */
        this.closeFilter = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
         */
        this.itemMouseEnter = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
         */
        this.itemMouseLeave = new EventEmitter();
        this.sectionMenuVisualMode = StDropDownVisualMode.MENU_LIST;
    }
    /**
     * @return {?}
     */
    StFilterSelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.menuPlacement = this.menuAlignedToRight ? StPopPlacement.BOTTOM_END : StPopPlacement.BOTTOM_START;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (!_this.selected && _this.filterList && _this.filterList.length) {
                _this.clickFilter.emit(_this.filterList[0]);
            }
        }));
    };
    /**
     * @param {?} selectedFilter
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onClickFilter = /**
     * @param {?} selectedFilter
     * @return {?}
     */
    function (selectedFilter) {
        this.clickFilter.emit(selectedFilter);
    };
    /**
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onChangeFilterVisibility = /**
     * @return {?}
     */
    function () {
        this.changeFilterVisibility.emit(!this.openFilter);
    };
    /**
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onCloseFilter = /**
     * @return {?}
     */
    function () {
        this.closeFilter.emit(true);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onItemMouseEnter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseEnter.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StFilterSelectorComponent.prototype.onItemMouseLeave = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseLeave.emit(item);
    };
    StFilterSelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-filter-selector',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a. All rights reserved.\n\n    This software \u2013 including all its source code \u2013 contains proprietary\n    information of Stratio Big Data Inc., Sucursal en Espa\u00F1a and\n    may not be revealed, sold, transferred, modified, distributed or\n    otherwise made available, licensed or sublicensed to third parties;\n    nor reverse engineered, disassembled or decompiled, without express\n    written authorization from Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n-->\n\n<st-dropdown-menu\n   class=\"st-filter-selector\"\n   [items]=\"filterList\"\n   [active]=\"openFilter\"\n   [placement]=\"menuPlacement\"\n   [openToLeft]=\"menuAlignedToRight\"\n   [visualMode]=\"sectionMenuVisualMode\"\n   (change)=\"onClickFilter($event)\"\n   (clickOutside)=\"onCloseFilter()\"\n   (itemMouseEnter)=\"onItemMouseEnter($event)\"\n   (itemMouseLeave)=\"onItemMouseLeave($event)\">\n   <div (click)=\"onChangeFilterVisibility()\" class=\"filter-title\">\n      <span>{{ selected?.label }}</span>\n      <i class=\"icon-arrow2_down arrow\"></i>\n   </div>\n</st-dropdown-menu>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-filter-selector{position:relative;display:inline-block;cursor:pointer;text-align:left}.st-filter-selector .filter-title{display:inline-flex;padding-bottom:10px}.st-filter-selector .filter-title>span{padding-right:10px}.st-filter-selector .filter-title>i{vertical-align:middle}"]
                }] }
    ];
    StFilterSelectorComponent.propDecorators = {
        openFilter: [{ type: Input }],
        filterList: [{ type: Input }],
        selected: [{ type: Input }],
        menuAlignedToRight: [{ type: Input }],
        clickFilter: [{ type: Output }],
        changeFilterVisibility: [{ type: Output }],
        closeFilter: [{ type: Output }],
        itemMouseEnter: [{ type: Output }],
        itemMouseLeave: [{ type: Output }]
    };
    return StFilterSelectorComponent;
}());
export { StFilterSelectorComponent };
if (false) {
    /**
     * \@Input {boolean} [openFilter=false] This boolean is needed to specify the status of the filter (open or closed)
     * @type {?}
     */
    StFilterSelectorComponent.prototype.openFilter;
    /**
     * \@Input {StDropDownMenuItem[]} [filterList=] List of options
     * @type {?}
     */
    StFilterSelectorComponent.prototype.filterList;
    /**
     * \@Input {StDropDownMenuItem} [selected=] Selected option
     * @type {?}
     */
    StFilterSelectorComponent.prototype.selected;
    /**
     * \@Input {boolean} [menuAlignedToRight=false] Boolean to indicate if menu has to be displayed aligned to the right
     * @type {?}
     */
    StFilterSelectorComponent.prototype.menuAlignedToRight;
    /**
     * \@Output {StDropDownMenuItem} [clickFilter=] Event emitted when an option is selected
     * @type {?}
     */
    StFilterSelectorComponent.prototype.clickFilter;
    /**
     * \@Output {boolean} [changeFilterVisibility=] Event emitted when visibility of options changes
     * @type {?}
     */
    StFilterSelectorComponent.prototype.changeFilterVisibility;
    /**
     * \@Output {boolean} [closeFilter=] Event emitted when option menu is closed
     * @type {?}
     */
    StFilterSelectorComponent.prototype.closeFilter;
    /**
     * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
     * @type {?}
     */
    StFilterSelectorComponent.prototype.itemMouseEnter;
    /**
     * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
     * @type {?}
     */
    StFilterSelectorComponent.prototype.itemMouseLeave;
    /** @type {?} */
    StFilterSelectorComponent.prototype.sectionMenuVisualMode;
    /** @type {?} */
    StFilterSelectorComponent.prototype.menuPlacement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtZmlsdGVyLXNlbGVjdG9yL3N0LWZpbHRlci1zZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnhEO0lBQUE7Ozs7UUFTWSxlQUFVLEdBQVksS0FBSyxDQUFDOzs7O1FBTTVCLHVCQUFrQixHQUFZLEtBQUssQ0FBQzs7OztRQUVuQyxnQkFBVyxHQUFxQyxJQUFJLFlBQVksRUFBc0IsQ0FBQzs7OztRQUV2RiwyQkFBc0IsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQzs7OztRQUU1RSxnQkFBVyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDOzs7O1FBRWpFLG1CQUFjLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDOzs7O1FBRTFGLG1CQUFjLEdBQXFDLElBQUksWUFBWSxFQUFzQixDQUFDO1FBRXBGLDBCQUFxQixHQUF5QixvQkFBb0IsQ0FBQyxTQUFTLENBQUM7SUErQmhHLENBQUM7Ozs7SUE1QkUsNENBQVE7OztJQUFSO1FBQUEsaUJBT0M7UUFORSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQztRQUN2RyxVQUFVOzs7UUFBQztZQUNSLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7Z0JBQzlELEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxpREFBYTs7OztJQUFiLFVBQWMsY0FBa0M7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELDREQUF3Qjs7O0lBQXhCO1FBQ0csSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsaURBQWE7OztJQUFiO1FBQ0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxvREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBd0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxvREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBd0I7UUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBekRILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw2b0NBQWlEO29CQUVqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7NkJBSUcsS0FBSzs2QkFFTCxLQUFLOzJCQUVMLEtBQUs7cUNBRUwsS0FBSzs4QkFFTCxNQUFNO3lDQUVOLE1BQU07OEJBRU4sTUFBTTtpQ0FFTixNQUFNO2lDQUVOLE1BQU07O0lBaUNWLGdDQUFDO0NBQUEsQUExREQsSUEwREM7U0FuRFkseUJBQXlCOzs7Ozs7SUFFbkMsK0NBQXFDOzs7OztJQUVyQywrQ0FBMEM7Ozs7O0lBRTFDLDZDQUFzQzs7Ozs7SUFFdEMsdURBQTZDOzs7OztJQUU3QyxnREFBaUc7Ozs7O0lBRWpHLDJEQUFzRjs7Ozs7SUFFdEYsZ0RBQTJFOzs7OztJQUUzRSxtREFBb0c7Ozs7O0lBRXBHLG1EQUFvRzs7SUFFcEcsMERBQTZGOztJQUM3RixrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSDigJMgaW5jbHVkaW5nIGFsbCBpdHMgc291cmNlIGNvZGUg4oCTIGNvbnRhaW5zIHByb3ByaWV0YXJ5XG4gKiBpbmZvcm1hdGlvbiBvZiBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEgYW5kXG4gKiBtYXkgbm90IGJlIHJldmVhbGVkLCBzb2xkLCB0cmFuc2ZlcnJlZCwgbW9kaWZpZWQsIGRpc3RyaWJ1dGVkIG9yXG4gKiBvdGhlcndpc2UgbWFkZSBhdmFpbGFibGUsIGxpY2Vuc2VkIG9yIHN1YmxpY2Vuc2VkIHRvIHRoaXJkIHBhcnRpZXM7XG4gKiBub3IgcmV2ZXJzZSBlbmdpbmVlcmVkLCBkaXNhc3NlbWJsZWQgb3IgZGVjb21waWxlZCwgd2l0aG91dCBleHByZXNzXG4gKiB3cml0dGVuIGF1dGhvcml6YXRpb24gZnJvbSBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0RHJvcERvd25NZW51SXRlbSwgU3REcm9wRG93blZpc3VhbE1vZGUgfSBmcm9tICcuLi9zdC1kcm9wZG93bi1tZW51L3N0LWRyb3Bkb3duLW1lbnUuaW50ZXJmYWNlJztcbmltcG9ydCB7IFN0UG9wUGxhY2VtZW50IH0gZnJvbSAnLi4vc3QtcG9wL3N0LXBvcC5tb2RlbCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtGaWx0ZXIgc2VsZWN0b3JdXG4gKlxuICogVGhlIGZpbHRlciBzZWxlY3RvciBhbGxvd3MgZGlzcGxheSBhIGZpbHRlciB3aXRoIGEgbGlzdCBvZiBvcHRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1maWx0ZXItc2VsZWN0b3JcbiAqICAgIFtmaWx0ZXJMaXN0XT1cImZpbHRlclwiXG4gKiAgICBbb3BlbkZpbHRlcl09XCJvcGVuRmlsdGVyXCJcbiAqICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZEZpbHRlclwiXG4gKiAgICAoY2xpY2tGaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiXG4gKiAgICAoY2hhbmdlRmlsdGVyVmlzaWJpbGl0eSk9XCJvbkNoYW5nZUZpbHRlclZpc2liaWxpdHkoKVwiXG4gKiAgICAoY2xvc2VGaWx0ZXIpPVwib25DbG9zZUZpbHRlcigpXCI+XG4gKiA8L3N0LWZpbHRlci1zZWxlY3Rvcj5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWZpbHRlci1zZWxlY3RvcicsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtZmlsdGVyLXNlbGVjdG9yLnRlbXBsYXRlLmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vc3QtZmlsdGVyLXNlbGVjdG9yLnN0eWxlLnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3RGaWx0ZXJTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAvKiogQElucHV0IHtib29sZWFufSBbb3BlbkZpbHRlcj1mYWxzZV0gVGhpcyBib29sZWFuIGlzIG5lZWRlZCB0byBzcGVjaWZ5IHRoZSBzdGF0dXMgb2YgdGhlIGZpbHRlciAob3BlbiBvciBjbG9zZWQpICovXG4gICBASW5wdXQoKSBvcGVuRmlsdGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtTdERyb3BEb3duTWVudUl0ZW1bXX0gW2ZpbHRlckxpc3Q9XSBMaXN0IG9mIG9wdGlvbnMgKi9cbiAgIEBJbnB1dCgpIGZpbHRlckxpc3Q6IFN0RHJvcERvd25NZW51SXRlbVtdO1xuICAgLyoqIEBJbnB1dCB7U3REcm9wRG93bk1lbnVJdGVtfSBbc2VsZWN0ZWQ9XSBTZWxlY3RlZCBvcHRpb24gKi9cbiAgIEBJbnB1dCgpIHNlbGVjdGVkOiBTdERyb3BEb3duTWVudUl0ZW07XG4gICAvKiogQElucHV0IHtib29sZWFufSBbbWVudUFsaWduZWRUb1JpZ2h0PWZhbHNlXSBCb29sZWFuIHRvIGluZGljYXRlIGlmIG1lbnUgaGFzIHRvIGJlIGRpc3BsYXllZCBhbGlnbmVkIHRvIHRoZSByaWdodCAqL1xuICAgQElucHV0KCkgbWVudUFsaWduZWRUb1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQE91dHB1dCB7U3REcm9wRG93bk1lbnVJdGVtfSBbY2xpY2tGaWx0ZXI9XSBFdmVudCBlbWl0dGVkIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkICovXG4gICBAT3V0cHV0KCkgY2xpY2tGaWx0ZXI6IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+KCk7XG4gICAvKiogQE91dHB1dCB7Ym9vbGVhbn0gW2NoYW5nZUZpbHRlclZpc2liaWxpdHk9XSBFdmVudCBlbWl0dGVkIHdoZW4gdmlzaWJpbGl0eSBvZiBvcHRpb25zIGNoYW5nZXMgKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2VGaWx0ZXJWaXNpYmlsaXR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAvKiogQE91dHB1dCB7Ym9vbGVhbn0gW2Nsb3NlRmlsdGVyPV0gRXZlbnQgZW1pdHRlZCB3aGVuIG9wdGlvbiBtZW51IGlzIGNsb3NlZCAqL1xuICAgQE91dHB1dCgpIGNsb3NlRmlsdGVyOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gICAvKiogQG91dHB1dCB7U3REcm9wRG93bk1lbnVJdGVtfSBbaXRlbU1vdXNlRW50ZXJdIEV2ZW50IGVtaXR0ZWQgd2hlbiBtb3VzZSBpcyBvdmVyIGFuIGl0ZW0gKi9cbiAgIEBPdXRwdXQoKSBpdGVtTW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPFN0RHJvcERvd25NZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0RHJvcERvd25NZW51SXRlbT4oKTtcbiAgIC8qKiBAb3V0cHV0IHtTdERyb3BEb3duTWVudUl0ZW19IFtpdGVtTW91c2VMZWF2ZV0gRXZlbnQgZW1pdHRlZCB3aGVuIG1vdXNlIGxlYXZlcyBhbiBpdGVtICovXG4gICBAT3V0cHV0KCkgaXRlbU1vdXNlTGVhdmU6IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+KCk7XG5cbiAgIHB1YmxpYyByZWFkb25seSBzZWN0aW9uTWVudVZpc3VhbE1vZGU6IFN0RHJvcERvd25WaXN1YWxNb2RlID0gU3REcm9wRG93blZpc3VhbE1vZGUuTUVOVV9MSVNUO1xuICAgcHVibGljIG1lbnVQbGFjZW1lbnQ6IFN0UG9wUGxhY2VtZW50O1xuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMubWVudVBsYWNlbWVudCA9IHRoaXMubWVudUFsaWduZWRUb1JpZ2h0ID8gU3RQb3BQbGFjZW1lbnQuQk9UVE9NX0VORCA6IFN0UG9wUGxhY2VtZW50LkJPVFRPTV9TVEFSVDtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkICYmIHRoaXMuZmlsdGVyTGlzdCAmJiB0aGlzLmZpbHRlckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrRmlsdGVyLmVtaXQodGhpcy5maWx0ZXJMaXN0WzBdKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgfVxuXG4gICBvbkNsaWNrRmlsdGVyKHNlbGVjdGVkRmlsdGVyOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2tGaWx0ZXIuZW1pdChzZWxlY3RlZEZpbHRlcik7XG4gICB9XG5cbiAgIG9uQ2hhbmdlRmlsdGVyVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2hhbmdlRmlsdGVyVmlzaWJpbGl0eS5lbWl0KCF0aGlzLm9wZW5GaWx0ZXIpO1xuICAgfVxuXG4gICBvbkNsb3NlRmlsdGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5jbG9zZUZpbHRlci5lbWl0KHRydWUpO1xuICAgfVxuXG4gICBvbkl0ZW1Nb3VzZUVudGVyKGl0ZW06IFN0RHJvcERvd25NZW51SXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5pdGVtTW91c2VFbnRlci5lbWl0KGl0ZW0pO1xuICAgfVxuXG4gICBvbkl0ZW1Nb3VzZUxlYXZlKGl0ZW06IFN0RHJvcERvd25NZW51SXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5pdGVtTW91c2VMZWF2ZS5lbWl0KGl0ZW0pO1xuICAgfVxufVxuIl19