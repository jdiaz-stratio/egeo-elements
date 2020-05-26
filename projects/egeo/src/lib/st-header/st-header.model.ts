/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */

import {StDropDownMenuItem} from '../st-dropdown-menu/st-dropdown-menu.interface';
import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';

export class StHeaderMenuOption {
   icon: string; // Icon to show on left of menu label
   label: string; // Menu label to show
   subMenus: StHeaderSubMenuOption[]; // List of submenu options
   link: string;
   external?: boolean;
   openInNewPage?: boolean;
}

export class StHeaderSubMenuOption {
   label: string; // Label to show
   link: string;
   external?: boolean;
   openInNewPage?: boolean;
}

export class StHeaderSelection {
   link: string;
   external?: boolean;
   openInNewPage?: boolean;
}

export class StHeaderMenuItem extends StDropDownMenuItem {
   selection: StHeaderSelection;
}

export class StHeaderMenuOptionSchema {
   icon: string; // Icon to show on left of menu label
   label: TranslateableElement; // Menu label to show
   subMenus: StHeaderSubMenuOptionSchema[]; // List of submenu options
   link: string;
   external?: boolean;
   openInNewPage?: boolean;
}

export class StHeaderSubMenuOptionSchema {
   label: TranslateableElement; // Label to show
   link: string;
   external?: boolean;
   openInNewPage?: boolean;
}
