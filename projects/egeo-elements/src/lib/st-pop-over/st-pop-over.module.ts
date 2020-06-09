import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StPopOverComponent, StPopOverModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StPopOverModule],
    entryComponents: [StPopOverComponent]
})
export class StPopOverElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StPopOverComponent, 'st-pop-over');
    }
}
