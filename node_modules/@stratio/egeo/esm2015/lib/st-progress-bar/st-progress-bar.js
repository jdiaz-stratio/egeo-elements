/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-progress-bar/st-progress-bar.ts
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
import { Component, Input, HostBinding } from '@angular/core';
/**
 * @description {Component} Launcher
 *
 * This components show a animated bar to be used while loading data
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-progress-bar></st-progress-bar>
 *
 * ```
 */
export class StProgressBarComponent {
}
StProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-progress-bar',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"progress-bar progress-bar-primary\"></div>\n<div class=\" progress-bar progress-bar-secondary\"></div>\n",
                styles: ["@charset \"UTF-8\";:host{display:block;height:2px;overflow:hidden;width:100%;background-color:#bce7fe;position:relative}:host.wider{height:5px}:host .progress-bar,:host .progress-bar::after{height:100%;position:absolute;width:100%}:host .progress-bar{-webkit-animation:none;animation:none;transform-origin:top left;transition:transform 250ms}:host .progress-bar::after{-webkit-animation:none;animation:none;content:'';display:inline-block;left:0;background:linear-gradient(90deg,transparent 5%,var(--egeo-theme-brand,#37b5e4) 40%,var(--egeo-theme-brand,#37b5e4) 93%,transparent 97%)}:host .progress-bar-primary{-webkit-animation:2s linear infinite progress-bar-primary-indeterminate-translate;animation:2s linear infinite progress-bar-primary-indeterminate-translate;left:-145.166611%}:host .progress-bar-primary.progress-bar::after{-webkit-animation:2s linear infinite progress-bar-primary-indeterminate-scale;animation:2s linear infinite progress-bar-primary-indeterminate-scale}:host .progress-bar-secondary{-webkit-animation:2s linear infinite progress-bar-secondary-indeterminate-translate;animation:2s linear infinite progress-bar-secondary-indeterminate-translate;left:-54.888891%;display:block}:host .progress-bar-secondary.progress-bar::after{-webkit-animation:2s linear infinite progress-bar-secondary-indeterminate-scale;animation:2s linear infinite progress-bar-secondary-indeterminate-scale}@-webkit-keyframes progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.8,0,.70173,.49582);animation-timing-function:cubic-bezier(.8,0,.70173,.49582);transform:translateX(0)}59.20%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.8,0,.70173,.49582);animation-timing-function:cubic-bezier(.8,0,.70173,.49582);transform:translateX(0)}59.20%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@-webkit-keyframes progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}37.60%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.50%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}37.60%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.50%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@-webkit-keyframes progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@-webkit-keyframes progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}"]
            }] }
];
StProgressBarComponent.propDecorators = {
    wider: [{ type: HostBinding, args: ['class.wider',] }, { type: Input }]
};
if (false) {
    /**
     * \@Input (Boolean) [wider] Option for a bigger progress-bar
     * @type {?}
     */
    StProgressBarComponent.prototype.wider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcHJvZ3Jlc3MtYmFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1wcm9ncmVzcy1iYXIvc3QtcHJvZ3Jlc3MtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU85RDs7Ozs7Ozs7Ozs7OztHQWFHO0FBRUgsTUFBTSxPQUFPLHNCQUFzQjs7O1lBcEJsQyxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IseWpCQUFtQzs7YUFFckM7OztvQkFtQkcsV0FBVyxTQUFDLGFBQWEsY0FDekIsS0FBSzs7Ozs7OztJQUROLHVDQUN3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LXByb2dyZXNzLWJhcicsXG4gICB0ZW1wbGF0ZVVybDogJ3N0LXByb2dyZXNzLWJhci5odG1sJyxcbiAgIHN0eWxlVXJsczogWydzdC1wcm9ncmVzcy1iYXIuc2NzcyddXG59KVxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gTGF1bmNoZXJcbiAqXG4gKiBUaGlzIGNvbXBvbmVudHMgc2hvdyBhIGFuaW1hdGVkIGJhciB0byBiZSB1c2VkIHdoaWxlIGxvYWRpbmcgZGF0YVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtcHJvZ3Jlc3MtYmFyPjwvc3QtcHJvZ3Jlc3MtYmFyPlxuICpcbiAqIGBgYFxuICovXG5cbmV4cG9ydCBjbGFzcyBTdFByb2dyZXNzQmFyQ29tcG9uZW50IHtcblxuICAgLyoqIEBJbnB1dCAoQm9vbGVhbikgW3dpZGVyXSBPcHRpb24gZm9yIGEgYmlnZ2VyIHByb2dyZXNzLWJhciAqL1xuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy53aWRlcicpXG4gICBASW5wdXQoKSB3aWRlcjogQm9vbGVhbjtcblxufVxuIl19