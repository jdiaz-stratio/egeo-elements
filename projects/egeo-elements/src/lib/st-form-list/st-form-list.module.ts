import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StFormListComponent, StFormListModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StFormListModule],
    entryComponents: [StFormListComponent]
})
export class StFormListElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StFormListComponent, 'st-form-list');
    }
}
