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
import { SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StLauncherItemComponent } from './st-launcher-item/st-launcher-item.component';
import { StLauncherComponent } from './st-launcher.component';
import { StLauncherGroup } from './st-launcher.model';

let items: StLauncherGroup[] = [
   {
      label: 'group 1',
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
   },
   {
      label: 'group 2',
      items: [{
         label: 'example 5',
         url: 'www.example5.com'
      },
         {
            label: 'example 6',
            url: 'www.example6.com'
         }]
   }
];

let itemsCh: StLauncherGroup[] = [
   {
      label: 'group 1 change',
      items: [{
         label: 'item example 1 change',
         url: 'www.example1.com'
      }]
   }
];

let limit: number = 2;

describe('StLauncherComponent', () => {

   let component: StLauncherComponent;
   let fixture: ComponentFixture<StLauncherComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [],
         declarations: [StLauncherComponent, StLauncherItemComponent]
      })
         .overrideComponent(StLauncherComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StLauncherComponent);
      component = fixture.componentInstance;
   });

   it('should show two items in component', () => {
      component.items = items;
      fixture.detectChanges();
      expect(component.items.length).toBe(items.length);
   });

   it('should show one item changed in component', () => {
      component.items = items;
      fixture.detectChanges();
      component.items = itemsCh;
      fixture.detectChanges();
      expect(component.items.length).toBe(itemsCh.length);
   });

   it('should click item and dispatch event toggle with value of item', () => {
      spyOn(component.toggle, 'emit');
      component.items = items;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-launcher__group');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.toggle.emit).toHaveBeenCalledWith(items[0]);
   });

   it('should click item and dispatch event select value of item', () => {
      spyOn(component.select, 'emit');
      component.items = items;
      items[0].expanded = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-launcher__item');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.select.emit).toHaveBeenCalledWith(items[0].items[0]);
   });

   it('should click item and dispatch event viewMore value of item', () => {
      spyOn(component.viewMore, 'emit');
      component.items = items;
      component.groupLimit = limit;
      items[0].expanded = true;
      fixture.detectChanges();

      let itemElement = fixture.nativeElement.querySelector('.st-launcher__more');
      itemElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();

      expect(component.viewMore.emit).toHaveBeenCalledWith(items[0]);
   });

   it('It should be able to see changes in items when it is not the first change', () => {
      component.items = items;

      component.ngOnChanges({
         items: new SimpleChange([items[0]], [], true)
      });

      expect(component.items).toEqual(items);

      component.ngOnChanges({
         items: new SimpleChange(items, [items[0]], false)
      });

      expect(component.items).toEqual([items[0]]);
   });
});
