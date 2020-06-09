import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StTextareaComponent, StTextareaModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StTextareaModule],
    entryComponents: [StTextareaComponent]
})
export class StTextareaElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StTextareaComponent, 'st-textarea');
    }
}
