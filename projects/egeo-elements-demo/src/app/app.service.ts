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
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable()
export class AppService {

   constructor(private http: HttpClient) { }

   getLastUpdateDate(): Observable<Date> {
      if (!environment.production) {
         return Observable.create((observer: Observer<Date>) => {
            observer.next(new Date());
            observer.complete();
         });
      }
      return this.http.get('https://api.github.com/repos/stratio/egeo').pipe(
         map(response => new Date((<any>response).pushed_at))
      );
   }
}
