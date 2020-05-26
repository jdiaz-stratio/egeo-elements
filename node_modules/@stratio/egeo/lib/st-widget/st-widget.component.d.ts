import { ElementRef } from '@angular/core';
/**
 * @description {Component} [Widget]
 *
 * Widget component is a container box for any type of widgets
 *
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-widget title="widget demo" [loading]="isLoading" overwriteLoadingData="Loading..."></st-widget>
 * ```
 *
 */
export declare class StWidgetComponent {
    private el;
    /** @Input {string} [title] title will be displayed in the widget header */
    title: string;
    /** @Input {bolean} [loading] when true, loading stauts is displayed    */
    loading: boolean;
    /** @Input {string} [title] text "loading data" will be overwritten with this parameter */
    overwriteLoadingData: string;
    /** @Input {boolean} [displaySettingsButton] Boolean to display or hide the settings button */
    displaySettingsButton: boolean;
    private _draggable;
    private _dragging;
    constructor(el: ElementRef);
    readonly widgetId: string | null;
    /** @Input {boolean} [draggable=true] Boolean to enable or disable dragging of widget */
    draggable: boolean;
    readonly dragging: boolean;
    updateDragging(value: boolean): void;
}
