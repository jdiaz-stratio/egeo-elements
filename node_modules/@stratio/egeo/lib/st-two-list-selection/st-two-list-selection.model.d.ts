import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
export interface StTwoListSelectionElement {
    id: string | number;
    name: string;
    selected?: boolean;
    extraLabel?: string;
    itemAll?: boolean;
    disabled?: boolean;
}
export interface StTwoListSelectExtraLabelAction {
    element: StTwoListSelectionElement;
    event: Event;
}
export interface StTwoListSelectionAction {
    element: StTwoListSelectionElement;
    position: number;
}
export interface StTwoListSelectionConfig {
    allElementsListTitle: string;
    allElementsListSubtitle?: string;
    allElementsSearchPlaceholder: string;
    fetchingDataText?: string;
    menuOptionList?: StDropDownMenuItem[];
    orderPlaceholder?: string;
    selectedElementsListTitle: string;
    selectedElementsListSubtitle?: string;
    selectedElementsSearchPlaceholder: string;
}
export interface StTwoListSelectionConfigSchema {
    allElementsListTitle: TranslateableElement;
    allElementsListSubtitle?: TranslateableElement;
    allElementsSearchPlaceholder: TranslateableElement;
    fetchingDataText?: TranslateableElement;
    orderPlaceholder?: TranslateableElement;
    selectedElementsListTitle: TranslateableElement;
    selectedElementsListSubtitle?: TranslateableElement;
    selectedElementsSearchPlaceholder: TranslateableElement;
}
