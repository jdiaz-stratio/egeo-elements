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
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { times as _times } from 'lodash';

// Components
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemListScrollComponent } from './item-list-scroll/item-list-scroll.component';
import { StItemListComponent } from './st-item-list.component';

// Order modules
import { StSearchModule } from '../st-search/st-search.module';

// Model
import { StItemListElement, StItemListConfig } from './st-item-list.model';

let comp: StItemListComponent;
let fixture: ComponentFixture<StItemListComponent>;

let qaTag: string = 'st-item-list-test';
let config: StItemListConfig = {
   title: 'List title',
   searchPlaceholder: 'List search'
};

function generateData(numData: number): StItemListElement[] {
   return _times(numData, (i) => {
      return {
         id: i,
         name: `Element ${i}`,
         icon: 'icon-archive'
      };
   });
}

let list: StItemListElement[] = generateData(10);

describe('StItemListComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule, VirtualScrollerModule],
         declarations: [StItemListComponent, ItemListItemComponent, ItemListScrollComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StItemListComponent);
      comp = fixture.componentInstance;
      comp.list = list;
   });

   it('Should init correctly', () => {
      fixture.detectChanges();
      expect(comp.listTitle).toEqual('');
      expect(comp.searchPlaceholder).toEqual('');
      expect(comp.listQaTag).toEqual('');
      expect(comp.searchQaTag).toEqual('');
      expect(comp.align).toEqual('left');
      expect(comp.theme).toEqual('themeA');

      comp.qaTag = qaTag;
      comp.config = config;
      fixture.detectChanges();
      expect(comp.listTitle).toEqual(config.title);
      expect(comp.searchPlaceholder).toEqual(config.searchPlaceholder);
      expect(comp.listQaTag).toEqual(qaTag);
      expect(comp.searchQaTag).toEqual(qaTag + '-search');
   });

   it('If themeA is defined, it needs to be applied', () => {
      let el: DebugElement;
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('.themeA'));
      expect(el.nativeElement).toBeDefined();
   });

   it('If themeB is defined, it needs to be applied', () => {
      let el: DebugElement;
      comp.theme = 'themeB';
      fixture.detectChanges();
      el = fixture.debugElement.query(By.css('.themeB'));
      expect(el.nativeElement).toBeDefined();
   });

});
