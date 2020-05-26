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
import { ListItemComponent } from './list-item/list-item.component';
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { StTwoListSelectionViewComponent } from './st-two-list-selection.view.component';
import { StTwoListSelectionComponent } from './st-two-list-selection.component';
import { ListScrollComponent } from './list-scroll/list-scroll.component';

// Order modules
import { PipesModule } from '../pipes/pipes.module';
import { StSearchModule } from '../st-search/st-search.module';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';

// Model
import { StTwoListSelectionElement } from './st-two-list-selection.model';

let comp: StTwoListSelectionComponent;
let fixture: ComponentFixture<StTwoListSelectionComponent>;


let qaTag: string = 'st-two-list-test';

function generateData(): StTwoListSelectionElement[] {
   return _times(10, (i) => {
      return {
         id: i,
         name: i > 5 ? `${i}Element` : `Element${i}`
      };
   });
}

let allElements: StTwoListSelectionElement[] = generateData();
let selectedElements: StTwoListSelectionElement[] = _cloneDeep(allElements.slice(0, 2));

describe('StTwoListSelectionComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule, PipesModule, VirtualScrollerModule, StCheckboxModule],
         declarations: [StTwoListSelectionComponent, StTwoListSelectionViewComponent, ListSelectionComponent, ListItemComponent, ListScrollComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StTwoListSelectionComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;
      comp.allElements = allElements;
      comp.selectedElements = selectedElements;
   });

   describe('StTwoListSelectionComponent', () => {
      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.allList).toEqual(allElements.slice(2));
         expect(comp.selectedList).toEqual(selectedElements);
      });

      it('Should change lists', () => {
         fixture.detectChanges();
         expect(comp.allList).toEqual(allElements.slice(2));
         expect(comp.allList.length).toEqual(8);
         expect(comp.selectedList).toEqual(selectedElements);
         expect(comp.selectedList.length).toEqual(2);

         let newAllList = _cloneDeep(allElements.slice(0, 5));
         let newSelectedList = _cloneDeep(selectedElements.slice(0, 1));

         let change: SimpleChanges = {
            allElements: new SimpleChange(comp.allList, newAllList, true),
            selectedElements: new SimpleChange(comp.selectedList, newSelectedList, true)
         };

         comp.ngOnChanges(change);
         fixture.detectChanges();

         expect(comp.allList).toEqual(newAllList.slice(1));
         expect(comp.allList.length).toEqual(4);
         expect(comp.selectedList).toEqual(newSelectedList);
         expect(comp.selectedList.length).toEqual(1);
      });
   });
});
