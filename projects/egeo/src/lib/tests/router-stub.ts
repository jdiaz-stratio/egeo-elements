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
   Directive,
   Input
} from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

export class RouterStub {
   readonly events: Observable<Event>;
   private subject: Subject<any> = new Subject<any>();
   private _url: string = '';

   set url(value: string) { this._url = value; }
   get url(): string { return this._url; }

   constructor() { this.events = this.subject.asObservable(); }
   navigateByUrl(url: string): string { return url; }
   navigate(commands: any[], extras?: any): Promise<boolean> { return Promise.resolve(true); }
   launchNewEvent(event: any): void { this.subject.next(event); }
   closeSubscriptions(): void { this.subject.complete(); }
}


@Directive({
   selector: '[routerLink]',
   host: {
      '(click)': 'onClick()'
   }
})
export class RouterLinkStubDirective {
   @Input('routerLink') linkParams: any;
   navigatedTo: any = null;

   onClick(): void {
      this.navigatedTo = this.linkParams;
   }
}
