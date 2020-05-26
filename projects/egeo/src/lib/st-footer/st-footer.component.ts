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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { StFooterLink } from './st-footer.model';

@Component({
  selector: 'st-footer',
  templateUrl: './st-footer.component.html',
  styleUrls: ['./st-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StFooterComponent {

  @Input() rightsText: string;
  @Input() links: StFooterLink[] = [];
  @Input() qaTag: string;
  @Input() image: string;
  @Output() link: EventEmitter<StFooterLink> = new EventEmitter<StFooterLink>();

  constructor(
     private router: Router
  ) { }

  goToLink(link: StFooterLink): void {
     if (link.url) {
        window.open(link.url, '_blank');
     }

     if (link.router) {
        this.router.navigate([link.router]);
     }

     this.link.emit(link);
  }


}
