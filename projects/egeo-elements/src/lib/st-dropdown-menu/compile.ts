import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StDropdownMenuElementModule } from './st-dropdown-menu.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StDropdownMenuElementModule)
    .catch(err => console.error(err));
