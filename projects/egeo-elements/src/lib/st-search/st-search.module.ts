import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StSearchComponent, StSearchModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StSearchModule],
    entryComponents: [StSearchComponent]
})
export class StSearchElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StSearchComponent, 'st-search');
    }
}
