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
import { Observable, BehaviorSubject } from 'rxjs';

import { StAlert, STALERT_SEVERITY, StAlertLink } from './st-alerts.model';

@Injectable()
export class StAlertsService {
   private _alertsList: StAlert[] = [];
   private _nextId: number = 0;

   private _alertsStream: BehaviorSubject<StAlert[]> = new BehaviorSubject<StAlert[]>([]);

   get alertList(): Observable<StAlert[]> {
      return this._alertsStream.asObservable();
   }

   public notifyAlert(title: string, message: string, severity: STALERT_SEVERITY, link?: StAlertLink, timeout?: number, extendedTimeout?: number): void {
      timeout = timeout !== undefined ? timeout : 5000;
      extendedTimeout = extendedTimeout !== undefined ? extendedTimeout : 4000;
      let alert: StAlert = new StAlert(this._nextId, title, message, severity, timeout, extendedTimeout, link);
      alert.removeAlertEvent.subscribe(alertToRemove => this.onNotifyRemove(alertToRemove));
      this.insertAlert(alert);
      this._nextId++;
   }

   private insertAlert(alert: StAlert): void {
      this._alertsList.push(alert);
      this._alertsStream.next(this._alertsList);
   }

   private onNotifyRemove(alert: StAlert): void {
      let pos: number = this._alertsList.findIndex(internalAlert => internalAlert.id === alert.id);
      this._alertsList.splice(pos, 1);
      this._alertsStream.next(this._alertsList);
   }
}
