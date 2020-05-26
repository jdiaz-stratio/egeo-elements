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
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';

export abstract class EventWindowManager {
   public isActive: boolean;
   private globalListener: Function;
   private forceClose: Function;

   constructor(private _renderer: Renderer2, private _cd: ChangeDetectorRef, private _elementRef: ElementRef) { }

   abstract ngOnDestroy(): void;

   protected openElement(): void {
      if (this.isActive) {
         this.closeElement();
      } else {
         this.isActive = !this.isActive;
         setTimeout(() => {
            this.globalListener = this._renderer.listen('document', 'click', this.onClickOutside.bind(this));
            this.forceClose = this._renderer.listen('document', 'stForceClose', this.onForceClose.bind(this));
         });
      }
   }

   protected closeElement(): void {
      if (this.isActive) {
         this.isActive = !this.isActive;
         this._cd.markForCheck();
         if (this.globalListener !== undefined && typeof (this.globalListener) === 'function') {
            this.globalListener();
            this.forceClose();
         }
      }
   }

   private onClickOutside(event: MouseEvent): void {
      if (!this._elementRef.nativeElement.contains(event.target)) {
         this.closeElement();
      }
   }

   private onForceClose(event: MouseEvent): void {
      this.closeElement();
   }
}
