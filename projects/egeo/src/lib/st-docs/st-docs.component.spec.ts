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

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { StDocsModule } from './st-docs.module';
import { StHorizontalTabsModule } from '../st-horizontal-tabs/st-horizontal-tabs.module';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { StDocsComponent } from './st-docs.component';
import { StDocsService } from './st-docs.service';

beforeAll(() => {
   TestBed.resetTestEnvironment();
   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});


describe('StDocsComponent', () => {
   let component: StDocsComponent;
   let fixture: ComponentFixture<StDocsComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StHorizontalTabsModule, StDocsModule],
         providers: [StDocsService]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StDocsComponent);
      component = fixture.componentInstance;
      component.htmlFile = 'demo/st-alert-demo/st-alerts-demo.html';
      component.componentFile = 'lib/st-alerts/st-alerts.component.ts';
      component.tsFile = 'demo/st-alert-demo/st-alerts-demo.ts';
      fixture.detectChanges();
   });

   it('should create', () => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
   });
});
