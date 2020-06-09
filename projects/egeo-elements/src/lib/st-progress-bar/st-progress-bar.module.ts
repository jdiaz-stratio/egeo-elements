import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StProgressBarComponent, StProgressBarModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StProgressBarModule],
    entryComponents: [StProgressBarComponent]
})
export class StProgressBarElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StProgressBarComponent, 'st-progress-bar');
    }
}
