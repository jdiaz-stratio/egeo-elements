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
   selector: 'st-footer-demo',
   templateUrl: 'st-footer-demo.html',
   styleUrls: ['./st-footer-demo.scss']
})
export class StFooterDemoComponent {
   public configDoc: any = {
      html: 'demo/st-footer-demo/st-footer-demo.html',
      ts: 'demo/st-footer-demo/st-footer-demo.ts',
      component: 'lib/st-footer/st-footer.component.ts'
   };

   public rightsText: string;
   public links: Array<StFooterLink> = new Array<StFooterLink>();

   constructor() {
      this.rightsText = 'Copyright © 2018 Stratio';
      this.links.push({
            title: 'Github',
            url: 'http://www.github.com/stratio',
            icon: 'icon-github2'
         },
         {
            title: 'Twitter',
            url: 'http://twitter.es/Stratio',
            icon: 'icon-twitter'
         },
         {
            title: 'Youtube',
            url: 'http://www.yotube.com/stratio',
            icon: 'icon-youtube'
         },
         {
            title: 'Linkedin',
            url: 'http://www.linkedin.es/Stratio',
            icon: 'icon-linkedin'
         });
   }

   onLinkChange(event: MouseEvent): void {
   }
}
