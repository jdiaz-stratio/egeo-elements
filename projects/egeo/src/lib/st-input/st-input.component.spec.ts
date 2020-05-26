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
import { Component, DebugElement, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { StInputComponent } from './st-input.component';
import { StInputError } from './st-input.error.model';
import { StInputModule } from './st-input.module';
import { StLabelModule } from '../st-label/st-label.module';


let component: StInputComponent;
let fixture: ComponentFixture<StInputComponent>;
let input: HTMLInputElement;

describe('StInputComponent', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StLabelModule],
         declarations: [StInputComponent]
      })
         .overrideComponent(StInputComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StInputComponent);
      input = fixture.nativeElement.querySelector('input');
      component = fixture.componentInstance;
      component.qaTag = 'test qaTag';
   });

   it('Input should have a placeholder', () => {
      component.placeholder = 'Placeholder sample';
      fixture.detectChanges();
      expect(input.getAttribute('placeholder')).toContain('Placeholder sample');
   });

   it('Input can be a password Input', () => {
      component.fieldType = 'password';
      fixture.detectChanges();
      expect(input.getAttribute('type')).toContain('password');
   });

   it('Input can be a text Input', () => {
      component.fieldType = 'text';
      fixture.detectChanges();
      expect(input.getAttribute('type')).toContain('text');
   });

   it('Input can be a number Input', () => {
      component.fieldType = 'number';
      fixture.detectChanges();
      expect(input.getAttribute('type')).toContain('number');
   });

   it('Input has attribute value', () => {
      component.value = 'name';
      fixture.detectChanges();
      expect(input.value).toContain('name');
   });

   it('Input should be disabled', () => {
      fixture.detectChanges();

      component.setDisabledState(true);
      fixture.detectChanges();
      expect(input.disabled).toBe(true);

      component.setDisabledState(false);
      fixture.detectChanges();
      expect(input.disabled).toBe(false);
   });

   it('Input should be enabled', () => {
      fixture.detectChanges();
      component.setDisabledState(false);
      fixture.detectChanges();
      expect(input.disabled).toBe(false);
   });

   it('Input should be focused naturally', () => {
      fixture.detectChanges();
      input.focus();
      expect(component.focus).toBe(true);
   });

   it('When user leaves input, it emits an event', () => {
      spyOn(component.blur, 'emit');

      input.dispatchEvent(new Event('focus'));
      fixture.detectChanges();
      input.dispatchEvent(new Event('blur'));
      fixture.detectChanges();

      expect(component.blur.emit).toHaveBeenCalledTimes(1);
   });

   it('label is only generated if label input is not empty', () => {
      component.label = 'fake label';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('label.st-input__label')).not.toBeNull();

      component.label = '';
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('label.st-input__label')).toBeNull();
   });

   describe('When a default value is introduced, user will be able to reset the input', () => {
      let fakeDefault: string = 'default value';

      beforeEach(() => {
         component.default = fakeDefault;
      });

      it('reset icon is only created if default input is introduced and current input value is different to it', () => {
         let htmlInput: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
         htmlInput.dispatchEvent(new Event('focus'));
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();

         htmlInput.value = 'test';
         htmlInput.dispatchEvent(new Event('input'));
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).not.toBeNull();
      });


      it('reset icon is only displayed when input is focused and user has typed something and it is different to default', () => {
         let htmlInput: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;

         htmlInput.dispatchEvent(new Event('focus'));
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();

         htmlInput.value = 'test';
         htmlInput.dispatchEvent(new Event('input'));
         fixture.detectChanges();

         expect(fixture.debugElement.query(By.css('.st-form-control-reset-button')).styles.opacity).toEqual('1');

         htmlInput.dispatchEvent(new Event('blur'));
         fixture.detectChanges();

         expect(fixture.debugElement.query(By.css('.st-form-control-reset-button')).styles.opacity).toEqual('0');

         htmlInput.dispatchEvent(new Event('focus'));
         fixture.detectChanges();

         expect(fixture.debugElement.query(By.css('.st-form-control-reset-button')).styles.opacity).toEqual('1');

         htmlInput.value = fakeDefault;
         htmlInput.dispatchEvent(new Event('input'));
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-form-control-reset-button')).toBeNull();
      });


      it('when user clicks on the reset button, value of input will turn to the default value', () => {
         let htmlInput: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
         htmlInput.dispatchEvent(new Event('focus'));
         fixture.detectChanges();

         htmlInput.value = 'a';
         htmlInput.dispatchEvent(new Event('input'));
         fixture.detectChanges();

         fixture.nativeElement.querySelector('.st-form-control-reset-button').click();
         fixture.detectChanges();

         expect(htmlInput.value).toBe(fakeDefault);
      });

   });

   it('if default value is not introduced, reset button is not displayed', () => {
      expect(fixture.nativeElement.querySelector('.reset-button')).toBeNull();

      let htmlInput: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      htmlInput.dispatchEvent(new Event('focus'));
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.reset-button')).toBeNull();
   });
});

@Component({
   template: `
      <form [formGroup]="reactiveForm" novalidate autocomplete="off" (ngSubmit)="onSubmitReactiveForm()" class="col-md-6">
         <div class="form-group">
           <st-input #input
                  label="Description"
                  placeholder="Module description"
                  [forceValidations]="forceValidations"
                  [errors]="errors"
                  name="description"
                  qaTag="description-input"
                  formControlName="description"
                  [fieldType]=fieldType
               ></st-input>
                 <st-input
                  label="Components"
                  name="components"
                  id="components-input"
                  formControlName="components"
                  fieldType="number"
               ></st-input>
         </div>
      </form>
      `
})
class FormReactiveComponent implements OnInit {
   public fieldType: string = 'string';
   public forceValidations: boolean;
   public reactiveForm: FormGroup;
   public minLength: number = 3;
   public maxLength: number = 20;
   public min: number = 10;
   public max: number = 100;
   public pattern: string = '[a-z]*';
   public model: any = {
      name: 'Egeo',
      description: '',
      components: 10
   };

   public errors: StInputError = {
      generic: 'Error',
      required: 'This field is required',
      minLength: 'The field min length is: ' + this.minLength,
      maxLength: 'The field max length is: ' + this.maxLength,
      min: 'The number has to be higher than: ' + this.min,
      max: 'The number has to be minor than: ' + this.max,
      pattern: 'Invalid value'
   };

   @ViewChild('input', {static: true}) input: StInputComponent;

   constructor(private _fb: FormBuilder) {
   }

   ngOnInit(): void {
      this.reactiveForm = this._fb.group({
         description: [
            this.model.description,
            [
               Validators.required,
               Validators.minLength(this.minLength),
               Validators.maxLength(this.maxLength),
               Validators.pattern(this.pattern)
            ]
         ],
         components: new FormControl()
      });
   }

   disableInput(): void {
      this.reactiveForm.get('description').disable();
   }

   enableInput(): void {
      this.reactiveForm.get('description').enable();
   }


   onSubmitReactiveForm(): void {
   }
}

let reactiveFixture: ComponentFixture<FormReactiveComponent>;
let reactiveComp: FormReactiveComponent;

describe('StInputComponent in reactive form', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StInputModule],
         declarations: [FormReactiveComponent]
      })
         .overrideComponent(StInputComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      reactiveFixture = TestBed.createComponent(FormReactiveComponent);
      reactiveComp = reactiveFixture.componentInstance;
   });

   afterEach(() => {
      reactiveFixture.destroy();
   });

   it('should be init correct', () => {
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;

      expect(htmlInput.placeholder).toBe('Module description');
   });

   it('should notify custom errors', () => {
      reactiveComp.forceValidations = false;
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;

      reactiveComp.forceValidations = true;
      reactiveFixture.detectChanges();

      // Required
      let errorMessage: DebugElement = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('This field is required');

      // Min length
      htmlInput.value = 'a';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('The field min length is: 3');


      // Max length
      htmlInput.value = 'abcdefghijklmnopqrstuvwxyz';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('The field max length is: 20');


      // Max length
      htmlInput.value = '1234567890';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('Invalid value');
   });

   it('should notify generic errors', () => {
      let genericError: string = 'Generic Error';
      reactiveComp.forceValidations = false;
      reactiveComp.errors = { generic: genericError };
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;

      reactiveComp.forceValidations = true;
      reactiveFixture.detectChanges();

      // Required
      let errorMessage: DebugElement = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual(genericError);

      // Min length
      htmlInput.value = 'a';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual(genericError);


      // Max length
      htmlInput.value = 'abcdefghijklmnopqrstuvwxyz';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual(genericError);


      // Max length
      htmlInput.value = '1234567890';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual(genericError);
   });

   it('should notify empty error', () => {
      reactiveComp.forceValidations = false;
      reactiveComp.errors = {};
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;

      reactiveComp.forceValidations = true;
      reactiveFixture.detectChanges();

      // Required
      let errorMessage: DebugElement = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('');

      // Min length
      htmlInput.value = 'a';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('');


      // Max length
      htmlInput.value = 'abcdefghijklmnopqrstuvwxyz';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('');


      // Max length
      htmlInput.value = '1234567890';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('');
   });

   it('should be able to disable and enable', () => {
      reactiveComp.forceValidations = false;
      reactiveFixture.detectChanges();

      reactiveComp.enableInput();
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;
      expect(htmlInput).toBeDefined();
      expect(htmlInput.classList).not.toContain('disabled');

      reactiveComp.disableInput();
      reactiveFixture.detectChanges();
      htmlInput = reactiveFixture.debugElement.query(By.css('input')).nativeElement;
      expect(htmlInput).toBeDefined();
      expect(htmlInput.disabled).toBeTruthy();

      reactiveComp.enableInput();
      reactiveFixture.detectChanges();
      htmlInput = reactiveFixture.debugElement.query(By.css('input')).nativeElement;
      expect(htmlInput).toBeDefined();
      expect(htmlInput.disabled).toBeFalsy();
   });

   it('should notify empty error with undefined errors object', () => {
      reactiveComp.forceValidations = false;
      reactiveComp.errors = undefined;
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;

      reactiveComp.forceValidations = true;
      reactiveFixture.detectChanges();

      // Required
      let errorMessage: DebugElement = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('');


      // All ok
      htmlInput.value = 'prueba';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeNull();
   });

   it('should only notify error with focus', () => {
      reactiveComp.forceValidations = false;
      reactiveComp.errors = { generic: 'error' };
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.debugElement.query(By.css('input')).nativeElement;

      reactiveComp.forceValidations = true;
      reactiveFixture.detectChanges();

      // Required
      let errorMessage: DebugElement = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect(errorMessage.nativeElement).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('error');

      htmlInput.dispatchEvent(new Event('focus'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeNull();

      htmlInput.dispatchEvent(new Event('blur'));
      reactiveFixture.detectChanges();

      errorMessage = reactiveFixture.debugElement.query(By.css('.st-input-error-message'));
      expect(errorMessage).toBeDefined();
      expect((<HTMLSpanElement>errorMessage.nativeElement).textContent).toEqual('error');
   });

   it('if internal control is not defined, when event is listened and force validations is true it does not do anything', () => {
      spyOn(reactiveComp.input, 'writeValue');
      reactiveComp.input.internalControl = undefined;

      reactiveComp.input.forceValidations = true;
      reactiveComp.input.ngOnChanges({});

      expect(reactiveComp.input.writeValue).not.toHaveBeenCalled();

      reactiveComp.input.internalControl = new FormControl();
      reactiveComp.input.ngOnChanges({});

      expect(reactiveComp.input.writeValue).toHaveBeenCalled();
   });

   it('if it is a number input, model emitted has to be a number', () => {
      reactiveFixture.detectChanges();
      let htmlInput: HTMLInputElement = reactiveFixture.nativeElement.querySelector('#components-input input');

      htmlInput.value = '8.9';
      htmlInput.dispatchEvent(new Event('input'));
      reactiveFixture.detectChanges();

      expect((<any> reactiveComp.reactiveForm.controls).components.value).toBe(8.9);
   });
});


// TODO: TEST INPUT IN TEMPLATE FORM
