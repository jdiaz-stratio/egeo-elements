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
import { Component, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, ChangeDetectorRef, OnDestroy, Renderer2 } from '@angular/core';

@Component({
   selector: '[st-tooltip]',
   styleUrls: ['./st-tooltip.component.scss'],
   templateUrl: './st-tooltip.component.html'
})
export class StTooltipComponent implements OnChanges, OnDestroy, OnInit {

   @HostBinding('class.st-tooltip') classTooltip: boolean;
   @HostBinding('class.st-tooltip-on') classTooltipOn: boolean;

   @Input() showOnClick: boolean;
   private _title: string;
   @Input('attr.title')
   set title(value: string) {
      this._title = value;
      if (value) {
         this._el.nativeElement.setAttribute('title', value);
      } else {
         this._el.nativeElement.removeAttribute('title');
      }
   }
   get title(): string {
      return this._title;
   }

   constructor(private _el: ElementRef,
      private _cd: ChangeDetectorRef) {
      this._onClick = this._onClick.bind(this);
   }

   ngOnInit(): void {
      this.title = this._el.nativeElement.title;
      this._checkTooltipState();
   }

   ngOnDestroy(): void {
      document.removeEventListener('click', this._onClick);
   }

   ngOnChanges(): void {
      if (this._el) {
         this._checkTooltipState();
      }
   }

   @HostListener('click') onClick(): void {
      if (this.showOnClick && this.title) {
         this.classTooltipOn = true;
         document.addEventListener('click', this._onClick);
      }
   }

   private _checkTooltipState(): void {
      this.classTooltip = this.title && this.title.length && !this.showOnClick;
      this.classTooltipOn =  false;
   }

   private _onClick(event: Event): void {
      if (!this._el.nativeElement.contains(event.target)) {
         this.classTooltipOn = false;
         document.removeEventListener('click', this._onClick);
         this._cd.markForCheck();
      }
   }
}
