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
   Component,
   Input,
   ViewChild,
   ElementRef,
   EventEmitter,
   Output
} from '@angular/core';

import { copyToClipboard } from '../../utils';
import { Color } from '../colors.model';

@Component({
   selector: 'color-demo',
   templateUrl: './color.html',
   styleUrls: ['./color.scss']
})

export class ColorDemoComponent {

   @Input() color: Color;
   @Output() copyColorName: EventEmitter<string> = new EventEmitter<string>();
   @ViewChild('nameEl', {static: false}) textElement: ElementRef;

   onClick(): void {
      const name: string = `$${this.color.name}`;
      const result: boolean = copyToClipboard(name);
      if (result) {
         this.copyColorName.emit(name);
      }
   }

   get rgb(): string {
      return `rgb(${this.color.rgb.r}, ${this.color.rgb.g}, ${this.color.rgb.b})`;
   }
}
