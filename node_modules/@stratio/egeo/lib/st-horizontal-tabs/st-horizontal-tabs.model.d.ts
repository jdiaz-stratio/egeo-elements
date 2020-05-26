import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export declare enum StHorizontalTabStatus {
    warning,
    error
}
export interface StHorizontalTab {
    id: string;
    text: string;
    status?: StHorizontalTabStatus;
}
export interface StHorizontalTabSchema {
    id: string;
    text: TranslateableElement;
}
