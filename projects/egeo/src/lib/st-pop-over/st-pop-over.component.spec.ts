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

import { StPopModule } from '../st-pop/st-pop.module';
import { StPopOverComponent } from './st-pop-over.component';

let title: string = 'Pop Over Title';

describe('StPopOverComponent', () => {

   let component: StPopOverComponent;
   let fixture: ComponentFixture<StPopOverComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StPopModule],
         declarations: [StPopOverComponent, StPopOverComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StPopOverComponent);
      component = fixture.componentInstance;
   });

   it('It has to display content inside a span with a title', () => {
      component.title = title;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('span');
      expect(itemElement.innerHTML).toContain(title);
   });

   it('It has to hide when hidden input is false/undefined', () => {
      component.title = title;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('[hidden]');
      expect(itemElement).toBeNull();
   });

   it('It has to be hidden when hidden input is true', () => {
      component.title = title;
      component.hidden = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('[hidden]');
      expect(itemElement).toBeDefined();
   });

   it('header is only visible if it has to display the settings button or title is not empty', () => {
      component.title = '';
      component.showSettingBtn = true;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-pop-over__header')).not.toBeNull();

      component.title = '';
      component.showSettingBtn = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-pop-over__header')).toBeNull();

      component.title = 'fake title';
      component.showSettingBtn = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-pop-over__header')).not.toBeNull();
   });

   describe('It has to be able to display or hide the settings button', () => {

      it('It has to hide settings button when showSettingBtn input is false', () => {
         component.showSettingBtn = false;
         fixture.detectChanges();

         let itemElement = fixture.nativeElement.querySelector('.st-pop-over__setting-action');
         expect(itemElement).toBeNull();
      });

      it('It has to display settings button when showSettingBtn input is true', () => {
         component.showSettingBtn = true;
         fixture.detectChanges();

         let itemElement = fixture.nativeElement.querySelector('.st-pop-over__setting-action');
         expect(itemElement).not.toBeNull();
      });

      it('When settings button is clicked it has to emmit an event', () => {
         component.showSettingBtn = true;
         fixture.detectChanges();
         spyOn(component.clickConfig, 'emit');

         let itemElement: HTMLButtonElement = fixture.nativeElement.querySelector('.st-pop-over__setting-action');
         itemElement.click();
         fixture.detectChanges();

         expect(component.clickConfig.emit).toHaveBeenCalled();
      });
   });

   describe('It has to be able to display or hide the arrow icon', () => {

      it('It has to hide arrow when showArrow input is false', () => {
         component.showArrow = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-pop-over__content').classList).not.toContain('st-pop-over__content--with-arrow');
      });

      it('It has to display arrow icon when showArrow input is true', () => {
         component.showArrow = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-pop-over__content').classList).toContain('st-pop-over__content--with-arrow');
      });

   });
});
