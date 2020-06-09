import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StDraggableCardElementModule } from './st-draggable-card.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StDraggableCardElementModule)
    .catch(err => console.error(err));
