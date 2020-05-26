/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var StModalResponse = {
    YES: 0, NO: 1, CLOSE: 2,
};
export { StModalResponse };
StModalResponse[StModalResponse.YES] = 'YES';
StModalResponse[StModalResponse.NO] = 'NO';
StModalResponse[StModalResponse.CLOSE] = 'CLOSE';
/** @enum {number} */
var StModalBasicType = {
    DELETE: 0, CONFIRM: 1, INFO: 2, WARNING: 3,
};
export { StModalBasicType };
StModalBasicType[StModalBasicType.DELETE] = 'DELETE';
StModalBasicType[StModalBasicType.CONFIRM] = 'CONFIRM';
StModalBasicType[StModalBasicType.INFO] = 'INFO';
StModalBasicType[StModalBasicType.WARNING] = 'WARNING';
var StModalButton = /** @class */ (function () {
    function StModalButton() {
    }
    return StModalButton;
}());
export { StModalButton };
if (false) {
    /** @type {?} */
    StModalButton.prototype.response;
    /** @type {?} */
    StModalButton.prototype.responseValue;
    /** @type {?} */
    StModalButton.prototype.leftIcon;
    /** @type {?} */
    StModalButton.prototype.rightIcon;
    /** @type {?} */
    StModalButton.prototype.classes;
    /** @type {?} */
    StModalButton.prototype.closeOnClick;
    /** @type {?} */
    StModalButton.prototype.label;
}
var StModalConfig = /** @class */ (function () {
    function StModalConfig() {
    }
    return StModalConfig;
}());
export { StModalConfig };
if (false) {
    /** @type {?} */
    StModalConfig.prototype.fullscreen;
    /** @type {?} */
    StModalConfig.prototype.modalTitle;
    /** @type {?} */
    StModalConfig.prototype.messageTitle;
    /** @type {?} */
    StModalConfig.prototype.message;
    /** @type {?} */
    StModalConfig.prototype.html;
    /** @type {?} */
    StModalConfig.prototype.inputs;
    /** @type {?} */
    StModalConfig.prototype.outputs;
    /** @type {?} */
    StModalConfig.prototype.buttons;
    /** @type {?} */
    StModalConfig.prototype.maxWidth;
    /** @type {?} */
    StModalConfig.prototype.minWidth;
    /** @type {?} */
    StModalConfig.prototype.empty;
    /** @type {?} */
    StModalConfig.prototype.showCloseBtn;
    /** @type {?} */
    StModalConfig.prototype.iconStatus;
}
var StModalButtonResponse = /** @class */ (function () {
    function StModalButtonResponse() {
    }
    return StModalButtonResponse;
}());
export { StModalButtonResponse };
if (false) {
    /** @type {?} */
    StModalButtonResponse.prototype.response;
    /** @type {?} */
    StModalButtonResponse.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LW1vZGFsL3N0LW1vZGFsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLElBQVksZUFBZTtJQUFHLEdBQUcsR0FBQSxFQUFFLEVBQUUsR0FBQSxFQUFFLEtBQUssR0FBQTtFQUFFOzs7Ozs7QUFDOUMsSUFBWSxnQkFBZ0I7SUFBRyxNQUFNLEdBQUEsRUFBRSxPQUFPLEdBQUEsRUFBRSxJQUFJLEdBQUEsRUFBRSxPQUFPLEdBQUE7RUFBRTs7Ozs7O0FBRS9EO0lBQUE7SUFRQSxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBFLGlDQUFvQjs7SUFDcEIsc0NBQWdDOztJQUNoQyxpQ0FBa0I7O0lBQ2xCLGtDQUFtQjs7SUFDbkIsZ0NBQWlCOztJQUNqQixxQ0FBdUI7O0lBQ3ZCLDhCQUFjOztBQUdqQjtJQUFBO0lBY0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7SUFiRSxtQ0FBcUI7O0lBQ3JCLG1DQUFvQjs7SUFDcEIscUNBQXNCOztJQUN0QixnQ0FBaUI7O0lBQ2pCLDZCQUFjOztJQUNkLCtCQUFnQjs7SUFDaEIsZ0NBQWlCOztJQUNqQixnQ0FBMEI7O0lBQzFCLGlDQUFrQjs7SUFDbEIsaUNBQWtCOztJQUNsQiw4QkFBZ0I7O0lBQ2hCLHFDQUF1Qjs7SUFDdkIsbUNBQW9COztBQUd2QjtJQUFBO0lBR0EsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGRSx5Q0FBMEI7O0lBQzFCLHNDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21wb25lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc3QtbW9kYWwuY29tcG9uZW50JztcblxuZXhwb3J0IGVudW0gU3RNb2RhbFJlc3BvbnNlIHsgWUVTLCBOTywgQ0xPU0UgfVxuZXhwb3J0IGVudW0gU3RNb2RhbEJhc2ljVHlwZSB7IERFTEVURSwgQ09ORklSTSwgSU5GTywgV0FSTklORyB9XG5cbmV4cG9ydCBjbGFzcyBTdE1vZGFsQnV0dG9uIHtcbiAgIHJlc3BvbnNlPzogRnVuY3Rpb247XG4gICByZXNwb25zZVZhbHVlPzogU3RNb2RhbFJlc3BvbnNlO1xuICAgbGVmdEljb24/OiBzdHJpbmc7XG4gICByaWdodEljb24/OiBzdHJpbmc7XG4gICBjbGFzc2VzPzogc3RyaW5nO1xuICAgY2xvc2VPbkNsaWNrPzogYm9vbGVhbjtcbiAgIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdE1vZGFsQ29uZmlnIHtcbiAgIGZ1bGxzY3JlZW4/OiBib29sZWFuO1xuICAgbW9kYWxUaXRsZT86IHN0cmluZztcbiAgIG1lc3NhZ2VUaXRsZT86IHN0cmluZztcbiAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICBodG1sPzogc3RyaW5nO1xuICAgaW5wdXRzPzogT2JqZWN0O1xuICAgb3V0cHV0cz86IE9iamVjdDtcbiAgIGJ1dHRvbnM/OiBTdE1vZGFsQnV0dG9uW107XG4gICBtYXhXaWR0aD86IG51bWJlcjtcbiAgIG1pbldpZHRoPzogbnVtYmVyO1xuICAgZW1wdHk/OiBib29sZWFuO1xuICAgc2hvd0Nsb3NlQnRuPzogYm9vbGVhbjtcbiAgIGljb25TdGF0dXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdE1vZGFsQnV0dG9uUmVzcG9uc2Uge1xuICAgcmVzcG9uc2U6IFN0TW9kYWxSZXNwb25zZTtcbiAgIGNsb3NlOiBib29sZWFuO1xufVxuIl19