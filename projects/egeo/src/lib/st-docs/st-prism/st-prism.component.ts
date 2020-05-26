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
   AfterViewChecked,
   Component,
   Input,
   ViewEncapsulation
 } from '@angular/core';
 import 'prismjs';
 import 'prismjs/components/prism-typescript';

declare var Prism;

 @Component({
   encapsulation: ViewEncapsulation.None,
   selector: 'st-prism-highlight',
   template: `<pre class="language-{{language}}" *ngIf="language"><code class="language-{{language}}"><ng-content></ng-content></code></pre>`
 })
 export class StPrismComponent implements AfterViewChecked {
   @Input('language') language: string;

   @Input('async') private async: boolean = false;
   @Input('callback') private callback?: (element: Element) => void | undefined = undefined;

   ngAfterViewChecked(): void {
     this.highlightAll(this.async, this.callback);
   }

   /**
    * Low-level function, only use if you know what you’re doing. It accepts a string of text as input and the
    * language definitions to use, and returns a string with the HTML produced.
    */
   highlightElement(element: any, async: boolean, callback?: (element: Element) => void | undefined): void {
     Prism.highlightElement(element, async, callback);
   }

   /**
    * This is the most high-level function in Prism’s API. It fetches all the elements that have a .language-xxxx
    * class and then calls Prism.highlightElement() on each one of them.
    */
   highlightAll(async: boolean, callback?: (element: Element) => void | undefined): void {
     Prism.highlightAll(async, callback);
   }
 }
