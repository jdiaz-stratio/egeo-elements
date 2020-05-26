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
var StClickOutside = /** @class */ (function () {
    function StClickOutside(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    StClickOutside.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var targetElement = (/** @type {?} */ (event.target));
        if (targetElement && !this.elementRef.nativeElement.contains(targetElement)) {
            this.clickOutside.emit(event);
        }
    };
    StClickOutside.decorators = [
        { type: Directive, args: [{ selector: '[clickOutside]' },] }
    ];
    /** @nocollapse */
    StClickOutside.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    StClickOutside.propDecorators = {
        clickOutside: [{ type: Output }],
        onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return StClickOutside;
}());
export { StClickOutside };
if (false) {
    /** @type {?} */
    StClickOutside.prototype.clickOutside;
    /**
     * @type {?}
     * @private
     */
    StClickOutside.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvc3QtY2xpY2stb3V0c2lkZS9zdC1jbGljay1vdXRzaWRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRjtJQUlFLHdCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRmhDLGlCQUFZLEdBQTZCLElBQUksWUFBWSxFQUFjLENBQUM7SUFFckMsQ0FBQzs7Ozs7SUFHdkMsd0NBQWU7Ozs7SUFEdEIsVUFDdUIsS0FBaUI7O1lBQ2hDLGFBQWEsR0FBRyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlO1FBQy9DLElBQUksYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQzs7Z0JBWkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFOzs7O2dCQUZQLFVBQVU7OzsrQkFJekMsTUFBTTtrQ0FJTixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBTzVDLHFCQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksY0FBYzs7O0lBQ3pCLHNDQUFrRjs7Ozs7SUFFdEUsb0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc29mdHdhcmUg4oCTIGluY2x1ZGluZyBhbGwgaXRzIHNvdXJjZSBjb2RlIOKAkyBjb250YWlucyBwcm9wcmlldGFyeVxuICogaW5mb3JtYXRpb24gb2YgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhIGFuZFxuICogbWF5IG5vdCBiZSByZXZlYWxlZCwgc29sZCwgdHJhbnNmZXJyZWQsIG1vZGlmaWVkLCBkaXN0cmlidXRlZCBvclxuICogb3RoZXJ3aXNlIG1hZGUgYXZhaWxhYmxlLCBsaWNlbnNlZCBvciBzdWJsaWNlbnNlZCB0byB0aGlyZCBwYXJ0aWVzO1xuICogbm9yIHJldmVyc2UgZW5naW5lZXJlZCwgZGlzYXNzZW1ibGVkIG9yIGRlY29tcGlsZWQsIHdpdGhvdXQgZXhwcmVzc1xuICogd3JpdHRlbiBhdXRob3JpemF0aW9uIGZyb20gU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICovXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2NsaWNrT3V0c2lkZV0nIH0pXG5leHBvcnQgY2xhc3MgU3RDbGlja091dHNpZGUge1xuICBAT3V0cHV0KCkgY2xpY2tPdXRzaWRlOiBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0RWxlbWVudCAmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCkpIHtcbiAgICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlLmVtaXQoZXZlbnQpO1xuICAgICAgfVxuICB9XG59XG4iXX0=