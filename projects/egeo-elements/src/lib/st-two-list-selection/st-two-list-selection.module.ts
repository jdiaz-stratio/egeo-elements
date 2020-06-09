import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StTwoListSelectionComponent, StTwoListSelectionModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StTwoListSelectionModule],
    entryComponents: [StTwoListSelectionComponent]
})
export class StTwoListSelectionElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StTwoListSelectionComponent, 'st-two-list-selection');
    }
}
