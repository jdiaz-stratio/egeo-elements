import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StPageTitleElementModule } from './st-page-title.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StPageTitleElementModule)
    .catch(err => console.error(err));
