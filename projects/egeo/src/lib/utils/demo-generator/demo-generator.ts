/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import {
   ChangeDetectionStrategy,
   Component,
   ComponentFactoryResolver,
   ComponentRef,
   Input,
   OnDestroy,
   AfterViewInit,
   ViewChild,
   ViewContainerRef,
   Type
} from '@angular/core';
import * as ReflectMetadata from 'reflect-metadata';

import { DemoGeneratorProviders } from './demo-generator.interface';

import { StDemoGeneratorModule } from './demo-generator.module';

@Component({
   selector: 'st-demo-body',
   template: '<div #stDemoBody></div>',
   styles: [`
      :host {
         height: 100%;
         width: 100%;
         display: block;
      }
   `],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class StDemoGenerator implements OnDestroy, AfterViewInit {
   @ViewChild('stDemoBody', { read: ViewContainerRef, static: false }) target: ViewContainerRef;

   inputs: Object;
   outputs: Object;
   component: Type<any>;

   private componentRef: ComponentRef<any>;

   constructor(
      private cfr: ComponentFactoryResolver,
      private config: DemoGeneratorProviders
   ) {
      this.inputs = config.inputs;
      this.outputs = config.outputs;
      this.component = config.components[0];
   }

   /** DYNAMIC BODY DEMO COMPONENT LOAD */
   ngOnDestroy(): void {
      if (this.componentRef) {
         this.componentRef.destroy();
      }
   }

   ngAfterViewInit(): void {
      if (this.component) {
         this.loadDemo();
      }
   }

   private loadDemo(): void {
      if (!this.componentRef) {
         this.target.clear();
         let compFactory = this.cfr.resolveComponentFactory(this.component);
         this.componentRef = this.target.createComponent(compFactory);
         this.bindDemoInputsAndOutputs();
      }
   }

   // tslint:disable:
   private bindDemoInputsAndOutputs(): void {
      // Inputs its not necessary to be defined
      if (this.inputs) {
         Object.keys(this.inputs).map(key => this.componentRef.instance[key] = (<any>this.inputs)[key]);
      }

      // Inputs must be defined for subscribe to them
      if (this.outputs) {
         Object.keys(this.outputs).map(key => {
            if ((this.componentRef.instance as Object).hasOwnProperty(key)) {
               this.componentRef.instance[key].subscribe((<any>this.outputs)[key]);
            }
         });
      }

      this.componentRef.changeDetectorRef.detectChanges();
   }
}
