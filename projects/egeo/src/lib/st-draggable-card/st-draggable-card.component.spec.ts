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
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { StDraggableCardComponent } from './st-draggable-card.component';

let component: StDraggableCardComponent;
let fixture: ComponentFixture<StDraggableCardComponent>;
let card: HTMLElement;

describe('StDraggableCardComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StDraggableCardComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StDraggableCardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
   });

   describe('when user clicks on it and moves it', () => {

      it('should emit an event', () => {
         spyOn(component.onDragStart, 'emit');
         let event: any = new Event('dragstart');
         event.dataTransfer = <DataTransfer>{};
         fixture.nativeElement.dispatchEvent(event);

         expect(component.onDragStart.emit).toHaveBeenCalled();
      });

      it('should add  "dragging" and remove shadow classes from it', () => {
         spyOn(component.onDragStart, 'emit');
         let event: any = new Event('dragstart');
         event.dataTransfer = <DataTransfer>{};
         fixture.nativeElement.dispatchEvent(event);

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-draggable-card').classList).toContain('dragging');
         expect(fixture.nativeElement.querySelector('.st-draggable-card').classList).not.toContain('shadow');
      });

      it ('shadow is displayed in the gap of the card', fakeAsync(() => {
         let event: any = new Event('dragstart');
         event.dataTransfer = <DataTransfer>{};

         fixture.nativeElement.dispatchEvent(event);
         fixture.detectChanges();
         tick();
         expect(fixture.nativeElement.querySelector('.st-draggable-card').classList).toContain('shadow');
      }));
   });

   describe('When user drops the card', () => {
      it('should emit an event when user ', () => {
         spyOn(component.onDragEnd, 'emit');
         fixture.nativeElement.dispatchEvent(new Event('dragend'));

         expect(component.onDragEnd.emit).toHaveBeenCalled();
      });

      it('should remove class "dragging" from it', () => {
         fixture.nativeElement.dispatchEvent(new Event('dragend'));
         fixture.detectChanges();

         expect(fixture.nativeElement.classList).not.toContain('dragging');
      });

      it ('shadow is removed from the card gap', () => {
         fixture.nativeElement.dispatchEvent(new Event('dragend'));
         fixture.detectChanges();

         expect(fixture.nativeElement.classList).not.toContain('shadow');
      });
   });
});
