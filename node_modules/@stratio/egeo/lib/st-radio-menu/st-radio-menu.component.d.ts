import { EventEmitter } from '@angular/core';
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
export declare class StRadioMenuComponent {
    /** @Input {StRadioMenuOption} [activeOption=''] Current active option */
    activeOption: StRadioMenuOption;
    /** @Input {StRadioMenuOption[]} [options=''] Array of string with options, option names must be translated */
    options: StRadioMenuOption[];
    /** @Input {string} [qaTag=''] Identifier to generate a qa tag for each option */
    qaTag: string;
    /**
     * @Input {string} [theme=''] String representing the theme (css class) to be applied to the radio menu component.
     * If you are using the Stratio theme, the possible values are theme-gray-1 and theme-gray-2
     */
    theme: string;
    /** @Input {StRadioMenuOption} [changedOption='']  */
    changedOption: EventEmitter<StRadioMenuOption>;
    constructor();
    isActive(option: StRadioMenuOption): boolean;
    activateOption(option: StRadioMenuOption): void;
    checkedOption(option: StRadioMenuOption): boolean;
}
