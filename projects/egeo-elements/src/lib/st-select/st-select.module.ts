import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StSelectComponent, StSelectModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StSelectModule],
    entryComponents: [StSelectComponent]
})
export class StSelectElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StSelectComponent, 'st-select');
    }
}
