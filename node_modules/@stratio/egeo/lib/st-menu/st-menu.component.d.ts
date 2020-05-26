import { OnInit, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StMenuModel, StMenuPosition } from './st-menu.model';
/**
 * @description {Component} Menu
 *
 * This components shows a dropdown menu with nested submenus
 *
 *  @model
 *
 *   [Menu model] {./st-menu.model.ts#StMenuModel}
 *   [Menu status] {./st-menu.model.ts#StMenuStatus}
 *   [Menu position] {./st-menu.model.ts#StMenuPosition}
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-menu
 *       qaTag="menu-example"
 *       [menuOptions]="options"
 *       [dynamicHeight]="true"
 *       (selectedOption)="onSelectMenuOption(event)">
 *    </st-menu>
 * ```
 */
export declare class StMenuComponent<T> implements OnDestroy, OnInit {
    private _cd;
    /** @input {string} [qaTag=''] For set id for tests */
    qaTag: string;
    /** @input {StMenuModel<T>[]} list of menu items to show */
    menuOptions: StMenuModel<T>[];
    /** @input {any} current selected option */
    activeOption: any;
    /** @input {StMenuPosition} current menu position: left | right */
    position: StMenuPosition;
    /** @input {boolean} show search input */
    search: boolean;
    /** @input {string} search input custom label */
    searchLabel: string;
    /** @input {boolean} Show menu in full height mode */
    dynamicHeight: boolean;
    /** @input {number} adjust menu options position */
    marginTop: number;
    /** @input {boolean} shows menu dropdown animation */
    animate: boolean;
    /** @input {boolean} disable menu toggle */
    disabled: boolean;
    /** @output {StMenuModel<T>} [selectedOption=''] Notify the selected menu option */
    selectedOption: EventEmitter<StMenuModel<T>>;
    /** @output {string} [searchChange=''] Notify when the search input value changes */
    searchChange: EventEmitter<string>;
    showMenu: boolean;
    searchFormControl: FormControl;
    private _formControlSubscription;
    constructor(_cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Toggle menu activation
     * @param event
     */
    activateMenu(event: Event): void;
    /**
     * Emits the selected menu option from childs
     * @param event: StMenuModel<T>
     */
    selectedMenuOption(event: StMenuModel<T>): void;
    /**
     * Hides the menu and reset the search input value if it's enabled
     */
    hideMenu(): void;
}
