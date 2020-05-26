/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/event-window-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
EventWindowManager = /** @class */ (function () {
    function EventWindowManager(_renderer, _cd) {
        this._renderer = _renderer;
        this._cd = _cd;
    }
    /**
     * @protected
     * @return {?}
     */
    EventWindowManager.prototype.openElement = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isActive) {
            this.closeElement();
        }
        else {
            this.isActive = !this.isActive;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.globalListener = _this._renderer.listen('document', 'click', _this.onClickOutside.bind(_this));
                _this.forceClose = _this._renderer.listen('document', 'stForceClose', _this.onForceClose.bind(_this));
            }));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    EventWindowManager.prototype.closeElement = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.isActive) {
            this.isActive = !this.isActive;
            this._cd.markForCheck();
            if (this.globalListener !== undefined && typeof (this.globalListener) === 'function') {
                this.globalListener();
                this.forceClose();
            }
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    EventWindowManager.prototype.onClickOutside = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._eventElementRef.nativeElement.contains(event.target)) {
            this.closeElement();
        }
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    EventWindowManager.prototype.onForceClose = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.closeElement();
    };
    return EventWindowManager;
}());
/**
 * @abstract
 */
export { EventWindowManager };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtd2luZG93LW1hbmFnZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2V2ZW50LXdpbmRvdy1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBWUE7Ozs7SUFPRyw0QkFBb0IsU0FBb0IsRUFBVSxHQUFzQjtRQUFwRCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFBSSxDQUFDOzs7OztJQUluRSx3Q0FBVzs7OztJQUFyQjtRQUFBLGlCQVVDO1FBVEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsVUFBVTs7O1lBQUM7Z0JBQ1IsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pHLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGNBQWMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLENBQUMsRUFBQyxDQUFDO1NBQ0w7SUFDSixDQUFDOzs7OztJQUVTLHlDQUFZOzs7O0lBQXRCO1FBQ0csSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLFVBQVUsRUFBRTtnQkFDbkYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDcEI7U0FDSDtJQUNKLENBQUM7Ozs7OztJQUVPLDJDQUFjOzs7OztJQUF0QixVQUF1QixLQUFpQjtRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN0QjtJQUNKLENBQUM7Ozs7OztJQUVPLHlDQUFZOzs7OztJQUFwQixVQUFxQixLQUFpQjtRQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNKLHlCQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQzs7Ozs7OztJQTFDRSxzQ0FBeUI7O0lBRXpCLDhDQUE2Qzs7Ozs7SUFDN0MsNENBQWlDOzs7OztJQUNqQyx3Q0FBNkI7Ozs7O0lBRWpCLHVDQUE0Qjs7Ozs7SUFBRSxpQ0FBOEI7Ozs7O0lBRXhFLDJEQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRXZlbnRXaW5kb3dNYW5hZ2VyIHtcbiAgIHB1YmxpYyBpc0FjdGl2ZTogYm9vbGVhbjtcblxuICAgcHVibGljIGFic3RyYWN0IF9ldmVudEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICBwcml2YXRlIGdsb2JhbExpc3RlbmVyOiBGdW5jdGlvbjtcbiAgIHByaXZhdGUgZm9yY2VDbG9zZTogRnVuY3Rpb247XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgIGFic3RyYWN0IG5nT25EZXN0cm95KCk6IHZvaWQ7XG5cbiAgIHByb3RlY3RlZCBvcGVuRWxlbWVudCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nbG9iYWxMaXN0ZW5lciA9IHRoaXMuX3JlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tPdXRzaWRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5mb3JjZUNsb3NlID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdzdEZvcmNlQ2xvc2UnLCB0aGlzLm9uRm9yY2VDbG9zZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICBwcm90ZWN0ZWQgY2xvc2VFbGVtZW50KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSAhdGhpcy5pc0FjdGl2ZTtcbiAgICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsTGlzdGVuZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgKHRoaXMuZ2xvYmFsTGlzdGVuZXIpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExpc3RlbmVyKCk7XG4gICAgICAgICAgICB0aGlzLmZvcmNlQ2xvc2UoKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBvbkNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLl9ldmVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCgpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIG9uRm9yY2VDbG9zZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICAgdGhpcy5jbG9zZUVsZW1lbnQoKTtcbiAgIH1cbn1cbiJdfQ==