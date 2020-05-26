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
import { ChangeDetectionStrategy } from '@angular/core';
import { StSidebarItemListComponent } from './st-sidebar-item-list.component';

describe('StSidebarItemList', () => {

   let component: StSidebarItemListComponent;
   let fixture: ComponentFixture<StSidebarItemListComponent>;
   let itemList: HTMLLIElement[];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [],
         declarations: [StSidebarItemListComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StSidebarItemListComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css

   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StSidebarItemListComponent);
      component = fixture.componentInstance;
      component.items = [
         { id: 'vault-roles', label: 'Vault Roles' },
         { id: 'identities', label: 'Identities', result: '56' },
         { id: 'masters', label: 'Masters', disabled: true },
         { id: 'agents', label: 'Agents' },
         { id: 'roles', label: 'Roles' },
         {
            id: 'complex', label: 'Complex',
            items: [
               { id: 'child-complex-1', label: 'Child 1' },
               { id: 'child-complex-2', label: 'Child 2', items: [{ id: 'child-2.1', label: 'Child 2.1' }] },
               { id: 'child-complex-3', label: 'Child 3' }
            ]
         },
         {
            id: 'complex2', label: 'Complex2',
            items: [
               { id: 'child-complex21', label: 'Child Complex 2 1' },
               { id: 'child-complex22', label: 'Child Complex 2 2' },
               { id: 'child-complex23', label: 'Child Complex 2 3' }
            ]
         }
      ];

      fixture.detectChanges();
      itemList = fixture.nativeElement.querySelectorAll('li');
   });

   it('When it receives a change from a child of the active and it is different to the current active, it is emitted to its parent', () => {
      spyOn(component.change, 'emit');
      component.active = component.items[1];
      component.onChange(component.active);

      expect(component.change.emit).not.toHaveBeenCalled();

      component.onChange(component.items[2]);

      expect(component.change.emit).toHaveBeenCalledWith(component.items[2]);
   });

   it('only if item has result, it is displayed', () => {
      expect(fixture.nativeElement.querySelectorAll('.result__box').length).toBe(1);
      expect(fixture.nativeElement.querySelectorAll('.result__box')[0].innerHTML).toContain(component.items[1].result);
      expect(fixture.nativeElement.querySelectorAll('.item__label')[1].classList).toContain('item__label--with-results');
   });

   it('if an item is disabled, user can not click on it', () => {
      spyOn(component.change, 'emit');

      expect(itemList[2].classList).toContain('item--disabled');

      (<HTMLSpanElement> itemList[2].querySelector('.item__label')).click();
      fixture.detectChanges();

      expect(component.change.emit).not.toHaveBeenCalled();

      (<HTMLSpanElement> itemList[1].querySelector('.item__label')).click();
      fixture.detectChanges();

      expect(component.change.emit).toHaveBeenCalled();
   });

   it('When active item changes, the rest of them are closed', () => {
      let firstClicked = fixture.nativeElement.querySelector('#complex2');
      let secondClicked = itemList[0];

      firstClicked.querySelector('.item__label').click();
      fixture.detectChanges();

      fixture.nativeElement.querySelector('#child-complex21 .item__label').click();
      fixture.detectChanges();
      (<HTMLSpanElement> secondClicked.querySelector('.item__label')).click();
      fixture.detectChanges();

      expect(secondClicked.classList).toContain('item--active');
      expect(fixture.nativeElement.querySelector('#complex2').classList).not.toContain('item--expanded');
   });
});
