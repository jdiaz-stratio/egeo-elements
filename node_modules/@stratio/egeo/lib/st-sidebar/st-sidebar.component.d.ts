import { EventEmitter } from '@angular/core';
import { StSidebarItem } from './st-sidebar-item.interface';
import { StSidebarVisualMode } from './st-sidebar-visual-mode';
/**
 * @description {Component} [Sidebar]
 *
 * The sidebar component has been designed to navigate through different sections of a web page.
 *
 *  @model
 *
 *   [Sidebar items] {./st-sidebar-item.interface.ts#StSidebarItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-sidebar class="sidebar" title="Mesos Manager" [items]="items" qaTag="sidebar-demo">
 * </st-sidebar>
 * ```
 *
 */
export declare class StSidebarComponent {
    /** @Input {string} [title=''] Title displayed on the top of menu */
    title: string;
    /** @Input {StSidebarItem} [active=''] The current active item */
    active: StSidebarItem;
    /** @Input {StSidebarItem[]} [items=''] List of items displayed on the menu */
    items: StSidebarItem[];
    /** @Input {boolean} [searchMode=''] Boolean to enable or disable the search mode. By default, it is disabled */
    searchMode: boolean;
    /** @Input {StSidebarVisualMode} [visualMode='StSidebarVisualMode.normal'] Visual mode used to display the item list */
    visualMode: StSidebarVisualMode;
    /** @Output {StSidebarItem} [change=''] Event emitted when the active item is changed. This emits the active item */
    change: EventEmitter<StSidebarItem>;
    /** @Output {string} [search=''] Event emitted when search mode is enabled and user interacts with the search input */
    search: EventEmitter<string>;
    onChange(item: StSidebarItem): void;
    onSearch(searchData: any): void;
}
