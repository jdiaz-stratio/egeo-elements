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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StLauncherGroup } from '../st-launcher.model';
import { StLauncherItemComponent } from './st-launcher-item.component';

let item: StLauncherGroup = {
   label: 'group example',
   items: [{
      label: 'item example 1',
      url: 'www.example1.com'
   }, {
      label: 'item example 2',
      url: 'www.example2.com'
   }, {
      label: 'item example 3',
      url: 'www.example3.com'
   }, {
      label: 'item example 4',
      url: 'www.example4.com'
   }]
};

let itemCh: StLauncherGroup = {
   label: 'group example change',
   items: [{
      label: 'item example change',
      url: 'www.example1.com'
   }]
};

let limit = 2;

describe('StLauncherItemComponent', () => {

   let component: StLauncherItemComponent;
   let fixture: ComponentFixture<StLauncherItemComponent>;
   let de: DebugElement;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StLauncherItemComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StLauncherItemComponent);
      component = fixture.componentInstance;
   });

   it('should show label items and have items length', () => {
      component.item = item;
      fixture.detectChanges();
      expect(component.item.label).toBe('group example');
      expect(component.item.items.length).toBe(item.items.length);
   });

   it('should show label items changed and have items changed length', () => {
      component.item = item;
      fixture.detectChanges();
      component.item = itemCh;
      fixture.detectChanges();
      expect(component.item.label).toBe('group example change');
      expect(component.item.items.length).toBe(itemCh.items.length);
   });

   it('should filter items according the limit', () => {
      component.item = item;
      fixture.detectChanges();
      expect(component.itemsFiltered.length).toBe(item.items.length);

      component.limit = limit;
      fixture.detectChanges();
      expect(component.itemsFiltered.length).toBe(limit);
   });

   it('should click item and dispatch event toggle with value of item', () => {
      spyOn(component.toggle, 'emit');
      component.item = item;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-launcher__group');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.toggle.emit).toHaveBeenCalledWith(item);
   });

   it('should click item and dispatch event select value of item', () => {
      spyOn(component.select, 'emit');
      component.item = item;
      item.expanded = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-launcher__item');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.select.emit).toHaveBeenCalledWith(item.items[0]);
   });

   it('should click item and dispatch event view value of item', () => {
      spyOn(component.view, 'emit');
      component.item = item;
      component.limit = limit;
      item.expanded = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-launcher__more');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.view.emit).toHaveBeenCalledWith(item);
   });
});
