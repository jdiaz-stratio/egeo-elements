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
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StFileButtonComponent } from './st-file-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

let component: StFileButtonComponent;
let fixture: ComponentFixture<StFileButtonComponent>;

let fakeText: string = 'Select a json or png file';
let fakeAccepted: string = 'json, png';
let fakeButtonClass: string = 'button-sq3';
let fileInput: DebugElement;
const data: any = {};
let fakeFile: File = <File> (new Blob([data], {type: 'json'}));

let eventData: any;

describe('StFileButtonComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StFileButtonComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StFileButtonComponent);
      component = fixture.componentInstance;

      // Initialize values
      component.text = fakeText;
      component.accepted = fakeAccepted;

      fixture.detectChanges();
      fileInput = fixture.debugElement.query(By.css('input'));

      eventData = {target: {files: []}, srcElement: {}};
   });

   describe('when it is initialized', () => {

      it('text is displayed inside of its button', () => {
         let label: HTMLLabelElement = fixture.nativeElement.querySelector('label');

         expect(label.innerHTML).toContain(fakeText);
      });

      it('button class is added to the label tag', () => {
         let labelTag: HTMLButtonElement = fixture.nativeElement.querySelector('label');

         expect(labelTag.classList).toContain('button');
      });

      it('if button class is not specified, label tag will be displayed as a primary button', () => {
         let labelTag: HTMLButtonElement = fixture.nativeElement.querySelector('label');

         expect(labelTag.classList).toContain('button-primary');
      });

      it('if button class is specified it is added to the label', () => {
         component.buttonClass = fakeButtonClass;
         fixture.detectChanges();

         let labelTag: HTMLButtonElement = fixture.nativeElement.querySelector('label');

         expect(labelTag.classList).toContain(fakeButtonClass);
      });

      it('only the accepted extensions are allowed to be selected from the browser', () => {
         expect(fixture.nativeElement.querySelector('input').accept).toBe(fakeAccepted);
      });

   });

   describe('When user selects a file', () => {

      beforeEach(() => {
         spyOn(component.selected, 'emit');
      });

      describe('an event is emitted with files as params only if all files have an accepted extension and type', () => {
         it('if there is at least an invalid file, event is not emitted', () => {
            let invalidFile = Object.create(fakeFile);
            invalidFile.type = 'txt';
            eventData.target.files = [fakeFile, invalidFile];

            fileInput.triggerEventHandler('change', eventData);

            expect(component.selected.emit).not.toHaveBeenCalled();
         });

         it('if all files are valid, event is emitted with files as params', () => {
            eventData.target.files =  [fakeFile, fakeFile];

            fileInput.triggerEventHandler('change', eventData);

            expect(component.selected.emit).toHaveBeenCalledWith([fakeFile, fakeFile]);
         });

         it('if there is a file without type, its extension is searched in the accepted extensions', () => {
            let fileWithoutType = Object.create(fakeFile);
            fileWithoutType.type = '';
            fileWithoutType.name = 'invalidFile.Extension.txt';

            eventData.target.files =  [fakeFile, fileWithoutType];

            fileInput.triggerEventHandler('change', eventData);

            expect(component.selected.emit).not.toHaveBeenCalled();

            fileWithoutType.name = 'validFile.Extension.json';

            eventData.target.files = [fakeFile, fileWithoutType];

            fileInput.triggerEventHandler('change', eventData);

            expect(component.selected.emit).toHaveBeenCalledWith([fakeFile, fileWithoutType]);
         });
      });

      it('input value is reset once user has selected a file to detect if user selects the same file twice', () => {
         eventData.srcElement.value = 'C:\fakepath\descriptor_v0.0.json';

         fileInput.triggerEventHandler('change', eventData);

         expect(eventData.srcElement.value).toBe('');
      });
   });
});
