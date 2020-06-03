import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StCheckboxModule, StCheckboxComponent} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StCheckboxModule],
    entryComponents: [StCheckboxComponent]
})
export class StCheckboxElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StCheckboxComponent, 'st-checkbox');
    }
}
