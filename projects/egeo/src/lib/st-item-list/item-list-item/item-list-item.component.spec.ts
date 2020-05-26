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

// Components
import { ItemListItemComponent } from './item-list-item.component';

// Model
import { StItemListElement } from '../st-item-list.model';

let comp: ItemListItemComponent;
let fixture: ComponentFixture<ItemListItemComponent>;

let qaTag: string = 'st-item-list-test';
let element: StItemListElement = {
   id: 1,
   name: 'test',
   icon: 'icon-archive',
   selected: false
};

describe('StItemListComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [],
         declarations: [ItemListItemComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ItemListItemComponent);
      comp = fixture.componentInstance;
      comp.item = element;
   });

   describe('ItemListItemComponent', () => {

      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.itemName).toEqual(element.name);
         expect(comp.itemIcon).toEqual(element.icon);
         expect(comp.itemStyle).toContain('item-list-item--left');

         comp.align = 'right';
         comp.qaTag = qaTag;
         fixture.detectChanges();
         expect(comp.itemQaTag).toEqual(qaTag + '-item-' + element.id);
         expect(comp.itemStyle).toContain('item-list-item--right');
      });

      it('Should apply a selection class when item is selected', () => {
         expect(comp.itemStyle).not.toContain('sth-item-list__item--selected');

         comp.item.selected = true;
         fixture.detectChanges();
         expect(comp.itemStyle).toContain('sth-item-list__item--selected');
      });

      it('Should emit when select item', () => {
         let outputSelect = jasmine.createSpy('responseSelect');

         comp.selectItem.subscribe(outputSelect);
         let div: DebugElement = fixture.debugElement.nativeElement.querySelector('div').click();
         fixture.detectChanges();

         expect(outputSelect).toHaveBeenCalled();
         expect(outputSelect).toHaveBeenCalledWith(element);
      });
   });
});
