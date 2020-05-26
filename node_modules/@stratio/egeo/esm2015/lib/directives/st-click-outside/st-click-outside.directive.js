/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/st-click-outside/st-click-outside.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software – including all its source code – contains proprietary
 * information of Stratio Big Data Inc., Sucursal en España and
 * may not be revealed, sold, transferred, modified, distributed or
 * otherwise made available, licensed or sublicensed to third parties;
 * nor reverse engineered, disassembled or decompiled, without express
 * written authorization from Stratio Big Data Inc., Sucursal en España.
 */
import { Directive, EventEmitter, ElementRef, HostListener, Output } from '@angular/core';
export class StClickOutside {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        /** @type {?} */
        const targetElement = (/** @type {?} */ (event.target));
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.clickOutside.emit(event);
        }
    }
}
StClickOutside.decorators = [
    { type: Directive, args: [{ selector: '[clickOutside]' },] }
];
/** @nocollapse */
StClickOutside.ctorParameters = () => [
    { type: ElementRef }
];
StClickOutside.propDecorators = {
    clickOutside: [{ type: Output }],
    onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    StClickOutside.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    StClickOutside.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvc3QtY2xpY2stb3V0c2lkZS9zdC1jbGljay1vdXRzaWRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRixNQUFNLE9BQU8sY0FBYzs7OztJQUd6QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmhDLGlCQUFZLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFFckMsQ0FBQzs7Ozs7SUFHdkMsZUFBZSxDQUFDLEtBQWlCOztjQUNoQyxhQUFhLEdBQUcsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBZTtRQUMvQyxJQUFJLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUMxRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7OztZQVpGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7OztZQUZQLFVBQVU7OzsyQkFJekMsTUFBTTs4QkFJTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFKMUMsc0NBQWtGOzs7OztJQUV0RSxvQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSDigJMgaW5jbHVkaW5nIGFsbCBpdHMgc291cmNlIGNvZGUg4oCTIGNvbnRhaW5zIHByb3ByaWV0YXJ5XG4gKiBpbmZvcm1hdGlvbiBvZiBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEgYW5kXG4gKiBtYXkgbm90IGJlIHJldmVhbGVkLCBzb2xkLCB0cmFuc2ZlcnJlZCwgbW9kaWZpZWQsIGRpc3RyaWJ1dGVkIG9yXG4gKiBvdGhlcndpc2UgbWFkZSBhdmFpbGFibGUsIGxpY2Vuc2VkIG9yIHN1YmxpY2Vuc2VkIHRvIHRoaXJkIHBhcnRpZXM7XG4gKiBub3IgcmV2ZXJzZSBlbmdpbmVlcmVkLCBkaXNhc3NlbWJsZWQgb3IgZGVjb21waWxlZCwgd2l0aG91dCBleHByZXNzXG4gKiB3cml0dGVuIGF1dGhvcml6YXRpb24gZnJvbSBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKi9cbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXScgfSlcbmV4cG9ydCBjbGFzcyBTdENsaWNrT3V0c2lkZSB7XG4gIEBPdXRwdXQoKSBjbGlja091dHNpZGU6IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50ICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSkge1xuICAgICAgICAgdGhpcy5jbGlja091dHNpZGUuZW1pdChldmVudCk7XG4gICAgICB9XG4gIH1cbn1cbiJdfQ==