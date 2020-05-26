import { ComponentFactoryResolver, OnDestroy, AfterViewInit, ViewContainerRef, Type } from '@angular/core';
import { DemoGeneratorProviders } from './demo-generator.interface';
export declare class StDemoGenerator implements OnDestroy, AfterViewInit {
    private cfr;
    private config;
    target: ViewContainerRef;
    inputs: Object;
    outputs: Object;
    component: Type<any>;
    private componentRef;
    constructor(cfr: ComponentFactoryResolver, config: DemoGeneratorProviders);
    /** DYNAMIC BODY DEMO COMPONENT LOAD */
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private loadDemo;
    private bindDemoInputsAndOutputs;
}
