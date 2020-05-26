import { ElementRef, AfterViewInit } from '@angular/core';
/**
 * @description {Component} [Table Row]
 *
 * This component is designed to be added to the table component
 *
 * @example
 *
 * {html}
 *
 * ```
 *  <tr st-table-row [selected] ="true" [standUpSelected] = "false">
 *      <!-- CELL LIST WILL BE HERE -->
 *  </tr>
 * ```
 *
 */
export declare class StTableRowComponent implements AfterViewInit {
    private elementRef;
    /** @Input {boolean} [selected=''] It indicates if row is selected or not */
    selected: boolean;
    /** @Input {boolean} [standUpSelected=true] It indicates if when row is selected, it has to be displayed stood up */
    standUpSelected: boolean;
    hoverMenu: any;
    rootClass: boolean;
    readonly hasSelectedClass: boolean;
    showHoverMenu: boolean;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    onShowHoverMenu(): void;
    onHideHoverMenu(): void;
}
