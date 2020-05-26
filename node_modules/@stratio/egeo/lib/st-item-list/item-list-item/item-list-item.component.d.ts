import { EventEmitter } from '@angular/core';
import { StItemListElement } from '../st-item-list.model';
export declare class ItemListItemComponent {
    item: StItemListElement;
    qaTag: string;
    align: 'left' | 'right';
    selectItem: EventEmitter<StItemListElement>;
    constructor();
    readonly itemName: string;
    readonly itemIcon: string;
    readonly itemSelected: boolean;
    readonly itemQaTag: string;
    readonly itemStyle: string;
    emitOnSelect(event: Event): void;
}
