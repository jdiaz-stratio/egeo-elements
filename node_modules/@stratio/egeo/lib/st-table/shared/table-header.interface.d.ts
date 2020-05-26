export interface StFilterElement {
    id: String | number;
    name: String | number;
    selected?: boolean;
}
export interface StFilterHeader {
    filterConfig?: StFilterElement[];
    showSettingBtn?: boolean;
    title: string;
    buttonText?: string;
    templateRef?: string;
}
export interface StTableHeader {
    id: string;
    label: string;
    sortable?: boolean;
    filters?: StFilterHeader;
    filterable?: boolean;
    templateRef?: string;
}
