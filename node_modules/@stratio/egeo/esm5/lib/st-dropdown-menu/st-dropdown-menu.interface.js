/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var ARROW_KEY_CODE = {
    ARROW_UP: "Arrow Up", ARROW_DOWN: "Arrow Down",
};
export { ARROW_KEY_CODE };
var StDropDownMenuItem = /** @class */ (function () {
    function StDropDownMenuItem() {
    }
    return StDropDownMenuItem;
}());
export { StDropDownMenuItem };
if (false) {
    /** @type {?} */
    StDropDownMenuItem.prototype.label;
    /** @type {?} */
    StDropDownMenuItem.prototype.value;
    /** @type {?} */
    StDropDownMenuItem.prototype.icon;
    /** @type {?} */
    StDropDownMenuItem.prototype.labelColor;
    /** @type {?} */
    StDropDownMenuItem.prototype.iconColor;
    /** @type {?} */
    StDropDownMenuItem.prototype.textInfo;
    /** @type {?} */
    StDropDownMenuItem.prototype.selected;
    /** @type {?} */
    StDropDownMenuItem.prototype.hasHtml;
    /** @type {?} */
    StDropDownMenuItem.prototype.extraIcon;
    /** @type {?} */
    StDropDownMenuItem.prototype.extraIconBubble;
    /** @type {?} */
    StDropDownMenuItem.prototype.extraIconColor;
    /** @type {?} */
    StDropDownMenuItem.prototype.disabled;
    /** @type {?} */
    StDropDownMenuItem.prototype.topSeparator;
    /** @type {?} */
    StDropDownMenuItem.prototype.bottomSeparator;
    /* Skipping unhandled member: [key: string]: any;*/
}
var StDropDownMenuGroup = /** @class */ (function () {
    function StDropDownMenuGroup() {
    }
    return StDropDownMenuGroup;
}());
export { StDropDownMenuGroup };
if (false) {
    /** @type {?} */
    StDropDownMenuGroup.prototype.title;
    /** @type {?} */
    StDropDownMenuGroup.prototype.items;
}
var StDropDownMenuItemSchema = /** @class */ (function () {
    function StDropDownMenuItemSchema() {
    }
    return StDropDownMenuItemSchema;
}());
export { StDropDownMenuItemSchema };
if (false) {
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.label;
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.value;
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.icon;
    /** @type {?} */
    StDropDownMenuItemSchema.prototype.selected;
}
var StDropDownMenuGroupSchema = /** @class */ (function () {
    function StDropDownMenuGroupSchema() {
    }
    return StDropDownMenuGroupSchema;
}());
export { StDropDownMenuGroupSchema };
if (false) {
    /** @type {?} */
    StDropDownMenuGroupSchema.prototype.title;
    /** @type {?} */
    StDropDownMenuGroupSchema.prototype.items;
}
/** @enum {number} */
var StDropDownVisualMode = {
    OPTION_LIST: 0, MENU_LIST: 1,
};
export { StDropDownVisualMode };
StDropDownVisualMode[StDropDownVisualMode.OPTION_LIST] = 'OPTION_LIST';
StDropDownVisualMode[StDropDownVisualMode.MENU_LIST] = 'MENU_LIST';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBWUEsSUFBWSxjQUFjO0lBQUUsUUFBUSxZQUFhLEVBQUUsVUFBVSxjQUFlO0VBQUM7O0FBQzdFO0lBQUE7SUFnQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQzs7OztJQWZFLG1DQUFjOztJQUNkLG1DQUFXOztJQUNYLGtDQUFjOztJQUNkLHdDQUFvQjs7SUFDcEIsdUNBQW1COztJQUNuQixzQ0FBa0I7O0lBQ2xCLHNDQUFtQjs7SUFDbkIscUNBQWtCOztJQUNsQix1Q0FBbUI7O0lBQ25CLDZDQUF5Qjs7SUFDekIsNENBQXdCOztJQUN4QixzQ0FBbUI7O0lBQ25CLDBDQUF1Qjs7SUFDdkIsNkNBQTBCOzs7QUFJN0I7SUFBQTtJQUdBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkUsb0NBQWU7O0lBQ2Ysb0NBQTRCOztBQUcvQjtJQUFBO0lBS0EsQ0FBQztJQUFELCtCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7Ozs7SUFKRSx5Q0FBNEI7O0lBQzVCLHlDQUFXOztJQUNYLHdDQUFjOztJQUNkLDRDQUFtQjs7QUFHdEI7SUFBQTtJQUdBLENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkUsMENBQTZCOztJQUM3QiwwQ0FBa0M7OztBQUdyQyxJQUFZLG9CQUFvQjtJQUM3QixXQUFXLEdBQUEsRUFBRSxTQUFTLEdBQUE7RUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IFRyYW5zbGF0ZWFibGVFbGVtZW50IH0gZnJvbSAnLi4vdXRpbHMvZWdlby1yZXNvbHZlci9lZ2VvLXJlc29sdmUtbW9kZWwnO1xuXG5leHBvcnQgZW51bSBBUlJPV19LRVlfQ09ERSB7QVJST1dfVVAgPSAnQXJyb3cgVXAnLCBBUlJPV19ET1dOID0gJ0Fycm93IERvd24nfVxuZXhwb3J0IGNsYXNzIFN0RHJvcERvd25NZW51SXRlbSB7XG4gICBsYWJlbDogc3RyaW5nO1xuICAgdmFsdWU6IGFueTtcbiAgIGljb24/OiBzdHJpbmc7XG4gICBsYWJlbENvbG9yPzogc3RyaW5nO1xuICAgaWNvbkNvbG9yPzogc3RyaW5nO1xuICAgdGV4dEluZm8/OiBzdHJpbmc7XG4gICBzZWxlY3RlZD86IGJvb2xlYW47XG4gICBoYXNIdG1sPzogYm9vbGVhbjtcbiAgIGV4dHJhSWNvbj86IHN0cmluZztcbiAgIGV4dHJhSWNvbkJ1YmJsZT86IHN0cmluZztcbiAgIGV4dHJhSWNvbkNvbG9yPzogc3RyaW5nO1xuICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgdG9wU2VwYXJhdG9yPzogYm9vbGVhbjtcbiAgIGJvdHRvbVNlcGFyYXRvcj86IGJvb2xlYW47XG4gICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIFRvIGRvIG1vZGVsIG1vcmUgZXh0ZW5zaWJsZSBpZiBhbnkgb3RoZXIgY29tcG9uZW50IG5lZWRzIHRvIHNlbmQgbW9yZSBkYXRhXG59XG5cbmV4cG9ydCBjbGFzcyBTdERyb3BEb3duTWVudUdyb3VwIHtcbiAgIHRpdGxlPzogc3RyaW5nO1xuICAgaXRlbXM6IFN0RHJvcERvd25NZW51SXRlbVtdO1xufVxuXG5leHBvcnQgY2xhc3MgU3REcm9wRG93bk1lbnVJdGVtU2NoZW1hIHtcbiAgIGxhYmVsOiBUcmFuc2xhdGVhYmxlRWxlbWVudDtcbiAgIHZhbHVlOiBhbnk7XG4gICBpY29uPzogc3RyaW5nO1xuICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgU3REcm9wRG93bk1lbnVHcm91cFNjaGVtYSB7XG4gICB0aXRsZT86IFRyYW5zbGF0ZWFibGVFbGVtZW50O1xuICAgaXRlbXM6IFN0RHJvcERvd25NZW51SXRlbVNjaGVtYVtdO1xufVxuXG5leHBvcnQgZW51bSBTdERyb3BEb3duVmlzdWFsTW9kZSB7XG4gICBPUFRJT05fTElTVCwgTUVOVV9MSVNUXG59XG4iXX0=