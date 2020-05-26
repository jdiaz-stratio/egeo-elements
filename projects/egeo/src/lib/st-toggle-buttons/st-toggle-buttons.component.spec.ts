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
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { StToggleButtonsComponent } from './st-toggle-buttons.component';
import { StToggleButton, StParsedToggleButton } from './st-toggle-buttons.interface';


let comp: StToggleButtonsComponent;
let fixture: ComponentFixture<StToggleButtonsComponent>;
let de: DebugElement;

let tabs: StToggleButton[] = [
   { label: 'tÇ*´oogle 1', active: true, number: 0 },
   { label: 'toogle 2', active: false, number: 1 },
   { label: 'too,gle 3.,-', active: false, number: 2 }
];
let parsedTabs: StParsedToggleButton[] = [
   { label: 'tÇ*´oogle 1', active: true, number: 0, trimLabel: 'toogle1' },
   { label: 'toogle 2', active: true, number: 1, trimLabel: 'toogle2' },
   { label: 'too,gle 3.,-', active: false, number: 2, trimLabel: 'toogle3' }
];
const enum trimLabels {
   label1 = 'toogle1',
   label2 = 'toogle2',
   label3 = 'toogle3'
}
let description: string = 'toogle test';
let qaTag: string = 'toogle-test';
const tabActiveCSSClass = 'st-toggle-buttons__button--active';
const realisticClick = new Event('click', { bubbles: true });

describe('StToggleButtonsComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [RouterTestingModule],
         declarations: [StToggleButtonsComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StToggleButtonsComponent);
      comp = fixture.componentInstance;

      comp.tabs = tabs;
      comp.description = description;
      comp.qaTag = qaTag;
   });

   it('should init correctly', () => {
      fixture.detectChanges();
      let desc: DebugElement = fixture.debugElement.query(By.css('.st-toggle-buttons__description'));
      let options: DebugElement[] = fixture.debugElement.queryAll(By.css('.st-toggle-buttons__button'));

      expect(desc).toBeDefined();
      expect(desc.nativeElement).toBeDefined();
      expect((<HTMLDivElement>desc.nativeElement).innerText).toEqual(description);

      expect(options).toBeDefined();
      expect(options.length).toEqual(3);

   });

   it('should change active tab on click', () => {
      fixture.detectChanges();

      let option1: DebugElement = fixture.debugElement.query(By.css(`#${qaTag}-${trimLabels.label1}`));
      let option3: DebugElement = fixture.debugElement.query(By.css(`#${qaTag}-${trimLabels.label3}`));

      expect(option1).toBeDefined();
      expect(option3).toBeDefined();
      expect(option1.classes[tabActiveCSSClass]).toBeTruthy();
      expect(option3.classes[tabActiveCSSClass]).toBeFalsy();

      option3.nativeElement.dispatchEvent(realisticClick);
      fixture.detectChanges();

      expect(option1.classes[tabActiveCSSClass]).toBeFalsy();
      expect(option3.classes[tabActiveCSSClass]).toBeTruthy();
   });

   it('Should emit an event when active tab is clicked', () => {
      let responseFunction = jasmine.createSpy('response');
      comp.select.subscribe(responseFunction);

      fixture.detectChanges();

      let option2: DebugElement = fixture.debugElement.query(By.css(`#${qaTag}-${trimLabels.label2}`));

      expect(option2).toBeDefined();
      expect(option2.classes[tabActiveCSSClass]).toBeFalsy();

      option2.nativeElement.dispatchEvent(realisticClick);
      fixture.detectChanges();

      expect(option2.classes[tabActiveCSSClass]).toBeTruthy();
      expect(responseFunction).toHaveBeenCalled();
      expect(responseFunction).toHaveBeenCalledTimes(1);
      expect(responseFunction).toHaveBeenCalledWith(parsedTabs[1]);
   });
});
