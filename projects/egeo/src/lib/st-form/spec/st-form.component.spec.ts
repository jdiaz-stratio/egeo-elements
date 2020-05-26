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
import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { cloneDeep as _cloneDeep } from 'lodash';
import { StFormComponent } from '../st-form.component';
import { JSON_SCHEMA } from './resources/json-schema';
import { PipesModule } from '../../pipes/pipes.module';
import { StInputModule } from '../../st-input/st-input.module';
import { StFormModule } from '../st-form.module';
import { StFormDirectiveModule } from '../../directives/form/form-directives.module';
import { StTooltipModule } from '../../st-tooltip/st-tooltip.module';
import { StCheckboxModule } from '../../st-checkbox/st-checkbox.module';
import { StFormFieldModule } from '../st-form-field/st-form-field.module';
import { StCheckboxComponent } from '../../st-checkbox/st-checkbox.component';
import { StFormFieldComponent } from '../st-form-field/st-form-field.component';
import { StSwitchComponent } from '../../st-switch/st-switch.component';
import { StInputComponent } from '../../st-input/st-input.component';

let component: StFormComponent;
let fixture: ComponentFixture<StFormComponent>;
let getParentElement = (element: HTMLElement, level: number): any => {
   let i: number = 0;
   let parent: HTMLElement = element;
   while (i < level && level > 0) {
      parent = parent.parentElement;
      ++i;
   }
   return parent;
};

describe('StFormComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StInputModule, StCheckboxModule, StFormFieldModule, StTooltipModule, PipesModule, StFormDirectiveModule],
         declarations: [StFormComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StCheckboxComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StFormComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StFormFieldComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StSwitchComponent, {
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
      fixture = TestBed.createComponent(StFormComponent);
      component = fixture.componentInstance;
      component.schema = _cloneDeep(JSON_SCHEMA);
      fixture.detectChanges();
   });

   describe('should render a form according its json schema', () => {
      it('a control is created for each property with its ids', () => {
         for (let propertyId in JSON_SCHEMA.properties) {
            if (JSON_SCHEMA.hasOwnProperty(propertyId)) {
               expect(fixture.nativeElement.querySelector('#' + propertyId)).not.toBeNull();
            }
         }
      });

      it('tooltips are generated using their descriptions', () => {
         let checkSectionFieldTooltips = (schema: any) => {
            for (let sectionPropertyId in schema.properties) {
               if (schema.properties.hasOwnProperty(sectionPropertyId)) {
                  let property: any = schema.properties[sectionPropertyId];
                  if (property.type !== 'object') {
                     let label: HTMLElement = fixture.nativeElement.querySelector('#' + sectionPropertyId + '-label');
                     if (property.description) {
                        expect(label.title).toBe(property.description);
                     } else {
                        expect(label.title).toBe('');
                     }
                  } else {
                     // properties of a section
                     checkSectionFieldTooltips(property);
                  }
               }
            }
         };

         fixture.whenStable().then(() => {
            fixture.detectChanges();

            checkSectionFieldTooltips(JSON_SCHEMA);
         });
      });

      it('controls are displayed with their default value and label', () => {
         let element: any;
         fixture.whenStable().then(() => {

            for (let propertyId in JSON_SCHEMA.properties) {
               if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
                  let property: any = JSON_SCHEMA.properties[propertyId];

                  if (property.enum) { // select field
                     fixture.detectChanges();
                     element = fixture.nativeElement.querySelector('#' + propertyId + '-input');
                  } else {
                     element = fixture.nativeElement.querySelector('#' + propertyId);
                  }

                  if (property.default) {
                     expect(element.value).toBe(property.default.toString());
                  }
                  expect(fixture.nativeElement.innerHTML).toContain(property.title);
               }
            }
         });
      });
   });

   describe('It has to be able to render nested properties', () => {
      let nestedProperty: any;
      beforeEach(() => {
         nestedProperty = JSON_SCHEMA.properties.executor;
      });

      it('properties of the nested property are rendered', () => {
         let element: any;
         fixture.whenStable().then(() => {

            for (let propertyId in nestedProperty.properties) {
               if (nestedProperty.properties.hasOwnProperty(propertyId)) {
                  let property: any = nestedProperty.properties[propertyId];

                  if (property.enum) { // select field
                     fixture.detectChanges();
                     element = fixture.nativeElement.querySelector('#' + propertyId + '-input');
                  } else {
                     element = fixture.nativeElement.querySelector('#' + propertyId);
                  }

                  if (property.default) {
                     expect(element.value).toBe(property.default.toString());
                  }
                  expect(fixture.nativeElement.innerHTML).toContain(property.title);
               }
            }
         });
      });

      it('form should add a nesting level to its nested sections in order to display section titles taking it into account', () => {
         fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector('.category .title').innerHTML).toContain(component.schema.title);

            let sectionTitles: HTMLLabelElement[] = fixture.nativeElement.querySelectorAll('.section .title');

            expect(sectionTitles.length).toBe(2);
            expect(sectionTitles[0].innerHTML).toContain(nestedProperty.title);
            expect(sectionTitles[1].innerHTML).toContain(nestedProperty.properties.subexecutor.title);
         });
      });
   });

   describe('If there are some dependant fields', () => {
      beforeEach(() => {
         component.schema = {
            'properties': {
               'security': {
                  'title': 'Enable security',
                  'description': 'Enable or disable the security',
                  'type': 'boolean'
               },
               'dns': {
                  'title': 'DNS',
                  'description': 'DNS',
                  'type': 'string'
               }
            },
            'dependencies': {
               'security': ['dns']
            }
         };
         fixture.changeDetectorRef.detectChanges();
      });

      it('if a field has type boolean and has dependant fields, it will be displayed as a switch', () => {
         expect(fixture.nativeElement.querySelector('#security.st-switch')).not.toBeNull();
      });

      it('these fields are not rendered if switch is off', (done) => {
         fixture.whenStable().then(() => {
            expect(fixture.nativeElement.querySelector('#dns')).toBeNull();

            fixture.nativeElement.querySelector('#security-label').click((event) => {
               event.stopPropagation();
            });

            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#dns')).not.toBeNull();
            done();
         });
      });

   });

   describe('Should be able to improve the visualization of its sections according to the ui attribute', () => {
      describe('section can be hidden if it has defined as show-more component', () => {
         beforeEach(() => {
            component.schema = {
               'title': 'Section name',
               'type': 'object',
               'ui': {
                  'component': 'show-more'
               },
               'properties': {
                  'name': {
                     'title': 'Name',
                     'type': 'string'
                  },
                  'age': {
                     'title': 'Age',
                     'type': 'integer'
                  },
                  'subsection': {
                     'title': 'Subsection',
                     'type': 'object',
                     'properties': {
                        'subName': {
                           'title': 'Subname',
                           'type': 'string'
                        },
                        'subAge': {
                           'title': 'Subage',
                           'type': 'integer'
                        }
                     }
                  }
               }
            };

            component.parentName = undefined;
            fixture.detectChanges();
         });

         describe('link button should display a label ', () => {
            let fakeParentName = 'fake parent name';
            let fakeSectionName = 'Personal information';

            beforeEach(() => {
               component.schema = _cloneDeep(component.schema);
               component.parentName = fakeParentName;
               component.schema.title = fakeSectionName;
               fixture.detectChanges();
            });

            it('with the title of the parent section if it is introduced', () => {
               let button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

               expect(button.innerHTML).toContain('Additional options of ' + fakeParentName);
               expect(button.querySelector('span i').classList).toContain('icon-arrow2_right');

               button.click();
               fixture.detectChanges();

               expect(button.innerHTML).toContain('Additional options of ' + fakeParentName);
               expect(button.querySelector('span i').classList).toContain('icon-arrow2_down');
            });

            it('with the section name if parent name is not introduced', () => {
               component.parentName = undefined;
               component.schema.title = fakeSectionName;
               fixture.detectChanges();

               let button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

               expect(button.innerHTML).toContain('Additional options of ' + fakeSectionName);
               expect(button.querySelector('span i').classList).toContain('icon-arrow2_right');

               button.click();
               fixture.detectChanges();

               expect(button.innerHTML).toContain('Additional options of ' + fakeSectionName);
               expect(button.querySelector('span i').classList).toContain('icon-arrow2_down');
            });

            it('without any section name if parent section and section name are not introduced', () => {
               component.parentName = undefined;
               component.schema.title = undefined;
               fixture.detectChanges();

               let button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

               expect(button.innerHTML).toContain('Additional options');
               expect(button.querySelector('span i').classList).toContain('icon-arrow2_right');

               button.click();
               fixture.detectChanges();

               expect(button.innerHTML).toContain('Additional options');
               expect(button.querySelector('span i').classList).toContain('icon-arrow2_down');
            });
         });

         it('link button is displayed and all its properties are hidden', () => {
            expect(fixture.nativeElement.querySelector('button.button-link-primary')).not.toBeNull();
            expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).toContain('hidden'); // form field element
            expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).toContain('hidden'); // form field element
            expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeTruthy();
         });

         it('fields will be hidden until user clicks on link button', () => {
            expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).toContain('hidden'); // form field element
            expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).toContain('hidden'); // form field element
            expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeTruthy();

            fixture.nativeElement.querySelector('button').click();
            fixture.detectChanges();

            expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).not.toContain('hidden');
            expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).not.toContain('hidden');
            expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeFalsy();
         });

         it('When user clicks on the button, it changes its text to hide again these fields', () => {
            fixture.nativeElement.querySelector('button').click();
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('button').innerHTML).toContain('Additional options of ' + component.schema.title);

            fixture.nativeElement.querySelector('button').click();
            fixture.detectChanges();

            expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).toContain('hidden'); // form field element
            expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).toContain('hidden'); // form field element
            expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeTruthy();
         });
      });

      describe('section is displayed with a switch if it is defined as switch component', () => {
         beforeEach(() => {
            component.schema = {
               'title': 'Section name',
               'type': 'object',
               'ui': {
                  'component': 'switch'
               },
               'properties': {
                  'enable': {
                     'title': 'Security',
                     'type': 'boolean',
                     'default': false
                  },
                  'name': {
                     'title': 'Name',
                     'type': 'string'
                  },
                  'age': {
                     'title': 'Age',
                     'type': 'integer'
                  },
                  'subsection': {
                     'title': 'Subsection',
                     'type': 'object',
                     'properties': {
                        'subName': {
                           'title': 'Subname',
                           'type': 'string'
                        },
                        'subAge': {
                           'title': 'Subage',
                           'type': 'integer'
                        }
                     }
                  }

               }
            };
            fixture.detectChanges();
         });

         it('if first field is a boolean, it is displayed as a switch', () => {
            expect(fixture.nativeElement.querySelector('#enable.st-switch')).not.toBeNull();
         });

         it('section fields are hidden while first field does not have value', (done) => {
            fixture.whenStable().then(() => {
               expect(fixture.nativeElement.querySelector('#name')).toBeNull();
               expect(fixture.nativeElement.querySelector('#age')).toBeNull();
               expect(fixture.nativeElement.querySelector('#subName')).toBeNull();
               expect(fixture.nativeElement.querySelector('#subAge')).toBeNull();

               fixture.nativeElement.querySelector('#enable-label').click((event) => {
                  event.stopPropagation();
               });
               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('#name')).not.toBeNull();
               expect(fixture.nativeElement.querySelector('#age')).not.toBeNull();
               expect(fixture.nativeElement.querySelector('#subName')).not.toBeNull();
               expect(fixture.nativeElement.querySelector('#subAge')).not.toBeNull();
               done();
            });
         });

         it('when first field does not have any value, rest of fields have to be cleaned', () => {
            component.innerValue.name = 'fake name';
            component.innerValue.age = 12;
            component.innerValue.subsection = {};

            component.innerValue.enable = undefined;
            fixture.detectChanges();

            component.innerValue.name = undefined;
            component.innerValue.age = undefined;
            component.innerValue.subsection = undefined;
         });

         it('when section is disabled, an info text should be displayed to inform user', (done) => {
            fixture.whenStable().then(() => {

               expect(fixture.nativeElement.querySelector('.disabled-section-info')).not.toBeNull();
               expect(fixture.nativeElement.querySelector('.disabled-section-info').innerHTML)
                  .toContain(component.schema.title + ' for this instance is disabled.');

               fixture.nativeElement.querySelector('#enable-label').click((event) => {
                  event.stopPropagation();
               });
               fixture.detectChanges();

               expect(fixture.nativeElement.querySelector('.disabled-section-info')).toBeNull();
               done();
            });
         });
      });

      describe('section can be displayed as an accordion', () => {
         beforeEach(() => {
            component.schema = {
               'title': 'Section name',
               'type': 'object',
               'ui': {
                  'component': 'accordion'
               },
               'properties': {
                  'name': {
                     'title': 'Name',
                     'type': 'string'
                  },
                  'age': {
                     'title': 'Age',
                     'type': 'integer'
                  },
                  'subsection': {
                     'title': 'Subsection',
                     'type': 'object',
                     'properties': {
                        'subName': {
                           'title': 'Subname',
                           'type': 'string'
                        },
                        'subAge': {
                           'title': 'Subage',
                           'type': 'integer'
                        }
                     }
                  }

               }
            };
            fixture.detectChanges();
         });

         it('section fields are hidden by default until user clicks on the title', (done) => {
            fixture.whenStable().then(() => {
               expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).toContain('hidden');
               expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).toContain('hidden');
               expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeTruthy();

               fixture.nativeElement.querySelector('.accordion .title').click(); // click to show fields
               fixture.detectChanges();

               expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).not.toContain('hidden');
               expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).not.toContain('hidden');
               expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeFalsy();


               fixture.nativeElement.querySelector('.accordion .title').click(); // click to hide fields again
               fixture.detectChanges();

               expect(getParentElement(fixture.nativeElement.querySelector('#name'), 3).classList).toContain('hidden');
               expect(getParentElement(fixture.nativeElement.querySelector('#age'), 3).classList).toContain('hidden');
               expect(fixture.nativeElement.querySelector('#subsection-section').hidden).toBeTruthy();

               done();
            });
         });
      });

      describe('should be able to display fields in the same row if these are related', () => {
         beforeEach(() => {
            component.schema = {
               'title': 'Section name',
               'type': 'object',
               'properties': {
                  'a': {
                     'title': 'a',
                     'type': 'string',
                     'ui': { 'relatedTo': 'b' }
                  },
                  'b': {
                     'title': 'b',
                     'type': 'string'
                  },
                  'c': {
                     'title': 'c',
                     'type': 'string',
                     'ui': { 'relatedTo': 'd' }
                  },
                  'd': {
                     'title': 'd',
                     'type': 'string',
                     'ui': { 'relatedTo': 'e' }
                  },
                  'e': {
                     'title': 'e',
                     'type': 'string'
                  },
                  'f': {
                     'title': 'f',
                     'type': 'string',
                     'ui': { 'relatedTo': 'g' }
                  },
                  'g': {
                     'title': 'fg',
                     'type': 'number'
                  }
               }
            };
            fixture.detectChanges();
         });

         it('all adjacent fields with the property relatedTo are displayed at the same row', () => {
            expect(getParentElement(fixture.nativeElement.querySelector('#a'), 4).nextElementSibling)
               .toBe(getParentElement(fixture.nativeElement.querySelector('#b'), 4));
            expect(getParentElement(fixture.nativeElement.querySelector('#c'), 4).nextElementSibling)
               .toBe(getParentElement(fixture.nativeElement.querySelector('#d'), 4));
            expect(getParentElement(fixture.nativeElement.querySelector('#d'), 4).nextElementSibling)
               .toBe(getParentElement(fixture.nativeElement.querySelector('#e'), 4));
            expect(getParentElement(fixture.nativeElement.querySelector('#f'), 4).nextElementSibling)
               .toBe(getParentElement(fixture.nativeElement.querySelector('#g'), 4));
         });

         it('When a field is not related with its adjacent fields, a line break is displayed after it', () => {
            expect(getParentElement(fixture.nativeElement.querySelector('#b'), 4).nextElementSibling.classList).toContain('line-break');
            expect(getParentElement(fixture.nativeElement.querySelector('#e'), 4).nextElementSibling.classList).toContain('line-break');
         });
      });

      describe('should be able to display or hide a field according to the value of another one', () => {
         beforeEach(() => {
            component.schema = {
               'title': 'Section name',
               'type': 'object',
               'properties': {
                  'a': {
                     'title': 'a',
                     'type': 'string',
                     'visible': {}
                  },
                  'b': {
                     'title': 'b',
                     'type': 'string',
                     'ui': {
                        'visible': {
                           'a': 'active b'
                        }
                     }
                  },
                  'c': {
                     'title': 'c',
                     'type': 'string',
                     'ui': {
                        'visible': {
                           'b': 'active c'
                        }
                     }
                  }
               }
            };
            fixture.detectChanges();
         });

         it('a field is displayed if it has the property visible empty or it does not have it', () => {
            expect(fixture.nativeElement.querySelector('#a')).not.toBeNull();

            component.schema.properties.a.ui = { visible: undefined };
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#a')).not.toBeNull();

            component.schema.properties.a.ui = {};
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#a')).not.toBeNull();
         });

         it('a field is displayed if all the conditions specified in the property visible are fulfilled', () => {
            expect(fixture.nativeElement.querySelector('#a')).not.toBeNull();
            expect(fixture.nativeElement.querySelector('#b')).toBeNull();
            expect(fixture.nativeElement.querySelector('#c')).toBeNull();

            component.onChangeProperty('active b', 'a');
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#b')).not.toBeNull();

            component.onChangeProperty('test', 'a');
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#b')).toBeNull();

            component.onChangeProperty('active c', 'a');
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#c')).toBeNull();

            component.onChangeProperty('active b', 'a');
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#c')).toBeNull();

            component.onChangeProperty('active c', 'b');
            fixture.detectChanges();

            expect(fixture.nativeElement.querySelector('#c')).not.toBeNull();
         });

         it('when a field is not visible, it is removed from the model', () => {
            spyOn(component.valueChange, 'emit');

            component.onChangeProperty('active b', 'a');
            component.onChangeProperty('this is activated', 'b');
            fixture.detectChanges();

            let model: any = (<any> component.valueChange.emit).calls.mostRecent().args[0];

            expect(component.valueChange.emit).toHaveBeenCalled();
            expect(model.b).toBe('this is activated');

            component.onChangeProperty('disable b', 'a');
            fixture.detectChanges();

            model = (<any> component.valueChange.emit).calls.mostRecent().args[0];

            expect(model.b).toBe(undefined);
         });
      });
   });

   describe('Form can be configured to be validated its fields without any user interaction', () => {
      it('Errors of invalid fields are displayed if forceValidations input is true', () => {
         component.forceValidations = true;
         fixture.detectChanges();
         expect(getParentElement(fixture.nativeElement.querySelector('#url'), 2).innerHTML).toContain('This field is required');
      });

      it('Errors of invalid fields are not displayed if forceValidations input is false', () => {
         component.forceValidations = false;
         fixture.detectChanges();

         expect(getParentElement(fixture.nativeElement.querySelector('#url'), 2).innerHTML).not.toContain('This field is required');
      });

      it('Form is marked as pristine only if forceValidations is false after view is initialized', () => {
         spyOn(component.form.form, 'markAsPristine');
         component.forceValidations = true;
         component.ngAfterViewInit();

         expect(component.form.form.markAsPristine).not.toHaveBeenCalled();

         component.forceValidations = false;
         component.ngAfterViewInit();

         expect(component.form.form.markAsPristine).toHaveBeenCalled();
      });
   });

   describe('Section descriptions can be displayed using the input "sectionDescriptionLevel"', () => {

      it ('if sectionDescriptionLevel is not introduced, section descriptions are not displayed', () => {
         expect(fixture.nativeElement.querySelector('#executor-section .description')).toBeNull();
      });

      it ('if sectionDescriptionLevel is introduced, section descriptions are only displayed if section level' +
         ' is minor than sectionDescriptionLevel', () => {
         component.sectionDescriptionLevel = 1;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('#executor-section .description').innerHTML)
            .toContain(component.schema.properties.executor.description);
         expect(fixture.nativeElement.querySelector('#subexecutor-section .description')).toBeNull();

         component.sectionDescriptionLevel = 2;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('#subexecutor-section .description').innerHTML)
            .toContain(component.schema.properties.executor.properties.subexecutor.description);
      });

   });

   describe('form can be configured to be able to enable or disable the visualization of tooltips through the input "showTooltips"', () => {
      it ('by default, tooltips are displayed', () => {
         expect(fixture.nativeElement.querySelector('label').title).toEqual(component.schema.properties.genericIntegerInput.description);
      });

      it ('if input is false, tooltips are not displayed', () => {
         component.showTooltips = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('label').title).toEqual('');
      });

      it ('if input is true, tooltips are displayed in fields with description', () => {
         component.showTooltips = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('label').title).toEqual(component.schema.properties.genericIntegerInput.description);
      });
   });
});


@Component({
   template: `
      <form novalidate>
         <st-form [schema]="schema" [(ngModel)]="model" name="generated" #formModel="ngModel">
         </st-form>
      </form>
      `
})
class FormInTemplateDrivenFormComponent {
   public schema: any = _cloneDeep(JSON_SCHEMA);
   public model: any = {};
   @ViewChild('formModel', {static: false}) public formModel: NgForm;

   constructor() {
      this.schema.properties.security = {
         'title': 'Enable security',
         'description': 'Enable or disable the security',
         'type': 'boolean'
      };
      this.schema.properties.dns = {
         'title': 'DNS',
         'description': 'DNS',
         'type': 'string'
      };

      this.schema.dependencies = {
         'security': ['dns']
      };
   }
}


describe('StFormComponent in templateDriven form', () => {
   let templateDrivenFixture: ComponentFixture<FormInTemplateDrivenFormComponent>;
   let templateDrivenComp: FormInTemplateDrivenFormComponent;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StFormModule, StFormFieldModule, StInputModule, StCheckboxModule],
         declarations: [FormInTemplateDrivenFormComponent]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      templateDrivenFixture = TestBed.createComponent(FormInTemplateDrivenFormComponent);
      templateDrivenComp = templateDrivenFixture.componentInstance;
   });

   it('form can be disabled from outside', () => {
      templateDrivenFixture.detectChanges();
      templateDrivenFixture.whenStable().then(() => {
         templateDrivenComp.formModel.control.disable();
         templateDrivenFixture.detectChanges();
         for (let propertyId in JSON_SCHEMA.properties) {
            if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
               expect(templateDrivenFixture.nativeElement.querySelector('#' + propertyId).disabled).toBeTruthy();
            }
         }
      });
   });

   it('form can be enabled after being disabled from outside', () => {
      templateDrivenFixture.detectChanges();
      templateDrivenFixture.whenStable().then(() => {
         templateDrivenComp.formModel.control.disable();
         templateDrivenFixture.detectChanges();
         templateDrivenComp.formModel.control.enable();
         templateDrivenFixture.detectChanges();
         for (let propertyId in JSON_SCHEMA.properties) {
            if (JSON_SCHEMA.properties.hasOwnProperty(propertyId)) {
               expect(templateDrivenFixture.nativeElement.querySelector('#' + propertyId).disabled).toBeFalsy();
            }
         }
      });
   });

   it('fields which have a parent field wont be sent when parent is undefined', (done) => {
      templateDrivenFixture.detectChanges();

      templateDrivenFixture.whenStable().then(() => {

         expect(templateDrivenFixture.nativeElement.querySelector('#security-input')).not.toBeNull();
         expect(templateDrivenFixture.nativeElement.querySelector('input[name="dns"]')).toBeNull();

         expect(templateDrivenComp.model.dns).toBeUndefined();

         templateDrivenFixture.detectChanges();
         templateDrivenFixture.nativeElement.querySelector('#security-input').click();
         templateDrivenFixture.detectChanges();

         expect(templateDrivenComp.model.dns).toEqual(templateDrivenComp.schema.properties.dns.default);


         templateDrivenFixture.nativeElement.querySelector('#security-input').click();
         templateDrivenFixture.detectChanges();

         expect(templateDrivenComp.model.dns).toBeUndefined();
         done();
      });
   });
});
