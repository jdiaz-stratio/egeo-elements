import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StHorizontalTabsElementModule } from './st-horizontal-tabs.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StHorizontalTabsElementModule)
    .catch(err => console.error(err));
