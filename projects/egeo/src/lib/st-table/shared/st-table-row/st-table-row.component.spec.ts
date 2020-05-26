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
import { StTableRowComponent } from './st-table-row.component';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

let fixture: ComponentFixture<TestStTableRowComponent>;
let component: TestStTableRowComponent;

@Component({

   template: `<tr #rowWithHoverMenu st-table-row id="row-with-hover-menu">
         <td st-table-cell st-table-row-content>
            <label>{{userData.id}}</label>
         </td>
         <td st-table-cell st-table-row-content>
            <label>{{userData.name}}</label>
         </td>
         <td st-table-cell st-table-row-content>
            <label>{{userData.lastName}}</label>
         </td>
         <td st-table-row-hover>
            <i class="icon icon-arrow2_right"></i>
         </td>
      </tr>
       <tr #row st-table-row id="row">
         <td st-table-cell st-table-row-content>
            <label>{{userData.id}}</label>
         </td>
         <td st-table-cell st-table-row-content>
            <label>{{userData.name}}</label>
         </td>
         <td st-table-cell st-table-row-content>
            <label>{{userData.lastName}}</label>
         </td>
      </tr>`
})

class TestStTableRowComponent {
   @ViewChild('row', {static: true}) row: StTableRowComponent;
   @ViewChild('rowWithHoverMenu', {static: true}) rowWithHoverMenu: StTableRowComponent;

   userData: {} = {
      id: '4545-df56-s345',
      name: 'Antonio',
      lastName: 'López'
   };
}

let rowElement: HTMLTableRowElement;
let rowWithHoverMenuElement: HTMLTableRowElement;

describe('StTableRowComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [CommonModule, RouterTestingModule],
         declarations: [TestStTableRowComponent, StTableRowComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(TestStTableRowComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TestStTableRowComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      rowElement  = fixture.nativeElement.querySelector('#row');
      rowWithHoverMenuElement = fixture.nativeElement.querySelector('#row-with-hover-menu');
   });

   describe('it can be configured to be stood up when it is selected or not', () => {
      beforeEach(() => {
         component.row.selected = true;
         fixture.detectChanges();
      });

      it('by default, row is stood up', () => {
         expect(rowElement.classList).toContain('selected');
      });

      it('if user puts the input standUpSelected to false, row is not stood up', () => {
         component.row.standUpSelected = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.classList).not.toContain('selected');
      });

      it('if user puts the input standUpSelected to true, row is stood up', () => {
         component.row.standUpSelected = true;
         fixture.detectChanges();

         expect(rowElement.classList).toContain('selected');
      });
   });

   it('if row does not have a hover menu, reserved column is removed', () => {
      expect(rowElement.querySelector('td.hover-menu')).toBeNull();
   });

   describe('if row has a hover menu', () => {

      describe('should be able to listen when mouse is over it', () => {
         beforeEach(() => {
            rowWithHoverMenuElement.dispatchEvent(new Event('mouseover'));
            fixture.detectChanges();
         });

         it('boolean variable is updated', () => {
            expect(component.rowWithHoverMenu.showHoverMenu).toBeTruthy();
         });

         it('hover menu is displayed at the end of row', () => {
            let cells = rowWithHoverMenuElement.children;
            let hoverMenu = cells[cells.length - 1];

            expect(hoverMenu.classList).toContain('hover-menu--show');
         });
      });

      describe('should be able to listen when mouse goes out from it', () => {
         beforeEach(() => {
            rowWithHoverMenuElement.dispatchEvent(new Event('mouseout'));
            fixture.detectChanges();
         });

         it('boolean variable is updated', () => {
            expect(component.rowWithHoverMenu.showHoverMenu).toBeFalsy();
         });

         it('hover menu is hidden', () => {
            let cells = rowWithHoverMenuElement.children;
            let hoverMenu = cells[cells.length - 1];

            expect(hoverMenu.classList).not.toContain('hover-menu--show');
         });
      });
   });
});

