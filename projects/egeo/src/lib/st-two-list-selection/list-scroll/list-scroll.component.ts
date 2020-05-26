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
import { ChangeDetectorRef, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { StDropDownMenuItem } from '../../st-dropdown-menu/st-dropdown-menu.interface';
import { StEgeo, StRequired } from '../../decorators/require-decorators';
import { StTwoListSelectionElement, StTwoListSelectExtraLabelAction } from '../st-two-list-selection.model';

@Component({
   selector: 'list-scroll',
   templateUrl: './list-scroll.component.html',
   styleUrls: ['./list-scroll.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListScrollComponent implements OnInit {

   @Input() @StRequired() list: StTwoListSelectionElement[];
   @Input() editable: boolean = false;
   @Input() fetchingDataText: string;
   @Input() hasAllList?: boolean = false;
   @Input() isLoading?: boolean = false;
   @Input() itemAll?: StTwoListSelectionElement;
   @Input() menuOptionList?: StDropDownMenuItem[];
   @Input() @StRequired() qaTag: string;
   @Input() mode: 'compact' | 'normal' = 'normal';

   @Output() scrollBottom: EventEmitter<any> = new EventEmitter<any>();
   @Output() selectItem: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectItemNonEditable: EventEmitter<StTwoListSelectionElement> = new EventEmitter<StTwoListSelectionElement>();
   @Output() selectExtraLabel: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();
   @Output() search: EventEmitter<string> = new EventEmitter<string>();

   atBottom: Boolean = false;
   delay: any = (() => {
      let timer: any = 0;
      return (callback: any, ms: any): void => {
         clearTimeout(timer);
         timer = setTimeout(callback, ms);
      };
   })();
   firstEl: number = 0;
   scrollItems: StTwoListSelectionElement[] = [];
   showLoading: Boolean = false;

   constructor(
      private cd: ChangeDetectorRef,
      private elemRef: ElementRef) {
   }

   ngOnInit(): void {
      this.showLoading = this.isLoading;
      this.cd.markForCheck();
   }

   get listQaTag(): string {
      return this.qaTag + '-scroll-list';
   }

   get listCheckAllQaTag(): string {
      return this.qaTag + '-check-all-scroll-list';
   }

   onScroll(): void {
      let element = this.elemRef.nativeElement.querySelector('#virtualScroll');
      this.showLoading = this.isLoading;
      this.atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

      const debounce = _.throttle(() => {
         if (this.atBottom) {
            this.scrollBottom.emit();
            this.showLoading = false;
         }
      });
      this.delay(debounce, 1000);
   }
}
