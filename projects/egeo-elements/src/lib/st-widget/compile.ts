import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StWidgetElementModule } from './st-widget.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StWidgetElementModule)
    .catch(err => console.error(err));
