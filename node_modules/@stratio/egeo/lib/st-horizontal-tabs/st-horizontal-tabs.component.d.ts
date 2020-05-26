import { EventEmitter, OnInit } from '@angular/core';
import { StHorizontalTab } from './st-horizontal-tabs.model';
/**
 * @description {Component} [Horizontal tabs]
 *
 * The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.
 *
 * @model
 *
 *   [Id, text and optional status of a tab] {./st-horizontal-tabs.model.ts#StStHorizontalTab}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-horizontal-tabs [options]="options" [qaTag]="qaTag">
 * </st-horizontal-tabs>
 * ```
 *
 */
export declare class StHorizontalTabsComponent implements OnInit {
    /** @Input {StHorizontalTab} [activeOption=''] Current active option */
    activeOption: StHorizontalTab;
    /** @Input {StHorizontalTab[]} [^options=''] An array of StHorizontalTab objects (see below) that defines the links
     * that will appear and that will be disabled
     */
    options: StHorizontalTab[];
    /** @Input {string} [qaTag=''] Prefix used to generate the id values for qa tests */
    qaTag: string;
    /** @Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
     * active option name as param
     */
    changedOption: EventEmitter<StHorizontalTab>;
    ngOnInit(): void;
    isActive(option: StHorizontalTab): boolean;
    activateOption(option: StHorizontalTab): void;
    getTabStatus(tab: StHorizontalTab): string;
}
