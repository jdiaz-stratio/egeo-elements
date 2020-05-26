/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/event-window-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class EventWindowManager {
    /**
     * @param {?} _renderer
     * @param {?} _cd
     */
    constructor(_renderer, _cd) {
        this._renderer = _renderer;
        this._cd = _cd;
    }
    /**
     * @protected
     * @return {?}
     */
    openElement() {
        if (this.isActive) {
            this.closeElement();
        }
        else {
            this.isActive = !this.isActive;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.globalListener = this._renderer.listen('document', 'click', this.onClickOutside.bind(this));
                this.forceClose = this._renderer.listen('document', 'stForceClose', this.onForceClose.bind(this));
            }));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    closeElement() {
        if (this.isActive) {
            this.isActive = !this.isActive;
            this._cd.markForCheck();
            if (this.globalListener !== undefined && typeof (this.globalListener) === 'function') {
                this.globalListener();
                this.forceClose();
            }
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onClickOutside(event) {
        if (!this._eventElementRef.nativeElement.contains(event.target)) {
            this.closeElement();
        }
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    onForceClose(event) {
        this.closeElement();
    }
}
if (false) {
    /** @type {?} */
    EventWindowManager.prototype.isActive;
    /** @type {?} */
    EventWindowManager.prototype._eventElementRef;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype.globalListener;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype.forceClose;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    EventWindowManager.prototype._cd;
    /**
     * @abstract
     * @return {?}
     */
    EventWindowManager.prototype.ngOnDestroy = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtd2luZG93LW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2V2ZW50LXdpbmRvdy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBWUEsTUFBTSxPQUFnQixrQkFBa0I7Ozs7O0lBT3JDLFlBQW9CLFNBQW9CLEVBQVUsR0FBc0I7UUFBcEQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO0lBQUksQ0FBQzs7Ozs7SUFJbkUsV0FBVztRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDSixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLENBQUMsRUFBQyxDQUFDO1NBQ0w7SUFDSixDQUFDOzs7OztJQUVTLFlBQVk7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDbkYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDcEI7U0FDSDtJQUNKLENBQUM7Ozs7OztJQUVPLGNBQWMsQ0FBQyxLQUFpQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QjtJQUNKLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxLQUFpQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNIOzs7SUExQ0Usc0NBQXlCOztJQUV6Qiw4Q0FBNkM7Ozs7O0lBQzdDLDRDQUFpQzs7Ozs7SUFDakMsd0NBQTZCOzs7OztJQUVqQix1Q0FBNEI7Ozs7O0lBQUUsaUNBQThCOzs7OztJQUV4RSwyREFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEV2ZW50V2luZG93TWFuYWdlciB7XG4gICBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XG5cbiAgIHB1YmxpYyBhYnN0cmFjdCBfZXZlbnRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgcHJpdmF0ZSBnbG9iYWxMaXN0ZW5lcjogRnVuY3Rpb247XG4gICBwcml2YXRlIGZvcmNlQ2xvc2U6IEZ1bmN0aW9uO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gICBhYnN0cmFjdCBuZ09uRGVzdHJveSgpOiB2b2lkO1xuXG4gICBwcm90ZWN0ZWQgb3BlbkVsZW1lbnQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgdGhpcy5vbkNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuZm9yY2VDbG9zZSA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnc3RGb3JjZUNsb3NlJywgdGhpcy5vbkZvcmNlQ2xvc2UuYmluZCh0aGlzKSk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJvdGVjdGVkIGNsb3NlRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICB0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG4gICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgIGlmICh0aGlzLmdsb2JhbExpc3RlbmVyICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mICh0aGlzLmdsb2JhbExpc3RlbmVyKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxMaXN0ZW5lcigpO1xuICAgICAgICAgICAgdGhpcy5mb3JjZUNsb3NlKCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgb25DbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5fZXZlbnRFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBvbkZvcmNlQ2xvc2UoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xvc2VFbGVtZW50KCk7XG4gICB9XG59XG4iXX0=