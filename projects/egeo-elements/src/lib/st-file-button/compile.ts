import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StFileButtonElementModule } from './st-file-button.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StFileButtonElementModule)
    .catch(err => console.error(err));
