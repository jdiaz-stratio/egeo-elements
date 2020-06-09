import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StLauncherComponent, StLauncherModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StLauncherModule],
    entryComponents: [StLauncherComponent]
})
export class StLauncherElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StLauncherComponent, 'st-launcher');
    }
}
