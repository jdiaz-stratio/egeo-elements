import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StModalComponent, StModalModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StModalModule],
    entryComponents: [StModalComponent]
})
export class StModalElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StModalComponent, 'st-modal');
    }
}
