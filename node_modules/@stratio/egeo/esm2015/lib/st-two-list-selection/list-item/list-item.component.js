/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-two-list-selection/list-item/list-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { StEgeo, StRequired } from '../../decorators/require-decorators';
import { StDropDownVisualMode } from '../../st-dropdown-menu/st-dropdown-menu.interface';
import { StPopPlacement } from '../../st-pop/st-pop.model';
let ListItemComponent = class ListItemComponent {
    constructor() {
        this.editable = false;
        this.mode = 'normal';
        this.disabled = false;
        this.selectItem = new EventEmitter();
        this.selectItemNonEditable = new EventEmitter();
        this.selectExtraLabel = new EventEmitter();
        this.hoverRow = false;
        this.menuVisualMode = StDropDownVisualMode.MENU_LIST;
        this.placement = StPopPlacement.BOTTOM_END;
    }
    /**
     * @return {?}
     */
    get itemName() {
        return this.item && this.item.name !== undefined && this.item.name !== null ? this.item.name : '';
    }
    /**
     * @return {?}
     */
    get itemQaTag() {
        return this.qaTag + '-item-' + this.item.id;
    }
    /**
     * @return {?}
     */
    get checkQaTag() {
        return this.qaTag + '-check-' + this.item.id;
    }
    /**
     * @return {?}
     */
    get selected() {
        return this.item.selected ? true : false;
    }
    /**
     * @return {?}
     */
    get itemMode() {
        /** @type {?} */
        let style = this.getModeStyle();
        style += this.selected ? ' sth-two-list-selection__selected_item' : '';
        return style;
    }
    /**
     * @return {?}
     */
    getModeStyle() {
        return this.mode === 'normal' ? 'item-normal sth-two-list-selection__item-normal' :
            'item-compact sth-two-list-selection__item-compact';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitOnClickNonEditable(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.selectItemNonEditable.emit(this.item);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitOnSelect(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.item.disabled) {
            this.selectItem.emit(this.item);
        }
    }
    /**
     * @return {?}
     */
    mouseHoverRow() {
        this.hoverRow = true;
    }
    /**
     * @return {?}
     */
    mouseLeftRow() {
        this.hoverRow = false;
    }
    /**
     * @return {?}
     */
    onCloseActionMenu() {
        if (this.showActionList) {
            this.showActionList = false;
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onChangeOption(option) {
        this.emitOnClickNonEditable(new CustomEvent('selectItem', { bubbles: true, cancelable: true, detail: Object.assign(this.item, option) }));
    }
    /**
     * @return {?}
     */
    onEllipsisClick() {
        this.showActionList = !this.showActionList;
    }
};
ListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'list-item',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n\n<div class=\"item\" [ngClass]=\"itemMode\" [attr.id]=\"itemQaTag\" [title]=\"itemName\">\n   <span *ngIf=\"!editable && !menuOptionList\" class=\"label\">{{itemName}}</span>\n   <div class=\"item__row\" *ngIf=\"!editable && menuOptionList\" (mouseenter)=\"mouseHoverRow()\" (mouseleave)=\"mouseLeftRow()\">\n      <span class=\"label\" [ngClass]=\"{'primary-link': hoverRow}\" (click)=\"emitOnClickNonEditable($event)\">{{itemName}}</span>\n      <st-dropdown-menu *ngIf=\"hoverRow\" class=\"filter-selector\" [items]=\"menuOptionList\" attr.id=\"actionListId\" [placement]=\"placement\"\n           [visualMode]=\"menuVisualMode\" [active]=\"showActionList\" (click)=\"onEllipsisClick()\"\n          (change)=\"onChangeOption($event)\" (clickOutside)=\"onCloseActionMenu()\" [openToLeft]=\"true\">\n         <button class=\"button\" id=\"actions-service\">\n            <i class=\"icon-ellipsis\"></i>\n         </button>\n      </st-dropdown-menu>\n   </div>\n   <st-checkbox [disabled]=\"disabled\" *ngIf=\"editable\" [qaTag]=\"checkQaTag\" [checked]=\"selected\" (click)=\"emitOnSelect($event)\">\n      <span class=\"label\">{{itemName}}</span>\n   </st-checkbox>\n   <span class=\"extraLabel\" *ngIf=\"item.extraLabel\" [innerHTML]=\"item.extraLabel\"\n       (click)=\"selectExtraLabel.emit({element: item, event: $event})\"></span>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.item{display:inline-block;min-width:100%;width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:10px}.item__row{display:flex;flex-direction:row-reverse}.item__row .filter-selector{position:absolute}.item__row .filter-selector .icon-ellipsis{font-size:20px}.label{overflow:hidden;text-overflow:ellipsis;flex-grow:1;color:#0f1b27;font-size:.938rem;font-weight:400}.label.primary-link{color:#0776df;cursor:pointer}:host{display:block;padding-right:20px}.item-normal{height:25px;line-height:35px}.item-compact{height:27px;line-height:27px}"]
            }] }
];
/** @nocollapse */
ListItemComponent.ctorParameters = () => [];
ListItemComponent.propDecorators = {
    item: [{ type: Input }],
    qaTag: [{ type: Input }],
    editable: [{ type: Input }],
    mode: [{ type: Input }],
    disabled: [{ type: Input }],
    menuOptionList: [{ type: Input }],
    selectItem: [{ type: Output }],
    selectItemNonEditable: [{ type: Output }],
    selectExtraLabel: [{ type: Output }]
};
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", Object)
], ListItemComponent.prototype, "item", void 0);
tslib_1.__decorate([
    StRequired(),
    tslib_1.__metadata("design:type", String)
], ListItemComponent.prototype, "qaTag", void 0);
ListItemComponent = tslib_1.__decorate([
    StEgeo(),
    tslib_1.__metadata("design:paramtypes", [])
], ListItemComponent);
export { ListItemComponent };
if (false) {
    /** @type {?} */
    ListItemComponent.prototype.item;
    /** @type {?} */
    ListItemComponent.prototype.qaTag;
    /** @type {?} */
    ListItemComponent.prototype.editable;
    /** @type {?} */
    ListItemComponent.prototype.mode;
    /** @type {?} */
    ListItemComponent.prototype.disabled;
    /** @type {?} */
    ListItemComponent.prototype.menuOptionList;
    /** @type {?} */
    ListItemComponent.prototype.selectItem;
    /** @type {?} */
    ListItemComponent.prototype.selectItemNonEditable;
    /** @type {?} */
    ListItemComponent.prototype.selectExtraLabel;
    /** @type {?} */
    ListItemComponent.prototype.hoverRow;
    /** @type {?} */
    ListItemComponent.prototype.menuVisualMode;
    /** @type {?} */
    ListItemComponent.prototype.placement;
    /** @type {?} */
    ListItemComponent.prototype.showActionList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtdHdvLWxpc3Qtc2VsZWN0aW9uL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHekUsT0FBTyxFQUFzQixvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztJQVM5QyxpQkFBaUIsU0FBakIsaUJBQWlCO0lBbUIzQjtRQWZTLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsU0FBSSxHQUF5QixRQUFRLENBQUM7UUFDdEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd6QixlQUFVLEdBQTRDLElBQUksWUFBWSxFQUE2QixDQUFDO1FBQ3BHLDBCQUFxQixHQUE0QyxJQUFJLFlBQVksRUFBNkIsQ0FBQztRQUMvRyxxQkFBZ0IsR0FBa0QsSUFBSSxZQUFZLEVBQW1DLENBQUM7UUFHekgsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUF5QixvQkFBb0IsQ0FBQyxTQUFTLENBQUM7UUFDdEUsY0FBUyxHQUFtQixjQUFjLENBQUMsVUFBVSxDQUFDO0lBRzdDLENBQUM7Ozs7SUFFakIsSUFBSSxRQUFRO1FBQ1QsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElB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LE1BQU0sRUFBRTs7R0FDSSxpQkFBaUIsQ0FtRjdCO1NBbkZZLGlCQUFpQjs7O0lBRTNCLGlDQUF1RDs7SUFDdkQsa0NBQXFDOztJQUNyQyxxQ0FBbUM7O0lBQ25DLGlDQUErQzs7SUFDL0MscUNBQW1DOztJQUNuQywyQ0FBK0M7O0lBRS9DLHVDQUE4Rzs7SUFDOUcsa0RBQXlIOztJQUN6SCw2Q0FBZ0k7O0lBR2hJLHFDQUFpQzs7SUFDakMsMkNBQTZFOztJQUM3RSxzQ0FBNkQ7O0lBQzdELDJDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0RWdlbywgU3RSZXF1aXJlZCB9IGZyb20gJy4uLy4uL2RlY29yYXRvcnMvcmVxdWlyZS1kZWNvcmF0b3JzJztcbmltcG9ydCB7IFN0VHdvTGlzdFNlbGVjdGlvbkVsZW1lbnQsIFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24gfSBmcm9tICcuLi9zdC10d28tbGlzdC1zZWxlY3Rpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBTdERyb3BEb3duTWVudUl0ZW0sIFN0RHJvcERvd25WaXN1YWxNb2RlIH0gZnJvbSAnLi4vLi4vc3QtZHJvcGRvd24tbWVudS9zdC1kcm9wZG93bi1tZW51LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTdFBvcFBsYWNlbWVudCB9IGZyb20gJy4uLy4uL3N0LXBvcC9zdC1wb3AubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnbGlzdC1pdGVtJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICAgc3R5bGVVcmxzOiBbJy4vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbkBTdEVnZW8oKVxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IHtcblxuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBpdGVtOiBTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50O1xuICAgQElucHV0KCkgQFN0UmVxdWlyZWQoKSBxYVRhZzogc3RyaW5nO1xuICAgQElucHV0KCkgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIEBJbnB1dCgpIG1vZGU6ICdjb21wYWN0JyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XG4gICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgbWVudU9wdGlvbkxpc3Q/OiBTdERyb3BEb3duTWVudUl0ZW1bXTtcblxuICAgQE91dHB1dCgpIHNlbGVjdEl0ZW06IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RJdGVtTm9uRWRpdGFibGU6IEV2ZW50RW1pdHRlcjxTdFR3b0xpc3RTZWxlY3Rpb25FbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0aW9uRWxlbWVudD4oKTtcbiAgIEBPdXRwdXQoKSBzZWxlY3RFeHRyYUxhYmVsOiBFdmVudEVtaXR0ZXI8U3RUd29MaXN0U2VsZWN0RXh0cmFMYWJlbEFjdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0VHdvTGlzdFNlbGVjdEV4dHJhTGFiZWxBY3Rpb24+KCk7XG5cblxuICAgcHVibGljIGhvdmVyUm93OiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgbWVudVZpc3VhbE1vZGU6IFN0RHJvcERvd25WaXN1YWxNb2RlID0gU3REcm9wRG93blZpc3VhbE1vZGUuTUVOVV9MSVNUO1xuICAgcHVibGljIHBsYWNlbWVudDogU3RQb3BQbGFjZW1lbnQgPSBTdFBvcFBsYWNlbWVudC5CT1RUT01fRU5EO1xuICAgcHVibGljIHNob3dBY3Rpb25MaXN0OiBib29sZWFuO1xuXG4gICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICBnZXQgaXRlbU5hbWUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW0gJiYgdGhpcy5pdGVtLm5hbWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLml0ZW0ubmFtZSAhPT0gbnVsbCA/IHRoaXMuaXRlbS5uYW1lIDogJyc7XG4gICB9XG5cbiAgIGdldCBpdGVtUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICsgJy1pdGVtLScgKyB0aGlzLml0ZW0uaWQ7XG4gICB9XG5cbiAgIGdldCBjaGVja1FhVGFnKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5xYVRhZyArICctY2hlY2stJyArIHRoaXMuaXRlbS5pZDtcbiAgIH1cblxuICAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbS5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgIH1cblxuICAgZ2V0IGl0ZW1Nb2RlKCk6IHN0cmluZyB7XG4gICAgICBsZXQgc3R5bGU6IHN0cmluZyA9IHRoaXMuZ2V0TW9kZVN0eWxlKCk7XG4gICAgICBzdHlsZSArPSB0aGlzLnNlbGVjdGVkID8gJyBzdGgtdHdvLWxpc3Qtc2VsZWN0aW9uX19zZWxlY3RlZF9pdGVtJyA6ICcnO1xuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgfVxuXG4gICBnZXRNb2RlU3R5bGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdub3JtYWwnID8gJ2l0ZW0tbm9ybWFsIHN0aC10d28tbGlzdC1zZWxlY3Rpb25fX2l0ZW0tbm9ybWFsJyA6XG4gICAgICAgICAnaXRlbS1jb21wYWN0IHN0aC10d28tbGlzdC1zZWxlY3Rpb25fX2l0ZW0tY29tcGFjdCc7XG4gICB9XG5cbiAgIGVtaXRPbkNsaWNrTm9uRWRpdGFibGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNlbGVjdEl0ZW1Ob25FZGl0YWJsZS5lbWl0KHRoaXMuaXRlbSk7XG4gICB9XG5cbiAgIGVtaXRPblNlbGVjdChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5pdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdEl0ZW0uZW1pdCh0aGlzLml0ZW0pO1xuICAgICAgfVxuICAgfVxuXG4gICBtb3VzZUhvdmVyUm93KCk6IHZvaWQge1xuICAgICAgdGhpcy5ob3ZlclJvdyA9IHRydWU7XG4gICB9XG5cbiAgIG1vdXNlTGVmdFJvdygpOiB2b2lkIHtcbiAgICAgIHRoaXMuaG92ZXJSb3cgPSBmYWxzZTtcbiAgIH1cblxuICAgb25DbG9zZUFjdGlvbk1lbnUoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5zaG93QWN0aW9uTGlzdCkge1xuICAgICAgICAgdGhpcy5zaG93QWN0aW9uTGlzdCA9IGZhbHNlO1xuICAgICAgfVxuICAgfVxuXG4gICBvbkNoYW5nZU9wdGlvbihvcHRpb246IFN0RHJvcERvd25NZW51SXRlbSk6IHZvaWQge1xuICAgICAgdGhpcy5lbWl0T25DbGlja05vbkVkaXRhYmxlKG5ldyBDdXN0b21FdmVudCgnc2VsZWN0SXRlbScsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiBPYmplY3QuYXNzaWduKHRoaXMuaXRlbSwgb3B0aW9uKX0pKTtcbiAgIH1cblxuICAgb25FbGxpcHNpc0NsaWNrKCk6IHZvaWQge1xuICAgICAgdGhpcy5zaG93QWN0aW9uTGlzdCA9ICF0aGlzLnNob3dBY3Rpb25MaXN0O1xuICAgfVxufVxuIl19