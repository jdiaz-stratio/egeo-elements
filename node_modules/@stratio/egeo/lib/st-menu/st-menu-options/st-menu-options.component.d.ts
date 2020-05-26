import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StMenuModel, StMenuPosition } from './../st-menu.model';
export declare class StMenuOptionsComponent<T> implements AfterViewInit, OnDestroy {
    private _cd;
    maxHeight: number;
    dynamicHeight: boolean;
    activeOption: any;
    menuOptions: Array<StMenuModel<T>>;
    position: StMenuPosition;
    searchFormControl: FormControl;
    searchLabel: string;
    level: number;
    marginTop: number;
    animate: boolean;
    qaTag: string;
    searchBox: EventEmitter<string>;
    selectedOption: EventEmitter<StMenuModel<T>>;
    childListElement: ElementRef<HTMLElement>;
    openedItem: StMenuModel<T>;
    menuPosition: number;
    maxHeightChild: number;
    scrollTopEnabled: boolean;
    scrollBottomEnabled: boolean;
    initialized: boolean;
    scrollTop: number;
    private _scrollAnimationHandler;
    private _scrollSubject;
    private _scrollSubscription;
    private readonly _SCROLL_SPEED;
    private readonly _SCROLL_SPEED_MILLIS;
    constructor(_cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Set the submenu position when an option is hovered
     *
     * @param event MouseEnter event when an option is hovered
     * @param item Hovered item of the list
     */
    showMenu(event: MouseEvent, item: StMenuModel<T>): void;
    /**
     * Saves current scroll position and check the scroll buttons state
     */
    onScroll(): void;
    /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param index
     * @param item
     */
    trackByFn(index: number, item: StMenuModel<T>): string;
    /**
     * Starts a scroll animation frame
     * @param reverse
     */
    scrollTo(reverse: boolean): void;
    /**
     * Stop current scroll animation frame
     */
    stopScroll(): void;
    /**
     * Clear the search input value
     */
    removeSearch(): void;
    /**
     * Check the selected option and emits if it's valid
     * @param event
     * @param item
     */
    onSelectOption(event: Event, item: StMenuModel<T>): void;
    /**
     * Generates menu item id
     * @param item
     */
    getItemId(item: StMenuModel<T>): string;
    /**
     * Recursive scroll animation frame method
     * @param reverse sense of the scroll animation
     */
    private _scrollAnimation;
    /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     */
    private _checkScrollButtons;
}
