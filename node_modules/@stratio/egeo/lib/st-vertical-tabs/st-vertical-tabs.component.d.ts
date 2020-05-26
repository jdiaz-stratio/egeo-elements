import { EventEmitter, OnInit } from '@angular/core';
export declare class StVerticalTabsComponent implements OnInit {
    activeOption: string;
    options: string[];
    qaTag: string;
    changeOption: EventEmitter<string>;
    activeOptionIndex: number;
    arrowMovement: number;
    arrowMargin: number;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    isActive(optionName: string): boolean;
    activateOption(optionName: string): void;
    private changeActive;
    private activeFirstOption;
}
