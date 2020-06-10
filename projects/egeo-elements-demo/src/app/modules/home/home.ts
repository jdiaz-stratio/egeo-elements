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
import { StFooterLink } from '@stratio/egeo';

@Component({
   selector: 'demo-home',
   templateUrl: './home.html',
   styleUrls: ['./home.scss']
})
export class HomeComponent {
   public rightsText: string;
   public links: StFooterLink[] = [];

   constructor() {
      this.rightsText = 'Copyright © 2018 Stratio';
      this.links.push({
            title: 'Github',
            url: 'http://www.github.com/stratio',
            icon: 'icon-github2'
         },
         {
            title: 'Twitter',
            url: 'https://twitter.com/stratiobd',
            icon: 'icon-twitter'
         },
         {
            title: 'Youtube',
            url: 'https://www.youtube.com/channel/UCuzJA_GlT3TQaU5DyRwDOVw',
            icon: 'icon-youtube'
         },
         {
            title: 'Linkedin',
            url: 'https://es.linkedin.com/company/stratiobd',
            icon: 'icon-linkedin'
         }, {
            title: 'Slideshare',
            url: 'https://es.slideshare.net/stratio',
            icon: 'icon-slideshare'
         });
   }
}
