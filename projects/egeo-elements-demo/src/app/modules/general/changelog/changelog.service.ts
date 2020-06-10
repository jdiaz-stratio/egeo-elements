/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChangelogService {

   constructor(private http: HttpClient) { }

   getChangelog(): Observable<string> {
      return this.http.get(location.pathname + 'assets/CHANGELOG.md', {responseType: 'text'}).pipe(
         map(response => (<any>response).trim().replace(/^# Changelog/, ''))
      );
   }
}
