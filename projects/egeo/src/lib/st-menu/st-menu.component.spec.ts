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

import { StMenuComponent } from './st-menu.component';
import { ComponentFixture, async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { StMenuModule } from './st-menu.module';
import { StMenuModel } from './st-menu.model';
import { By } from '@angular/platform-browser';
import { StMenuOptionsComponent } from './st-menu-options/st-menu-options.component';

let comp: StMenuComponent<string>;
let fixture: ComponentFixture<StMenuComponent<string>>;
const qaTag = 'menu';

const menuOptions: Array<StMenuModel<string>> = [
   {
      name: 'Option1',
      value: 'value1'
   },
   {
      name: 'Option2',
      value: 'value2',
      separator: true,
      subMenus: [
         {
            name: 'Option2-1',
            value: 'value 2-1'
         },
         {
            name: 'Option2-2',
            value: 'value 2-2'
         }
      ]
   }
];

const longMenuOptions: Array<StMenuModel<string>> = [
   {
      name: 'Option1',
      value: 'value1',
      subMenus: Array.from(Array(100).keys()).map((item): StMenuModel<string> => ({
         name: 'item-' + item,
         value: item.toString()
      }))
   }
];

describe('StMenuComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [StMenuModule]
      }).compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent<StMenuComponent<string>>(StMenuComponent);
      comp = fixture.componentInstance;
      comp.qaTag = qaTag;
      comp.dynamicHeight = false;
      comp.menuOptions = menuOptions;
      spyOn(comp.selectedOption, 'emit');
   });

   describe('When it is initialized', () => {
      it('the menu options are collapsed', () => {
         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector('.st-menu__options')).toBeNull();
      });
   });

   describe('When the action menu is clicked', () => {
      beforeEach((done) => {
         comp.search = true;
         fixture.nativeElement.querySelector('.st-menu__link').click();
         setTimeout(() => {
            fixture.detectChanges();
            done();
         });
      });

      it('the first level menu options are showed', () => {
         expect(fixture.nativeElement.querySelector('.st-menu__options')).not.toBeNull();
         expect(fixture.nativeElement.querySelector(`#${menuOptions[1].name}-option`)).not.toBeNull();
         expect(fixture.nativeElement.querySelector(`#${menuOptions[1].name}-option st-menu-options`)).toBeNull();
      });

      it('shows a search input if the option is enabled', () => {
         expect(fixture.nativeElement.querySelector('.st-menu-options__search')).not.toBeNull();
      });

      it('should show submenu options when a element with submenu options is hovered', () => {
         const event = new Event('mouseenter');
         fixture.nativeElement.querySelector(`#${menuOptions[1].name}-option`).dispatchEvent(event);
         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector(`#${menuOptions[1].name}-option st-menu-options`)).not.toBeNull();
      });

      it('shoud not emit a selectedOption event if the clicked element have childs', () => {
         const event = new Event('click');
         fixture.nativeElement.querySelector(`#${menuOptions[1].name}-option`).dispatchEvent(event);
         fixture.detectChanges();
         expect(comp.selectedOption.emit).not.toHaveBeenCalled();
      });

      it('shoud emit a selectedOption event if the clicked element have no childs', () => {
         const event = new Event('click');
         fixture.nativeElement.querySelector(`#${menuOptions[0].name}-option`).dispatchEvent(event);
         fixture.detectChanges();
         expect(comp.selectedOption.emit).toHaveBeenCalled();
      });

   });

   describe('When the menu is showed in dynamic height mode', () => {

      beforeEach((done) => {
         comp.dynamicHeight = true;
         comp.menuOptions = longMenuOptions;
         fixture.nativeElement.style.position = 'absolute';
         fixture.nativeElement.style.top = 0;
         fixture.nativeElement.querySelector('.st-menu__link').click();
         setTimeout(() => {
            fixture.detectChanges();
            done();
         });
      });

      beforeEach(async(() => {
         const event: Event = new Event('mouseenter');
         fixture.nativeElement.querySelector(`#${menuOptions[0].name}-option`).dispatchEvent(event);
         fixture.detectChanges();
         fixture.whenStable().then(() => {
            fixture.detectChanges();
         });
      }));

      it('should show a scroll down button, if the submenu is longer than the window', async(() => {
         fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector(`#${menuOptions[0].name}-option .scroll-button--bottom`).style.opacity).toBe('1');
         });
      }));

      it('should scroll when the scroll button is hovered', () => {
         const stSubmenu: StMenuOptionsComponent<string> =
            fixture.debugElement.query(By.css(`#${longMenuOptions[0].name}-option st-menu-options`)).componentInstance;
         spyOn(stSubmenu, 'scrollTo');
         const event = new Event('mouseover');
         fixture.nativeElement.querySelector('.st-menu-options__list .scroll-button--bottom').dispatchEvent(event);
         fixture.detectChanges();
         expect(stSubmenu.scrollTo).toHaveBeenCalled();
      });
   });

});
