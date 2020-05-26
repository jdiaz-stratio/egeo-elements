/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-menu/st-menu-options/st-menu-options.component.ts
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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { StMenuPosition } from './../st-menu.model';
/**
 * @template T
 */
var StMenuOptionsComponent = /** @class */ (function () {
    function StMenuOptionsComponent(_cd) {
        this._cd = _cd;
        this.position = StMenuPosition.right;
        this.level = 0;
        this.animate = true;
        this.searchBox = new EventEmitter();
        this.selectedOption = new EventEmitter();
        this.initialized = false;
        this.scrollTop = 0;
        this._scrollSubject = new Subject();
        this._SCROLL_SPEED = 120; // px per second
        // px per second
        this._SCROLL_SPEED_MILLIS = this._SCROLL_SPEED / 1000; // px per millisecond
    }
    /**
     * @return {?}
     */
    StMenuOptionsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dynamicHeight) {
            this._checkScrollButtons();
        }
        this.initialized = true;
        this._cd.detectChanges();
        this._scrollSubscription = this._scrollSubject
            .pipe(debounceTime(50))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this._checkScrollButtons(); }));
    };
    /**
     * @return {?}
     */
    StMenuOptionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        cancelAnimationFrame(this._scrollAnimationHandler);
        if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();
        }
    };
    /**
     * Set the submenu position when an option is hovered
     *
     * @param event MouseEnter event when an option is hovered
     * @param item Hovered item of the list
     */
    /**
     * Set the submenu position when an option is hovered
     *
     * @param {?} event MouseEnter event when an option is hovered
     * @param {?} item Hovered item of the list
     * @return {?}
     */
    StMenuOptionsComponent.prototype.showMenu = /**
     * Set the submenu position when an option is hovered
     *
     * @param {?} event MouseEnter event when an option is hovered
     * @param {?} item Hovered item of the list
     * @return {?}
     */
    function (event, item) {
        if (this.openedItem !== item && (!this.activeOption || this.activeOption.value !== item)) {
            this.openedItem = item;
            if (item.subMenus) {
                /** @type {?} */
                var target = (/** @type {?} */ (event.target));
                this.menuPosition = target.offsetTop;
                if (this.dynamicHeight) {
                    this.maxHeightChild = window.innerHeight - target.getBoundingClientRect().top - 30;
                }
            }
        }
    };
    /**
     * Saves current scroll position and check the scroll buttons state
     */
    /**
     * Saves current scroll position and check the scroll buttons state
     * @return {?}
     */
    StMenuOptionsComponent.prototype.onScroll = /**
     * Saves current scroll position and check the scroll buttons state
     * @return {?}
     */
    function () {
        this.scrollTop = this.childListElement.nativeElement.scrollTop;
        if (this.dynamicHeight) {
            this._scrollSubject.next();
        }
    };
    /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param index
     * @param item
     */
    /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    StMenuOptionsComponent.prototype.trackByFn = /**
     * Generates a ngFor trackBy id from StMenuModel name and icon values
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.name + (item.icon || '');
    };
    /**
     * Starts a scroll animation frame
     * @param reverse
     */
    /**
     * Starts a scroll animation frame
     * @param {?} reverse
     * @return {?}
     */
    StMenuOptionsComponent.prototype.scrollTo = /**
     * Starts a scroll animation frame
     * @param {?} reverse
     * @return {?}
     */
    function (reverse) {
        var _this = this;
        /** @type {?} */
        var startScrollAnimationTime = new Date().getTime();
        // initial animation time in milliseconds
        /** @type {?} */
        var startScrollAnimationPosition = this.childListElement.nativeElement.scrollTop;
        this.openedItem = null;
        this._scrollAnimationHandler = requestAnimationFrame((/**
         * @return {?}
         */
        function () { return _this._scrollAnimation(reverse, startScrollAnimationTime, startScrollAnimationPosition); }));
    };
    /**
     * Stop current scroll animation frame
     */
    /**
     * Stop current scroll animation frame
     * @return {?}
     */
    StMenuOptionsComponent.prototype.stopScroll = /**
     * Stop current scroll animation frame
     * @return {?}
     */
    function () {
        cancelAnimationFrame(this._scrollAnimationHandler);
    };
    /**
     * Clear the search input value
     */
    /**
     * Clear the search input value
     * @return {?}
     */
    StMenuOptionsComponent.prototype.removeSearch = /**
     * Clear the search input value
     * @return {?}
     */
    function () {
        this.searchFormControl.setValue('');
    };
    /**
     * Check the selected option and emits if it's valid
     * @param event
     * @param item
     */
    /**
     * Check the selected option and emits if it's valid
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    StMenuOptionsComponent.prototype.onSelectOption = /**
     * Check the selected option and emits if it's valid
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        if ((!item.subMenus || !item.subMenus.length) && (!this.activeOption || this.activeOption !== item.value)) {
            this.selectedOption.emit(item);
        }
        else {
            // Prevents close menu
            event.stopPropagation();
        }
    };
    /**
     * Generates menu item id
     * @param item
     */
    /**
     * Generates menu item id
     * @param {?} item
     * @return {?}
     */
    StMenuOptionsComponent.prototype.getItemId = /**
     * Generates menu item id
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return (item.icon || '') + item.name.replace(/\W/g, '_') + '-option';
    };
    /**
     * Recursive scroll animation frame method
     * @param reverse sense of the scroll animation
     */
    /**
     * Recursive scroll animation frame method
     * @private
     * @param {?} reverse sense of the scroll animation
     * @param {?} startScrollAnimationTime
     * @param {?} startScrollAnimationPosition
     * @return {?}
     */
    StMenuOptionsComponent.prototype._scrollAnimation = /**
     * Recursive scroll animation frame method
     * @private
     * @param {?} reverse sense of the scroll animation
     * @param {?} startScrollAnimationTime
     * @param {?} startScrollAnimationPosition
     * @return {?}
     */
    function (reverse, startScrollAnimationTime, startScrollAnimationPosition) {
        var _this = this;
        /** @type {?} */
        var current = new Date().getTime();
        /** @type {?} */
        var runtime = current - startScrollAnimationTime;
        // initialPosition in px + (reverse: negative or positive sense * millis from animation start * px per millis)
        /** @type {?} */
        var position = startScrollAnimationPosition + ((reverse ? 1 : -1) * runtime * this._SCROLL_SPEED_MILLIS);
        this.childListElement.nativeElement.scrollTo(0, position);
        this._scrollAnimationHandler = requestAnimationFrame((/**
         * @return {?}
         */
        function () { return _this._scrollAnimation(reverse, startScrollAnimationTime, startScrollAnimationPosition); }));
    };
    /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     */
    /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     * @private
     * @return {?}
     */
    StMenuOptionsComponent.prototype._checkScrollButtons = /**
     * Enable or disable the top and bottom scroll buttons depending of the scrollList position
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollList = this.childListElement.nativeElement;
        this.scrollTopEnabled = scrollList.scrollTop > 0;
        this.scrollBottomEnabled = scrollList.getBoundingClientRect().height + scrollList.scrollTop < scrollList.scrollHeight - 1;
        this._cd.markForCheck();
    };
    StMenuOptionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-menu-options',
                    template: "<div class=\"st-menu-options\"\n   [style.marginTop.px]=\"marginTop\"\n   [ngClass]=\"{\n      'st-menu-options--left': position === 'left',\n      'st-menu-options--initilized': initialized\n   }\">\n\n   <div class=\"scroll-button scroll-button--top\"\n      *ngIf=\"dynamicHeight\"\n      [style.opacity]=\"scrollTopEnabled ? 1 : 0\"\n      (mouseover)=\"scrollTo(false)\"\n      (mouseout)=\"stopScroll()\">\n      <span class=\"icon-arrow2_up\"></span>\n   </div>\n\n   <div class=\"st-menu-options__container\"\n    [ngClass]=\"{\n      'st-menu-options__container--animation': animate && level === 0\n    }\">\n    <ul class=\"st-menu-options__list st-custom-scrollbar\"\n      #childList\n      [style.maxHeight.px]=\"maxHeight\"\n      (scroll)=\"onScroll()\">\n\n      <li class=\"st-menu-options__item st-menu-options__search\" *ngIf=\"searchFormControl\">\n        <input class=\"st-menu-options__input\"\n          [attr.id]=\"qaTag + '-search'\"\n          type=\"text\"\n          autocomplete=\"off\"\n          [formControl]=\"searchFormControl\"\n          [placeholder]=\"searchLabel\" />\n        <span class=\"st-menu-options__delete icon-cross\"\n          (click)=\"removeSearch()\"\n          *ngIf=\"searchFormControl.value.length\"></span>\n      </li>\n\n      <li class=\"st-menu-options__item\"\n        *ngFor=\"let item of menuOptions; let i = index; trackBy: trackByFn\"\n        [ngClass]=\"{\n          'st-menu-options__item--active' : openedItem === item,\n          'disabled' : (activeOption && activeOption === item.value) || item.disabled,\n          'st-menu-options__item--success' : item.status === 'success',\n          'st-menu-options__item--warning' : item.status === 'warning',\n          'st-menu-options__item--critical' : item.status === 'critical',\n          'separator': item.separator\n        }\"\n        [attr.id]=\"getItemId(item)\"\n        (click)=\"!item.disabled && onSelectOption($event, item)\"\n        (mouseenter)=\"showMenu($event, item)\">\n\n        <div class=\"item-content\">\n          <i *ngIf=\"item.icon\" [ngClass]=\"item.icon\" class=\"item-icon\"></i>\n          <span class=\"label\">{{item.name}}</span>\n          <i class=\"icon icon-arrow2_right has-submenu\" *ngIf=\"item.subMenus && item.subMenus.length\"></i>\n        </div>\n\n        <st-menu-options\n          *ngIf=\"item.subMenus && item.subMenus.length && openedItem === item\"\n          [style.top.px]=\"menuPosition - scrollTop\"\n          [menuOptions]=\"item.subMenus\"\n          [position]=\"position\"\n          [maxHeight]=\"maxHeightChild\"\n          [activeOption]=\"activeOption\"\n          [dynamicHeight]=\"dynamicHeight\"\n          [level]=\"level + 1\"\n          (selectedOption)=\"selectedOption.emit($event)\"\n          class=\"st-menu-options__submenu\">\n        </st-menu-options>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"scroll-button scroll-button--bottom\"\n    *ngIf=\"dynamicHeight\"\n    [style.opacity]=\"scrollBottomEnabled ? 1 : 0\"\n    (mouseover)=\"scrollTo(true)\"\n    (mouseout)=\"stopScroll()\">\n    <span class=\"icon-arrow2_down\"></span>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-menu-options{background-color:#fff;font-size:.938rem;left:100%;position:absolute;margin-bottom:2.5rem;visibility:hidden;top:100%;-webkit-transform:translate3d(0,0,0)}.st-menu-options--left{right:100%;left:auto}.st-menu-options--initilized{visibility:visible}.st-menu-options__container{overflow:hidden;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,.5);border-radius:5px}.st-menu-options__container--animation{-webkit-animation:.25s ease-out fadeInFromNone;animation:.25s ease-out fadeInFromNone}.st-menu-options__search{border-bottom:1px solid #cfcfcf;margin:0;padding:0;position:relative}.st-menu-options__input{outline:0;width:100%;min-width:12.5rem}.st-menu-options__delete{position:absolute;right:.625rem;cursor:pointer;top:.6875rem}.st-menu-options__submenu{position:absolute;width:100%;left:0;top:0;margin-left:0}.st-menu-options__submenu.active{visibility:visible}.st-menu-options__list{list-style:none;top:0;left:0;width:100%;background:#fff;min-width:100%;overflow-y:auto;overflow-x:hidden}.st-menu-options__item{color:#585858;cursor:pointer;font-size:.875rem;justify-content:space-between;padding:.75rem .5rem .6875rem 1.25rem;-webkit-tap-highlight-color:transparent}.st-menu-options__item>div{display:flex;flex-direction:row}.st-menu-options__item>div .label{padding-right:.75rem;white-space:nowrap;font-size:.9375rem;line-height:1.25rem}.st-menu-options__item .has-submenu{font-size:.6875rem;margin-top:5px;margin-left:auto}.st-menu-options__item .item-icon{font-size:.8125rem;margin-right:.375rem;margin-top:.1875rem;color:#a0a0a0}.st-menu-options__item>span{white-space:nowrap}.st-menu-options__item--active{background-color:#e6f1fc;visibility:visible}.st-menu-options__item--active>.item-content .icon.has-submenu,.st-menu-options__item--active>.item-content .item-icon{color:var(--egeo-theme-brand,#37b5e4)}.st-menu-options__item--success,.st-menu-options__item--success>.item-content .item-icon{color:#0776df}.st-menu-options__item--warning,.st-menu-options__item--warning>.item-content .item-icon{color:#fa932f}.st-menu-options__item--critical,.st-menu-options__item--critical>.item-content .item-icon{color:#df2935}.st-menu-options__item.disabled{color:#b8b8b8!important}.st-menu-options__item.separator{border-top:1px solid #cdd6df}.scroll-button{background:#fff;color:#6c7b8b;border:1px solid #cfcfcf;font-size:.625rem;margin-left:-1px;padding:1px 0 0;position:absolute;text-align:center;width:calc(100% + 2px);z-index:1}.scroll-button--top{top:-.875rem}.scroll-button--bottom{bottom:-.9375rem}@-webkit-keyframes fadeInFromNone{0%{max-height:0}100%{display:block;max-height:18.75rem}}@keyframes fadeInFromNone{0%{max-height:0}100%{display:block;max-height:18.75rem}}"]
                }] }
    ];
    /** @nocollapse */
    StMenuOptionsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    StMenuOptionsComponent.propDecorators = {
        maxHeight: [{ type: Input }],
        dynamicHeight: [{ type: Input }],
        activeOption: [{ type: Input }],
        menuOptions: [{ type: Input }],
        position: [{ type: Input }],
        searchFormControl: [{ type: Input }],
        searchLabel: [{ type: Input }],
        level: [{ type: Input }],
        marginTop: [{ type: Input }],
        animate: [{ type: Input }],
        qaTag: [{ type: Input }],
        searchBox: [{ type: Output }],
        selectedOption: [{ type: Output }],
        childListElement: [{ type: ViewChild, args: ['childList', { static: false },] }]
    };
    return StMenuOptionsComponent;
}());
export { StMenuOptionsComponent };
if (false) {
    /** @type {?} */
    StMenuOptionsComponent.prototype.maxHeight;
    /** @type {?} */
    StMenuOptionsComponent.prototype.dynamicHeight;
    /** @type {?} */
    StMenuOptionsComponent.prototype.activeOption;
    /** @type {?} */
    StMenuOptionsComponent.prototype.menuOptions;
    /** @type {?} */
    StMenuOptionsComponent.prototype.position;
    /** @type {?} */
    StMenuOptionsComponent.prototype.searchFormControl;
    /** @type {?} */
    StMenuOptionsComponent.prototype.searchLabel;
    /** @type {?} */
    StMenuOptionsComponent.prototype.level;
    /** @type {?} */
    StMenuOptionsComponent.prototype.marginTop;
    /** @type {?} */
    StMenuOptionsComponent.prototype.animate;
    /** @type {?} */
    StMenuOptionsComponent.prototype.qaTag;
    /** @type {?} */
    StMenuOptionsComponent.prototype.searchBox;
    /** @type {?} */
    StMenuOptionsComponent.prototype.selectedOption;
    /** @type {?} */
    StMenuOptionsComponent.prototype.childListElement;
    /** @type {?} */
    StMenuOptionsComponent.prototype.openedItem;
    /** @type {?} */
    StMenuOptionsComponent.prototype.menuPosition;
    /** @type {?} */
    StMenuOptionsComponent.prototype.maxHeightChild;
    /** @type {?} */
    StMenuOptionsComponent.prototype.scrollTopEnabled;
    /** @type {?} */
    StMenuOptionsComponent.prototype.scrollBottomEnabled;
    /** @type {?} */
    StMenuOptionsComponent.prototype.initialized;
    /** @type {?} */
    StMenuOptionsComponent.prototype.scrollTop;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._scrollAnimationHandler;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._scrollSubject;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._scrollSubscription;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._SCROLL_SPEED;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._SCROLL_SPEED_MILLIS;
    /**
     * @type {?}
     * @private
     */
    StMenuOptionsComponent.prototype._cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbWVudS1vcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbWVudS9zdC1tZW51LW9wdGlvbnMvc3QtbWVudS1vcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBRUosdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBZSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQUVqRTtJQXlDRyxnQ0FBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3QmpDLGFBQVEsR0FBbUIsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUdoRCxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFHdkIsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELG1CQUFjLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBU3JGLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFJckIsbUJBQWMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUdyQyxrQkFBYSxHQUFXLEdBQUcsQ0FBQyxDQUFnQyxnQkFBZ0I7O1FBQzVFLHlCQUFvQixHQUFXLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUcscUJBQXFCO0lBRXBELENBQUM7Ozs7SUFFL0MsZ0RBQWU7OztJQUFmO1FBQUEsaUJBU0M7UUFSRSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsY0FBYzthQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDekM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0kseUNBQVE7Ozs7Ozs7SUFBZixVQUFnQixLQUFpQixFQUFFLElBQW9CO1FBQ3BELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDdkYsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOztvQkFDVixNQUFNLEdBQWdCLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQWU7Z0JBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDckMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQkFDckY7YUFDSDtTQUNIO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLHlDQUFROzs7O0lBQWY7UUFDRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQy9ELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSSwwQ0FBUzs7Ozs7O0lBQWhCLFVBQWlCLEtBQWEsRUFBRSxJQUFvQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNJLHlDQUFROzs7OztJQUFmLFVBQWdCLE9BQWdCO1FBQWhDLGlCQUtDOztZQUpRLHdCQUF3QixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFOzs7WUFDL0MsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxTQUFTO1FBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxxQkFBcUI7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFHLDRCQUE0QixDQUFDLEVBQXZGLENBQXVGLEVBQUMsQ0FBQztJQUN2SixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksMkNBQVU7Ozs7SUFBakI7UUFDRSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0ksNkNBQVk7Ozs7SUFBbkI7UUFDRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksK0NBQWM7Ozs7OztJQUFyQixVQUFzQixLQUFZLEVBQUUsSUFBb0I7UUFDckQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDeEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNKLHNCQUFzQjtZQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSSwwQ0FBUzs7Ozs7SUFBaEIsVUFBaUIsSUFBb0I7UUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7Ozs7SUFDSyxpREFBZ0I7Ozs7Ozs7O0lBQXhCLFVBQXlCLE9BQWdCLEVBQUcsd0JBQWdDLEVBQUUsNEJBQW9DO1FBQWxILGlCQU9DOztZQU5RLE9BQU8sR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFDdEMsT0FBTyxHQUFXLE9BQU8sR0FBRyx3QkFBd0I7OztZQUVwRCxRQUFRLEdBQVcsNEJBQTRCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDbEgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxxQkFBcUI7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLDRCQUE0QixDQUFDLEVBQXRGLENBQXNGLEVBQUMsQ0FBQztJQUN0SixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLG9EQUFtQjs7Ozs7SUFBM0I7O1lBQ1MsVUFBVSxHQUFnQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYTtRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQzFILElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBdktILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix1bUdBQStDO29CQUUvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2pEOzs7O2dCQW5CRSxpQkFBaUI7Ozs0QkFzQmhCLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFFTCxNQUFNO2lDQUNOLE1BQU07bUNBRU4sU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O0lBaUoxQyw2QkFBQztDQUFBLEFBeEtELElBd0tDO1NBbEtZLHNCQUFzQjs7O0lBRWhDLDJDQUEyQjs7SUFDM0IsK0NBQWdDOztJQUNoQyw4Q0FBMkI7O0lBQzNCLDZDQUE0Qzs7SUFDNUMsMENBQXlEOztJQUN6RCxtREFBd0M7O0lBQ3hDLDZDQUE2Qjs7SUFDN0IsdUNBQTJCOztJQUMzQiwyQ0FBMkI7O0lBQzNCLHlDQUFpQzs7SUFDakMsdUNBQXVCOztJQUV2QiwyQ0FBdUU7O0lBQ3ZFLGdEQUE0Rjs7SUFFNUYsa0RBQW1GOztJQUVuRiw0Q0FBa0M7O0lBQ2xDLDhDQUE0Qjs7SUFDNUIsZ0RBQThCOztJQUM5QixrREFBaUM7O0lBQ2pDLHFEQUFvQzs7SUFDcEMsNkNBQW9DOztJQUNwQywyQ0FBNkI7Ozs7O0lBRTdCLHlEQUF3Qzs7Ozs7SUFFeEMsZ0RBQXNEOzs7OztJQUN0RCxxREFBMEM7Ozs7O0lBRTFDLCtDQUE2Qzs7Ozs7SUFDN0Msc0RBQTBFOzs7OztJQUU5RCxxQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaW1wb3J0IHtcbiAgIEFmdGVyVmlld0luaXQsXG4gICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgIENoYW5nZURldGVjdG9yUmVmLFxuICAgQ29tcG9uZW50LFxuICAgRWxlbWVudFJlZixcbiAgIEV2ZW50RW1pdHRlcixcbiAgIElucHV0LFxuICAgT3V0cHV0LFxuICAgVmlld0NoaWxkLFxuICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN0TWVudU1vZGVsLCBTdE1lbnVQb3NpdGlvbiB9IGZyb20gJy4vLi4vc3QtbWVudS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1tZW51LW9wdGlvbnMnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LW1lbnUtb3B0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1tZW51LW9wdGlvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFN0TWVudU9wdGlvbnNDb21wb25lbnQ8VD4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gICBASW5wdXQoKSBtYXhIZWlnaHQ6IG51bWJlcjtcbiAgIEBJbnB1dCgpIGR5bmFtaWNIZWlnaHQ6IGJvb2xlYW47XG4gICBASW5wdXQoKSBhY3RpdmVPcHRpb246IGFueTtcbiAgIEBJbnB1dCgpIG1lbnVPcHRpb25zOiBBcnJheTxTdE1lbnVNb2RlbDxUPj47XG4gICBASW5wdXQoKSBwb3NpdGlvbjogU3RNZW51UG9zaXRpb24gPSBTdE1lbnVQb3NpdGlvbi5yaWdodDtcbiAgIEBJbnB1dCgpIHNlYXJjaEZvcm1Db250cm9sOiBGb3JtQ29udHJvbDtcbiAgIEBJbnB1dCgpIHNlYXJjaExhYmVsOiBzdHJpbmc7XG4gICBASW5wdXQoKSBsZXZlbDogbnVtYmVyID0gMDtcbiAgIEBJbnB1dCgpIG1hcmdpblRvcDogbnVtYmVyO1xuICAgQElucHV0KCkgYW5pbWF0ZTogYm9vbGVhbiA9IHRydWU7XG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuXG4gICBAT3V0cHV0KCkgc2VhcmNoQm94OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgQE91dHB1dCgpIHNlbGVjdGVkT3B0aW9uOiBFdmVudEVtaXR0ZXI8U3RNZW51TW9kZWw8VD4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdE1lbnVNb2RlbDxUPj4oKTtcblxuICAgQFZpZXdDaGlsZCgnY2hpbGRMaXN0Jywge3N0YXRpYzogZmFsc2V9KSBjaGlsZExpc3RFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICAgcHVibGljIG9wZW5lZEl0ZW06IFN0TWVudU1vZGVsPFQ+O1xuICAgcHVibGljIG1lbnVQb3NpdGlvbjogbnVtYmVyO1xuICAgcHVibGljIG1heEhlaWdodENoaWxkOiBudW1iZXI7XG4gICBwdWJsaWMgc2Nyb2xsVG9wRW5hYmxlZDogYm9vbGVhbjtcbiAgIHB1YmxpYyBzY3JvbGxCb3R0b21FbmFibGVkOiBib29sZWFuO1xuICAgcHVibGljIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG4gICBwdWJsaWMgc2Nyb2xsVG9wOiBudW1iZXIgPSAwO1xuXG4gICBwcml2YXRlIF9zY3JvbGxBbmltYXRpb25IYW5kbGVyOiBudW1iZXI7XG5cbiAgIHByaXZhdGUgX3Njcm9sbFN1YmplY3Q6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICAgcHJpdmF0ZSBfc2Nyb2xsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgIHByaXZhdGUgcmVhZG9ubHkgX1NDUk9MTF9TUEVFRDogbnVtYmVyID0gMTIwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHggcGVyIHNlY29uZFxuICAgcHJpdmF0ZSByZWFkb25seSBfU0NST0xMX1NQRUVEX01JTExJUzogbnVtYmVyID0gdGhpcy5fU0NST0xMX1NQRUVEIC8gMTAwMDsgICAvLyBweCBwZXIgbWlsbGlzZWNvbmRcblxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuZHluYW1pY0hlaWdodCkge1xuICAgICAgICAgdGhpcy5fY2hlY2tTY3JvbGxCdXR0b25zKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbiA9IHRoaXMuX3Njcm9sbFN1YmplY3RcbiAgICAgICAgIC5waXBlKGRlYm91bmNlVGltZSg1MCkpXG4gICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2NoZWNrU2Nyb2xsQnV0dG9ucygpKTtcbiAgIH1cblxuICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9zY3JvbGxBbmltYXRpb25IYW5kbGVyKTtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgIHRoaXMuX3Njcm9sbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIFNldCB0aGUgc3VibWVudSBwb3NpdGlvbiB3aGVuIGFuIG9wdGlvbiBpcyBob3ZlcmVkXG4gICAgKlxuICAgICogQHBhcmFtIGV2ZW50IE1vdXNlRW50ZXIgZXZlbnQgd2hlbiBhbiBvcHRpb24gaXMgaG92ZXJlZFxuICAgICogQHBhcmFtIGl0ZW0gSG92ZXJlZCBpdGVtIG9mIHRoZSBsaXN0XG4gICAgKi9cbiAgIHB1YmxpYyBzaG93TWVudShldmVudDogTW91c2VFdmVudCwgaXRlbTogU3RNZW51TW9kZWw8VD4pOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLm9wZW5lZEl0ZW0gIT09IGl0ZW0gJiYgKCF0aGlzLmFjdGl2ZU9wdGlvbiB8fCB0aGlzLmFjdGl2ZU9wdGlvbi52YWx1ZSAhPT0gaXRlbSkpIHtcbiAgICAgICAgIHRoaXMub3BlbmVkSXRlbSA9IGl0ZW07XG4gICAgICAgICBpZiAoaXRlbS5zdWJNZW51cykge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMubWVudVBvc2l0aW9uID0gdGFyZ2V0Lm9mZnNldFRvcDtcbiAgICAgICAgICAgIGlmICh0aGlzLmR5bmFtaWNIZWlnaHQpIHtcbiAgICAgICAgICAgICAgIHRoaXMubWF4SGVpZ2h0Q2hpbGQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gMzA7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2F2ZXMgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gYW5kIGNoZWNrIHRoZSBzY3JvbGwgYnV0dG9ucyBzdGF0ZVxuICAgICovXG4gICBwdWJsaWMgb25TY3JvbGwoKTogdm9pZCB7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuY2hpbGRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGlmICh0aGlzLmR5bmFtaWNIZWlnaHQpIHtcbiAgICAgICAgIHRoaXMuX3Njcm9sbFN1YmplY3QubmV4dCgpO1xuICAgICAgfVxuICAgfVxuXG4gICAvKipcbiAgICAqIEdlbmVyYXRlcyBhIG5nRm9yIHRyYWNrQnkgaWQgZnJvbSBTdE1lbnVNb2RlbCBuYW1lIGFuZCBpY29uIHZhbHVlc1xuICAgICogQHBhcmFtIGluZGV4XG4gICAgKiBAcGFyYW0gaXRlbVxuICAgICovXG4gICBwdWJsaWMgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IFN0TWVudU1vZGVsPFQ+KTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBpdGVtLm5hbWUgKyAoaXRlbS5pY29uIHx8ICcnKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTdGFydHMgYSBzY3JvbGwgYW5pbWF0aW9uIGZyYW1lXG4gICAgKiBAcGFyYW0gcmV2ZXJzZVxuICAgICovXG4gICBwdWJsaWMgc2Nyb2xsVG8ocmV2ZXJzZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgY29uc3Qgc3RhcnRTY3JvbGxBbmltYXRpb25UaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7IC8vIGluaXRpYWwgYW5pbWF0aW9uIHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgICBjb25zdCBzdGFydFNjcm9sbEFuaW1hdGlvblBvc2l0aW9uID0gdGhpcy5jaGlsZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wOyAvLyBpbml0aWFsIGFuaW1hdGlvbiBwb3NpdGlvblxuICAgICAgdGhpcy5vcGVuZWRJdGVtID0gbnVsbDtcbiAgICAgIHRoaXMuX3Njcm9sbEFuaW1hdGlvbkhhbmRsZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5fc2Nyb2xsQW5pbWF0aW9uKHJldmVyc2UsIHN0YXJ0U2Nyb2xsQW5pbWF0aW9uVGltZSwgIHN0YXJ0U2Nyb2xsQW5pbWF0aW9uUG9zaXRpb24pKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTdG9wIGN1cnJlbnQgc2Nyb2xsIGFuaW1hdGlvbiBmcmFtZVxuICAgICovXG4gICBwdWJsaWMgc3RvcFNjcm9sbCgpOiB2b2lkIHtcbiAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fc2Nyb2xsQW5pbWF0aW9uSGFuZGxlcik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2xlYXIgdGhlIHNlYXJjaCBpbnB1dCB2YWx1ZVxuICAgICovXG4gICBwdWJsaWMgcmVtb3ZlU2VhcmNoKCk6IHZvaWQge1xuICAgICAgdGhpcy5zZWFyY2hGb3JtQ29udHJvbC5zZXRWYWx1ZSgnJyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2hlY2sgdGhlIHNlbGVjdGVkIG9wdGlvbiBhbmQgZW1pdHMgaWYgaXQncyB2YWxpZFxuICAgICogQHBhcmFtIGV2ZW50XG4gICAgKiBAcGFyYW0gaXRlbVxuICAgICovXG4gICBwdWJsaWMgb25TZWxlY3RPcHRpb24oZXZlbnQ6IEV2ZW50LCBpdGVtOiBTdE1lbnVNb2RlbDxUPik6IHZvaWQge1xuICAgICAgaWYgKCghaXRlbS5zdWJNZW51cyB8fCAhaXRlbS5zdWJNZW51cy5sZW5ndGgpICYmICghdGhpcy5hY3RpdmVPcHRpb24gfHwgdGhpcy5hY3RpdmVPcHRpb24gIT09IGl0ZW0udmFsdWUpKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uLmVtaXQoaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgLy8gUHJldmVudHMgY2xvc2UgbWVudVxuICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2VuZXJhdGVzIG1lbnUgaXRlbSBpZFxuICAgICogQHBhcmFtIGl0ZW1cbiAgICAqL1xuICAgcHVibGljIGdldEl0ZW1JZChpdGVtOiBTdE1lbnVNb2RlbDxUPik6IHN0cmluZyB7XG4gICAgICByZXR1cm4gKGl0ZW0uaWNvbiB8fCAnJykgKyBpdGVtLm5hbWUucmVwbGFjZSgvXFxXL2csICdfJykgKyAnLW9wdGlvbic7XG4gICB9XG5cbiAgIC8qKlxuICAgICogUmVjdXJzaXZlIHNjcm9sbCBhbmltYXRpb24gZnJhbWUgbWV0aG9kXG4gICAgKiBAcGFyYW0gcmV2ZXJzZSBzZW5zZSBvZiB0aGUgc2Nyb2xsIGFuaW1hdGlvblxuICAgICovXG4gICBwcml2YXRlIF9zY3JvbGxBbmltYXRpb24ocmV2ZXJzZTogYm9vbGVhbiwgIHN0YXJ0U2Nyb2xsQW5pbWF0aW9uVGltZTogbnVtYmVyLCBzdGFydFNjcm9sbEFuaW1hdGlvblBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQ6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgY29uc3QgcnVudGltZTogbnVtYmVyID0gY3VycmVudCAtIHN0YXJ0U2Nyb2xsQW5pbWF0aW9uVGltZTtcbiAgICAgIC8vIGluaXRpYWxQb3NpdGlvbiBpbiBweCArIChyZXZlcnNlOiBuZWdhdGl2ZSBvciBwb3NpdGl2ZSBzZW5zZSAqIG1pbGxpcyBmcm9tIGFuaW1hdGlvbiBzdGFydCAqIHB4IHBlciBtaWxsaXMpXG4gICAgICBjb25zdCBwb3NpdGlvbjogbnVtYmVyID0gc3RhcnRTY3JvbGxBbmltYXRpb25Qb3NpdGlvbiArICgocmV2ZXJzZSA/IDEgOiAtMSkgKiBydW50aW1lICogdGhpcy5fU0NST0xMX1NQRUVEX01JTExJUyk7XG4gICAgICB0aGlzLmNoaWxkTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxUbygwLCBwb3NpdGlvbik7XG4gICAgICB0aGlzLl9zY3JvbGxBbmltYXRpb25IYW5kbGVyID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuX3Njcm9sbEFuaW1hdGlvbihyZXZlcnNlLCBzdGFydFNjcm9sbEFuaW1hdGlvblRpbWUsIHN0YXJ0U2Nyb2xsQW5pbWF0aW9uUG9zaXRpb24pKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgdG9wIGFuZCBib3R0b20gc2Nyb2xsIGJ1dHRvbnMgZGVwZW5kaW5nIG9mIHRoZSBzY3JvbGxMaXN0IHBvc2l0aW9uXG4gICAgKi9cbiAgIHByaXZhdGUgX2NoZWNrU2Nyb2xsQnV0dG9ucygpOiB2b2lkIHtcbiAgICAgIGNvbnN0IHNjcm9sbExpc3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5jaGlsZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNjcm9sbFRvcEVuYWJsZWQgPSBzY3JvbGxMaXN0LnNjcm9sbFRvcCA+IDA7XG4gICAgICB0aGlzLnNjcm9sbEJvdHRvbUVuYWJsZWQgPSBzY3JvbGxMaXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIHNjcm9sbExpc3Quc2Nyb2xsVG9wIDwgc2Nyb2xsTGlzdC5zY3JvbGxIZWlnaHQgLSAxO1xuICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICB9XG59XG4iXX0=