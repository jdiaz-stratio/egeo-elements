import { AfterViewInit, ChangeDetectorRef, ElementRef, SimpleChanges } from '@angular/core';
import { StPopOffset, StPopPlacement } from './st-pop.model';
/**
 * @description {Component} [Pop]
 *
 * The pop is a component for manage floating elements like popups or dropdown-menu. This element need two element inside,
 * a button element that launch popper and a content element that whose position will be relativo to button element.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-pop [hidden]="false" placement="bottom">
 *    <div pop-button>Button</div>
 *    <div pop-content>Content</div>
 * </st-pop>
 * ```
 */
export declare class StPopComponent implements AfterViewInit {
    private _el;
    private _cd;
    /** @Input {StPopPlacement} [placement=StPopPlacement.BOTOM_START] Define position of content relative to button */
    placement: StPopPlacement;
    /** @Input {StPopOffset} [offset={x: 0 , y: 0}] For position with offset in x o y axis */
    offset: StPopOffset;
    /** @Input {boolean} [openToLeft=false] For calculating all positions from the right corner */
    openToLeft: boolean;
    private _hidden;
    /** @Input {boleean} [hidden=true]  TRUE: show pop content, FALSE: hide pop content  */
    hidden: boolean;
    constructor(_el: ElementRef, _cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateWidth(): void;
    private getContentElement;
    private calculatePosition;
    private getCoords;
}
