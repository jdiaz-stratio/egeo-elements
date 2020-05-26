export interface StMenuModel<T> {
    name: string;
    value: T;
    icon?: string;
    subMenus?: Array<StMenuModel<T>>;
    separator?: boolean;
    status?: StMenuStatus;
    disabled?: boolean;
}
export declare enum StMenuStatus {
    success = "success",
    warning = "warning",
    critical = "critical"
}
export declare enum StMenuPosition {
    left = "left",
    right = "right"
}
