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
   Component,
   EventEmitter,
   Input,
   Output,
   HostListener,
   HostBinding,
   ChangeDetectionStrategy, ElementRef, ViewChild
} from '@angular/core';

/**
 * @description {Component} [Draggable card]
 *
 * The draggable card component is a custom draggable item.
 *
 * @example
 *
 * {html}
 *
 * ```
 *
 *  <st-draggable-card class='card' id='1' (onDragStart)='drag($event)'>
 *      <p>Draggable card 1</p>
 *  </st-draggable-card>
 *
 *
 * ```
 *
 */
@Component({
   selector: 'st-draggable-card',
   styleUrls: ['st-draggable-card.component.scss'],
   templateUrl: 'st-draggable-card.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StDraggableCardComponent {
   /** @Input {string} [id] Card id */
   @Input('id') id: string;
   /** @Output {any} [dragStart] Event emitted when user start dragging card */
   @Output() onDragStart: EventEmitter<any> = new EventEmitter<any>();
   /** @Output {any} [dragEnd] Event emitted when user drops dragging card */
   @Output() onDragEnd: EventEmitter<any> = new EventEmitter<any>();

   /** @Input {boolean} [draggable=true] Boolean to enable or disable dragging */
   @HostBinding('draggable')
   @Input() draggable: boolean = true;

   @ViewChild('card', {static: false}) card: any;
   private _dragging: boolean = false;

   get dragging(): boolean {
      return this._dragging;
   }

   @HostListener('dragstart', ['$event'])
   public dragStartHandle(event: any): void {
      this._dragging = true;
      setTimeout(() => this.card.nativeElement.classList.add('shadow'));
      event.dataTransfer.effectAllowed = 'all';
      event.dataTransfer.dropEffect = 'move';
      this.onDragStart.emit(event);
      event.stopPropagation();
   }

   @HostListener('dragend', ['$event'])
   public dragEndHandle(event: any): void {
      this.card.nativeElement.classList.remove('shadow');
      this._dragging = false;
      event.stopPropagation();
      this.onDragEnd.emit(event);
   }
}
