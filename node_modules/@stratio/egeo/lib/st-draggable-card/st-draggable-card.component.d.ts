import { EventEmitter } from '@angular/core';
/**
 * @description {Component} [Draggable card]
 *
 * The draggable card component is a custom draggable item.
 *
 * @example
 *
 * {html}
 *
 * ```
 *
 *  <st-draggable-card class='card' id='1' (onDragStart)='drag($event)'>
 *      <p>Draggable card 1</p>
 *  </st-draggable-card>
 *
 *
 * ```
 *
 */
export declare class StDraggableCardComponent {
    /** @Input {string} [id] Card id */
    id: string;
    /** @Output {any} [dragStart] Event emitted when user start dragging card */
    onDragStart: EventEmitter<any>;
    /** @Output {any} [dragEnd] Event emitted when user drops dragging card */
    onDragEnd: EventEmitter<any>;
    /** @Input {boolean} [draggable=true] Boolean to enable or disable dragging */
    draggable: boolean;
    card: any;
    private _dragging;
    readonly dragging: boolean;
    dragStartHandle(event: any): void;
    dragEndHandle(event: any): void;
}
