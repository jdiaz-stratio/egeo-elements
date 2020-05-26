import { OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { StAlert, StAlertLink } from '../st-alerts.model';
export declare class StAlertBoxComponent implements OnInit {
    private _cd;
    /** @Input {StAlert} [alert=] Data of the alert */
    alert: StAlert;
    /** @Input {boolean} [showInConsole=false] Display logs in console */
    showInConsole: boolean;
    /** @Output {StAlertLink} [clickLink=] Event emitted when link is clicked */
    clickLink: EventEmitter<StAlertLink>;
    /** @Output {boolean} [close=] Event emitted when alert is closed */
    close: EventEmitter<boolean>;
    iconValue: string;
    opacity: number;
    severityColorValue: string;
    constructor(_cd: ChangeDetectorRef);
    ngOnInit(): void;
    closeAlert(): void;
    getIcon(): string;
    getSeverityColor(): string;
    goTo(): void;
    changeOpacity(opacity: number): void;
    private notifyConsole;
}
