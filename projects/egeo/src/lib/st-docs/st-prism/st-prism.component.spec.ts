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

import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { StPrismComponent } from './st-prism.component';
import { StPrismModule } from './st-prism.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('PrismComponent', () => {

  let comp: StPrismComponent;
  let debugElement: any;
  let fixture: ComponentFixture<StPrismComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StPrismModule]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(StPrismComponent);

    // get from fixture
    comp = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should be defined', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should havent pre html ', async(() => {
    expect(nativeElement.querySelector('pre')).toBeNull();
  }));
  it('should have pre html ', async(() => {
    comp.language = 'html';
    fixture.detectChanges();
    expect(nativeElement.querySelector('pre')).toBeTruthy();
  }));
  it('should have pre > code html ', async(() => {
    comp.language = 'html';
    fixture.detectChanges();
    expect(nativeElement.querySelector('pre > code')).toBeTruthy();
  }));
  it('should have class language-html defined ', async(() => {
    comp.language = 'html';
    fixture.detectChanges();
    expect(nativeElement.querySelector('code[class*="language-html"]')).toBeTruthy();
  }));
});
