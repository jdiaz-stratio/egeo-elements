import { EventEmitter, OnInit } from '@angular/core';
import { StIconTab } from './st-icon-tabs.model';
/**
 * @description {Component} [Vertical Icon Tabs]
 *
 * The vertical icon tabs component has been designed to display content in different sections.
 *
 * @model
 *
 *   [Icon tab] {./st-icon-tabs.model.ts#StIconTab}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-vertical-icon-tabs class="vertical-icon-tabs"
 * [options]="options"
 * [activeOption]="active"
 * (changeOption)="onChangeOption($event)">
 * </st-vertical-icon-tabs>
 * ```
 *
 */
export declare class StVerticalIconTabsComponent implements OnInit {
    /** @Input {StIconTab} [activeOption=] Active option */
    activeOption: StIconTab;
    /** @Input {StIconTab[]} [options=] Option list */
    options: StIconTab[];
    /** @Output {StIconTab} [changeOption=] Event emitted when user clicks on an option */
    changeOption: EventEmitter<StIconTab>;
    ngOnInit(): void;
    isActive(option: StIconTab): boolean;
    activateOption(option: StIconTab): void;
}
