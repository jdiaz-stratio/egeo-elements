import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StSwitchElementModule } from './st-switch.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StSwitchElementModule)
    .catch(err => console.error(err));
