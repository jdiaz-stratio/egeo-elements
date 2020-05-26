import { ElementRef, EventEmitter } from '@angular/core';
import { StHeaderMenuOption } from '../st-header.model';
export declare class StHeaderMenuComponent {
    elementRef: ElementRef;
    menu: StHeaderMenuOption[];
    showMenuNames: boolean;
    selectMenu: EventEmitter<string>;
    constructor(elementRef: ElementRef);
    readonly qaId: string;
    readonly itemId: string;
}
