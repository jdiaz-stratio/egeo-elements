import { StPopOffset, StPopPlacement } from '../st-pop/st-pop.model';
/**
 * @description {Component} [Bubble]
 *
 * This component displays a text inside a floating box
 *
 * @example
 *
 * {html}
 *
 * ```
 *    <st-bubble [qaTag]="qaTag" [text]="text" [hidden]="hidden">
 *    </st-bubble>
 * ```
 */
export declare class StBubbleComponent {
    /** @Input {string} [text=] Text of the bubble */
    text: string;
    /** @input {boolean} [hidden=false] Show or hide the bubble */
    hidden: boolean;
    /** @Input {StPopOffset} [offset={x: 0 , y: 17}] For position with offset in x o y axis */
    offset: StPopOffset;
    /** @Input {boolean} [showArrow=true] when true, arrow icon is displayed    */
    showArrow?: boolean;
    /** @Input {boolean} [animation=true] when true, bubble is displayed with an animation  */
    animation?: boolean;
    /** @Input {boolean} [openToLeft=true] when true, bubble is displayed with the arrow to the right  */
    openToLeft?: boolean;
    /** @Input {boolean} [small=false] when true, bubble is displayed with theme small  */
    small?: boolean;
    /** @Input {string} [minWidth=] min width for bubble  */
    minWidth?: string;
    /** @Input {string} [maxWidth=] max width for bubble  */
    maxWidth?: string;
    placement: StPopPlacement;
}
