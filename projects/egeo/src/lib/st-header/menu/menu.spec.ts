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
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StHeaderMenuComponent } from './menu';
import { StHeaderMenuOption } from '../st-header.model';


let comp: StHeaderMenuComponent;
let fixture: ComponentFixture<StHeaderMenuComponent>;
let de: DebugElement;

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


describe('StHeader', () => {
   describe('StHeaderMenuComponent', () => {
      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [StHeaderMenuComponent],
            schemas: [NO_ERRORS_SCHEMA]
         })
            .compileComponents();  // compile template and css
      }));
      beforeEach(() => {
         fixture = TestBed.createComponent(StHeaderMenuComponent);
         comp = fixture.componentInstance;
         comp.menu = menu;
      });

      it('should be initialized correctly', () => {
         fixture.detectChanges();

         expect(comp.qaId).toContain('-list');
         expect(comp.itemId).toContain('-item');
      });
   });
});
