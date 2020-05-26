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
import { ChangeDetectionStrategy, Component } from '@angular/core';
/**
 * @description {Component} [Table Cell]
 *
 * This component is designed to be added to the table row component
 *
 * @example
 *
 * {html}
 *
 * ```
 *  <td st-table-cell st-table-row-content>
 *      <!-- CELL CONTENT WILL BE HERE -->
 *  </td>
 * ```
 *
 */

@Component({
   selector: '[st-table-cell]',
   templateUrl: './st-table-cell.component.html',
   styleUrls: ['./st-table-cell.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class StTableCellComponent {
}
