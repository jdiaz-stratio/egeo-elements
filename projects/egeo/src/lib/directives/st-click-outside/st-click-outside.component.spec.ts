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
import { FormsModule } from '@angular/forms';

// Component
import { Component } from '@angular/core';
import { StClickOutside } from './st-click-outside.directive';

let component: TestStClickOutsideComponent;
let fixture: ComponentFixture<any>;
let compiled: any;

@Component({
   template: `<div><input (clickOutside)="onClickOutside()"></div>`
})
class TestStClickOutsideComponent {

   onClickOutside(): void {
   }
}

describe('StClickOutside', () => {
   beforeEach(
      async(() => {
         TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TestStClickOutsideComponent, StClickOutside]
         }).compileComponents(); // compile template and css
      })
   );

   beforeEach(() => {
      fixture = TestBed.createComponent(TestStClickOutsideComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
   });

   it('Elements with this directive should listen clicks outside them', () => {
      spyOn(component, 'onClickOutside');

      fixture.nativeElement.querySelector('input').click();

      expect(component.onClickOutside).not.toHaveBeenCalled();

      fixture.nativeElement.querySelector('input').parentElement.click();

      expect(component.onClickOutside).toHaveBeenCalled();
   });
});
