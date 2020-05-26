import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

export abstract class ElementModule {
  constructor(injector: Injector, component: InstanceType<any>, name: string) {
    // Create Angular element
    const ngElement = createCustomElement(component, {
      injector
    });

    // register Web Component in a browser
    customElements.define(`${name}`, ngElement);
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap() { }
}
