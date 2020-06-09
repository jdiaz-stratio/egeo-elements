import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StFormListElementModule } from './st-form-list.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StFormListElementModule)
    .catch(err => console.error(err));
