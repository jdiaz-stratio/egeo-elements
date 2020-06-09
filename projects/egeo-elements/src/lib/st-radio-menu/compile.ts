import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StRadioMenuElementModule } from './st-radio-menu.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StRadioMenuElementModule)
    .catch(err => console.error(err));
