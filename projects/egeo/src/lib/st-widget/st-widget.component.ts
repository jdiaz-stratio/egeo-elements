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

import { Component, Input, ElementRef } from '@angular/core';
import { StEgeo, StRequired } from './../decorators/require-decorators';

/**
 * @description {Component} [Widget]
 *
 * Widget component is a container box for any type of widgets
 *
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-widget title="widget demo" [loading]="isLoading" overwriteLoadingData="Loading..."></st-widget>
 * ```
 *
 */

@Component({
   selector: 'st-widget',
   templateUrl: 'st-widget.component.html',
   styleUrls: ['st-widget.component.scss']
})

export class StWidgetComponent {
   /** @Input {string} [title] title will be displayed in the widget header */
   @Input() title: string;
   /** @Input {bolean} [loading] when true, loading stauts is displayed    */
   @Input() loading: boolean = false;
   /** @Input {string} [title] text "loading data" will be overwritten with this parameter */
   @Input() overwriteLoadingData: string = 'Loading data';
   /** @Input {boolean} [displaySettingsButton] Boolean to display or hide the settings button */
   @Input() displaySettingsButton: boolean = true;

   private _draggable: boolean = true;
   private _dragging: boolean = false;

   constructor(private el: ElementRef) {
   }

   get widgetId(): string | null {
      return this.el.nativeElement.id ? this.el.nativeElement.id + '-widget' : undefined;
   }

   /** @Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget */
   @Input()
   public get draggable(): boolean {
      return this._draggable;
   }
   public set draggable(draggable: boolean) {
      this._draggable = draggable;
   }

   public get dragging(): boolean {
      return this._dragging;
   }

   public updateDragging(value: boolean): void {
      this._dragging = value;
   }


}
