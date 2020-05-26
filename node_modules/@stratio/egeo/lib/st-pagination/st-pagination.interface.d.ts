import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export interface Paginate {
    currentPage: number;
    perPage: number;
}
export interface PaginateOptions {
    value: number;
    showFrom?: number;
}
export interface PaginateTexts {
    element: string;
    perPage: string;
    of: string;
}
export interface PaginateTextsSchema {
    element: TranslateableElement;
    perPage: TranslateableElement;
    of: TranslateableElement;
}
export interface PaginateIconClasses {
    previous: string;
    next: string;
}
