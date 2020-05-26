import { ChangeDetectorRef, EventEmitter, SimpleChanges } from '@angular/core';
import { StTwoListSelectionElement } from './st-two-list-selection.model';
export declare type List = StTwoListSelectionElement[];
export declare type IdList = Array<string | number>;
export declare class StTwoListSelection {
    private _cd;
    originalAll: List;
    originalSelected: List;
    copyAllElement: List;
    copySelectedElements: List;
    allSearch: string;
    hasCheckboxAllList?: boolean;
    hasCheckboxSelectedList?: boolean;
    itemAll?: StTwoListSelectionElement;
    numItemsSelectedAll: EventEmitter<number>;
    numItemsSelectedSelected: EventEmitter<number>;
    searchBy: string;
    searchOverAll: EventEmitter<string>;
    searchOverSelected: EventEmitter<string>;
    selectedSearch: string;
    private emitter;
    private sortLists;
    constructor(_cd: ChangeDetectorRef);
    onSelectAllElement(selection: StTwoListSelectionElement): void;
    onSelectSelectedElement(selection: StTwoListSelectionElement): void;
    onSearchOverAll(search: {
        text: string;
    }): void;
    onSearchOverSelected(search: {
        text: string;
    }): void;
    onMoveToSelected(event: Event): void;
    onMoveToAll(event: Event): void;
    onMoveAllToSelected(event: Event): void;
    onMoveAllToAll(event: Event): void;
    init(all: List, selected: List, changeEmitter: EventEmitter<List>, sorted: 'id' | 'name' | 'notOrder', hasCheckboxAllList?: boolean, hasCheckboxSelectedList?: boolean, itemAll?: StTwoListSelectionElement): void;
    checkChanges(changes: SimpleChanges, allList: string, selectedList: string): void;
    private applySelectAll;
    private changeSelectedItemList;
    private getNumItemsSelected;
    private generateWorkLists;
    private copyLists;
    private searchAndSelect;
    private getIdsToMove;
    private moveIdsFromAllToSelected;
    private removeIdsFromSelected;
    private orderListBy;
    private canSelect;
}
