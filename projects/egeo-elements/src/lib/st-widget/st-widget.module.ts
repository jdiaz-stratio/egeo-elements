import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StWidgetComponent, StWidgetModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StWidgetModule],
    entryComponents: [StWidgetComponent]
})
export class StWidgetElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StWidgetComponent, 'st-widget');
    }
}
