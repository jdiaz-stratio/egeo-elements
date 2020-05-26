import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StTableElementModule } from './st-table.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StTableElementModule)
    .catch(err => console.error(err));
