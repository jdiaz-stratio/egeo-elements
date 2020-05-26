import { EventEmitter, OnInit } from '@angular/core';
import { StDropDownMenuItem, StDropDownVisualMode } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StPopPlacement } from '../st-pop/st-pop.model';
/**
 * @description {Component} [Filter selector]
 *
 * The filter selector allows display a filter with a list of options
 *
 * @example
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
export declare class StFilterSelectorComponent implements OnInit {
    /** @Input {boolean} [openFilter=false] This boolean is needed to specify the status of the filter (open or closed) */
    openFilter: boolean;
    /** @Input {StDropDownMenuItem[]} [filterList=] List of options */
    filterList: StDropDownMenuItem[];
    /** @Input {StDropDownMenuItem} [selected=] Selected option */
    selected: StDropDownMenuItem;
    /** @Input {boolean} [menuAlignedToRight=false] Boolean to indicate if menu has to be displayed aligned to the right */
    menuAlignedToRight: boolean;
    /** @Output {StDropDownMenuItem} [clickFilter=] Event emitted when an option is selected */
    clickFilter: EventEmitter<StDropDownMenuItem>;
    /** @Output {boolean} [changeFilterVisibility=] Event emitted when visibility of options changes */
    changeFilterVisibility: EventEmitter<boolean>;
    /** @Output {boolean} [closeFilter=] Event emitted when option menu is closed */
    closeFilter: EventEmitter<boolean>;
    /** @output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item */
    itemMouseEnter: EventEmitter<StDropDownMenuItem>;
    /** @output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item */
    itemMouseLeave: EventEmitter<StDropDownMenuItem>;
    readonly sectionMenuVisualMode: StDropDownVisualMode;
    menuPlacement: StPopPlacement;
    ngOnInit(): void;
    onClickFilter(selectedFilter: StDropDownMenuItem): void;
    onChangeFilterVisibility(): void;
    onCloseFilter(): void;
    onItemMouseEnter(item: StDropDownMenuItem): void;
    onItemMouseLeave(item: StDropDownMenuItem): void;
}
