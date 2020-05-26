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
   ChangeDetectionStrategy,
   Component,
   Input,
   ElementRef,
   Output,
   EventEmitter
} from '@angular/core';

import { StHeaderMenuOption } from '../st-header.model';

@Component({
   selector: 'st-header-menu',
   templateUrl: './menu.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StHeaderMenuComponent {

   @Input() menu: StHeaderMenuOption[];
   @Input() showMenuNames: boolean;

   @Output() selectMenu: EventEmitter<string> = new EventEmitter<string>();

   constructor(public elementRef: ElementRef) { }

   public get qaId(): string {
      return this.elementRef.nativeElement.id + '-list';
   }

   public get itemId(): string {
      return this.elementRef.nativeElement.id + '-item';
   }
}
