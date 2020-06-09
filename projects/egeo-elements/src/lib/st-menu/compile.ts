import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StMenuElementModule } from './st-menu.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StMenuElementModule)
    .catch(err => console.error(err));
