import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export declare class StHeaderMenuOption {
    icon?: string;
    label: string;
    subMenus: StHeaderSubMenuOption[];
    link: string;
    external?: boolean;
    openInNewPage?: boolean;
}
export declare class StHeaderSubMenuOption {
    label: string;
    link: string;
    external?: boolean;
    openInNewPage?: boolean;
}
export declare class StHeaderSelection {
    link: string;
    external?: boolean;
    openInNewPage?: boolean;
}
export declare class StHeaderMenuItem extends StDropDownMenuItem {
    selection: StHeaderSelection;
}
export declare class StHeaderMenuOptionSchema {
    icon?: string;
    label: TranslateableElement;
    subMenus: StHeaderSubMenuOptionSchema[];
    link: string;
    external?: boolean;
    openInNewPage?: boolean;
}
export declare class StHeaderSubMenuOptionSchema {
    label: TranslateableElement;
    link: string;
    external?: boolean;
    openInNewPage?: boolean;
}
