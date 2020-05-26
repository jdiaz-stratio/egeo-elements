/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.interface.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const ARROW_KEY_CODE = {
    ARROW_UP: "Arrow Up", ARROW_DOWN: "Arrow Down",
};
export { ARROW_KEY_CODE };
export class StDropDownMenuItem {
}
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
export class StDropDownMenuGroup {
}
if (false) {
    /** @type {?} */
    StDropDownMenuGroup.prototype.title;
    /** @type {?} */
    StDropDownMenuGroup.prototype.items;
}
export class StDropDownMenuItemSchema {
}
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
export class StDropDownMenuGroupSchema {
}
if (false) {
    /** @type {?} */
    StDropDownMenuGroupSchema.prototype.title;
    /** @type {?} */
    StDropDownMenuGroupSchema.prototype.items;
}
/** @enum {number} */
const StDropDownVisualMode = {
    OPTION_LIST: 0, MENU_LIST: 1,
};
export { StDropDownVisualMode };
StDropDownVisualMode[StDropDownVisualMode.OPTION_LIST] = 'OPTION_LIST';
StDropDownVisualMode[StDropDownVisualMode.MENU_LIST] = 'MENU_LIST';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBWUEsTUFBWSxjQUFjO0lBQUUsUUFBUSxZQUFhLEVBQUUsVUFBVSxjQUFlO0VBQUM7O0FBQzdFLE1BQU0sT0FBTyxrQkFBa0I7Q0FnQjlCOzs7SUFmRSxtQ0FBYzs7SUFDZCxtQ0FBVzs7SUFDWCxrQ0FBYzs7SUFDZCx3Q0FBb0I7O0lBQ3BCLHVDQUFtQjs7SUFDbkIsc0NBQWtCOztJQUNsQixzQ0FBbUI7O0lBQ25CLHFDQUFrQjs7SUFDbEIsdUNBQW1COztJQUNuQiw2Q0FBeUI7O0lBQ3pCLDRDQUF3Qjs7SUFDeEIsc0NBQW1COztJQUNuQiwwQ0FBdUI7O0lBQ3ZCLDZDQUEwQjs7O0FBSTdCLE1BQU0sT0FBTyxtQkFBbUI7Q0FHL0I7OztJQUZFLG9DQUFlOztJQUNmLG9DQUE0Qjs7QUFHL0IsTUFBTSxPQUFPLHdCQUF3QjtDQUtwQzs7O0lBSkUseUNBQTRCOztJQUM1Qix5Q0FBVzs7SUFDWCx3Q0FBYzs7SUFDZCw0Q0FBbUI7O0FBR3RCLE1BQU0sT0FBTyx5QkFBeUI7Q0FHckM7OztJQUZFLDBDQUE2Qjs7SUFDN0IsMENBQWtDOzs7QUFHckMsTUFBWSxvQkFBb0I7SUFDN0IsV0FBVyxHQUFBLEVBQUUsU0FBUyxHQUFBO0VBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBUcmFuc2xhdGVhYmxlRWxlbWVudCB9IGZyb20gJy4uL3V0aWxzL2VnZW8tcmVzb2x2ZXIvZWdlby1yZXNvbHZlLW1vZGVsJztcblxuZXhwb3J0IGVudW0gQVJST1dfS0VZX0NPREUge0FSUk9XX1VQID0gJ0Fycm93IFVwJywgQVJST1dfRE9XTiA9ICdBcnJvdyBEb3duJ31cbmV4cG9ydCBjbGFzcyBTdERyb3BEb3duTWVudUl0ZW0ge1xuICAgbGFiZWw6IHN0cmluZztcbiAgIHZhbHVlOiBhbnk7XG4gICBpY29uPzogc3RyaW5nO1xuICAgbGFiZWxDb2xvcj86IHN0cmluZztcbiAgIGljb25Db2xvcj86IHN0cmluZztcbiAgIHRleHRJbmZvPzogc3RyaW5nO1xuICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgaGFzSHRtbD86IGJvb2xlYW47XG4gICBleHRyYUljb24/OiBzdHJpbmc7XG4gICBleHRyYUljb25CdWJibGU/OiBzdHJpbmc7XG4gICBleHRyYUljb25Db2xvcj86IHN0cmluZztcbiAgIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgIHRvcFNlcGFyYXRvcj86IGJvb2xlYW47XG4gICBib3R0b21TZXBhcmF0b3I/OiBib29sZWFuO1xuICAgW2tleTogc3RyaW5nXTogYW55OyAvLyBUbyBkbyBtb2RlbCBtb3JlIGV4dGVuc2libGUgaWYgYW55IG90aGVyIGNvbXBvbmVudCBuZWVkcyB0byBzZW5kIG1vcmUgZGF0YVxufVxuXG5leHBvcnQgY2xhc3MgU3REcm9wRG93bk1lbnVHcm91cCB7XG4gICB0aXRsZT86IHN0cmluZztcbiAgIGl0ZW1zOiBTdERyb3BEb3duTWVudUl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIFN0RHJvcERvd25NZW51SXRlbVNjaGVtYSB7XG4gICBsYWJlbDogVHJhbnNsYXRlYWJsZUVsZW1lbnQ7XG4gICB2YWx1ZTogYW55O1xuICAgaWNvbj86IHN0cmluZztcbiAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFN0RHJvcERvd25NZW51R3JvdXBTY2hlbWEge1xuICAgdGl0bGU/OiBUcmFuc2xhdGVhYmxlRWxlbWVudDtcbiAgIGl0ZW1zOiBTdERyb3BEb3duTWVudUl0ZW1TY2hlbWFbXTtcbn1cblxuZXhwb3J0IGVudW0gU3REcm9wRG93blZpc3VhbE1vZGUge1xuICAgT1BUSU9OX0xJU1QsIE1FTlVfTElTVFxufVxuIl19