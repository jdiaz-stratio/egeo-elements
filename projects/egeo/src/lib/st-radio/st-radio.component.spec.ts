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

import { SelectOneDispatcher } from '../utils/unique-dispatcher';
import { StRadioComponent } from './st-radio.component';

describe('StRadioComponent', () => {

   let component: StRadioComponent;
   let fixture: ComponentFixture<StRadioComponent>;
   let compiled: any;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StRadioComponent],
         providers: [
            SelectOneDispatcher
         ]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StRadioComponent);
      component = fixture.componentInstance;
      compiled = fixture.debugElement.nativeElement;

   });

   describe('When insert input checked', () => {
      it('Should mark the input as checked', () => {
         component.checked = true;
         fixture.detectChanges();
         expect(compiled.querySelector('input').checked).toBeTruthy();
      });
   });

   describe('When add a value to component ', () => {
      it('Should mark the input with the value', () => {
         component.value = 1;
         fixture.detectChanges();
         expect(compiled.querySelector('input').value).toBe('1');
      });

      it('Should not update the value when no change', () => {
         component.value = 1;
         fixture.detectChanges();
         expect(compiled.querySelector('input').value).toBe('1');
         component.value = 1;
         expect(compiled.querySelector('input').value).toBe('1');
      });
   });

   describe('When check the component as disabled', () => {
      it('Should disabled the input', () => {
         component.disabled = true;
         fixture.detectChanges();
         expect(compiled.querySelector('input').disabled).toBeTruthy();
      });
   });

   describe('When clicked about the component', () => {
      it('Should mark as checked the input', () => {
         compiled.querySelector('input').click();
         fixture.detectChanges();
         expect(compiled.querySelector('input').checked).toBeTruthy();
      });
   });

   describe('When clicked about the component disabled', () => {
      it('Should not be checked when disabled', () => {
         component.disabled = true;
         compiled.querySelector('input').click();
         fixture.detectChanges();
         expect(compiled.querySelector('input').checked).toBeFalsy();
      });
   });
});
