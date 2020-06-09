import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StTwoListSelectionElementModule } from './st-two-list-selection.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StTwoListSelectionElementModule)
    .catch(err => console.error(err));
