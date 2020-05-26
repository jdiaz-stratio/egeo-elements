import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StInputComponent, StInputModule} from '@stratio/egeo';
//import {StInputComponent, StInputModule} from '../../../../egeo/src/public_api';

@NgModule({
    imports: [BrowserModule, StInputModule],
    entryComponents: [StInputComponent]
})
export class StInputElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StInputComponent, 'st-input');
    }
}
