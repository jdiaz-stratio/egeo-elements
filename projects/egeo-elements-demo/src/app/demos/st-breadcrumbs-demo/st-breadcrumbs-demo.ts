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
import { clone as _clone } from 'lodash';

import { StDemoLoggerSeverity } from '../shared/st-demo-logger/st-demo-loger.model';
import { StDemoLoggerService } from '../shared/st-demo-logger/st-demo-logger.service';
import { StBreadCrumbItem } from '@stratio/egeo';

@Component({
   selector: 'st-breadcrumbs-demo',
   templateUrl: 'st-breadcrumbs-demo.html'
})
export class StBreadcrumbsDemoComponent {
   public configDoc: any = {
      html: 'demo/st-breadcrumbs-demo/st-breadcrumbs-demo.html',
      ts: 'demo/st-breadcrumbs-demo/st-breadcrumbs-demo.ts',
      component: 'lib/st-breadcrumbs/st-breadcrumbs.component.ts'
   };

   public output: string;
   public options: StBreadCrumbItem[] = [];

   private originalOptions: StBreadCrumbItem[] = [{id: 'home', label: 'Home', icon: 'icon-home2' }];
   private otherOptions: StBreadCrumbItem[] = [{ id: 'home', icon: 'icon-home2' },
      { id: 'downLeft', icon: 'icon-corner-down-left' },
      { id: 'downRight', icon: 'icon-corner-down-right' },
      { id: 'leftDown', icon: 'icon-corner-left-down' },
      { id: 'leftUp', icon: 'icon-corner-left-up' },
      { id: 'rightDown', icon: 'icon-corner-right-down' },
      { id: 'rightUp', icon: 'icon-corner-right-up' },
      { id: 'upLeft', icon: 'icon-corner-up-left' },
      { id: 'upRight', icon: 'icon-corner-up-right' }
   ];

   private otherOptions2: StBreadCrumbItem[] = [{ id: 'home', icon: 'icon-home2' },
      { id: 'downLeft', label: 'icon-corner-down-left' },
      { id: 'downRight', icon: 'icon-corner-down-right' },
      { id: 'leftDown', label: 'icon-corner-left-down' },
      { id: 'leftUp', icon: 'icon-corner-left-up' },
      { id: 'rightDown', label: 'icon-corner-right-down' },
      { id: 'rightUp', icon: 'icon-corner-right-up' },
      { id: 'upLeft', label: 'icon-corner-up-left' },
      { id: 'upRight', icon: 'icon-corner-up-right' }
   ];

   constructor(private _logger: StDemoLoggerService) {
      for (let i = 1; i < 15; i++) {
         this.originalOptions.push({id: 'level_' + i, label: 'level' + i, icon: 'icon-check'});
      }
      this.reset();
      this._logger.maxMessages = 15;
   }

   outputEmitter(pos: number): void {
      this.options = this.options.slice(0, pos + 1);
      this._logger.notifyAlert(StDemoLoggerSeverity.INFO, `Pos clicked: ${pos}`);
   }

   reset(): void {
      this.options = _clone(this.originalOptions);
   }
}
