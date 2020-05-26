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
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { StSidebarComponent } from './st-sidebar.component';
import { StSidebarItemListComponent } from './st-sidebar-item-list/st-sidebar-item-list.component';
import { StSearchModule } from '../st-search/st-search.module';
import { StSidebarItem } from './st-sidebar-item.interface';

describe('StSidebar', () => {

   let component: StSidebarComponent;
   let fixture: ComponentFixture<StSidebarComponent>;
   let itemList: HTMLLIElement[];

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule],
         declarations: [StSidebarComponent, StSidebarItemListComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StSidebarComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StSidebarItemListComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StSidebarComponent);
      component = fixture.componentInstance;

      component.items = [
         { id: 'vault-roles', label: 'Vault Roles' },
         { id: 'identities', label: 'Identities' },
         { id: 'masters', label: 'Masters' },
         { id: 'agents', label: 'Agents' },
         { id: 'roles', label: 'Roles' },
         {
            id: 'complex', label: 'Complex', items: [
            { id: 'child-1', label: 'Child 1' },
            { id: 'child-2', label: 'Child 2', items: [{ id: 'child-2.1', label: 'Child 2.1' }] },
            { id: 'child-3', label: 'Child 3' }
         ]
         }
      ];

      fixture.detectChanges();
      itemList = fixture.nativeElement.querySelectorAll('li');
   });

   it('st-sidebar class is added to the host tag', () => {
      let hostTag: HTMLButtonElement = fixture.nativeElement;

      expect(hostTag.classList).toContain('st-sidebar');
   });

   it('by default, first item is active if the active item is not introduced', () => {
      expect(itemList[0].classList).toContain('item--active');
   });

   it('if active item is updated from outside, it has to be updated as active', () => {
      // by default, first item is active
      expect(itemList[0].classList).toContain('item--active');

      // active is changed from outside
      component.active = component.items[4];
      fixture.detectChanges();

      expect(itemList[4].classList).toContain('item--active');
      expect(itemList[0].classList).not.toContain('item--active');
   });

   it('if active is a children of an item, all its branch is displayed with the class "item--has-active"', () => {
      component.active = component.items[5].items[1].items[0];

      fixture.detectChanges();

      expect(itemList[5].classList).toContain('item--has-active');
      expect(itemList[5].querySelectorAll('li')[0].classList).not.toContain('item--has-active');
      expect(itemList[5].querySelectorAll('li')[1].classList).toContain('item--has-active');
      expect(itemList[5].querySelectorAll('li')[1].querySelectorAll('li')[0].classList).toContain('item--active');
   });

   describe('When user clicks on a tab', () => {

      describe('and it does not have children', () => {

         it('event is emitted if it was not already activated', () => {
            spyOn(component.change, 'emit');
            (<HTMLSpanElement> itemList[2].querySelector('.item__label')).click();

            expect(component.change.emit).toHaveBeenCalledWith(component.items[2]);

            (<jasmine.Spy> component.change.emit).calls.reset();
            component.active = component.items[2];

            (<HTMLSpanElement> itemList[2].querySelector('.item__label')).click();

            fixture.detectChanges();
            expect(component.change.emit).not.toHaveBeenCalled();

            (<HTMLSpanElement> itemList[3].querySelector('.item__label')).click();

            fixture.detectChanges();
            fixture.changeDetectorRef.markForCheck();

            expect(component.change.emit).toHaveBeenCalledWith(component.items[3]);
         });

         it('this tab is displayed as active one', () => {
            component.active = component.items[2];
            fixture.detectChanges();

            expect(itemList[2].classList).toContain('item--active');
         });
      });

      describe('and it has children', () => {
         it('if it is collapsed, these children are displayed', () => {
            let itemWithChildren = itemList[5];

            expect(itemWithChildren.querySelectorAll('ul').length).toBe(0);

            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();

            fixture.detectChanges();

            expect(itemWithChildren.classList).not.toContain('item--active');
            let childrenElements = itemWithChildren.querySelectorAll('li');

            fixture.detectChanges();

            expect(childrenElements.length).toBe(component.items[5].items.length);
         });

         it('but it is expanded, these children are hidden', () => {
            let itemWithChildren = itemList[5];

            expect(itemWithChildren.querySelectorAll('ul').length).toBe(0);

            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();

            fixture.detectChanges();
            expect(itemWithChildren.classList).toContain('item--expanded');

            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();

            fixture.detectChanges();

            let childrenElements = itemWithChildren.querySelectorAll('li');
            expect(childrenElements.length).toBe(0);
            expect(itemWithChildren.classList).not.toContain('item--expanded');
         });

         it('if user clicks on a child after clicking on its parent, it is displayed as active ' +
            'and class "item-list--has-active" is added to its parent', () => {
            const itemWithChildren = itemList[5];
            (<HTMLSpanElement> itemWithChildren.querySelector('.item__label')).click();
            fixture.detectChanges();
            const childrenElements = itemWithChildren.querySelectorAll('li');

            component.active = component.items[5].items[0]; // active the first child
            fixture.detectChanges();

            expect(childrenElements[0].classList).toContain('item--active');
            expect(itemWithChildren.classList).toContain('item--has-active');
         });
      });
   });

   it('It should be able to add any class to an specific item', () => {
      component.items[2].class = 'warning';
      fixture.detectChanges();

      expect(itemList[2].classList).toContain('warning');
   });

   describe('Should be able to activate the search mode', () => {
      beforeEach(() => {
         spyOn(component.search, 'emit');
      });

      it('by default, search mode is not activated', () => {
         expect(component.searchMode).toBeFalsy();
      });

      it('a search input is displayed only if search mode is activated', () => {
         component.searchMode = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('st-search')).not.toBeNull();

         component.searchMode = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('st-search')).toBeNull();
      });

      it('When user interacts with the search input, an event is emitted with the introduced text', (done) => {
         const fakeSearchText: string = 'fake search';
         component.searchMode = true;
         fixture.detectChanges();

         const searchInput: HTMLInputElement = fixture.nativeElement.querySelector('.st-search-input');

         fixture.detectChanges();

         searchInput.value = fakeSearchText;
         searchInput.dispatchEvent(new Event('input'));

         setTimeout(() => {
            expect(component.search.emit).toHaveBeenCalledWith(fakeSearchText);
            done();
         }, 0);
      });
   });
});



@Component({
   template: `
    <st-sidebar [items]="items">
       <span sidebar-header>TEST HEADER</span>
       <span sidebar-footer>TEST FOOTER</span>
    </st-sidebar>
      `
})
class StSidebarComponentTestComponent {
   public items: StSidebarItem[] = [
      { id: 'vault-roles', label: 'Vault Roles' },
      { id: 'identities', label: 'Identities', class: 'warning', disabled: true },
      {
         id: 'masters',
         label: 'Masters',
         result: '-',
         items: [{
            id: 'sub-item1',
            label: 'Subitem 1',
            items: [
               { id: 'sub-item1.1', label: 'Subitem 1.1', result: '450' },
               { id: 'sub-item1.2', label: 'Subitem 1.2' }]
         }, { id: 'sub-item2', label: 'Subitem 2' }]
      },
      {
         id: 'agents', label: 'So long section name', result: '25',
         items: [
            { id: 'agents.1', label: 'Subitem 1.1', result: '25' },
            { id: 'agents.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'agents2', label: 'So long section name 2 without results',
         items: [
            { id: 'agents2.1.1', label: 'Subitem 1.1.1', result: '25' },
            { id: 'agents2.1.2', label: 'Subitem 1.1.2' }]
      },
      { id: 'without-children', label: 'No children' },
      {
         id: 'sectionA', label: 'Section A',
         items: [
            { id: 'sub-sectionA.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionA.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionB', label: 'Section B', items: [
         { id: 'sub-sectionB.1', label: 'Subitem 1.1',    disabled: true },
         { id: 'sub-sectionB.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionC', label: 'Section C',
         items: [
            { id: 'sub-sectionC.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionC.2', label: 'Subitem 1.2' }]
      },
      {
         id: 'sectionD', label: 'Section D',
         items: [
            { id: 'sub-sectionD.1', label: 'Subitem 1.1' },
            { id: 'sub-sectionD.2', label: 'Subitem 1.2' }]
      }
   ];
}

let usageFixture: ComponentFixture<StSidebarComponentTestComponent>;
let usageComponent: StSidebarComponentTestComponent;

describe('StSidebarComponentComponent in usage', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StSearchModule],
         declarations: [StSidebarComponent, StSidebarItemListComponent, StSidebarComponentTestComponent]
      })
         .overrideComponent(StSidebarComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      usageFixture = TestBed.createComponent(StSidebarComponentTestComponent);
      usageComponent = usageFixture.componentInstance;
   });

   afterEach(() => {
      usageFixture.destroy();
   });

   it('It should be able to add some content before and after the menu', () => {
      expect(usageFixture.nativeElement.querySelector('[sidebar-header]')).not.toBeNull();
      expect(usageFixture.nativeElement.querySelector('span[sidebar-header]').innerText).toContain('TEST HEADER');
      expect(usageFixture.nativeElement.querySelector('[sidebar-footer]')).not.toBeNull();
      expect(usageFixture.nativeElement.querySelector('span[sidebar-footer]').innerText).toContain('TEST FOOTER');
   });

});
