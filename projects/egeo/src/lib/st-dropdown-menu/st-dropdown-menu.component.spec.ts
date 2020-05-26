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
import { ChangeDetectionStrategy, Component, DebugElement, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StDropdownMenuComponent } from './st-dropdown-menu.component';
import { StPopPlacement } from '../st-pop/st-pop.model';
import { StDropdownMenuModule } from './st-dropdown-menu.module';
import { StDropDownMenuGroup, StDropDownMenuItem, StDropDownVisualMode } from './st-dropdown-menu.interface';
import { StDropdownMenuItemComponent } from './st-dropdown-menu-item/st-dropdown-menu-item.component';

const simpleItems: StDropDownMenuItem[] = [
   { label: 'example 1', value: 1 },
   { label: 'example 2', value: 2 },
   { label: 'example 3', value: 3 },
   { label: 'example 4', value: 4 },
   { label: 'example 5', value: 5 },
   { label: 'example 6', value: 6 },
   { label: 'example 7', value: 7 },
   { label: 'example 8', value: 8 },
   { label: 'example 9', value: 9 },
   { label: 'example 10', value: 10 },
   { label: 'example 11', value: 11 }
];

const simpleItems2: StDropDownMenuItem[] = [
   { label: 'test 1', value: 11 },
   { label: 'test 2', value: 12 },
   { label: 'test 3', value: 13 },
   { label: 'test 4', value: 14 },
   { label: 'test 5', value: 15 }
];

const groupedItems: StDropDownMenuGroup[] = [
   { title: 'group 1', items: simpleItems },
   { title: 'group 2', items: simpleItems2 }
];

const emptyGroup: StDropDownMenuGroup[] = [
   { title: 'group 1', items: [] },
   { title: 'group 2', items: simpleItems2 }
];

const defaultRowHeight: number = 42;

@Component({
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <st-dropdown-menu #dropdown
                        [items]="items"
                        [active]="active"
                        [selectedItem]="selected"
                        [visualMode]="visualMode"
                        [keyBoardMove]="keyBoardMove"
                        id="test-id"
                        (change)="onChange($event)">
         <button class="button button-primary" [style.width]="dropdownWidth" (click)="onChangeMenuVisibility()">Show</button>
         <span dropdown-header><span>TEST HEADER</span></span>
         <span dropdown-footer>TEST FOOTER</span>
      </st-dropdown-menu>
   `
})
class TestDropdownComponent {
   items: StDropDownMenuItem[];
   active: boolean = false;
   selected: StDropDownMenuItem;
   @ViewChild('dropdown', {static: false}) dropdownItem: StDropdownMenuComponent;
   dropdownWidth: string = '300px';
   visualMode: StDropDownVisualMode = StDropDownVisualMode.OPTION_LIST;
   keyBoardMove: boolean = false;

   onChange(item: StDropDownMenuItem): void {
      this.selected = item;
   }

   onChangeMenuVisibility(): void {
      this.active = !this.active;
   }
}

describe('StDropdownMenu', () => {
   describe('Component', () => {

      let comp: StDropdownMenuComponent;
      let fixture: ComponentFixture<StDropdownMenuComponent>;

      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [StDropdownMenuComponent, StDropdownMenuItemComponent],
            schemas: [NO_ERRORS_SCHEMA]
         })
            .overrideComponent(StDropdownMenuItemComponent, {
               set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .overrideComponent(StDropdownMenuComponent, {
               set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StDropdownMenuComponent);
         comp = fixture.componentInstance;
      });

      it('Should init correctly', () => {
         comp.items = simpleItems;
         fixture.elementRef.nativeElement.id = null;
         fixture.detectChanges();

         const defaultMaxHeight: number = comp.itemsBeforeScroll * 42; // 42 it's default row height

         expect(comp.active).toBeFalsy();
         expect(comp.items).toEqual(simpleItems);
         expect(comp.placement).toEqual(StPopPlacement.BOTTOM_START);
         expect(comp.emptyListMessage).toEqual('');
         expect(comp.selectedItem).toBeUndefined();
         expect(comp.itemsBeforeScroll).toEqual(8);
         expect(comp.moveSelected).toBeTruthy();
         expect(comp.styleSelected).toBeTruthy();
         expect(comp.offset).toEqual({ x: 0, y: 0 });

         expect(comp.componentId).toBeNull();
         expect(comp.menuId).toBeNull();
         expect(comp.getItemId('test')).toBeNull();

         expect(comp.isItemGroup).toBeFalsy();
         expect(comp.menuMaxHeight).toEqual(`${defaultMaxHeight}px`);
      });

      it('Should get max height', () => {
         comp.items = simpleItems;
         fixture.elementRef.nativeElement.id = null;
         fixture.detectChanges();

         const defaultMaxHeight: number = comp.itemsBeforeScroll * defaultRowHeight; // 42 it's default row height
         expect(comp.menuMaxHeight).toEqual(`${defaultMaxHeight}px`);

         comp.itemsBeforeScroll = undefined;
         fixture.detectChanges();
         expect(comp.menuMaxHeight).toBeNull();
      });

      it('Should propagate ids', () => {
         comp.items = simpleItems;
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         fixture.detectChanges();

         expect(comp.componentId).toEqual(id);
         expect(comp.menuId).toEqual(`${id}-menu`);
         expect(comp.getItemId('test')).toEqual(`${id}-option-test`);
      });

      it('Should propagate ids to menu without label', () => {
         comp.items = simpleItems;
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         fixture.detectChanges();

         expect(comp.componentId).toEqual(id);
         expect(comp.menuId).toEqual(`${id}-menu`);
         expect(comp.getItemId(undefined)).toBeNull();
      });

      it('Should show options when active it\'s true', () => {
         comp.items = simpleItems;
         comp.active = false;
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         fixture.detectChanges();

         let items: DebugElement[] = fixture.debugElement.queryAll(By.css('.st-dropdown-menu-item'));
         expect(items).toBeDefined();
         expect(items.length).toBeDefined();
         expect(items.length).toEqual(0);

         comp.active = true;
         fixture.detectChanges();

         items = fixture.debugElement.queryAll(By.css('.st-dropdown-menu-item'));
         expect(items).toBeDefined();
         expect(items.length).toBeDefined();
         expect(items.length).toEqual(comp.items.length);
      });

      it('Should show empty list message', () => {
         comp.items = [];
         comp.active = false;
         comp.emptyListMessage = 'Test message';
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         fixture.detectChanges();

         let item: DebugElement = fixture.debugElement.query(By.css('.without-results'));
         expect(item).toBeNull();

         comp.active = true;
         fixture.detectChanges();

         item = fixture.debugElement.query(By.css('.without-results'));
         expect(item).toBeDefined();
         expect(item.nativeElement).toBeDefined();
         expect((item.nativeElement as HTMLDivElement).innerText).toEqual(comp.emptyListMessage);
      });

      it('Should show title of group menu', () => {
         comp.items = groupedItems;
         comp.active = false;
         fixture.detectChanges();

         let titles: DebugElement[] = fixture.debugElement.queryAll(By.css('h3'));
         expect(titles).toBeDefined();
         expect(titles.length).toBeDefined();
         expect(titles.length).toEqual(0);

         comp.active = true;
         fixture.detectChanges();

         titles = fixture.debugElement.queryAll(By.css('h3'));
         expect(titles).toBeDefined();
         expect(titles.length).toBeDefined();
         expect(titles.length).toEqual(2);
         expect((titles[0].nativeElement as HTMLElement).children[0].textContent).toEqual(groupedItems[0].title);
         expect((titles[1].nativeElement as HTMLElement).children[0].textContent).toEqual(groupedItems[1].title);
      });

      it('Should show options when active it\'s true and with a group menu', () => {
         comp.items = groupedItems;
         comp.active = false;
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         const totalItems: number = groupedItems.reduce((count, act) => count + act.items.length, 0);
         fixture.detectChanges();

         let items: DebugElement[] = fixture.debugElement.queryAll(By.css('.st-dropdown-menu-item'));
         expect(items).toBeDefined();
         expect(items.length).toBeDefined();
         expect(items.length).toEqual(0);

         comp.active = true;
         fixture.detectChanges();

         items = fixture.debugElement.queryAll(By.css('.st-dropdown-menu-item'));
         expect(items).toBeDefined();
         expect(items.length).toEqual(totalItems);
      });

      it('Should show empty list message with a group menu', () => {
         comp.items = emptyGroup;
         comp.active = false;
         comp.emptyListMessage = 'Test message';
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         fixture.detectChanges();

         let item: DebugElement = fixture.debugElement.query(By.css('.without-results'));
         expect(item).toBeNull();

         comp.active = true;
         fixture.detectChanges();

         item = fixture.debugElement.query(By.css('.without-results'));
         expect(item).toBeDefined();
         expect(item.nativeElement).toBeDefined();
         expect((item.nativeElement as HTMLDivElement).innerText).toEqual(comp.emptyListMessage);
      });

      it('Should propagate emit on select', () => {
         comp.items = simpleItems;
         comp.active = true;
         const id: string = 'test-id';
         (fixture.elementRef.nativeElement as HTMLElement).id = id;
         spyOn(comp.change, 'emit');

         fixture.whenStable().then(() => {
            comp.onChange(simpleItems[0]);
            expect(comp.change.emit).toHaveBeenCalled();
            expect(comp.change.emit).toHaveBeenCalledWith(simpleItems[0]);
         });
      });

      describe('Should be able to active keyboard listeners to move between options', () => {
         it('If input keyBoardMove is false, listener is not added', () => {
            comp.active = true;
            comp.items = simpleItems;
            comp.keyBoardMove = false;

            fixture.detectChanges();
            comp.ngOnInit();

            spyOn(HTMLLIElement.prototype, 'focus');

            const keyboardEvent = new Event('keydown');
            (<any> keyboardEvent).keyCode = 40;
            document.dispatchEvent(keyboardEvent);

            expect(HTMLLIElement.prototype.focus).not.toHaveBeenCalled();
         });

         describe('If input keyBoardMove is true, listener is added', () => {
            let options: HTMLLIElement[];
            beforeEach(() => {
               comp.active = true;
               comp.items = simpleItems;
               fixture.detectChanges();
               comp.keyBoardMove = true;

               comp.ngOnInit();
               options = fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item');
               for (let i = 0; i < options.length; ++i) {
                  spyOn(options[i], 'focus');
               }
            });

            it('If user presses key down and there isn´t an option selected, first option is focused', () => {
               const keyboardEvent = new Event('keydown');
               (<any> keyboardEvent).keyCode = 40;

               document.dispatchEvent(keyboardEvent);

               expect(options[0].focus).toHaveBeenCalledTimes(1);
               for (let i = 1; i < options.length; ++i) {
                  expect(options[i].focus).not.toHaveBeenCalled();
               }
            });

            it('If user presses key down and there is an option selected, next option is focused', () => {
               comp.ngOnDestroy();
               comp.selectedItem = (<StDropDownMenuItem> comp.items[3]);
               comp.ngOnInit();
               for (let i = 0; i < options.length; ++i) {
                  (<jasmine.Spy> options[i].focus).calls.reset();
               }

               const keyboardEvent = new Event('keydown');
               (<any> keyboardEvent).keyCode = 40;
               document.dispatchEvent(keyboardEvent);

               expect(options[4].focus).toHaveBeenCalledTimes(1);
               for (let i = 0; i < options.length; ++i) {
                  if (i !== 4) {
                     expect(options[i].focus).not.toHaveBeenCalled();
                  }
               }
            });

            it('If user presses key down and current focused options is the last, first option is focused', () => {
               comp.ngOnDestroy();
               comp.selectedItem = (<StDropDownMenuItem> comp.items[comp.items.length - 1]);
               comp.ngOnInit();
               for (let i = 0; i < options.length; ++i) {
                  (<jasmine.Spy> options[i].focus).calls.reset();
               }

               const keyboardEvent = new Event('keydown');
               (<any> keyboardEvent).keyCode = 40;
               document.dispatchEvent(keyboardEvent);

               expect(options[0].focus).toHaveBeenCalledTimes(1);
               for (let i = 1; i < options.length; ++i) {
                  expect(options[i].focus).not.toHaveBeenCalled();
               }
            });

            it('If user presses key up and there isn´t an option selected, first option is focused', () => {
               const keyboardEvent = new Event('keydown');
               (<any> keyboardEvent).keyCode = 38;
               document.dispatchEvent(keyboardEvent);

               expect(options[0].focus).toHaveBeenCalledTimes(1);
               for (let i = 1; i < options.length; ++i) {
                  expect(options[i].focus).not.toHaveBeenCalled();
               }
            });

            it('If user presses key up and there is an option selected, previous option is focused', () => {
               comp.ngOnDestroy();
               comp.selectedItem = (<StDropDownMenuItem> comp.items[3]);
               comp.ngOnInit();
               for (let i = 0; i < options.length; ++i) {
                  (<jasmine.Spy> options[i].focus).calls.reset();
               }

               const keyboardEvent = new Event('keydown');
               (<any> keyboardEvent).keyCode = 38;
               document.dispatchEvent(keyboardEvent);

               expect(options[2].focus).toHaveBeenCalledTimes(1);
               for (let i = 0; i < options.length; ++i) {
                  if (i !== 2) {
                     expect(options[i].focus).not.toHaveBeenCalled();
                  }
               }
            });

            it('If user presses key up and current focused options is the first, last option is focused', () => {
               comp.ngOnDestroy();
               comp.selectedItem = (<StDropDownMenuItem> comp.items[0]);
               comp.ngOnInit();
               for (let i = 0; i < options.length; ++i) {
                  (<jasmine.Spy> options[i].focus).calls.reset();
               }

               const keyboardEvent = new Event('keydown');
               (<any> keyboardEvent).keyCode = 38;
               document.dispatchEvent(keyboardEvent);

               expect(options[comp.items.length - 1].focus).toHaveBeenCalledTimes(1);
               for (let i = 0; i < options.length - 1; ++i) {
                  expect(options[i].focus).not.toHaveBeenCalled();
               }
            });

            it('When user presses enter key when an option is focused, this is selected', () => {
               comp.ngOnDestroy();
               comp.selectedItem = (<StDropDownMenuItem> comp.items[2]);
               comp.ngOnInit();
               const keyboardEvent = new Event('keydown');

               (<any> keyboardEvent).keyCode = 40;
               document.dispatchEvent(keyboardEvent);
               spyOn(comp.change, 'emit');

               const enterEvent = new Event('keyup');
               (<any> enterEvent).key = 'Enter';

               options[3].dispatchEvent(enterEvent);

               expect(comp.change.emit).toHaveBeenCalledWith(<StDropDownMenuItem> comp.items[3]);
            });
         });
      });

   });

   describe('Instance', () => {
      let instanceTestFixture: ComponentFixture<TestDropdownComponent>;
      let instanceTestComp: TestDropdownComponent;
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            imports: [StDropdownMenuModule],
            declarations: [TestDropdownComponent]
         })
            .overrideComponent(StDropdownMenuComponent, {
               set: { changeDetection: ChangeDetectionStrategy.Default }
            })
            .compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         instanceTestFixture = TestBed.createComponent(TestDropdownComponent);
         instanceTestComp = instanceTestFixture.componentInstance;
      });

      afterEach(() => {
         instanceTestFixture.destroy();
      });

      it('It should be able to add some content before and after the menu', (done) => {
         instanceTestComp.active = true;
         instanceTestFixture.detectChanges();

         instanceTestFixture.whenStable().then(() => {
            instanceTestFixture.detectChanges();

            expect(instanceTestFixture.nativeElement.querySelector('[dropdown-header]')).not.toBeNull();
            expect(instanceTestFixture.nativeElement.querySelector('span[dropdown-header]').innerText).toContain('TEST HEADER');
            expect(instanceTestFixture.nativeElement.querySelector('[dropdown-footer]')).not.toBeNull();
            expect(instanceTestFixture.nativeElement.querySelector('span[dropdown-footer]').innerText).toContain('TEST FOOTER');
            done();
         });

      });

      it('If visual mode is OPTION_LIST, class "menu-list" is not added to the list', () => {
         instanceTestComp.active = true;
         instanceTestFixture.detectChanges();

         expect(instanceTestFixture.nativeElement.querySelector('.st-dropdown-menu').classList).not.toContain('menu-list');
      });

      it('If visual mode is MENU_LIST, class "menu-list" is added to the list', () => {
         instanceTestComp.active = true;
         instanceTestComp.visualMode = StDropDownVisualMode.MENU_LIST;
         instanceTestFixture.detectChanges();

         expect(instanceTestFixture.nativeElement.querySelector('.st-dropdown-menu').classList).toContain('menu-list');
      });

      it('Should adjust to button width when have button element', (done) => {
         instanceTestComp.items = simpleItems;
         instanceTestComp.active = false;
         instanceTestFixture.detectChanges();

         instanceTestFixture.whenStable().then(() => {

            expect(instanceTestComp.dropdownItem.widthMenu).toEqual(instanceTestComp.dropdownWidth);
            done();
         });
      });

      it('Should have scroll to 0 in menu when without it\'s selected', () => {
         instanceTestComp.items = simpleItems;
         instanceTestComp.active = true;
         instanceTestFixture.detectChanges();

         let ul: HTMLInputElement = instanceTestFixture.debugElement.query(By.css('ul')).nativeElement;
         expect(ul.scrollTop).toBe(0);
      });

      it('Should have scroll to 0 in menu', () => {
         instanceTestComp.items = simpleItems;
         instanceTestComp.active = true;
         instanceTestComp.selected = simpleItems[0];
         instanceTestFixture.detectChanges();

         let ul: HTMLInputElement = instanceTestFixture.debugElement.query(By.css('ul')).nativeElement;
         expect(ul.scrollTop).toBe(0);
      });

      it('Should not add a list container when item list it\'s empty ', () => {
         instanceTestComp.items = [];
         instanceTestFixture.detectChanges();

         expect(instanceTestFixture.debugElement.query(By.css('ul'))).toBeNull();
      });

      it('Should emit the same object as input on select (Extra parameters)', () => {
         const itemsWithExtraParams: StDropDownMenuItem[] = [
            { label: 'example 1', value: 1, extraparam: 'test' },
            { label: 'example 2', value: 2, extraparam: true, extraparam2: 'data' },
            { label: 'example 3', value: 3, extraparam: { test: 'test' } }
         ];
         instanceTestComp.items = itemsWithExtraParams;
         spyOn(instanceTestComp, 'onChange');
         instanceTestComp.active = true;
         instanceTestFixture.detectChanges();

         const items: DebugElement[] = instanceTestFixture.debugElement.queryAll(By.css('.st-dropdown-menu-item'));
         expect(items).toBeDefined();
         expect(items.length).toEqual(3);

         (items[0].nativeElement as HTMLElement).click();
         instanceTestFixture.detectChanges();
         expect(instanceTestComp.onChange).toHaveBeenCalled();
         expect(instanceTestComp.onChange).toHaveBeenCalledWith(itemsWithExtraParams[0]);

         (items[1].nativeElement as HTMLElement).click();
         instanceTestFixture.detectChanges();
         expect(instanceTestComp.onChange).toHaveBeenCalled();
         expect(instanceTestComp.onChange).toHaveBeenCalledWith(itemsWithExtraParams[1]);

         (items[2].nativeElement as HTMLElement).click();
         instanceTestFixture.detectChanges();
         expect(instanceTestComp.onChange).toHaveBeenCalled();
         expect(instanceTestComp.onChange).toHaveBeenCalledWith(itemsWithExtraParams[2]);
      });
   });
});
