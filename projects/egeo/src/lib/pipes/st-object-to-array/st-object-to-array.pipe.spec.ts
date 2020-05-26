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
import {StObjectToArrayPipe} from './st-object-to-array.pipe';

class FakeClass {
   private name: string;
   private lastName: string;

   constructor(name: string, lastName: string) {
      this.name = name;
      this.lastName = lastName;
   }

}

describe('Pipe: StObjectToArrayPipe', () => {
   let pipe: any;
   let fakeJSON: any = {
      server1: {
         available: true,
         ip: '1.1.1.1'
      },
      server2: {
         available: false,
         ip: '0.0.0.0'
      }
   };

   beforeEach(() => {
      pipe = new StObjectToArrayPipe();
   });


   describe(('It should transform a json in an array'), () => {

      it('If object is undefined or empty, it returns an empty array', () => {
         expect(pipe.transform()).toEqual([]);
         expect(pipe.transform(undefined)).toEqual([]);
         expect(pipe.transform(null)).toEqual([]);
         expect(pipe.transform({})).toEqual([]);
      });

      describe('If object is valid', () => {

         it('It returns an array of JSONs with the key and value of each property', () => {
            let array: any[] = pipe.transform(fakeJSON);

            expect(array[0].key).toEqual('server1');
            expect(array[0].value.available).toBe(fakeJSON.server1.available);
            expect(array[0].value.ip).toEqual(fakeJSON.server1.ip);

            expect(array[1].key).toEqual('server2');
            expect(array[1].value.available).toBe(fakeJSON.server2.available);
            expect(array[1].value.ip).toEqual(fakeJSON.server2.ip);
         });
      });
   });
});
