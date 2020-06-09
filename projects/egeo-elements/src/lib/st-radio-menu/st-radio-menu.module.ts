import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StRadioComponent, StRadioMenuModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StRadioMenuModule],
    entryComponents: [StRadioComponent]
})
export class StRadioMenuElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StRadioComponent, 'st-radio-menu');
    }
}
