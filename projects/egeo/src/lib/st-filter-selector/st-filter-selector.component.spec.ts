/*
 * © 2017 Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software – including all its source code – contains proprietary
 * information of Stratio Big Data Inc., Sucursal en España and
 * may not be revealed, sold, transferred, modified, distributed or
 * otherwise made available, licensed or sublicensed to third parties;
 * nor reverse engineered, disassembled or decompiled, without express
 * written authorization from Stratio Big Data Inc., Sucursal en España.
 */
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StFilterSelectorComponent } from './st-filter-selector.component';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';

let fixture: ComponentFixture<StFilterSelectorComponent>;
let component: StFilterSelectorComponent;
let nativeElement: HTMLElement;

describe('FilterSelectorComponent', () => {

   const fakeFilters: StDropDownMenuItem[] = [
      <StDropDownMenuItem>{
         label: 'with HA',
         value: 'withHA'
      }, <StDropDownMenuItem>{
         label: 'without HA',
         value: 'withoutHA'
      }, <StDropDownMenuItem>{
         label: 'Fast Deploy',
         value: 'fastDeploy'
      }];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StDropdownMenuModule],
         declarations: [StFilterSelectorComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StFilterSelectorComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StFilterSelectorComponent);
      component = fixture.componentInstance;
      component.filterList = fakeFilters;
      nativeElement = fixture.nativeElement;
      fixture.detectChanges();
   });

   describe('When it is initialized', () => {
      it('component has been initialized', () => {
         expect(component).toBeDefined();
      });
   });

   it('If there is not any selected filter, it should emit and event to select the first option', (done) => {
      spyOn(component.clickFilter, 'emit');
      component.selected = undefined;
      component.ngOnInit();

      fixture.whenStable().then(() => {
         fixture.detectChanges();
         expect(component.clickFilter.emit).toHaveBeenCalledWith(fakeFilters[0]);
         done();
      });
   });

   it('Should display the filters', () => {
      component.openFilter = true;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item')[0].innerHTML).toContain(fakeFilters[0].label);
      expect(fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item')[1].innerHTML).toContain(fakeFilters[1].label);
      expect(fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item')[2].innerHTML).toContain(fakeFilters[2].label);
   });

   describe('When user clicks outside of filter', () => {
      it('Should emit an event', () => {
         spyOn(component.closeFilter, 'emit');
         component.onCloseFilter();
         fixture.detectChanges();

         expect(component.closeFilter.emit).toHaveBeenCalledWith(true);
      });
   });

   describe('When user clicks on the current selected filter', () => {

      it('Should emit an event to change the filter list visibility', () => {
         spyOn(component.changeFilterVisibility, 'emit');
         fixture.nativeElement.querySelector('.filter-title').click();

         expect(component.changeFilterVisibility.emit).toHaveBeenCalledWith(true);
      });
   });

   describe('When user clicks on a filter item', () => {

      it('Should emit an event', () => {
         spyOn(component.clickFilter, 'emit');
         component.openFilter = true;
         fixture.detectChanges();

         fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item')[2].click();
         fixture.detectChanges();

         expect(component.clickFilter.emit).toHaveBeenCalledWith(component.filterList[2]);
      });
   });
});
