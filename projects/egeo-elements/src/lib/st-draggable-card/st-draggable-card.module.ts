import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {StDraggableCardComponent, StDraggableCardModule} from '@stratio/egeo';

@NgModule({
    imports: [BrowserModule, StDraggableCardModule],
    entryComponents: [StDraggableCardComponent]
})
export class StDraggableCardElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, StDraggableCardComponent, 'st-draggable-card');
    }
}
