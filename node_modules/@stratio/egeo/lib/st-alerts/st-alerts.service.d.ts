import { Observable } from 'rxjs';
import { StAlert, STALERT_SEVERITY, StAlertLink } from './st-alerts.model';
export declare class StAlertsService {
    private _alertsList;
    private _nextId;
    private _alertsStream;
    readonly alertList: Observable<StAlert[]>;
    notifyAlert(title: string, message: string, severity: STALERT_SEVERITY, link?: StAlertLink, timeout?: number, extendedTimeout?: number): void;
    private insertAlert;
    private onNotifyRemove;
}
