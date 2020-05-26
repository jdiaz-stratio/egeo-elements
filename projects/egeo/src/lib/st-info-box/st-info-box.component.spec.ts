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
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { StInfoBoxComponent } from './st-info-box.component';


let title: string = 'title';
let width: number = 100;
let height: number = 100;
let fixture: ComponentFixture<StInfoBoxComponent>;

describe('StInfoBoxComponent', () => {

    let comp: StInfoBoxComponent;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StInfoBoxComponent]
      })
      .compileComponents();  // compile template and css
   }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StInfoBoxComponent);
        comp = fixture.componentInstance;
    });

    describe('if title is not defined', () => {
        it('should throw an error', () => {
           expect(() => comp.ngOnInit()).toThrowError('st-info-box: title is a required field');
        });
    });

    describe('if title is defined', () => {
        beforeEach(() => {
            comp.title = title;
        });

        it('should not throw an error on init', () => {
            expect(() => comp.ngOnInit()).not.toThrowError();
        });

        it('if the width is defined, width, min-width and max-width styles must be defined', () => {
            comp.width = width;
            let result: any = comp.getStyles();
            expect(result.width).toEqual(`${width}px`);
            expect(result['min-width']).toBeDefined();
            expect(result['max-width']).toBeDefined();
        });

        it('if the height is defined, height, min-height and max height styles must be defined', () => {
            comp.height = height;
            let result: any = comp.getStyles();
            expect(result.height).toEqual(`${height}px`);
            expect(result['min-height']).toBeDefined();
            expect(result['max-height']).toBeDefined();
        });

        it('if icon is defined, an icon must be showed', () => {
            comp.icon = 'spark';
            fixture.detectChanges();
            let icon: DebugElement = fixture.debugElement.query(By.css('.st-info-box__header__icon'));
            expect(icon.nativeElement).toBeDefined();
        });
    });
});
