import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StBreadCrumbItem, StBreadCrumbMode } from './st-breadcrumbs.interface';
/**
 * @description {Component} [Breadcrumbs]
 *
 * The breadcrumb is s a type of secondary navigation
 * element that shows a trail for allowing users to keep track of their location.
 *
 * @model
 *
 *   [Id, optional label and icon of an option] {./st-breadcrumbs.interface.ts#StBreadCrumbItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-breadcrumbs
 *    [options]="options"
 *    (select)="onSelect($event)"
 *    qaTag="breadcrumbs">
 * </st-breadcrumbs>
 * ```
 *
 */
export declare class StBreadCrumbsComponent implements OnInit, OnChanges {
    /** @Input {StBreadCrumbItem[]} [options=\[\]] List of navigation parts for show in breadcrumb */
    options: StBreadCrumbItem[];
    /** @Input {number} [elementsToShow=5] Max number of elements to show. */
    elementsToShow: number;
    /** @Input {StBreadCrumbMode} [mode=StBreadCrumbMode.DEFAULT] Visualization mode */
    mode: StBreadCrumbMode;
    /** @Input {string} [qaTag=''] Id value for qa test */
    qaTag: string;
    /** @Output {number} [select] Notify any item selection */
    select: EventEmitter<number>;
    indexArray: number[];
    private _initPos;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onSelect(index: number): void;
    getId(index: number): string;
    getLabel(index: number): string;
    getIcon(index: number): string;
    hasIcon(index: number): boolean;
    private calculateStart;
}
