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
// import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { fakeAsync, tick } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { StAlertsService } from './st-alerts.service';
import { StAlert, STALERT_SEVERITY } from './st-alerts.model';


describe('StAlertsComponent', () => {
   describe('StAlertsService', () => {

      it('Should be get alertList correctly', () => {
         let service: StAlertsService = new StAlertsService();
         let responseFunction = jasmine.createSpy('response');
         let subscription: Subscription = service.alertList.subscribe(responseFunction);

         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith([]);
         subscription.unsubscribe();

         service.notifyAlert('fake title', 'fake message', STALERT_SEVERITY.ERROR);
         subscription = service.alertList.subscribe(result => {
            expect(result).toBeDefined();
            expect(result.length).toBe(1);
         });
      });

      it('Should be add with different parameters correctly', () => {
         let service: StAlertsService = new StAlertsService();
         let subscription: Subscription;

         service.notifyAlert('fake title', 'fake message', STALERT_SEVERITY.ERROR);
         subscription = service.alertList.subscribe(result => {
            expect(result).toBeDefined();
            expect(result[0]).toBeDefined();
            expect(result[0].timeout).toEqual(5000);
            expect(result[0].extendedTimeout).toEqual(4000);
            expect(result.length).toBe(1);
         });
         subscription.unsubscribe();

         service.notifyAlert('fake title', 'fake message', STALERT_SEVERITY.ERROR, undefined, 2000, 1000);
         subscription = service.alertList.subscribe(result => {
            expect(result).toBeDefined();
            expect(result.length).toBe(2);
            expect(result[1].timeout).toEqual(2000);
            expect(result[1].extendedTimeout).toEqual(1000);
         });
         subscription.unsubscribe();
      });


      it('Should be remove an alert', fakeAsync(() => {
         let service: StAlertsService = new StAlertsService();
         let subscription: Subscription;
         let alert: StAlert;

         service.notifyAlert('fake title', 'fake message', STALERT_SEVERITY.ERROR);
         subscription = service.alertList.subscribe(result => {
            expect(result).toBeDefined();
            expect(result[0]).toBeDefined();
            expect(result[0].timeout).toEqual(5000);
            expect(result[0].extendedTimeout).toEqual(4000);
            expect(result.length).toBe(1);
            alert = result[0];
         });
         subscription.unsubscribe();

         alert.cancel();
         tick(2000);
         subscription = service.alertList.subscribe(result => {
            expect(result).toBeDefined();
            expect(result.length).toBe(0);
         });

         subscription.unsubscribe();
      }));
   });
});
