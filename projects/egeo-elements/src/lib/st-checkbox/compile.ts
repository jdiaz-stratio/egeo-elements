import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StCheckboxElementModule } from './st-checkbox.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StCheckboxElementModule)
    .catch(err => console.error(err));
