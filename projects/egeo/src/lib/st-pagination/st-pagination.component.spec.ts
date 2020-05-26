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
import { StPaginationComponent } from './st-pagination.component';
import { NO_ERRORS_SCHEMA, SimpleChange, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('StPaginationComponent', () => {
   let component: StPaginationComponent;
   let fixture: ComponentFixture<StPaginationComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StPaginationComponent],
         schemas: [NO_ERRORS_SCHEMA]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StPaginationComponent);
      component = fixture.componentInstance;
   });

   it('Should be initialized correctly', () => {
      (fixture.elementRef.nativeElement as HTMLElement).id = null;
      fixture.detectChanges();

      expect(component.currentPage).toEqual(1);
      expect(component.perPage).toEqual(20);
      expect(component.total).toBeUndefined();
      expect(component.label).toEqual({
         element: 'Rows', perPage: 'per page', of: 'of'
      });
      expect(component.perPageOptions).toEqual([
         { value: 20, showFrom: 0 }, { value: 50, showFrom: 50 }, { value: 200, showFrom: 200 }
      ]);

      expect(component.disableNextButton).toBeFalsy();
      expect(component.disablePrevButton).toBeTruthy();
      expect(component.firstItem).toEqual(1);
      expect(component.lastItem).toEqual(20);
      expect(component.items).toEqual([]);
      expect(component.selectedItem).toBeUndefined();

      expect(component.hasOptions).toBeFalsy();
      expect(component.paginationId).toBeNull();
      expect(component.selectId).toBeNull();
      expect(component.buttonPrevId).toBeNull();
      expect(component.buttonNextId).toBeNull();
   });

   it('Should propagate id to internal elements', () => {
      const id: string = 'test-id';
      (fixture.elementRef.nativeElement as HTMLElement).id = id;
      component.perPage = 20;
      component.total = 500;
      fixture.detectChanges();

      const select: HTMLElement = fixture.debugElement.query(By.css('st-select')).nativeElement;
      const buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.button-toolbar'));

      expect(component.paginationId).toEqual(id);

      expect(component.selectId).toEqual(`${id}-select`);
      expect(select.getAttribute('id')).toEqual(`${id}-select`);

      expect(component.buttonPrevId).toEqual(`${id}-prev`);
      expect(buttons[0].nativeElement.getAttribute('id')).toContain(`${id}-prev`);

      expect(component.buttonNextId).toEqual(`${id}-next`);
      expect(buttons[1].nativeElement.getAttribute('id')).toContain(`${id}-next`);
   });

   describe('When insert input perPage', () => {

      it('should not show dropdown', () => {
         component.perPage = 20;
         component.total = 20;
         fixture.detectChanges();

         const select: DebugElement = fixture.debugElement.query(By.css('st-select'));

         expect(select).toBeNull();
      });

      it('should show dropdown', () => {
         component.perPage = 20;
         component.total = 1000;
         fixture.detectChanges();

         const select: DebugElement = fixture.debugElement.query(By.css('st-select'));

         expect(select).toBeDefined();
      });
   });

   describe('When insert input perPageOptions', () => {

      it('should be items equal to default per page options', () => {
         component.perPage = 20;
         component.total = 1000;
         fixture.detectChanges();

         expect(component.items.length).toEqual(3);
      });

      it('should be items equal to options insert by user', () => {
         component.perPage = 20;
         component.total = 1000;
         component.perPageOptions = [
            { value: 20 }, { value: 50 }, { value: 100 }, { value: 150 }, { value: 200 }
         ];
         fixture.detectChanges();

         expect(component.items.length).toEqual(5);
      });
   });

   describe('When user interacts with the pagination', () => {

      it('should display the next page', () => {
         component.perPage = 20;
         component.total = 100;
         component.currentPage = 2;

         component.nextPage();
         fixture.detectChanges();

         expect(component.currentPage).toBe(3);
      });

      it('should display the prev page', () => {
         component.perPage = 20;
         component.total = 100;
         component.currentPage = 2;

         component.prevPage();
         fixture.detectChanges();

         expect(component.currentPage).toBe(1);
      });

      it('should display a button to navigate to the next page', () => {
         component.perPage = 20;
         component.total = 40;
         component.currentPage = 1;

         component.nextPage();
         fixture.detectChanges();

         expect(component.disableNextButton).toBeTruthy();
      });

      it('should be able to disable the prev button', () => {
         component.perPage = 20;
         component.total = 40;
         component.currentPage = 2;

         component.prevPage();
         fixture.detectChanges();

         expect(component.disablePrevButton).toBeTruthy();
      });

   });

   describe('when component is updated', () => {

      it('should generate new item for dropdown', () => {
         component.perPage = 20;
         component.total = 50;
         fixture.detectChanges();

         fixture.componentInstance.total = 300;

         component.ngOnChanges({ total: new SimpleChange(50, 300, false) });
         fixture.detectChanges();

         expect(component.items.length).toBe(3);
      });

      it('should change page attributes when the total of pages changes', () => {
         component.perPage = 20;
         component.total = 45;
         fixture.detectChanges();

         fixture.componentInstance.currentPage = 3;

         component.ngOnChanges({ currentPage: new SimpleChange(1, 3, false) });
         fixture.detectChanges();

         expect(component.disableNextButton).toBeTruthy();
         expect(component.disablePrevButton).toBeFalsy();
         expect(component.firstItem).toEqual(41);
         expect(component.lastItem).toEqual(45);
      });

      it('should change page attributes when the items per pages changes', () => {
         component.perPage = 20;
         component.total = 100;
         component.currentPage = 3;

         component.ngOnChanges({ perPage: new SimpleChange(20, 50, false) });
         fixture.detectChanges();

         expect(component.disableNextButton).toBeFalsy();
         expect(component.disablePrevButton).toBeTruthy();
         expect(component.firstItem).toEqual(1);
         expect(component.lastItem).toEqual(50);
         expect(component.selectedItem.value).toEqual(50);
         expect(component.currentPage).toEqual(1);
      });

      it('should change page attributes when the current page changes', () => {
         component.perPage = 20;
         component.total = 100;
         component.currentPage = 3;

         component.ngOnChanges({ currentPage: new SimpleChange(3, 2, false) });
         fixture.detectChanges();

         expect(component.currentPage).toEqual(2);
         expect(component.firstItem).toEqual(21);
         expect(component.lastItem).toEqual(40);
         expect(component.disableNextButton).toBeFalsy();
         expect(component.disablePrevButton).toBeFalsy();
         expect(component.selectedItem.value).toEqual(20);
      });
   });

   describe('when user selects a new number of items per page', () => {

      it('should update to the first page status', () => {
         component.perPage = 20;
         component.total = 500;
         component.currentPage = 3;
         fixture.detectChanges();

         expect(component.disableNextButton).toBeFalsy();
         expect(component.disablePrevButton).toBeFalsy();
         expect(component.firstItem).toEqual(41);
         expect(component.lastItem).toEqual(60);
         expect(component.selectedItem.value).toEqual(20);

         fixture.componentInstance.onChangePerPage(50);
         fixture.detectChanges();

         expect(component.disableNextButton).toBeFalsy();
         expect(component.disablePrevButton).toBeTruthy();
         expect(component.firstItem).toEqual(1);
         expect(component.lastItem).toEqual(50);
         expect(component.selectedItem.value).toEqual(50);
      });
   });


   it('When it listens any change, it only force to update the changed input if it is not its first change', () => {
      spyOn(component, 'generateItems').and.callThrough();
      spyOn(component, 'onChangePerPage').and.callThrough();

      component.currentPage = 3;
      component.total = 3;
      component.perPage = 3;

      component.ngOnChanges({
         currentPage: new SimpleChange(3, 2, true),
         total: new SimpleChange(3, 2, true),
         perPage: new SimpleChange(3, 2, true)
      });


      expect(component.generateItems).not.toHaveBeenCalled();
      expect(component.onChangePerPage).not.toHaveBeenCalled();
      expect(component.currentPage).toBe(3);
      expect(component.total).toBe(3);
      expect(component.perPage).toBe(3);

      component.ngOnChanges({
         currentPage: new SimpleChange(3, 2, false)
      });

      expect(component.currentPage).toBe(2);

      component.ngOnChanges({
         total: new SimpleChange(3, 2, false)
      });

      expect(component.generateItems).toHaveBeenCalled();

      component.ngOnChanges({
         perPage: new SimpleChange(3, 2, false)
      });

      expect(component.onChangePerPage).toHaveBeenCalled();
      expect(component.perPage).toBe(2);
   });
});
