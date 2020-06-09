import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StProgressBarElementModule } from './st-progress-bar.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StProgressBarElementModule)
    .catch(err => console.error(err));
