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

import { Color, RGB } from './colors.model';

@Injectable()
export class ColorsService {

   constructor(private http: HttpClient) { }

   getColorsList(): Observable<Color[]> {
      return this.http.get(location.pathname + 'assets/_colors.scss', {responseType: 'text'}).pipe(
         map(text => this.getColors(text))
      );
   }

   private getColors(text: string): Color[] {
      const colors: Color[] = [];
      text = text.replace(/\/\*\*(.|[\r\n])*\*\//g, '');
      const lines: string[] = text.split(/\n/);
      let group: string = '';
      const regex: RegExp = /\$(.*?)\:\s*?\#(.*?)\s*\!/;
      let execResult: RegExpExecArray | null;


      lines.forEach(line => {
         if (line.startsWith('//')) {
            group = line.substring(2, line.length - 1).trim();
         } else if (line.startsWith('$')) {
            execResult = regex.exec(line);
            let color: string = '';
            let hex: string = '';
            if (execResult) {
               colors.push({
                  category: group,
                  name: execResult[1] || '',
                  hex: '#' + execResult[2] || '',
                  rgb: this.hexToRgb('#' + execResult[2])
               });
            }
         }
      });
      return colors;
   }

   private hexToRgb(hex: string): RGB {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
         r: parseInt(result[1], 16),
         g: parseInt(result[2], 16),
         b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
   }
}
