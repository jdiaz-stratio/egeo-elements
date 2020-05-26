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
import { DebugElement, Component, ViewChild } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StModal2Component } from './st-modal2.component';


@Component({
   selector: 'st-modal2-test',
   template: `
       <st-modal2 [emptyModal]="emptyModal"
        [modalTitle]="modalTitle"
        [hideCloseBtn]="hideCloseBtn"
        [closeOnEscape]="closeOnEscape">
        <div>Modal content</div>
       </st-modal2>
    `
})
export class Modal2TestComponent {
   @ViewChild(StModal2Component, {static: false}) modalComponent: StModal2Component;
   public emptyModal: boolean = false;
   public closeOnEscape: boolean = false;
   public modalTitle: string = '';
   public hideCloseBtn: boolean = false;
}

describe('StModal2', () => {
   describe('StModal2Component', () => {
      let comp: Modal2TestComponent;
      let fixture: ComponentFixture<Modal2TestComponent>;
      let de: DebugElement;

      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [Modal2TestComponent, StModal2Component],
            schemas: [NO_ERRORS_SCHEMA]
         }).compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(Modal2TestComponent);
         comp = fixture.componentInstance;
      });


      it('should be init', () => {
         const modalTitle: string = 'Modal title';
         comp.emptyModal = false;
         comp.modalTitle = modalTitle;
         fixture.detectChanges();

         const title: string = fixture.nativeElement.querySelector('.title').textContent;
         expect(title).toBe(modalTitle);
         expect(fixture.nativeElement.querySelector('.close-button')).toBeDefined();
      });

      it('should can hide close button', () => {
         comp.hideCloseBtn = true;
         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector('.close-button')).toBeNull();
      });

      it('should not emit close event when pressing escape if the option is not activated', () => {
         comp.closeOnEscape = false;
         fixture.detectChanges();

         const onCloseEmitter: any = comp.modalComponent.onClose;
         spyOn(onCloseEmitter, 'emit');
         const event: any = document.createEvent('Event');
         event.keyCode = 27;
         event.initEvent('keydown');
         document.dispatchEvent(event);

         expect(onCloseEmitter.emit).not.toHaveBeenCalled();
      });


      it('should emit close event when pressing escape if the option is activated', () => {
         comp.closeOnEscape = true;
         fixture.detectChanges();

         const onCloseEmitter: any = comp.modalComponent.onClose;
         spyOn(onCloseEmitter, 'emit');

         const event: any = document.createEvent('Event');
         event.keyCode = 27;
         event.initEvent('keydown');
         document.dispatchEvent(event);

         expect(onCloseEmitter.emit).toHaveBeenCalled();
      });

      it('should emit an event when enter is pressed', () => {
         fixture.detectChanges();

         const onEnterEmitter: any = comp.modalComponent.onEnter;
         spyOn(onEnterEmitter, 'emit');

         const event: any = document.createEvent('Event');
         event.keyCode = 13;
         event.initEvent('keydown');
         document.dispatchEvent(event);

         expect(onEnterEmitter.emit).toHaveBeenCalled();

      });
   });
});
