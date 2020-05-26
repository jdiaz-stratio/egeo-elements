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
import { Component, Input, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StPopComponent } from './st-pop.component';
import { StPopPlacement } from './st-pop.model';
import { StWindowRefService } from '../utils/window-service';

class WindowRefMock {
   get nativeWindow(): any {
      return window;
   }
}

@Component({
   selector: 'test-component',
   template: `
      <div style="height:100px; overflow:auto; max-height: 60px; width: 100px">
         <st-pop style="height:1000px; display: block; width: 200px" #popComponent [hidden]="hidden" [placement]="placement">
            <div pop-button id="button"><button style="height:30px; width:20px">Button</button></div>
            <div pop-content id="content"  >Content</div>
         </st-pop>
      </div>
   `
})
class TestComponent {
   @Input() hidden: boolean = true;
   @Input() placement: StPopPlacement = StPopPlacement.TOP;

   @ViewChild('popComponent', {static: false}) popComponent: StPopComponent;
}

describe('StPopComponent', () => {

   let component: TestComponent;
   let fixture: ComponentFixture<TestComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [StPopComponent, TestComponent],
         providers: [
            { provide: StWindowRefService, useClass: WindowRefMock }
         ]
      })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
   });

   it('should show the content of the pop', () => {
      component.hidden = false;
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('[hidden]')).toBeNull();
   });

   it('should hide the content of the pop', () => {
      component.hidden = true;
      fixture.detectChanges();
      expect(fixture.debugElement.nativeElement.querySelector('[hidden]')).toBeDefined();
   });

   it('should get correct coordinates', () => {
      component.hidden = false;

      component.placement = StPopPlacement.TOP;
      fixture.detectChanges();
      let content: HTMLElement = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(10px, -30px, 0px)');

      component.placement = StPopPlacement.TOP_START;
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(0px, -30px, 0px)');

      component.placement = StPopPlacement.TOP_END;
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(20px, -30px, 0px)');

      component.placement = StPopPlacement.BOTTOM;
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(10px, 0px, 0px)');

      component.placement = StPopPlacement.BOTTOM_START;
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(0px, 0px, 0px)');

      component.placement = StPopPlacement.BOTTOM_END;
      fixture.detectChanges();
      content = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toEqual('translate3d(20px, 0px, 0px)');
   });

   it('should get init without button', () => {
      component.hidden = false;
      let button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#button');
      button.innerHTML = '';

      fixture.detectChanges();
      let content: HTMLElement = fixture.debugElement.nativeElement.querySelector('#content');
      expect(content.style.transform).toBeUndefined();
   });
});
