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
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, DebugElement } from '@angular/core';
import { cloneDeep as _cloneDeep } from 'lodash';
import { By } from '@angular/platform-browser';

import { PipesModule } from '../../pipes/pipes.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { JSON_SCHEMA } from '../spec/resources/json-schema';
import { StFormFieldComponent } from './st-form-field.component';
import { StInputModule } from '../../st-input/st-input.module';
import { StFormFieldModule } from './st-form-field.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StSelectModule } from '../../st-select/st-select.module';
import { StTooltipModule } from '../../st-tooltip/st-tooltip.module';
import { StDropdownMenuModule } from '../../st-dropdown-menu/st-dropdown-menu.module';
import { StSwitchModule } from '../../st-switch/st-switch.module';
import { StSelectComponent } from '../../st-select/st-select';
import { StInputComponent } from '../../st-input/st-input.component';
import { StDropdownMenuComponent } from '../../st-dropdown-menu/st-dropdown-menu.component';
import { StTextareaModule } from '../../st-textarea/st-textarea.module';
import { StTextareaComponent } from '../../st-textarea/st-textarea.component';

let component: StFormFieldComponent;
let fixture: ComponentFixture<StFormFieldComponent>;
let formControl: FormControl = new FormControl();

describe('StFormFieldComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StInputModule, StCheckboxModule, StSelectModule, PipesModule,
            StTooltipModule, StFormDirectiveModule, StDropdownMenuModule, StSwitchModule, StTextareaModule],
         declarations: [StFormFieldComponent]
      })
         .overrideComponent(StSelectComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StDropdownMenuComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StInputComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StTextareaComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StFormFieldComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StFormFieldComponent);
      component = fixture.componentInstance;
   });

   describe('should be able to render inputs with their validations', () => {
      beforeEach(() => {
         component.qaTag = 'genericIntegerInput';
      });
      describe('integer input', () => {
         let input: HTMLInputElement;
         let numberInputProperty: any;
         let minValue: number;
         let maxValue: number;
         beforeEach(() => {
            numberInputProperty = JSON_SCHEMA.properties.genericIntegerInput;
            minValue = numberInputProperty.minimum;
            maxValue = numberInputProperty.maximum;
            component.schema = { key: 'genericIntegerInput', value: numberInputProperty };
            fixture.detectChanges();

         });

         it('should add a step of 0.1 to input', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericIntegerInput');

            expect(input.step).toBe('1');
         });

         it('if user tries to type text, input value is not updated', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericIntegerInput');

            input.focus();
            input.value = 'fake test';
            input.blur();

            fixture.detectChanges();

            expect(input.value).toBe('');
         });

         it('required input', () => {
            input = fixture.nativeElement.querySelector('#genericIntegerInput');
            component.required = true;
            fixture.detectChanges();

            input.focus();
            input.value = null;
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('This field is required');

            input.focus();
            input.value = '7';
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('min integer validation', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericIntegerInput');
            input.focus();
            input.value = (minValue - 1).toString();
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('The number has to be higher than ' + (minValue - 1));

            input.value = minValue.toString();
            input.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('max integer validation', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericIntegerInput');
            input.value = (maxValue + 1).toString();
            input.dispatchEvent(new Event('input'));

            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
               .toBe('The number has to be minor than ' + (maxValue + 1));

            input.value = maxValue.toString();
            input.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         describe('integer has to be between a certain range', () => {

            it('if minimum is exclusive, when user puts a value equal or minor than the minimum, validation error is displayed', () => {
               numberInputProperty.exclusiveMinimum = true;
               fixture.detectChanges();

               input = fixture.nativeElement.querySelector('#genericIntegerInput');

               input.focus();
               // minor than the minimum
               input.value = (minValue - 1).toString();
               input.dispatchEvent(new Event('input'));
               input.blur();

               fixture.detectChanges();


               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be higher than ' + minValue);

               // equal to the minimum
               input.value = minValue.toString();
               input.dispatchEvent(new Event('input'));

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be higher than ' + minValue);
            });

            it('if minimum is not exclusive, when user puts a value equal to the minimum, input will be valid', () => {
               numberInputProperty.exclusiveMinimum = false;
               fixture.detectChanges();

               input = fixture.nativeElement.querySelector('#genericIntegerInput');

               input.focus();

               // minor than the minimum
               input.value = minValue.toString();
               input.dispatchEvent(new Event('input'));

               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();

               input.value = (minValue - 2).toString();
               input.dispatchEvent(new Event('input'));

               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be higher than ' + (minValue - 1));
            });

            it('if maximum is exclusive, when user puts a value equal or major than the maximum, validation error is displayed', () => {
               numberInputProperty.exclusiveMaximum = true;
               fixture.detectChanges();

               input = fixture.nativeElement.querySelector('#genericIntegerInput');

               input.focus();
               // major than the maximum
               input.value = (maxValue + 1).toString();
               input.dispatchEvent(new Event('input'));
               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be minor than ' + maxValue);

               // equal to the maximum
               input.value = maxValue.toString();
               input.dispatchEvent(new Event('input'));
               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be minor than ' + maxValue);
            });

            it('if maximum is not exclusive, when user puts a value equal to the maximum, input will be valid', () => {
               numberInputProperty.exclusiveMaximum = false;
               fixture.detectChanges();
               input = fixture.nativeElement.querySelector('#genericIntegerInput');

               input.focus();

               // equal to the maximum
               input.value = maxValue.toString();
               input.dispatchEvent(new Event('input'));

               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('#genericIntegerInput')
                  .parentNode.parentNode.querySelector('.st-input-error-layout span')).toBeNull();

               // minor than the minimum
               input.value = (maxValue + 1).toString();
               input.dispatchEvent(new Event('input'));

               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be minor than ' + (maxValue + 1));
            });
         });

         it('When user leaves it, it emits an event', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericIntegerInput');

            spyOn(component.blur, 'emit');

            input.dispatchEvent(new Event('focus'));
            fixture.detectChanges();
            input.dispatchEvent(new Event('blur'));
            fixture.detectChanges();

            expect(component.blur.emit).toHaveBeenCalledTimes(1);
         });

         it('if model is empty, default value is not defined and placeholder is defined in schema, this placeholder is displayed', () => {
            let fakePlaceholder: string = 'fake placeholder';
            component.value = undefined;
            component.schema = { key: 'log_level', value: { type: 'number', examples: [fakePlaceholder] } };
            fixture.detectChanges();

            let cssInput: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(cssInput.getAttribute('placeholder')).toContain(fakePlaceholder);

            component.schema = { key: 'log_level', value: { type: 'number', examples: [] } };
            fixture.detectChanges();

            cssInput = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(cssInput.getAttribute('placeholder')).toEqual('');
         });
      });

      describe('number input', () => {
         let input: HTMLInputElement;
         let numberInputProperty: any;
         let minValue: number;
         let maxValue: number;

         beforeEach(() => {
            numberInputProperty = JSON_SCHEMA.properties.genericNumberInput;
            minValue = numberInputProperty.minimum;
            maxValue = numberInputProperty.maximum;
            component.schema = { key: 'genericNumberInput', value: numberInputProperty };
            component.qaTag = 'genericNumberInput';
         });

         it('should add a step of 0.1 to input', () => {
            fixture.detectChanges();

            input = fixture.nativeElement.querySelector('#genericNumberInput');

            expect(input.step).toBe('0.1');
         });

         it('if user tries to type text, input value is not updated', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericNumberInput');

            input.focus();
            input.value = 'fake test';
            input.blur();

            fixture.detectChanges();

            expect(input.value).toBe('');
         });

         it('required input', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericNumberInput');
            component.required = true;
            fixture.detectChanges();

            input.focus();
            input.value = '';
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
               .toBe('This field is required');

            input.focus();
            input.value = '7';
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('min number validation', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericNumberInput');
            input.focus();
            input.value = (minValue - 1).toString();
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
               .toBe('The number has to be higher than ' + (minValue - 0.1));

            input.value = minValue.toString();
            input.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('max number validation', () => {
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericNumberInput');
            input.value = (maxValue + 0.8).toString();
            input.dispatchEvent(new Event('input'));

            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
               .toBe('The number has to be minor than ' + (maxValue + 0.1));

            input.value = maxValue.toString();
            input.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         describe('number has to be between a certain range', () => {

            it('if minimum is exclusive, when user puts a value equal or minor than the minimum, validation error is displayed', () => {
               numberInputProperty.exclusiveMinimum = true;
               fixture.detectChanges();

               input = fixture.nativeElement.querySelector('#genericNumberInput');

               input.focus();
               // minor than the minimum
               input.value = (minValue - 0.6).toString();
               input.dispatchEvent(new Event('input'));
               input.blur();

               fixture.detectChanges();


               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('The number has to be higher than ' + minValue);

               // equal to the minimum
               input.value = minValue.toString();
               input.dispatchEvent(new Event('input'));

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('The number has to be higher than ' + minValue);
            });

            it('if minimum is not exclusive, when user puts a value equal to the minimum, input will be valid', () => {
               numberInputProperty.exclusiveMinimum = false;
               fixture.detectChanges();

               input = fixture.nativeElement.querySelector('#genericNumberInput');

               input.focus();

               // minor than the minimum
               input.value = minValue.toString();
               input.dispatchEvent(new Event('input'));

               input.blur();

               fixture.detectChanges();


               expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
            });

            it('if maximum is exclusive, when user puts a value equal or major than the maximum, validation error is displayed', () => {
               numberInputProperty.exclusiveMaximum = true;
               fixture.detectChanges();

               input = fixture.nativeElement.querySelector('#genericNumberInput');

               input.focus();
               // major than the maximum
               input.value = (maxValue + 0.2).toString();
               input.dispatchEvent(new Event('input'));
               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be minor than ' + maxValue);

               // equal to the maximum
               input.value = maxValue.toString();
               input.dispatchEvent(new Event('input'));
               fixture.detectChanges();


               expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML)
                  .toBe('The number has to be minor than ' + maxValue);
            });

            it('if maximum is not exclusive, when user puts a value equal to the maximum, input will be valid', () => {
               numberInputProperty.exclusiveMaximum = false;
               fixture.detectChanges();
               input = fixture.nativeElement.querySelector('#genericNumberInput');

               input.focus();

               // minor than the minimum
               input.value = maxValue.toString();
               input.dispatchEvent(new Event('input'));

               input.blur();

               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('#genericNumberInput').parentNode.parentNode.querySelector('.st-input-error-layout span')).toBeNull();
            });
         });

         it('When user leaves it, it emits an event', () => {
            spyOn(component.blur, 'emit');
            fixture.detectChanges();

            input = fixture.nativeElement.querySelector('#genericNumberInput');
            input.dispatchEvent(new Event('focus'));
            fixture.detectChanges();
            input.dispatchEvent(new Event('blur'));
            fixture.detectChanges();

            expect(component.blur.emit).toHaveBeenCalledTimes(1);
         });
      });

      describe('text input', () => {
         let input: HTMLInputElement;
         let textInputProperty: any;
         let minLength: number;
         let maxLength: number;

         beforeEach(() => {
            textInputProperty = JSON_SCHEMA.properties.genericTextInput;
            minLength = textInputProperty.minLength;
            maxLength = textInputProperty.maxLength;
            component.schema = { key: 'genericTextInput', value: _cloneDeep(textInputProperty) };
            component.qaTag = 'genericTextInput';
            component.maxWidth = undefined;
            formControl = new FormControl('');
            fixture.detectChanges();
            input = fixture.nativeElement.querySelector('#genericTextInput');
         });

         it('It should render an input if minLength and maxLength are not defined or both are minor than the maxLengthField input', () => {
            component.maxWidth = 80;
            component.schema.value.minLength = component.maxWidth - 2;
            component.schema.value.maxLength = component.maxWidth - 1;
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('input#genericTextInput')).not.toBeNull();
         });

         it('It should render an input if maxWidth input is not defined', () => {
            component.maxWidth = undefined;
            component.schema.value.minLength = 200;
            component.schema.value.maxLength = 100;
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('input#genericTextInput')).not.toBeNull();
         });

         it('required validation', () => {
            component.required = true;
            fixture.detectChanges();
            input.focus();
            input.value = '';
            input.dispatchEvent(new Event('input'));

            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('This field is required');

            input.value = 'aa';
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('min length validation', () => {
            input.focus();

            input.value = 'a'.repeat(minLength - 1);
            input.dispatchEvent(new Event('input'));

            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('The field min length is ' + minLength);

            input.value = 'a'.repeat(minLength);
            input.dispatchEvent(new Event('input'));

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('max length validation', () => {
            input.focus();

            input.value = 'a'.repeat(maxLength + 1);
            input.dispatchEvent(new Event('input'));

            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('The field max length is ' + maxLength);

            input.focus();
            input.value = 'a'.repeat(maxLength);
            input.dispatchEvent(new Event('input'));

            input.blur();
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('pattern validation', () => {
            input.focus();
            input.value = 'bbb';
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span').innerHTML).toBe('Invalid value');

            input.focus();
            input.value = 'aa';
            input.dispatchEvent(new Event('input'));
            input.blur();

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-input-error-layout span')).toBeNull();
         });

         it('When user leaves it, it emits an event', () => {
            spyOn(component.blur, 'emit');

            input.dispatchEvent(new Event('focus'));
            fixture.detectChanges();
            input.dispatchEvent(new Event('blur'));
            fixture.detectChanges();

            expect(component.blur.emit).toHaveBeenCalledTimes(1);
         });
      });

      it('if input has a default value and user interacts with input, he will be able to reset to the default value', (done) => {
         let fakeDefault: string = 'test default';
         component.schema = { key: 'genericTextInput', value: JSON_SCHEMA.properties.genericTextInput };
         component.qaTag = 'genericTextInput';
         component.schema.value.default = fakeDefault;

         fixture.detectChanges();

         let input: HTMLInputElement = fixture.nativeElement.querySelector('#genericTextInput');

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            input.focus();
            input.dispatchEvent(new Event('focus'));
            fixture.detectChanges();

            input.value = 'bbb';
            input.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).not.toBeNull();

            fixture.nativeElement.querySelector('.st-form-control-reset-button').click();
            fixture.detectChanges();

            expect(input.value).toEqual(fakeDefault);
            done();
         });
      });
   });

   describe('should be able to render textareas with their validations', () => {
      let textarea: HTMLInputElement;
      let genericLongTextProperty: any;
      let minLength: number;
      let maxLength: number;

      beforeEach(() => {
         genericLongTextProperty = JSON_SCHEMA.properties.genericLongText;
         minLength = genericLongTextProperty.minLength;
         maxLength = genericLongTextProperty.maxLength;
         component.schema = { key: 'genericLongText', value: _cloneDeep(genericLongTextProperty) };
         component.qaTag = 'genericLongText';
         component.maxWidth = 70;
         formControl = new FormControl('');
         fixture.detectChanges();
         textarea = fixture.nativeElement.querySelector('#genericLongText');
      });

      it('a textarea is displayed when minLength or maxLength are defined and they are major or equal to maxWidth', () => {
         expect(fixture.nativeElement.querySelector('.st-textarea')).not.toBeNull();

         component.schema.value.minLength = 1;
         component.schema.value.maxLength = 2;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea')).toBeNull();

         component.schema.value.maxLength = component.maxWidth;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea')).not.toBeNull();

         component.schema.value.maxLength = component.maxWidth - 1;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea')).toBeNull();

         component.schema.value.minLength = component.maxWidth;
         component.schema.value.maxLength = undefined;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea')).not.toBeNull();

         component.schema.value.minLength = component.maxWidth - 1;
         component.schema.value.maxLength = undefined;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea')).toBeNull();
      });

      it('required validation', () => {
         component.required = true;
         fixture.detectChanges();

         textarea.focus();
         textarea.value = '';
         textarea.dispatchEvent(new Event('input'));

         textarea.blur();

         fixture.detectChanges();
         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span').innerHTML).toBe('This field is required');

         textarea.value = 'aa';
         textarea.dispatchEvent(new Event('input'));
         textarea.blur();

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span')).toBeNull();
      });

      it('min length validation', () => {
         textarea.focus();

         textarea.value = 'a'.repeat(minLength - 1);
         textarea.dispatchEvent(new Event('input'));

         textarea.blur();

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span').innerHTML).toBe('The field min length is ' + minLength);

         textarea.value = 'a'.repeat(minLength);
         textarea.dispatchEvent(new Event('input'));

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span')).toBeNull();
      });

      it('max length validation', () => {
         textarea.focus();

         textarea.value = 'a'.repeat(maxLength + 1);
         textarea.dispatchEvent(new Event('input'));

         textarea.blur();

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span').innerHTML).toBe('The field max length is ' + maxLength);

         textarea.focus();
         textarea.value = 'a'.repeat(maxLength);
         textarea.dispatchEvent(new Event('input'));

         textarea.blur();
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span')).toBeNull();
      });

      it('pattern validation', () => {
         component.schema.value.pattern = 'aa';
         fixture.detectChanges();

         textarea.focus();
         textarea.value = 'bbb';
         textarea.dispatchEvent(new Event('input'));
         textarea.blur();

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span').innerHTML).toBe('Invalid value');

         textarea.focus();
         textarea.value = 'aa';
         textarea.dispatchEvent(new Event('input'));
         textarea.blur();

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-textarea-error-layout span')).toBeNull();
      });

      it('When user leaves it, it emits an event', () => {
         spyOn(component.blur, 'emit');

         textarea.dispatchEvent(new Event('focus'));
         fixture.detectChanges();
         textarea.dispatchEvent(new Event('blur'));
         fixture.detectChanges();

         expect(component.blur.emit).toHaveBeenCalledTimes(1);
      });

      it('if textarea has a default value and user interacts with textarea, he will be able to reset to the default value', (done) => {
         let fakeDefault: string = 'test default';
         component.schema.value.default = fakeDefault;

         fixture.detectChanges();

         textarea = fixture.nativeElement.querySelector('#genericLongText');

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            textarea.focus();
            textarea.dispatchEvent(new Event('focus'));
            fixture.detectChanges();

            textarea.value = 'bbb';
            textarea.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).not.toBeNull();

            fixture.nativeElement.querySelector('.st-form-control-reset-button').click();
            fixture.detectChanges();

            expect(textarea.value).toEqual(fakeDefault);
            done();
         });
      });
   });

   describe('should be able to render checkboxes with their validations', () => {
      let checkBoxElement: HTMLInputElement;
      let booleanProperty: any;

      beforeEach(() => {
         booleanProperty = JSON_SCHEMA.properties.boolean;
         component.schema = { key: 'boolean', value: booleanProperty };
         component.qaTag = 'boolean-input';

         fixture.detectChanges();

         checkBoxElement = fixture.nativeElement.querySelector('#boolean-input');
      });

      it('label is displayed', () => {
         let label: HTMLElement = fixture.nativeElement.querySelector('label');
         expect(label.innerHTML).toContain(booleanProperty.title);
      });

      it('tooltip is displayed if description exits', () => {
         let tooltip: HTMLElement = fixture.nativeElement.querySelector('.st-tooltip');
         expect(tooltip.getAttribute('title')).toBe(booleanProperty.description);
      });

      it('icon for opening tooltip is not displayed if description does not exit', () => {
         fixture = TestBed.createComponent(StFormFieldComponent);
         component = fixture.componentInstance;

         component.schema = { key: 'boolean', value: { type: 'boolean', description: undefined } };
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('#boolean-label-tooltip')).toBeNull();
      });

      it('if schema contains a default value, checkbox has to be initialized with it', (done) => {
         fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('#boolean-input').checked).toBe(booleanProperty.default);
            done();
         });
      });
   });

   describe('should be able to render selects with their validations', () => {
      let selectElement: HTMLSelectElement;
      let selectProperty: any;

      beforeEach(() => {
         spyOn(window, 'setTimeout').and.callFake((func) => {
            func();
         });
         selectProperty = JSON_SCHEMA.properties.log_level;
         component.schema = { key: 'log_level', value: selectProperty };
         component.qaTag = 'log_level';

         fixture.detectChanges();

         selectElement = fixture.nativeElement.querySelector('#log_level');
         spyOn(component.valueChange, 'emit').and.callThrough();
      });

      it('properties of type string and with the attribute enum are rendered as selects', () => {
         expect(selectElement.tagName).toEqual('ST-SELECT');
      });

      it('label is displayed', () => {
         let label: HTMLElement = fixture.nativeElement.querySelector('label');
         expect(label.innerHTML).toContain(selectProperty.title);
      });

      it('tooltip is displayed if description exits', () => {
         let tooltip: HTMLElement = fixture.nativeElement.querySelector('.st-tooltip');
         expect(tooltip.getAttribute('title')).toBe(selectProperty.description);
      });

      it('icon for opening tooltip is not displayed if description does not exit', () => {
         fixture = TestBed.createComponent(StFormFieldComponent);
         component = fixture.componentInstance;

         component.schema = { key: 'log_level', value: { type: 'string', enum: [], description: undefined } };
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('#log_level-label-tooltip')).toBeNull();
      });

      it('if schema contains a default value, select has to be initialized with it', () => {
         fixture.whenStable().then(() => {
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#log_level-input').value).toBe(selectProperty.default);
         });
      });

      it('options have to be generated using the enum property and the first one to leave it empty', () => {
         let enumValues = selectProperty.enum;
         fixture.detectChanges();
         (<HTMLInputElement> selectElement.querySelector('#log_level-input')).click();
         fixture.detectChanges();

         let options: NodeListOf<Element> = selectElement.querySelectorAll('.st-dropdown-menu-item');

         expect(options.length).toBe(enumValues.length + 1);
         expect((<HTMLLIElement> options[0]).innerText).toEqual('Select one option');

         for (let i = 1; i < options.length; ++i) {
            expect((<HTMLLIElement> options[i]).innerText).toEqual(enumValues[i - 1]);
         }
      });

      it('if user clicks on the first option, model is empty', () => {
         fixture.nativeElement.querySelector('#log_level-input').click();
         fixture.detectChanges();
         let options: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item');
         (<HTMLLIElement> options[0]).click();
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('#log_level-input').value).toEqual('');
         expect(component.valueChange.emit).toHaveBeenCalledWith(undefined);
      });

      it('if user clicks on an option, model is updated with te value of this option', (done) => {
         fixture.nativeElement.querySelector('#log_level-input').click();
         fixture.detectChanges();
         let options: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));
         (options[1].nativeElement as HTMLElement).click();
         fixture.detectChanges();
         setTimeout(() => {
            expect(fixture.nativeElement.querySelector('#log_level-input').value).toEqual('TRACE');
            expect(component.valueChange.emit).toHaveBeenCalledWith('TRACE');
            done();
         });
      });

      it('if model is empty, default value is not defined and placeholder is defined in schema, this placeholder is displayed', () => {
         let fakePlaceholder: string = 'fake placeholder';
         component.value = undefined;
         component.schema = { key: 'log_level', value: { type: 'string', enum: [], examples: [fakePlaceholder] } };
         fixture.detectChanges();

         const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
         expect(input.getAttribute('placeholder')).toContain(fakePlaceholder);
      });

      it('if select has a default value and user interacts with it, he will be able to reset to the default value', (done) => {
         let fakeDefault: string = component.schema.value.enum[2];
         component.schema.value.default = fakeDefault;

         const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
         input.click();
         fixture.detectChanges();
         let options: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item>li'));
         (options[1].nativeElement as HTMLElement).click();

         input.click();
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).not.toBeNull();

         fixture.nativeElement.querySelector('.st-form-control-reset-button').click();
         fixture.detectChanges();

         fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(fixture.nativeElement.querySelector('#log_level-input').value).toBe(fakeDefault);
            done();
         });
      });
   });

   describe('readOnly property', () => {
      it('if it is true, field can`t be edited and it is displayed as normal text', (done) => {
         let schema: any = _cloneDeep(JSON_SCHEMA.properties.genericIntegerInput);
         component.schema = { key: 'genericNumberInput', value: schema };
         schema.readOnly = true;

         fixture.detectChanges();
         component.ngOnInit();

         fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector('input').disabled).toBeTruthy();
            expect(fixture.nativeElement.querySelector('input').parentElement.parentElement.parentElement.classList).toContain('read-only');
            done();
         });
      });

      it('if it is false, field can be edited and it is displayed as a form field', (done) => {
         let schema: any = _cloneDeep(JSON_SCHEMA.properties.genericIntegerInput);
         component.schema = { key: 'genericNumberInput', value: schema };
         schema.readOnly = false;

         fixture.detectChanges();
         component.ngOnInit();

         fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector('input').disabled).toBeFalsy();
            expect(fixture.nativeElement.querySelector('input').parentElement.parentElement.parentElement.classList).not.toContain('read-only');
            done();
         });
      });
   });

   describe('should be able to render switches with their validations', () => {
      let switchElement: HTMLInputElement;
      let booleanProperty: any;

      beforeEach(() => {
         booleanProperty = {
            'title': 'Enable security',
            'description': 'Enable or disable the security',
            'type': 'boolean',
            'default': true
         };
         component.hasDependencies = true;
         component.schema = { key: 'security', value: booleanProperty };
         component.qaTag = 'security';

         fixture.detectChanges();

         switchElement = fixture.nativeElement.querySelector('#security');
      });

      it('field is displayed with a switch when it has boolean type and it enables another fields', () => {
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-switch__toggle')).not.toBeNull();
      });

      it('label is displayed', () => {
         let label: HTMLElement = fixture.nativeElement.querySelector('.st-label');
         expect(label.innerHTML).toContain(booleanProperty.title);
      });

      it('tooltip is displayed if description exits', () => {
         let tooltip: HTMLElement = fixture.nativeElement.querySelector('.st-tooltip');
         expect(tooltip.getAttribute('title')).toBe(booleanProperty.description);
      });

      it('icon for opening tooltip is not displayed if description does not exit', () => {
         fixture = TestBed.createComponent(StFormFieldComponent);
         component = fixture.componentInstance;

         component.schema = { key: 'security', value: { type: 'boolean', description: undefined } };

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('#boolean-label-tooltip')).toBeNull();
      });

      it('if schema contains a default value, switch has to be initialized with it', () => {
         fixture.whenStable().then(() => {
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#security-input').checked).toBe(booleanProperty.default);
         });
      });
   });

   it('should be able to enable or disable the visualization of tooltips through the input "showTooltip"', () => {
      component.schema = { key: 'genericIntegerInput', value: JSON_SCHEMA.properties.genericIntegerInput };
      component.showTooltip = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('label').title).toEqual('');

      component.showTooltip = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('label').title).toEqual(component.schema.value.description);
   });
})
;


@Component({
   template: `
      <form [formGroup]="reactiveForm" novalidate>
         <st-form-field [schema]="schema"  [qaTag]="qaTag" [ngModel]="model" formControlName="formField" [required]="required">
         </st-form-field>
      </form>
      `,
   changeDetection: ChangeDetectionStrategy.Default
})
class FormReactiveFormComponent {
   @Input() schema: any = { key: 'genericNumberInput', value: JSON_SCHEMA.properties.genericNumberInput };
   @Input() required: boolean;
   @Input() qaTag: string;
   @Input() model: any;

   public reactiveForm: FormGroup = new FormGroup({ 'formField': new FormControl() });
}


describe('StFormFieldComponent in reactive form', () => {
   let reactiveFixture: ComponentFixture<FormReactiveFormComponent>;
   let reactiveComp: FormReactiveFormComponent;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, CommonModule, ReactiveFormsModule, StFormFieldModule, PipesModule, StDropdownMenuModule,
            StFormDirectiveModule],
         declarations: [FormReactiveFormComponent]
      })
         .overrideComponent(StFormFieldComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      reactiveFixture = TestBed.createComponent(FormReactiveFormComponent);
      reactiveComp = reactiveFixture.componentInstance;
      reactiveFixture.detectChanges();
   });

   it('input can be disabled', async() => {
      reactiveComp.reactiveForm.disable();

      reactiveFixture.whenStable().then(() => {
         reactiveFixture.detectChanges();
         expect(reactiveFixture.nativeElement.querySelector('input').disabled).toBeTruthy();
      });
   });

   describe('checkbox can be disabled', () => {
      beforeEach(() => {
         reactiveComp.schema = { key: 'boolean', value: JSON_SCHEMA.properties.boolean };
         reactiveComp.qaTag = 'boolean';
         reactiveFixture.detectChanges();
      });

      it('if checkbox is disabled, when user clicks on it, it does not change', () => {
         reactiveFixture.whenStable().then(() => {
            reactiveComp.reactiveForm.disable();
            reactiveFixture.detectChanges();

            let previousValue: boolean = Boolean(reactiveFixture.nativeElement.querySelector('#boolean').checked);

            reactiveFixture.nativeElement.querySelector('#boolean').click();
            reactiveFixture.detectChanges();

            expect(Boolean(reactiveFixture.nativeElement.querySelector('#boolean').checked)).toBe(previousValue);
         });
      });

      it('if checkbox is enabled, when user clicks on it, it has to change', () => {
         reactiveFixture.detectChanges();
         reactiveFixture.whenStable().then(() => {
            reactiveComp.reactiveForm.enable();
            reactiveFixture.detectChanges();
            let checkBoxElement: HTMLInputElement = reactiveFixture.nativeElement.querySelector('#boolean');
            let previousValue: boolean = Boolean(checkBoxElement.checked);

            checkBoxElement.click();

            reactiveFixture.detectChanges();

            expect(Boolean(checkBoxElement.checked)).not.toBe(previousValue);
            expect(Boolean(checkBoxElement.checked)).toBe(!previousValue);
         });
      });
   });

   describe('switch can be disabled', () => {
      beforeEach(() => {
         reactiveComp.schema = {
            key: 'security', value: {
               'title': 'Enable security',
               'description': 'Enable or disable the security',
               'type': 'boolean'
            }
         };
         reactiveComp.qaTag = 'security';
         reactiveFixture.detectChanges();
      });

      it('if switch is disabled, when user clicks on it, it does not change', () => {
         reactiveFixture.whenStable().then(() => {
            reactiveComp.reactiveForm.disable();
            reactiveFixture.detectChanges();

            let previousValue: boolean = Boolean(reactiveFixture.nativeElement.querySelector('#security').checked);

            reactiveFixture.nativeElement.querySelector('#security').click();
            reactiveFixture.detectChanges();

            expect(Boolean(reactiveFixture.nativeElement.querySelector('#security').checked)).toBe(previousValue);
         });
      });

      it('if switch is enabled, when user clicks on it, it has to change', () => {
         reactiveFixture.detectChanges();
         reactiveFixture.whenStable().then(() => {
            reactiveComp.reactiveForm.enable();
            reactiveFixture.detectChanges();
            let checkBoxElement: HTMLInputElement = reactiveFixture.nativeElement.querySelector('#security');
            let previousValue: boolean = Boolean(checkBoxElement.checked);

            checkBoxElement.click();

            reactiveFixture.detectChanges();

            expect(Boolean(checkBoxElement.checked)).not.toBe(previousValue);
            expect(Boolean(checkBoxElement.checked)).toBe(!previousValue);
         });
      });
   });

   describe('select field', () => {
      it('select can be disabled', async() => {
         reactiveComp.schema = { key: 'log_level', value: JSON_SCHEMA.properties.log_level };
         reactiveComp.qaTag = 'log_level';
         reactiveFixture.detectChanges();

         reactiveComp.reactiveForm.disable();

         reactiveFixture.whenStable().then(() => {
            reactiveFixture.detectChanges();
            expect(reactiveFixture.nativeElement.querySelector('input').disabled).toBeTruthy();
         });
      });

      describe('if a select field is required', () => {
         beforeEach(() => {
            reactiveComp.schema = { key: 'log_level', value: _cloneDeep(JSON_SCHEMA.properties.log_level) };
            reactiveComp.qaTag = 'log_level';
            reactiveComp.required = true;

            reactiveFixture.detectChanges();
         });

         it('an option selected, form has to be valid', () => {
            reactiveFixture.nativeElement.querySelector('#log_level-input').click();
            reactiveFixture.detectChanges();
            let options: NodeListOf<Element> = reactiveFixture.nativeElement.querySelectorAll('.st-dropdown-menu-item');
            (<HTMLLIElement> options[1]).click();
            reactiveFixture.detectChanges();

            reactiveFixture.whenStable().then(() => {
               reactiveFixture.detectChanges();

               expect(reactiveComp.reactiveForm.invalid).toBeFalsy();
            });
         });

         it('no one option is selected, form has to be invalid', () => {
            reactiveComp.model = undefined;
            reactiveFixture.detectChanges();
            expect(reactiveComp.reactiveForm.invalid).toBeTruthy();
         });

      });

      it('if select is not required, form is valid although model is empty', () => {
         reactiveComp.required = false;
         reactiveComp.model = undefined;

         reactiveFixture.whenStable().then(() => {
            reactiveFixture.detectChanges();

            expect(reactiveComp.reactiveForm.invalid).toBeFalsy();
         });
      });

   });

});

