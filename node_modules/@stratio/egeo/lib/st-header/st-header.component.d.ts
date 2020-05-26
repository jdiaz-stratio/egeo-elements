import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StHeaderMenuOption, StHeaderSelection } from './st-header.model';
import { StWindowRefService } from '../utils/window-service';
/**
 * @description {Component} [Header]
 *
 * The header component is a main component of an application.
 * This component must be on top and scroll with page, when scroll is in a calculated position,
 * the header shrinks and fix to top.
 *
 * @model
 *
 *   [Header menu options] {./st-header.model.ts#StHeaderMenuOption}
 *   [Submenu options] {./st-header.model.ts#StHeaderSubMenuOption}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-header [menu]="headerMenuSchema" id="header">
 *     <div class="st-header-logo">
 *        <!-- Logo as svg, image, etc. -->
 *     </div>
 *     <div class="st-header-user-menu">
 *        <!-- Right header menu, with user menu, notifications, etc -->
 *     </div>
 *
 *  </st-header>
 * ```
 */
export declare class StHeaderComponent implements AfterViewInit {
    private _router;
    private _windowServiceRef;
    private _el;
    private _cd;
    /** @Input {StHeaderMenuOption[]} [menu] Array with menu option to show */
    menu: StHeaderMenuOption[];
    /** @Input {boolean} [navigateByDefault] True if we want menu to manage navigation, false if navigation will be managed from the outside */
    navigateByDefault: boolean;
    /** @Output {StHeaderSelection} [selectMenu] Notify any menu option selection */
    selectMenu: EventEmitter<StHeaderSelection>;
    headerDivElement: ElementRef;
    headerFixPart: ElementRef;
    userMenuContainer: ElementRef;
    showMenuNames: boolean;
    private _headerSize;
    constructor(_router: Router, _windowServiceRef: StWindowRefService, _el: ElementRef, _cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    onResize(): void;
    readonly id: string;
    onSelectMenu(selected: StHeaderSelection): void;
    readonly menuContainerId: string;
    readonly userMenuElementWidth: number;
    private checkMenuLabelVisibility;
}
