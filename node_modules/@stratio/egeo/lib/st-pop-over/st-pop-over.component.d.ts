import { EventEmitter } from '@angular/core';
import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';
/**
 * @description {Component} Pop Over
 *
 * This components pop over a content with a title
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-pop-over [qaTag]="qaTag" [title]="title" [hidden]="hidden">
 *       <!-- CONTENT TO POP OVER -->
 *    </st-pop-over>
 * ```
 */
export declare class StPopOverComponent {
    /** @input {string} [qaTag=''] For set id for tests */
    qaTag: string;
    /** @input {string} [title] Title of the pop over */
    title: string;
    /** @input {boolean} [hidden=false] Show or hide the pop over */
    hidden: boolean;
    /** @Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis */
    offset: StPopOffset;
    /** @Input {boolean} [showSettingBtn=false] when true, settings icon is displayed    */
    showSettingBtn?: boolean;
    /** @Input {boolean} [showArrow=true] when true, arrow icon is displayed    */
    showArrow?: boolean;
    /** @Input {boolean} [openToLeft=true] when true, modal is placed from left corner of button    */
    openToLeft?: boolean;
    /** @Input {StPopPlacement} [placement=StPopPlacement.BOTTOM] Define position of content relative to button */
    placement: StPopPlacement;
    /** @Output {Event} [click] Notify event click */
    clickConfig: EventEmitter<Event>;
    private defaultOffset;
    readonly popOffset: StPopOffset;
}
