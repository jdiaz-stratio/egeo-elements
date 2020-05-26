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

import {
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   forwardRef,
   HostBinding,
   Input,
   OnChanges,
   OnInit,
   SimpleChanges,
   ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';

import { StDropDownMenuGroup, StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';

/**
 * @description {Component} Tag Input
 *
 * This component is a text input box that automatically creates tags out of a typed text.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-tag-input
 *    class="st-form-field"
 *    name="tag-input-reactive"
 *    formControlName="tag-input-reactive"
 *    [autocompleteList]="filteredlist"
 *    [withAutocomplete]="true"
 *    [disabled]="disabled"
 *    [label]="'Tag Input with Reactive Form'"
 *    [id]="'tag-input-reactive'"
 *    [placeholder]="'Add tags separated by commas'"
 *    [tooltip]="'This is a Tag Input component tooltip'"
 *    [forbiddenValues]="['test']"
 *    (input)="onFilterList($event)">
 * </st-tag-input>
 * <st-tag-input
 *    class="st-form-field"
 *    name="tag-input-template-driven"
 *    [(ngModel)]="tags.templateDriven"
 *    [autocompleteList]="filteredlist"
 *    [withAutocomplete]="true"
 *    [disabled]="disabled"
 *    [label]="'Tag Input with Template Driven Form'"
 *    [id]="'tag-input-template-driven'"
 *    [placeholder]="'Add tags separated by commas'"
 *    [tooltip]="'This is a Tag Input component tooltip'"
 *    [regularExpression]="pattern"
 *    (input)="onFilterList($event)">
 * </st-tag-input>
 * ```
 */
@Component({
   selector: 'st-tag-input',
   templateUrl: './st-tag-input.component.html',
   styleUrls: ['./st-tag-input.component.scss'],
   host: {
      'class': 'st-tag-input'
   },
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StTagInputComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StTagInputComponent), multi: true }],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StTagInputComponent implements ControlValueAccessor, Validator, OnInit, OnChanges {

   /** @input {string | null} [label=null] Label to show over the input. It is empty by default */
   @Input() label: string | null = null;
   /** @input {string | null} [tooltip=null] The tooltip to show  over the label. It is empty by default */
   @Input() tooltip: string | null = null;
   /** @input {string | null} [placeholder=null] The text that appears as placeholder of the input. It is empty by default */
   @Input() placeholder: string | null = null;
   /** @input {string | null} [errorMessage=null] Error message to show. It is empty by default */
   @Input() errorMessage: string | null = null;
   /** @input {string | null} [type=null] Type of the items */
   @Input() type: string | null = 'text';

   /** @input {boolean} [withAutocomplete=false] Enable autocomplete feature. It is false by default */
   @Input() withAutocomplete: boolean = false;
   /** @input {(StDropDownMenuItem | StDropDownMenuGroup)[]} [autocompleteList=Array()] List to be used for autocomplete feature. It is empty by default */
   @Input() autocompleteList: (StDropDownMenuItem | StDropDownMenuGroup)[] = [];
   /** @input {boolean} [charsToShowAutocompleteList=Array()] List to be used for autocomplete feature. It is empty by default */
   @Input() charsToShowAutocompleteList: number = 1;
   /** @input {boolean} [allowFreeText=true] Boolean to allow user to type a free text or not */
   @Input() allowFreeText: boolean = true;
   /** @input {string} [infoMessage=] Message used to inform user about what values he has to introduce */
   @Input() infoMessage: string;

   /** @input {string[]} [forbiddenValues=Array()] A list of values that user can not type and if he types one of them,
    * tag input will be invalid. It is empty by default
    */
   @Input() forbiddenValues: string[] = [];
   /** @input {string} [regularExpression=] Regular expression to validate values. It is null by default */
   @Input() regularExpression: any | null = null;
   /** @Input {boolean} [forceValidations=false] If you specify it to 'true', the tag input checks the errors before being modified by user */
   @Input() forceValidations: boolean = false;

   @ViewChild('newElement', {static: true}) newElementInput: ElementRef;
   @ViewChild('inputElement', {static: false}) inputElement: ElementRef;

   public expandedMenu: boolean = false;
   public items: any[] = [];
   public innerInputContent: string = '';
   public isPristine: boolean = true;
   public showErrorValue: boolean = false;

   private _focus: boolean = false;
   private _isDisabled: boolean = false;
   private _newElementInput: HTMLInputElement | null = null;
   private _selected: number | null = null;
   private _regularExp: RegExp;

   onChange = (_: any) => {
   }

   onTouched = () => {
   }

   constructor(private _selectElement: ElementRef,
               private _cd: ChangeDetectorRef) {
   }

   /** @input {boolean} [disabled=false] Disable the component. It is false by default */
   @Input()
   get disabled(): boolean {
      return this._isDisabled;
   }

   set disabled(value: boolean) {
      this._isDisabled = value;
   }

   get hasLabel(): boolean {
      return this.label !== null && this.label.length > 0;
   }

   get hasFocus(): boolean {
      return this._focus;
   }

   get hasPlaceholder(): boolean {
      return !this._focus && !this.items.length && this.placeholder && this.placeholder.length > 0;
   }

   @HostBinding('class.st-tag-input--autocomplete')
   get hasAutocomplete(): boolean {
      return this.expandedMenu && this.autocompleteList && this.autocompleteList.length > 0;
   }

   get disableValue(): string | null {
      return this._isDisabled === true ? '' : null;
   }

   get isValidInput(): boolean {
      const isForbidden = this.forbiddenValues.length && this.forbiddenValues.indexOf(this.innerInputContent) > -1;
      const isDuplicated = this.items.indexOf(this.innerInputContent) !== -1;
      const matchedPattern = this.regularExpression ? this._regularExp.test(this.innerInputContent) : true;
      return this.innerInputContent.length ? !isForbidden && !isDuplicated && matchedPattern : true;
   }

   get tagSelected(): number | null {
      return this._selected;
   }

   get selectId(): string | null {
      const select: HTMLElement = this._selectElement.nativeElement;
      return select.getAttribute('id') !== null ? select.id : null;
   }

   get inputId(): string | null {
      return this.selectId !== null ? `${this.selectId}-input` : null;
   }

   get labelId(): string | null {
      return this.selectId !== null ? `${this.selectId}-label` : null;
   }

   get tagId(): string | null {
      return this.selectId !== null ? `${this.selectId}-tag-` : null;
   }

   get listId(): string {
      return this.selectId !== null ? `${this.selectId}-autocomplete` : null;
   }

   ngOnInit(): void {
      this._newElementInput = this.newElementInput.nativeElement;
      switch (this.type) {
         case 'number': {
            this.regularExpression = '^\\d+(\\.\\d+)?$';
            break;
         }
         case 'integer': {
            this.regularExpression = '^\\d+$';
            break;
         }
         default: {
            break;
         }
      }

      this._regularExp = new RegExp(this.regularExpression);
      this.showErrorValue = this.showError();
      this._cd.markForCheck();
   }


   ngOnChanges(changes: SimpleChanges): void {
      this.checkAutocompleteMenuChange(changes);
      if (this.forceValidations) {
         this.writeValue(this.items);
      }
      this._cd.markForCheck();
   }

   writeValue(data: any): void {
      if (data && Array.isArray(data) && data.length) {
         this.items = [];
         for (const value of data) {
            const parsedValue = this._getParsedTag(value);
            if (parsedValue || !isNaN(parsedValue)) {
               this.items.push(parsedValue);
            }
         }
         this.onChange(this.items);
         this.isPristine = false;
         this._cd.markForCheck();
      }
   }

   setDisabledState(disabled: boolean): void {
      this.disabled = disabled;
      this._cd.markForCheck();
   }

   validate(control: FormControl): any {
   }

   // Registry the change function to propagate internal model changes
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }

   // Input actions
   onInputText(text: string): void {
      this.innerInputContent = text;
      this.showAutocompleteMenu();
   }

   onInputFocusIn(event: Event): void {
      if (!this._isDisabled) {
         this._focus = true;
         this._newElementInput.focus();
         this._forceResetAutoCompleteList();
         this.showAutocompleteMenu();
      }
      event.stopPropagation();
   }

   onInputFocusOut(event: Event): void {
      if (!this.expandedMenu) {
         this._focus = false;
         this.addCurrentTag();
      }
      event.stopPropagation();
   }

   onInputKeyDown(event: any): void {
      switch (event.keyCode) {
         case 188: // Comma
         case 13: // Enter
            if (this.innerInputContent.length && this.isValidInput) {
               this.addTag(this.innerInputContent);
               this._forceResetAutoCompleteList();
            }
            event.preventDefault();
            break;
         case 9: // Tab
            if (this.innerInputContent.length && this.isValidInput) {
               this.addTag(this.innerInputContent);
               event.preventDefault();
            } else if (this.innerInputContent.length) {
               this.clearInput();
            }
            break;
         case 46: // Delete
            if (this.innerInputContent.length) {
               this.clearInput();
            } else if (this.items.length) {
               event.target.previousElementSibling.focus();
            }
            break;
         case 8: // Backspace
         case 37: // Left
            if (this.items.length && !this.innerInputContent.length) {
               event.target.previousElementSibling.focus();
            }
            break;
         default:
            break;
      }
   }

   // Tag actions
   onTagKeyDown(event: any, index: number): void {
      switch (event.keyCode) {
         case 8: // Backspace
         case 46: // Delete
            if (this._selected !== null) {
               this.deleteTag(this._selected);
               this._selected = null;
               this._newElementInput.focus();
            }
            break;
         case 37: // Left
            if (this._selected > 0) {
               event.target.previousElementSibling.focus();
            }
            break;
         case 39: // Right
            if (this._selected < this.items.length) {
               event.target.nextElementSibling.focus();
            }
            break;
         default:
            break;
      }
   }

   onTagFocusIn(event: Event, index: number): void {
      if (!this._isDisabled) {
         this._focus = true;
         this.addCurrentTag();
         this.expandedMenu = false;
         this._selected = index;
      }
   }

   onTagFocusOut(event: Event, index: number): void {
      this._focus = false;
      this._selected = null;
   }

   onTagClick(event: Event, index: number): void {
      event.stopPropagation();
      event.preventDefault();
   }

   // Dropdown actions
   onListSelect(data: StDropDownMenuItem): void {
      this._focus = false;
      if (data.value.length && this.items.indexOf(data.value) === -1) {
         this.addTag(data.value);
      } else {
         this.clearInput();
      }
   }

   onClickOutside(event: Event): void {
      if (this.expandedMenu) {
         this._focus = false;
         this.addCurrentTag();
      }
   }

   showError(): boolean {
      return typeof this.errorMessage === 'string' && (!this.isPristine || this.forceValidations) && !this._focus && !this.disabled;
   }


   deleteTag(index: number): void {
      this.items.splice(index, 1);
      this.onChange(this.items);

      this._newElementInput.value = '';
      this.innerInputContent = '';
      this._newElementInput.dispatchEvent(new Event('input'));
   }

   private addTag(tag: string): void {
      const parsedValue = this._getParsedTag(tag);
      if (parsedValue || !isNaN(parsedValue)) {
         this.items.push(parsedValue);
         this.clearInput();
         this.onChange(this.items);
         this.isPristine = false;
      }
      this.showErrorValue = this.showError();
   }

   private addCurrentTag(): void {
      if (this.innerInputContent.length && this.isValidInput) {
         this.addTag(this.innerInputContent);
      } else {
         this.clearInput();
      }
   }

   private clearInput(): void {
      if (this.expandedMenu) {
         this.expandedMenu = false;
      }
      this.innerInputContent = '';
      this._newElementInput.innerText = '';
   }

   private showAutocompleteMenu(): void {
      if (this.withAutocomplete && !this.expandedMenu && this.charsToShowAutocompleteList <= this.innerInputContent.length) {
         this.expandedMenu = true;
      }
      if (this.innerInputContent === '' && this.charsToShowAutocompleteList) {
         this.expandedMenu = false;
      }
      this._cd.markForCheck();
   }

   private checkAutocompleteMenuChange(changes: SimpleChanges): void {
      if (changes && changes.autocompleteList) {
         this._cd.markForCheck();
      }
   }

   private _getParsedTag(tag: string): any {
      switch (this.type) {
         case 'number': {
            return parseFloat(tag);
         }
         case 'integer': {
            return parseInt(tag, 0);
         }
         default:
            return tag;
      }
   }

   private _forceResetAutoCompleteList(): void {
      if (!this.charsToShowAutocompleteList && this.withAutocomplete) {
         this._newElementInput.innerText = '';
         const event: any = new Event('input', {
            'bubbles': true
         });
         event.data = '';
         this._newElementInput.dispatchEvent(event);
      }
   }
}
