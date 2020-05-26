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
import { StEgeo, StRequired } from '../../decorators/require-decorators';
import { StItemListElement } from '../st-item-list.model';

@Component({
   selector: 'item-list-scroll',
   templateUrl: './item-list-scroll.component.html',
   styleUrls: ['./item-list-scroll.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListScrollComponent {

   @Input() @StRequired() list: StItemListElement[];
   @Input() qaTag: string = '';
   @Input() align: 'left' | 'right' = 'left';

   @Output() selectItem: EventEmitter<StItemListElement> = new EventEmitter<StItemListElement>();

   scrollItems: StItemListElement[] = [];

   get listQaTag(): string {
      return this.qaTag && this.qaTag + '-scroll-list' || '';
   }
}
