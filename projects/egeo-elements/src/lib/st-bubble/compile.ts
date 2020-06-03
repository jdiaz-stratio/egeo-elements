import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StBubbleElementModule } from './st-bubble.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StBubbleElementModule)
    .catch(err => console.error(err));
