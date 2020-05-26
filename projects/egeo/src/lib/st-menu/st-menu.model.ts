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

export interface StMenuModel<T> {
  name: string;
  value: T;
  icon?: string;
  subMenus?: Array<StMenuModel<T>>;
  separator?: boolean;
  status?: StMenuStatus;
  disabled?: boolean;
}


export enum StMenuStatus {
   success = 'success',
   warning = 'warning',
   critical = 'critical'
}

export enum StMenuPosition {
   left = 'left',
   right = 'right'
}
