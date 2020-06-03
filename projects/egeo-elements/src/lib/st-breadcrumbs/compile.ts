import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { StBreadcrumbsElementModule } from './st-breadcrumbs.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(StBreadcrumbsElementModule)
    .catch(err => console.error(err));
