import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StZeroPageComponent, StZeroPageModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StZeroPageModule],
    entryComponents: [StZeroPageComponent]
})
export class StZeroPageElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StZeroPageComponent, 'st-zero-page');
    }
}
