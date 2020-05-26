import { EventEmitter, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { StLauncherGroup, StLauncherItem } from './st-launcher.model';
/**
 * @description {Component} Launcher
 *
 * This components show a launcher for the instances of an item group
 *
 *  @model
 *
 *   [Launcher group] {./st-launcher.model.ts#StLauncherGroup}
 *   [Launcher item] {./st-launcher.model.ts#StLauncherItem}
 *
 * @example
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
export declare class StLauncherComponent {
    private _cd;
    /** @input {string} [qaTag=''] For set id for tests */
    qaTag: string;
    /** @input {StLauncherGroup[]} items List of groups of items to show */
    items: StLauncherGroup[];
    /** @input {number} [groupLimit=undefined] Limit of items to be displayed per group */
    groupLimit: number;
    /** @input {string} [groupLimitMessage=''] Label when the group items limit is exceeded */
    groupLimitLabel: string;
    /** @output {StLauncherItem} [change=''] Notify any item selection */
    select: EventEmitter<StLauncherItem>;
    /** @output {StLauncherGroup} [toggle=''] Notify any group expansion or collapsed */
    toggle: EventEmitter<StLauncherGroup>;
    /** @output {StLauncherGroup} [viewMore=''] Notify that wants to see more items in a group */
    viewMore: EventEmitter<StLauncherGroup>;
    private _items;
    constructor(_cd: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    readonly listQaTag: string;
    onToggleGroup(groupItem: StLauncherGroup): void;
    onSelectItem(item: StLauncherItem): void;
    onViewMore(item: StLauncherGroup): void;
}
