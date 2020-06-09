import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StSwitchComponent, StSwitchModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StSwitchModule],
    entryComponents: [StSwitchComponent]
})
export class StSwitchElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StSwitchComponent, 'st-switch');
    }
}
