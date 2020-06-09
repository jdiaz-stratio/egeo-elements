import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StModal2ElementModule } from './st-modal2.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StModal2ElementModule)
    .catch(err => console.error(err));
