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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
   templateUrl: './st-draggable-card-demo.component.html',
   styleUrls: ['./st-draggable-card-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StDraggableCardDemoComponent {

   public configDoc: any = {
      html: 'demo/st-draggable-card-demo/st-draggable-card-demo.component.html',
      ts: 'demo/st-draggable-card-demo/st-draggable-card-demo.component.ts',
      component: 'lib/st-draggable-card/st-draggable-card.component.ts'
   };

   constructor(private _el: ElementRef) { }

   allowDrop(event: DragEvent): void {
      event.preventDefault();
   }

   drag(event: any): void {
      event.dataTransfer.setData('dragged-item-id', event.currentTarget.id);
      event.stopPropagation();
   }

   drop(event: any): void {
      let dataTransfer = event.dataTransfer.getData('dragged-item-id');
      const item = this._el.nativeElement.querySelector(`#${dataTransfer}`);
      if (item) {
         event.currentTarget.appendChild(item);
      }
   }
}


