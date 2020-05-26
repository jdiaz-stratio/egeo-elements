import { EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { StDropDownMenuItem } from '../st-dropdown-menu.interface';
export declare class StDropdownMenuItemComponent {
    private sanitizer;
    index: number;
    item: StDropDownMenuItem;
    selectedItem: StDropDownMenuItem;
    styleSelected: boolean;
    change: EventEmitter<StDropDownMenuItem>;
    visibleExtraButtonBubble: boolean;
    constructor(sanitizer: DomSanitizer);
    onChangeItem(): void;
    onToggleExtraButtonBubble(): void;
    readonly isSelected: boolean;
    readonly icon: string;
    readonly html: SafeHtml;
    readonly hasIcon: boolean;
    readonly hasExtraIcon: boolean;
    readonly hasItem: boolean;
}
