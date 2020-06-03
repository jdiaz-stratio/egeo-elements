import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StColorPickerComponent, StColorPickerModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StColorPickerModule],
    entryComponents: [StColorPickerComponent]
})
export class StColorPickerElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StColorPickerComponent, 'st-color-picker');
    }
}
