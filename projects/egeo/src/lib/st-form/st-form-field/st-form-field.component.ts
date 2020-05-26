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
   Component,
   OnInit,
   Input,
   Output,
   forwardRef,
   ChangeDetectionStrategy,
   EventEmitter,
   ViewChild,
   HostBinding, OnChanges, SimpleChanges
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS, NgModel } from '@angular/forms';
import { StInputError } from '../../st-input/st-input.error.model';
import { StEgeo, StRequired } from '../../decorators/require-decorators';
import { StDropDownMenuItem } from '../../st-dropdown-menu/st-dropdown-menu.interface';

@StEgeo()
@Component({
   selector: 'st-form-field',
   templateUrl: './st-form-field.component.html',
   styleUrls: ['./st-form-field.component.scss'],
   providers: [
      { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => StFormFieldComponent), multi: true },
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => StFormFieldComponent), multi: true }
   ],
   changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
      class: 'st-form-field'
   }
})

export class StFormFieldComponent implements ControlValueAccessor, OnInit, OnChanges {
   @Input() @StRequired() schema: any;
   @Input() required: boolean = false;
   @Input() errorMessages: StInputError;
   @Input() qaTag: string;
   @Input() name: string;
   @Input() value: any;
   @Input() hasDependencies: boolean;
   @Input() forceValidations: boolean;
   @Input() showTooltip: boolean = true;
   @Input() maxWidth: number;
   @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
   @Output() blur: EventEmitter<any> = new EventEmitter<any>();
   @ViewChild('templateModel', {static: false}) templateModel: NgModel;

   public disabled: boolean = false; // To check disable
   public focus: boolean = false;
   public errorMessage: string = undefined;
   public selectOptions: StDropDownMenuItem[];
   public innerValue: any;

   @HostBinding('class.read-only')
   get readOnly(): boolean {
      return this.schema && this.schema.value && this.schema.value.readOnly === true;
   }

   onChange = (_: any) => {
   }

   onTouched = () => {
   }

   setValue(value: any): void {
      this.onChange(value);
      this.valueChange.emit(value);
   }

   setSwitchValue(enabled: boolean): void {
      this.onChange(enabled || undefined);
      this.valueChange.emit(enabled || undefined);
   }

   validate(control: FormControl): any {
      if (this.templateModel && this.templateModel.control && this.templateModel.control.validator) {
         return this.templateModel.control.validator(control);
      }
   }

   ngOnInit(): void {
      if (this.schema.value && this.schema.value.enum) {
         this.selectOptions = this.getSelectOptions();
      }
      setTimeout(() => {
         if (this.default !== undefined && (this.innerValue === undefined || this.innerValue === null)) {
            this.innerValue = this.default;
            this.onChange(this.innerValue);
         }
         if (this.schema.value.readOnly) {
            this.setDisabledState(true);
         }
      });
   }

   public ngOnChanges(changes: SimpleChanges): void {
      if (changes.schema) {
        this.selectOptions = this.getSelectOptions();
      }
   }

   get errors(): any {
      if (this.errorMessages) {
         return this.errorMessages;
      }

      return {
         generic: 'Error',
         required: 'This field is required',
         minLength: 'The field min length is ' + this.schema.value.minLength,
         maxLength: 'The field max length is ' + this.schema.value.maxLength,
         min: 'The number has to be higher than ' + (this.min - this.getInputStep()),
         max: 'The number has to be minor than ' + (this.max + this.getInputStep()),
         pattern: 'Invalid value'
      };
   }

   get type(): string {
      switch (this.schema.value.type) {
         case 'string':
            if (!this.schema.value.enum) {
               return 'text';
            } else {
               return 'select';
            }
         case 'integer':
            return 'number';
         default:
            return this.schema.value.type;
      }
   }

   get min(): number {
      return this.schema.value.exclusiveMinimum ? this.schema.value.minimum + this.getInputStep() : this.schema.value.minimum;
   }

   get max(): number {
      return this.schema.value.exclusiveMaximum ? this.schema.value.maximum - this.getInputStep() : this.schema.value.maximum;
   }

   get label(): string {
      return this.schema.value.title;
   }

   get placeholder(): string {
      return this.schema.value.examples && this.schema.value.examples[0] ? this.schema.value.examples[0] : '';
   }

   get default(): string {
      return this.schema.value.default;
   }

   get description(): string {
      if (this.showTooltip) {
         return this.schema.value.description;
      } else {
         return undefined;
      }
   }

   get minLength(): number {
      return this.schema.value.minLength;
   }

   get maxLength(): number {
      return this.schema.value.maxLength;
   }

   get pattern(): string {
      return this.schema.value.pattern;
   }

   hasType(type: string): boolean {
      switch (type) {
         case 'input':
            return this.type === 'text' || this.type === 'number' || this.type === 'integer';
         case 'switch':
            return this.type === 'boolean' && this.hasDependencies;
         case 'checkbox':
            return this.type === 'boolean' && !this.hasDependencies;
         default:
            return this.type === type;
      }
   }

   writeValue(value: any): void {
         this.innerValue = value;
         this.valueChange.emit(value);
         this.onChange(value);
   }

   registerOnChange(fn: (_: any) => void): void {
      this.onChange = fn;
   }

   registerOnTouched(fn: () => void): void {
      this.onTouched = fn;
   }

   setDisabledState(disable: boolean): void {
      if (this.templateModel && this.templateModel.control) {
         if (disable) {
            this.templateModel.control.disable();
         } else {
            this.templateModel.control.enable();
         }
      }
   }

   getInputStep(): number {
      if (this.schema.value.type === 'number') {
         return 0.1;
      } else {
         return 1;
      }
   }

   getSelectOptions(): StDropDownMenuItem[] {
      let options: StDropDownMenuItem[] = [];
      if (this.schema.value.enum) {
         options.push(<StDropDownMenuItem> { label: 'Select one option', value: undefined });
         let enumValues: string[] = this.schema.value.enum;
         enumValues.forEach((value) => {
            options.push(<StDropDownMenuItem> { label: value, value: value });
         });
      }
      return options;
   }

   onBlur(): void {
      this.blur.emit();
   }
}
