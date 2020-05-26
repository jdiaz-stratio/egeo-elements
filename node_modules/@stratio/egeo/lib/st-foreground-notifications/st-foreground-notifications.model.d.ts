export interface StNotificationElement {
    text?: string;
    html?: string;
    status?: string;
    nameEvents?: string[];
}
export interface StatusNotification {
    showMore: boolean;
    completeText: boolean;
}
export declare class StatusNotification implements StatusNotification {
    private _showMore;
    private _completeText;
    showMore: boolean;
    completeText: boolean;
    constructor(_showMore: boolean, _completeText: boolean);
}
