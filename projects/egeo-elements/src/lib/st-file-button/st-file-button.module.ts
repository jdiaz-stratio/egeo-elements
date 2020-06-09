import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StFileButtonComponent, StFileButtonModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StFileButtonModule],
    entryComponents: [StFileButtonComponent]
})
export class StFileButtonElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StFileButtonComponent, 'st-file-button');
    }
}
