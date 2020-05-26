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
import { Observable ,  Observer ,  Subject } from 'rxjs';

// tslint:disable:max-classes-per-file
export enum STALERT_SEVERITY { SUCCESS, WARNING, ERROR }

export class StAlertLink {
   public title: string;
   public link: string;
}

export class StAlert {
   private _changeVisibilityInterval: number;
   private _lifeTimeout: number;
   private _readed: boolean = false;
   private _opacity: number = 0;
   private _opacityState: Subject<number> = new Subject<number>();
   private _removeEvent: Subject<StAlert> = new Subject<StAlert>();

   constructor(
      public id: number,
      public title: string,
      public message: string,
      public severity: STALERT_SEVERITY,
      public timeout: number,
      public extendedTimeout: number,
      public link: StAlertLink
   ) { }

   get opacity(): Observable<number> {
      return this._opacityState.asObservable();
   }

   get removeAlertEvent(): Observable<StAlert> {
      return this._removeEvent.asObservable();
   }

   notify(): void {
      this.setVisible(true);
   }

   pauseNotify(): void {
      this._opacity = 1;
      this._readed = true;
      this.clearAnimation();
      this.stopLife();
      this._opacityState.next(this._opacity);
   }

   continueNotify(): void {
      this.startLife();
   }

   cancel(): void {
      this.setVisible(false);
   }


   private setVisible(increase: boolean): void {
      this.clearAnimation();
      this._changeVisibilityInterval = window.setInterval(() => this.modifyVisibility(increase), 50);
   }

   private modifyVisibility(increase: boolean): void {
      this._opacity += increase ? 0.1 : -0.1;
      if (this._opacity >= 1 || this._opacity <= 0) {
         this.clearAnimation();
         if (increase) {
            this.startLife();
         } else {
            this.notifyForRemove();
         }
      }
      this._opacityState.next(this._opacity);
   }

   private notifyForRemove(): void {
      this._opacityState.complete();
      this._removeEvent.next(this);
      this._removeEvent.complete();
   }

   private clearAnimation(): void {
      window.clearInterval(this._changeVisibilityInterval);
   }

   private stopLife(): void {
      window.clearTimeout(this._lifeTimeout);
   }

   private startLife(): void {
      let timeout: number = this._readed ? this.extendedTimeout : this.timeout;
      this._lifeTimeout = window.setTimeout(() => this.setVisible(false), timeout);
   }
}
