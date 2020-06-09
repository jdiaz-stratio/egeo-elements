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
   selector: 'st-modal-test-fullscreen-layout',
   styles: [`
      .button-separator {
         margin-right: 30px;
      }
   `],
   template: `
      <st-fullscreen-layout [title]="'Edition'">
         <div class="st-fullscreen-layout-buttons">
            <button class="button button-secondary button-separator" (click)="close.emit($event)">Cancel</button>
            <button class="button button-primary" (click)="close.emit($event)">Save</button>
         </div>
         <div class="st-fullscreen-layout-content">
            <h1>TEST</h1>
         </div>
      </st-fullscreen-layout>
   `
})
export class StModalDemoTestFullscreenLayoutComponent {
   @Output() close: EventEmitter<Event> = new EventEmitter<Event>();
}
