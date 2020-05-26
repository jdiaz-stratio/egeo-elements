export declare type SelectOneDispaptcherListener = (id: string, name: string) => void;
export declare class SelectOneDispatcher {
    private listeners;
    notify(id: string, name: string): void;
    listen(listener: SelectOneDispaptcherListener): void;
}
