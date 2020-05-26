export declare enum StModalResponse {
    YES = 0,
    NO = 1,
    CLOSE = 2
}
export declare enum StModalBasicType {
    DELETE = 0,
    CONFIRM = 1,
    INFO = 2,
    WARNING = 3
}
export declare class StModalButton {
    response?: Function;
    responseValue?: StModalResponse;
    leftIcon?: string;
    rightIcon?: string;
    classes?: string;
    closeOnClick?: boolean;
    label: string;
}
export declare class StModalConfig {
    fullscreen?: boolean;
    modalTitle?: string;
    messageTitle?: string;
    message?: string;
    html?: string;
    inputs?: Object;
    outputs?: Object;
    buttons?: StModalButton[];
    maxWidth?: number;
    minWidth?: number;
    empty?: boolean;
    showCloseBtn?: boolean;
    iconStatus?: string;
}
export declare class StModalButtonResponse {
    response: StModalResponse;
    close: boolean;
}
