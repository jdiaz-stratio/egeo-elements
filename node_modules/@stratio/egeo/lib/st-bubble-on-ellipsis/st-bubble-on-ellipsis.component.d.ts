import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StPopOffset } from '../st-pop/st-pop.model';
/**
 * @description {Component} [StBubbleOnEllipsis]
 *
 * This component displays a bubble below a content if its width is longer than container
 *
 * @example
 *
 * {html}
 *
 * ```
 *      <st-bubble-on-ellipsis
 *         [text]="'Text for bubble'"
 *         [openToLeft]="true"
 *         [maxWidth]="'40%'">
 *          Any text
 *      </st-bubble-on-ellipsis>
 * ```
 */
export declare class StBubbleOnEllipsisComponent {
    private _cd;
    /** @Input {string} [text=] Text of the bubble */
    text: string;
    /** @Input {string} [minWidth=] min width for bubble  */
    minWidth?: string;
    /** @Input {string} [maxWidth=] max width for bubble  */
    maxWidth?: string;
    /** @Input {string} [lines=1] number of lines where ellipsis is placed  */
    lines?: number;
    bubbleTrigger: ElementRef;
    offset: StPopOffset;
    visible: boolean;
    private _openToLeft;
    constructor(_cd: ChangeDetectorRef);
    /** @Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right  */
    openToLeft: boolean;
    onShowBubble(): void;
    onHideBubble(): void;
}
