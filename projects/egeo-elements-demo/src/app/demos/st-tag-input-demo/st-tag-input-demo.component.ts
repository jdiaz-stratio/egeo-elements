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
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { cloneDeep as _cloneDeep } from 'lodash';
import { StDropDownMenuItem, StDropDownMenuGroup } from '@stratio/egeo';

@Component({
   selector: 'st-tag-input-demo',
   templateUrl: 'st-tag-input-demo.component.html',
   styleUrls: ['./st-tag-input-demo.component.scss']
})
export class StTagInputDemoComponent implements OnInit {
   public configDoc: any = {
      html: 'demo/st-tag-input-demo/st-tag-input-demo.component.html',
      ts: 'demo/st-tag-input-demo/st-tag-input-demo.component.ts',
      component: 'lib/st-tag-input/st-tag-input.component.ts'
   };
   @ViewChild('templateDrivenForm', {static: false}) public templateDrivenForm: NgForm;

   public tags: any = {
      reactive: [],
      reactiveRequired: [],
      reactiveDisabled: [],
      reactiveAutocomplete: [],
      templateDriven: ['Tag Template Driven1', 'Tag Template Driven2'],
      templateDrivenRequired: [],
      templateDrivenDisabled: [],
      templateDrivenAutocomplete: [],
      autoCompletedGroupList: []
   };

   public list: StDropDownMenuItem[] = [
      { label: 'China', value: 'CN' },
      { label: 'Russia', value: 'RU' },
      { label: 'United States', value: 'US' },
      { label: 'Egypt', value: 'EG' },
      { label: 'Panama', value: 'PA' },
      { label: 'Canada', value: 'CA' },
      { label: 'Indonesia', value: 'ID' },
      { label: 'North Korea', value: 'KP' },
      { label: 'France', value: 'FR' },
      { label: 'Burundi', value: 'BI' },
      { label: 'Poland', value: 'PL' },
      { label: 'Vanuatu', value: 'VU' },
      { label: 'Venezuela', value: 'VE' }
   ];
   public filteredList: StDropDownMenuItem[] = [];
   public groupList: StDropDownMenuGroup[] = [
      <StDropDownMenuGroup> {
         title: 'Group1', items: [
            { label: 'Option 1.1', value: 'option11' },
            { label: 'Option 1.2', value: 'option12' }
         ]
      },
      <StDropDownMenuGroup> {
         title: 'Group2', items: [
            { label: 'Option 2.1', value: 'option21' },
            { label: 'Option 2.2', value: 'option22' },
            { label: 'Option 2.3', value: 'option23' },
            { label: 'Option 2.4', value: 'option24' }
         ]
      },
      <StDropDownMenuGroup> {
         title: 'Group3', items: [
            { label: 'Option 3.1', value: 'option31' },
            { label: 'Option 3.2', value: 'option32' }
         ]
      },
      <StDropDownMenuGroup> {
         title: 'Group4', items: [
            { label: 'Option 4.1', value: 'option41' },
            { label: 'Option 4.2', value: 'option42' },
            { label: 'Option 4.3', value: 'option43' }
         ]
      },
      <StDropDownMenuGroup> {
         title: 'Group5', items: [
            { label: 'Option 5.1', value: 'option51' },
            { label: 'Option 5.2', value: 'option52' }
         ]
      },
      <StDropDownMenuGroup> {
         title: 'Group6', items: [
            { label: 'Option 6.1', value: 'option61' },
            { label: 'Option 6.2', value: 'option62' }
         ]
      }
   ];
   public filteredGroupList: StDropDownMenuGroup[] = [];

   public reactiveForm: FormGroup; // our model driven form
   public forceReactiveValidations: boolean = false;
   public forceTemplateDriveValidations: boolean = false;
   public errorReactiveMessage: string | null = null;
   public errorTemplateDriveMessage: string | null = null;
   public disabledReactive: boolean = true;
   public disabledTemplateDrive: boolean = true;
   public pattern: RegExp = new RegExp(`/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9]
      [0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/`);

   constructor(private _fb: FormBuilder) {
      this.reactiveForm = _fb.group({
         'tag-input-reactive': [this.tags.reactive],
         'tag-input-number': [],
         'tag-input-integer': [],
         'tag-input-reactive-required': [this.tags.reactiveRequired, Validators.required],
         'tag-input-reactive-disabled': [this.tags.reactiveDisabled],
         'tag-input-reactive-autocomplete': [this.tags.reactiveDisabled],
         'tag-input-auto-completed-group-list': [this.tags.autoCompletedGroupList, Validators.compose([Validators.minLength(2), Validators.maxLength(5)])]
      });
   }

   ngOnInit(): void {
      this.reactiveForm.valueChanges.subscribe(res => console.log('Reactive Form', res));
      this.templateDrivenForm.valueChanges.subscribe(res => console.log('Template Driven Form', res));
      this.filteredGroupList = _cloneDeep(this.groupList);
   }

   onSubmitReactiveForm(): void {
      this.forceReactiveValidations = true;
      this.errorReactiveMessage = this.reactiveForm.valid ? null : 'Error';
   }

   onSubmitTemplateDrivenForm(): void {
      this.forceTemplateDriveValidations = true;
      this.errorTemplateDriveMessage = this.templateDrivenForm.valid ? null : 'Error';
   }

   changeReactiveFormDisabled(): void {
      this.disabledReactive = !this.disabledReactive;
      if (this.disabledReactive) {
         this.reactiveForm.get('tag-input-reactive-disabled').disable();
      } else {
         this.reactiveForm.get('tag-input-reactive-disabled').enable();
      }
   }

   changeTemplateDrivenFormDisabled(): void {
      this.disabledTemplateDrive = !this.disabledTemplateDrive;
      if (this.disabledTemplateDrive) {
         this.templateDrivenForm.controls['tag-input-template-driven-disabled'].disable();
      } else {
         this.templateDrivenForm.controls['tag-input-template-driven-disabled'].enable();
      }
   }

   onFilterList(event: any): void {
      let text: string = event.target.innerText;
      this.filteredList = text ? _cloneDeep(this.list.filter(country => country.label.toLowerCase().indexOf(text.toLowerCase()) !== -1)) : [];
   }

   onFilterGroupList(event: any): void {
      let text: string = event.target.innerText;
      console.log('voy a buscar con ' + text);
      this.filteredGroupList = _cloneDeep(this.groupList);
      this.filteredGroupList = <StDropDownMenuGroup[]> this.filteredGroupList.filter(item => {
         const result = item.items.filter(_item => {
            return _item.label.toLowerCase().indexOf(text.toLowerCase()) !== -1;
         });
         item.items = result;
         return result && result.length ? item : undefined;
      });
      console.log(this.filteredGroupList);
   }

   getGroupAutoCompletedErrorMessage(): string {
      const currentValue = this.reactiveForm.controls['tag-input-auto-completed-group-list'].value;
      if (currentValue.length < 2) {
         return 'You have to enter two items at leas';
      } else if (currentValue.length > 5) {
         return 'Only 5 items are allowed';
      }
      return null;
   }
}
