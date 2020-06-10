import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StDocsElementModule } from './st-docs.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StDocsElementModule)
    .catch(err => console.error(err));
