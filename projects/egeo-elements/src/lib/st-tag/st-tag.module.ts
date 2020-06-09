import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StTagComponent, StTagModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StTagModule],
    entryComponents: [StTagComponent]
})
export class StTagElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StTagComponent, 'st-tag');
    }
}
