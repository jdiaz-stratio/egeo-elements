/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/st-item-list.component.ts
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
import { StRequired } from '../decorators/require-decorators';
var StItemListComponent = /** @class */ (function () {
    function StItemListComponent() {
        this.qaTag = '';
        this.hasSearch = false;
        this.align = 'left';
        this.theme = 'themeA';
        this.selectItem = new EventEmitter();
        this.search = new EventEmitter();
    }
    Object.defineProperty(StItemListComponent.prototype, "listTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.title || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StItemListComponent.prototype, "searchPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config && this.config.searchPlaceholder || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StItemListComponent.prototype, "listQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StItemListComponent.prototype, "searchQaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this.qaTag && this.qaTag + '-search' || '';
        },
        enumerable: true,
        configurable: true
    });
    StItemListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-item-list',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-item-list sth-item-list\" [ngClass]=\"theme\">\n   <p *ngIf=\"listTitle\" class=\"st-item-list__title sth-item-list__title\">{{listTitle}}</p>\n   <st-search *ngIf=\"hasSearch\" class=\"st-item-list__search\" [placeholder]=\"searchPlaceholder\" [qaTag]=\"searchQaTag\" (search)=\"search.emit($event)\"></st-search>\n   <item-list-scroll [list]=\"list\" [align]=\"align\" [qaTag]=\"listQaTag\" (selectItem)=\"selectItem.emit($event)\"></item-list-scroll>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-item-list{display:flex;flex-direction:column;flex-wrap:nowrap;overflow:hidden;width:100%;height:100%;padding:30px 20px}.st-item-list__title{width:100%;margin-bottom:10px;padding:0}.st-item-list__search{margin-bottom:10px;display:block}virtual-scroll{display:block;width:100%;height:100%}"]
                }] }
    ];
    StItemListComponent.propDecorators = {
        list: [{ type: Input }],
        config: [{ type: Input }],
        qaTag: [{ type: Input }],
        hasSearch: [{ type: Input }],
        align: [{ type: Input }],
        theme: [{ type: Input }],
        selectItem: [{ type: Output }],
        search: [{ type: Output }]
    };
    tslib_1.__decorate([
        StRequired(),
        tslib_1.__metadata("design:type", Array)
    ], StItemListComponent.prototype, "list", void 0);
    return StItemListComponent;
}());
export { StItemListComponent };
if (false) {
    /** @type {?} */
    StItemListComponent.prototype.list;
    /** @type {?} */
    StItemListComponent.prototype.config;
    /** @type {?} */
    StItemListComponent.prototype.qaTag;
    /** @type {?} */
    StItemListComponent.prototype.hasSearch;
    /** @type {?} */
    StItemListComponent.prototype.align;
    /** @type {?} */
    StItemListComponent.prototype.theme;
    /** @type {?} */
    StItemListComponent.prototype.selectItem;
    /** @type {?} */
    StItemListComponent.prototype.search;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaXRlbS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaXRlbS1saXN0L3N0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEcsT0FBTyxFQUFVLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3RFO0lBQUE7UUFVWSxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsVUFBSyxHQUFxQixNQUFNLENBQUM7UUFDakMsVUFBSyxHQUFXLFFBQVEsQ0FBQztRQUV4QixlQUFVLEdBQW9DLElBQUksWUFBWSxFQUFxQixDQUFDO1FBQ3BGLFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWtCdkUsQ0FBQztJQWhCRSxzQkFBSSwwQ0FBUzs7OztRQUFiO1lBQ0csT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFpQjs7OztRQUFyQjtZQUNHLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBDQUFTOzs7O1FBQWI7WUFDRyxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQVc7Ozs7UUFBZjtZQUNHLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7O2dCQWhDSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGk2QkFBNEM7b0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDakQ7Ozt1QkFHRyxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFFTCxNQUFNO3lCQUNOLE1BQU07O0lBUmdCO1FBQWIsVUFBVSxFQUFFOztxREFBMkI7SUEwQnBELDBCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0E1QlksbUJBQW1COzs7SUFFN0IsbUNBQWlEOztJQUNqRCxxQ0FBa0M7O0lBQ2xDLG9DQUE0Qjs7SUFDNUIsd0NBQW9DOztJQUNwQyxvQ0FBMEM7O0lBQzFDLG9DQUFrQzs7SUFFbEMseUNBQThGOztJQUM5RixxQ0FBb0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdEVnZW8sIFN0UmVxdWlyZWQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL3JlcXVpcmUtZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdEl0ZW1MaXN0RWxlbWVudCwgU3RJdGVtTGlzdENvbmZpZywgU3RJdGVtTGlzdENvbmZpZ1NjaGVtYSB9IGZyb20gJy4vc3QtaXRlbS1saXN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWl0ZW0tbGlzdCcsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtaXRlbS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RJdGVtTGlzdENvbXBvbmVudCB7XG5cbiAgIEBJbnB1dCgpIEBTdFJlcXVpcmVkKCkgbGlzdDogU3RJdGVtTGlzdEVsZW1lbnRbXTtcbiAgIEBJbnB1dCgpIGNvbmZpZzogU3RJdGVtTGlzdENvbmZpZztcbiAgIEBJbnB1dCgpIHFhVGFnOiBzdHJpbmcgPSAnJztcbiAgIEBJbnB1dCgpIGhhc1NlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgQElucHV0KCkgYWxpZ246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gJ3RoZW1lQSc7XG5cbiAgIEBPdXRwdXQoKSBzZWxlY3RJdGVtOiBFdmVudEVtaXR0ZXI8U3RJdGVtTGlzdEVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdEl0ZW1MaXN0RWxlbWVudD4oKTtcbiAgIEBPdXRwdXQoKSBzZWFyY2g6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgIGdldCBsaXN0VGl0bGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy50aXRsZSB8fCAnJztcbiAgIH1cblxuICAgZ2V0IHNlYXJjaFBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXIgfHwgJyc7XG4gICB9XG5cbiAgIGdldCBsaXN0UWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnIHx8ICcnO1xuICAgfVxuXG4gICBnZXQgc2VhcmNoUWFUYWcoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLnFhVGFnICYmIHRoaXMucWFUYWcgKyAnLXNlYXJjaCcgfHwgJyc7XG4gICB9XG5cbn1cbiJdfQ==