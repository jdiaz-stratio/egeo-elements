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
import { NO_ERRORS_SCHEMA, ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';

import { RouterStub } from '../tests/router-stub';
import { StWindowRefService } from '../utils/window-service';
import { StHeaderComponent } from './st-header.component';
import { StHeaderMenuComponent } from './menu/menu';
import { StHeaderMenuOptionComponent } from './menu-option/menu-option';
import { StHeaderMenuOption, StHeaderSelection } from './st-header.model';


let comp: StHeaderComponent;
let fixture: ComponentFixture<StHeaderComponent>;

let menu: StHeaderMenuOption[] = [
   {
      icon: 'icon-head',
      label: 'IDENTITIES',
      link: '/navigation/header/test1',
      subMenus: [{
         label: 'USER',
         link: '/navigation/header/test1/subtest1'
      },
      {
         label: 'GROUP',
         link: '/navigation/header/test1/subtest2'
      }]
   },
   {
      icon: 'icon-puzzle',
      label: 'SERVICES',
      link: '/navigation/header/test2',
      subMenus: []
   }
];


class WindowMock {
   innerWidth: number = 0;

   setInnerWidth(newValue: number): void {
      this.innerWidth = newValue;
   }
   open(_url?: string, _target?: string, _features?: string, _replace?: boolean): void { }
}
let windowMock: WindowMock = new WindowMock();

class WindowRefMock {
   get nativeWindow(): any {
      return windowMock;
   }
}

describe('StHeader', () => {
   describe('StHeaderComponent', () => {
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [
               StHeaderComponent,
               StHeaderMenuComponent,
               StHeaderMenuOptionComponent
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
               { provide: Router, useClass: RouterStub },
               { provide: StWindowRefService, useClass: WindowRefMock }
            ]
         })
            .compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StHeaderComponent);
         comp = fixture.componentInstance;
      });

      it('Should be able to init correctly', () => {
         windowMock.setInnerWidth(2000);
         comp.menu = menu;
         fixture.elementRef.nativeElement.id = null;
         fixture.detectChanges();

         expect(comp.id).toEqual('st-header');
      });

      it('Should be able to select a menu option', inject([Router], (router: Router) => {
         windowMock.setInnerWidth(2000);
         spyOn(router, 'navigate');
         let responseFunction = jasmine.createSpy('response');
         comp.selectMenu.subscribe(responseFunction);

         comp.menu = menu;
         fixture.detectChanges();

         const responseValue: StHeaderSelection = {
            link: 'test'
         };

         comp.onSelectMenu(responseValue);
         expect(router.navigate).toHaveBeenCalled();
         expect(router.navigate).toHaveBeenCalledWith(['test']);
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith('test');

         expect(comp.showMenuNames).toBeTruthy();

         windowMock.setInnerWidth(1000);
         window.dispatchEvent(new Event('resize'));
         fixture.detectChanges();
         expect(comp.showMenuNames).toBeTruthy();
      }));

      it('Should be able to select a menu option without navigate', inject([Router], (router: Router) => {
         windowMock.setInnerWidth(2000);
         spyOn(router, 'navigate');
         let responseFunction = jasmine.createSpy('response');
         comp.selectMenu.subscribe(responseFunction);

         comp.menu = menu;
         comp.navigateByDefault = false;
         fixture.detectChanges();

         const responseValue: StHeaderSelection = { link: 'test' };

         comp.onSelectMenu(responseValue);
         expect(router.navigate).not.toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith('test');
      }));

      it('Should be able to open external link in new page',
         inject([Router, StWindowRefService], (router: Router, windowRefService: StWindowRefService) => {
            windowMock.setInnerWidth(2000);
            spyOn(router, 'navigate');
            spyOn(windowRefService.nativeWindow, 'open');
            const responseFunction = jasmine.createSpy('response');
            comp.selectMenu.subscribe(responseFunction);

            comp.menu = menu;
            fixture.detectChanges();

            const responseValue: StHeaderSelection = { link: 'test', external: true, openInNewPage: true };

            comp.onSelectMenu(responseValue);
            expect(router.navigate).not.toHaveBeenCalled();
            expect(responseFunction).toHaveBeenCalled();
            expect(responseFunction).toHaveBeenCalledWith('test');
            expect(windowRefService.nativeWindow.open).toHaveBeenCalled();
            expect(windowRefService.nativeWindow.open).toHaveBeenCalledWith('test', '_blank');
         }));

      it('Should be able to open external link in the same page',
         inject([Router, StWindowRefService], (router: Router, windowRefService: StWindowRefService) => {
            windowMock.setInnerWidth(2000);
            spyOn(router, 'navigate');
            spyOn(windowRefService.nativeWindow, 'open');
            const responseFunction = jasmine.createSpy('response');
            comp.selectMenu.subscribe(responseFunction);

            comp.menu = menu;
            fixture.detectChanges();

            const responseValue: StHeaderSelection = { link: 'test', external: true, openInNewPage: false };

            comp.onSelectMenu(responseValue);
            expect(router.navigate).not.toHaveBeenCalled();
            expect(responseFunction).toHaveBeenCalled();
            expect(responseFunction).toHaveBeenCalledWith('test');
            expect(windowRefService.nativeWindow.open).toHaveBeenCalled();
            expect(windowRefService.nativeWindow.open).toHaveBeenCalledWith('test', '_self');
         }));

      it(`Should hide the menu labels when they don't fit on the screen`, () => {
         windowMock.setInnerWidth(2000);
         comp.menu = menu;
         fixture.detectChanges();

         expect(comp.showMenuNames).toBeTruthy();

         windowMock.setInnerWidth(50);
         comp.onResize();
         fixture.detectChanges();

         expect(comp.showMenuNames).toBeFalsy();
      });

      it(`Should get user menu width`, () => {
         const userMenu = document.createElement('div');
         const userMenuChild = document.createElement('div');
         userMenuChild.appendChild(document.createTextNode('User Menu'));
         userMenu.appendChild(userMenuChild);
         spyOn(userMenuChild, 'getBoundingClientRect').and.returnValue({ width: 100 });

         comp.menu = menu;
         comp.userMenuContainer = new ElementRef(userMenu);
         fixture.detectChanges();

         expect(comp.userMenuElementWidth).toEqual(100);
      });
   });
});
