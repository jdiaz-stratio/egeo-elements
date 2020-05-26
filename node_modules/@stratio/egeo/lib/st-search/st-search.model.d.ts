export declare enum StSearchEventOrigin {
    INPUT = 0,
    LIST = 1,
    FILTER = 2,
    ENTER = 3
}
export declare class StSearchEvent {
    text: string;
    filter?: string;
    origin?: StSearchEventOrigin;
}
