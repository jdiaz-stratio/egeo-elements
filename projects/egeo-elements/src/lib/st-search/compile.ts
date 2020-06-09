import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StSearchElementModule } from './st-search.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StSearchElementModule)
    .catch(err => console.error(err));
