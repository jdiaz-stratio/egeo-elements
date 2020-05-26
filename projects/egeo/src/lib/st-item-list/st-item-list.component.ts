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

import { StEgeo, StRequired } from '../decorators/require-decorators';
import { StItemListElement, StItemListConfig, StItemListConfigSchema } from './st-item-list.model';

@Component({
   selector: 'st-item-list',
   templateUrl: './st-item-list.component.html',
   styleUrls: ['./st-item-list.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StItemListComponent {

   @Input() @StRequired() list: StItemListElement[];
   @Input() config: StItemListConfig;
   @Input() qaTag: string = '';
   @Input() hasSearch: boolean = false;
   @Input() align: 'left' | 'right' = 'left';
   @Input() theme: string = 'themeA';

   @Output() selectItem: EventEmitter<StItemListElement> = new EventEmitter<StItemListElement>();
   @Output() search: EventEmitter<string> = new EventEmitter<string>();

   get listTitle(): string {
      return this.config && this.config.title || '';
   }

   get searchPlaceholder(): string {
      return this.config && this.config.searchPlaceholder || '';
   }

   get listQaTag(): string {
      return this.qaTag || '';
   }

   get searchQaTag(): string {
      return this.qaTag && this.qaTag + '-search' || '';
   }

}
