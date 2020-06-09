import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StTagInputComponent, StTagInputModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StTagInputModule],
    entryComponents: [StTagInputComponent]
})
export class StTagInputElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StTagInputComponent, 'st-tag-input');
    }
}
