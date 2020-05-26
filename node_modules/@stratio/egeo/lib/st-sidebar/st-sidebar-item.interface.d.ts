export interface StSidebarItem {
    id: string;
    label: string;
    class?: string;
    items?: StSidebarItem[];
    result?: string;
    disabled?: boolean;
}
