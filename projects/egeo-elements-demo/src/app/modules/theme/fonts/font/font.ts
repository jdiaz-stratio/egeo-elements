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
import { Font, CATEGORY } from '../fonts.model';

@Component({
   selector: 'font-demo',
   templateUrl: './font.html',
   styleUrls: ['./font.scss']
})

export class FontDemoComponent {

   @Input() font: Font;
   @Output() copyFontName: EventEmitter<string> = new EventEmitter<string>();
   @ViewChild('nameEl', {static: false}) textElement: ElementRef;

   onClick(): void {
      const result: boolean = copyToClipboard(this.font.name);
      if (result) {
         this.copyFontName.emit(this.font.name);
      }
   }

   get fontFamily(): string {
      return this.font.category === CATEGORY.FONT_FAMILY ? this.font.value : 'Nunito Sans';
   }

   get fontSize(): string {
      return this.font.category === CATEGORY.FONT_SIZE ? this.font.value : '1rem';
   }

   get hasFontPixels(): boolean {
      return this.font && this.font.pixels !== undefined && this.font.pixels !== null && this.font.pixels.trim().length > 0;
   }
}
