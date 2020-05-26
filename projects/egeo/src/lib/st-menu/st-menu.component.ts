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
   Component, OnInit, Output, EventEmitter, Input, ElementRef,
   ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

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
@Component({
   selector: 'st-menu',
   templateUrl: './st-menu.component.html',
   styleUrls: ['./st-menu.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StMenuComponent<T> implements OnDestroy, OnInit {

   /** @input {string} [qaTag=''] For set id for tests */
   @Input() qaTag: string;
   /** @input {StMenuModel<T>[]} list of menu items to show */
   @Input() menuOptions: StMenuModel<T>[];
   /** @input {any} current selected option */
   @Input() activeOption: any;
   /** @input {StMenuPosition} current menu position: left | right */
   @Input() position: StMenuPosition = StMenuPosition.right;
   /** @input {boolean} show search input */
   @Input() search: boolean;
   /** @input {string} search input custom label */
   @Input() searchLabel: string = 'Search';
   /** @input {boolean} Show menu in full height mode */
   @Input() dynamicHeight: boolean;
   /** @input {number} adjust menu options position */
   @Input() marginTop: number;
   /** @input {boolean} shows menu dropdown animation */
   @Input() animate: boolean = true;
   /** @input {boolean} disable menu toggle */
   @Input() disabled: boolean = false;

   /** @output {StMenuModel<T>} [selectedOption=''] Notify the selected menu option */
   @Output() selectedOption: EventEmitter<StMenuModel<T>> = new EventEmitter<StMenuModel<T>>();
   /** @output {string} [searchChange=''] Notify when the search input value changes */
   @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

   public showMenu: boolean = false;
   public searchFormControl: FormControl;

   private _formControlSubscription: Subscription;

   constructor(private _cd: ChangeDetectorRef) { }

   ngOnInit(): void {
      if (this.search) {
         this.searchFormControl = new FormControl('');
         this._formControlSubscription = this.searchFormControl.valueChanges.subscribe(value => {
            this.searchChange.emit(value);
         });
      }
   }

   ngOnDestroy(): void {
      if (this._formControlSubscription) {
         this._formControlSubscription.unsubscribe();
      }
   }

   /**
    * Toggle menu activation
    * @param event
    */
   public activateMenu(event: Event): void {
      if (this.showMenu) {
         this.hideMenu();
      } else {
         setTimeout(() => {
            this.showMenu = true;
            this._cd.markForCheck();
         });
      }
   }

   /**
    * Emits the selected menu option from childs
    * @param event: StMenuModel<T>
    */
   public selectedMenuOption(event: StMenuModel<T>): void {
      this.selectedOption.emit(event);
      this.hideMenu();
   }

   /**
    * Hides the menu and reset the search input value if it's enabled
    */
   public hideMenu(): void {
      this.showMenu = false;
      if (this.searchFormControl) {
         this.searchFormControl.setValue('');
      }
      this._cd.markForCheck();
   }
}
