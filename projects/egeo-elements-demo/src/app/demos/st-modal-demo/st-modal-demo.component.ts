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
import { Component, AfterViewInit, ViewContainerRef, ViewChild } from '@angular/core';
import {
   StModalService,
   StModalConfig,
   StModalButton,
   StModalResponse,
   StModalBasicType
} from '@stratio/egeo';

import { StDemoLoggerSeverity } from '../shared/st-demo-logger/st-demo-loger.model';
import { StModalDemoTestComponent } from './st-modal-test-demo.component';
import { StModalDemoTestButtonsComponent } from './st-modal-test-buttons-demo.component';
import { StModalDemoTestFullscreenLayoutComponent } from './st-modal-test-fullscreen-layout.component';
import { StDemoLoggerService } from '../shared/st-demo-logger/st-demo-logger.service';

@Component({
   selector: 'modal-example',
   templateUrl: './st-modal-demo.component.html'
})

export class StModalDemoComponent implements AfterViewInit {
   @ViewChild('loadModal', { read: ViewContainerRef, static: false }) target: ViewContainerRef;
   public configDoc: any = {
      html: 'demo/st-modal-demo/st-modal-demo.component.html',
      ts: 'demo/st-modal-demo/st-modal-demo.component.ts',
      component: 'lib/st-modal/st-modal.component.ts'
   };

   private buttons: StModalButton[] = [
      { label: 'Cancel', classes: 'button-secondary', responseValue: StModalResponse.NO, closeOnClick: true },
      { label: 'Confirm', classes: 'button-primary', responseValue: StModalResponse.YES, closeOnClick: true }
   ];

   constructor(private _modalService: StModalService, private _logger: StDemoLoggerService) {
      this._logger.maxMessages = 15;
   }

   ngAfterViewInit(): void {
      this._modalService.container = this.target;
   }

   showModal(): void {

      const message: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      porttitor non nulla quis rhoncus. Cras vitae pretium arcu, ac semper justo.`;

      this._modalService.show({
         modalTitle: 'Title',
         buttons: this.buttons,
         messageTitle: 'Copy',
         message: message,
         maxWidth: 600,
         minWidth: 400,
         showCloseBtn: true
      }).subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   showModalWithHtml(): void {
      const html: string = `
      <h1 class="st-modal-example-test-class-h1">Main title<h1>
      <br>
      <p>paragraph of some text between p html tags, and now a list:</p>
      <br>
      <div>
         <ul class="st-modal-example-test-class-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
         </ul>
      </div>
      `;
      this._modalService.show({
         modalTitle: 'With HTML',
         buttons: this.buttons,
         html: html,
         maxWidth: 600,
         minWidth: 400
      }).subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   showModalWithComponent(): void {
      this._modalService.show({
         modalTitle: 'With component',
         buttons: this.buttons,
         maxWidth: 600,
         minWidth: 400
      }, StModalDemoTestComponent)
         .subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   showModalWithComponentAndIcon(): void {
      this._modalService.show({
         modalTitle: 'With component',
         buttons: this.buttons,
         maxWidth: 600,
         minWidth: 400,
         iconStatus: 'icon-home'
      }, StModalDemoTestComponent)
         .subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   showModalWithoutButtons(): void {
      this._modalService.show({
         modalTitle: 'With component',
         maxWidth: 600,
         minWidth: 400,
         outputs: { close: this.onCloseModalWithoutButtons.bind(this) }
      }, StModalDemoTestButtonsComponent)
         .subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));

   }

   showFullscreenModal(): void {
      const message: string = 'Are you sure of delete this?';

      this._modalService.show({
         modalTitle: 'Title for this full-screen modal view',
         buttons: this.buttons,
         fullscreen: true
      }, StModalDemoTestComponent)
         .subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   showFullscreenModalWithComponentAndWithoutContent(): void {
      this._modalService.show({
         modalTitle: 'With component',
         maxWidth: 600,
         minWidth: 400,
         fullscreen: true,
         empty: true,
         outputs: { close: this.onCloseModalWithoutButtons.bind(this) }
      }, StModalDemoTestFullscreenLayoutComponent)
         .subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   showBasic(type: string): void {
      this._modalService.showBasicModal(
         this.getBasicType(type),
         this.getTitle(type),
         'Title',
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor non nulla quis rhoncus. Cras vitae pretium arcu, ac semper justo.',
         this.getAcceptButton(type),
         this.getCancelButton(type)
      ).subscribe((response) => this._logger.notifyAlert(StDemoLoggerSeverity.INFO, this.evaluateResponse(response)));
   }

   private onCloseModalWithoutButtons(event: Event): void {
      this._modalService.close();
   }

   private evaluateResponse(response: StModalResponse): string {
      switch (response) {
         case StModalResponse.YES: return 'Click on confirm';
         case StModalResponse.NO: return 'Click on cancel';
         case StModalResponse.CLOSE: return 'Get event close';
         default: return 'Error response not found';
      }
   }

   private getTitle(text: string): string {
      switch (text) {
         case 'delete': return 'Delete';
         case 'warning': return 'Warning';
         case 'confirm': return 'Confirmation';
         case 'info': return 'Info';
         default: return '';
      }
   }

   private getAcceptButton(text: string): string {
      switch (text) {
         case 'delete': return 'Delete';
         case 'warning': return 'Accept';
         case 'confirm': return 'Accept';
         case 'info': return 'Accept';
         default: return '';
      }
   }

   private getCancelButton(text: string): string {
      switch (text) {
         case 'delete': return 'Cancel';
         case 'warning': return 'Cancel';
         case 'confirm': return 'Not now';
         case 'info': return '';
         default: return '';
      }
   }

   private getBasicType(text: string): StModalBasicType {
      switch (text) {
         case 'delete': return StModalBasicType.DELETE;
         case 'warning': return StModalBasicType.WARNING;
         case 'confirm': return StModalBasicType.CONFIRM;
         case 'info': return StModalBasicType.INFO;
         default: return StModalBasicType.INFO;
      }
   }
}
