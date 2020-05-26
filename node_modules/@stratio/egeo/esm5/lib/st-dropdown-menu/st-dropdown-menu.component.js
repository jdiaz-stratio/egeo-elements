/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-dropdown-menu/st-dropdown-menu.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';
import { ARROW_KEY_CODE, StDropDownMenuItem, StDropDownVisualMode } from './st-dropdown-menu.interface';
/**
 * \@description {Component} [Dropdown Menu]
 * This directive show a dropdown menu list in element that you attach
 *
 *
 * \@model
 *
 *   [Menu items] {./st-dropdown-menu.interface.ts#StDropDownMenuItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-dropdown-menu [items]="list" [active]="show" (change)="onChange(event)">
 *    <button class="button button-primary" (click)="show = !show">Show menu</button>
 * </st-dropdown-menu>
 * ```
 */
var StDropdownMenuComponent = /** @class */ (function () {
    function StDropdownMenuComponent(el, cd, renderer) {
        this.el = el;
        this.cd = cd;
        this.renderer = renderer;
        /**
         * \@Input {boolean} [active=false] Show or hide list
         */
        this.active = false;
        /**
         * \@Input {StDropDownMenuItem[] | StDropDownMenuGroup[]} [items=\[\]] List of items or groups of them to show in menu
         */
        this.items = [];
        /* tslint:disable-next-line:max-line-length */
        /**
         * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM_START] Possible positions of menu with respect element to attach
         */
        this.placement = StPopPlacement.BOTTOM_START;
        /**
         * \@Input {string} [emptyListMessage=''] Message to show in case of empty list
         */
        this.emptyListMessage = '';
        /**
         * \@Input {StDropDownMenuItem | undefined} [selectedItem=undefined] Define selected item without passing as property
         */
        this.selectedItem = undefined;
        /**
         * \@Input {StDropDownMenuItem | undefined} [itemsBeforeScroll=undefined] Define selected item without passing as property
         */
        this.itemsBeforeScroll = 8;
        /**
         * \@Input {boolean} [moveSelected=true] If true, move selected item to top in menu when open
         */
        this.moveSelected = true;
        /**
         * \@Input {boolean} [styleSelected=true] If true, apply class selected to selected item
         */
        this.styleSelected = true;
        /**
         * \@Input {boolean} [isLoading=true] If true, show loader at the end of the list
         */
        this.isLoading = false;
        /**
         * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
         */
        this.offset = { x: 0, y: 0 };
        /**
         * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
         */
        this.openToLeft = false;
        /**
         * \@Input {StDropdownVisualMode} [visualMode=StDropDownVisualMode.OPTION_LIST] It is needed to specify the styles applied to the list.
         *  By default is displayed as a normal option list
         */
        this.visualMode = StDropDownVisualMode.OPTION_LIST;
        /**
         * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
         */
        this.keyBoardMove = false;
        /**
         * \@output {StDropDownMenuItem} [change] Event emitted when user select an item
         */
        this.change = new EventEmitter();
        /**
         * \@output {any} [scrollAtBottom] Event emitted when scroll reach the end of the list
         */
        this.scrollAtBottom = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
         */
        this.itemMouseEnter = new EventEmitter();
        /**
         * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
         */
        this.itemMouseLeave = new EventEmitter();
        this.widthMenu = '0px';
        this._itemHeight = 42;
        this._focusedOptionPos = -1;
    }
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.keyBoardMove) {
            this._focusListenerFn = this.renderer.listen('document', 'keydown', this.arrowKeyListener.bind(this));
        }
    };
    Object.defineProperty(StDropdownMenuComponent.prototype, "componentId", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var id = ((/** @type {?} */ (this.el.nativeElement))).getAttribute('id');
            return id !== undefined && id !== null ? id : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "menuId", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentId !== null ? this.componentId + "-menu" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "isItemGroup", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isDropDownGroup(this.items);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "menuMaxHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemsBeforeScroll ? this._itemHeight * this.itemsBeforeScroll + "px" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StDropdownMenuComponent.prototype, "listClasses", {
        get: /**
         * @return {?}
         */
        function () {
            return { 'st-dropdown-menu': true, 'active': this.active, 'menu-list': this.displayAsMenuList() };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.getItemId = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.componentId !== null && value !== undefined ? this.componentId + "-option-" + this.getItemValueMerged(value) : null;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.isDropDownGroup = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value && value.length > 0 && ((/** @type {?} */ (value[0]))).title !== undefined;
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateWidth();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes && changes.active && changes.active.currentValue && this.selectedItem && this.moveSelected) {
            // Only can do this functionality with timeout because we need to wait for angular to load new DOM
            // with items before move scroll
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.itemListElement) {
                    /** @type {?} */
                    var parent_1 = _this.itemListElement.nativeElement;
                    /** @type {?} */
                    var listOfElements = parent_1.getElementsByClassName('selected');
                    if (listOfElements && listOfElements.length > 0) {
                        /** @type {?} */
                        var target = ((/** @type {?} */ (listOfElements.item(0))));
                        parent_1.scrollTop = target.offsetTop - parent_1.offsetTop;
                    }
                }
            }));
        }
        else {
            if (changes && changes.active && !changes.active.currentValue) {
                this._focusedOptionPos = -1;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.change.emit(value);
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onHandleScroll = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.itemListElement.nativeElement;
        if (element.scrollHeight - element.scrollTop === element.clientHeight && !this.isLoading) {
            this.scrollAtBottom.emit();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onMouseEnter = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseEnter.emit(item);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    StDropdownMenuComponent.prototype.onMouseLeave = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.itemMouseLeave.emit(item);
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.displayAsMenuList = /**
     * @return {?}
     */
    function () {
        return this.visualMode === StDropDownVisualMode.MENU_LIST;
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.updateWidth = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var button = this.buttonElement.nativeElement;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (button.children && button.children.length > 0) {
                _this.widthMenu = button.children[0].getBoundingClientRect().width + 'px';
            }
            else {
                _this.widthMenu = button.getBoundingClientRect().width + 'px';
            }
            _this.cd.markForCheck();
        }));
    };
    /**
     * @return {?}
     */
    StDropdownMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._focusListenerFn) {
            this._focusListenerFn();
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StDropdownMenuComponent.prototype.getItemValueMerged = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value.toString().replace(/\s+/g, '_');
    };
    /**
     * @private
     * @return {?}
     */
    StDropdownMenuComponent.prototype.getSelectedItemPosition = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.selectedItem && this.items) {
            /** @type {?} */
            var _items_1 = [];
            if (this.isDropDownGroup(this.items)) {
                this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    if (((/** @type {?} */ (item))).items) {
                        _items_1.push.apply(_items_1, tslib_1.__spread(((/** @type {?} */ (item))).items));
                    }
                    else {
                        _items_1.push(((/** @type {?} */ (item))));
                    }
                }));
            }
            else {
                _items_1 = this.items;
            }
            return _items_1.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value === _this.selectedItem.value; }));
        }
        else {
            return -1;
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    StDropdownMenuComponent.prototype.arrowKeyListener = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var selectedItemPosition = this.getSelectedItemPosition();
        if (selectedItemPosition > -1) {
            this._focusedOptionPos = selectedItemPosition;
        }
        /** @type {?} */
        var nextFocus;
        if (e.code === ARROW_KEY_CODE.ARROW_DOWN || e.code === ARROW_KEY_CODE.ARROW_UP) {
            event.preventDefault();
            /** @type {?} */
            var options = this.el.nativeElement.querySelectorAll('.st-dropdown-menu-item');
            nextFocus = e.code === ARROW_KEY_CODE.ARROW_DOWN || this._focusedOptionPos === -1 ? 1 : -1;
            this._focusedOptionPos = this._focusedOptionPos + nextFocus;
            if (this._focusedOptionPos < 0) {
                this._focusedOptionPos = options.length - 1;
            }
            else if (this._focusedOptionPos > options.length - 1) {
                this._focusedOptionPos = 0;
            }
            if (options[this._focusedOptionPos]) {
                options[this._focusedOptionPos].focus();
            }
        }
        this.cd.markForCheck();
    };
    StDropdownMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-dropdown-menu',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-pop [hidden]=\"!active\" [placement]=\"placement\" [offset]=\"offset\" [openToLeft]=\"openToLeft\">\n\n   <div pop-button #buttonId>\n      <ng-content></ng-content>\n   </div>\n\n   <div pop-content [style.z-index]=\"9\" class=\"dropdown-content\">\n\n      <div *ngIf=\"active\" [ngClass]=\"listClasses\" [style.minWidth]='widthMenu'>\n         <ng-content select=[dropdown-header]></ng-content>\n\n         <ul *ngIf=\"!isItemGroup && ((items && items.length) || emptyListMessage)\"\n             #itemList\n             aria-label=\"submenu\"\n             [ngClass]=\"{'st-custom-scrollbar': displayAsMenuList()}\"\n             [attr.aria-hidden]=\"!active\"\n             [style.maxHeight]=\"menuMaxHeight\"\n             [attr.id]=\"menuId\"\n             (scroll)=\"onHandleScroll()\">\n            <st-dropdown-menu-item\n               *ngFor=\"let item of items; let i = index\"\n               [attr.id]=\"getItemId(item.value)\"\n               [index]=\"i\"\n               [item]=\"item\"\n               [selectedItem]=\"selectedItem\"\n               [styleSelected]=\"styleSelected\"\n               (change)=\"onChange($event)\"\n               (mouseenter)=\"onMouseEnter(item)\"\n               (mouseleave)=\"onMouseLeave(item)\">\n            </st-dropdown-menu-item>\n            <div *ngIf=\"isLoading\" class=\"spinner-container\">\n               <st-spinner class=\"spinner\"></st-spinner>\n            </div>\n            <div *ngIf=\"!items || !items.length\" class=\"without-results st-dropdown-menu-without-results\"\n                 [style.maxWidth]='widthMenu'>\n               {{emptyListMessage}}\n            </div>\n         </ul>\n\n         <div *ngIf=\"isItemGroup\">\n            <ul [attr.aria-hidden]=\"!active\" aria-label=\"submenu\" [style.maxHeight]=\"menuMaxHeight\"\n                [attr.id]=\"menuId\" #itemList>\n               <li class=\"st-dropdown-menu-parent\" *ngFor=\"let group of items\">\n                  <h3>\n                     <span>{{ group.title }}</span>\n                  </h3>\n                  <ul>\n                     <st-dropdown-menu-item\n                        *ngFor=\"let item of group.items || []; let i = index\"\n                        [attr.id]=\"getItemId(item.value)\"\n                        [index]=\"i\"\n                        [item]=\"item\"\n                        [selectedItem]=\"selectedItem\"\n                        [styleSelected]=\"styleSelected\"\n                        (change)=\"onChange($event)\"\n                        (mouseenter)=\"onMouseEnter(item)\"\n                        (mouseleave)=\"onMouseLeave(item)\">\n                     </st-dropdown-menu-item>\n\n                     <div class=\"without-results st-dropdown-menu-without-results\" [style.maxWidth]='widthMenu'\n                          *ngIf=\"!group || !group.items || !group.items.length\">\n                        {{emptyListMessage}}\n                     </div>\n                  </ul>\n               </li>\n               <div *ngIf=\"isLoading\" class=\"spinner-container\">\n                  <st-spinner class=\"spinner\"></st-spinner>\n               </div>\n            </ul>\n         </div>\n         <ng-content select=[dropdown-footer]></ng-content>\n      </div>\n   </div>\n</st-pop>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    StDropdownMenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    StDropdownMenuComponent.propDecorators = {
        active: [{ type: Input }],
        items: [{ type: Input }],
        placement: [{ type: Input }],
        emptyListMessage: [{ type: Input }],
        selectedItem: [{ type: Input }],
        itemsBeforeScroll: [{ type: Input }],
        moveSelected: [{ type: Input }],
        styleSelected: [{ type: Input }],
        isLoading: [{ type: Input }],
        offset: [{ type: Input }],
        openToLeft: [{ type: Input }],
        visualMode: [{ type: Input }],
        keyBoardMove: [{ type: Input }],
        change: [{ type: Output }],
        scrollAtBottom: [{ type: Output }],
        itemMouseEnter: [{ type: Output }],
        itemMouseLeave: [{ type: Output }],
        buttonElement: [{ type: ViewChild, args: ['buttonId', { static: false },] }],
        itemListElement: [{ type: ViewChild, args: ['itemList', { static: false },] }],
        updateWidth: [{ type: HostListener, args: ['window:resize',] }, { type: HostListener, args: ['window:load',] }]
    };
    return StDropdownMenuComponent;
}());
export { StDropdownMenuComponent };
if (false) {
    /**
     * \@Input {boolean} [active=false] Show or hide list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.active;
    /**
     * \@Input {StDropDownMenuItem[] | StDropDownMenuGroup[]} [items=\[\]] List of items or groups of them to show in menu
     * @type {?}
     */
    StDropdownMenuComponent.prototype.items;
    /**
     * \@Input {StPopPlacement} [placement=StPopPlacement.BOTTOM_START] Possible positions of menu with respect element to attach
     * @type {?}
     */
    StDropdownMenuComponent.prototype.placement;
    /**
     * \@Input {string} [emptyListMessage=''] Message to show in case of empty list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.emptyListMessage;
    /**
     * \@Input {StDropDownMenuItem | undefined} [selectedItem=undefined] Define selected item without passing as property
     * @type {?}
     */
    StDropdownMenuComponent.prototype.selectedItem;
    /**
     * \@Input {StDropDownMenuItem | undefined} [itemsBeforeScroll=undefined] Define selected item without passing as property
     * @type {?}
     */
    StDropdownMenuComponent.prototype.itemsBeforeScroll;
    /**
     * \@Input {boolean} [moveSelected=true] If true, move selected item to top in menu when open
     * @type {?}
     */
    StDropdownMenuComponent.prototype.moveSelected;
    /**
     * \@Input {boolean} [styleSelected=true] If true, apply class selected to selected item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.styleSelected;
    /**
     * \@Input {boolean} [isLoading=true] If true, show loader at the end of the list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.isLoading;
    /**
     * \@Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis
     * @type {?}
     */
    StDropdownMenuComponent.prototype.offset;
    /**
     * \@Input {boolean} [openToLeft=false] For calculating all positions from the right corner
     * @type {?}
     */
    StDropdownMenuComponent.prototype.openToLeft;
    /**
     * \@Input {StDropdownVisualMode} [visualMode=StDropDownVisualMode.OPTION_LIST] It is needed to specify the styles applied to the list.
     *  By default is displayed as a normal option list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.visualMode;
    /**
     * \@Input {boolean} [keyBoardMove=false] It is needed to activate navigation through options using the keyboard
     * @type {?}
     */
    StDropdownMenuComponent.prototype.keyBoardMove;
    /**
     * \@output {StDropDownMenuItem} [change] Event emitted when user select an item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.change;
    /**
     * \@output {any} [scrollAtBottom] Event emitted when scroll reach the end of the list
     * @type {?}
     */
    StDropdownMenuComponent.prototype.scrollAtBottom;
    /**
     * \@output {StDropDownMenuItem} [itemMouseEnter] Event emitted when mouse is over an item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.itemMouseEnter;
    /**
     * \@output {StDropDownMenuItem} [itemMouseLeave] Event emitted when mouse leaves an item
     * @type {?}
     */
    StDropdownMenuComponent.prototype.itemMouseLeave;
    /** @type {?} */
    StDropdownMenuComponent.prototype.buttonElement;
    /** @type {?} */
    StDropdownMenuComponent.prototype.itemListElement;
    /** @type {?} */
    StDropdownMenuComponent.prototype.widthMenu;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype._itemHeight;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype._focusedOptionPos;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype._focusListenerFn;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    StDropdownMenuComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWRyb3Bkb3duLW1lbnUvc3QtZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFFSix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUNOLFNBQVMsRUFFVCxTQUFTLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUF1QixrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCN0g7SUF5REcsaUNBQW9CLEVBQWMsRUFBVSxFQUFxQixFQUFVLFFBQW1CO1FBQTFFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7UUFqRHJGLFdBQU0sR0FBWSxLQUFLLENBQUM7Ozs7UUFFeEIsVUFBSyxHQUFpRCxFQUFFLENBQUM7Ozs7O1FBR3pELGNBQVMsR0FBbUIsY0FBYyxDQUFDLFlBQVksQ0FBQzs7OztRQUV4RCxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7Ozs7UUFFOUIsaUJBQVksR0FBdUIsU0FBUyxDQUFDOzs7O1FBRTdDLHNCQUFpQixHQUFXLENBQUMsQ0FBQzs7OztRQUU5QixpQkFBWSxHQUFZLElBQUksQ0FBQzs7OztRQUU3QixrQkFBYSxHQUFZLElBQUksQ0FBQzs7OztRQUU5QixjQUFTLEdBQVksS0FBSyxDQUFDOzs7O1FBRTNCLFdBQU0sR0FBZ0IsRUFBRSxD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LDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIEFmdGVyVmlld0luaXQsXG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ29tcG9uZW50LFxuICAgRWxlbWVudFJlZixcbiAgIEV2ZW50RW1pdHRlcixcbiAgIEhvc3RMaXN0ZW5lcixcbiAgIElucHV0LFxuICAgT25DaGFuZ2VzLFxuICAgT25EZXN0cm95LFxuICAgT25Jbml0LFxuICAgT3V0cHV0LFxuICAgUmVuZGVyZXIyLFxuICAgU2ltcGxlQ2hhbmdlcyxcbiAgIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RQb3BPZmZzZXQsIFN0UG9wUGxhY2VtZW50IH0gZnJvbSAnLi4vc3QtcG9wL3N0LXBvcC5tb2RlbCc7XG5pbXBvcnQgeyBBUlJPV19LRVlfQ09ERSwgU3REcm9wRG93bk1lbnVHcm91cCwgU3REcm9wRG93bk1lbnVJdGVtLCBTdERyb3BEb3duVmlzdWFsTW9kZSB9IGZyb20gJy4vc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbRHJvcGRvd24gTWVudV1cbiAqIFRoaXMgZGlyZWN0aXZlIHNob3cgYSBkcm9wZG93biBtZW51IGxpc3QgaW4gZWxlbWVudCB0aGF0IHlvdSBhdHRhY2hcbiAqXG4gKlxuICogQG1vZGVsXG4gKlxuICogICBbTWVudSBpdGVtc10gey4vc3QtZHJvcGRvd24tbWVudS5pbnRlcmZhY2UudHMjU3REcm9wRG93bk1lbnVJdGVtfVxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtZHJvcGRvd24tbWVudSBbaXRlbXNdPVwibGlzdFwiIFthY3RpdmVdPVwic2hvd1wiIChjaGFuZ2UpPVwib25DaGFuZ2UoZXZlbnQpXCI+XG4gKiAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgKGNsaWNrKT1cInNob3cgPSAhc2hvd1wiPlNob3cgbWVudTwvYnV0dG9uPlxuICogPC9zdC1kcm9wZG93bi1tZW51PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1kcm9wZG93bi1tZW51JyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0RHJvcGRvd25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFthY3RpdmU9ZmFsc2VdIFNob3cgb3IgaGlkZSBsaXN0ICovXG4gICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBASW5wdXQge1N0RHJvcERvd25NZW51SXRlbVtdIHwgU3REcm9wRG93bk1lbnVHcm91cFtdfSBbaXRlbXM9XFxbXFxdXSBMaXN0IG9mIGl0ZW1zIG9yIGdyb3VwcyBvZiB0aGVtIHRvIHNob3cgaW4gbWVudSAqL1xuICAgQElucHV0KCkgaXRlbXM6IFN0RHJvcERvd25NZW51SXRlbVtdIHwgU3REcm9wRG93bk1lbnVHcm91cFtdID0gW107XG4gICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoICovXG4gICAvKiogQElucHV0IHtTdFBvcFBsYWNlbWVudH0gW3BsYWNlbWVudD1TdFBvcFBsYWNlbWVudC5CT1RUT01fU1RBUlRdIFBvc3NpYmxlIHBvc2l0aW9ucyBvZiBtZW51IHdpdGggcmVzcGVjdCBlbGVtZW50IHRvIGF0dGFjaCAqL1xuICAgQElucHV0KCkgcGxhY2VtZW50OiBTdFBvcFBsYWNlbWVudCA9IFN0UG9wUGxhY2VtZW50LkJPVFRPTV9TVEFSVDtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2VtcHR5TGlzdE1lc3NhZ2U9JyddIE1lc3NhZ2UgdG8gc2hvdyBpbiBjYXNlIG9mIGVtcHR5IGxpc3QgKi9cbiAgIEBJbnB1dCgpIGVtcHR5TGlzdE1lc3NhZ2U6IHN0cmluZyA9ICcnO1xuICAgLyoqIEBJbnB1dCB7U3REcm9wRG93bk1lbnVJdGVtIHwgdW5kZWZpbmVkfSBbc2VsZWN0ZWRJdGVtPXVuZGVmaW5lZF0gRGVmaW5lIHNlbGVjdGVkIGl0ZW0gd2l0aG91dCBwYXNzaW5nIGFzIHByb3BlcnR5ICovXG4gICBASW5wdXQoKSBzZWxlY3RlZEl0ZW06IFN0RHJvcERvd25NZW51SXRlbSA9IHVuZGVmaW5lZDtcbiAgIC8qKiBASW5wdXQge1N0RHJvcERvd25NZW51SXRlbSB8IHVuZGVmaW5lZH0gW2l0ZW1zQmVmb3JlU2Nyb2xsPXVuZGVmaW5lZF0gRGVmaW5lIHNlbGVjdGVkIGl0ZW0gd2l0aG91dCBwYXNzaW5nIGFzIHByb3BlcnR5ICovXG4gICBASW5wdXQoKSBpdGVtc0JlZm9yZVNjcm9sbDogbnVtYmVyID0gODtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFttb3ZlU2VsZWN0ZWQ9dHJ1ZV0gSWYgdHJ1ZSwgbW92ZSBzZWxlY3RlZCBpdGVtIHRvIHRvcCBpbiBtZW51IHdoZW4gb3BlbiAqL1xuICAgQElucHV0KCkgbW92ZVNlbGVjdGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgIC8qKiBASW5wdXQge2Jvb2xlYW59IFtzdHlsZVNlbGVjdGVkPXRydWVdIElmIHRydWUsIGFwcGx5IGNsYXNzIHNlbGVjdGVkIHRvIHNlbGVjdGVkIGl0ZW0gKi9cbiAgIEBJbnB1dCgpIHN0eWxlU2VsZWN0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2lzTG9hZGluZz10cnVlXSBJZiB0cnVlLCBzaG93IGxvYWRlciBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0ICovXG4gICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIC8qKiBASW5wdXQge1N0UG9wT2Zmc2V0fSBbb2Zmc2V0PXt4OiAwICwgeTogMH1dIEZvciBwb3NpdGlvbiB3aXRoIG9mZnNldCBpbiB4IG8geSBheGlzICovXG4gICBASW5wdXQoKSBvZmZzZXQ6IFN0UG9wT2Zmc2V0ID0geyB4OiAwLCB5OiAwIH07XG4gICAvKiogQElucHV0IHtib29sZWFufSBbb3BlblRvTGVmdD1mYWxzZV0gRm9yIGNhbGN1bGF0aW5nIGFsbCBwb3NpdGlvbnMgZnJvbSB0aGUgcmlnaHQgY29ybmVyICovXG4gICBASW5wdXQoKSBvcGVuVG9MZWZ0OiBib29sZWFuID0gZmFsc2U7XG4gICAvKiogQElucHV0IHtTdERyb3Bkb3duVmlzdWFsTW9kZX0gW3Zpc3VhbE1vZGU9U3REcm9wRG93blZpc3VhbE1vZGUuT1BUSU9OX0xJU1RdIEl0IGlzIG5lZWRlZCB0byBzcGVjaWZ5IHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgbGlzdC5cbiAgICAqICBCeSBkZWZhdWx0IGlzIGRpc3BsYXllZCBhcyBhIG5vcm1hbCBvcHRpb24gbGlzdFxuICAgICovXG4gICBASW5wdXQoKSB2aXN1YWxNb2RlOiBTdERyb3BEb3duVmlzdWFsTW9kZSA9IFN0RHJvcERvd25WaXN1YWxNb2RlLk9QVElPTl9MSVNUO1xuICAgLyoqIEBJbnB1dCB7Ym9vbGVhbn0gW2tleUJvYXJkTW92ZT1mYWxzZV0gSXQgaXMgbmVlZGVkIHRvIGFjdGl2YXRlIG5hdmlnYXRpb24gdGhyb3VnaCBvcHRpb25zIHVzaW5nIHRoZSBrZXlib2FyZFxuICAgICovXG4gICBASW5wdXQoKSBrZXlCb2FyZE1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgLyoqIEBvdXRwdXQge1N0RHJvcERvd25NZW51SXRlbX0gW2NoYW5nZV0gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgc2VsZWN0IGFuIGl0ZW0gKi9cbiAgIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+KCk7XG5cbiAgIC8qKiBAb3V0cHV0IHthbnl9IFtzY3JvbGxBdEJvdHRvbV0gRXZlbnQgZW1pdHRlZCB3aGVuIHNjcm9sbCByZWFjaCB0aGUgZW5kIG9mIHRoZSBsaXN0ICovXG4gICBAT3V0cHV0KCkgc2Nyb2xsQXRCb3R0b206IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAvKiogQG91dHB1dCB7U3REcm9wRG93bk1lbnVJdGVtfSBbaXRlbU1vdXNlRW50ZXJdIEV2ZW50IGVtaXR0ZWQgd2hlbiBtb3VzZSBpcyBvdmVyIGFuIGl0ZW0gKi9cbiAgIEBPdXRwdXQoKSBpdGVtTW91c2VFbnRlcjogRXZlbnRFbWl0dGVyPFN0RHJvcERvd25NZW51SXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFN0RHJvcERvd25NZW51SXRlbT4oKTtcbiAgIC8qKiBAb3V0cHV0IHtTdERyb3BEb3duTWVudUl0ZW19IFtpdGVtTW91c2VMZWF2ZV0gRXZlbnQgZW1pdHRlZCB3aGVuIG1vdXNlIGxlYXZlcyBhbiBpdGVtICovXG4gICBAT3V0cHV0KCkgaXRlbU1vdXNlTGVhdmU6IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdERyb3BEb3duTWVudUl0ZW0+KCk7XG5cbiAgIEBWaWV3Q2hpbGQoJ2J1dHRvbklkJywgeyBzdGF0aWM6IGZhbHNlIH0pIGJ1dHRvbkVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICBAVmlld0NoaWxkKCdpdGVtTGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KSBpdGVtTGlzdEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgIHdpZHRoTWVudTogc3RyaW5nID0gJzBweCc7XG5cbiAgIHByaXZhdGUgX2l0ZW1IZWlnaHQ6IG51bWJlciA9IDQyO1xuICAgcHJpdmF0ZSBfZm9jdXNlZE9wdGlvblBvczogbnVtYmVyID0gLTE7XG4gICBwcml2YXRlIF9mb2N1c0xpc3RlbmVyRm46ICgpID0+IHZvaWQ7XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5rZXlCb2FyZE1vdmUpIHtcbiAgICAgICAgIHRoaXMuX2ZvY3VzTGlzdGVuZXJGbiA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdrZXlkb3duJywgdGhpcy5hcnJvd0tleUxpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgfVxuXG4gICBnZXQgY29tcG9uZW50SWQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICBjb25zdCBpZCA9ICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgIHJldHVybiBpZCAhPT0gdW5kZWZpbmVkICYmIGlkICE9PSBudWxsID8gaWQgOiBudWxsO1xuICAgfVxuXG4gICBnZXQgbWVudUlkKCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SWQgIT09IG51bGwgPyBgJHt0aGlzLmNvbXBvbmVudElkfS1tZW51YCA6IG51bGw7XG4gICB9XG5cbiAgIGdldCBpc0l0ZW1Hcm91cCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRHJvcERvd25Hcm91cCh0aGlzLml0ZW1zKTtcbiAgIH1cblxuICAgZ2V0IG1lbnVNYXhIZWlnaHQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zQmVmb3JlU2Nyb2xsID8gYCR7dGhpcy5faXRlbUhlaWdodCAqIHRoaXMuaXRlbXNCZWZvcmVTY3JvbGx9cHhgIDogbnVsbDtcbiAgIH1cblxuICAgZ2V0IGxpc3RDbGFzc2VzKCk6IGFueSB7XG4gICAgICByZXR1cm4geyAnc3QtZHJvcGRvd24tbWVudSc6IHRydWUsICdhY3RpdmUnOiB0aGlzLmFjdGl2ZSwgJ21lbnUtbGlzdCc6IHRoaXMuZGlzcGxheUFzTWVudUxpc3QoKSB9O1xuICAgfVxuXG4gICBnZXRJdGVtSWQodmFsdWU6IGFueSB8IHVuZGVmaW5lZCk6IHN0cmluZyB8IG51bGwge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50SWQgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCA/IGAke3RoaXMuY29tcG9uZW50SWR9LW9wdGlvbi0ke3RoaXMuZ2V0SXRlbVZhbHVlTWVyZ2VkKHZhbHVlKX1gIDogbnVsbDtcbiAgIH1cblxuICAgaXNEcm9wRG93bkdyb3VwKHZhbHVlOiBTdERyb3BEb3duTWVudUl0ZW1bXSB8IFN0RHJvcERvd25NZW51R3JvdXBbXSk6IHZhbHVlIGlzIFN0RHJvcERvd25NZW51R3JvdXBbXSB7XG4gICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCAmJiAoPFN0RHJvcERvd25NZW51R3JvdXA+dmFsdWVbMF0pLnRpdGxlICE9PSB1bmRlZmluZWQ7XG4gICB9XG5cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgIH1cblxuICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5hY3RpdmUgJiYgY2hhbmdlcy5hY3RpdmUuY3VycmVudFZhbHVlICYmIHRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMubW92ZVNlbGVjdGVkKSB7XG4gICAgICAgICAvLyBPbmx5IGNhbiBkbyB0aGlzIGZ1bmN0aW9uYWxpdHkgd2l0aCB0aW1lb3V0IGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciBhbmd1bGFyIHRvIGxvYWQgbmV3IERPTVxuICAgICAgICAgLy8gd2l0aCBpdGVtcyBiZWZvcmUgbW92ZSBzY3JvbGxcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUxpc3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICBjb25zdCBwYXJlbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5pdGVtTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgICAgIGNvbnN0IGxpc3RPZkVsZW1lbnRzOiBhbnkgPSBwYXJlbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgIGlmIChsaXN0T2ZFbGVtZW50cyAmJiBsaXN0T2ZFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gKGxpc3RPZkVsZW1lbnRzLml0ZW0oMCkgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgcGFyZW50LnNjcm9sbFRvcCA9IHRhcmdldC5vZmZzZXRUb3AgLSBwYXJlbnQub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy5hY3RpdmUgJiYgIWNoYW5nZXMuYWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZE9wdGlvblBvcyA9IC0xO1xuICAgICAgICAgfVxuICAgICAgfVxuICAgfVxuXG4gICBvbkNoYW5nZSh2YWx1ZTogU3REcm9wRG93bk1lbnVJdGVtKTogdm9pZCB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgIH1cblxuICAgb25IYW5kbGVTY3JvbGwoKTogdm9pZCB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5pdGVtTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuc2Nyb2xsVG9wID09PSBlbGVtZW50LmNsaWVudEhlaWdodCAmJiAhdGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgIHRoaXMuc2Nyb2xsQXRCb3R0b20uZW1pdCgpO1xuICAgICAgfVxuICAgfVxuXG4gICBvbk1vdXNlRW50ZXIoaXRlbTogU3REcm9wRG93bk1lbnVJdGVtKTogdm9pZCB7XG4gICAgICB0aGlzLml0ZW1Nb3VzZUVudGVyLmVtaXQoaXRlbSk7XG4gICB9XG5cbiAgIG9uTW91c2VMZWF2ZShpdGVtOiBTdERyb3BEb3duTWVudUl0ZW0pOiB2b2lkIHtcbiAgICAgIHRoaXMuaXRlbU1vdXNlTGVhdmUuZW1pdChpdGVtKTtcbiAgIH1cblxuICAgZGlzcGxheUFzTWVudUxpc3QoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy52aXN1YWxNb2RlID09PSBTdERyb3BEb3duVmlzdWFsTW9kZS5NRU5VX0xJU1Q7XG4gICB9XG5cbiAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmxvYWQnKVxuICAgdXBkYXRlV2lkdGgoKTogdm9pZCB7XG4gICAgICBjb25zdCBidXR0b246IEhUTUxFbGVtZW50ID0gdGhpcy5idXR0b25FbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgIGlmIChidXR0b24uY2hpbGRyZW4gJiYgYnV0dG9uLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGhNZW51ID0gYnV0dG9uLmNoaWxkcmVuWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4JztcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoTWVudSA9IGJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArICdweCc7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG5cbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5fZm9jdXNMaXN0ZW5lckZuKSB7XG4gICAgICAgICB0aGlzLl9mb2N1c0xpc3RlbmVyRm4oKTtcbiAgICAgIH1cbiAgIH1cblxuXG4gICBwcml2YXRlIGdldEl0ZW1WYWx1ZU1lcmdlZCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xccysvZywgJ18nKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBnZXRTZWxlY3RlZEl0ZW1Qb3NpdGlvbigpOiBudW1iZXIge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtICYmIHRoaXMuaXRlbXMpIHtcbiAgICAgICAgIGxldCBfaXRlbXM6IFN0RHJvcERvd25NZW51SXRlbVtdID0gW107XG4gICAgICAgICBpZiAodGhpcy5pc0Ryb3BEb3duR3JvdXAodGhpcy5pdGVtcykpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbTogU3REcm9wRG93bk1lbnVJdGVtIHwgU3REcm9wRG93bk1lbnVHcm91cCkgPT4ge1xuICAgICAgICAgICAgICAgaWYgKCg8U3REcm9wRG93bk1lbnVHcm91cD4gaXRlbSkuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVtcy5wdXNoKC4uLig8U3REcm9wRG93bk1lbnVHcm91cD4gaXRlbSkuaXRlbXMpO1xuICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVtcy5wdXNoKCg8U3REcm9wRG93bk1lbnVJdGVtPiBpdGVtKSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfaXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgICAgICAgfVxuICAgICAgICAgcmV0dXJuIF9pdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnZhbHVlID09PSB0aGlzLnNlbGVjdGVkSXRlbS52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGFycm93S2V5TGlzdGVuZXIoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtUG9zaXRpb24gPSB0aGlzLmdldFNlbGVjdGVkSXRlbVBvc2l0aW9uKCk7XG4gICAgICBpZiAoc2VsZWN0ZWRJdGVtUG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgdGhpcy5fZm9jdXNlZE9wdGlvblBvcyA9IHNlbGVjdGVkSXRlbVBvc2l0aW9uO1xuICAgICAgfVxuICAgICAgbGV0IG5leHRGb2N1czogbnVtYmVyO1xuICAgICAgaWYgKGUuY29kZSA9PT0gQVJST1dfS0VZX0NPREUuQVJST1dfRE9XTiB8fCBlLmNvZGUgPT09IEFSUk9XX0tFWV9DT0RFLkFSUk9XX1VQKSB7XG4gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgY29uc3Qgb3B0aW9uczogSFRNTExJRWxlbWVudFtdID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdC1kcm9wZG93bi1tZW51LWl0ZW0nKTtcbiAgICAgICAgIG5leHRGb2N1cyA9IGUuY29kZSA9PT0gQVJST1dfS0VZX0NPREUuQVJST1dfRE9XTiB8fCB0aGlzLl9mb2N1c2VkT3B0aW9uUG9zID09PSAtMSA/IDEgOiAtMTtcbiAgICAgICAgIHRoaXMuX2ZvY3VzZWRPcHRpb25Qb3MgPSB0aGlzLl9mb2N1c2VkT3B0aW9uUG9zICsgbmV4dEZvY3VzO1xuICAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRPcHRpb25Qb3MgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkT3B0aW9uUG9zID0gb3B0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9mb2N1c2VkT3B0aW9uUG9zID4gb3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkT3B0aW9uUG9zID0gMDtcbiAgICAgICAgIH1cbiAgICAgICAgIGlmIChvcHRpb25zW3RoaXMuX2ZvY3VzZWRPcHRpb25Qb3NdKSB7XG4gICAgICAgICAgICBvcHRpb25zW3RoaXMuX2ZvY3VzZWRPcHRpb25Qb3NdLmZvY3VzKCk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgfVxufVxuIl19