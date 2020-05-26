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

import { ChangeDetectorRef, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { StDocsService } from './st-docs.service';
import { StHorizontalTab } from '../st-horizontal-tabs/st-horizontal-tabs.model';
import { zip } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
   selector: 'st-docs',
   templateUrl: './st-docs.component.html',
   styleUrls: ['./st-docs.component.scss']
})
export class StDocsComponent implements OnInit, OnDestroy {

   @Input() htmlFile?: string;
   @Input() tsFile?: string;
   @Input() componentFile?: string;

   public htmlCode: string;
   public demoTsCode: string;
   public componentTsCode: string;

   public options: StHorizontalTab[] = [
      {id: 'demo', text: 'Overview'},
      {id: 'html', text: 'Html'},
      {id: 'implementation', text: 'Implementation'},
      {id: 'component', text: 'Component'}
   ];

   public active: StHorizontalTab = this.options[0];

   private subscription: Subscription;

   constructor(private cd: ChangeDetectorRef, private docsService: StDocsService) {}

   ngOnInit(): void {
      this.subscription = this.getFile(this.htmlFile).pipe(zip(this.getFile(this.tsFile), this.getFile(this.componentFile), (htmlCode, tsCode, componentCode) =>
      ({ htmlCode, tsCode, componentCode }))
      ).subscribe((data) => {
         this.htmlCode = (data && (<any>data).htmlCode) ? (<any>data).htmlCode : null ;
         this.demoTsCode = (data && (<any>data).tsCode) ? (<any>data).tsCode : null ;
         this.componentTsCode = (data && (<any>data).componentCode) ? (<any>data).componentCode : null ;
         this.disableTabOption(this.htmlCode === null, this.demoTsCode === null, this.componentTsCode === null);
         this.cd.markForCheck();
      });
   }

   ngOnDestroy(): void {
      this.subscription.unsubscribe();
   }

   onChangeOption(event: Event): void {
      this.active = <any> event;
   }

   private getFile(file?: string): Observable<any> {
      return this.docsService.getFile(file);
   }

   private disableTabOption(html: boolean, demoCode: boolean, componentCode: boolean): void {
      if (html) {
         this.options = this.filterOption(this.options, 'html');
      }

      if (demoCode) {
         this.options = this.filterOption(this.options, 'implementation');
      }

      if (componentCode) {

         this.options = this.filterOption(this.options, 'component');
      }
   }

   private filterOption(options: StHorizontalTab[], name: string): StHorizontalTab[] {
      return options.filter((element: any) => {
         return element.id !== name;
      });
   }

}
