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
   ControlValueAccessor,
   FormGroup,
   NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
   ChangeDetectionStrategy,
   Component,
   EventEmitter,
   Input,
   OnInit,
   Output,
   ViewChild,
   forwardRef
} from '@angular/core';
import { StEgeo, StRequired } from '../decorators/require-decorators';

export const PAGETITLE_CONTROL_ACCESSOR: any = {
   provide: NG_VALUE_ACCESSOR,
   // tslint:disable-next-line:no-use-before-declare
   useExisting: forwardRef(() => StPageTitleComponent),
   multi: true
};

@StEgeo()
@Component({
   selector: 'st-page-title',
   templateUrl: './st-page-title.component.html',
   styleUrls: ['./st-page-title.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
   providers: [PAGETITLE_CONTROL_ACCESSOR]
})
export class StPageTitleComponent implements ControlValueAccessor, OnInit {
   @Input()
   get title(): string {
      return this._title;
   }

   set title(title: string) {
      if (this._title !== title) {
         this._title = title;
      }

      this._controlValueAccessorChangeFn(this._title);
   }

   @Input() leftButton: string = '';
   @Input() qaTag: string;
   @Input() preTitle: string | undefined;
   @Input() editable: boolean = false;
   @Input() placeholder: string;
   @Input() disabled: boolean;
   @Input() readOnly: boolean;
   @Input() maxlength: number;
   @Input() minlength: number;
   @Input() error: boolean;
   @Input() errorMessage: string;
   @Output() clickButton: EventEmitter<any> = new EventEmitter();
   @Output() edit: EventEmitter<string> = new EventEmitter();

   @ViewChild('input', {static: false}) input: any;

   public focus: boolean = false;
   public hasPreTitleValue: boolean = false;
   private _title: string;

   ngOnInit(): void {
      this.hasPreTitleValue = this.hasPreTitle();
   }

   onClickedButton(): void {
      this.clickButton.emit();
   }

   _controlValueAccessorChangeFn: (value: any) => void = value => {};

   onTouched: () => any = () => {};

   hasPreTitle(): boolean {
      return this.preTitle !== undefined;
   }

   writeValue(value: any): void {
      this._title = value;
   }

   onEdit($event: any): void {
      this.edit.emit(this._title);
   }

   registerOnChange(fn: (value: any) => void): void {
      this._controlValueAccessorChangeFn = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }

   onClickEdit(): void {
      this.focus = true;
      this.input.nativeElement.focus();
   }

   onFocus(): void {
      this.focus = true;
   }

   onBlur(): void {
      this.focus = false;
   }
}
