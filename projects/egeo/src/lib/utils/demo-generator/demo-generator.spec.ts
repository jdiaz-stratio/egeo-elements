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
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

// Component
import { StDemoGenerator } from './demo-generator';
import { DemoGeneratorProviders } from './demo-generator.interface';

@Component({
   selector: 'st-demo-generator-test',
   template: `
      <h1>Hello World</h1>
      <h2>{{name}}</h2>
      <div (click)="onClick()" id="st-modal-test-out">Out</div>
   `
})
export class DemoGeneratorTestComponent {
   @Input() name: string;
   @Output() notify: EventEmitter<string> = new EventEmitter<string>();

   onClick(): void {
      this.notify.emit(this.name);
   }
}


let comp: StDemoGenerator;
let fixture: ComponentFixture<StDemoGenerator>;
let de: DebugElement;


let config: DemoGeneratorProviders = {
   inputs: { name: 'test' },
   outputs: { notify: '' },
   components: [DemoGeneratorTestComponent]
};

describe('DemoGenerator', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [],
         declarations: [StDemoGenerator, DemoGeneratorTestComponent],
         providers: [
            { provide: DemoGeneratorProviders, useValue: config }
         ]
      });

      TestBed.overrideModule(BrowserDynamicTestingModule, {
         set: { entryComponents: [DemoGeneratorTestComponent] }
      }).compileComponents();  // compile template and css

   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StDemoGenerator);
      comp = fixture.componentInstance;
   });

   it('should be init', () => {
      fixture.detectChanges();
      expect(comp.inputs).toEqual(config.inputs);
      expect(comp.outputs).toEqual(config.outputs);
      expect(comp.component).toEqual(config.components[0]);
   });

   it('should be init empty', () => {
      comp.inputs = undefined;
      comp.outputs = undefined;
      comp.component = undefined;
      fixture.detectChanges();

      let div: DebugElement = fixture.debugElement.query(By.css('st-demo-generator-test'));
      expect(div).toBeNull();
   });


   it('should load a component', () => {
      fixture.detectChanges();
      let nameProp: string = 'name';

      let div: HTMLDivElement = fixture.debugElement.query(By.css('st-demo-generator-test')).nativeElement;
      expect(div.children.length).toEqual(3);
      expect(div.children[0]).toBeDefined();
      expect(div.children[1]).toBeDefined();
      expect(div.children[0].textContent).toEqual('Hello World');
      expect(div.children[1].textContent).toEqual(config.inputs[nameProp]);
   });

   it('should try to load a component twice', () => {
      fixture.detectChanges();
      comp.ngAfterViewInit();
      fixture.detectChanges();

      let div: HTMLDivElement = fixture.debugElement.query(By.css('st-demo-generator-test')).nativeElement;
      expect(div.children.length).toEqual(3);
      expect(div.children[0]).toBeDefined();
      expect(div.children[0].textContent).toEqual('Hello World');
   });


   it('should bind inputs and outputs to component', () => {
      let name: string = 'Test Name';
      let outFunc = jasmine.createSpy('outFunc');
      comp.inputs = { name, notAnInput: '' };
      comp.outputs = { notify: outFunc, notAnOutput: '' };
      fixture.detectChanges();

      let div: HTMLDivElement = fixture.debugElement.query(By.css('st-demo-generator-test')).nativeElement;
      expect(div.children.length).toEqual(3);
      expect(div.children[0]).toBeDefined();
      expect(div.children[1]).toBeDefined();
      expect(div.children[2]).toBeDefined();
      expect(div.children[0].textContent).toEqual('Hello World');
      expect(div.children[1].textContent).toEqual(name);

      let divOut: HTMLDivElement = fixture.debugElement.query(By.css('#st-modal-test-out')).nativeElement;
      expect(divOut).toBeDefined();
      divOut.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(outFunc).toHaveBeenCalled();
      expect(outFunc).toHaveBeenCalledWith(name);
   });
});
