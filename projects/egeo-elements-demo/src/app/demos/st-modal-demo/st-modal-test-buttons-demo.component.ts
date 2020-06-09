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
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
   selector: 'st-modal-test',
   styles: [`
         h1 {
            font-weight: bold;
            font-size: 23px;
         }
         p {
            color: #2d96bd;
            font-weight: normal;
         }
   `],
   template: `
   <h1>Hello World</h1>
   <br>
   <button class="button button-primary" (click)="onClick($event)">Close modal</button>
   <br>
   <br>
   <p>This is a modal with a component inside</p>
   `
})
export class StModalDemoTestButtonsComponent {

   @Output() close: EventEmitter<Event> = new EventEmitter<Event>();

   onClick(event: Event): void {
      this.close.emit(event);
   }
}
