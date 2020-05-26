import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StTableComponent, StTableModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StTableModule],
    entryComponents: [StTableComponent]
})
export class StTableElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StTableComponent, 'st-table');
    }
}
