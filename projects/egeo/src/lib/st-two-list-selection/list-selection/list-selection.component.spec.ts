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
import { ListScrollComponent } from '../list-scroll/list-scroll.component';
import { ListSelectionComponent } from './list-selection.component';

// Order modules
import { StSearchModule } from '../../st-search/st-search.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';

// Mdel
import { StTwoListSelectionElement } from '../st-two-list-selection.model';

let comp: ListSelectionComponent;
let fixture: ComponentFixture<ListSelectionComponent>;

let qaTag: string = 'st-two-list-test';

function generateData(numData: number): StTwoListSelectionElement[] {
   return _times(numData, (i) => {
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
         declarations: [ListSelectionComponent, ListItemComponent, ListScrollComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ListSelectionComponent);
      comp = fixture.componentInstance;
      comp.list = [];
      comp.qaTag = qaTag;

   });

   describe('ListSelectionComponent', () => {
      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.searchQaTag).toEqual(qaTag + '-search');
         expect(comp.listQaTag).toEqual(qaTag + '-list');
         expect(comp.listCheckAllQaTag).toEqual(qaTag + '-all-checkbox');
         expect(comp.hasOrder).toBeFalsy();
      });
   });
});
