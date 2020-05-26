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
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StFullscreenLayoutComponent } from './st-fullscreen-layout';
import { StWindowRefService } from '../utils/window-service';

// Component

describe('StFullscreenLayoutComponent', () => {

   let component: StFullscreenLayoutComponent;
   let fixture: ComponentFixture<StFullscreenLayoutComponent>;
   let fakeWindowRefService: any;

   class FakeWindowRefService {
      get nativeWindow(): any {
         return window;
      }
   }

   beforeEach(async(() => {
      fakeWindowRefService = new FakeWindowRefService();

      TestBed.configureTestingModule({
         providers: [
            { provide: StWindowRefService, useValue: fakeWindowRefService }
         ],
         declarations: [StFullscreenLayoutComponent],
         schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StFullscreenLayoutComponent);
      component = fixture.componentInstance;
   });

   it('it should disable scroll to body in order not to see the content of the previous page', () => {
      expect(window.document.body.style.overflow).toEqual('hidden');

      component.ngOnDestroy();

      expect(fakeWindowRefService.nativeWindow.document.body.overflow).toBeUndefined();
   });

   it('If input fullWidth is true, a class is displayed to fit the entire screen´s width', () => {
      component.fullWidth = true;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-fullscreen-layout').classList).toContain('full-width');
   });
});
