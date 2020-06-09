import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StFormComponent, StFormModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StFormModule],
    entryComponents: [StFormComponent]
})
export class StFormElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StFormComponent, 'st-form');
    }
}
