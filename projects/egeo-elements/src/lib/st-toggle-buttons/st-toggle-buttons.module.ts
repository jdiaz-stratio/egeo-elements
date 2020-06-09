import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StToggleButtonsComponent, StToggleButtonsModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StToggleButtonsModule],
    entryComponents: [StToggleButtonsComponent]
})
export class StToggleButtonsElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StToggleButtonsComponent, 'st-toggle-buttons');
    }
}
