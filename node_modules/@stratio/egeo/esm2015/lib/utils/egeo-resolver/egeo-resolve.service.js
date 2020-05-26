/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/egeo-resolver/egeo-resolve.service.ts
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
import { Injectable } from '@angular/core';
import { has as _has, set as _set, cloneDeep as _cloneDeep, forEach as _forEach, keys as _keys, values as _values, omit as _omit } from 'lodash';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export class EgeoResolveService {
    /**
     * @param {?} object
     * @param {?} key
     * @param {?=} searchedValue
     * @return {?}
     */
    getKeys(object, key, searchedValue) {
        return this.searchInDeep(object, key, searchedValue);
    }
    /**
     * @param {?} object
     * @param {?} resolved
     * @return {?}
     */
    setKeys(object, resolved) {
        resolved.forEach((/**
         * @param {?} element
         * @return {?}
         */
        (element) => _set(object, element.path, element.resolved)));
    }
    /**
     * @param {?} object
     * @param {?} translateService
     * @return {?}
     */
    translate(object, translateService) {
        /** @type {?} */
        let keys = this.getKeys(object, 'translate');
        // If not found translateable elements, return the same because if not, translate service broke on try to translate an empty array.
        if (keys && keys.length > 0) {
            /** @type {?} */
            let toTranslate = this.extractTranslationKeys(keys);
            return translateService.get(toTranslate).pipe(// return object translation
            map((/**
             * @param {?} translation
             * @return {?}
             */
            (translation) => this.remapObjectWithTranslations(translation, keys, object))));
        }
        else {
            return Observable.create((/**
             * @param {?} observer
             * @return {?}
             */
            (observer) => {
                observer.next(object);
                observer.complete();
            }));
        }
    }
    /**
     * @param {?} keys
     * @param {?} translateService
     * @return {?}
     */
    translateArrayOfKeys(keys, translateService) {
        return translateService.get(keys).pipe(map((/**
         * @param {?} translation
         * @return {?}
         */
        (translation) => this.remapArrayWithTranslations(translation, keys))));
    }
    /**
     * @private
     * @param {?} translations
     * @param {?} originalArray
     * @return {?}
     */
    remapArrayWithTranslations(translations, originalArray) {
        return originalArray.map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => translations[key] ? translations[key] : key));
    }
    /**
     * @private
     * @param {?} translations
     * @param {?} resolverKeys
     * @param {?} object
     * @return {?}
     */
    remapObjectWithTranslations(translations, resolverKeys, object) {
        /** @type {?} */
        let newObj = _cloneDeep(object);
        if (translations || _keys(translations).length > 0) {
            _forEach(resolverKeys, (/**
             * @param {?} resolvKey
             * @return {?}
             */
            (resolvKey) => {
                _set(newObj, resolvKey.path, this.getTranslationFromTranslatedKey(translations, resolvKey));
            }));
        }
        return newObj;
    }
    /**
     * @private
     * @param {?} translations
     * @param {?} resolverKey
     * @return {?}
     */
    getTranslationFromTranslatedKey(translations, resolverKey) {
        /** @type {?} */
        let translationElementKey = resolverKey && resolverKey.toResolve && resolverKey.toResolve.key ? resolverKey.toResolve.key : '';
        return translations[translationElementKey] ? translations[translationElementKey] : translationElementKey;
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    extractTranslationKeys(list) {
        return list.map((/**
         * @param {?} element
         * @return {?}
         */
        (element) => (/** @type {?} */ (_values(_omit(element.toResolve, 'translate'))[0]))));
    }
    /**
     * @private
     * @param {?} object
     * @param {?} key
     * @param {?} searchedValue
     * @param {?=} path
     * @return {?}
     */
    searchInDeep(object, key, searchedValue, path = '') {
        /** @type {?} */
        let result = [];
        if (_has(object, key)) { // If we found key, return object.
            if (searchedValue !== undefined) {
                if (object[key] === searchedValue) {
                    result.push({ path, toResolve: object });
                }
            }
            else {
                result.push({ path, toResolve: object });
            }
        }
        /** @type {?} */
        let i = 0;
        _forEach(object, (/**
         * @param {?} value
         * @param {?} objKey
         * @return {?}
         */
        (value, objKey) => {
            if (typeof value === 'object') {
                result = [...result, ...this.searchInDeep(value, key, searchedValue, this.getPath(path, object, i, objKey))];
            }
            i++;
        }));
        return result;
    }
    // Build path for future replace
    /**
     * @private
     * @param {?} actualPath
     * @param {?} obj
     * @param {?} pos
     * @param {?} key
     * @return {?}
     */
    getPath(actualPath, obj, pos, key) {
        if (this.isArray(obj)) {
            actualPath = `${actualPath}[${pos}]`;
        }
        else {
            actualPath = actualPath === '' ? key : `${actualPath}.${key}`;
        }
        return actualPath;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isArray(value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    }
}
EgeoResolveService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdlby1yZXNvbHZlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2VnZW8tcmVzb2x2ZXIvZWdlby1yZXNvbHZlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0osR0FBRyxJQUFJLElBQUksRUFDWCxHQUFHLElBQUksSUFBSSxFQUVYLFNBQVMsSUFBSSxVQUFVLEVBQ3ZCLE9BQU8sSUFBSSxRQUFRLEVBQ25CLElBQUksSUFBSSxLQUFLLEVBQ2IsTUFBTSxJQUFJLE9BQU8sRUFDakIsSUFBSSxJQUFJLEtBQUssRUFDZixNQUFNLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU1yQyxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7O0lBRTVCLE9BQU8sQ0FBQyxNQUFXLEVBQUUsR0FBVyxFQUFFLGFBQW1CO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxNQUFXLEVBQUUsUUFBNEI7UUFDOUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDO0lBQy9FLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxNQUFXLEVBQUUsZ0JBQXNDOztZQUN0RCxJQUFJLEdBQXVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztRQUNoRSxt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U0FDaEU7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFFTyxPQUFPLENBQUMsS0FBVTtRQUN2QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQztJQUNyRSxDQUFDOzs7WUF2RkgsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICBoYXMgYXMgX2hhcyxcbiAgIHNldCBhcyBfc2V0LFxuICAgZ2V0IGFzIF9nZXQsXG4gICBjbG9uZURlZXAgYXMgX2Nsb25lRGVlcCxcbiAgIGZvckVhY2ggYXMgX2ZvckVhY2gsXG4gICBrZXlzIGFzIF9rZXlzLFxuICAgdmFsdWVzIGFzIF92YWx1ZXMsXG4gICBvbWl0IGFzIF9vbWl0XG59IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbmltcG9ydCB7IEVnZW9SZXNvbHZlcktleXMsIFRyYW5zbGF0ZVNlcnZpY2VUeXBlIH0gZnJvbSAnLi9lZ2VvLXJlc29sdmUtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRWdlb1Jlc29sdmVTZXJ2aWNlIHtcblxuICAgZ2V0S2V5cyhvYmplY3Q6IGFueSwga2V5OiBzdHJpbmcsIHNlYXJjaGVkVmFsdWU/OiBhbnkpOiBFZ2VvUmVzb2x2ZXJLZXlzW10ge1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoSW5EZWVwKG9iamVjdCwga2V5LCBzZWFyY2hlZFZhbHVlKTtcbiAgIH1cblxuICAgc2V0S2V5cyhvYmplY3Q6IGFueSwgcmVzb2x2ZWQ6IEVnZW9SZXNvbHZlcktleXNbXSk6IHZvaWQge1xuICAgICAgcmVzb2x2ZWQuZm9yRWFjaCgoZWxlbWVudCkgPT4gX3NldChvYmplY3QsIGVsZW1lbnQucGF0aCwgZWxlbWVudC5yZXNvbHZlZCkpO1xuICAgfVxuXG4gICB0cmFuc2xhdGUob2JqZWN0OiBhbnksIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2VUeXBlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgIGxldCBrZXlzOiBFZ2VvUmVzb2x2ZXJLZXlzW10gPSB0aGlzLmdldEtleXMob2JqZWN0LCAndHJhbnNsYXRlJyk7IC8vIEdldCBrZXlzXG4gICAgICAvLyBJZiBub3QgZm91bmQgdHJhbnNsYXRlYWJsZSBlbGVtZW50cywgcmV0dXJuIHRoZSBzYW1lIGJlY2F1c2UgaWYgbm90LCB0cmFuc2xhdGUgc2VydmljZSBicm9rZSBvbiB0cnkgdG8gdHJhbnNsYXRlIGFuIGVtcHR5IGFycmF5LlxuICAgICAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICBsZXQgdG9UcmFuc2xhdGU6IHN0cmluZ1tdID0gdGhpcy5leHRyYWN0VHJhbnNsYXRpb25LZXlzKGtleXMpOyAvLyBFeHRyYWN0IGtleXMgZm9yIHRyYW5zbGF0ZSBzZXJ2aWNlXG4gICAgICAgICByZXR1cm4gdHJhbnNsYXRlU2VydmljZS5nZXQodG9UcmFuc2xhdGUpLnBpcGUoIC8vIHJldHVybiBvYmplY3QgdHJhbnNsYXRpb25cbiAgICAgICAgICAgIG1hcCgodHJhbnNsYXRpb24pID0+IHRoaXMucmVtYXBPYmplY3RXaXRoVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9uLCBrZXlzLCBvYmplY3QpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChvYmplY3QpO1xuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgIH0pO1xuICAgICAgfVxuICAgfVxuXG4gICB0cmFuc2xhdGVBcnJheU9mS2V5cyhrZXlzOiBzdHJpbmdbXSwgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZVR5cGUpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgICByZXR1cm4gdHJhbnNsYXRlU2VydmljZS5nZXQoa2V5cykucGlwZShcbiAgICAgICAgIG1hcCgodHJhbnNsYXRpb24pID0+IHRoaXMucmVtYXBBcnJheVdpdGhUcmFuc2xhdGlvbnModHJhbnNsYXRpb24sIGtleXMpKSk7XG4gICB9XG5cbiAgIHByaXZhdGUgcmVtYXBBcnJheVdpdGhUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCBvcmlnaW5hbEFycmF5OiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbEFycmF5Lm1hcCgoa2V5KSA9PiB0cmFuc2xhdGlvbnNba2V5XSA/IHRyYW5zbGF0aW9uc1trZXldIDoga2V5KTtcbiAgIH1cblxuICAgcHJpdmF0ZSByZW1hcE9iamVjdFdpdGhUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9LCByZXNvbHZlcktleXM6IEVnZW9SZXNvbHZlcktleXNbXSwgb2JqZWN0OiBhbnkpOiBhbnkge1xuICAgICAgbGV0IG5ld09iaiA9IF9jbG9uZURlZXAob2JqZWN0KTtcbiAgICAgIGlmICh0cmFuc2xhdGlvbnMgfHwgX2tleXModHJhbnNsYXRpb25zKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICBfZm9yRWFjaChyZXNvbHZlcktleXMsIChyZXNvbHZLZXkpID0+IHtcbiAgICAgICAgICAgIF9zZXQobmV3T2JqLCByZXNvbHZLZXkucGF0aCwgdGhpcy5nZXRUcmFuc2xhdGlvbkZyb21UcmFuc2xhdGVkS2V5KHRyYW5zbGF0aW9ucywgcmVzb2x2S2V5KSk7XG4gICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdPYmo7XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0VHJhbnNsYXRpb25Gcm9tVHJhbnNsYXRlZEtleSh0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIHJlc29sdmVyS2V5OiBFZ2VvUmVzb2x2ZXJLZXlzKTogc3RyaW5nIHtcbiAgICAgIGxldCB0cmFuc2xhdGlvbkVsZW1lbnRLZXkgPSByZXNvbHZlcktleSAmJiByZXNvbHZlcktleS50b1Jlc29sdmUgJiYgcmVzb2x2ZXJLZXkudG9SZXNvbHZlLmtleSA/IHJlc29sdmVyS2V5LnRvUmVzb2x2ZS5rZXkgOiAnJztcbiAgICAgIHJldHVybiB0cmFuc2xhdGlvbnNbdHJhbnNsYXRpb25FbGVtZW50S2V5XSA/IHRyYW5zbGF0aW9uc1t0cmFuc2xhdGlvbkVsZW1lbnRLZXldIDogdHJhbnNsYXRpb25FbGVtZW50S2V5O1xuICAgfVxuXG4gICBwcml2YXRlIGV4dHJhY3RUcmFuc2xhdGlvbktleXMobGlzdDogRWdlb1Jlc29sdmVyS2V5c1tdKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIGxpc3QubWFwKChlbGVtZW50KSA9PiA8c3RyaW5nPl92YWx1ZXMoX29taXQoZWxlbWVudC50b1Jlc29sdmUsICd0cmFuc2xhdGUnKSlbMF0pO1xuICAgfVxuXG4gICBwcml2YXRlIHNlYXJjaEluRGVlcChvYmplY3Q6IGFueSwga2V5OiBzdHJpbmcsIHNlYXJjaGVkVmFsdWU6IGFueSwgcGF0aDogc3RyaW5nID0gJycpOiBFZ2VvUmVzb2x2ZXJLZXlzW10ge1xuICAgICAgbGV0IHJlc3VsdDogRWdlb1Jlc29sdmVyS2V5c1tdID0gW107XG4gICAgICBpZiAoX2hhcyhvYmplY3QsIGtleSkpIHsgLy8gSWYgd2UgZm91bmQga2V5LCByZXR1cm4gb2JqZWN0LlxuICAgICAgICAgaWYgKHNlYXJjaGVkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKG9iamVjdFtrZXldID09PSBzZWFyY2hlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICByZXN1bHQucHVzaCh7IHBhdGgsIHRvUmVzb2x2ZTogb2JqZWN0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgcGF0aCwgdG9SZXNvbHZlOiBvYmplY3QgfSk7XG4gICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBfZm9yRWFjaChvYmplY3QsICh2YWx1ZSwgb2JqS2V5KSA9PiB7IC8vIFNlYXJjaCBpbiBkZWVwIGJ5IGFsbCBlbGVtZW50c1xuICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFsuLi5yZXN1bHQsIC4uLnRoaXMuc2VhcmNoSW5EZWVwKHZhbHVlLCBrZXksIHNlYXJjaGVkVmFsdWUsIHRoaXMuZ2V0UGF0aChwYXRoLCBvYmplY3QsIGksIG9iaktleSkpXTtcbiAgICAgICAgIH1cbiAgICAgICAgIGkrKztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgIH1cblxuICAgLy8gQnVpbGQgcGF0aCBmb3IgZnV0dXJlIHJlcGxhY2VcbiAgIHByaXZhdGUgZ2V0UGF0aChhY3R1YWxQYXRoOiBzdHJpbmcsIG9iajogYW55LCBwb3M6IG51bWJlciwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMuaXNBcnJheShvYmopKSB7XG4gICAgICAgICBhY3R1YWxQYXRoID0gYCR7YWN0dWFsUGF0aH1bJHtwb3N9XWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgYWN0dWFsUGF0aCA9IGFjdHVhbFBhdGggPT09ICcnID8ga2V5IDogYCR7YWN0dWFsUGF0aH0uJHtrZXl9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY3R1YWxQYXRoO1xuICAgfVxuXG4gICBwcml2YXRlIGlzQXJyYXkodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gICB9XG59XG4iXX0=