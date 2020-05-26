/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/search-filter/search-filter.pipe.ts
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
import { Pipe } from '@angular/core';
export class StFilterList {
    /**
     * @param {?} list
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    transform(list, field, search) {
        this.checkParams(field);
        if (!search) {
            return list;
        }
        if (list && list.length > 0 && field) {
            return list.filter((/**
             * @param {?} element
             * @return {?}
             */
            (element) => this.contains(element, field, search)));
        }
        else {
            return [];
        }
    }
    /**
     * @private
     * @param {?} element
     * @param {?} field
     * @param {?} search
     * @return {?}
     */
    contains(element, field, search) {
        if (this.isDefined(element) && this.isString(field) && this.isString(search) && this.isString(element[field])) {
            return element[field].toUpperCase().search(search.toUpperCase()) > -1;
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isDefined(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isString(value) {
        return this.isDefined(value) && typeof value === 'string';
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    checkParams(field) {
        if (!this.isString(field)) {
            throw new Error('PIPE: stFilterList: "field" is a required and string parameter');
        }
    }
}
StFilterList.decorators = [
    { type: Pipe, args: [{
                name: 'stFilterList'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9waXBlcy9zZWFyY2gtZmlsdGVyL3NlYXJjaC1maWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUN0QixTQUFTLENBQUMsSUFBVyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUMsQ0FBQztTQUN6RTthQUFNO1lBQ0osT0FBTyxFQUFFLENBQUM7U0FDWjtJQUNKLENBQUM7Ozs7Ozs7O0lBRU8sUUFBUSxDQUFDLE9BQVksRUFBRSxLQUFhLEVBQUUsTUFBYztRQUN6RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDNUcsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLEtBQVU7UUFDekIsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLEtBQVU7UUFDeEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTyxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDcEY7SUFDSixDQUFDOzs7WUFuQ0gsSUFBSSxTQUFDO2dCQUNILElBQUksRUFBRSxjQUFjO2FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgIG5hbWU6ICdzdEZpbHRlckxpc3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0RmlsdGVyTGlzdCBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgdHJhbnNmb3JtKGxpc3Q6IGFueVtdLCBmaWVsZDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IGFueVtdIHtcbiAgICAgIHRoaXMuY2hlY2tQYXJhbXMoZmllbGQpO1xuICAgICAgaWYgKCFzZWFyY2gpIHtcbiAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgfVxuICAgICAgaWYgKGxpc3QgJiYgbGlzdC5sZW5ndGggPiAwICYmIGZpZWxkKSB7XG4gICAgICAgICByZXR1cm4gbGlzdC5maWx0ZXIoKGVsZW1lbnQpID0+IHRoaXMuY29udGFpbnMoZWxlbWVudCwgZmllbGQsIHNlYXJjaCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBjb250YWlucyhlbGVtZW50OiBhbnksIGZpZWxkOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBpZiAodGhpcy5pc0RlZmluZWQoZWxlbWVudCkgJiYgdGhpcy5pc1N0cmluZyhmaWVsZCkgJiYgdGhpcy5pc1N0cmluZyhzZWFyY2gpICYmIHRoaXMuaXNTdHJpbmcoZWxlbWVudFtmaWVsZF0pKSB7XG4gICAgICAgICByZXR1cm4gZWxlbWVudFtmaWVsZF0udG9VcHBlckNhc2UoKS5zZWFyY2goc2VhcmNoLnRvVXBwZXJDYXNlKCkpID4gLTE7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICB9XG5cbiAgIHByaXZhdGUgaXNEZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xuICAgfVxuXG4gICBwcml2YXRlIGlzU3RyaW5nKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLmlzRGVmaW5lZCh2YWx1ZSkgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja1BhcmFtcyhmaWVsZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuaXNTdHJpbmcoZmllbGQpKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BJUEU6IHN0RmlsdGVyTGlzdDogXCJmaWVsZFwiIGlzIGEgcmVxdWlyZWQgYW5kIHN0cmluZyBwYXJhbWV0ZXInKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==