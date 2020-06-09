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
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DemoSideMenu } from './menu.model';
@Component({
   selector: 'demo-menu',
   templateUrl: './menu.html',
   styleUrls: ['./menu.scss']
})
export class MenuComponent implements OnInit {

   @Input() options: DemoSideMenu[] = [];
   @Output() selected: EventEmitter<number> = new EventEmitter<number>();

   constructor(private _router: Router) {

   }

   ngOnInit(): void {
      const currentURL = this._router.url.split('/');
      const currentDemo = currentURL[currentURL.length - 1];
      const currentPosition = this.options.findIndex((_) => _.url.indexOf('/' + currentDemo) !== -1);
      if (currentPosition > -1) {
         this.selected.emit(currentPosition);
      }
   }

   navigate(url: string, position: number): void {
      this._router.navigate([url]);
      this.selected.emit(position);
   }

   isActive(url: string): boolean {
      return this._router.url.indexOf(url) > -1;
   }
}
