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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StToggleButton, StParsedToggleButton } from './st-toggle-buttons.interface';

@Component({
   selector: 'st-toggle-buttons',
   templateUrl: './st-toggle-buttons.component.html',
   styleUrls: ['./st-toggle-buttons.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StToggleButtonsComponent {

   @Input() description: string;
   @Input() qaTag: string;
   @Output() select: EventEmitter<StToggleButton> = new EventEmitter<StToggleButton>();

   public parsedTabs: StParsedToggleButton[];

   @Input() set tabs(tabs: StToggleButton[]) {
      this.parsedTabs = tabs
      .map(
         ({ label, ...props }) => ({ ...props, label, trimLabel: label.replace(/[^a-zA-Z0-9]/g, '') })
      );
   }

   onClick(selectedTab: StToggleButton): void {
      for (let tab of this.parsedTabs) {
         tab.active = false;
      }
      selectedTab.active = true;
      this.select.emit(selectedTab);
   }

}
