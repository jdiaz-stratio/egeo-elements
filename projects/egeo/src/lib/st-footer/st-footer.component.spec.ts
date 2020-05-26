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
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { StFooterComponent } from './st-footer.component';
import { StFooterLink } from './st-footer.model';

let items: StFooterLink[] = [
   {
      title: 'External Router',
      url: 'http://www.google.es'
   },
   {
      title: 'Internal Router',
      router: 'link'
   },
   {
      title: 'Output Action'
   },
   {
      title: 'Icon button',
      router: 'link',
      icon: 'icon-plus'
   }
];

describe('StFooterComponent', () => {

   let component: StFooterComponent;
   let fixture: ComponentFixture<StFooterComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [CommonModule, RouterTestingModule],
         declarations: [StFooterComponent]
      })
         .compileComponents();  // compile template and css
   }));


   beforeEach(() => {
      fixture = TestBed.createComponent(StFooterComponent);
      component = fixture.componentInstance;
   });

   describe('When check component Input', () => {
      it('Should have 4 links the menu', () => {
         component.links = items;
         fixture.detectChanges();
         expect(fixture.componentInstance.links.length).toBe(4);
      });

      it('Should have a right menu text', () => {
         component.rightsText = 'Example Text';
         fixture.detectChanges();
         let textElement = fixture.nativeElement.querySelector('.sth-footer-text');
         expect(textElement).toBeDefined();
      });

   });

   describe('When modify input image', () => {

      it('Should not have a image as logo', () => {
         let imageElement = fixture.nativeElement.querySelector('img');
         expect(imageElement).toBeNull();
      });

      it('Should have a image as logo', () => {
         component.image = 'https://www.google.es/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
         fixture.detectChanges();
         let imageElement = fixture.nativeElement.querySelector('img');
         expect(imageElement).toBeDefined();
      });

   });

   describe('When check component Output', () => {

      it('Should click on a link in the menu and output the content of the link', () => {
         let item: StFooterLink = {
            title: 'External Router',
            url: 'http://www.google.es'
         };

         spyOn(component.link, 'emit');
         component.links = items;
         fixture.detectChanges();
         let itemElement = fixture.nativeElement.querySelector('li');
         let itemClick = itemElement.querySelector('.link');

         itemClick.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(component.link.emit).toHaveBeenCalledWith(item);
      });

   });

   describe('Should display a list of links', () => {
      beforeEach(() => {
         component.links = items;
         fixture.detectChanges();
      });

      it ('if a link has an icon, it is displayed as an button', () => {
         expect(fixture.nativeElement.querySelector('span.icon-plus[title="Icon button"]')).not.toBeNull();
      });

      it ('if links does not have an icon, it is displayed as a link', () => {
         const links = fixture.nativeElement.querySelectorAll('span.link');

         expect(links.length).toBe(3);
         expect(links[0].innerText).toEqual('External Router');
         expect(links[1].innerText).toEqual('Internal Router');
         expect(links[2].innerText).toEqual('Output Action');
      });
   });

});
