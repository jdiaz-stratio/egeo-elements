import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StItemListComponent, StItemListModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StItemListModule],
    entryComponents: [StItemListComponent]
})
export class StItemListElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StItemListComponent, 'st-item-list');
    }
}
