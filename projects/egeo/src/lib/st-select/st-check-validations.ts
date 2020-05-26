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

import { Directive, OnInit, OnDestroy, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subscription } from 'rxjs';


@Directive({ selector: '[stCheckValidations]' })
export class StCheckValidationsDirective implements OnInit, OnDestroy {
   @Input() errorMessage: string;

   onChange: (_: any) => void;

   private sub: Subscription;

   constructor(private control: NgControl) { }

   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   ngOnInit(): void {
      this.sub = this.control.statusChanges.subscribe(() => this.notifyErrorsIfExists());
   }

   ngOnDestroy(): void {
      if (this.sub) {
         this.sub.unsubscribe();
      }
   }

   // TODO implement error check and notify correct error
   private notifyErrorsIfExists(): void {
      if (this.control.valid && this.onChange) {
         this.onChange(null);
      } else if (this.onChange) {
         this.onChange(this.errorMessage);
      }
   }
}
