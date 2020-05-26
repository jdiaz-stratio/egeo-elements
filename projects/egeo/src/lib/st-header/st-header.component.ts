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
   Component,
   ElementRef,
   EventEmitter,
   HostListener,
   Input,
   Output,
   ViewChild
} from '@angular/core';
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
 *     <div class="sth-header-logo">
 *        <!-- Logo as svg, image, etc. -->
 *     </div>
 *     <div class="sth-header-user-menu">
 *        <!-- Right header menu, with user menu, notifications, etc -->
 *     </div>
 *
 *  </st-header>
 * ```
 */
@Component({
   selector: 'st-header',
   templateUrl: './st-header.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderComponent implements AfterViewInit {

   /** @Input {StHeaderMenuOption[]} [menu] Array with menu option to show */
   @Input() menu: StHeaderMenuOption[] = [];
   /** @Input {StHeaderMenuOption[]} [menu] Array with menu option to show */
   @Input() navigateByDefault: boolean = true;
   /** @Output {string} [selectMenu] Notify any menu option selection */
   @Output() selectMenu: EventEmitter<string> = new EventEmitter<string>();

   @ViewChild('headerDivElement', {static: false}) headerDivElement: ElementRef;
   @ViewChild('headerFixPart', {static: false}) headerFixPart: ElementRef;
   @ViewChild('userMenuContainerElement', {static: true}) userMenuContainer: ElementRef;

   public showMenuNames: boolean = true;

   private _headerSize: number = 0;

   constructor(
      private _router: Router,
      private _windowServiceRef: StWindowRefService,
      private _el: ElementRef
   ) { }

   public ngAfterViewInit(): void {
      this._headerSize = this.headerFixPart.nativeElement.getBoundingClientRect().width + this.userMenuElementWidth + 20;
      this.checkMenuLabelVisibility();
   }

   @HostListener('window:resize', [])
   onResize(): void {
      this.checkMenuLabelVisibility();
   }

   public get id(): string {
      return this._el.nativeElement.id || 'st-header';
   }

   public onSelectMenu(selected: StHeaderSelection): void {
      if (this.navigateByDefault) {
         if (selected.external) {
            this._windowServiceRef.nativeWindow.open(selected.link, selected.openInNewPage ? '_blank' : '_self');
         } else {
            this._router.navigate([selected.link]);
         }
      }
      this.selectMenu.emit(selected.link);
   }

   public get menuContainerId(): string {
      return `${this.id}-menu`;
   }

   public get userMenuElementWidth(): number {
      const userMenuContainer: HTMLElement = this.userMenuContainer.nativeElement;

      if (userMenuContainer.children && userMenuContainer.children.length > 0) {
         return userMenuContainer.children[0].getBoundingClientRect().width;
      } else {
         return userMenuContainer.getBoundingClientRect().width;
      }
   }

   private checkMenuLabelVisibility(): void {
      const windowSize: number = this._windowServiceRef.nativeWindow.innerWidth;
      const canShowMenuNames = this._headerSize <= windowSize;

      if (this.showMenuNames !== canShowMenuNames) {
         this.showMenuNames = canShowMenuNames;
      }
   }
}
