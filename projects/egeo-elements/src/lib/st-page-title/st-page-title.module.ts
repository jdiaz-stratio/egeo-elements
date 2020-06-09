import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StPageTitleComponent, StPageTitleModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StPageTitleModule],
    entryComponents: [StPageTitleComponent]
})
export class StPageTitleElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StPageTitleComponent, 'st-page-title');
    }
}
