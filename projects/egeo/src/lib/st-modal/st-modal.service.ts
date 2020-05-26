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
   ComponentFactory,
   ComponentFactoryResolver,
   ComponentRef,
   Injectable,
   Type,
   ViewContainerRef
} from '@angular/core';
import { Observable ,  Subject } from 'rxjs';

/* local dependencies */
import { StModalComponent } from './st-modal.component';
import {
   StModalButton,
   StModalConfig,
   StModalResponse,
   StModalButtonResponse,
   StModalBasicType
} from './st-modal.model';

@Injectable()
export class StModalService {

   private _containerRef: ViewContainerRef = undefined;
   private dynamicModal: ComponentRef<StModalComponent> = undefined;
   private notifyButtonInteraction: Subject<StModalResponse>;

   constructor(private _cfr: ComponentFactoryResolver) { }

   /* External API */
   set container(container: ViewContainerRef) {
      this._containerRef = container;
   }

   // - Public methods
   show(config: StModalConfig, component?: Type<any>): Observable<StModalResponse> {
      let errors: string[] = this.canCreateModal(config, component);
      if (errors && errors.length > 0) {
         throw new Error(errors.join(' '));
      }
      this.notifyButtonInteraction = new Subject<StModalResponse>();
      this.createModal(this.createConfig(config), component);
      return this.notifyButtonInteraction.asObservable();
   }

   showBasicModal(
      type: StModalBasicType,
      modalTitle: string,
      messageTitle: string,
      message: string,
      okButton: string,
      cancelButton: string = '',
      maxWidth: number = 600,
      minWidth: number = 400
   ): Observable<StModalResponse> {

      const buttons: StModalButton[] = [{
         label: okButton,
         classes: type === StModalBasicType.DELETE ? 'button-critical' : 'button-primary',
         responseValue: StModalResponse.YES,
         closeOnClick: true
      }];

      if (type !== StModalBasicType.INFO) {
         buttons.unshift({
            label: cancelButton,
            classes: type === StModalBasicType.DELETE ? 'button-secondary-gray' : 'button-secondary-line',
            responseValue: StModalResponse.NO,
            closeOnClick: true
         });
      }
      return this.show({
         fullscreen: false,
         message,
         messageTitle,
         modalTitle,
         buttons,
         maxWidth,
         minWidth
      });
   }

   close(): void {
      this.destroy();
   }

   /* INTERNAL METHODS FOR WORK WITH MODALS */
   private createModal(modalConfig: StModalConfig, component?: Type<any>): void {
      let stModalFactory: ComponentFactory<StModalComponent> = this._cfr.resolveComponentFactory(StModalComponent);
      if (stModalFactory) {
         this._containerRef.clear();
         this.dynamicModal = this._containerRef.createComponent<StModalComponent>(stModalFactory);
         this.bindVars(modalConfig, component);
      }
   }

   private destroy(): void {
      if (this.dynamicModal) {
         this.dynamicModal.destroy();
         this.dynamicModal = undefined;
         this.notifyButtonInteraction.next(StModalResponse.CLOSE);
         this.notifyButtonInteraction.complete();
      }
   }

   private bindVars(modalConfig: StModalConfig, component: Type<any>): void {
      this.dynamicModal.instance.component = component;

      this.dynamicModal.instance.click.subscribe(this.notify.bind(this));
      this.dynamicModal.instance.modalConfig = modalConfig;

      this.dynamicModal.changeDetectorRef.detectChanges();
   }

   private notify(buttonResponse: StModalButtonResponse): void {
      this.notifyButtonInteraction.next(buttonResponse.response);
      if (buttonResponse.close) {
         this.close();
      }
   }

   private canCreateModal(config: StModalConfig, component?: Type<any>): string[] {
      let errors: string[] = [];
      if (!this._containerRef) {
         errors.push(`[ERROR]: StModalService => Cant find container, are you sure you declarate in MAIN APP component in html and typescript?`);
      }
      if (this.dynamicModal !== undefined) {
         errors.push(`[ERROR]: StModalService => Can't create modal beacause already exists one. Are you sure that you call close method?)`);
      }
      if (!component && !config.message && !config.html) {
         errors.push(`[ERROR]: StModalService => Can't find message, html or component to show in modal`);
      }
      return errors;
   }

   private createConfig(config: StModalConfig): StModalConfig {
      const defaultConfig: StModalConfig = {
         fullscreen: false,
         inputs: {},
         outputs: {},
         modalTitle: 'Default title',
         messageTitle: 'Default subtitle',
         buttons: [],
         message: undefined,
         html: undefined,
         maxWidth: undefined,
         minWidth: undefined,
         empty: false
      };
      const checkedConfig: StModalConfig = Object.assign({}, defaultConfig, config);
      checkedConfig.buttons = this.checkButtons(checkedConfig.buttons);
      return checkedConfig;
   }

   private checkButtons(buttons: StModalButton[]): StModalButton[] {
      return buttons.map(button => Object.assign({}, { label: 'Button', closeOnClick: false }, button));
   }
}
