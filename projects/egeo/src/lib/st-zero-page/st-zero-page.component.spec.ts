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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StZeroPageComponent } from './st-zero-page.component';
import { ChangeDetectionStrategy } from '@angular/core';

let component: StZeroPageComponent;
let fixture: ComponentFixture<StZeroPageComponent>;

describe('StZeroPageComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StZeroPageComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StZeroPageComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StZeroPageComponent);
      component = fixture.componentInstance;
   });

   it('It should display an image with the source specified by input', () => {
      component.imageSource = 'fake/path/image.svg';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('img').src).toContain(component.imageSource);
   });

   it('Should display a title and a info message', () => {
      component.title = 'Fake title';
      component.info = 'Fake info message';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-zero-page__title').innerText).toEqual(component.title);
      expect(fixture.nativeElement.querySelector('.st-zero-page__info').innerText).toEqual(component.info);
   });

});
