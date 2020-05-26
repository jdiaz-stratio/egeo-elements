import { EventEmitter, OnInit } from '@angular/core';
import { StSidebarItem } from '../st-sidebar-item.interface';
import { StSidebarVisualMode } from '../st-sidebar-visual-mode';
/**
 * @description {Component} [SidebarItemList]
 *
 * The sidebar item list component has been designed to display a list of items in a sidebar.
 *
 *  @model
 *
 *   [Sidebar items] {../st-sidebar-item.interface.ts#StSidebarItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-sidebar-item-list [items]="items" (change)="onChange($event)" [active]="active" [deep]="deep">
 * </st-sidebar-item-list>
 * ```
 *
 */
export declare class StSidebarItemListComponent implements OnInit {
    /** @Input {StSidebarItem[]} [items=''] List of items displayed on the menu */
    items: StSidebarItem[];
    /** @Input {number} [deep=0] Deep of the item list in the sidebar */
    deep: number;
    /** @Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list */
    visualMode: StSidebarVisualMode;
    /** @Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emit the active item */
    change: EventEmitter<StSidebarItem>;
    displayAsComplexModeValue: boolean;
    expanded: boolean[];
    private _active;
    /** @Input {string} [active=''] The id of the current active item */
    active: StSidebarItem;
    ngOnInit(): void;
    getItemClasses(item: StSidebarItem, index: number): any;
    onSelectItem(item: StSidebarItem, position: number): void;
    hasActiveChild(item: StSidebarItem): boolean;
    onChange(item: StSidebarItem): void;
    displayAsComplexMode(): boolean;
    private _isActive;
    private _updateStatus;
    private _hasActiveChildInChildren;
    private _closeRestOfItems;
}
