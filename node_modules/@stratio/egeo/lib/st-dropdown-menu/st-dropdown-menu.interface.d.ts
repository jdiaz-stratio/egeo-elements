import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export declare enum ARROW_KEY_CODE {
    ARROW_UP = "Arrow Up",
    ARROW_DOWN = "Arrow Down"
}
export declare class StDropDownMenuItem {
    label: string;
    value: any;
    icon?: string;
    labelColor?: string;
    iconColor?: string;
    textInfo?: string;
    selected?: boolean;
    hasHtml?: boolean;
    extraIcon?: string;
    extraIconBubble?: string;
    extraIconColor?: string;
    disabled?: boolean;
    topSeparator?: boolean;
    bottomSeparator?: boolean;
    [key: string]: any;
}
export declare class StDropDownMenuGroup {
    title?: string;
    items: StDropDownMenuItem[];
}
export declare class StDropDownMenuItemSchema {
    label: TranslateableElement;
    value: any;
    icon?: string;
    selected?: boolean;
}
export declare class StDropDownMenuGroupSchema {
    title?: TranslateableElement;
    items: StDropDownMenuItemSchema[];
}
export declare enum StDropDownVisualMode {
    OPTION_LIST = 0,
    MENU_LIST = 1
}
