import { EventEmitter } from '@angular/core';
import { StItemListElement } from '../st-item-list.model';
export declare class ItemListScrollComponent {
    list: StItemListElement[];
    qaTag: string;
    align: 'left' | 'right';
    selectItem: EventEmitter<StItemListElement>;
    scrollItems: StItemListElement[];
    readonly listQaTag: string;
}
