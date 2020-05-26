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
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StProgressBarModule } from '../st-progress-bar/st-progress-bar.module';
import { StWidgetComponent } from './st-widget.component';

let component: StWidgetComponent;
let fixture: ComponentFixture<StWidgetComponent>;
let nativeElement: any;
let title: string = 'Widget';
let elementId = 'test-id';

describe('StWidgetComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StProgressBarModule],
         declarations: [StWidgetComponent]
      }).compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StWidgetComponent);
      component = fixture.componentInstance;
   });


   it('If host element has defined id, Element Id should be the same plus "-widget" suffix', () => {
      fixture.nativeElement.id = elementId;
      fixture.detectChanges();

      nativeElement = fixture.nativeElement;

      expect(fixture.nativeElement.querySelector('.st-widget').id).toEqual(elementId + '-widget');
   });


   it('If host element does not have defined id, Element Id should be undefined', () => {
      fixture.nativeElement.id = null;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-widget').id).toEqual('');
   });


   it('Should be initialized correctly and title are displayed correctly', () => {
      component.title = title;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-widget__title').textContent).toContain(title);
   });

   describe('while data is being loaded', () => {
      beforeEach(() => {
         component.loading = true;
         fixture.detectChanges();
      });

      it('loading status elements with default text should be displayed', () => {
         expect(fixture.nativeElement.querySelector('.loading-status')).not.toBeNull();
         expect(fixture.nativeElement.querySelector('.loading-status-text').textContent).toContain('Loading data');
         expect(fixture.nativeElement.querySelector('.st-widget__content')).toBeNull();
      });

      it('if overwriteLoadingData is introduced as input, text "Loading data" should be overwritten', async(() => {
         let fakeText: string = 'this is an fake text';

         component.overwriteLoadingData = fakeText;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.loading-status')).not.toBeNull();
         expect(fixture.nativeElement.querySelector('.loading-status-text').textContent).toBe(fakeText);
         expect(fixture.nativeElement.querySelector('.st-widget__content')).toBeNull();
      }));
   });

   it('when content has been loaded, it should be displayed', () => {
      component.loading = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.loading-status')).toBeNull();
      expect(fixture.nativeElement.querySelector('.st-widget__content')).not.toBeNull();

   });

   it('when element is initialized, both draggable and dragging variables are false', () => {
      expect(fixture.nativeElement.draggable).toBeFalsy();
      expect(fixture.nativeElement.dragging).toBeFalsy();
   });

   describe('it can be customized to be draggable or not', () => {
      it('only if input draggable is true, a button will be displayed to drag widget', () => {
         component.draggable = false;
         fixture.detectChanges();

         let dragButton = fixture.debugElement.query(By.css('span.drag-drop-action'));

         expect(dragButton).toBeNull();

         component.draggable = true;
         fixture.detectChanges();

         dragButton = fixture.debugElement.query(By.css('span.drag-drop-action'));

         expect(dragButton).not.toBeNull();
      });

      it('if user tries to drag a widget without clicking on the drag button, widget is not dragged', () => {
         fixture.detectChanges();
         let widget = fixture.debugElement.query(By.css('.st-widget'));

         widget.triggerEventHandler('dragstart', {});
         fixture.detectChanges();

         expect(component.dragging).toBeFalsy();
      });

      it('when user clicks on the drag button, and starts to drag the widget, dragging status is updated', () => {
         fixture.detectChanges();
         let dragButton = fixture.debugElement.query(By.css('span.drag-drop-action'));
         let widget = fixture.debugElement.query(By.css('.st-widget'));

         dragButton.triggerEventHandler('mousedown', {});
         widget.triggerEventHandler('dragstart', {});

         fixture.detectChanges();
         expect(component.dragging).toBeTruthy();

         widget.triggerEventHandler('dragend', {});
         fixture.detectChanges();

         expect(component.dragging).toBeFalsy();
      });

      it('if user releases the drag button before dragging widget, widget should not been dragged', () => {
         fixture.detectChanges();
         let dragButton = fixture.debugElement.query(By.css('span.drag-drop-action'));
         let widget = fixture.debugElement.query(By.css('.st-widget'));

         dragButton.triggerEventHandler('mousedown', {}); // press button
         fixture.detectChanges();

         dragButton.triggerEventHandler('mouseup', {}); // release button
         fixture.detectChanges();

         dragButton.triggerEventHandler('dragstart', {}); // try to drag widget
         fixture.detectChanges();

         expect(component.dragging).toBeFalsy();
         expect(widget.nativeElement.draggable).toBeFalsy();
      });
   });

   describe('widget can be configured to display or not its settings button', () => {
      it('settings button is displayed by default', () => {
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('span.setting-action')).not.toBeNull();
      });

      it('if the input displaySettingsButton is false, settings button is not displayed', () => {
         component.displaySettingsButton = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('span.setting-action')).toBeNull();
      });
   });
});
