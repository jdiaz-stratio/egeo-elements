import { Observable } from 'rxjs';
export declare enum STALERT_SEVERITY {
    SUCCESS = 0,
    WARNING = 1,
    ERROR = 2,
    INFO = 3
}
export declare class StAlertLink {
    title: string;
    link: string;
}
export declare class StAlert {
    id: number;
    title: string;
    message: string;
    severity: STALERT_SEVERITY;
    timeout: number;
    extendedTimeout: number;
    link: StAlertLink;
    private _changeVisibilityInterval;
    private _lifeTimeout;
    private _readed;
    private _opacity;
    private _opacityState;
    private _removeEvent;
    constructor(id: number, title: string, message: string, severity: STALERT_SEVERITY, timeout: number, extendedTimeout: number, link: StAlertLink);
    readonly opacity: Observable<number>;
    readonly removeAlertEvent: Observable<StAlert>;
    notify(): void;
    pauseNotify(): void;
    continueNotify(): void;
    cancel(): void;
    private setVisible;
    private modifyVisibility;
    private notifyForRemove;
    private clearAnimation;
    private stopLife;
    private startLife;
}
