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
   selector: 'general-layout',
   templateUrl: './general.html',
   styleUrls: ['./general.scss']
})
export class GeneralComponent {

   public menu: DemoSideMenu[] = [
      {label: 'About', url: '/general/about'},
      {label: 'Getting Started', url: '/general/getting-started'},
      {label: 'Changelog', url: '/general/changelog'}
   ];

}
