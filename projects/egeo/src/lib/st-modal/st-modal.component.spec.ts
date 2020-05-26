import { StWindowRefService } from '../utils/window-service';
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
import { DebugElement } from '@angular/core';
import { Component, EventEmitter, Input, Output, ComponentFactoryResolver, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

// Component
import { StModalComponent } from './st-modal.component';
import { StModalButton, StModalConfig, StModalResponse } from './st-modal.model';

@Component({
   selector: 'st-modal-test',
   template: `
      <h1 id="st-modal-test-message">Hello World</h1>
         <h2 id="st-modal-test-message2">{{name}}</h2>
      <div (click)="onClick()" id="st-modal-test-out">Out</div>
   `
})
export class ModalTestComponent {
   @Input() name: string;
   @Output() notify: EventEmitter<string> = new EventEmitter<string>();

   onClick(): void {
      this.notify.emit(this.name);
   }
}


const message: string = 'Test message';
const html: string = '<span>Test</span>';

const buttons: StModalButton[] = [
   { leftIcon: 'icon-trash', label: 'Yes', classes: 'primary', responseValue: StModalResponse.YES },
   { leftIcon: 'icon-circle-cross', label: 'No', classes: 'secondary', responseValue: StModalResponse.NO }
];

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
   empty: false,
   showCloseBtn: false
};

const windowMock: any = {
   document: {
      body: {
         classList: {
            add: (_: string) => { },
            remove: (_: string) => { }
         }
      }
   },
   screen: {
      width: 0
   }
};

class WindowRefMock {
   get nativeWindow(): any {
      return windowMock;
   }
}

describe('StModal', () => {
   describe('StModalComponent', () => {
      let comp: StModalComponent;
      let fixture: ComponentFixture<StModalComponent>;
      let de: DebugElement;

      beforeEach(async(() => {
         TestBed.configureTestingModule({
            declarations: [StModalComponent, ModalTestComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
               { provide: StWindowRefService, useClass: WindowRefMock }
            ]
         });

         TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: { entryComponents: [ModalTestComponent] }
         }).compileComponents();  // compile template and css
      }));

      beforeEach(() => {
         fixture = TestBed.createComponent(StModalComponent);
         comp = fixture.componentInstance;
      });

      it('should be init', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         fixture.detectChanges();
         expect(comp.buttons).toEqual([]);
         expect(comp.component).toBeUndefined();
         expect(comp.html).toBeUndefined();
         expect(comp.isComplexMessageModal).toBeFalsy();
         expect(comp.isFullscreen).toBeFalsy();
         expect(comp.isMessageModal).toBeTruthy();
         expect(comp.message).toEqual(message);
         expect(comp.title).toEqual(defaultConfig.modalTitle);
         expect(comp.messageTitle).toEqual(defaultConfig.messageTitle);
         expect(comp.showCloseBtn).toEqual(defaultConfig.showCloseBtn);
         expect(comp.modalStyles).toEqual({
            'max-width': '600px',
            'min-width': '400px',
            'width': '400px'
         });
      });

      it('should get if it is fullscreen', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message, fullscreen: true });
         fixture.detectChanges();

         expect(comp.isFullscreen).toBeTruthy();
         comp.modalConfig.fullscreen = false;
         fixture.detectChanges();
         expect(comp.isFullscreen).toBeFalsy();
      });

      it('should get correct width value with space (max width)', inject([StWindowRefService], (windowRef: StWindowRefService) => {
         windowMock.screen.width = 2000;
         comp.modalConfig = Object.assign({}, defaultConfig, { message, maxWidth: 800 });
         fixture.detectChanges();

         expect(comp.modalStyles).toEqual({ 'max-width': '800px', 'min-width': '400px', 'width': '800px'});
      }));

      it('should get correct width value without space (max width)', inject([StWindowRefService], (windowRef: StWindowRefService) => {
         windowMock.screen.width = 500;
         comp.modalConfig = Object.assign({}, defaultConfig, { message, maxWidth: 800 });
         fixture.detectChanges();
         expect(comp.modalStyles).toEqual({ 'max-width': '800px', 'min-width': '400px', 'width': '500px' });
      }));

      it('should get correct width value with space (min width)', inject([StWindowRefService], (windowRef: StWindowRefService) => {
         windowMock.screen.width = 2000;
         comp.modalConfig = Object.assign({}, defaultConfig, { message, minWidth: 400 });
         fixture.detectChanges();

         expect(comp.modalStyles).toEqual({ 'max-width': '600px', 'min-width': '400px', 'width': '600px' });
      }));

      it('should get correct width value without space (min width)', inject([StWindowRefService], (windowRef: StWindowRefService) => {
         windowMock.screen.width = 300;
         comp.modalConfig = Object.assign({}, defaultConfig, { message, minWidth: 400 });
         fixture.detectChanges();
         expect(comp.modalStyles).toEqual({ 'max-width': '600px', 'min-width': '400px', 'width': '400px'});
      }));

      it('should set class to body when modal show and remove on hide', () => {
         spyOn(windowMock.document.body.classList, 'add');
         spyOn(windowMock.document.body.classList, 'remove');

         expect(windowMock.document.body.classList.add).not.toHaveBeenCalled();
         expect(windowMock.document.body.classList.remove).not.toHaveBeenCalled();
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         fixture.detectChanges();

         expect(windowMock.document.body.classList.add).toHaveBeenCalled();
         expect(windowMock.document.body.classList.add).toHaveBeenCalledWith('st-modal-overlay');
         expect(windowMock.document.body.classList.remove).not.toHaveBeenCalled();

         fixture.destroy();
         expect(windowMock.document.body.classList.remove).toHaveBeenCalled();
         expect(windowMock.document.body.classList.remove).toHaveBeenCalledWith('st-modal-overlay');
      });

      it('should get title', () => {
         const newTitle: string = 'New Title';
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         fixture.detectChanges();

         expect(comp.title).toEqual(defaultConfig.modalTitle);
         comp.modalConfig.modalTitle = newTitle;
         fixture.detectChanges();
         expect(comp.title).toEqual(newTitle);
      });

      it('should get buttons', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         comp.modalConfig.buttons = undefined;
         fixture.detectChanges();

         expect(comp.buttons).toEqual([]);
         comp.modalConfig.buttons = [];
         fixture.detectChanges();
         expect(comp.buttons).toEqual([]);

         comp.modalConfig.buttons = buttons;
         fixture.detectChanges();
         expect(comp.buttons).toEqual(buttons);
      });

      it('should get is message modal', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         fixture.detectChanges();
         expect(comp.isMessageModal).toBeTruthy();

         comp.modalConfig.message = undefined;
         comp.modalConfig.html = html;
         fixture.detectChanges();
         expect(comp.isMessageModal).toBeFalsy();
      });

      it('should get is html modal', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         comp.modalConfig.html = undefined;
         fixture.detectChanges();
         expect(comp.isComplexMessageModal).toBeFalsy();

         comp.modalConfig.message = undefined;
         comp.modalConfig.html = '';
         fixture.detectChanges();
         expect(comp.isComplexMessageModal).toBeFalsy();

         comp.modalConfig.html = html;
         fixture.detectChanges();
         expect(comp.isComplexMessageModal).toBeTruthy();
      });

      it('should get html value', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message });
         comp.modalConfig.html = undefined;
         fixture.detectChanges();
         expect(comp.html).toBeUndefined();

         comp.modalConfig.message = undefined;
         comp.modalConfig.html = '';
         fixture.detectChanges();
         expect(comp.html).toEqual('');

         comp.modalConfig.html = html;
         fixture.detectChanges();
         expect(comp.html).toEqual(html);
      });

      it('should get message value', () => {
         comp.modalConfig = Object.assign({}, defaultConfig);
         comp.modalConfig.html = html;
         comp.modalConfig.message = undefined;
         fixture.detectChanges();
         expect(comp.message).toBeUndefined();

         comp.modalConfig.message = '';
         fixture.detectChanges();
         expect(comp.message).toEqual('');

         comp.modalConfig.message = message;
         fixture.detectChanges();
         expect(comp.message).toEqual(message);
      });

      it('should load a component', () => {
         comp.modalConfig = Object.assign({}, defaultConfig, { message: undefined });
         comp.component = ModalTestComponent;
         fixture.detectChanges();

         const messageDE: DebugElement = fixture.debugElement.query(By.css('#st-modal-test-message'));
         expect(messageDE).toBeDefined();
         expect(messageDE.nativeElement).toBeDefined();
         expect(messageDE.nativeElement.textContent).toEqual('Hello World');
      });

      it('should display a cross button if "showCloseBtn" is true', () => {
         spyOn(comp.click, 'emit');

         comp.modalConfig = Object.assign({}, defaultConfig);
         comp.modalConfig.showCloseBtn = true;
         comp.component = ModalTestComponent;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.icon-cross')).not.toBeNull();
         fixture.nativeElement.querySelector('.icon-cross').click();

         expect(comp.click.emit).toHaveBeenCalledWith({response: StModalResponse.CLOSE, close: true});
      });

      it('should not display a cross button if "showCloseBtn" is false', () => {
         comp.modalConfig = Object.assign({}, defaultConfig);
         comp.modalConfig.showCloseBtn = false;

         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.icon-cross')).toBeNull();
      });


      it('should bind inputs and outputs to component', () => {
         const name: string = 'Test Name';
         const outFunc = jasmine.createSpy('outFunc');
         comp.modalConfig = Object.assign({}, defaultConfig);
         comp.component = ModalTestComponent;
         comp.modalConfig.inputs = { name };
         comp.modalConfig.outputs = { notify: outFunc };
         fixture.detectChanges();

         const messageDE: DebugElement = fixture.debugElement.query(By.css('#st-modal-test-message2'));
         expect(messageDE).toBeDefined();
         expect(messageDE.nativeElement).toBeDefined();
         expect(messageDE.nativeElement.textContent).toEqual(name);

         const divOut: HTMLDivElement = fixture.debugElement.query(By.css('#st-modal-test-out')).nativeElement;
         expect(divOut).toBeDefined();
         divOut.dispatchEvent(new Event('click'));
         fixture.detectChanges();
         expect(outFunc).toHaveBeenCalled();
         expect(outFunc).toHaveBeenCalledWith(name);

         comp.ngAfterViewInit();
      });
   });
});
