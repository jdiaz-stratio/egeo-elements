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
import {
   Component,
   Input,
   OnInit,
   ChangeDetectorRef,
   ChangeDetectionStrategy
} from '@angular/core';

import { STALERT_SEVERITY, StAlert } from '../st-alerts.model';

@Component({
   selector: 'st-alert-box',
   templateUrl: './st-alert-box.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StAlertBoxComponent implements OnInit {

   @Input() alert: StAlert;
   @Input() showInConsole: boolean = false;

   public iconValue: string;
   public opacity: number = 0;
   public severityColorValue: string;

   constructor(private _cd: ChangeDetectorRef) {
   }

   ngOnInit(): void {
      this.alert.opacity.subscribe(opacity => this.changeOpacity(opacity));
      this.alert.notify();
      if (this.showInConsole) {
         this.notifyConsole();
      }
      this.severityColorValue = this.getSeverityColor();
      this.iconValue = this.getIcon();
   }

   enter(): void {
      this.alert.pauseNotify();
   }

   leave(): void {
      this.alert.continueNotify();
   }

   closeAlert(): void {
      this.alert.cancel();
   }

   getIcon(): string {
      switch (this.alert.severity) {
         case STALERT_SEVERITY.ERROR: return 'icon-ban';
         case STALERT_SEVERITY.WARNING: return 'icon-alert';
         case STALERT_SEVERITY.SUCCESS: return 'icon-circle-check';
         default: return '';
      }
   }

   getSeverityColor(): string {
      switch (this.alert.severity) {
         case STALERT_SEVERITY.ERROR: return 'sth-alert-box-error';
         case STALERT_SEVERITY.WARNING: return 'sth-alert-box-warning';
         case STALERT_SEVERITY.SUCCESS: return 'sth-alert-box-success';
         default: return '';
      }
   }

   goTo(): void {
      window.open(this.alert.link.link);
   }

   changeOpacity(opacity: number): void {
      this.opacity = opacity;
      this._cd.markForCheck();
   }

   private notifyConsole(): void {
      switch (this.alert.severity) {
         case STALERT_SEVERITY.ERROR: console.error(`ERROR-${this.alert.title}: ${this.alert.message}`); break;
         case STALERT_SEVERITY.WARNING: console.warn(`WARNING-${this.alert.title}: ${this.alert.message}`); break;
         case STALERT_SEVERITY.SUCCESS: console.log(`SUCCESS-${this.alert.title}: ${this.alert.message}`); break;
         default: console.error(`ERROR: severity not found for ${this.alert.title}: ${this.alert.message}`); break;
      }
   }
}
