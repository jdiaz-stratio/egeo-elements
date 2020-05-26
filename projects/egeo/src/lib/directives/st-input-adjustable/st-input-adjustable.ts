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
   Directive,
   ElementRef,
   Input
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
   selector: '[st-input-adjustable]'
})
export class StInputAdjustable implements AfterViewInit {
   @Input() placeholder: string;

   private text: string;
   private hiddenTitle: HTMLSpanElement;

   constructor(private el: ElementRef,
               private ngModel: NgModel) {
   }

   ngAfterViewInit(): void {
      this.createHiddenTitle();
      this.ngModel.valueChanges.subscribe(value => {
         this.text = value || this.placeholder;
         this.hiddenTitle.innerText = this.text;
         setTimeout(() => {
            this.el.nativeElement.parentNode.style.width = this.hiddenTitle.clientWidth + 10 + 'px';
         });
      });
   }

   private createHiddenTitle(): void {
      if (!this.ngModel.value) {
         this.el.nativeElement.value = null;
         this.el.nativeElement.placeholder = this.placeholder;
      }
      this.hiddenTitle = this.el.nativeElement.parentNode.querySelector('.hidden-text');
      if (!this.hiddenTitle) {
         this.hiddenTitle = document.createElement('span');
         this.el.nativeElement.parentNode.appendChild(this.hiddenTitle);
      }

      this.hiddenTitle.className = 'hidden-text';
      this.hiddenTitle.style.visibility = 'hidden';
      this.hiddenTitle.style.position = 'absolute';
      this.hiddenTitle.style.textTransform = 'none';
      this.hiddenTitle.style.whiteSpace = 'nowrap';
      this.hiddenTitle.style.width = 'auto';
      this.hiddenTitle.style.height = 'auto';
   }

}
