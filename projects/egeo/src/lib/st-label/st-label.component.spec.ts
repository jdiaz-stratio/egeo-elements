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
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StLabelComponent } from './st-label.component';
import { StTooltipModule } from '../st-tooltip';
import { TestUtils } from '../tests/utils';

@Component({
   template: `<label st-label></label>`
})
class TestStLabelComponent { }

const labelContent: string = 'label content';
const tooltipContent: string = 'tooltip content';

let fixture: ComponentFixture<TestStLabelComponent>;
let nativeElement: Element;
let template: string = '';

describe('StLabel', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [
            StLabelComponent,
            TestStLabelComponent
         ],
         imports: [StTooltipModule]
      });
   }));

   it('Exist an span element that contains label content', async(() => {
      template = '<label st-label>' + labelContent + '</label>';
      TestUtils.overrideComponentTemplate(TestStLabelComponent, template).then(() => {
         fixture = TestBed.createComponent(TestStLabelComponent);
         fixture.detectChanges();
         nativeElement = fixture.nativeElement;
         expect(nativeElement.querySelector('label').textContent).toContain(labelContent);
      });
   }));

   it('Label tag has st-label class', async(() => {
      template = '<label st-label>' + labelContent + '</label>';
      TestUtils.overrideComponentTemplate(TestStLabelComponent, template).then(() => {
         fixture = TestBed.createComponent(TestStLabelComponent);
         fixture.detectChanges();
         nativeElement = fixture.nativeElement;
         expect(nativeElement.querySelector('label').classList.contains('st-label')).toBeTruthy();
         expect(nativeElement.querySelector('label').classList.contains('st-tooltip')).toBeFalsy();
      });
   }));

   it('Label tag has st-tooltip class if it has a title', async(() => {
      template = '<label st-label title="' + tooltipContent + '">' + labelContent + '</label>';
      TestUtils.overrideComponentTemplate(TestStLabelComponent, template).then(() => {
         fixture = TestBed.createComponent(TestStLabelComponent);
         fixture.detectChanges();
         nativeElement = fixture.nativeElement;
         expect(nativeElement.querySelector('label').classList.contains('st-tooltip')).toBeTruthy();
      });
   }));

});
