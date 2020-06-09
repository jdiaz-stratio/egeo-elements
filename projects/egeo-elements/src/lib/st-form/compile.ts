import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StFormElementModule } from './st-form.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StFormElementModule)
    .catch(err => console.error(err));
