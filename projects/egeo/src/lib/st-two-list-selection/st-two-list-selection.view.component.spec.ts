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
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import {
   times as _times
} from 'lodash';

// Components
import { ListItemComponent } from './list-item/list-item.component';
import { ListSelectionComponent } from './list-selection/list-selection.component';
import { ListScrollComponent } from './list-scroll/list-scroll.component';
import { StTwoListSelectionViewComponent } from './st-two-list-selection.view.component';

// Order modules
import { PipesModule } from '../pipes/pipes.module';
import { StSearchModule } from '../st-search/st-search.module';
import { StCheckboxModule } from '../st-checkbox/st-checkbox.module';

// Mdel
import { StTwoListSelectionConfig, StTwoListSelectionElement } from './st-two-list-selection.model';

let comp: StTwoListSelectionViewComponent;
let fixture: ComponentFixture<StTwoListSelectionViewComponent>;
let de: DebugElement;

let config: StTwoListSelectionConfig = {
   allElementsListTitle: 'All',
   allElementsListSubtitle: 'All subtitle',
   allElementsSearchPlaceholder: 'Search all',
   fetchingDataText: 'Fetching more data',
   selectedElementsListTitle: 'Selected',
   selectedElementsListSubtitle: 'Selected subtitle',
   selectedElementsSearchPlaceholder: 'Search selected',
   orderPlaceholder: 'order by'
};
let qaTag: string = 'st-two-list-test';

function generateData(numData: number): StTwoListSelectionElement[] {
   return _times(10, (i) => {
      return {
         id: i,
         name: i > 5 ? `${i}Element` : `Element${i}`
      };
   });
}

describe('StTwoListSelectionComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule, PipesModule, VirtualScrollerModule, StCheckboxModule],
         declarations: [StTwoListSelectionViewComponent, ListSelectionComponent, ListItemComponent, ListScrollComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StTwoListSelectionViewComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;
      comp.allElements = generateData(10);
      comp.selectedElements = [];
   });

   describe('StTwoListSelectionViewComponent', () => {
      it('Should init correctly', () => {
         comp.config = config;
         fixture.detectChanges();

         expect(comp.allTitle).toEqual(config.allElementsListTitle);
         expect(comp.allSubtitle).toEqual(config.allElementsListSubtitle);
         expect(comp.allPlaceholder).toEqual(config.allElementsSearchPlaceholder);
         expect(comp.selectedTitle).toEqual(config.selectedElementsListTitle);
         expect(comp.selectedSubtitle).toEqual(config.selectedElementsListSubtitle);
         expect(comp.selectedPlaceholder).toEqual(config.selectedElementsSearchPlaceholder);
         expect(comp.orderPlaceholder).toEqual(config.orderPlaceholder);
         expect(comp.allQaTag).toContain(qaTag);
         expect(comp.selectedQaTag).toContain(qaTag);
         expect(comp.fetchingDataText).toContain(config.fetchingDataText);
      });

      it('Should init default', () => {
         fixture.detectChanges();

         expect(comp.allTitle).toEqual('');
         expect(comp.allSubtitle).toEqual('');
         expect(comp.allPlaceholder).toEqual('');
         expect(comp.selectedTitle).toEqual('');
         expect(comp.selectedSubtitle).toEqual('');
         expect(comp.selectedPlaceholder).toEqual('');
         expect(comp.allQaTag).toContain(qaTag);
         expect(comp.selectedQaTag).toContain(qaTag);
         expect(comp.orderPlaceholder).toEqual('');
         expect(comp.fetchingDataText).toEqual('');
      });
   });
});
