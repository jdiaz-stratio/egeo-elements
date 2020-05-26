import { ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { StModalConfig, StModalResponse, StModalBasicType } from './st-modal.model';
export declare class StModalService {
    private _cfr;
    private _containerRef;
    private dynamicModal;
    private notifyButtonInteraction;
    constructor(_cfr: ComponentFactoryResolver);
    container: ViewContainerRef;
    show(config: StModalConfig, component?: Type<any>): Observable<StModalResponse>;
    showBasicModal(type: StModalBasicType, modalTitle: string, messageTitle: string, message: string, okButton: string, cancelButton?: string, maxWidth?: number, minWidth?: number, icon?: string): Observable<StModalResponse>;
    close(): void;
    private createModal;
    private destroy;
    private bindVars;
    private notify;
    private canCreateModal;
    private createConfig;
    private checkButtons;
}
