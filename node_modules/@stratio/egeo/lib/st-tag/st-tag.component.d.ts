import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { StTagItem } from './st-tag.model';
/**
 * @description {Component} [Tag]
 *
 * The tag component allows to display small texts.
 *
 * @model
 *
 *   [StTagItem] {./st-tag.model.ts#StTagItem}
 *
 * @example
 *
 * {html}
 *
 * ```
 *  <st-tag [tag]="simpleTag" class="small" [removable]="true"></st-tag>
 *
 * ```
 *
 */
export declare class StTagComponent {
    private _cd;
    /** @Input {StTagItem} [tag=] Item that contains the tag info  */
    tag: StTagItem;
    /** @Input {boolean} [removable=] Boolean to display or not the cross icon to remove tag */
    removable: boolean;
    /** @Input {boolean} [clickable=true] Boolean to set tag as clicklable or not */
    clickable: boolean;
    /** @Output {StTagItem} [remove=] Even emitted when cross icon is clicked  */
    remove: EventEmitter<StTagItem>;
    /** @Output {StTagItem} [click=] Event emitted when tag is clicked */
    click: EventEmitter<StTagItem>;
    showBubble: boolean;
    constructor(_cd: ChangeDetectorRef);
    onRemove(): void;
    onClick(filter: StTagItem): void;
    onChangeBubbleVisibility(visible: boolean): void;
}
