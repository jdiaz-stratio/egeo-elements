

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
import {
   has as _has,
   set as _set,
   get as _get,
   cloneDeep as _cloneDeep,
   forEach as _forEach,
   keys as _keys,
   values as _values,
   omit as _omit
} from 'lodash';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';


import { EgeoResolverKeys, TranslateServiceType } from './egeo-resolve-model';

@Injectable()
export class EgeoResolveService {

   getKeys(object: any, key: string, searchedValue?: any): EgeoResolverKeys[] {
      return this.searchInDeep(object, key, searchedValue);
   }

   setKeys(object: any, resolved: EgeoResolverKeys[]): void {
      resolved.forEach((element) => _set(object, element.path, element.resolved));
   }

   translate(object: any, translateService: TranslateServiceType): Observable<any> {
      let keys: EgeoResolverKeys[] = this.getKeys(object, 'translate'); // Get keys
      // If not found translateable elements, return the same because if not, translate service broke on try to translate an empty array.
      if (keys && keys.length > 0) {
         let toTranslate: string[] = this.extractTranslationKeys(keys); // Extract keys for translate service
         return translateService.get(toTranslate).pipe( // return object translation
            map((translation) => this.remapObjectWithTranslations(translation, keys, object)));
      } else {
         return Observable.create((observer: Observer<any>) => {
            observer.next(object);
            observer.complete();
         });
      }
   }

   translateArrayOfKeys(keys: string[], translateService: TranslateServiceType): Observable<string[]> {
      return translateService.get(keys).pipe(
         map((translation) => this.remapArrayWithTranslations(translation, keys)));
   }

   private remapArrayWithTranslations(translations: { [key: string]: string }, originalArray: string[]): string[] {
      return originalArray.map((key) => translations[key] ? translations[key] : key);
   }

   private remapObjectWithTranslations(translations: { [key: string]: string }, resolverKeys: EgeoResolverKeys[], object: any): any {
      let newObj = _cloneDeep(object);
      if (translations || _keys(translations).length > 0) {
         _forEach(resolverKeys, (resolvKey) => {
            _set(newObj, resolvKey.path, this.getTranslationFromTranslatedKey(translations, resolvKey));
         });
      }
      return newObj;
   }

   private getTranslationFromTranslatedKey(translations: { [key: string]: string }, resolverKey: EgeoResolverKeys): string {
      let translationElementKey = resolverKey && resolverKey.toResolve && resolverKey.toResolve.key ? resolverKey.toResolve.key : '';
      return translations[translationElementKey] ? translations[translationElementKey] : translationElementKey;
   }

   private extractTranslationKeys(list: EgeoResolverKeys[]): string[] {
      return list.map((element) => <string>_values(_omit(element.toResolve, 'translate'))[0]);
   }

   private searchInDeep(object: any, key: string, searchedValue: any, path: string = ''): EgeoResolverKeys[] {
      let result: EgeoResolverKeys[] = [];
      if (_has(object, key)) { // If we found key, return object.
         if (searchedValue !== undefined) {
            if (object[key] === searchedValue) {
               result.push({ path, toResolve: object });
            }
         } else {
            result.push({ path, toResolve: object });
         }
      }
      let i = 0;
      _forEach(object, (value, objKey) => { // Search in deep by all elements
         if (typeof value === 'object') {
            result = [...result, ...this.searchInDeep(value, key, searchedValue, this.getPath(path, object, i, objKey))];
         }
         i++;
      });
      return result;
   }

   // Build path for future replace
   private getPath(actualPath: string, obj: any, pos: number, key: string): string {
      if (this.isArray(obj)) {
         actualPath = `${actualPath}[${pos}]`;
      } else {
         actualPath = actualPath === '' ? key : `${actualPath}.${key}`;
      }
      return actualPath;
   }

   private isArray(value: any): boolean {
      return Object.prototype.toString.call(value) === '[object Array]';
   }
}
