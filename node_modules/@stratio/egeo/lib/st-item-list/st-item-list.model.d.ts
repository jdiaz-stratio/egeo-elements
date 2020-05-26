import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export interface StItemListElement {
    id: string | number;
    name: string;
    icon?: string;
    selected?: boolean;
}
export interface StItemListConfig {
    title: string;
    searchPlaceholder: string;
}
export interface StItemListConfigSchema {
    title: TranslateableElement;
    searchPlaceholder: TranslateableElement;
}
