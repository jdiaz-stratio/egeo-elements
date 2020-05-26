/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import {
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   EventEmitter,
   Input,
   OnChanges,
   OnDestroy,
   OnInit,
   Output,
   Renderer2,
   SimpleChanges,
   ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { EventWindowManager } from '../utils/event-window-manager';
import { debounceTime } from 'rxjs/operators';
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
@Component({
   selector: 'st-search',
   templateUrl: './st-search.component.html',
   styleUrls: ['./st-search.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StSearchComponent extends EventWindowManager implements OnChanges, OnDestroy, OnInit {
   /** @Input {number} [debounce=0] Time elapsed in milliseconds before displaying the autocomplete list */
   @Input() debounce: number = 0;

   /** @Input {boolean} [liveSearch=true] Boolean to enable or disable the automatic search while the user is typing */
   @Input() liveSearch: boolean = true;

   /** @Input {number} [minLength=0] Minimum of characters typed by the user before launching the search */
   @Input() minLength: number = 0;

   /** @Input {string} [placeholder='Search'] Text displayed in the search input */
   @Input() placeholder: string = 'Search';

   /** @Input {string} [qaTag=''] Label used as id */
   @Input() qaTag: string;

   /** @Input {string} [value=''] Initial value of the search text */
   @Input() value: string;

   /** @Input {boolean} [disabled=false] Boolean to enable or disable the search */
   @Input() disabled: boolean = false;

   /** @Input {boolean} [withAutocomplete=false] Enable or disable the autocomplete list when user is typing */
   @Input() withAutocomplete: boolean = false;

   /** @Input {StDropDownMenuItem[]} [autocompleteList=''] List of items displayed in the autocomplete list when user is typing */
   @Input() autocompleteList: StDropDownMenuItem[] = [];

   /** @Input {boolean} [showIcon=true] Boolean to hide/show the loupe icon */
   @Input() showIcon: boolean =  true;

   /** @Input {string} [emptyAutocompleteListMessage=''] Message displayed when the autocomplete list is enabled but
    * there are not any item with the typed text
    */
   @Input() emptyAutocompleteListMessage: string = '';

   /** @Input {StDropDownMenuItem[]} [filterOptions=''] Options displayed at the filter select. If it is not introduced,
    * filter will not be displayed
    */
   @Input() filterOptions: StDropDownMenuItem[];

   /** @Output { Object(filter?: string, text: string)} [search=''] Event emitted when search is launched. It contains
    * the text typed by the user and the filter value selected (only if filter is displayed)
    */
   @Output() search: EventEmitter<StSearchEvent> = new EventEmitter<StSearchEvent>();
   /** @Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
    */
   @Input() keyBoardMove: boolean = false;

   public searchBox: FormControl = new FormControl();
   public showClear: boolean;
   public filter: string;

   private subscriptionSearch: Subscription | undefined = undefined;
   private subscriptionSearchClearButton: Subscription | undefined = undefined;
   private lastEmittedText: string | undefined = undefined;

   constructor(private _render: Renderer2,
               private cd: ChangeDetectorRef,
               @ViewChild('buttonId', {static: false}) public buttonElement: ElementRef) {
      super(_render, cd, buttonElement);
   }

   get menuId(): string {
      return this.qaTag ? this.qaTag + '-autocomplete-menu' : null;
   }

   public ngOnInit(): void {
      if (this.value) {
         this.searchBox.setValue(this.value);
      }
      // Show clear button if have text
      this.subscriptionSearchClearButton = this.searchBox.valueChanges.subscribe((val) => this.showClear = (val && val.length > 0));
      this.checkDisabled();
      this.manageSubscription();
      if (this.filterOptions) {
         this.filter = this.filterOptions[0].value;
      }
   }

   public ngOnChanges(changes: SimpleChanges): void {
      this.checkDebounceChange(changes);
      this.checkValueChange(changes);
      this.checkDisableChange(changes);
      this.checkAutoCompleteMenuChange(changes);
   }

   public onChangeFilter(): void {
      this.emitValue(false, StSearchEventOrigin.FILTER);
   }

   public ngOnDestroy(): void {
      if (this.subscriptionSearch !== undefined) {
         this.subscriptionSearch.unsubscribe();
      }
      if (this.subscriptionSearchClearButton !== undefined) {
         this.subscriptionSearchClearButton.unsubscribe();
      }
      this.closeElement();
   }

   public launchSearch(force: boolean, origin: StSearchEventOrigin): void {
      if (this.canSearch()) {
         this.showAutoCompleteMenu();
         this.emitValue(force, origin);
      } else {
         this.closeElement();
      }
   }

   public onKeyPress(event: KeyboardEvent): void {
      let key: number = event.keyCode || event.which;
      if (key === 13) {
         this.launchSearch(true, StSearchEventOrigin.ENTER);
      }
   }

   public changeOption(item: StDropDownMenuItem): void {
      if (item && item.label) {
         this.subscriptionSearch.unsubscribe();
         this.searchBox.setValue(item.value);
         this.cd.markForCheck();
         this.closeElement();
         this.emitValue(true, StSearchEventOrigin.LIST);
         this.manageSubscription();
      }
   }

   public clearInput(): void {
      this.searchBox.setValue('');
      this.closeElement();
      this.emitValue(true, StSearchEventOrigin.INPUT);
   }

   public showAutoCompleteMenu(): void {
      if (this.withAutocomplete && !this.isActive) {
         this.openElement();
      }
      if (this.searchBox.value === '') {
         this.closeElement();
      }
      this.cd.markForCheck();
   }

   private emitValue(force: boolean, origin: StSearchEventOrigin): void {
      if (this.isEqualPrevious(force)) {
         this.lastEmittedText = this.searchBox.value;
         let newSearch: StSearchEvent = {text: this.lastEmittedText || '', origin: origin};
         if (this.filter) {
            newSearch.filter = this.filter;
         }
         this.search.emit(newSearch);
      }
   }



   private checkDisabled(): void {
      if (this.disabled) {
         this.searchBox.disable();
      } else {
         this.searchBox.enable();
      }
   }

   private canSearch(): boolean {
      return this.isDefined() && !this.disabled && this.checkMins();
   }

   private isDefined(): boolean {
      return this.searchBox && this.searchBox.value !== null && this.searchBox.value !== undefined;
   }

   private checkMins(): boolean {
      return this.minLength <= (this.searchBox && this.searchBox.value && this.searchBox.value.length) ||
         this.searchBox.value.trim().length === 0;
   }

   private isEqualPrevious(force: boolean): boolean {
      return this.lastEmittedText !== this.searchBox.value || force;
   }

   private checkValueChange(changes: SimpleChanges): void {
      if (changes && changes.value) {
         if (this.subscriptionSearch) {
            this.subscriptionSearch.unsubscribe();
         }
         this.searchBox.setValue(changes.value.currentValue);
         this.manageSubscription();
      }
   }

   private checkDebounceChange(changes: SimpleChanges): void {
      if (changes && changes.debounce) {
         this.manageSubscription();
      }
   }

   private checkDisableChange(changes: SimpleChanges): void {
      if (changes && changes.disabled) {
         this.checkDisabled();
      }
   }

   private checkAutoCompleteMenuChange(changes: SimpleChanges): void {
      if (changes && changes.autocompleteList) {
         this.cd.markForCheck();
      }
   }

   private manageSubscription(): void {
      if (this.subscriptionSearch !== undefined) {
         this.subscriptionSearch.unsubscribe();
      }
      if (this.liveSearch) {
         this.subscriptionSearch = this.searchBox
            .valueChanges.pipe(
            debounceTime(this.debounce))
            .subscribe((event) => this.launchSearch(false,  StSearchEventOrigin.INPUT));
      }
   }
}
