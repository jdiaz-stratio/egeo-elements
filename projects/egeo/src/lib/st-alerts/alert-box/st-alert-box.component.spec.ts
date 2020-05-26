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
import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


import { StAlertBoxComponent } from './st-alert-box.component';
import { StAlert, STALERT_SEVERITY, StAlertLink } from '../st-alerts.model';


describe('StAlertsComponent', () => {
   describe('StAlertBoxComponent', () => {
      let component: StAlertBoxComponent;
      let fixture: ComponentFixture<StAlertBoxComponent>;

      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [StAlertBoxComponent]
         })
            .compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StAlertBoxComponent);
         component = fixture.componentInstance;
      });

      it('Should be initialized correctly', fakeAsync(() => {
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, undefined);
         component.showInConsole = false;
         fixture.detectChanges();
         tick(0);
         expect(component.opacity).toEqual(0);
         tick(500);
         expect(component.opacity).toBeGreaterThan(0);
         discardPeriodicTasks();
      }));

      it('Should return correct icon', () => {
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, undefined);
         component.showInConsole = false;
         fixture.detectChanges();

         expect(component.getIcon()).toEqual('icon-ban');

         component.alert.severity = STALERT_SEVERITY.WARNING;
         expect(component.getIcon()).toEqual('icon-alert');

         component.alert.severity = STALERT_SEVERITY.SUCCESS;
         expect(component.getIcon()).toEqual('icon-circle-check');

         component.alert.severity = undefined;
         expect(component.getIcon()).toEqual('');
      });

      it('Should return correct color by severity', () => {
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, undefined);
         component.showInConsole = false;
         fixture.detectChanges();

         expect(component.getSeverityColor()).toEqual('sth-alert-box-error');

         component.alert.severity = STALERT_SEVERITY.WARNING;
         expect(component.getSeverityColor()).toEqual('sth-alert-box-warning');

         component.alert.severity = STALERT_SEVERITY.SUCCESS;
         expect(component.getSeverityColor()).toEqual('sth-alert-box-success');

         component.alert.severity = undefined;
         expect(component.getSeverityColor()).toEqual('');
      });

      it('Should go to link', () => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, link);
         component.showInConsole = false;
         fixture.detectChanges();

         spyOn(window, 'open');

         component.goTo();

         expect(window.open).toHaveBeenCalled();
         expect(window.open).toHaveBeenCalledWith(link.link);
      });

      it('Should notify in console error', () => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, link);
         component.showInConsole = true;
         spyOn(console, 'error');
         spyOn(console, 'log');
         spyOn(console, 'warn');
         fixture.detectChanges();

         expect(console.log).not.toHaveBeenCalled();
         expect(console.warn).not.toHaveBeenCalled();
         expect(console.error).toHaveBeenCalled();
         expect(console.error).toHaveBeenCalledWith(`ERROR-${component.alert.title}: ${component.alert.message}`);
      });

      it('Should notify in console warning', () => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.WARNING, 1000, 500, link);
         component.showInConsole = true;
         spyOn(console, 'error');
         spyOn(console, 'log');
         spyOn(console, 'warn');
         fixture.detectChanges();

         expect(console.log).not.toHaveBeenCalled();
         expect(console.error).not.toHaveBeenCalled();
         expect(console.warn).toHaveBeenCalled();
         expect(console.warn).toHaveBeenCalledWith(`WARNING-${component.alert.title}: ${component.alert.message}`);
      });

      it('Should notify in console info', () => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.SUCCESS, 1000, 500, link);
         component.showInConsole = true;
         spyOn(console, 'error');
         spyOn(console, 'log');
         spyOn(console, 'warn');
         fixture.detectChanges();

         expect(console.error).not.toHaveBeenCalled();
         expect(console.warn).not.toHaveBeenCalled();
         expect(console.log).toHaveBeenCalled();
         expect(console.log).toHaveBeenCalledWith(`SUCCESS-${component.alert.title}: ${component.alert.message}`);
      });

      it('Should notify in console error by default if not found severity', () => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', undefined, 1000, 500, link);
         component.showInConsole = true;
         spyOn(console, 'error');
         spyOn(console, 'log');
         spyOn(console, 'warn');
         fixture.detectChanges();

         expect(console.log).not.toHaveBeenCalled();
         expect(console.warn).not.toHaveBeenCalled();
         expect(console.error).toHaveBeenCalled();
         expect(console.error).toHaveBeenCalledWith(`ERROR: severity not found for ${component.alert.title}: ${component.alert.message}`);
      });

      it('Should notify pause alert', fakeAsync(() => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, link);
         spyOn(component.alert, 'pauseNotify').and.callThrough();
         fixture.detectChanges();

         tick(500);

         let alert: HTMLDivElement = fixture.debugElement.query(By.css('.sth-alert-box')).nativeElement;

         expect(alert).toBeDefined();
         alert.dispatchEvent(new Event('mouseenter'));
         fixture.detectChanges();

         expect(component.alert.pauseNotify).toHaveBeenCalled();
         expect(component.opacity).toEqual(1);

         discardPeriodicTasks();
      }));

      it('Should notify continue alert after pause', fakeAsync(() => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, link);
         spyOn(component.alert, 'pauseNotify').and.callThrough();
         spyOn(component.alert, 'continueNotify').and.callThrough();
         fixture.detectChanges();

         tick(500);

         let alert: HTMLDivElement = fixture.debugElement.query(By.css('.sth-alert-box')).nativeElement;

         expect(alert).toBeDefined();
         alert.dispatchEvent(new Event('mouseenter'));
         fixture.detectChanges();

         expect(component.alert.pauseNotify).toHaveBeenCalled();
         expect(component.opacity).toEqual(1);

         alert.dispatchEvent(new Event('mouseleave'));
         fixture.detectChanges();

         expect(component.alert.continueNotify).toHaveBeenCalled();
         tick(1000);
         expect(component.opacity).toBeLessThan(1);

         discardPeriodicTasks();
      }));

      it('Should notify close alert', fakeAsync(() => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, link);
         spyOn(component.alert, 'cancel').and.callThrough();
         fixture.detectChanges();

         tick(500);

         let closeButton: HTMLDivElement = fixture.debugElement.query(By.css('.sth-alert-box-close-button')).nativeElement;

         expect(closeButton).toBeDefined();
         closeButton.click();
         fixture.detectChanges();

         expect(component.alert.cancel).toHaveBeenCalled();

         tick(500);
         expect(component.opacity).toBeCloseTo(0);

         discardPeriodicTasks();
      }));

      it('Should fade out alert after life time', fakeAsync(() => {
         let link: StAlertLink = { link: 'test', title: 'test title' };
         component.alert = new StAlert(0, 'Error', 'error message', STALERT_SEVERITY.ERROR, 1000, 500, link);
         fixture.detectChanges();

         tick(500); // Fade in
         expect(component.opacity).toBeGreaterThanOrEqual(0.9);

         tick(1000); // life
         expect(component.opacity).toBeGreaterThanOrEqual(0.9);

         tick(600); // Fade out
         expect(component.opacity).toBeLessThanOrEqual(0.1);

         discardPeriodicTasks();
      }));


   });
});
