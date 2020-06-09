import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StZeroPageElementModule } from './st-zero-page.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StZeroPageElementModule)
    .catch(err => console.error(err));
