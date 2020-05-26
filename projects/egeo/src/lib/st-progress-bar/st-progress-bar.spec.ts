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
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { StProgressBarComponent } from './st-progress-bar';


let fixture: ComponentFixture<StProgressBarComponent>;
let component: StProgressBarComponent;
let nativeElement: HTMLElement;

describe('ProgressBar', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StProgressBarComponent]
      }).compileComponents();
   }));


   describe('when init component', () => {

      beforeEach(() => {
         fixture = TestBed.createComponent(StProgressBarComponent);
         component = fixture.componentInstance;
         nativeElement = fixture.nativeElement;
         fixture.detectChanges();
      });

      it('should add two elements with progress-bar class name', () => {
         const progressElement = nativeElement.querySelectorAll('.progress-bar');
         expect(progressElement.length).toBe(2);
      });

      it('the first element should have a progress-bar-primary class', () => {
         const progressElement = nativeElement.querySelector('.progress-bar-primary');
         expect(progressElement).toBeDefined();
      });

      it('the second element should have a progress-bar-secondary class', () => {
         const progressElement = nativeElement.querySelector('.progress-bar-secondary');
         expect(progressElement).toBeDefined();
      });

   });
});

