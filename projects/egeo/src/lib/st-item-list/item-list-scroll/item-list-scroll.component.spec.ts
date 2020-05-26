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
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { times as _times } from 'lodash';

// Components
import { ItemListItemComponent } from '../item-list-item/item-list-item.component';
import { ItemListScrollComponent } from './item-list-scroll.component';

// Model
import { StItemListElement } from '../st-item-list.model';

let comp: ItemListScrollComponent;
let fixture: ComponentFixture<ItemListScrollComponent>;

let qaTag: string = 'st-item-list-test';

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
         imports: [VirtualScrollerModule],
         declarations: [ItemListScrollComponent, ItemListItemComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ItemListScrollComponent);
      comp = fixture.componentInstance;
      comp.list = list;
   });

   describe('ItemListScrollComponent', () => {
      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.listQaTag).toEqual('');

         comp.qaTag = qaTag;
         fixture.detectChanges();
         expect(comp.listQaTag).toEqual(qaTag + '-scroll-list');
      });
   });
});
