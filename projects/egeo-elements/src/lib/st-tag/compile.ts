import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StTagElementModule } from './st-tag.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StTagElementModule)
    .catch(err => console.error(err));
