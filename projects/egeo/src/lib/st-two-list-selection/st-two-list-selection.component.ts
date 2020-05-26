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
   EventEmitter,
   Input,
   OnChanges,
   OnInit,
   Output,
   SimpleChanges
} from '@angular/core';
import * as _ from 'lodash';

import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StEgeo, StRequired } from '../decorators/require-decorators';
import { StTwoListSelection } from './st-two-list-selection';
import { StTwoListSelectionConfig, StTwoListSelectionElement, StTwoListSelectExtraLabelAction, StTwoListSelectionAction } from './st-two-list-selection.model';

@Component({
   selector: 'st-two-list-selection',
   template: `
      <st-two-list-selection-view
         [allElements]="allList | stFilterList:searchBy:allSearch"
         [selectedElements]="selectedList | stFilterList:searchBy:selectedSearch"
         [config]="config"
         [editable]="editable"
         [hasAllListAll]="hasAllListAll"
         [hasAllListSelected]="hasAllListSelected"
         [itemAll]="itemAll"
         [qaTag]="qaTag"
         [isLoading]="isLoading"
         [hasSearch]="hasSearch"
         [orderAllOptions]="orderAllOptions"
         [orderSelectedOptions]="orderSelectedOptions"
         [mode]="mode"
         [moveAllToSelectedButton]="moveAllToSelectedButton"
         [moveAllToAllButton]="moveAllToAllButton"
         [moveToAllButton]="moveToAllButton"
         [moveToSelectedButton]="moveToSelectedButton"
         [showSearchNumber]="showSearchNumber"

         (selectAllElement)="onSelectAllElement($event)"
         (selectSelectedElement)="onSelectSelectedElement($event)"
         (searchOverAll)="onSearchOverAll($event)"
         (searchOverSelected)="onSearchOverSelected($event)"
         (moveToSelected)="onMoveToSelected($event)"
         (moveToAll)="onMoveToAll($event)"
         (moveAllToSelected)="onMoveAllToSelected($event)"
         (moveAllToAll)="onMoveAllToAll($event)"
         (numItemsSelectedAll)="numItemsSelectedAll.emit($event)"
         (numItemsSelectedSelected)="numItemsSelectedSelected.emit($event)"
         (selectExtraLabelAll)="selectExtraLabelAll.emit($event)"
         (selectExtraLabelSelected)="selectExtraLabelAll.emit($event)"
         (selectItemNonEditable)="selectItemNonEditable.emit($event)"
         (changeOrderAll)="changeOrderAll.emit($event)"
         (changeOrderSelected)="changeOrderSelected.emit($event)"
         (scrollBottomAll)="scrollBottomAll.emit($event)"
      ></st-two-list-selection-view>
   `,
   changeDetection: ChangeDetectionStrategy.OnPush
})
@StEgeo()
export class StTwoListSelectionComponent extends StTwoListSelection implements OnInit, OnChanges {

   @Input() @StRequired('editable') allElements: StTwoListSelectionElement[];
   @Input() config: StTwoListSelectionConfig;
   @Input() editable: boolean = false;
   @Input() hasAllListAll?: boolean = false;
   @Input() hasAllListSelected?: boolean = false;
   @Input() hasSearch: boolean = true;
   @Input() isLoading?: boolean = false;
   @Input() itemAll?: StTwoListSelectionElement;
   @Input() mode: 'compact' | 'normal' = 'normal';
   @Input() moveAllToSelectedButton: boolean = true;
   @Input() moveAllToAllButton: boolean = true;
   @Input() moveToSelectedButton: boolean = true;
   @Input() moveToAllButton: boolean = true;
   @Input() orderAllOptions: StDropDownMenuItem[] = [];
   @Input() orderSelectedOptions: StDropDownMenuItem[] = [];
   @Input() @StRequired() qaTag: string;
   @Input() @StRequired() selectedElements: StTwoListSelectionElement[];
   @Input() showSearchNumber: number;
   @Input() sortBy: 'id' | 'name' | 'notOrder' = 'id';

   @Output() change: EventEmitter<any> = new EventEmitter<any>();
   @Output() changeOrderAll: EventEmitter<any> = new EventEmitter<any>();
   @Output() changeOrderSelected: EventEmitter<any> = new EventEmitter<any>();
   @Output() numItemsSelectedAll: EventEmitter<any> = new EventEmitter<any>();
   @Output() numItemsSelectedSelected: EventEmitter<any> = new EventEmitter<any>();
   @Output() scrollBottomAll: EventEmitter<any> = new EventEmitter<any>();
   @Output() searchOverAll: EventEmitter<string> = new EventEmitter<string>();
   @Output() searchOverSelected: EventEmitter<string> = new EventEmitter<string>();
   @Output() selectedElementsChange: EventEmitter<StTwoListSelectionElement[]> = new EventEmitter<StTwoListSelectionElement[]>();
   @Output() selectExtraLabelAll: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();
   @Output() selectExtraLabelSelected: EventEmitter<StTwoListSelectExtraLabelAction> = new EventEmitter<StTwoListSelectExtraLabelAction>();
   @Output() selectItemNonEditable: EventEmitter<StTwoListSelectionElement[]> = new EventEmitter<StTwoListSelectionElement[]>();

   constructor(private cd: ChangeDetectorRef) {
      super(cd);
   }

   ngOnInit(): void {
      this.init(
         this.allElements,
         this.selectedElements,
         this.selectedElementsChange,
         this.sortBy,
         this.hasAllListAll,
         this.hasAllListSelected,
         this.itemAll
      );
   }

   ngOnChanges(changes: SimpleChanges): void {
      this.checkChanges(changes, 'allElements', 'selectedElements');
      this.change.emit();
   }

   get allList(): StTwoListSelectionElement[] {
      return this.copyAllElement;
   }

   get selectedList(): StTwoListSelectionElement[] {
      return this.copySelectedElements;
   }
}
