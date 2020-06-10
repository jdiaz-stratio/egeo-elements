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
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { IconDemoModel } from './icons-demo.model';

@Injectable()
export class IconsDemoService {

   constructor(private _http: HttpClient) { }

   getIconList(): Observable<IconDemoModel[]> {
      return this._http.get(location.pathname + 'assets/stratio-fonticon.css', {responseType: 'text'}).pipe(
         map(text => this.getIconClasses(text))
      );
   }

   private getIconClasses(text: string): IconDemoModel[] {
      const result: IconDemoModel[] = [];
      let execResult: RegExpExecArray | null;
      const regex = /.icon-(.*?)\:before {[\n].*?content: \"(.*?)"/gm;

      do {
         execResult = regex.exec(text);
         if (execResult) {
            result.push({
               name: execResult[1] || '',
               key: execResult[2] || ''
            });
         }
      } while (execResult);
      return result.sort(this.strComparator);
   }

   private strComparator(item1: IconDemoModel, item2: IconDemoModel): number {
      return item1.name.localeCompare(item2.name);
   }
}
