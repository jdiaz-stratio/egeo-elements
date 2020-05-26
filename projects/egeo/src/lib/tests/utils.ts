import { ComponentFixture, TestBed } from '@angular/core/testing';
export class TestUtils {

   static overrideComponentTemplate(componentClass: any, customTemplate?: string): Promise<ComponentFixture<any>> {
      if (customTemplate) {
         TestBed.overrideComponent(componentClass, {
            set: {
               template: customTemplate
            }
         });
      }
      return TestBed.compileComponents();
   }

}
