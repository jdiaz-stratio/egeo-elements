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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

/**
 * @description {Component} Spinner
 *
 * This component shows a spinner when something is being loaded
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-spinner theme="secondary">
 *    </st-spinner>
 * ```
 */
@Component({
   selector: 'st-spinner',
   templateUrl: './st-spinner.component.html',
   styleUrls: ['./st-spinner.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StSpinnerComponent implements OnInit {
   /** @input {string} [theme='primary'] Name of the spinner theme. By default it is 'primary' */
   @Input() theme: string = 'primary';

   public classesValue: any;

   constructor(private _cd: ChangeDetectorRef) {}

   ngOnInit(): void {
      this.classesValue = this.getClasses();
      this._cd.markForCheck();
   }

   getClasses(): any {
      const result: any = {path: true};
      if (this.theme) {
         const themeClass = 'path--' + this.theme;
         result[themeClass] = true;
      }
      return result;
   }
}
