/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const StModalResponse = {
    YES: 0, NO: 1, CLOSE: 2,
};
export { StModalResponse };
StModalResponse[StModalResponse.YES] = 'YES';
StModalResponse[StModalResponse.NO] = 'NO';
StModalResponse[StModalResponse.CLOSE] = 'CLOSE';
/** @enum {number} */
const StModalBasicType = {
    DELETE: 0, CONFIRM: 1, INFO: 2, WARNING: 3,
};
export { StModalBasicType };
StModalBasicType[StModalBasicType.DELETE] = 'DELETE';
StModalBasicType[StModalBasicType.CONFIRM] = 'CONFIRM';
StModalBasicType[StModalBasicType.INFO] = 'INFO';
StModalBasicType[StModalBasicType.WARNING] = 'WARNING';
export class StModalButton {
}
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
export class StModalConfig {
}
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
export class StModalButtonResponse {
}
if (false) {
    /** @type {?} */
    StModalButtonResponse.prototype.response;
    /** @type {?} */
    StModalButtonResponse.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LW1vZGFsL3N0LW1vZGFsLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLE1BQVksZUFBZTtJQUFHLEdBQUcsR0FBQSxFQUFFLEVBQUUsR0FBQSxFQUFFLEtBQUssR0FBQTtFQUFFOzs7Ozs7QUFDOUMsTUFBWSxnQkFBZ0I7SUFBRyxNQUFNLEdBQUEsRUFBRSxPQUFPLEdBQUEsRUFBRSxJQUFJLEdBQUEsRUFBRSxPQUFPLEdBQUE7RUFBRTs7Ozs7O0FBRS9ELE1BQU0sT0FBTyxhQUFhO0NBUXpCOzs7SUFQRSxpQ0FBb0I7O0lBQ3BCLHNDQUFnQzs7SUFDaEMsaUNBQWtCOztJQUNsQixrQ0FBbUI7O0lBQ25CLGdDQUFpQjs7SUFDakIscUNBQXVCOztJQUN2Qiw4QkFBYzs7QUFHakIsTUFBTSxPQUFPLGFBQWE7Q0FjekI7OztJQWJFLG1DQUFxQjs7SUFDckIsbUNBQW9COztJQUNwQixxQ0FBc0I7O0lBQ3RCLGdDQUFpQjs7SUFDakIsNkJBQWM7O0lBQ2QsK0JBQWdCOztJQUNoQixnQ0FBaUI7O0lBQ2pCLGdDQUEwQjs7SUFDMUIsaUNBQWtCOztJQUNsQixpQ0FBa0I7O0lBQ2xCLDhCQUFnQjs7SUFDaEIscUNBQXVCOztJQUN2QixtQ0FBb0I7O0FBR3ZCLE1BQU0sT0FBTyxxQkFBcUI7Q0FHakM7OztJQUZFLHlDQUEwQjs7SUFDMUIsc0NBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1tb2RhbC5jb21wb25lbnQnO1xuXG5leHBvcnQgZW51bSBTdE1vZGFsUmVzcG9uc2UgeyBZRVMsIE5PLCBDTE9TRSB9XG5leHBvcnQgZW51bSBTdE1vZGFsQmFzaWNUeXBlIHsgREVMRVRFLCBDT05GSVJNLCBJTkZPLCBXQVJOSU5HIH1cblxuZXhwb3J0IGNsYXNzIFN0TW9kYWxCdXR0b24ge1xuICAgcmVzcG9uc2U/OiBGdW5jdGlvbjtcbiAgIHJlc3BvbnNlVmFsdWU/OiBTdE1vZGFsUmVzcG9uc2U7XG4gICBsZWZ0SWNvbj86IHN0cmluZztcbiAgIHJpZ2h0SWNvbj86IHN0cmluZztcbiAgIGNsYXNzZXM/OiBzdHJpbmc7XG4gICBjbG9zZU9uQ2xpY2s/OiBib29sZWFuO1xuICAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN0TW9kYWxDb25maWcge1xuICAgZnVsbHNjcmVlbj86IGJvb2xlYW47XG4gICBtb2RhbFRpdGxlPzogc3RyaW5nO1xuICAgbWVzc2FnZVRpdGxlPzogc3RyaW5nO1xuICAgbWVzc2FnZT86IHN0cmluZztcbiAgIGh0bWw/OiBzdHJpbmc7XG4gICBpbnB1dHM/OiBPYmplY3Q7XG4gICBvdXRwdXRzPzogT2JqZWN0O1xuICAgYnV0dG9ucz86IFN0TW9kYWxCdXR0b25bXTtcbiAgIG1heFdpZHRoPzogbnVtYmVyO1xuICAgbWluV2lkdGg/OiBudW1iZXI7XG4gICBlbXB0eT86IGJvb2xlYW47XG4gICBzaG93Q2xvc2VCdG4/OiBib29sZWFuO1xuICAgaWNvblN0YXR1cz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFN0TW9kYWxCdXR0b25SZXNwb25zZSB7XG4gICByZXNwb25zZTogU3RNb2RhbFJlc3BvbnNlO1xuICAgY2xvc2U6IGJvb2xlYW47XG59XG4iXX0=