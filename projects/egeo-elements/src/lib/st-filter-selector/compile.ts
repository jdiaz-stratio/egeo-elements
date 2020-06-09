import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StFilterSelectorElementModule } from './st-filter-selector.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StFilterSelectorElementModule)
    .catch(err => console.error(err));
