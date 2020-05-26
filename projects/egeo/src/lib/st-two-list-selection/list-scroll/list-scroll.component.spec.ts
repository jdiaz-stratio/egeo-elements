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
import { DebugElement, SimpleChange, SimpleChanges, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import {
   times as _times,
   cloneDeep as _cloneDeep
} from 'lodash';

// Components
import { ListItemComponent } from '../list-item/list-item.component';
import { ListScrollComponent } from './list-scroll.component';

// Order modules
import { StSearchModule } from '../../st-search/st-search.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';

// Mdel
import { StTwoListSelectionConfig, StTwoListSelectionElement } from '../st-two-list-selection.model';

let comp: ListScrollComponent;
let fixture: ComponentFixture<ListScrollComponent>;
let de: DebugElement;

let listTitle: 'All';
let listSearchPlaceholder: 'Search all';
let qaTag: string = 'st-two-list-test';

function generateData(numData: number): StTwoListSelectionElement[] {
   return _times(10, (i) => {
      return {
         id: i,
         name: i > 5 ? `${i}Element` : `Element${i}`
      };
   });
}

let list: StTwoListSelectionElement[] = generateData(10);

describe('StTwoListSelectionComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule, VirtualScrollerModule, StCheckboxModule],
         declarations: [ListScrollComponent, ListItemComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ListScrollComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;

   });

   describe('ListScrollComponent', () => {
      it('Should init correctly', () => {
         const container = fixture.debugElement.query(By.css('#virtualScroll'));
         container.nativeElement.scrollDown = 5000;
         container.triggerEventHandler('scroll', null);

         fixture.detectChanges();
         expect(comp.listQaTag).toEqual(qaTag + '-scroll-list');
         expect(comp.listCheckAllQaTag).toEqual(qaTag + '-check-all-scroll-list');
      });
   });
});
