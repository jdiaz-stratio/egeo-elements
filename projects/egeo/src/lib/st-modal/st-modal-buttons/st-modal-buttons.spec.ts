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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Component
import { StModalButtonsComponent } from './st-modal-buttons';
import { StModalButton, StModalResponse } from '../st-modal.model';



let buttons: StModalButton[];

describe('StModal', () => {
   describe('StModalButtonsComponent', () => {
      let comp: StModalButtonsComponent;
      let fixture: ComponentFixture<StModalButtonsComponent>;


      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [StModalButtonsComponent],
            schemas: [NO_ERRORS_SCHEMA]
         }).compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StModalButtonsComponent);
         comp = fixture.componentInstance;
         buttons = [
            { leftIcon: 'icon-trash', label: 'Yes Button', classes: 'button-primary', responseValue: StModalResponse.YES, closeOnClick: false },
            { leftIcon: 'icon-circle-cross', label: 'No', responseValue: StModalResponse.NO }
         ];
      });

      it('should be init conrrectly', () => {
         comp.buttonConfig = buttons;
         fixture.detectChanges();
         expect(comp.getButtonClass(buttons[0])).toEqual(`${buttons[0].classes} large`);
         expect(comp.getButtonClass(buttons[1])).toEqual('large');
         expect(comp.getButtonId(buttons[0])).toEqual('st-modal-button-Yes_Button');
         expect(comp.hasButtons).toBeTruthy();
      });

      it('should get button id', () => {
         const subtype1: StModalButton = { label: undefined };
         const subtype2: StModalButton = { label: 'test con espacios' };
         const subtype3: StModalButton = { label: 'test' };
         fixture.detectChanges();

         expect(comp.getButtonId(undefined)).toBeNull();
         expect(comp.getButtonId(subtype1)).toBeNull();
         expect(comp.getButtonId(subtype2)).toEqual('st-modal-button-test_con_espacios');
         expect(comp.getButtonId(subtype3)).toEqual('st-modal-button-test');
      });

      it('should get if has buttons', () => {
         fixture.detectChanges();

         expect(comp.hasButtons()).toBeFalsy();
         comp.buttonConfig = [];
         fixture.detectChanges();
         expect(comp.hasButtons()).toBeFalsy();

         comp.buttonConfig = buttons;
         fixture.detectChanges();
         expect(comp.hasButtons()).toBeTruthy();
      });

      it('should get button class', () => {
         const subtype1: StModalButton = { label: 'label', classes: 'primary' };
         const subtype2: StModalButton = { label: 'label', classes: 'secondary' };
         fixture.detectChanges();

         expect(comp.getButtonClass(undefined)).toEqual('large');
         expect(comp.getButtonClass(subtype1)).toEqual('primary large');
         expect(comp.getButtonClass(subtype2)).toEqual('secondary large');
      });

      it('should get button class on fullscreen', () => {
         const subtype1: StModalButton = { label: 'label', classes: 'primary' };
         const subtype2: StModalButton = { label: 'label', classes: 'secondary' };
         comp.fullscreen = true;
         fixture.detectChanges();

         expect(comp.getButtonClass(undefined)).toEqual('');
         expect(comp.getButtonClass(subtype1)).toEqual('primary');
         expect(comp.getButtonClass(subtype2)).toEqual('secondary');
      });

      it('should emit when click in positive button', () => {
         const responseFunction = jasmine.createSpy('response');

         comp.buttonConfig = buttons;
         fixture.detectChanges();
         const htmlButton: HTMLButtonElement = fixture.debugElement.query(By.css('#st-modal-button-Yes_Button')).nativeElement;

         comp.click.subscribe(responseFunction);

         htmlButton.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith({ response: StModalResponse.YES, close: false });
      });

      it('should emit when click in negative button', () => {
         const responseFunction = jasmine.createSpy('response');

         comp.buttonConfig = buttons;
         fixture.detectChanges();
         const htmlButton: HTMLButtonElement = fixture.debugElement.query(By.css('#st-modal-button-No')).nativeElement;

         comp.click.subscribe(responseFunction);

         htmlButton.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith({ response: StModalResponse.NO, close: undefined });
      });

      it('should emit when click in button that close after emit', () => {
         const responseFunction = jasmine.createSpy('response');
         comp.buttonConfig = buttons;
         comp.buttonConfig[1].closeOnClick = true;

         fixture.detectChanges();
         const htmlButton: HTMLDivElement = fixture.debugElement.query(By.css('#st-modal-button-No')).nativeElement;

         comp.click.subscribe(responseFunction);

         htmlButton.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith({ response: StModalResponse.NO, close: true });
      });

      it('should emit when click in button that have responseValue to undefined', () => {
         const responseFunction = jasmine.createSpy('response');
         comp.buttonConfig = buttons;
         delete comp.buttonConfig[1].responseValue;

         fixture.detectChanges();
         const htmlButton: HTMLDivElement = fixture.debugElement.query(By.css('#st-modal-button-No')).nativeElement;

         comp.click.subscribe(responseFunction);

         htmlButton.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(responseFunction).not.toHaveBeenCalled();
      });

      it('should no emit and call function when click in button', () => {
         const responseFunction = jasmine.createSpy('response');
         comp.buttonConfig = buttons;
         comp.buttonConfig[1].response = responseFunction;

         fixture.detectChanges();
         const htmlButton: HTMLDivElement = fixture.debugElement.query(By.css('#st-modal-button-No')).nativeElement;

         comp.click.subscribe(responseFunction);

         htmlButton.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(responseFunction).toHaveBeenCalled();
      });
   });
});
