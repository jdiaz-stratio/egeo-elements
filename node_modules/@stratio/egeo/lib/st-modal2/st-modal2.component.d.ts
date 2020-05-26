import { EventEmitter } from '@angular/core';
export declare class StModal2Component {
    emptyModal: boolean;
    width: number;
    modalTitle: string;
    closeOnEscape: boolean;
    hideCloseBtn: boolean;
    onClose: EventEmitter<void>;
    onEnter: EventEmitter<void>;
    private ESCAPE_KEYCODE;
    private ENTER_KEYCODE;
    onKeydownHandler(event: KeyboardEvent): void;
}
