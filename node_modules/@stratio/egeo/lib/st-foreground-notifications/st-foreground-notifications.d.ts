import { AfterViewInit, ChangeDetectorRef, EventEmitter, ElementRef, OnInit, Renderer2, OnChanges } from '@angular/core';
import { StatusNotification, StNotificationElement } from './st-foreground-notifications.model';
export declare class StForegroundNotificationsComponent implements AfterViewInit, OnChanges, OnInit {
    private cd;
    private elemRef;
    private renderer;
    /** @Input {boolean} [visible=false] When true the notification is shown */
    visible: boolean;
    /** @Input {autoCloseTime} [autoCloseTime='1000'] Defines the time in milliseconds for autoclose the notification.
     *  The autoclose only applies if only have one notification and status is success
     */
    autoCloseTime: number;
    /** @Input {StNotificationElement []} [notifications='[]'] Array of notifications */
    notifications?: StNotificationElement[];
    /** @output {clickLinkTemplate} [click] Event emitted when user click in a href link */
    clickLinkTemplate: EventEmitter<any>;
    /** @output {visibleChange} [click] Event emitted when set param visible */
    visibleChange: EventEmitter<boolean>;
    currentNotification: number;
    statusIconValue: string;
    statusNotificationsValue: string;
    statusValue: string;
    showLinkMore: boolean;
    status: string;
    _visible: boolean;
    listStatusNotifications: Array<StatusNotification>;
    constructor(cd: ChangeDetectorRef, elemRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    addStyleLinks(htmlElement: any): void;
    checkOneLine(): void;
    checkStatus(): void;
    decrementPage(): void;
    fillStatusNotifications(): void;
    getIndexCurrentNotification(): number;
    getStatus(): string;
    getStatusIcon(): string;
    getStatusNotifications(): string;
    incrementPage(): void;
    onClickLinkHtmlTemplate(event: string): void;
    onClose(): void;
    removeStyleNotification(): void;
    showTextComplete(): void;
}
