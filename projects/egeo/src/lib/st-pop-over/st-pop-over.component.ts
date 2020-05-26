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
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';

/**
 * @description {Component} Pop Over
 *
 * This components pop over a content with a title
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-pop-over [qaTag]="qaTag" [title]="title" [hidden]="hidden">
 *       <!-- CONTENT TO POP OVER -->
 *    </st-pop-over>
 * ```
 */
@Component({
   selector: 'st-pop-over',
   styleUrls: ['./st-pop-over.component.scss'],
   templateUrl: './st-pop-over.component.html'
})
export class StPopOverComponent {

   /** @input {string} [qaTag=''] For set id for tests */
   @Input() qaTag: string;
   /** @input {string} title Title of the pop over */
   @Input() title: string;
   /** @input {boolean} [hidden=false] Show or hide the pop over */
   @Input() hidden: boolean = false;
   /** @Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis */
   @Input() offset: StPopOffset = { x: 0, y: 17 };
   /** @Input {boolean} [showSettingBtn=false] when true, settings icon is displayed    */
   @Input() showSettingBtn?: boolean = false;
   /** @Input {boolean} [showArrow=true] when true, arrow icon is displayed    */
   @Input() showArrow?: boolean = true;

   /** @Output {Event} [click] Notify event click */
   @Output() clickConfig: EventEmitter<Event> = new EventEmitter<Event>();

   public placement: StPopPlacement = StPopPlacement.BOTTOM;
   private defaultOffset: StPopOffset = { x: 21, y: 8 };

   get popOffset(): StPopOffset {
      return { x: (this.offset.x + this.defaultOffset.x), y: (this.offset.y + this.defaultOffset.y) };
   }
}
