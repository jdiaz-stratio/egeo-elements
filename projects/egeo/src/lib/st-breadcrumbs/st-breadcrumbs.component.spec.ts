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
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StBreadCrumbsComponent } from './st-breadcrumbs.component';
import { StBreadCrumbItem, StBreadCrumbMode } from './st-breadcrumbs.interface';

const item: StBreadCrumbItem = {
   id: 'home',
   label: 'section4',
   icon: 'icon-home'
};

describe('StBreadCrumbsComponent', () => {
   let component: StBreadCrumbsComponent;
   let fixture: ComponentFixture<StBreadCrumbsComponent>;

   const menuMock: StBreadCrumbItem[] = [
      { id: 'home', icon: 'icon-home' },
      { id: 'section1', label: 'section1', icon: '' },
      { id: 'section2', label: 'section2', icon: '' },
      { id: 'section3', label: 'section3' },
      { id: 'section4', label: 'section4', icon: 'icon-home' },
      { id: 'section5', label: 'section5', icon: '' },
      { id: 'section6', label: 'section6', icon: '' }];
   const expectedIndexShowing5: number[] = [0, -1, 3, 4, 5, 6];
   const expectedIndexShowing10: number[] = [0, 1, 2, 3, 4, 5, 6];

   beforeEach(
      async(() => {
         TestBed.configureTestingModule({
            declarations: [StBreadCrumbsComponent],
            schemas: [NO_ERRORS_SCHEMA]
         })
            .overrideComponent(StBreadCrumbsComponent, {
               set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents(); // compile template and css
      })
   );

   beforeEach(() => {
      fixture = TestBed.createComponent(StBreadCrumbsComponent);
      component = fixture.componentInstance;
      component.options = menuMock;
   });


   describe('If initialized', () => {
      it('Should be initialized with elements to show set to 10 options', () => {
         component.elementsToShow = 10;
         fixture.detectChanges();

         expect(component.elementsToShow).toEqual(10);
         expect(component.indexArray).toEqual(expectedIndexShowing10);
      });

      it('should be initialized undefined', () => {
         const itemUndefined: StBreadCrumbItem = { id: '' };
         component.options[1] = itemUndefined;
         fixture.detectChanges();
         expect(component.hasIcon(1)).toBeFalsy();
         expect(component.getId(1)).toEqual('');
         expect(component.getIcon(1)).toBeUndefined();
         expect(component.getLabel(1)).toBeUndefined();
      });
      it('should be initialized with id, label and icon', () => {
         component.options[1] = item;
         fixture.detectChanges();
         expect(component.hasIcon(1)).toBeTruthy();
         expect(component.getId(1)).toEqual('home');
         expect(component.getIcon(1)).toEqual('icon-home');
         expect(component.getLabel(1)).toEqual('section4');
      });

   });

   it('If an user clicks on an element, component emits the element position', () => {
      spyOn(component.select, 'emit');
      fixture.detectChanges();

      component.onSelect(2);
      expect(component.select.emit).toHaveBeenCalledWith(2);
   });

   it('If user clicks on the active element, nothing happens', () => {
      spyOn(component.select, 'emit');
      fixture.detectChanges();

      component.onSelect(6);
      expect(component.select.emit).not.toHaveBeenCalled();
   });

   it('Should show first element, 3 dots and the last 4 elements ', () => {
      fixture.detectChanges();

      expect(component.elementsToShow).toEqual(5);
      expect(component.indexArray).toEqual(expectedIndexShowing5);
   });

   it('Should emit real position when user click on dots', () => {
      fixture.detectChanges();

      spyOn(component.select, 'emit');
      component.onSelect(-1);
      expect(component.select.emit).toHaveBeenCalledWith(2);
   });

   it('Should get id when index is greater or lesser than -1', () => {
      fixture.detectChanges();
      expect(component.getId(3)).toEqual(menuMock[3].id);
   });

   it('Should get label when index is greater than -1', () => {
      fixture.detectChanges();
      expect(component.getLabel(3)).toEqual(String(menuMock[3].label));
   });

   it('Should get icon when index is greater than -1', () => {
      fixture.detectChanges();
      expect(component.getIcon(4)).toEqual(String(menuMock[4].icon));
   });

   it('Should get 3 dots when index is -1', () => {
      fixture.detectChanges();
      expect(component.getLabel(-1)).toEqual('...');
   });
   it('Should get icon empty when index is -1', () => {
      fixture.detectChanges();
      expect(component.getIcon(-1)).toEqual('');
   });

   it(`shouldn't get anything icon if not have been defined`, () => {
      let icon = component.getIcon(3);
      fixture.detectChanges();
      expect(component.hasIcon(3)).toBeFalsy();
   });

   it('Should recalculate initPos and elements to show when changes', () => {
      fixture.detectChanges();
      expect(component.indexArray).toEqual(expectedIndexShowing5);

      component.ngOnChanges({});
      expect(component.indexArray).toEqual(expectedIndexShowing5);

      component.ngOnChanges({ elementsToShow: new SimpleChange(5, 7, true) });
      component.elementsToShow = 7;

      expect(component.indexArray).toEqual([0, 1, 2, 3, 4, 5, 6]);

      component.options = [...menuMock, { id: 'section7', label: 'section7' }];
      component.ngOnChanges({ options: new SimpleChange(menuMock, component.options, true) });
      expect(component.indexArray).toEqual([0, -1, 2, 3, 4, 5, 6, 7]);
   });

   describe('Mode can be configured in order to modify its design', () => {
      it('If mode is not introduced as input, it will be DEFAULT', () => {
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('ul').classList).toContain('default-mode');
      });

      it('If mode is introduced as input, it will be added as class to the host', () => {
         component.mode = StBreadCrumbMode.TITLE;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('ul').classList).toContain('title-mode');

         component.mode = StBreadCrumbMode.DEFAULT;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('ul').classList).toContain('default-mode');
      });
   });
});
