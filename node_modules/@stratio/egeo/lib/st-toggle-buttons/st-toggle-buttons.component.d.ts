import { EventEmitter } from '@angular/core';
import { StToggleButton, StParsedToggleButton } from './st-toggle-buttons.interface';
export declare class StToggleButtonsComponent {
    description: string;
    qaTag: string;
    select: EventEmitter<StToggleButton>;
    parsedTabs: StParsedToggleButton[];
    tabs: StToggleButton[];
    onClick(selectedTab: StToggleButton): void;
}
