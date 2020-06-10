import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StDocsComponent, StDocsModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StDocsModule],
    entryComponents: [StDocsComponent]
})
export class StDocsElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StDocsComponent, 'st-docs');
    }
}
