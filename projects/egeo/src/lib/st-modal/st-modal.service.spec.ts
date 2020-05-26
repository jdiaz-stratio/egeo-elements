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
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

// Component
import {
   StModalButton,
   StModalConfig,
   StModalResponse,
   StModalButtonResponse,
   StModalBasicType
} from './st-modal.model';
import { StModalService } from './st-modal.service';

@Component({ selector: 'st-modal-test', template: `<h1>Hello World</h1>` }) export class ModalTestComponent { }

let notifySubject: Subject<StModalButtonResponse> = new Subject<StModalButtonResponse>();
let cfr: any;
let containerRef: any;
let clearFunction: any;
let destroyFunction: any;
let detectChangesFunction: any;
let instanceObj: any;

describe('StModal', () => {
   describe('StModalService', () => {
      let service: StModalService;

      beforeEach(() => {
         destroyFunction = jasmine.createSpy('destroy');
         detectChangesFunction = jasmine.createSpy('detectChanges');
         clearFunction = jasmine.createSpy('clear');
         cfr = {
            resolveComponentFactory: jasmine.createSpy('resolveComponentFactory').and.returnValue('fake-resolver')
         };
         instanceObj = {
            click: notifySubject.asObservable(),
            modalConfig: '',
            component: ''
         };

         containerRef = {
            clear: clearFunction,
            createComponent: jasmine.createSpy('createComponent').and.returnValue({
               instance: instanceObj,
               destroy: destroyFunction,
               changeDetectorRef: { detectChanges: detectChangesFunction }
            })
         };
      });

      it('should be close modal', () => {
         const responseFunction = jasmine.createSpy('response');
         service = new StModalService(cfr);
         service.container = containerRef;

         service.show({ message: 'message' }).subscribe(responseFunction);

         service.close();
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.CLOSE);

         expect(clearFunction).toHaveBeenCalled();
         expect(containerRef.createComponent).toHaveBeenCalled();
         expect(destroyFunction).toHaveBeenCalled();

         service.container = undefined;
         service.close();
      });

      it('should be thrown an error when init twice', () => {
         service = new StModalService(cfr);
         service.container = containerRef;

         service.show({ message: 'message' });
         try {
            expect(service.show({ message: 'message' })).toThrow();
         } catch (error) {
            expect(error.message).toEqual(
               `[ERROR]: StModalService => Can't create modal beacause already exists one. Are you sure that you call close method?)`
            );
         }
      });

      it('should be thrown an error when init without container', () => {
         service = new StModalService(cfr);

         try {
            expect(service.show({ message: 'message' })).toThrow();
         } catch (error) {
            expect(error.message).toEqual(
               `[ERROR]: StModalService => Cant find container, are you sure you declarate in MAIN APP component in html and typescript?`
            );
         }
      });

      it('should be thrown an error when init without html nor message nor component', () => {
         service = new StModalService(cfr);
         service.container = containerRef;

         try {
            expect(service.show({})).toThrow();
         } catch (error) {
            expect(error.message).toEqual(`[ERROR]: StModalService => Can't find message, html or component to show in modal`);
         }
      });

      it('should be test all posible default configurations', () => {
         service = new StModalService(cfr);
         service.container = containerRef;

         const allConfig: StModalConfig = {
            inputs: {},
            outputs: {},
            modalTitle: 'TITLE',
            buttons: [{ label: 'test button', closeOnClick: false }],
            messageTitle: 'test title',
            message: 'test message',
            html: '<h1>Title</h1>',
            fullscreen: true,
            maxWidth: 600,
            minWidth: 400,
            empty: false
         };

         const minConfig: StModalConfig = {
            message: 'test message',
            modalTitle: 'TITLE',
            messageTitle: 'test title'
         };

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

         service.show(allConfig);
         expect(instanceObj.modalConfig).toEqual(allConfig);

         service.close();
         service.show(minConfig);
         expect(instanceObj.modalConfig).toEqual(Object.assign({}, defaultConfig, minConfig));
      });

      it('should generate a delete confirmation modal config', () => {
         const okButton: string = 'Delete';
         const cancelButton: string = 'Cancel';
         const deleteModalTitle: string = 'delete modal title';
         const deleteMessageTitle: string = 'delete message title';
         const deleteMessage: string = 'delete message';
         service = new StModalService(cfr);
         service.container = containerRef;

         const buttons: StModalButton[] = [
            { label: cancelButton, classes: 'button-secondary-gray', responseValue: StModalResponse.NO, closeOnClick: true },
            { label: okButton, classes: 'button-critical', responseValue: StModalResponse.YES, closeOnClick: true }
         ];

         const deleteConfig: StModalConfig = {
            fullscreen: false,
            inputs: {},
            outputs: {},
            modalTitle: deleteModalTitle,
            messageTitle: deleteMessageTitle,
            buttons: buttons,
            message: deleteMessage,
            html: undefined,
            maxWidth: 600,
            minWidth: 400,
            empty: false
         };

         service.showBasicModal(StModalBasicType.DELETE, deleteModalTitle, deleteMessageTitle, deleteMessage, okButton, cancelButton, 600, 400);
         expect(instanceObj.modalConfig).toEqual(Object.assign({}, deleteConfig, { maxWidth: 600 }));
         expect(instanceObj.modalConfig).toEqual(Object.assign({}, deleteConfig, { minWidth: 400 }));

      });

      it('should test if resolve component factory return undefined', () => {
         let mycfr: any = { resolveComponentFactory: jasmine.createSpy('resolveComponentFactory').and.returnValue(undefined) };
         service = new StModalService(mycfr);
         service.container = containerRef;

         service.show({ message: 'message' });

         expect(clearFunction).toHaveBeenCalledTimes(0);
         expect(containerRef.createComponent).toHaveBeenCalledTimes(0);
      });


      it('should be manage buttons response', () => {
         service = new StModalService(cfr);
         service.container = containerRef;

         let responseFunction = jasmine.createSpy('response');
         service.show({ message: 'message' }).subscribe(responseFunction);

         notifySubject.next({ response: StModalResponse.YES, close: false });
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.YES);

         notifySubject.next({ response: StModalResponse.NO, close: false });
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.NO);
      });

      it('should be manage buttons response with close on accept', () => {
         service = new StModalService(cfr);
         service.container = containerRef;

         let responseFunction = jasmine.createSpy('response');
         service.show({ message: 'message' }).subscribe(responseFunction);

         notifySubject.next({ response: StModalResponse.NO, close: false });
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledTimes(1);
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.NO);

         notifySubject.next({ response: StModalResponse.YES, close: true });
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledTimes(3); // One for yes and one for close
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.YES);
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.CLOSE);
      });

      it('should be manage buttons response with close when close modal', () => {
         service = new StModalService(cfr);
         service.container = containerRef;

         let responseFunction = jasmine.createSpy('response');
         service.show({ message: 'message' }).subscribe(responseFunction);

         service.close();
         expect(responseFunction).toHaveBeenCalled();
         expect(responseFunction).toHaveBeenCalledTimes(1);
         expect(responseFunction).toHaveBeenCalledWith(StModalResponse.CLOSE);
      });
   });
});
