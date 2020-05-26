import { EventEmitter, ElementRef } from '@angular/core';
export declare class StClickOutside {
    private elementRef;
    clickOutside: EventEmitter<MouseEvent>;
    constructor(elementRef: ElementRef);
    onDocumentClick(event: MouseEvent): void;
}
