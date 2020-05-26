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
import { cloneDeep as _cloneDeep } from 'lodash';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { EgeoResolverKeys, TranslateableElement, TranslateServiceType } from './egeo-resolve-model';
import { EgeoResolveService } from './egeo-resolve.service';

interface TestStTranslateService {
   name: string;
   country: TranslateableElement;
   childs?: TestStTranslateService[];
}

interface TestStTranslated {
   name: string;
   country: string;
   childs?: TestStTranslated[];
}

let testService: TestStTranslateService[] = [
   {
      name: 'Name1',
      country: { key: 'COUNTRY.SPAIN', translate: true }
   },
   {
      name: 'Name2',
      country: { key: 'COUNTRY.SPAIN', translate: true },
      childs: [
         {
            name: 'Name2_1',
            country: { key: 'COUNTRY.SPAIN', translate: true }
         },
         {
            name: 'Name2_2',
            country: { key: 'COUNTRY.SPAIN', translate: true }
         }
      ]
   },
   {
      name: 'Name3',
      country: { key: 'COUNTRY.FRANCE', translate: true },
      childs: [
         {
            name: 'Name3_1',
            country: { key: 'COUNTRY.FALSE', translate: true }
         }
      ]
   },
   {
      name: 'Name4',
      country: { key: 'COUNTRY.ITALY', translate: true },
      childs: [
         {
            name: 'Name4_1',
            country: { key: 'COUNTRY.ITALY', translate: true }
         },
         {
            name: 'Name4_2',
            country: { key: 'COUNTRY.SPAIN', translate: true }
         }
      ]
   },
   {
      name: 'Name5',
      country: { key: 'COUNTRY.UDF', translate: true }
   }
];

let expectedGetKeys: EgeoResolverKeys[] = [
   {
      path: '[0].country',
      toResolve: { key: 'COUNTRY.SPAIN', translate: true }
   },
   {
      path: '[1].country',
      toResolve: { key: 'COUNTRY.SPAIN', translate: true }
   },
   {
      path: '[1].childs[0].country',
      toResolve: { key: 'COUNTRY.SPAIN', translate: true }
   },
   {
      path: '[1].childs[1].country',
      toResolve: { key: 'COUNTRY.SPAIN', translate: true }
   },
   {
      path: '[2].country',
      toResolve: { key: 'COUNTRY.FRANCE', translate: true }
   },
   {
      path: '[2].childs[0].country',
      toResolve: { key: 'COUNTRY.FALSE', translate: true }
   },
   {
      path: '[3].country',
      toResolve: { key: 'COUNTRY.ITALY', translate: true }
   },
   {
      path: '[3].childs[0].country',
      toResolve: { key: 'COUNTRY.ITALY', translate: true }
   },
   {
      path: '[3].childs[1].country',
      toResolve: { key: 'COUNTRY.SPAIN', translate: true }
   },
   {
      path: '[4].country',
      toResolve: { key: 'COUNTRY.UDF', translate: true }
   }
];

let preparedSetKeys: EgeoResolverKeys[] = [
   { path: '[0].country', toResolve: { key: 'COUNTRY.SPAIN', translate: true }, resolved: 'Spain' },
   { path: '[1].country', toResolve: { key: 'COUNTRY.SPAIN', translate: true }, resolved: 'Spain' },
   { path: '[1].childs[0].country', toResolve: { key: 'COUNTRY.SPAIN', translate: true }, resolved: 'Spain' },
   { path: '[1].childs[1].country', toResolve: { key: 'COUNTRY.SPAIN', translate: true }, resolved: 'Spain' },
   { path: '[2].country', toResolve: { key: 'COUNTRY.FRANCE', translate: true }, resolved: 'France' },
   { path: '[2].childs[0].country', toResolve: { key: 'COUNTRY.FALSE', translate: true }, resolved: 'COUNTRY.FALSE' },
   { path: '[3].country', toResolve: { key: 'COUNTRY.ITALY', translate: true }, resolved: 'Italy' },
   { path: '[3].childs[0].country', toResolve: { key: 'COUNTRY.ITALY', translate: true }, resolved: 'Italy' },
   { path: '[3].childs[1].country', toResolve: { key: 'COUNTRY.SPAIN', translate: true }, resolved: 'Spain' },
   { path: '[4].country', toResolve: { key: 'COUNTRY.UDF', translate: true }, resolved: 'COUNTRY.UDF' }
];

let expectedTranslatedKeys: TestStTranslated[] = [
   { name: 'Name1', country: 'Spain' },
   {
      name: 'Name2', country: 'Spain', childs: [
         { name: 'Name2_1', country: 'Spain' },
         { name: 'Name2_2', country: 'Spain' }
      ]
   },
   {
      name: 'Name3', country: 'France', childs: [
         { name: 'Name3_1', country: 'COUNTRY.FALSE' }
      ]
   },
   {
      name: 'Name4', country: 'Italy', childs: [
         { name: 'Name4_1', country: 'Italy' },
         { name: 'Name4_2', country: 'Spain' }
      ]
   },
   { name: 'Name5', country: 'COUNTRY.UDF' }
];

let expectedTranslatedKeysWhenServiceFail: TestStTranslated[] = [
   { name: 'Name1', country: 'COUNTRY.SPAIN' },
   {
      name: 'Name2', country: 'COUNTRY.SPAIN', childs: [
         { name: 'Name2_1', country: 'COUNTRY.SPAIN' },
         { name: 'Name2_2', country: 'COUNTRY.SPAIN' }
      ]
   },
   {
      name: 'Name3', country: 'COUNTRY.FRANCE', childs: [
         { name: 'Name3_1', country: 'COUNTRY.FALSE' }
      ]
   },
   {
      name: 'Name4', country: 'COUNTRY.ITALY', childs: [
         { name: 'Name4_1', country: 'COUNTRY.ITALY' },
         { name: 'Name4_2', country: 'COUNTRY.SPAIN' }
      ]
   },
   { name: 'Name5', country: 'COUNTRY.UDF' }
];

let translateEmpty: TestStTranslateService[] = [{ name: 'Name1', country: { key: '', translate: true } }];
let translateWithoutKeys: TestStTranslated[]  = [{ name: 'Name1', country: 'EEUU' }];
let expectedTranslateEmptyResponse: TestStTranslated[] = [{ name: 'Name1', country: '' }];


let translations: any = {
   'COUNTRY.SPAIN': 'Spain',
   'COUNTRY.ITALY': 'Italy',
   'COUNTRY.FRANCE': 'France',
   'COUNTRY.FALSE': 'COUNTRY.FALSE',
   'COUNTRY.UDF': undefined
};

let arrayOfKeys: string[] = ['COUNTRY.SPAIN', 'COUNTRY.FALSE', 'COUNTRY.ITALY', 'COUNTRY.SPAIN', 'COUNTRY.FRANCE', 'UND'];
let translatedKeys: string[] = ['Spain', 'COUNTRY.FALSE', 'Italy', 'Spain', 'France', 'UND'];

let translateService: TranslateServiceType = {
   get: (key: string | string[], interpolateParams?: Object) => {
      return Observable.create((observer: Observer<any>) => {
         // Yield a single value and complete
         observer.next(translations);
         observer.complete();
      });
   }
};

let translateServiceEmpty: TranslateServiceType = {
   get: (key: string | string[], interpolateParams?: Object) => {
      return Observable.create((observer: Observer<any>) => {
         // Yield a single value and complete
         observer.next({});
         observer.complete();
      });
   }
};

describe('EgeoResolveService', () => {
   let service: EgeoResolveService;

   beforeEach(() => {
      service = new EgeoResolveService();
      spyOn(translateService, 'get').and.callThrough();
   });

   it('should get keys', () => {
      let obtainedKeys: EgeoResolverKeys[] = service.getKeys(testService, 'translate');
      expect(obtainedKeys).toEqual(expectedGetKeys);
   });

   it('should get keys', () => {
      let copy = _cloneDeep(testService);
      service.setKeys(copy, preparedSetKeys);
      expect(copy).toEqual(expectedTranslatedKeys as any);
   });

   it('should translate array of keys', () => {
      let responseFunction = jasmine.createSpy('response');

      service.translateArrayOfKeys(arrayOfKeys, translateService).subscribe(responseFunction);
      expect(responseFunction).toHaveBeenCalled();
      expect(responseFunction).toHaveBeenCalledWith(translatedKeys);
   });

   it('should translate object', () => {
      let responseFunction = jasmine.createSpy('response');

      service.translate(testService, translateService).subscribe(responseFunction);
      expect(responseFunction).toHaveBeenCalled();
      expect(responseFunction).toHaveBeenCalledWith(expectedTranslatedKeys);
   });

   it('should translate object whith empty translations', () => {
      let responseFunction = jasmine.createSpy('response');

      service.translate(testService, translateServiceEmpty).subscribe(responseFunction);
      expect(responseFunction).toHaveBeenCalled();
      expect(responseFunction).toHaveBeenCalledWith(expectedTranslatedKeysWhenServiceFail);
   });

   it('should translate object whith empty key for translate', () => {
      let responseFunction = jasmine.createSpy('response');

      service.translate(translateEmpty, translateServiceEmpty).subscribe(responseFunction);
      expect(responseFunction).toHaveBeenCalled();
      expect(responseFunction).toHaveBeenCalledWith(expectedTranslateEmptyResponse);
   });

   it('should return the same if not exists translations', () => {
      let responseFunction = jasmine.createSpy('response');

      service.translate(translateWithoutKeys, translateServiceEmpty).subscribe(responseFunction);
      expect(responseFunction).toHaveBeenCalled();
      expect(responseFunction).toHaveBeenCalledWith(translateWithoutKeys);
   });
});
