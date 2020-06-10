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
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
   selector: 'st-widget-demo',
   templateUrl: 'st-widget-demo.component.html',
   styleUrls: ['st-widget-demo.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StWidgetDemoComponent {
   public configDoc: any = {
      html: 'demo/st-widget-demo/st-widget-demo.component.html',
      ts: 'demo/st-widget-demo/st-widget-demo.component.ts',
      component: 'lib/st-widget/st-widget.component.ts'
   };
}
