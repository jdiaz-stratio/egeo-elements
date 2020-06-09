import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StMenuComponent, StMenuModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StMenuModule],
    entryComponents: [StMenuComponent]
})
export class StMenuElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StMenuComponent, 'st-menu');
    }
}
