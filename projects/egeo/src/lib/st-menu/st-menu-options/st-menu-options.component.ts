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
   AfterViewInit,
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   EventEmitter,
   Input,
   Output,
   ViewChild,
   OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { StMenuModel, StMenuPosition } from './../st-menu.model';

@Component({
   selector: 'st-menu-options',
   templateUrl: './st-menu-options.component.html',
   styleUrls: ['./st-menu-options.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StMenuOptionsComponent<T> implements AfterViewInit, OnDestroy {

   @Input() maxHeight: number;
   @Input() dynamicHeight: boolean;
   @Input() activeOption: any;
   @Input() menuOptions: Array<StMenuModel<T>>;
   @Input() position: StMenuPosition = StMenuPosition.right;
   @Input() searchFormControl: FormControl;
   @Input() searchLabel: string;
   @Input() level: number = 0;
   @Input() marginTop: number;
   @Input() animate: boolean = true;
   @Input() qaTag: string;

   @Output() searchBox: EventEmitter<string> = new EventEmitter<string>();
   @Output() selectedOption: EventEmitter<StMenuModel<T>> = new EventEmitter<StMenuModel<T>>();

   @ViewChild('childList', {static: false}) childListElement: ElementRef<HTMLElement>;

   public openedItem: StMenuModel<T>;
   public menuPosition: number;
   public maxHeightChild: number;
   public scrollTopEnabled: boolean;
   public scrollBottomEnabled: boolean;
   public initialized: boolean = false;
   public scrollTop: number = 0;

   private _scrollAnimationHandler: number;

   private _scrollSubject: Subject<void> = new Subject();
   private _scrollSubscription: Subscription;

   private readonly _SCROLL_SPEED: number = 120;                                // px per second
   private readonly _SCROLL_SPEED_MILLIS: number = this._SCROLL_SPEED / 1000;   // px per millisecond

   constructor(private _cd: ChangeDetectorRef) { }

   ngAfterViewInit(): void {
      if (this.dynamicHeight) {
         this._checkScrollButtons();
      }
      this.initialized = true;
      this._cd.detectChanges();
      this._scrollSubscription = this._scrollSubject
         .pipe(debounceTime(50))
         .subscribe(() => this._checkScrollButtons());
   }

   ngOnDestroy(): void {
      cancelAnimationFrame(this._scrollAnimationHandler);
      if (this._scrollSubscription) {
         this._scrollSubscription.unsubscribe();
      }
   }

   /**
    * Set the submenu position when an option is hovered
    *
    * @param event MouseEnter event when an option is hovered
    * @param item Hovered item of the list
    */
   public showMenu(event: MouseEvent, item: StMenuModel<T>): void {
      if (this.openedItem !== item && (!this.activeOption || this.activeOption.value !== item)) {
         this.openedItem = item;
         if (item.subMenus) {
            const target: HTMLElement = event.target as HTMLElement;
            this.menuPosition = target.offsetTop;
            if (this.dynamicHeight) {
               this.maxHeightChild = window.innerHeight - target.getBoundingClientRect().top - 30;
            }
         }
      }
   }

   /**
    * Saves current scroll position and check the scroll buttons state
    */
   public onScroll(): void {
      this.scrollTop = this.childListElement.nativeElement.scrollTop;
      if (this.dynamicHeight) {
         this._scrollSubject.next();
      }
   }

   /**
    * Generates a ngFor trackBy id from StMenuModel name and icon values
    * @param index
    * @param item
    */
   public trackByFn(index: number, item: StMenuModel<T>): string {
      return item.name + (item.icon || '');
   }

   /**
    * Starts a scroll animation frame
    * @param reverse
    */
   public scrollTo(reverse: boolean): void {
      const startScrollAnimationTime = new Date().getTime(); // initial animation time in milliseconds
      const startScrollAnimationPosition = this.childListElement.nativeElement.scrollTop; // initial animation position
      this.openedItem = null;
      this._scrollAnimationHandler = requestAnimationFrame(() => this._scrollAnimation(reverse, startScrollAnimationTime,  startScrollAnimationPosition));
   }

   /**
    * Stop current scroll animation frame
    */
   public stopScroll(): void {
     cancelAnimationFrame(this._scrollAnimationHandler);
   }

   /**
    * Clear the search input value
    */
   public removeSearch(): void {
      this.searchFormControl.setValue('');
   }

   /**
    * Check the selected option and emits if it's valid
    * @param event
    * @param item
    */
   public onSelectOption(event: Event, item: StMenuModel<T>): void {
      if ((!item.subMenus || !item.subMenus.length) && (!this.activeOption || this.activeOption !== item.value)) {
         this.selectedOption.emit(item);
      } else {
         // Prevents close menu
         event.stopPropagation();
      }
   }

   /**
    * Generates menu item id
    * @param item
    */
   public getItemId(item: StMenuModel<T>): string {
      return (item.icon || '') + item.name.replace(/\W/g, '_') + '-option';
   }

   /**
    * Recursive scroll animation frame method
    * @param reverse sense of the scroll animation
    */
   private _scrollAnimation(reverse: boolean,  startScrollAnimationTime: number, startScrollAnimationPosition: number): void {
      const current: number = new Date().getTime();
      const runtime: number = current - startScrollAnimationTime;
      // initialPosition in px + (reverse: negative or positive sense * millis from animation start * px per millis)
      const position: number = startScrollAnimationPosition + ((reverse ? 1 : -1) * runtime * this._SCROLL_SPEED_MILLIS);
      this.childListElement.nativeElement.scrollTo(0, position);
      this._scrollAnimationHandler = requestAnimationFrame(() => this._scrollAnimation(reverse, startScrollAnimationTime, startScrollAnimationPosition));
   }

   /**
    * Enable or disable the top and bottom scroll buttons depending of the scrollList position
    */
   private _checkScrollButtons(): void {
      const scrollList: HTMLElement = this.childListElement.nativeElement;
      this.scrollTopEnabled = scrollList.scrollTop > 0;
      this.scrollBottomEnabled = scrollList.getBoundingClientRect().height + scrollList.scrollTop < scrollList.scrollHeight - 1;
      this._cd.markForCheck();
   }
}
