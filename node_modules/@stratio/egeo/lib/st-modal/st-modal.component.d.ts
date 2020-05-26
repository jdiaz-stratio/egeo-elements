import { ComponentFactoryResolver, EventEmitter, OnDestroy, AfterViewInit, ViewContainerRef } from '@angular/core';
import { StModalButton, StModalButtonResponse, StModalConfig } from './st-modal.model';
import { StWindowRefService } from '../utils/window-service';
export declare class StModalComponent implements OnDestroy, AfterViewInit {
    private cfr;
    private windowRef;
    modalConfig: StModalConfig;
    component: any;
    click: EventEmitter<StModalButtonResponse>;
    targetContent: ViewContainerRef;
    targetEmpty: ViewContainerRef;
    readonly defaultMaxWidth: number;
    readonly defaultMinWidth: number;
    target: ViewContainerRef;
    private componentRef;
    constructor(cfr: ComponentFactoryResolver, windowRef: StWindowRefService);
    readonly hasIcon: string;
    readonly isFullscreen: boolean;
    readonly title: string;
    readonly buttons: StModalButton[];
    readonly isMessageModal: boolean;
    readonly isComplexMessageModal: boolean;
    readonly html: string;
    readonly message: string;
    readonly messageTitle: string;
    readonly modalStyles: Object;
    readonly emptyModal: boolean;
    readonly showCloseBtn: boolean;
    onClose(): void;
    /** DYNAMIC MODAL BODY COMPONENT LOAD */
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private getModalActualWidth;
    private loadBody;
    private bindModalInputs;
}
