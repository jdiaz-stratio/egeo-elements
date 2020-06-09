import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StTextareaElementModule } from './st-text-area.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StTextareaElementModule)
    .catch(err => console.error(err));
