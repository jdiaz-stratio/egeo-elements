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
import { Observable } from 'rxjs';

export interface EgeoResolverKeys {
   path: string;
   toResolve: any;
   resolved?: any;
}

export interface TranslateServiceType {
   get(key: string | string[], interpolateParams?: Object): Observable<any>;
}

export interface TranslateableElement {
   key: string;
   translate: boolean;
}
