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
import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Components
import { ListItemComponent } from './list-item.component';

// Model
import { StTwoListSelectionElement } from '../st-two-list-selection.model';

// Other
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StDropdownMenuModule } from '../../st-dropdown-menu/st-dropdown-menu.module';
import { StDropDownMenuItem } from './../../st-dropdown-menu/st-dropdown-menu.interface';

let comp: ListItemComponent;
let fixture: ComponentFixture<ListItemComponent>;
let de: DebugElement;
let qaTag: string = 'st-two-list-test';
let element: StTwoListSelectionElement = {
   id: 1,
   name: 'test'
};
let menuOptionList: StDropDownMenuItem[] = [{ label: 'Example test', icon: 'icon-datetime', value: 'test' }];

describe('StTwoListSelectionComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StCheckboxModule, StDropdownMenuModule],
         declarations: [ListItemComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(ListItemComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;
      comp.item = element;
      comp.menuOptionList = menuOptionList;
   });

   describe('ListItemComponent', () => {
      it('Should init correctly', () => {
         fixture.detectChanges();
         expect(comp.itemName).toEqual(element.name);
         expect(comp.itemQaTag).toEqual(qaTag + '-item-' + element.id);
         expect(comp.itemMode).toEqual('item-normal sth-two-list-selection__item-normal');
         expect(comp.selected).toBe(false);

         let input: DebugElement = fixture.debugElement.query(By.css('input'));
         expect(input).toBeNull();

         comp.mode = 'compact';
         fixture.detectChanges();
         expect(comp.itemMode).toEqual('item-compact sth-two-list-selection__item-compact');
      });

      it('Should emit when select item', () => {
         let outputSelect = jasmine.createSpy('responseSelect');

         comp.selectItem.subscribe(outputSelect);
         comp.editable = true;
         fixture.detectChanges();
         let input: DebugElement = fixture.debugElement.query(By.css('input'));

         expect(input).toBeDefined();
         (input.nativeElement as HTMLInputElement).click();
         input.nativeElement.dispatchEvent(new Event('input'));
         fixture.detectChanges();

         expect(outputSelect).toHaveBeenCalled();
         expect(outputSelect).toHaveBeenCalledWith(element);
      });

      it('Should emit when select extraLabel', () => {
         let outputSelect = jasmine.createSpy('responseSelect');
         let extraItem = Object.assign({}, element, {extraLabel: '<p>test</p>'});

         comp.selectExtraLabel.subscribe(outputSelect);
         comp.editable = true;
         comp.item = extraItem;
         fixture.detectChanges();

         let extraLabel: DebugElement = fixture.debugElement.query(By.css('.extraLabel'));
         expect(extraLabel).toBeDefined();
         expect((extraLabel.nativeElement as HTMLSpanElement).innerHTML).toEqual(extraItem.extraLabel);
         (extraLabel.nativeElement as HTMLSpanElement).click();
         fixture.detectChanges();
         expect(outputSelect).toHaveBeenCalled();
      });

      it('Should emit when select an item non editable', () => {
         comp.editable = false;
         fixture.detectChanges();
         spyOn(fixture.componentInstance.selectItemNonEditable, 'emit');
         let itemRow: DebugElement = fixture.debugElement.query(By.css('.item__row > span'));
         expect(itemRow).toBeDefined();

         (itemRow.nativeElement as HTMLInputElement).click();
         itemRow.nativeElement.dispatchEvent(new Event('click'));
         fixture.detectChanges();

         expect(fixture.componentInstance.selectItemNonEditable.emit).toHaveBeenCalled();
         expect(fixture.componentInstance.selectItemNonEditable.emit).toHaveBeenCalledWith(element);
      });

      describe('if row item has a hover event', () => {

         describe('should be able to show menu option', () => {
            beforeEach(() => {

               comp.editable = false;
               fixture.detectChanges();
               let itemRow: DebugElement = fixture.debugElement.query(By.css('.item__row'));
               itemRow.nativeElement.dispatchEvent(new Event('mouseenter'));
               fixture.detectChanges();
            });

            it('menu is displayed', () => {
               let label: DebugElement = fixture.debugElement.query(By.css('.item__row > .label'));
               let menu: DebugElement = fixture.debugElement.query(By.css('.item__row > st-dropdown-menu'));
               expect(label.nativeElement.classList).toContain('primary-link');
               expect(menu.nativeElement).toBeDefined();
            });

           it('should emit event with item and option selected', () => {
               let menu: DebugElement = fixture.debugElement.query(By.css('.item__row > st-dropdown-menu'));
               menu.nativeElement.dispatchEvent(new Event('click'));
               fixture.detectChanges();

               spyOn(fixture.componentInstance.selectItemNonEditable, 'emit');

               let optionMenu: DebugElement = fixture.debugElement.query(By.css('.item__row > st-dropdown-menu'));
               optionMenu.nativeElement.dispatchEvent(new Event('change'));
               fixture.detectChanges();

               expect(fixture.componentInstance.selectItemNonEditable.emit).toHaveBeenCalled();
               expect(fixture.componentInstance.selectItemNonEditable.emit).toHaveBeenCalledWith(element);

               menu.nativeElement.dispatchEvent(new Event('clickOutside'));
               fixture.detectChanges();
               expect(optionMenu.nativeElement.innerHTML).toContain('visibility: hidden;');
            });

            it('should not show menu options if not hover row', () => {
               let itemRow: DebugElement = fixture.debugElement.query(By.css('.item__row'));
               itemRow.nativeElement.dispatchEvent(new Event('mouseleave'));
               fixture.detectChanges();

               let optionMenu: DebugElement = fixture.debugElement.query(By.css('.item__row > st-dropdown-menu'));
               expect(optionMenu).toBe(null);
            });
         });
      });
   });
});
