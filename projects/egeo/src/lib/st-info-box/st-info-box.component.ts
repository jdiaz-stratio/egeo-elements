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
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
   selector: 'st-info-box',
   templateUrl: './st-info-box.component.html',
   styleUrls: ['./st-info-box.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StInfoBoxComponent implements OnInit {
   @Input() icon: string;
   @Input() title: string;

   @Input() width: number;
   @Input() height: number;

   public styleValue: Object;

   constructor() { }

   ngOnInit(): void {
      if (this.title === undefined) {
         throw new Error('st-info-box: title is a required field');
      }
      this.styleValue = this.getStyles();
   }

   getStyles(): Object {
      let result: Object = {};
      if (this.width !== undefined) {
         Object.assign(result, {
            'width': `${this.width}px`,
            'min-width': `${this.width}px`,
            'max-width': `${this.width}px`
         });
      }
      if (this.height !== undefined) {
         Object.assign(result, {
            'height': `${this.height}px`,
            'min-height': `${this.height}px`,
            'max-height': `${this.height}px`
         });
      }
      return result;
   }

}
