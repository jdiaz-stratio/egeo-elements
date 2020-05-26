import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {StSelectElementModule} from './lib/st-select/st-select.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StSelectElementModule)
    .catch(err => console.error(err));
