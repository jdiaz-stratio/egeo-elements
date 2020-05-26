import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { EventWindowManager } from '../utils/event-window-manager';
import { StSearchEvent, StSearchEventOrigin } from './st-search.model';
/**
 * @description {Component} [Search]
 *
 * The search component has been designed to allow user to find a specific content according to his needs.
 *
 * @example
 *
 * {html}
 *
 * ```
 * Search without filters
 *  <st-search [placeholder]="placeholder" [qaTag]="qaTag"
 *  [value]="searched" [debounce]="debounceTime" [minLength]="minLength"
 *  (search)="onSearchResult($event)"></st-search>
 *
 *
 * Search with filters
 *  <st-search [placeholder]="placeholder" [qaTag]="qaTag"
 *  [value]="searched" [debounce]="debounceTime" [minLength]="minLength" [filterOptions]="[
 *  { label: 'All', value: 1 },
 *  { label: 'Type ', value: 2 },
 *  { label: 'Color', value: 3 }
 *  ]" (search)="onSearchResult($event)"></st-search>
 * ```
 *
 */
export declare class StSearchComponent extends EventWindowManager implements OnChanges, OnDestroy, OnInit {
    private _render;
    private cd;
    /** @Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list */
    debounce: number;
    /** @Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing */
    liveSearch: boolean;
    /** @Input {number} [minLength=0] Minimum of characters typed by the user before launching the search */
    minLength: number;
    /** @Input {string} [placeholder='Search'] Text displayed in the search input */
    placeholder: string;
    /** @Input {string} [qaTag=''] Label used as id */
    qaTag: string;
    /** @Input {string} [value=''] Initial value of the search text */
    value: string;
    /** @Input {boolean} [disabled=false] Boolean to enable or disable the search */
    disabled: boolean;
    /** @Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing */
    withAutocomplete: boolean;
    /** @Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing */
    autocompleteList: StDropDownMenuItem[];
    /** @Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon */
    showIcon: boolean;
    /** @Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
     * there are not any item with the typed text
     */
    emptyAutocompleteListMessage: string;
    /** @Input {StDropDownMenuItem[]} [filterOptions=''] Options displayed at the filter select. If it is not introduced,
     * filter will not be displayed
     */
    filterOptions: StDropDownMenuItem[];
    /** @Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
     * the text typed by the user and the filter value selected (only if filter is displayed)
     */
    search: EventEmitter<StSearchEvent>;
    /** @Output {any} [value=''] Event emitted when filter is changed. It contains
     * the filter value selected
     */
    selectFilter: EventEmitter<any>;
    /** @Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
     */
    keyBoardMove: boolean;
    searchBox: FormControl;
    showClear: boolean;
    filter: string;
    _eventElementRef: ElementRef;
    private subscriptionSearch;
    private subscriptionSearchClearButton;
    private lastEmittedText;
    constructor(_render: Renderer2, cd: ChangeDetectorRef);
    readonly menuId: string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onChangeFilter(value: any): void;
    ngOnDestroy(): void;
    launchSearch(force: boolean, origin: StSearchEventOrigin): void;
    onKeyPress(event: KeyboardEvent): void;
    changeOption(item: StDropDownMenuItem): void;
    clearInput(): void;
    showAutoCompleteMenu(): void;
    private emitValue;
    private checkDisabled;
    private canSearch;
    private isDefined;
    private checkMins;
    private isEqualPrevious;
    private checkValueChange;
    private checkDebounceChange;
    private checkDisableChange;
    private checkAutoCompleteMenuChange;
    private manageSubscription;
}
