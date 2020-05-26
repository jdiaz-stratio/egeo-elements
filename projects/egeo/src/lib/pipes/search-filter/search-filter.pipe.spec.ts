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

import { StFilterList } from './search-filter.pipe';

describe('Pipe: StFilterList', () => {
   let pipe: any;
   let fakeField: string = 'name';
   let fakeSearchText: string = 'aaaa';
   let fakeList: any[] = [{ name: 'abcd', id: 'id0' }, { name: 'efgh', id: 'id1' }, { name: 'ijkl', id: 'id2' },
      { name: 'mnñopq', id: 'id3' }, { name: 'adsxc', id: 'id3' }];

   beforeEach(() => {
      pipe = new StFilterList();
   });

   describe('It should search a field in an array of items', () => {
      it('If list is undefined or empty, it returns an empty array', () => {
         expect(pipe.transform(undefined, fakeField, fakeSearchText)).toEqual([]);
         expect(pipe.transform(null, fakeField, fakeSearchText)).toEqual([]);
         expect(pipe.transform([], fakeField, fakeSearchText)).toEqual([]);
      });

      it('If field is undefined or null, it returns an error', () => {
         expect(() => (pipe.transform(fakeList, undefined, fakeSearchText))).toThrowError('PIPE: stFilterList: "field" is a required and string parameter');
         expect(() => (pipe.transform(fakeList, null, fakeSearchText))).toThrowError('PIPE: stFilterList: "field" is a required and string parameter');
      });

      it('If field is empty, it returns an empty list', () => {
         expect(pipe.transform(fakeList, '', fakeSearchText)).toEqual([]);
      });

      it('If search is undefined or empty, it returns the introduced list', () => {
         expect(pipe.transform(fakeList, fakeField, '')).toEqual(fakeList);
         expect(pipe.transform(fakeList, fakeField, undefined)).toEqual(fakeList);
         expect(pipe.transform(fakeList, fakeField, null)).toEqual(fakeList);
      });

      it('if all params are valid, it returns the list filtered by the field and search text introduced', () => {
         expect(pipe.transform(fakeList, fakeField, 'h')).toEqual([fakeList[1]]);
         expect(pipe.transform(fakeList, fakeField, 'M')).toEqual([fakeList[3]]);
         expect(pipe.transform(fakeList, fakeField, 'z')).toEqual([]);
         expect(pipe.transform(fakeList, fakeField, 'aa')).toEqual([]);
         expect(pipe.transform(fakeList, fakeField, 'a')).toEqual([fakeList[0], fakeList[4]]);

      });
   });
});
