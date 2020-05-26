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
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { StBreadcrumbItemComponent } from './st-breadcrumbs-item.component';

describe('StBreadCrumbsItemComponent', () => {
   let component: StBreadcrumbItemComponent;
   let fixture: ComponentFixture<StBreadcrumbItemComponent>;

   beforeEach(
      async(() => {
         TestBed.configureTestingModule({
            declarations: [StBreadcrumbItemComponent],
            schemas: [NO_ERRORS_SCHEMA]
         }).compileComponents(); // compile template and css
      })
   );

   beforeEach(() => {
      fixture = TestBed.createComponent(StBreadcrumbItemComponent);
      component = fixture.componentInstance;
   });

   describe('If initialized', () => {
      it('Should create the component', () => {
         expect(component).toBeTruthy();
      });

      it(`Should be initialized the parameters`, () => {
         component.active = false;
         component.qaTag = '';
         fixture.detectChanges();

         expect(component.qaTag).toEqual('');
         expect(component.active).toBeFalsy();

         component.active = true;
         fixture.detectChanges();
         expect(component.active).toBeTruthy();


      });
   });
});
