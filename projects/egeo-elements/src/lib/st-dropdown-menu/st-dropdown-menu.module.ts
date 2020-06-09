import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StDropdownMenuComponent, StDropdownMenuModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StDropdownMenuModule],
    entryComponents: [StDropdownMenuComponent]
})
export class StDropdownMenuElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StDropdownMenuComponent, 'st-dropdown-menu');
    }
}
