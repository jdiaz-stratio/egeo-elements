import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StPaginationElementModule } from './st-pagination.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StPaginationElementModule)
    .catch(err => console.error(err));
