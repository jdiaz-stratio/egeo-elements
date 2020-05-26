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
import { Component, DebugElement, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StTooltipComponent } from './st-tooltip.component';

const id: string = 'tooltipId';
const originalContent: string = 'This is the original element content';
const tooltipText: string = 'This text will be displayed in our tooltip';

@Component({
   template: '<span id="' + id + '" st-tooltip [attr.title]="tooltipText" [showOnClick]="showOnClick">' + originalContent + '</span>'
})
class TestStTooltipComponent {
   @Input() showOnClick: boolean = false;
   @Input() tooltipText: string = tooltipText;
}

let component: TestStTooltipComponent;
let element: DebugElement;
let fixture: ComponentFixture<TestStTooltipComponent>;

describe('StTooltip', () => {

   beforeEach(async(() => {
      TestBed
      .configureTestingModule({
         declarations: [
            StTooltipComponent,
            TestStTooltipComponent
         ]
      })
      .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TestStTooltipComponent);
      component = fixture.componentInstance;
      element = fixture.debugElement.query(By.css('#' + id));
      fixture.detectChanges();
   });


   it('It has to display content inside a span without a title', () => {
      let span: Element = element.query(By.css('span')).nativeElement;
      expect(span.getAttribute('title')).toBe('');
      expect(span.innerHTML).toContain(originalContent);
   });

   it('It has st-tooltip class only if host element has a title', () => {
      expect(element.nativeElement.title).toBe(tooltipText);
      expect(element.nativeElement.className).toBe('st-tooltip');

      component.tooltipText = '';
      fixture.detectChanges();
      expect(element.nativeElement.title).toBe('');
      expect(element.nativeElement.className).toBe('');
   });

   it('If showOnClick, st-tooltip-on class is added or removed on click', () => {
      component.showOnClick = true;
      fixture.detectChanges();
      expect(element.nativeElement.className).toBe('');

      element.nativeElement.click();
      fixture.detectChanges();
      expect(element.nativeElement.className).toBe('st-tooltip-on');

      fixture.nativeElement.click();
      fixture.detectChanges();
      expect(element.nativeElement.className).toBe('');
   });

});
