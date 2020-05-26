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
   EventEmitter,
   Input,
   Output
} from '@angular/core';
import { StRadioMenuOption } from './st-radio-menu-option.interface';

/**
 * @description {Component} [Radio Menu]
 *
 * The Radio Menu is composed of options with radios. Usually, it is used in forms and when user
 * interacts with the radio menu, certain part of that form changes according to the selected option.
 * Moreover, you can add to the radio menu a specific theme in order to adapt its colors as you need it.
 *
 * @example
 *
 * {html}
 *
 * ```
 *  <st-radio-menu [activeOption]="selectedOptionTheme1" class="radio-menu" [options]="options"
 *    qaTag="radio-menu-theme-gray-1">
 *  </st-radio-menu>
 * ```
 *
 */
@Component({
   selector: 'st-radio-menu',
   templateUrl: './st-radio-menu.component.html',
   styleUrls: ['./st-radio-menu.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      '[class]': 'theme'
   }
})
export class StRadioMenuComponent {
   /** @Input {StRadioMenuOption} [activeOption=''] Current active option */
   @Input() activeOption: StRadioMenuOption;
   /** @Input {StRadioMenuOption[]} [options=''] Array of string with options, option names must be translated */
   @Input() options: StRadioMenuOption[];
   /** @Input {string} [qaTag=''] Identifier to generate a qa tag for each option */
   @Input() qaTag: string;
   /**
    * @Input {string} [theme=''] String representing the theme (css class) to be applied to the radio menu component.
    * If you are using the Stratio theme, the possible values are theme-gray-1 and theme-gray-2
    */
   @Input() theme: string;
   /** @Input {StRadioMenuOption} [changedOption='']  */
   @Output() changedOption: EventEmitter<StRadioMenuOption> = new EventEmitter<StRadioMenuOption>();

   constructor() {}

   isActive(option: StRadioMenuOption): boolean {
      return (
         this.activeOption !== undefined &&
         this.activeOption.value === option.value
      );
   }

   activateOption(option: StRadioMenuOption): void {
      this.activeOption = option;
      this.changedOption.emit(option);
   }

   checkedOption(option: StRadioMenuOption): boolean {
      return this.activeOption && (this.activeOption.value === option.value);
   }
}
