/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-draggable-card/st-draggable-card.component.ts
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
import { Component, EventEmitter, Input, Output, HostListener, HostBinding, ChangeDetectionStrategy, ViewChild } from '@angular/core';
/**
 * \@description {Component} [Draggable card]
 *
 * The draggable card component is a custom draggable item.
 *
 * \@example
 *
 * {html}
 *
 * ```
 *
 *  <st-draggable-card class='card' id='1' (onDragStart)='drag($event)'>
 *      <p>Draggable card 1</p>
 *  </st-draggable-card>
 *
 *
 * ```
 *
 */
export class StDraggableCardComponent {
    constructor() {
        /**
         * \@Output {any} [dragStart] Event emitted when user start dragging card
         */
        this.onDragStart = new EventEmitter();
        /**
         * \@Output {any} [dragEnd] Event emitted when user drops dragging card
         */
        this.onDragEnd = new EventEmitter();
        /**
         * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging
         */
        this.draggable = true;
        this._dragging = false;
    }
    /**
     * @return {?}
     */
    get dragging() {
        return this._dragging;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStartHandle(event) {
        this._dragging = true;
        setTimeout((/**
         * @return {?}
         */
        () => this.card.nativeElement.classList.add('shadow')));
        event.dataTransfer.effectAllowed = 'all';
        event.dataTransfer.dropEffect = 'move';
        this.onDragStart.emit(event);
        event.stopPropagation();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEndHandle(event) {
        this.card.nativeElement.classList.remove('shadow');
        this._dragging = false;
        event.stopPropagation();
        this.onDragEnd.emit(event);
    }
}
StDraggableCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-draggable-card',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div #card class=\"st-draggable-card\" [id]=\"id\" [ngClass]=\"{dragging: dragging}\">\n   <span class=\"drag-button\">\n        <i class=\"icon-drag\"></i>\n   </span>\n   <div class=\"content\">\n      <ng-content></ng-content>\n   </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-draggable-card{width:100%;height:100%;padding:30px 30px 30px 15px;display:flex}.st-draggable-card .drag-button{display:block;vertical-align:middle;margin-right:15px;-ms-grid-row-align:center;align-self:center}.st-draggable-card .content{display:block}"]
            }] }
];
StDraggableCardComponent.propDecorators = {
    id: [{ type: Input, args: ['id',] }],
    onDragStart: [{ type: Output }],
    onDragEnd: [{ type: Output }],
    draggable: [{ type: HostBinding, args: ['draggable',] }, { type: Input }],
    card: [{ type: ViewChild, args: ['card', { static: false },] }],
    dragStartHandle: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
    dragEndHandle: [{ type: HostListener, args: ['dragend', ['$event'],] }]
};
if (false) {
    /**
     * \@Input {string} [id] Card id
     * @type {?}
     */
    StDraggableCardComponent.prototype.id;
    /**
     * \@Output {any} [dragStart] Event emitted when user start dragging card
     * @type {?}
     */
    StDraggableCardComponent.prototype.onDragStart;
    /**
     * \@Output {any} [dragEnd] Event emitted when user drops dragging card
     * @type {?}
     */
    StDraggableCardComponent.prototype.onDragEnd;
    /**
     * \@Input {boolean} [draggable=true] Boolean to enable or disable dragging
     * @type {?}
     */
    StDraggableCardComponent.prototype.draggable;
    /** @type {?} */
    StDraggableCardComponent.prototype.card;
    /**
     * @type {?}
     * @private
     */
    StDraggableCardComponent.prototype._dragging;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJhZ2dhYmxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1kcmFnZ2FibGUtY2FyZC9zdC1kcmFnZ2FibGUtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNYLHVCQUF1QixFQUFjLFNBQVMsRUFDaEQsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJ2QixNQUFNLE9BQU8sd0JBQXdCO0lBUHJDOzs7O1FBV2EsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQUV6RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7UUFJeEQsY0FBUyxHQUFZLElBQUksQ0FBQztRQUczQixjQUFTLEdBQVksS0FBSyxDQUFDO0lBdUJ0QyxDQUFDOzs7O0lBckJFLElBQUksUUFBUTtRQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUdNLGVBQWUsQ0FBQyxLQUFVO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztRQUNsRSxLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDekMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUdNLGFBQWEsQ0FBQyxLQUFVO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQTFDSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLG1CQUFtQjtnQkFFN0IsOHJCQUErQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2pEOzs7aUJBSUcsS0FBSyxTQUFDLElBQUk7MEJBRVYsTUFBTTt3QkFFTixNQUFNO3dCQUdOLFdBQVcsU0FBQyxXQUFXLGNBQ3ZCLEtBQUs7bUJBRUwsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7OEJBT2pDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBVXBDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7Ozs7SUEzQm5DLHNDQUF3Qjs7Ozs7SUFFeEIsK0NBQW1FOzs7OztJQUVuRSw2Q0FBaUU7Ozs7O0lBR2pFLDZDQUNtQzs7SUFFbkMsd0NBQThDOzs7OztJQUM5Qyw2Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDb21wb25lbnQsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBJbnB1dCxcbiAgIE91dHB1dCxcbiAgIEhvc3RMaXN0ZW5lcixcbiAgIEhvc3RCaW5kaW5nLFxuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0RyYWdnYWJsZSBjYXJkXVxuICpcbiAqIFRoZSBkcmFnZ2FibGUgY2FyZCBjb21wb25lbnQgaXMgYSBjdXN0b20gZHJhZ2dhYmxlIGl0ZW0uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqXG4gKiAgPHN0LWRyYWdnYWJsZS1jYXJkIGNsYXNzPSdjYXJkJyBpZD0nMScgKG9uRHJhZ1N0YXJ0KT0nZHJhZygkZXZlbnQpJz5cbiAqICAgICAgPHA+RHJhZ2dhYmxlIGNhcmQgMTwvcD5cbiAqICA8L3N0LWRyYWdnYWJsZS1jYXJkPlxuICpcbiAqXG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1kcmFnZ2FibGUtY2FyZCcsXG4gICBzdHlsZVVybHM6IFsnc3QtZHJhZ2dhYmxlLWNhcmQuY29tcG9uZW50LnNjc3MnXSxcbiAgIHRlbXBsYXRlVXJsOiAnc3QtZHJhZ2dhYmxlLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdERyYWdnYWJsZUNhcmRDb21wb25lbnQge1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbaWRdIENhcmQgaWQgKi9cbiAgIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICAgLyoqIEBPdXRwdXQge2FueX0gW2RyYWdTdGFydF0gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgc3RhcnQgZHJhZ2dpbmcgY2FyZCAqL1xuICAgQE91dHB1dCgpIG9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgLyoqIEBPdXRwdXQge2FueX0gW2RyYWdFbmRdIEV2ZW50IGVtaXR0ZWQgd2hlbiB1c2VyIGRyb3BzIGRyYWdnaW5nIGNhcmQgKi9cbiAgIEBPdXRwdXQoKSBvbkRyYWdFbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtkcmFnZ2FibGU9dHJ1ZV0gQm9vbGVhbiB0byBlbmFibGUgb3IgZGlzYWJsZSBkcmFnZ2luZyAqL1xuICAgQEhvc3RCaW5kaW5nKCdkcmFnZ2FibGUnKVxuICAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgQFZpZXdDaGlsZCgnY2FyZCcsIHtzdGF0aWM6IGZhbHNlfSkgY2FyZDogYW55O1xuICAgcHJpdmF0ZSBfZHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgZ2V0IGRyYWdnaW5nKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuX2RyYWdnaW5nO1xuICAgfVxuXG4gICBASG9zdExpc3RlbmVyKCdkcmFnc3RhcnQnLCBbJyRldmVudCddKVxuICAgcHVibGljIGRyYWdTdGFydEhhbmRsZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLl9kcmFnZ2luZyA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FyZC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoYWRvdycpKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ2FsbCc7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICAgIHRoaXMub25EcmFnU3RhcnQuZW1pdChldmVudCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pXG4gICBwdWJsaWMgZHJhZ0VuZEhhbmRsZShldmVudDogYW55KTogdm9pZCB7XG4gICAgICB0aGlzLmNhcmQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaGFkb3cnKTtcbiAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMub25EcmFnRW5kLmVtaXQoZXZlbnQpO1xuICAgfVxufVxuIl19