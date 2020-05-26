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
import { StBubbleComponent } from './st-bubble.component';

let text: string = 'Bubble text';

describe('StBubbleComponent', () => {

   let component: StBubbleComponent;
   let fixture: ComponentFixture<StBubbleComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StPopModule],
         declarations: [StBubbleComponent, StBubbleComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StBubbleComponent);
      component = fixture.componentInstance;
   });

   it('It has to display a text inside a span', () => {
      component.text = text;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('span');
      expect(itemElement.innerHTML).toContain(text);
   });

   it('It has to hide when hidden input is false/undefined', () => {
      component.text = text;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('[hidden]');
      expect(itemElement).toBeNull();
   });

   it('It has to be hidden when hidden input is true', () => {
      component.text = text;
      component.hidden = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('[hidden]');
      expect(itemElement).toBeDefined();
   });

   describe('It has to be able to display or hide the arrow icon', () => {

      it('It has to hide arrow when showArrow input is false', () => {
         component.showArrow = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).not.toContain('st-bubble__content--with-arrow');
      });

      it('It has to display arrow icon when showArrow input is true', () => {
         component.showArrow = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).toContain('st-bubble__content--with-arrow');
      });
   });

   describe('Animation should be enabled or disabled using the input "animation"', () => {
      it ('If input "animation" is true, animation is enabled', () => {
         component.animation = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).toContain('st-bubble__content--animated');
      });

      it ('If input "animation" is false, animation is disabled', () => {
         component.animation = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).not.toContain('st-bubble__content--animated');
      });
   });

   describe('Small theme should be enabled or disabled using the input "small"', () => {
      it ('If input "small" is true, theme small is enabled', () => {
         component.small = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).toContain('st-bubble__content--small');
      });

      it ('If input "small" is false, theme small is disabled', () => {
         component.small = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).not.toContain('st-bubble__content--small');
      });
   });

   describe('It should be able to be configure to be displayed to the left or right', () => {
      it ('If input "openToLeft" is true, bubble is open to the left', () => {
         component.openToLeft = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).toContain('st-bubble__content--to-left');
      });

      it ('If input "openToLeft" is false, bubble is open to the right', () => {
         component.openToLeft = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-bubble__content').classList).toContain('st-bubble__content--to-right');
      });
   });
});
