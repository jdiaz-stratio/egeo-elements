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
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { StHeaderMenuOption, StLauncherGroup, StPopOffset } from '@stratio/egeo';

import { HEADER_MENU, LAUNCHER_ITEMS } from './st-header-demo.model';

@Component({
   selector: 'st-header-demo',
   templateUrl: './st-header-demo.component.html',
   styleUrls: ['./st-header-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderDemoComponent {
   public configDoc: any = {
      html: 'demo/st-header-demo/st-header-demo.component.html',
      ts: 'demo/st-header-demo/st-header-demo.component.ts',
      component: 'lib/st-header/st-header.component.ts'
   };
   public height: string;
   public headerMenuSchema: StHeaderMenuOption[] = HEADER_MENU;
   public showLauncherMenu: boolean = false;
   public showUserProfileMenu: boolean = false;
   public activeButton: number;

   @ViewChild('launcher', { static: false }) launcherElement: ElementRef;


   toggleUserProfile(): void {
      this.showUserProfileMenu = !this.showUserProfileMenu;
   }
   @HostListener('document:click', ['$event'])
   onClickOutside(event: Event): void {
      const expandNewValue: boolean = this.showLauncherMenu && this.launcherElement &&
         this.launcherElement.nativeElement.contains(event.target);

      if (expandNewValue !== this.showLauncherMenu) {
         this.showLauncherMenu = expandNewValue;
      }
   }

   public onActiveButton(button: number): void {
      this.activeButton = button;
   }
}
