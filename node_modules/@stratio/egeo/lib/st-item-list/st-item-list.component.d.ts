import { EventEmitter } from '@angular/core';
import { StItemListElement, StItemListConfig } from './st-item-list.model';
export declare class StItemListComponent {
    list: StItemListElement[];
    config: StItemListConfig;
    qaTag: string;
    hasSearch: boolean;
    align: 'left' | 'right';
    theme: string;
    selectItem: EventEmitter<StItemListElement>;
    search: EventEmitter<string>;
    readonly listTitle: string;
    readonly searchPlaceholder: string;
    readonly listQaTag: string;
    readonly searchQaTag: string;
}
