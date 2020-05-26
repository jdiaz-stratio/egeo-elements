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
   Component,
   Input,
   OnDestroy,
   ElementRef,
   Output,
   EventEmitter,
   HostListener,
   ViewChild,
   ChangeDetectorRef
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { StHeaderMenuOption, StHeaderSelection, StHeaderMenuItem } from '../st-header.model';

@Component({
   selector: 'st-header-menu-option',
   templateUrl: './menu-option.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderMenuOptionComponent implements OnDestroy {

   @Input() option: StHeaderMenuOption;
   @Input() showMenuName: boolean;

   @Output() selectMenu: EventEmitter<StHeaderSelection> = new EventEmitter<StHeaderSelection>();

   @ViewChild('menu', {static: false}) menu: ElementRef;
   public isActive: boolean = false;

   private subscription: Subscription;
   private actualPath: string = '';

   constructor(private elementRef: ElementRef, private router: Router, private cd: ChangeDetectorRef) {
      this.subscription = this.router.events.subscribe((event) => this.onRouterEvent(event));
      this.actualPath = this.router.url;
   }

   public get qaId(): string {
      let id: string = `${this.elementRef.nativeElement.id}-${this.option.label.toLowerCase()}`;
      id.replace(/\s+/ig, '_');
      return id;
   }

   public get hasSubmenu(): boolean {
      return this.option.subMenus && this.option.subMenus.length > 0;
   }

   public get submenuList(): StHeaderMenuItem[] {
      return this.hasSubmenu ? this.option.subMenus.map(_ => ({
         label: _.label,
         value: _.link,
         selected: this.actualPath === _.link,
         selection: {
            link: _.link,
            external: _.external,
            openInNewPage: _.openInNewPage
         } as StHeaderSelection
      })) : [];
   }

   public isRouteActive(): boolean {
      return this.router.url.indexOf(this.option.link) > -1;
   }

   public ngOnDestroy(): void {
      this.isActive = false;
      this.subscription.unsubscribe();
   }

   public onMenuClick(): void {
      if (this.hasSubmenu) {
         this.isActive = !this.isActive;
      } else {
         this.selectMenu.emit({
            link: this.option.link,
            external: this.option.external,
            openInNewPage: this.option.openInNewPage
         });
      }
   }

   public changeOption(selected: StHeaderMenuItem): void {
      this.isActive = false;
      this.selectMenu.emit(selected.selection);
   }

   @HostListener('document:click', ['$event'])
   onClickOutside(event: Event): void {
      const isMyComponent: boolean = this.isActive && this.menu.nativeElement.contains(event.target);
      if (!isMyComponent && this.isActive) {
         this.isActive = false;
      }
   }

   private onRouterEvent(event: any): void {
      if (event instanceof NavigationEnd) {
         this.actualPath = event.urlAfterRedirects;
         this.cd.markForCheck();
      }
   }
}
