import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { StFormListComponent } from '../st-form-list.component';
import { TWO_INPUTS_JSON_SCHEMA } from './resources/two-inputs-json-schema';
import { PipesModule } from '../../pipes/pipes.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { StFormFieldModule } from '../../st-form/st-form-field/st-form-field.module';
import { StFormListModule } from '../st-form-list.module';
import { StInputModule } from '../../st-input/st-input.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StFormFieldComponent } from '../../st-form/st-form-field/st-form-field.component';
import { StInputComponent } from '../../st-input/st-input.component';

let component: StFormListComponent;
let fixture: ComponentFixture<StFormListComponent>;
let fakeModel: Array<any> = [
   { genericNumberInput: 8, genericTextInput: 'fake text 1' },
   { genericNumberInput: 20, genericTextInput: 'fake text 2' }
];

let realSetTimeout: any = window.setTimeout;

describe('[StFormList]', () => {
   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, StFormFieldModule, CommonModule,
            FormsModule,
            ReactiveFormsModule,
            StFormFieldModule,
            PipesModule,
            StInputModule,
            StFormDirectiveModule],
         declarations: [StFormListComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StFormListComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StFormFieldComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StInputComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      spyOn(window, 'setTimeout').and.callFake((func) => {
         func();
      });
      fixture = TestBed.createComponent(StFormListComponent);
      component = fixture.componentInstance;
      component.schema = TWO_INPUTS_JSON_SCHEMA;
      fixture.detectChanges();
   });

   describe('should allow to customize the label of the button to add more items', () => {
      it('if button label is not introduced as input, a default label is displayed', () => {
         expect(fixture.nativeElement.querySelector('.button.button-link-primary').innerText).toContain('Add one more item');
      });

      it('if label is introduced as input, it is added to the button', () => {
         let buttonLabel = 'Add items';
         component.buttonLabel = 'Add items';
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.button.button-link-primary').innerText).toContain(buttonLabel);
      });
   });

   describe('should be able to create an array of items', () => {
      beforeEach(() => {
         component.schema = TWO_INPUTS_JSON_SCHEMA;
         fixture.detectChanges();
      });

      it('array is loaded according to the model introduced as input', () => {
         component.value = [...fakeModel];
         fixture.detectChanges();

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            let rows = fixture.nativeElement.querySelectorAll('.st-form-list__row');

            expect(rows.length).toBe(fakeModel.length);

            let itemProperties = Object.keys(TWO_INPUTS_JSON_SCHEMA.properties);
            for (let i = 0; i < rows.length; ++i) {
               let inputs: HTMLInputElement[] = rows[i].querySelectorAll('input');
               expect(inputs[0].id).toBe(itemProperties[0] + '-' + i);
               expect(inputs[0].value).toEqual(String(fakeModel[i][itemProperties[0]]));

               expect(inputs[1].id).toBe(itemProperties[1] + '-' + i);
               expect(inputs[1].value).toEqual(String(fakeModel[i][itemProperties[1]]));
            }
         });
      });
   });

   describe('user can add new items to list', () => {

      it('item is loaded according to the json schema displaying with a default value if exists', (done) => {
         window.setTimeout = realSetTimeout;
         component.value = [];
         component.schema = TWO_INPUTS_JSON_SCHEMA;
         fixture.detectChanges();

         fixture.nativeElement.querySelector('.button.button-link-primary').click();
         fixture.detectChanges();
         fixture.whenStable().then(() => {
            fixture.detectChanges();
            setTimeout(() => {
               fixture.detectChanges();

               let controls = fixture.nativeElement.querySelectorAll('input');

               expect(controls.length).toBe(Object.keys(TWO_INPUTS_JSON_SCHEMA.properties).length);
               for (let i = 0; i < Object.keys(TWO_INPUTS_JSON_SCHEMA.properties).length; ++i) {
                  let property: string = Object.keys(TWO_INPUTS_JSON_SCHEMA.properties)[i];
                  expect(fixture.nativeElement.querySelector('#' + property + '-0')).not.toBeNull();
                  expect(fixture.nativeElement.querySelector('#' + property + '-0').value).toEqual(String(TWO_INPUTS_JSON_SCHEMA.properties[property].default));
               }
               done();
            });
         });
      });

      it('event is emitted with the position of the removed item and the updated model', () => {
         component.value = [...fakeModel];
         component.schema = TWO_INPUTS_JSON_SCHEMA;

         fixture.detectChanges();

         spyOn(component.add, 'emit');
         fixture.nativeElement.querySelector('.button.button-link-primary').click();
         fixture.detectChanges();

         expect(component.add.emit).toHaveBeenCalledWith({ position: fakeModel.length, model: component.value });
      });

   });

   describe('user can remove an item from list', () => {
      let removeButtons: any[];

      beforeEach(() => {
         component.schema = TWO_INPUTS_JSON_SCHEMA;
         component.value = [...fakeModel];

         fixture.detectChanges();
         removeButtons = fixture.nativeElement.querySelectorAll('.remove-button');

         spyOn(component.remove, 'emit');
      });

      it('model and form are updated', () => {
         removeButtons[1].click();
         fixture.detectChanges();

         expect(component.value.length).toBe(fakeModel.length - 1);
         expect(component.value).toEqual([...fakeModel].slice(0, fakeModel.length - 1));
         expect(fixture.nativeElement.querySelectorAll('.st-form-list__row').length).toBe(fakeModel.length - 1);
      });


      it('event is emitted with the position of the removed item and the updated model', () => {
         removeButtons[1].click();
         fixture.detectChanges();

         expect(component.remove.emit).toHaveBeenCalledWith({ position: 1, model: component.value });

         removeButtons[0].click();
         fixture.detectChanges();

         expect(component.remove.emit).toHaveBeenCalledWith({ position: 0, model: component.value });
      });
   });

   describe('when value is changed, it should emit an event', () => {
      beforeEach(() => {
         spyOn(component.valueChange, 'emit');
         component.value = fakeModel;
      });

      it('if user removes a row, event is emitted', () => {
         component.removeItem(0);

         expect(component.valueChange.emit).toHaveBeenCalledWith(component.value);
      });

      it('if user adds a row, event is emitted', () => {
         component.addItem();

         expect(component.valueChange.emit).toHaveBeenCalledWith(component.value);
      });

      it('if user modifies a value in a row, event is emitted', () => {
         fixture.detectChanges();

         let input: HTMLInputElement = fixture.nativeElement.querySelector('#genericTextInput-1');

         input.value = 'edited text';
         input.dispatchEvent(new Event('input'));

         fixture.detectChanges();

         expect(component.valueChange.emit).toHaveBeenCalledWith(component.value);
      });
   });

   it('When users leaves an input, an event is emitted with the current value', () => {
      spyOn(component.blur, 'emit');
      component.value = fakeModel;
      fixture.detectChanges();

      let htmlInput: HTMLInputElement = fixture.nativeElement.querySelector('input');

      htmlInput.dispatchEvent(new Event('focus'));
      htmlInput.value = '6';
      fixture.detectChanges();

      htmlInput.dispatchEvent(new Event('blur'));
      fixture.detectChanges();

      expect(component.blur.emit).toHaveBeenCalledWith(component.value);
   });

});

@Component({
   template: `
      <form [formGroup]="reactiveForm" novalidate>
         <st-form-list [schema]="schema" [(ngModel)]="value" formControlName="list">
         </st-form-list>
      </form>
      `
})
class FormReactiveFormListComponent {
   @Input() schema: any = TWO_INPUTS_JSON_SCHEMA;
   @Input() qaTag: string;
   @Input() value: any[];

   public reactiveForm: FormGroup = new FormGroup({ 'list': new FormControl() });
}


describe('StFormListComponent in reactive form', () => {

   let reactiveFixture: ComponentFixture<FormReactiveFormListComponent>;
   let reactiveComp: FormReactiveFormListComponent;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            PipesModule,
            StFormDirectiveModule, StFormListModule, StFormFieldModule, StInputModule, StCheckboxModule],
         declarations: [FormReactiveFormListComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      reactiveFixture = TestBed.createComponent(FormReactiveFormListComponent);
      reactiveComp = reactiveFixture.componentInstance;
      reactiveFixture.detectChanges();
   });

   describe('when form list is disabled', () => {
      beforeEach(() => {
         reactiveComp.schema = TWO_INPUTS_JSON_SCHEMA;
         reactiveComp.value = fakeModel;
         reactiveFixture.detectChanges();
         reactiveComp.reactiveForm.disable();
         reactiveFixture.detectChanges();
      });

      it('fields are displayed as disabled', () => {
         let inputs: HTMLInputElement[] = reactiveFixture.nativeElement.querySelectorAll('input');

         for (let i = 0; i < inputs.length; ++i) {
            expect(inputs[i].disabled).toBeTruthy();
         }
      });

      it('button to add new items has to be hidden', () => {
         reactiveFixture.whenStable().then(() => {
            reactiveFixture.detectChanges();
            expect(reactiveFixture.nativeElement.querySelector('.button.button-link-primary')).toBeNull();
         });
      });

      it ('can be enabled again', (done) => {
         reactiveComp.reactiveForm.enable();
         reactiveFixture.detectChanges();

         let inputs: HTMLInputElement[] = reactiveFixture.nativeElement.querySelectorAll('input');

         for (let i = 0; i < inputs.length; ++i) {
            expect(inputs[i].disabled).toBeFalsy();
         }
         reactiveFixture.whenStable().then(() => {
            reactiveFixture.detectChanges();
            expect(reactiveFixture.nativeElement.querySelector('.button.button-link-primary')).not.toBeNull();
            done();
         });
      });
   });

});

