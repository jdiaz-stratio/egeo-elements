import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StBubbleComponent, StBubbleModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StBubbleModule],
    entryComponents: [StBubbleComponent]
})
export class StBubbleElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StBubbleComponent, 'st-bubble');
    }
}
