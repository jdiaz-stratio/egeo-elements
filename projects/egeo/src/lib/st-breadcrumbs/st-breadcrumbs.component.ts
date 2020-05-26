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
   Component,
   EventEmitter,
   Input,
   OnChanges,
   OnInit,
   Output,
   SimpleChanges
} from '@angular/core';
import { range as _range } from 'lodash';
import { StBreadCrumbItem, StBreadCrumbMode } from './st-breadcrumbs.interface';

/**
 * @description {Component} [Breadcrumbs]
 *
 * The breadcrumb is s a type of secondary navigation
 * element that shows a trail for allowing users to keep track of their location.
 *
 * @model
 *
 *   [Id, optional label and icon of an option] {./st-breadcrumbs.interface.ts#StBreadCrumbItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-breadcrumbs
 *    [options]="options"
 *    (select)="onSelect($event)"
 *    qaTag="breadcrumbs">
 * </st-breadcrumbs>
 * ```
 *
 */
@Component({
   selector: 'st-breadcrumbs',
   templateUrl: './st-breadcrumbs.component.html',
   styleUrls: ['./st-breadcrumbs.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StBreadCrumbsComponent implements OnInit, OnChanges {
   /** @Input {StBreadCrumbItem[]} [options=\[\]] List of navigation parts for show in breadcrumb */
   @Input() options: StBreadCrumbItem[] = [];
   /** @Input {number} [elementsToShow=5] Max number of elements to show. */
   @Input() elementsToShow: number = 5;
   /** @Input {StBreadCrumbMode} [mode=StBreadCrumbMode.DEFAULT] Visualization mode */
   @Input() mode: StBreadCrumbMode = StBreadCrumbMode.DEFAULT;
   /** @Input {string} [qaTag=''] Id value for qa test */
   @Input() qaTag: string;

   /** @Output {number} [select] Notify any item selection */
   @Output() select: EventEmitter<number> = new EventEmitter<number>();

   public indexArray: number[] = [];
   private _initPos: number = 0;

   public ngOnInit(): void {
      this.calculateStart(this.options, this.elementsToShow);
   }

   public ngOnChanges(changes: SimpleChanges): void {
      if (changes.options || changes.elementsToShow) {
         const currElsToShow: number = changes.elementsToShow ? changes.elementsToShow.currentValue : this.elementsToShow;
         const currOptions: StBreadCrumbItem[] = changes.options ? changes.options.currentValue : this.options;
         this.calculateStart(currOptions, currElsToShow);
      }
   }

   public onSelect(index: number): void {
      const toEmit: number = index > -1 ? index : this._initPos - 1;
      if (toEmit < (this.options.length - 1)) {
         this.select.emit(toEmit);
      }
   }

   public getId(index: number): string {
      return this.options[index].id;
   }

   public getLabel(index: number): string {
      return index > -1 ? this.options[index].label : '...';
   }

   public getIcon(index: number): string {
      return index > -1 ? this.options[index].icon : '';
   }

   public hasIcon(index: number): boolean {
      return index > -1 && Boolean(this.options[index].icon);
   }

   private calculateStart(options: StBreadCrumbItem[], elementsToShow: number): void {
      if (options.length > elementsToShow) {
         this._initPos = options.length - elementsToShow + 1; // use +1 because first element is fixed
         this.indexArray = _range(this._initPos, this._initPos + elementsToShow - 1);
         this.indexArray.unshift(-1); // Add dots fixed element
         this.indexArray.unshift(0); // Add first fixed element
      } else {
         this._initPos = 0;
         this.indexArray = _range(0, options.length);
      }
   }
}
