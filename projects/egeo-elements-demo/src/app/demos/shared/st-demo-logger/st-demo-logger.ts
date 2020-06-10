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
import { Observable } from 'rxjs';

import { StDemoLogger, StDemoLoggerSeverity } from './st-demo-loger.model';
import { StDemoLoggerService } from './st-demo-logger.service';

@Component({
   selector: 'st-demo-logger',
   templateUrl: './st-demo-logger.html',
   styleUrls: ['./st-demo-logger.scss']
})
export class StDemoLoggerComponent {

   public logStream: Observable<StDemoLogger[]>;
   public expanded: boolean;
   public width: number = 400;

   constructor(private _loggerService: StDemoLoggerService) {
      this.logStream = this._loggerService.logStream;
   }

   getSeverityClass(log: StDemoLogger): string {
      switch (log.severity) {
         case StDemoLoggerSeverity.ERROR: return 'critical';
         case StDemoLoggerSeverity.WARN: return 'warning';
         case StDemoLoggerSeverity.INFO: return 'info';
         case StDemoLoggerSeverity.DEBUG: return 'debug';
         default: return 'debug';
      }
   }

   notifyEnd(event: DragEvent): void {
      this.width = window.screen.width - event.screenX;
   }

   toggle(): void {
      this.expanded = !this.expanded;
   }
}
