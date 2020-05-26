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
import { Component, ChangeDetectionStrategy, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { StModalButton, StModalResponse, StModalButtonResponse } from '../st-modal.model';

@Component({
   selector: 'st-modal-buttons',
   templateUrl: './st-modal-buttons.html',
   styleUrls: ['./st-modal-buttons.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StModalButtonsComponent implements OnInit {

   @Input() buttonConfig: StModalButton[] = [];
   @Input() fullscreen: boolean = false;
   @Output() click: EventEmitter<StModalButtonResponse> = new EventEmitter<StModalButtonResponse>();

   public hasButtonsValue: boolean = false;

   ngOnInit(): void {
      this.hasButtonsValue = this.hasButtons();
   }

   hasButtons(): boolean {
      return this.buttonConfig && this.buttonConfig.length > 0;
   }

   getButtonClass(button: StModalButton): string {
      let classes: string = button && button.classes ? button.classes : '';
      classes += !this.fullscreen ? ' large' : '';
      return classes.trim();
   }

   getButtonId(button: StModalButton): string | null {
      return button && button.label ? `st-modal-button-${this.getButtonLabelWithoutSpaces(button.label)}` : null;
   }

   getButtonLabelWithoutSpaces(label: string): string {
      return label.replace(/\s+/g, '_');
   }

   /** INTERACTION WITH MODAL */
   clickButton(button: StModalButton, event: MouseEvent): void {
      if (button.response) {
         button.response(event);
      } else if (button.responseValue !== undefined) {
         this.click.emit({ response: button.responseValue, close: button.closeOnClick });
      }
   }
}
