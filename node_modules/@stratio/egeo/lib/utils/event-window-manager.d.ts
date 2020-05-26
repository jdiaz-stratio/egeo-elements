import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
export declare abstract class EventWindowManager {
    private _renderer;
    private _cd;
    isActive: boolean;
    abstract _eventElementRef: ElementRef;
    private globalListener;
    private forceClose;
    constructor(_renderer: Renderer2, _cd: ChangeDetectorRef);
    abstract ngOnDestroy(): void;
    protected openElement(): void;
    protected closeElement(): void;
    private onClickOutside;
    private onForceClose;
}
