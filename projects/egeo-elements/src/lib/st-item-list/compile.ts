import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StItemListElementModule } from './st-item-list.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StItemListElementModule)
    .catch(err => console.error(err));
