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
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { StLabelModule } from './../st-label/st-label.module';

import { StSwitchComponent } from './st-switch.component';

let fixture: ComponentFixture<StSwitchComponent>;
let component: StSwitchComponent;
let model: boolean = true;
let formGroup: FormGroup;

describe('StSwitchComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StLabelModule],
         declarations: [StSwitchComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      formGroup = new FormGroup(
         { requiredSwitch: new FormControl({ value: model, disabled: false }, Validators.required) }
      );

      fixture = TestBed.createComponent(StSwitchComponent);
      component = fixture.componentInstance;
      component.value = false;
      component.qaTag = 'qa tag';
   });

   it ('should be added the class st-switch to the root', () => {
      expect(fixture.nativeElement.classList).toContain('st-switch');
   });

   it('if has qa tag, is added as id to the clickable element', () => {
      let qaTag = 'fakeQATag';
      component.qaTag = qaTag;
      fixture.detectChanges();
      fixture.changeDetectorRef.markForCheck();

      let clickableElement: HTMLElement = fixture.nativeElement.querySelector('#' + qaTag + '-label');

      expect(fixture.nativeElement.querySelector('#' + qaTag + '-label')).not.toBeNull();
      expect(clickableElement).toBeDefined();
      expect(clickableElement.click).toBeDefined();
   });

   it('if has not qa tag, name is added as id to the clickable element', () => {
      let nameImput = 'demo';
      component.qaTag = undefined;
      component.name = nameImput;
      fixture.detectChanges();
      fixture.changeDetectorRef.markForCheck();

      let clickableElement: HTMLElement = fixture.nativeElement.querySelector('#' + nameImput + '-label');

      expect(fixture.nativeElement.querySelector('#' + nameImput + '-label')).not.toBeNull();
      expect(clickableElement).toBeDefined();
      expect(clickableElement.click).toBeDefined();
   });


   describe('Should update its class when disabled attribute changes', () => {
      beforeEach(() => {
         component.value = model;
      });

      it('if it is disabled, class "st-switch--disabled" has to be added to toggle', () => {
         component.setDisabledState(true);
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-switch__toggle').classList).toContain('st-switch--disabled');
      });

      it('if it is enabled, class "st-switch--disabled" hos to be removed from toggle', () => {
         component.setDisabledState(false);
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-switch__toggle').classList).not.toContain('st-switch--disabled');
      });
   });

   describe('should listen any external change and update internal form control and model', () => {
      let newValue: boolean = false;
      beforeEach(() => {
         component.writeValue(newValue);
      });

      it('model is updated with new value', () => {
         expect(component.value).toBe(newValue);
      });
   });

   describe('when user clicks on toggle', () => {
      beforeEach(() => {
         spyOn(component.change, 'emit');
         component.value = false;
      });
      it('if switch is not disabled, model has to change', () => {
         component.disabled = false;
         // put switch to off
         component.value = false;
         fixture.detectChanges();

         let switchBox: HTMLDivElement = fixture.nativeElement.querySelector('.st-switch__toggle');

         switchBox.click();
         fixture.detectChanges();

         expect(component.value).toBeTruthy();
         expect(component.change.emit).toHaveBeenCalledWith(true);
         expect(switchBox.classList).toContain('st-switch--on');

         switchBox.click();
         fixture.detectChanges();

         expect(component.value).toBeFalsy();
         expect(component.change.emit).toHaveBeenCalledWith(false);
         expect(switchBox.classList).toContain('st-switch--off');
      });

      it('if switch is disabled, no changes are executed', () => {
         component.disabled = true;
         // put switch to off
         component.value = false;
         fixture.detectChanges();

         let switchBox: HTMLDivElement = fixture.nativeElement.querySelector('.st-switch__toggle');
         switchBox.click();
         fixture.detectChanges();

         expect(component.value).toBeFalsy();
         expect(component.change.emit).not.toHaveBeenCalled();
         expect(switchBox.classList).toContain('st-switch--off');

         switchBox.click();
         fixture.detectChanges();

         expect(component.value).toBeFalsy();
         expect(component.change.emit).not.toHaveBeenCalled();
         expect(switchBox.classList).toContain('st-switch--off');
      });
   });

   it('Callback function is initialized on registerOnChange function in order to be called when there is a change', () => {
      let callbackFunction = jasmine.createSpy('callbackFunction');
      component.registerOnChange(callbackFunction);
      component.value = false;
      fixture.detectChanges();

      let switchBox: HTMLDivElement = fixture.nativeElement.querySelector('.st-switch__toggle');
      switchBox.click();

      expect(callbackFunction).toHaveBeenCalledWith(true);
   });

   it('If model is changed from outside, switch is updated', () => {
      spyOn(component.change, 'emit').and.callThrough();
      model = true;
      component.value = model;
      fixture.detectChanges();
      fixture.changeDetectorRef.markForCheck();

      let switchBox: HTMLDivElement = fixture.nativeElement.querySelector('.st-switch__toggle');

      expect(component.value).toBeTruthy();
      expect(switchBox.classList).toContain('st-switch--on');

      model = false;
      component.value = model;
      fixture.detectChanges();
      fixture.changeDetectorRef.markForCheck();

      switchBox = fixture.nativeElement.querySelector('.st-switch__toggle');

      expect(component.value).toBeFalsy();
      expect(switchBox.classList).toContain('st-switch--off');
   });

});
