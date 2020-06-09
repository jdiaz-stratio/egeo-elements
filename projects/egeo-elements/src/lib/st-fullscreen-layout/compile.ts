import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StFullscreenLayoutElementModule } from './st-fullscreen-layout.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StFullscreenLayoutElementModule)
    .catch(err => console.error(err));
