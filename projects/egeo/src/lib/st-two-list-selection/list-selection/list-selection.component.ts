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

import { StDropDownMenuItem } from '../../st-dropdown-menu/st-dropdown-menu.interface';
import { StRequired } from '../../decorators/require-decorators';
import { StTwoListSelectionElement, StTwoListSelectExtraLabelAction } from '../st-two-list-selection.model';

@Component({
   selector: 'list-selection',
   templateUrl: './list-selection.component.html',
   styleUrls: ['./list-selection.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListSelectionComponent {

   @Input() @StRequired() list: StTwoListSelectionElement[];
   @Input() editable: boolean = false;
   @Input() @StRequired() title: string;
   @Input() subtitle?: string;
   @Input() @StRequired() searchPlaceholder: string;
   @Input() @StRequired() qaTag: string;
   @Input() important: boolean = false;
   @Input() hasAllList?: boolean = false;
   @Input() hasSearch: boolean = true;
   @Input() isLoading?: boolean = false;
   @Input() itemAll?: StTwoListSelectionElement;
   @Input() menuOptionList?: StDropDownMenuItem[];
   @Input() orderOptions: StDropDownMenuItem[] = [];
   @Input() orderPlaceholder?: string;
   @Input() mode: 'compact' | 'normal' = 'normal';
   @Input() showSearchNumber?: number;
   @Input() fetchingDataText: string;

   @Output() scrollBottom: EventEmitter<any> = new EventEmitter<any>();
   @Output() selectItem: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectItemNonEditable: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectExtraLabel: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();
   @Output() search: EventEmitter<string> = new EventEmitter<string>();
   @Output() changeOrder: EventEmitter<any> = new EventEmitter<any>();

   scrollItems: StTwoListSelectionElement[] = [];

   get searchQaTag(): string {
      return this.qaTag + '-search';
   }

   get listCheckAllQaTag(): string {
      return this.qaTag + '-all-checkbox';
   }

   get listQaTag(): string {
      return this.qaTag + '-list';
   }

   get hasOrder(): boolean {
      return this.orderOptions && this.orderOptions.length > 0;
   }
}
