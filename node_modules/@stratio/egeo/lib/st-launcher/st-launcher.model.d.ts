import { TranslateableElement } from '../utils/egeo-resolver/egeo-resolve-model';
export declare class StLauncherItem {
    label: string;
    url: string;
}
export declare class StLauncherGroup {
    label: string;
    items: StLauncherItem[];
    expanded?: boolean;
}
export declare class StLauncherItemSchema {
    label: TranslateableElement;
    url: string;
}
export declare class StLauncherGroupSchema {
    label: TranslateableElement;
    items: StLauncherItemSchema[];
    expanded?: boolean;
}
