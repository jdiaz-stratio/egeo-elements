import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StModal2Component, StModal2Module} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StModal2Module],
    entryComponents: [StModal2Component]
})
export class StModal2ElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StModal2Component, 'st-modal2');
    }
}
