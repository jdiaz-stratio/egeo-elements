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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { findIndex } from 'lodash';
import { StHorizontalTab, StHorizontalTabStatus } from './st-horizontal-tabs.model';
import { StEgeo, StRequired } from '../decorators/require-decorators';

/**
 * @description {Component} [Horizontal tabs]
 *
 * The tabs are a navigation component that divides content into separate views hiding the ones that the user is not focused in.
 *
 * @model
 *
 *   [Id, text and optional status of a tab] {./st-horizontal-tabs.model.ts#StStHorizontalTab}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-horizontal-tabs [options]="options" [qaTag]="qaTag">
 * </st-horizontal-tabs>
 * ```
 *
 */
@Component({
   selector: 'st-horizontal-tabs',
   templateUrl: './st-horizontal-tabs.component.html',
   styleUrls: ['./st-horizontal-tabs.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

@StEgeo()
export class StHorizontalTabsComponent implements OnInit {
   /** @Input {StHorizontalTab} [activeOption=''] Current active option */
   @Input() activeOption: StHorizontalTab;
   /** @Input {StHorizontalTab[]} [^options=''] An array of StHorizontalTab objects (see below) that defines the links
    * that will appear and that will be disabled
    */
   @StRequired() @Input() options: StHorizontalTab[];
   /** @Input {string} [qaTag=''] Prefix used to generate the id values for qa tests */
   @Input() qaTag: string;
   /** @Output {StHorizontalTab} [changedOption=''] This event is emitted when active option has changed. It has the
    * active option name as param
    */
   @Output() changedOption: EventEmitter<StHorizontalTab> = new EventEmitter<StHorizontalTab>();


   ngOnInit(): void {
      if (this.options && this.options.length > 0) {
         this.activeOption = this.activeOption || this.options[0];
         this.activateOption(this.activeOption);
      }
   }

   isActive(option: StHorizontalTab): boolean {
      return this.activeOption === option;
   }

   activateOption(option: StHorizontalTab): void {
      this.activeOption = option;
      this.changedOption.emit(option);
   }

   getTabStatus(tab: StHorizontalTab): string {
      return tab.status ? StHorizontalTabStatus[tab.status] : '';
   }
}
