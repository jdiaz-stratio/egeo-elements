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
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

import { StAlertsComponent } from './st-alerts.component';
import { StAlertsService } from './st-alerts.service';
import { StAlertBoxComponent } from './alert-box/st-alert-box.component';
import { StAlert, STALERT_SEVERITY, StAlertLink } from './st-alerts.model';


class MockService {
   alertList: Observable<StAlert[]> = Observable.create((observer: Observer<StAlert[]>) => {
      observer.next([new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, undefined)]);
      observer.complete();
   });
}


describe('StAlertsComponent', () => {
   let component: StAlertsComponent;
   let fixture: ComponentFixture<StAlertsComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StAlertsComponent, StAlertBoxComponent],
         providers: [{ provide: StAlertsService, useClass: MockService }]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StAlertsComponent);
      component = fixture.componentInstance;
   });

   it('Should be init correctly', fakeAsync(() => {
      spyOn(console, 'error');
      component.qaTag = 'test';
      component.showInConsole = true;

      fixture.detectChanges();
      expect(console.error).toHaveBeenCalled();

      tick(500);
      let alerts: DebugElement[] = fixture.debugElement.queryAll(By.css('.sth-alert-box'));
      expect(alerts).toBeDefined();
      expect(alerts.length).toBe(1);

      discardPeriodicTasks();
   }));
});
