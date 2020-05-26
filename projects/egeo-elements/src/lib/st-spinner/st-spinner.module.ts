import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StSpinnerComponent, StSpinnerModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StSpinnerModule],
    entryComponents: [StSpinnerComponent]
})
export class StSpinnerElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StSpinnerComponent, 'st-spinner');
    }
}
