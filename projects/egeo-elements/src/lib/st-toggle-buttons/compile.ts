import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StToggleButtonsElementModule } from './st-toggle-buttons.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StToggleButtonsElementModule)
    .catch(err => console.error(err));
