import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export interface StToggleButton {
    label: string;
    id?: string;
    number?: number;
    active?: boolean;
}
export interface StToggleButtonSchema {
    label: TranslateableElement;
    id?: string;
    number?: number;
    active?: boolean;
}
export interface StParsedToggleButton extends StToggleButton {
    trimLabel: string;
}
