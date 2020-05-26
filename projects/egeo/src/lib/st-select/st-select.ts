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
   AfterViewInit,
   ChangeDetectionStrategy,
   ChangeDetectorRef,
   Component,
   ElementRef,
   EventEmitter,
   forwardRef,
   HostBinding,
   Injector,
   Input,
   OnDestroy,
   Output,
   ViewChild
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep as _cloneDeep, flatten as _flatten, has as _has } from 'lodash';
import { Subscription } from 'rxjs';

import { StCheckValidationsDirective } from './st-check-validations';
import { StDropDownMenuGroup, StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';

@Component({
   selector: 'st-select',
   templateUrl: './st-select.html',
   styleUrls: ['./st-select.scss'],
   host: {
      'class': 'st-select'
   },
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StSelectComponent), multi: true }
   ]
})
export class StSelectComponent implements AfterViewInit, ControlValueAccessor, OnDestroy {

   @Input() placeholder: string = '';
   @Input() name: string = '';
   @Input() label: string = '';
   @Input() tooltip: string | null = null;
   @Input() errorMessage: string;
   @Input() selected: StDropDownMenuItem = undefined;
   @Input() default: any;
   @Input() itemsBeforeScroll: number = 8;
   @Input() search: boolean = false;
   @Input() isLoading: boolean = false;
   @Input() forceValidations: boolean = false;

   @Input() placeholderSearch?: string = 'Search...';
   @Input() keyBoardMove: boolean = false;

   @Output() expand: EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() select: EventEmitter<any> = new EventEmitter<any>();
   @Output() scrollAtBottom: EventEmitter<any> = new EventEmitter<any>();

   @ViewChild('input', {static: false}) inputElement: ElementRef;
   @ViewChild('button', {static: false}) buttonElement: ElementRef;

   @HostBinding('class.st-select-opened')

   public expandedMenu: boolean = false;
   public filteredOptions: StDropDownMenuItem[] | StDropDownMenuGroup[];
   public searchInput: FormControl = new FormControl();
   public inputFormControl: FormControl = new FormControl();

   public showClear: boolean;

   onChange: (_: any) => void;
   onTouched: () => void;

   private _inputHTMLElement: HTMLInputElement | undefined = undefined;
   private _isDisabled: boolean = false;
   private _options: StDropDownMenuItem[] | StDropDownMenuGroup[] = [];
   private _searchInputSubscription: Subscription;


   constructor(private _selectElement: ElementRef,
               private _injector: Injector,
               private _cd: ChangeDetectorRef) {
   }

   // TODO: MOVE THIS TO FORM-BASE
   notifyError(errorMessage: string): void {
      this.errorMessage = errorMessage;
   }

   /*
    ****** getters && setters ******
    */
   @Input()
   set disabled(value: boolean) {
      this._isDisabled = value;
      this._cd.markForCheck();
   }

   get disabled(): boolean {
      return this._isDisabled;
   }

   @Input()
   set options(options: StDropDownMenuItem[] | StDropDownMenuGroup[]) {
      this._options = _cloneDeep(options);
      const selectedItem: StDropDownMenuItem | undefined = this.findByProperty('selected', true);
      this.removeAllSelected();
      if (selectedItem) {
         this.selected = selectedItem;
      }
   }

   get options(): StDropDownMenuItem[] | StDropDownMenuGroup[] {
      return this._options;
   }

   get selectedValue(): string {
      return this.selected && this.selected.label ? this.selected.label : '';
   }

   get disableValue(): string | null {
      return this._isDisabled === true ? '' : null;
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

   get optionsId(): string | null {
      return this.selectId !== null ? `${this.selectId}-options` : null;
   }

   get inputName(): string | null {
      return this.name && this.name.length > 0 ? this.name : null;
   }

   get hasLabel(): boolean {
      return this.label !== undefined && this.label !== null && this.label.length > 0;
   }

   showError(): boolean {
      return this.errorMessage && this.errorMessage.length && (this.inputFormControl.touched || this.forceValidations) && !this._isDisabled;
   }

   /*
    ****** Control value accessor && validate methods ******
    */

   getOptions(): void {
      if (this.searchInput.value) {
         this.onSearch(this.searchInput.value);
      }
   }

   onSearch(value: string): void {
      this.filteredOptions = value && value.length ? (this.options as any).filter((option: StDropDownMenuItem) =>
         option.label.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
      ) : this.options;
      this._cd.markForCheck();
   }

   onSearchClick(event: Event): void {
      event.preventDefault();
      event.stopPropagation();
   }

   // Set the function to be called when the control receives a change event.
   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   // Set the function to be called when the control receives a touch event.
   registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
   }

   setDisabledState(disabled: boolean): void {
      this._isDisabled = disabled;
      this._cd.markForCheck();
   }

   // Write a new value to the element.
   writeValue(newValue: any): void {
      if (!this.selected || this.selected.value !== newValue) {
         this.selected = this.findByProperty('value', newValue);
         this._cd.markForCheck();
      }
   }

   /*
    ****** Component methods ******
    */

   ngAfterViewInit(): void {
      this._inputHTMLElement = this.inputElement.nativeElement;
      const directive: StCheckValidationsDirective = this._injector.get(StCheckValidationsDirective, null);
      if (directive) {
         directive.registerOnChange(this.notifyError.bind(this));
      }
   }

   ngOnInit(): void {
      if (this.search) {
         this._searchInputSubscription = this.searchInput.valueChanges.subscribe((val) => {
            this.onSearch(val);
            this.showClear = (val && val.length > 0);
         });
      }
   }

   ngOnDestroy(): void {
      if (this._searchInputSubscription) {
         this._searchInputSubscription.unsubscribe();
      }
   }

   onButtonKeyPress(event: KeyboardEvent): void {
      if (event.keyCode === 13) {
         this.toggleButton();
      }
   }

   onButtonClick(): void {
      if (!this._isDisabled) {
         this.toggleButton();
         this.expandedMenu ? this._inputHTMLElement.focus() : this._inputHTMLElement.blur();
      }
   }

   clearInput(): void {
      this.searchInput.setValue('');
   }

   createResetButton(): boolean {
      return this.default !== undefined && ((!this.selected && this.inputFormControl.touched) || (this.selected && this.selected.value !== this.default));
   }

   resetToDefault(): void {
      this.writeValue(this.default);
      this.select.emit(this.default);
      if (this.onChange) {
         this.onChange(this.default);
      }
      this._cd.markForCheck();
   }

   onClickOutside(): void {
      this.expandedMenu = false;
      this.expand.emit(this.expandedMenu); // Notify expand change
   }

   onChangeOption(option: StDropDownMenuItem): void {
      this.selected = option && option.value !== undefined ? option : undefined;
      const value: any = option && option.value !== undefined ? option.value : undefined;
      if (this.onChange) {
         this.onChange(value);
      }
      if (this.onTouched) {
         this.onTouched();
      }
      this.select.emit(value);

      if (value || (option && option.hasOwnProperty('value') && !option.value)) {
         this.onClickOutside();
      }
      this._cd.markForCheck();
   }

   onScrollAtBottom(): void {
      this.scrollAtBottom.emit();
   }

   /*
    ****** Util component methods ******
    */

   // Search element by property in option list
   private findByProperty(propName: 'value' | 'selected', propValue: any): StDropDownMenuItem | undefined {
      if (this.isStDropdownItemList(this.options)) {
         return this.options.find(item => _has(item, propName) && item[propName] === propValue);
      } else if (this.isStDropdownGroupList(this.options)) {
         return _flatten(this.options.map(group => group.items)).find(item => _has(item, propName) && item[propName] === propValue);
      }
   }

   // Check if options are a instance of StDropDownMenuItem[]
   private isStDropdownItemList(items: StDropDownMenuItem[] | StDropDownMenuGroup[]): items is StDropDownMenuItem[] {
      return this.options && this.options.length > 0 && !_has((items as StDropDownMenuGroup[])[0], 'items');
   }

   // Check if options are a instance of StDropDownMenuGroup[]
   private isStDropdownGroupList(items: StDropDownMenuItem[] | StDropDownMenuGroup[]): items is StDropDownMenuGroup[] {
      return this.options && this.options.length > 0 && _has((items as StDropDownMenuGroup[])[0], 'items');
   }

   private toggleButton(): void {
      this.expandedMenu = !this.expandedMenu;
      this.expand.emit(this.expandedMenu); // Notify expand change
      this._cd.markForCheck();
   }

   // TODO: Remove when remove from StDropDownMenuItem model the selected property
   private removeAllSelected(): void {
      if (this.isStDropdownItemList(this.options)) {
         return this.options.forEach(item => {
            if (item.selected) {
               delete item.selected;
            }
         });
      } else if (this.isStDropdownGroupList(this.options)) {
         this.options.forEach(group => group.items.forEach(item => {
            if (item.selected) {
               delete item.selected;
            }
         }));
      }
   }
}
