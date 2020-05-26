/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/egeo-resolver/egeo-resolve.service.ts
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
import { Injectable } from '@angular/core';
import { has as _has, set as _set, cloneDeep as _cloneDeep, forEach as _forEach, keys as _keys, values as _values, omit as _omit } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
var EgeoResolveService = /** @class */ (function () {
    function EgeoResolveService() {
    }
    /**
     * @param {?} object
     * @param {?} key
     * @param {?=} searchedValue
     * @return {?}
     */
    EgeoResolveService.prototype.getKeys = /**
     * @param {?} object
     * @param {?} key
     * @param {?=} searchedValue
     * @return {?}
     */
    function (object, key, searchedValue) {
        return this.searchInDeep(object, key, searchedValue);
    };
    /**
     * @param {?} object
     * @param {?} resolved
     * @return {?}
     */
    EgeoResolveService.prototype.setKeys = /**
     * @param {?} object
     * @param {?} resolved
     * @return {?}
     */
    function (object, resolved) {
        resolved.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return _set(object, element.path, element.resolved); }));
    };
    /**
     * @param {?} object
     * @param {?} translateService
     * @return {?}
     */
    EgeoResolveService.prototype.translate = /**
     * @param {?} object
     * @param {?} translateService
     * @return {?}
     */
    function (object, translateService) {
        var _this = this;
        /** @type {?} */
        var keys = this.getKeys(object, 'translate');
        // If not found translateable elements, return the same because if not, translate service broke on try to translate an empty array.
        if (keys && keys.length > 0) {
            /** @type {?} */
            var toTranslate = this.extractTranslationKeys(keys);
            return translateService.get(toTranslate).pipe(// return object translation
            map((/**
             * @param {?} translation
             * @return {?}
             */
            function (translation) { return _this.remapObjectWithTranslations(translation, keys, object); })));
        }
        else {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            function (observer) {
                observer.next(object);
                observer.complete();
            }));
        }
    };
    /**
     * @param {?} keys
     * @param {?} translateService
     * @return {?}
     */
    EgeoResolveService.prototype.translateArrayOfKeys = /**
     * @param {?} keys
     * @param {?} translateService
     * @return {?}
     */
    function (keys, translateService) {
        var _this = this;
        return translateService.get(keys).pipe(map((/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) { return _this.remapArrayWithTranslations(translation, keys); })));
    };
    /**
     * @private
     * @param {?} translations
     * @param {?} originalArray
     * @return {?}
     */
    EgeoResolveService.prototype.remapArrayWithTranslations = /**
     * @private
     * @param {?} translations
     * @param {?} originalArray
     * @return {?}
     */
    function (translations, originalArray) {
        return originalArray.map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return translations[key] ? translations[key] : key; }));
    };
    /**
     * @private
     * @param {?} translations
     * @param {?} resolverKeys
     * @param {?} object
     * @return {?}
     */
    EgeoResolveService.prototype.remapObjectWithTranslations = /**
     * @private
     * @param {?} translations
     * @param {?} resolverKeys
     * @param {?} object
     * @return {?}
     */
    function (translations, resolverKeys, object) {
        var _this = this;
        /** @type {?} */
        var newObj = _cloneDeep(object);
        if (translations || _keys(translations).length > 0) {
            _forEach(resolverKeys, (/**
             * @param {?} resolvKey
             * @return {?}
             */
            function (resolvKey) {
                _set(newObj, resolvKey.path, _this.getTranslationFromTranslatedKey(translations, resolvKey));
            }));
        }
        return newObj;
    };
    /**
     * @private
     * @param {?} translations
     * @param {?} resolverKey
     * @return {?}
     */
    EgeoResolveService.prototype.getTranslationFromTranslatedKey = /**
     * @private
     * @param {?} translations
     * @param {?} resolverKey
     * @return {?}
     */
    function (translations, resolverKey) {
        /** @type {?} */
        var translationElementKey = resolverKey && resolverKey.toResolve && resolverKey.toResolve.key ? resolverKey.toResolve.key : '';
        return translations[translationElementKey] ? translations[translationElementKey] : translationElementKey;
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    EgeoResolveService.prototype.extractTranslationKeys = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        return list.map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return (/** @type {?} */ (_values(_omit(element.toResolve, 'translate'))[0])); }));
    };
    /**
     * @private
     * @param {?} object
     * @param {?} key
     * @param {?} searchedValue
     * @param {?=} path
     * @return {?}
     */
    EgeoResolveService.prototype.searchInDeep = /**
     * @private
     * @param {?} object
     * @param {?} key
     * @param {?} searchedValue
     * @param {?=} path
     * @return {?}
     */
    function (object, key, searchedValue, path) {
        var _this = this;
        if (path === void 0) { path = ''; }
        /** @type {?} */
        var result = [];
        if (_has(object, key)) { // If we found key, return object.
            if (searchedValue !== undefined) {
                if (object[key] === searchedValue) {
                    result.push({ path: path, toResolve: object });
                }
            }
            else {
                result.push({ path: path, toResolve: object });
            }
        }
        /** @type {?} */
        var i = 0;
        _forEach(object, (/**
         * @param {?} value
         * @param {?} objKey
         * @return {?}
         */
        function (value, objKey) {
            if (typeof value === 'object') {
                result = tslib_1.__spread(result, _this.searchInDeep(value, key, searchedValue, _this.getPath(path, object, i, objKey)));
            }
            i++;
        }));
        return result;
    };
    // Build path for future replace
    // Build path for future replace
    /**
     * @private
     * @param {?} actualPath
     * @param {?} obj
     * @param {?} pos
     * @param {?} key
     * @return {?}
     */
    EgeoResolveService.prototype.getPath = 
    // Build path for future replace
    /**
     * @private
     * @param {?} actualPath
     * @param {?} obj
     * @param {?} pos
     * @param {?} key
     * @return {?}
     */
    function (actualPath, obj, pos, key) {
        if (this.isArray(obj)) {
            actualPath = actualPath + "[" + pos + "]";
        }
        else {
            actualPath = actualPath === '' ? key : actualPath + "." + key;
        }
        return actualPath;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    EgeoResolveService.prototype.isArray = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    };
    EgeoResolveService.decorators = [
        { type: Injectable }
    ];
    return EgeoResolveService;
}());
export { EgeoResolveService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdlby1yZXNvbHZlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2VnZW8tcmVzb2x2ZXIvZWdlby1yZXNvbHZlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQVlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNKLEdBQUcsSUFBSSxJQUFJLEVBQ1gsR0FBRyxJQUFJLElBQUksRUFFWCxTQUFTLElBQUksVUFBVSxFQUN2QixPQUFPLElBQUksUUFBUSxFQUNuQixJQUFJLElBQUksS0FBSyxFQUNiLE1BQU0sSUFBSSxPQUFPLEVBQ2pCLElBQUksSUFBSSxLQUFLLEVBQ2YsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLckM7SUFBQTtJQXdGQSxDQUFDOzs7Ozs7O0lBckZFLG9DQUFPOzs7Ozs7SUFBUCxVQUFRLE1BQVcsRUFBRSxHQUFXLEVBQUUsYUFBbUI7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsb0NBQU87Ozs7O0lBQVAsVUFBUSxNQUFXLEVBQUUsUUFBNEI7UUFDOUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQTVDLENBQTRDLEVBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCxzQ0FBUzs7Ozs7SUFBVCxVQUFVLE1BQVcsRUFBRSxnQkFBc0M7UUFBN0QsaUJBYUM7O1lBWk0sSUFBSSxHQUF1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SSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLFVBQVUsR0FBTSxVQUFVLFNBQUksR0FBRyxNQUFHLENBQUM7U0FDdkM7YUFBTTtZQUNKLFVBQVUsR0FBRyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLFVBQVUsU0FBSSxHQUFLLENBQUM7U0FDaEU7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxvQ0FBTzs7Ozs7SUFBZixVQUFnQixLQUFVO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0lBQ3JFLENBQUM7O2dCQXZGSCxVQUFVOztJQXdGWCx5QkFBQztDQUFBLEFBeEZELElBd0ZDO1NBdkZZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICBoYXMgYXMgX2hhcyxcbiAgIHNldCBhcyBfc2V0LFxuICAgZ2V0IGFzIF9nZXQsXG4gICBjbG9uZURlZXAgYXMgX2Nsb25lRGVlcCxcbiAgIGZvckVhY2ggYXMgX2ZvckVhY2gsXG4gICBrZXlzIGFzIF9rZXlzLFxuICAgdmFsdWVzIGFzIF92YWx1ZXMsXG4gICBvbWl0IGFzIF9vbWl0XG59IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmltcG9ydCB7IEVnZW9SZXNvbHZlcktleXMsIFRyYW5zbGF0ZVNlcnZpY2VUeXBlIH0gZnJvbSAnLi9lZ2VvLXJlc29sdmUtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWdlb1Jlc29sdmVTZXJ2aWNlIHtcblxuICAgZ2V0S2V5cyhvYmplY3Q6IGFueSwga2V5OiBzdHJpbmcsIHNlYXJjaGVkVmFsdWU/OiBhbnkpOiBFZ2VvUmVzb2x2ZXJLZXlzW10ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoSW5EZWVwKG9iamVjdCwga2V5LCBzZWFyY2hlZFZhbHVlKTtcbiAgIH1cblxuICAgc2V0S2V5cyhvYmplY3Q6IGFueSwgcmVzb2x2ZWQ6IEVnZW9SZXNvbHZlcktleXNbXSk6IHZvaWQge1xuICAgICAgcmVzb2x2ZWQuZm9yRWFjaCgoZWxlbWVudCkgPT4gX3NldChvYmplY3QsIGVsZW1lbnQucGF0aCwgZWxlbWVudC5yZXNvbHZlZCkpO1xuICAgfVxuXG4gICB0cmFuc2xhdGUob2JqZWN0OiBhbnksIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2VUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGxldCBrZXlzOiBFZ2VvUmVzb2x2ZXJLZXlzW10gPSB0aGlzLmdldEtleXMob2JqZWN0LCAndHJhbnNsYXRlJyk7IC8vIEdldCBrZXlzXG4gICAgICAvLyBJZiBub3QgZm91bmQgdHJhbnNsYXRlYWJsZSBlbGVtZW50cywgcmV0dXJuIHRoZSBzYW1lIGJlY2F1c2UgaWYgbm90LCB0cmFuc2xhdGUgc2VydmljZSBicm9rZSBvbiB0cnkgdG8gdHJhbnNsYXRlIGFuIGVtcHR5IGFycmF5LlxuICAgICAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICBsZXQgdG9UcmFuc2xhdGU6IHN0cmluZ1tdID0gdGhpcy5leHRyYWN0VHJhbnNsYXRpb25LZXlzKGtleXMpOyAvLyBFeHRyYWN0IGtleXMgZm9yIHRyYW5zbGF0ZSBzZXJ2aWNlXG4gICAgICAgICByZXR1cm4gdHJhbnNsYXRlU2VydmljZS5nZXQodG9UcmFuc2xhdGUpLnBpcGUoIC8vIHJldHVybiBvYmplY3QgdHJhbnNsYXRpb25cbiAgICAgICAgICAgIG1hcCgodHJhbnNsYXRpb24pID0+IHRoaXMucmVtYXBPYmplY3RXaXRoVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uLCBrZXlzLCBvYmplY3QpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChvYmplY3QpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICB0cmFuc2xhdGVBcnJheU9mS2V5cyhrZXlzOiBzdHJpbmdbXSwgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZVR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlU2VydmljZS5nZXQoa2V5cykucGlwZShcbiAgICAgICAgIG1hcCgodHJhbnNsYXRpb24pID0+IHRoaXMucmVtYXBBcnJheVdpdGhUcmFuc2xhdGlvbnModHJhbnNsYXRpb24sIGtleXMpKSk7XG4gICB9XG5cbiAgIHByaXZhdGUgcmVtYXBBcnJheVdpdGhUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCBvcmlnaW5hbEFycmF5OiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEFycmF5Lm1hcCgoa2V5KSA9PiB0cmFuc2xhdGlvbnNba2V5XSA/IHRyYW5zbGF0aW9uc1trZXldIDoga2V5KTtcbiAgIH1cblxuICAgcHJpdmF0ZSByZW1hcE9iamVjdFdpdGhUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByZXNvbHZlcktleXM6IEVnZW9SZXNvbHZlcktleXNbXSwgb2JqZWN0OiBhbnkpOiBhbnkge1xuICAgICAgbGV0IG5ld09iaiA9IF9jbG9uZURlZXAob2JqZWN0KTtcbiAgICAgIGlmICh0cmFuc2xhdGlvbnMgfHwgX2tleXModHJhbnNsYXRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICBfZm9yRWFjaChyZXNvbHZlcktleXMsIChyZXNvbHZLZXkpID0+IHtcbiAgICAgICAgICAgIF9zZXQobmV3T2JqLCByZXNvbHZLZXkucGF0aCwgdGhpcy5nZXRUcmFuc2xhdGlvbkZyb21UcmFuc2xhdGVkS2V5KHRyYW5zbGF0aW9ucywgcmVzb2x2S2V5KSk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdPYmo7XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0VHJhbnNsYXRpb25Gcm9tVHJhbnNsYXRlZEtleSh0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJlc29sdmVyS2V5OiBFZ2VvUmVzb2x2ZXJLZXlzKTogc3RyaW5nIHtcbiAgICAgIGxldCB0cmFuc2xhdGlvbkVsZW1lbnRLZXkgPSByZXNvbHZlcktleSAmJiByZXNvbHZlcktleS50b1Jlc29sdmUgJiYgcmVzb2x2ZXJLZXkudG9SZXNvbHZlLmtleSA/IHJlc29sdmVyS2V5LnRvUmVzb2x2ZS5rZXkgOiAnJztcbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbnNbdHJhbnNsYXRpb25FbGVtZW50S2V5XSA/IHRyYW5zbGF0aW9uc1t0cmFuc2xhdGlvbkVsZW1lbnRLZXldIDogdHJhbnNsYXRpb25FbGVtZW50S2V5O1xuICAgfVxuXG4gICBwcml2YXRlIGV4dHJhY3RUcmFuc2xhdGlvbktleXMobGlzdDogRWdlb1Jlc29sdmVyS2V5c1tdKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIGxpc3QubWFwKChlbGVtZW50KSA9PiA8c3RyaW5nPl92YWx1ZXMoX29taXQoZWxlbWVudC50b1Jlc29sdmUsICd0cmFuc2xhdGUnKSlbMF0pO1xuICAgfVxuXG4gICBwcml2YXRlIHNlYXJjaEluRGVlcChvYmplY3Q6IGFueSwga2V5OiBzdHJpbmcsIHNlYXJjaGVkVmFsdWU6IGFueSwgcGF0aDogc3RyaW5nID0gJycpOiBFZ2VvUmVzb2x2ZXJLZXlzW10ge1xuICAgICAgbGV0IHJlc3VsdDogRWdlb1Jlc29sdmVyS2V5c1tdID0gW107XG4gICAgICBpZiAoX2hhcyhvYmplY3QsIGtleSkpIHsgLy8gSWYgd2UgZm91bmQga2V5LCByZXR1cm4gb2JqZWN0LlxuICAgICAgICAgaWYgKHNlYXJjaGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdFtrZXldID09PSBzZWFyY2hlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IHBhdGgsIHRvUmVzb2x2ZTogb2JqZWN0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcGF0aCwgdG9SZXNvbHZlOiBvYmplY3QgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBfZm9yRWFjaChvYmplY3QsICh2YWx1ZSwgb2JqS2V5KSA9PiB7IC8vIFNlYXJjaCBpbiBkZWVwIGJ5IGFsbCBlbGVtZW50c1xuICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLnRoaXMuc2VhcmNoSW5EZWVwKHZhbHVlLCBrZXksIHNlYXJjaGVkVmFsdWUsIHRoaXMuZ2V0UGF0aChwYXRoLCBvYmplY3QsIGksIG9iaktleSkpXTtcbiAgICAgICAgIH1cbiAgICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgIH1cblxuICAgLy8gQnVpbGQgcGF0aCBmb3IgZnV0dXJlIHJlcGxhY2VcbiAgIHByaXZhdGUgZ2V0UGF0aChhY3R1YWxQYXRoOiBzdHJpbmcsIG9iajogYW55LCBwb3M6IG51bWJlciwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuaXNBcnJheShvYmopKSB7XG4gICAgICAgICBhY3R1YWxQYXRoID0gYCR7YWN0dWFsUGF0aH1bJHtwb3N9XWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWN0dWFsUGF0aCA9IGFjdHVhbFBhdGggPT09ICcnID8ga2V5IDogYCR7YWN0dWFsUGF0aH0uJHtrZXl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3R1YWxQYXRoO1xuICAgfVxuXG4gICBwcml2YXRlIGlzQXJyYXkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICB9XG59XG4iXX0=