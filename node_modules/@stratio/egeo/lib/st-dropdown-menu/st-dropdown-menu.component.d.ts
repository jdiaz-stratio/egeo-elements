import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';
import { StDropDownMenuGroup, StDropDownMenuItem, StDropDownVisualMode } from './st-dropdown-menu.interface';
/**
 * @description {Component} [Dropdown Menu]
 * This directive show a dropdown menu list in element that you attach
 *
 *
 * @model
 *
 *   [Menu items] {./st-dropdown-menu.interface.ts#StDropDownMenuItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-dropdown-menu [items]="list" [active]="show" (change)="onChange(event)">
 *    <button class="button button-primary" (click)="show = !show">Show menu</button>
 * </st-dropdown-menu>
 * ```
 */
export declare class StDropdownMenuComponent implements AfterViewInit, OnInit, OnChanges, OnDestroy {
    private el;
    private cd;
    private renderer;
    /** @Input {boolean} [active=false] Show or hide list */
    active: boolean;
    /** @Input {StDropDownMenuItem[] | StDropDownMenuGroup[]} [items=\[\]] List of items or groups of them to show in menu */
    items: StDropDownMenuItem[] | StDropDownMenuGroup[];
    /** @Input {StPopPlacement} [placement=StPopPlacement.BOTTOM_START] Possible positions of menu with respect element to attach */
    placement: StPopPlacement;
    /** @Input {string} [emptyListMessage=''] Message to show in case of empty list */
    emptyListMessage: string;
    /** @Input {StDropDownMenuItem | undefined} [selectedItem=undefined] Define selected item without passing as property */
    selectedItem: StDropDownMenuItem;
    /** @Input {StDropDownMenuItem | undefined} [itemsBeforeScroll=undefined] Define selected item without passing as property */
    itemsBeforeScroll: number;
    /** @Input {boolean} [moveSelected=true] If true, move selected item to top in menu when open */
    moveSelected: boolean;
    /** @Input {boolean} [styleSelected=true] If true, apply class selected to selected item */
    styleSelected: boolean;
    /** @Input {boolean} [isLoading=true] If true, show loader at the end of the list */
    isLoading: boolean;
    /** @Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis */
    offset: StPopOffset;
    /** @Input {boolean} [openToLeft=false] For calculating all positions from the right corner */
    openToLeft: boolean;
    /** @Input {StDropdownVisualMode} [visualMode=StDropDownVisualMode.OPTION_LIST] It is needed to specify the styles applied to the list.
     *  By default is displayed as a normal option list
     */
    visualMode: StDropDownVisualMode;
    /** @Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
     */
    keyBoardMove: boolean;
    /** @output {StDropDownMenuItem} [change] Event emitted when user select an item */
    change: EventEmitter<StDropDownMenuItem>;
    /** @output {any} [scrollAtBottom] Event emitted when scroll reach the end of the list */
    scrollAtBottom: EventEmitter<any>;
    /** @output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item */
    itemMouseEnter: EventEmitter<StDropDownMenuItem>;
    /** @output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item */
    itemMouseLeave: EventEmitter<StDropDownMenuItem>;
    buttonElement: ElementRef;
    itemListElement: ElementRef;
    widthMenu: string;
    private _itemHeight;
    private _focusedOptionPos;
    private _focusListenerFn;
    constructor(el: ElementRef, cd: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    readonly componentId: string | null;
    readonly menuId: string | null;
    readonly isItemGroup: boolean;
    readonly menuMaxHeight: string;
    readonly listClasses: any;
    getItemId(value: any | undefined): string | null;
    isDropDownGroup(value: StDropDownMenuItem[] | StDropDownMenuGroup[]): value is StDropDownMenuGroup[];
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChange(value: StDropDownMenuItem): void;
    onHandleScroll(): void;
    onMouseEnter(item: StDropDownMenuItem): void;
    onMouseLeave(item: StDropDownMenuItem): void;
    displayAsMenuList(): boolean;
    updateWidth(): void;
    ngOnDestroy(): void;
    private getItemValueMerged;
    private getSelectedItemPosition;
    private arrowKeyListener;
}
