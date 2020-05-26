import { OnInit, EventEmitter } from '@angular/core';
import { StModalButton, StModalButtonResponse } from '../st-modal.model';
export declare class StModalButtonsComponent implements OnInit {
    buttonConfig: StModalButton[];
    fullscreen: boolean;
    click: EventEmitter<StModalButtonResponse>;
    hasButtonsValue: boolean;
    ngOnInit(): void;
    hasButtons(): boolean;
    getButtonClass(button: StModalButton): string;
    getButtonId(button: StModalButton): string | null;
    getButtonLabelWithoutSpaces(label: string): string;
    /** INTERACTION WITH MODAL */
    clickButton(button: StModalButton, event: MouseEvent): void;
}
