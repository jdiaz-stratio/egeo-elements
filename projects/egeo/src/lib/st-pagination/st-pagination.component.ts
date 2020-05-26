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
   EventEmitter,
   Input,
   OnChanges,
   OnInit,
   Output,
   SimpleChanges,
   ElementRef
} from '@angular/core';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { Paginate, PaginateOptions, PaginateTexts } from './st-pagination.interface';

/**
 * @description {Component} [Table]
 *
 * The pagination component has been designed to allow content to be displayed per pages. This informs user about the
 * number of the current page, the items displayed per page and the total of items. Moreover, when there are a lot of
 * items, it allows user to customize the number of items displayed per page.
 *
 * It is made by two sub-components:
 * - A range selector, that allows the user provides a dropdown to set how many items he wants to be displayed per page.
 * - A page navigation control, in order to let the user where he is and where he can go to.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <div class="pagination">
 *     <st-pagination [total]="items.length" [perPage]="perPage" [currentPage]="page" [id]="'pagination-demo'"
 *     (change)="onChangePage($event)">
 *     </st-pagination>
 *     </div>
 * ```
 *
 */
@Component({
   selector: 'st-pagination',
   templateUrl: './st-pagination.component.html',
   styleUrls: ['./st-pagination.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPaginationComponent implements OnInit, OnChanges {
   /** @Input {number} [perPage=20] The maximum number of items displayed per page */
   @Input() perPage: number = 20;

   /** @Input {number} [total=''] Total of items */
   @Input() total: number;

   /** @Input {PaginateTexts} [label={element: 'Rows', perPage: 'per page', of: 'of'}] Translated texts displayed at the pagination */
   @Input() label: PaginateTexts = {
      element: 'Rows', perPage: 'per page', of: 'of'
   };

   /** @Input {PaginateOptions[]}
    * [perPageOptions=Array( Object( value: 20, showFrom: 0 ),Object( value: 50, showFrom: 50 ), Object( value: 200, showFrom: 200 ))]
    *  List of options displayed at a selector where user can change the number of items displayed per page
    */
   @Input() perPageOptions: PaginateOptions[] = [
      { value: 20, showFrom: 0 }, { value: 50, showFrom: 50 }, { value: 200, showFrom: 200 }
   ];

   /** @Output {Paginate} [change=''] Event emitted when user interacts with some of the elements in the pagination.
    *  This sends the new pagination status (current page and items per page)
    */
   @Output() change: EventEmitter<Paginate> = new EventEmitter<Paginate>();

   /** @Output {PaginateOptions} [changePerPage='']  Event emitted when user interacts with some of the elements in the selector of items displayed per page.
    * This sends the current items per page.
    */
   @Output() changePerPage: EventEmitter<number> = new EventEmitter<number>();

   /** @Input {number} [currentPage=1] Number of the current page */
   @Input()
   get currentPage(): number {
      return this._currentPage;
   }

   set currentPage(currentPage: number) {
      this._currentPage = currentPage;
   }

   public disableNextButton: boolean = false;
   public disablePrevButton: boolean = true;
   public firstItem: number;
   public lastItem: number;
   public items: StDropDownMenuItem[] = [];
   public selectedItem: StDropDownMenuItem;

   private _currentPage: number = 1;

   constructor(private _cd: ChangeDetectorRef,
               private _paginationElement: ElementRef) {
   }

   get hasOptions(): boolean {
      return this.items && this.items.length > 1;
   }

   get paginationId(): string | null {
      const pagination: HTMLElement = this._paginationElement.nativeElement;
      return pagination.getAttribute('id') !== null ? pagination.id : null;
   }

   get selectId(): string {
      return this.paginationId !== null ? `${this.paginationId}-select` : null;
   }

   get buttonPrevId(): string {
      return this.paginationId !== null ? `${this.paginationId}-prev` : null;
   }

   get buttonNextId(): string {
      return this.paginationId !== null ? `${this.paginationId}-next` : null;
   }

   ngOnInit(): void {
      this.updatePages(false);
      this.generateItems();
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes.total && changes.total.previousValue !== changes.total.currentValue && !changes.total.firstChange) {
         this.generateItems();
         this.updatePages(false);
      }
      if (changes.currentPage && changes.currentPage.previousValue !== changes.currentPage.currentValue && !changes.currentPage.firstChange) {
         this._currentPage = changes.currentPage.currentValue;
         this.updatePages(false);
      }
      if (changes.perPage && changes.perPage.previousValue !== changes.perPage.currentValue && !changes.perPage.firstChange) {
         this.onChangePerPage(changes.perPage.currentValue);
      }
   }

   generateItems(): void {
      this.items = [];
      this.perPageOptions.forEach(this.addPageOption.bind(this));

      if (this.items.length) {
         this.selectedItem = this.items.find(item => item.value === this.perPage) || this.items[0];
      }

      this._cd.markForCheck();
   }

   nextPage(): void {
      this.currentPage++;
      this.updatePages();
   }

   prevPage(): void {
      this.currentPage--;
      this.updatePages();
   }

   onChangePerPage(perPage: number): void {
      this.currentPage = 1;
      this.perPage = perPage;
      this.updatePages();
      this.selectedItem = this.items.find(item => item.value === this.perPage);
      this.changePerPage.emit(this.perPage);
   }

   private addPageOption(option: PaginateOptions): void {
      if (this.total && (!option.showFrom || option.showFrom <= this.total)) {
         this.items.push({
            label: `${option.value}`,
            value: option.value
         });
      }
   }

   private updatePages(emit: boolean = true): void {
      this.lastItem = this.perPage * this._currentPage;

      if (this.currentPage === 1) {
         this.firstItem = this._currentPage;
         this.disablePrevButton = true;
      } else {
         this.firstItem = this.perPage * (this._currentPage - 1) + 1;
         this.disablePrevButton = false;
      }

      if (this.lastItem >= this.total) {
         this.lastItem = this.total;
         this.disableNextButton = true;
      } else {
         this.disableNextButton = false;
      }

      if (emit) {
         this.change.emit({
            currentPage: this._currentPage,
            perPage: this.perPage
         });
      }
   }
}
