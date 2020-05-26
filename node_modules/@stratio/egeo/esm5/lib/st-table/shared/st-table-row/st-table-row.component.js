/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-table/shared/st-table-row/st-table-row.component.ts
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
import { ChangeDetectionStrategy, Component, HostListener, Input, ViewChild, HostBinding, ElementRef } from '@angular/core';
/**
 * \@description {Component} [Table Row]
 *
 * This component is designed to be added to the table component
 *
 * \@example
 *
 * {html}
 *
 * ```
 *  <tr st-table-row [selected] ="true" [standUpSelected] = "false">
 *      <!-- CELL LIST WILL BE HERE -->
 *  </tr>
 * ```
 *
 */
var StTableRowComponent = /** @class */ (function () {
    function StTableRowComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * \@Input {boolean} [standUpSelected=true] It indicates if when row is selected, it has to be displayed stood up
         */
        this.standUpSelected = true;
        this.rootClass = true;
        this.showHoverMenu = false;
    }
    Object.defineProperty(StTableRowComponent.prototype, "hasSelectedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selected && this.standUpSelected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StTableRowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.hoverMenu && this.hoverMenu.nativeElement.children.length === 0) {
            this.elementRef.nativeElement.removeChild(this.hoverMenu.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    StTableRowComponent.prototype.onShowHoverMenu = /**
     * @return {?}
     */
    function () {
        this.showHoverMenu = true;
    };
    /**
     * @return {?}
     */
    StTableRowComponent.prototype.onHideHoverMenu = /**
     * @return {?}
     */
    function () {
        this.showHoverMenu = false;
    };
    StTableRowComponent.decorators = [
        { type: Component, args: [{
                    selector: '[st-table-row]',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ng-content\n   select='[st-table-row-content]'>\n</ng-content>\n\n<td class='hover-menu' #hoverMenu [ngClass]=\"{'hover-menu--show': showHoverMenu}\">\n   <ng-content select='[st-table-row-hover]'></ng-content>\n</td>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";:host{position:relative;width:100%}.hover-menu{opacity:0;vertical-align:top;position:relative}.hover-menu--show{opacity:1!important}"]
                }] }
    ];
    /** @nocollapse */
    StTableRowComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StTableRowComponent.propDecorators = {
        selected: [{ type: Input }],
        standUpSelected: [{ type: Input }],
        hoverMenu: [{ type: ViewChild, args: ['hoverMenu', { static: false },] }],
        rootClass: [{ type: HostBinding, args: ['class.st-table-row',] }],
        hasSelectedClass: [{ type: HostBinding, args: ['class.selected',] }],
        onShowHoverMenu: [{ type: HostListener, args: ['mouseover',] }],
        onHideHoverMenu: [{ type: HostListener, args: ['mouseout',] }]
    };
    return StTableRowComponent;
}());
export { StTableRowComponent };
if (false) {
    /**
     * \@Input {boolean} [selected=''] It indicates if row is selected or not
     * @type {?}
     */
    StTableRowComponent.prototype.selected;
    /**
     * \@Input {boolean} [standUpSelected=true] It indicates if when row is selected, it has to be displayed stood up
     * @type {?}
     */
    StTableRowComponent.prototype.standUpSelected;
    /** @type {?} */
    StTableRowComponent.prototype.hoverMenu;
    /** @type {?} */
    StTableRowComponent.prototype.rootClass;
    /** @type {?} */
    StTableRowComponent.prototype.showHoverMenu;
    /**
     * @type {?}
     * @private
     */
    StTableRowComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtdGFibGUtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdGFibGUvc2hhcmVkL3N0LXRhYmxlLXJvdy9zdC10YWJsZS1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsV0FBVyxFQUN2RixVQUFVLEVBQ1osTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ2QjtJQXlCRyw2QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7OztRQWRqQyxvQkFBZSxHQUFZLElBQUksQ0FBQztRQUlOLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFRdEQsa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFJdEMsQ0FBQztJQVZELHNCQUNJLGlEQUFnQjs7OztRQURwQjtZQUVHLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ2hELENBQUM7OztPQUFBOzs7O0lBU0QsNkNBQWU7OztJQUFmO1FBQ0csSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzFFO0lBQ0osQ0FBQzs7OztJQUUwQiw2Q0FBZTs7O0lBQTFDO1FBQ0csSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7OztJQUV5Qiw2Q0FBZTs7O0lBQXpDO1FBQ0csSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Z0JBekNILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiw4cEJBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQXpCRSxVQUFVOzs7MkJBNkJULEtBQUs7a0NBRUwsS0FBSzs0QkFFTCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs0QkFFdEMsV0FBVyxTQUFDLG9CQUFvQjttQ0FFaEMsV0FBVyxTQUFDLGdCQUFnQjtrQ0FrQjVCLFlBQVksU0FBQyxXQUFXO2tDQUl4QixZQUFZLFNBQUMsVUFBVTs7SUFHM0IsMEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQW5DWSxtQkFBbUI7Ozs7OztJQUU3Qix1Q0FBMkI7Ozs7O0lBRTNCLDhDQUF5Qzs7SUFFekMsd0NBQXdEOztJQUV4RCx3Q0FBNkQ7O0lBUTdELDRDQUFzQzs7Ozs7SUFFMUIseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEhvc3RCaW5kaW5nLFxuICAgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW1RhYmxlIFJvd11cbiAqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyBkZXNpZ25lZCB0byBiZSBhZGRlZCB0byB0aGUgdGFibGUgY29tcG9uZW50XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqICA8dHIgc3QtdGFibGUtcm93IFtzZWxlY3RlZF0gPVwidHJ1ZVwiIFtzdGFuZFVwU2VsZWN0ZWRdID0gXCJmYWxzZVwiPlxuICogICAgICA8IS0tIENFTEwgTElTVCBXSUxMIEJFIEhFUkUgLS0+XG4gKiAgPC90cj5cbiAqIGBgYFxuICpcbiAqL1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnW3N0LXRhYmxlLXJvd10nLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LXRhYmxlLXJvdy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC10YWJsZS1yb3cuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuXG5leHBvcnQgY2xhc3MgU3RUYWJsZVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW3NlbGVjdGVkPScnXSBJdCBpbmRpY2F0ZXMgaWYgcm93IGlzIHNlbGVjdGVkIG9yIG5vdCAqL1xuICAgQElucHV0KCkgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAvKiogQElucHV0IHtib29sZWFufSBbc3RhbmRVcFNlbGVjdGVkPXRydWVdIEl0IGluZGljYXRlcyBpZiB3aGVuIHJvdyBpcyBzZWxlY3RlZCwgaXQgaGFzIHRvIGJlIGRpc3BsYXllZCBzdG9vZCB1cCAqL1xuICAgQElucHV0KCkgc3RhbmRVcFNlbGVjdGVkOiBib29sZWFuID0gdHJ1ZTtcblxuICAgQFZpZXdDaGlsZCgnaG92ZXJNZW51Jywge3N0YXRpYzogZmFsc2V9KSBob3Zlck1lbnU6IGFueTtcblxuICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zdC10YWJsZS1yb3cnKSByb290Q2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgIGdldCBoYXNTZWxlY3RlZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zdGFuZFVwU2VsZWN0ZWQ7XG4gICB9XG5cblxuICAgcHVibGljIHNob3dIb3Zlck1lbnU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgIH1cblxuICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaG92ZXJNZW51ICYmIHRoaXMuaG92ZXJNZW51Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmhvdmVyTWVudS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIH1cbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdmVyJykgb25TaG93SG92ZXJNZW51KCk6IHZvaWQge1xuICAgICAgdGhpcy5zaG93SG92ZXJNZW51ID0gdHJ1ZTtcbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnKSBvbkhpZGVIb3Zlck1lbnUoKTogdm9pZCB7XG4gICAgICB0aGlzLnNob3dIb3Zlck1lbnUgPSBmYWxzZTtcbiAgIH1cbn1cblxuIl19