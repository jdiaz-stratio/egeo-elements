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

import { Component, Input } from '@angular/core';

/**
 * @description {Component} [Zero Page]
 *
 * Zero page is displayed when there are no results to show in a table
 *
 * @example
 *
 * {html}
 *
 * ```
 *      <st-zero-page class="zero-page-example"
 *      title="There are no Variables created yet "
 *      info="Variables help you to have consistent values through your Quality Rules, Attributes…"
 *      imageSource="assets/images/variable-icon.svg">
 *      </st-zero-page>
 * ```
 */
@Component({
   selector: 'st-zero-page',
   templateUrl: 'st-zero-page.template.html',
   styleUrls: ['st-zero-page.style.scss']
})

export class StZeroPageComponent {
   /** @Input {string} [title=''] Title message */
   @Input() title: string;
   /** @Input {string} [info=''] Info message */
   @Input() info: string;
   /** @Input {string} [imageSource=''] Image source path */
   @Input() imageSource: string;
}
