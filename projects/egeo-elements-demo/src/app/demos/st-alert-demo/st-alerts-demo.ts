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
import { Component } from '@angular/core';
import { STALERT_SEVERITY, StAlertsService } from '@stratio/egeo';

@Component({
   selector: 'st-alerts-demo',
   templateUrl: 'st-alerts-demo.html'
})
export class StAlertsDemoComponent {

    public configDoc: any = {
       html: 'demo/st-alert-demo/st-alerts-demo.html',
       ts: 'demo/st-alert-demo/st-alerts-demo.ts',
       component: 'lib/st-alerts/st-alerts.component.ts'
    };

   constructor(private _alertService: StAlertsService) { }

   showWarning(): void {
      this._alertService.notifyAlert(
         'Warning',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.WARNING);
   }

   showError(): void {
      this._alertService.notifyAlert(
         'Error',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.ERROR,
         {title: 'Action', link: '#'}, 10000);
   }

   showSuccess(): void {
      this._alertService.notifyAlert(
         'Success',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.SUCCESS);
   }

   showInfo(): void {
      this._alertService.notifyAlert(
         'Info',
         'Internal server Error.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
         STALERT_SEVERITY.INFO);
   }
}
