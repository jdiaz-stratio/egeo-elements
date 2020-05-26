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

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'st-modal2',
  templateUrl: './st-modal2.component.html',
  styleUrls: ['./st-modal2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StModal2Component {

  @Input() emptyModal: boolean;
  @Input() width: number = 600;
  @Input() modalTitle: string = '';
  @Input() closeOnEscape: boolean;
  @Input() hideCloseBtn: boolean;

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() onEnter: EventEmitter<void> = new EventEmitter<void>();

  private ESCAPE_KEYCODE: number = 27;
  private ENTER_KEYCODE: number = 13;

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
    if (this.closeOnEscape && event.keyCode === this.ESCAPE_KEYCODE) {
      this.onClose.emit();
    }

    if (event.keyCode === this.ENTER_KEYCODE) {
      this.onEnter.emit();
    }
  }
}
