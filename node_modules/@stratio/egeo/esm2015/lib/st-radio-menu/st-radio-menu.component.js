/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio-menu/st-radio-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * \@description {Component} [Radio Menu]
 *
 * The Radio Menu is composed of options with radios. Usually, it is used in forms and when user
 * interacts with the radio menu, certain part of that form changes according to the selected option.
 * Moreover, you can add to the radio menu a specific theme in order to adapt its colors as you need it.
 *
 * \@example
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
export class StRadioMenuComponent {
    constructor() {
        /**
         * \@Input {StRadioMenuOption} [changedOption='']
         */
        this.changedOption = new EventEmitter();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isActive(option) {
        return (this.activeOption !== undefined &&
            this.activeOption.value === option.value);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    activateOption(option) {
        this.activeOption = option;
        this.changedOption.emit(option);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    checkedOption(option) {
        return this.activeOption && (this.activeOption.value === option.value);
    }
}
StRadioMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-radio-menu',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<section class=\"st-radio-menu sth-radio-menu\">\n   <ul class=\"st-radio-menu__list\">\n      <li *ngFor=\"let option of options; let i = index;\" class=\"st-radio-menu__option\">\n\n         <div class=\"st-radio-menu__option sth-radio-menu-option\" (click)=\"activateOption(option)\" [ngClass]=\"{'active': isActive(option),\n           'no-active': !isActive(option) && activeOption}\" [attr.id]=\"qaTag + '-option-' + i\">\n\n            <st-radio [name]=\"option.label\" [value]=\"option.value\" [checked]=\"checkedOption(option)\">\n               <span class=\"st-radio-menu__option-text\">{{ option.label }}</span>\n            </st-radio>\n         </div>\n      </li>\n   </ul>\n</section>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class]': 'theme'
                },
                styles: ["@charset \"UTF-8\";:host{display:block}.st-radio-menu{height:100%;width:100%;display:block;position:relative}.st-radio-menu__list{height:100%;position:relative;list-style:none;width:100%;padding-right:30px}.st-radio-menu__option{padding:3px 0 0 8px;height:29px;font-size:15px;margin-bottom:6px;cursor:pointer}.st-radio-menu__option-text{padding-left:7px}.st-radio-menu__option.active{width:80%}.st-radio-menu__option.active:after{border-top:60px solid transparent;border-bottom:60px solid transparent}.st-radio-menu__option.active:before{transform:rotate(45deg);content:\" \";float:right;width:20px;height:20px;margin-top:1.7px;margin-right:-10.4px}"]
            }] }
];
/** @nocollapse */
StRadioMenuComponent.ctorParameters = () => [];
StRadioMenuComponent.propDecorators = {
    activeOption: [{ type: Input }],
    options: [{ type: Input }],
    qaTag: [{ type: Input }],
    theme: [{ type: Input }],
    changedOption: [{ type: Output }]
};
if (false) {
    /**
     * \@Input {StRadioMenuOption} [activeOption=''] Current active option
     * @type {?}
     */
    StRadioMenuComponent.prototype.activeOption;
    /**
     * \@Input {StRadioMenuOption[]} [options=''] Array of string with options, option names must be translated
     * @type {?}
     */
    StRadioMenuComponent.prototype.options;
    /**
     * \@Input {string} [qaTag=''] Identifier to generate a qa tag for each option
     * @type {?}
     */
    StRadioMenuComponent.prototype.qaTag;
    /**
     * \@Input {string} [theme=''] String representing the theme (css class) to be applied to the radio menu component.
     * If you are using the Stratio theme, the possible values are theme-gray-1 and theme-gray-2
     * @type {?}
     */
    StRadioMenuComponent.prototype.theme;
    /**
     * \@Input {StRadioMenuOption} [changedOption='']
     * @type {?}
     */
    StRadioMenuComponent.prototype.changedOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXJhZGlvLW1lbnUvc3QtcmFkaW8tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1IsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QnZCLE1BQU0sT0FBTyxvQkFBb0I7SUFlOUI7Ozs7UUFGVSxrQkFBYSxHQUFvQyxJQUFJLFlBQVksRUFBcUIsQ0FBQztJQUVsRixDQUFDOzs7OztJQUVoQixRQUFRLENBQUMsTUFBeUI7UUFDL0IsT0FBTyxDQUNKLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztZQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxDQUMxQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBeUI7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsTUFBeUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQXhDSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGdvQ0FBNkM7Z0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0gsU0FBUyxFQUFFLE9BQU87aUJBQ3BCOzthQUNIOzs7OzsyQkFHRyxLQUFLO3NCQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFLTCxLQUFLOzRCQUVMLE1BQU07Ozs7Ozs7SUFYUCw0Q0FBeUM7Ozs7O0lBRXpDLHVDQUFzQzs7Ozs7SUFFdEMscUNBQXVCOzs7Ozs7SUFLdkIscUNBQXVCOzs7OztJQUV2Qiw2Q0FBaUciLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENvbXBvbmVudCxcbiAgIEV2ZW50RW1pdHRlcixcbiAgIElucHV0LFxuICAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RSYWRpb01lbnVPcHRpb24gfSBmcm9tICcuL3N0LXJhZGlvLW1lbnUtb3B0aW9uLmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtSYWRpbyBNZW51XVxuICpcbiAqIFRoZSBSYWRpbyBNZW51IGlzIGNvbXBvc2VkIG9mIG9wdGlvbnMgd2l0aCByYWRpb3MuIFVzdWFsbHksIGl0IGlzIHVzZWQgaW4gZm9ybXMgYW5kIHdoZW4gdXNlclxuICogaW50ZXJhY3RzIHdpdGggdGhlIHJhZGlvIG1lbnUsIGNlcnRhaW4gcGFydCBvZiB0aGF0IGZvcm0gY2hhbmdlcyBhY2NvcmRpbmcgdG8gdGhlIHNlbGVjdGVkIG9wdGlvbi5cbiAqIE1vcmVvdmVyLCB5b3UgY2FuIGFkZCB0byB0aGUgcmFkaW8gbWVudSBhIHNwZWNpZmljIHRoZW1lIGluIG9yZGVyIHRvIGFkYXB0IGl0cyBjb2xvcnMgYXMgeW91IG5lZWQgaXQuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICA8c3QtcmFkaW8tbWVudSBbYWN0aXZlT3B0aW9uXT1cInNlbGVjdGVkT3B0aW9uVGhlbWUxXCIgY2xhc3M9XCJyYWRpby1tZW51XCIgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gKiAgICBxYVRhZz1cInJhZGlvLW1lbnUtdGhlbWUtZ3JheS0xXCI+XG4gKiAgPC9zdC1yYWRpby1tZW51PlxuICogYGBgXG4gKlxuICovXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtcmFkaW8tbWVudScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtcmFkaW8tbWVudS5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1yYWRpby1tZW51LmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgIGhvc3Q6IHtcbiAgICAgICdbY2xhc3NdJzogJ3RoZW1lJ1xuICAgfVxufSlcbmV4cG9ydCBjbGFzcyBTdFJhZGlvTWVudUNvbXBvbmVudCB7XG4gICAvKiogQElucHV0IHtTdFJhZGlvTWVudU9wdGlvbn0gW2FjdGl2ZU9wdGlvbj0nJ10gQ3VycmVudCBhY3RpdmUgb3B0aW9uICovXG4gICBASW5wdXQoKSBhY3RpdmVPcHRpb246IFN0UmFkaW9NZW51T3B0aW9uO1xuICAgLyoqIEBJbnB1dCB7U3RSYWRpb01lbnVPcHRpb25bXX0gW29wdGlvbnM9JyddIEFycmF5IG9mIHN0cmluZyB3aXRoIG9wdGlvbnMsIG9wdGlvbiBuYW1lcyBtdXN0IGJlIHRyYW5zbGF0ZWQgKi9cbiAgIEBJbnB1dCgpIG9wdGlvbnM6IFN0UmFkaW9NZW51T3B0aW9uW107XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtxYVRhZz0nJ10gSWRlbnRpZmllciB0byBnZW5lcmF0ZSBhIHFhIHRhZyBmb3IgZWFjaCBvcHRpb24gKi9cbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmc7XG4gICAvKipcbiAgICAqIEBJbnB1dCB7c3RyaW5nfSBbdGhlbWU9JyddIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIHRoZW1lIChjc3MgY2xhc3MpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHJhZGlvIG1lbnUgY29tcG9uZW50LlxuICAgICogSWYgeW91IGFyZSB1c2luZyB0aGUgU3RyYXRpbyB0aGVtZSwgdGhlIHBvc3NpYmxlIHZhbHVlcyBhcmUgdGhlbWUtZ3JheS0xIGFuZCB0aGVtZS1ncmF5LTJcbiAgICAqL1xuICAgQElucHV0KCkgdGhlbWU6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge1N0UmFkaW9NZW51T3B0aW9ufSBbY2hhbmdlZE9wdGlvbj0nJ10gICovXG4gICBAT3V0cHV0KCkgY2hhbmdlZE9wdGlvbjogRXZlbnRFbWl0dGVyPFN0UmFkaW9NZW51T3B0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RSYWRpb01lbnVPcHRpb24+KCk7XG5cbiAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgaXNBY3RpdmUob3B0aW9uOiBTdFJhZGlvTWVudU9wdGlvbik6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnZhbHVlID09PSBvcHRpb24udmFsdWVcbiAgICAgICk7XG4gICB9XG5cbiAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbjogU3RSYWRpb01lbnVPcHRpb24pOiB2b2lkIHtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uID0gb3B0aW9uO1xuICAgICAgdGhpcy5jaGFuZ2VkT3B0aW9uLmVtaXQob3B0aW9uKTtcbiAgIH1cblxuICAgY2hlY2tlZE9wdGlvbihvcHRpb246IFN0UmFkaW9NZW51T3B0aW9uKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVPcHRpb24gJiYgKHRoaXMuYWN0aXZlT3B0aW9uLnZhbHVlID09PSBvcHRpb24udmFsdWUpO1xuICAgfVxufVxuIl19