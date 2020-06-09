import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StVerticalTabsComponent, StVerticalTabsModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StVerticalTabsModule],
    entryComponents: [StVerticalTabsComponent]
})
export class StVerticalTabsElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StVerticalTabsComponent, 'st-vertical-tabs');
    }
}
