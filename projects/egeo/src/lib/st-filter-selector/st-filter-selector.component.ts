/*
 * © 2017 Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software – including all its source code – contains proprietary
 * information of Stratio Big Data Inc., Sucursal en España and
 * may not be revealed, sold, transferred, modified, distributed or
 * otherwise made available, licensed or sublicensed to third parties;
 * nor reverse engineered, disassembled or decompiled, without express
 * written authorization from Stratio Big Data Inc., Sucursal en España.
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StDropDownMenuItem, StDropDownVisualMode } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StPopPlacement } from '../st-pop/st-pop.model';

/**
 * @description {Component} [Filter selector]
 *
 * The filter selector allows display a filter with a list of options
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-filter-selector
 *    [filterList]="filter"
 *    [openFilter]="openFilter"
 *    [selected]="selectedFilter"
 *    (clickFilter)="onFilter($event)"
 *    (changeFilterVisibility)="onChangeFilterVisibility()"
 *    (closeFilter)="onCloseFilter()">
 * </st-filter-selector>
 * ```
 *
 */
@Component({
   selector: 'st-filter-selector',
   templateUrl: './st-filter-selector.template.html',
   styleUrls: ['./st-filter-selector.style.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StFilterSelectorComponent implements OnInit {
   /** @Input {boolean} [openFilter=false] This boolean is needed to specify the status of the filter (open or closed) */
   @Input() openFilter: boolean = false;
   /** @Input {StDropDownMenuItem[]} [filterList=] List of options */
   @Input() filterList: StDropDownMenuItem[];
   /** @Input {StDropDownMenuItem} [selected=] Selected option */
   @Input() selected: StDropDownMenuItem;
   /** @Input {boolean} [menuAlignedToRight=false] Boolean to indicate if menu has to be displayed aligned to the right */
   @Input() menuAlignedToRight: boolean = false;
   /** @Output {StDropDownMenuItem} [clickFilter=] Event emitted when an option is selected */
   @Output() clickFilter: EventEmitter<StDropDownMenuItem> = new EventEmitter<StDropDownMenuItem>();
   /** @Output {boolean} [changeFilterVisibility=] Event emitted when visibility of options changes */
   @Output() changeFilterVisibility: EventEmitter<boolean> = new EventEmitter<boolean>();
   /** @Output {boolean} [closeFilter=] Event emitted when option menu is closed */
   @Output() closeFilter: EventEmitter<boolean> = new EventEmitter<boolean>();

   public readonly sectionMenuVisualMode: StDropDownVisualMode = StDropDownVisualMode.MENU_LIST;
   public menuPlacement: StPopPlacement;

   ngOnInit(): void {
      this.menuPlacement = this.menuAlignedToRight ? StPopPlacement.BOTTOM_END : StPopPlacement.BOTTOM_START;
      setTimeout(() => {
         if (!this.selected && this.filterList && this.filterList.length) {
            this.clickFilter.emit(this.filterList[0]);
         }
      });
   }

   onClickFilter(selectedFilter: StDropDownMenuItem): void {
      this.clickFilter.emit(selectedFilter);
   }

   onChangeFilterVisibility(): void {
      this.changeFilterVisibility.emit(!this.openFilter);
   }

   onCloseFilter(): void {
      this.closeFilter.emit(true);
   }
}
