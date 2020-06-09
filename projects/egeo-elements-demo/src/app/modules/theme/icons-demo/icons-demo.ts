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
import { Component, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

import { IconsDemoService } from './icons-demo.service';
import { IconDemoModel } from './icons-demo.model';

@Component({
   selector: 'icons-demo',
   templateUrl: './icons-demo.html',
   styleUrls: ['./icons-demo.scss']
})

export class IconsDemoComponent {

   public iconList: Observable<IconDemoModel[]>;
   public searchValue: string = '';
   public searchBy: string = 'name';
   public notification: string = '';
   public hasNotification: boolean = false;
   public opacity: number = 0;

   private animationInterval: number;

   constructor(
      private _service: IconsDemoService,
      private _cd: ChangeDetectorRef
   ) {
      this.iconList = this._service.getIconList();
   }

   onSearchResult(search: {text: string}): void {
      this.searchValue = search.text;
   }

   onCopyIconName(name: string): void {
      this.notification = `Copied in clipboard '${name}'`;
      this.animate(true);
   }

   closeNotification(): void {
      this.stopAnimation(false);
      this.animate(false);
   }

   private animate(show: boolean): void {
      this.stopAnimation(true);
      this.hasNotification = true;
      this.animationInterval = setInterval(() => show ? this.increaseOpacity() : this.decreaseOpacity(), 50);
   }

   private stopAnimation(clear: boolean): void {
      if (this.animationInterval) {
         clearInterval(this.animationInterval);
      }
      if (clear) {
         this.hasNotification = false;
      }
   }

   private increaseOpacity(): void {
      if (this.opacity >= 1) {
         this.stopAnimation(false);
         setTimeout(() => this.animate(false), 2000);
      } else {
         this.opacity += 0.05;
         this._cd.markForCheck();
      }
   }

   private decreaseOpacity(): void {
      if (this.opacity <= 0) {
         this.stopAnimation(true);
      } else {
         this.opacity -= 0.05;
         this._cd.markForCheck();
      }
   }
}
