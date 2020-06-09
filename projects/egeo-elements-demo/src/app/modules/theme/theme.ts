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
import { Component } from '@angular/core';

import { DemoSideMenu } from '../../shared/menu/menu.model';

@Component({
   selector: 'theme-layout',
   templateUrl: './theme.html',
   styleUrls: ['./theme.scss']
})
export class ThemeComponent {

   public menu: DemoSideMenu[] = [
      {label: 'Icons', url: '/theme/icons'},
      {label: 'Fonts', url: '/theme/fonts'},
      {label: 'Colors', url: '/theme/colors'},
      {label: 'Grid', url: '/theme/grid'}
   ];

}
