/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DemoGeneratorProviders } from './demo-generator.interface';
export class StDemoGenerator {
    /**
     * @param {?} cfr
     * @param {?} config
     */
    constructor(cfr, config) {
        this.cfr = cfr;
        this.config = config;
        this.inputs = config.inputs;
        this.outputs = config.outputs;
        this.component = config.components[0];
    }
    /**
     * DYNAMIC BODY DEMO COMPONENT LOAD
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.component) {
            this.loadDemo();
        }
    }
    /**
     * @private
     * @return {?}
     */
    loadDemo() {
        if (!this.componentRef) {
            this.target.clear();
            /** @type {?} */
            let compFactory = this.cfr.resolveComponentFactory(this.component);
            this.componentRef = this.target.createComponent(compFactory);
            this.bindDemoInputsAndOutputs();
        }
    }
    // tslint:disable:
    /**
     * @private
     * @return {?}
     */
    bindDemoInputsAndOutputs() {
        // Inputs its not necessary to be defined
        if (this.inputs) {
            Object.keys(this.inputs).map((/**
             * @param {?} key
             * @return {?}
             */
            key => this.componentRef.instance[key] = ((/** @type {?} */ (this.inputs)))[key]));
        }
        // Inputs must be defined for subscribe to them
        if (this.outputs) {
            Object.keys(this.outputs).map((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                if (((/** @type {?} */ (this.componentRef.instance))).hasOwnProperty(key)) {
                    this.componentRef.instance[key].subscribe(((/** @type {?} */ (this.outputs)))[key]);
                }
            }));
        }
        this.componentRef.changeDetectorRef.detectChanges();
    }
}
StDemoGenerator.decorators = [
    { type: Component, args: [{
                selector: 'st-demo-body',
                template: '<div #stDemoBody></div>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
         width: 100%;
         display: block;
      }
   `]
            }] }
];
/** @nocollapse */
StDemoGenerator.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: DemoGeneratorProviders }
];
StDemoGenerator.propDecorators = {
    target: [{ type: ViewChild, args: ['stDemoBody', { read: ViewContainerRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    StDemoGenerator.prototype.target;
    /** @type {?} */
    StDemoGenerator.prototype.inputs;
    /** @type {?} */
    StDemoGenerator.prototype.outputs;
    /** @type {?} */
    StDemoGenerator.prototype.component;
    /**
     * @type {?}
     * @private
     */
    StDemoGenerator.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    StDemoGenerator.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    StDemoGenerator.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2RlbW8tZ2VuZXJhdG9yL2RlbW8tZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULHdCQUF3QixFQUl4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBYXBFLE1BQU0sT0FBTyxlQUFlOzs7OztJQVN6QixZQUNXLEdBQTZCLEVBQzdCLE1BQThCO1FBRDlCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBR0QsV0FBVztRQUNSLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzlCO0lBQ0osQ0FBQzs7OztJQUVELGVBQWU7UUFDWixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xCO0lBQ0osQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Z0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztTQUNsQztJQUNKLENBQUM7Ozs7OztJQUdPLHdCQUF3QjtRQUM3Qix5Q0FBeUM7UUFDekMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxtQkFBSyxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1NBQ2pHO1FBRUQsK0NBQStDO1FBQy9DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFLLElBQUksQ0FBQyxPQUFPLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3RFO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDTDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7O1lBcEVILFNBQVMsU0FBQztnQkFDUixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLHlCQUF5QjtnQkFPbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBTnRDOzs7OztJQUtSO2FBRUg7Ozs7WUFyQkUsd0JBQXdCO1lBU2xCLHNCQUFzQjs7O3FCQWMzQixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUFBbEUsaUNBQTZGOztJQUU3RixpQ0FBZTs7SUFDZixrQ0FBZ0I7O0lBQ2hCLG9DQUFxQjs7Ozs7SUFFckIsdUNBQXdDOzs7OztJQUdyQyw4QkFBcUM7Ozs7O0lBQ3JDLGlDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ29tcG9uZW50LFxuICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgQ29tcG9uZW50UmVmLFxuICAgT25EZXN0cm95LFxuICAgQWZ0ZXJWaWV3SW5pdCxcbiAgIFZpZXdDaGlsZCxcbiAgIFZpZXdDb250YWluZXJSZWYsXG4gICBUeXBlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZW1vR2VuZXJhdG9yUHJvdmlkZXJzIH0gZnJvbSAnLi9kZW1vLWdlbmVyYXRvci5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtZGVtby1ib2R5JyxcbiAgIHRlbXBsYXRlOiAnPGRpdiAjc3REZW1vQm9keT48L2Rpdj4nLFxuICAgc3R5bGVzOiBbYFxuICAgICAgOmhvc3Qge1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgIGBdLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3REZW1vR2VuZXJhdG9yIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgIEBWaWV3Q2hpbGQoJ3N0RGVtb0JvZHknLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSkgdGFyZ2V0OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICBpbnB1dHM6IE9iamVjdDtcbiAgIG91dHB1dHM6IE9iamVjdDtcbiAgIGNvbXBvbmVudDogVHlwZTxhbnk+O1xuXG4gICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgY29uZmlnOiBEZW1vR2VuZXJhdG9yUHJvdmlkZXJzXG4gICApIHtcbiAgICAgIHRoaXMuaW5wdXRzID0gY29uZmlnLmlucHV0cztcbiAgICAgIHRoaXMub3V0cHV0cyA9IGNvbmZpZy5vdXRwdXRzO1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBjb25maWcuY29tcG9uZW50c1swXTtcbiAgIH1cblxuICAgLyoqIERZTkFNSUMgQk9EWSBERU1PIENPTVBPTkVOVCBMT0FEICovXG4gICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgfVxuXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgIHRoaXMubG9hZERlbW8oKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBsb2FkRGVtbygpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgIHRoaXMudGFyZ2V0LmNsZWFyKCk7XG4gICAgICAgICBsZXQgY29tcEZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XG4gICAgICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMudGFyZ2V0LmNyZWF0ZUNvbXBvbmVudChjb21wRmFjdG9yeSk7XG4gICAgICAgICB0aGlzLmJpbmREZW1vSW5wdXRzQW5kT3V0cHV0cygpO1xuICAgICAgfVxuICAgfVxuXG4gICAvLyB0c2xpbnQ6ZGlzYWJsZTpcbiAgIHByaXZhdGUgYmluZERlbW9JbnB1dHNBbmRPdXRwdXRzKCk6IHZvaWQge1xuICAgICAgLy8gSW5wdXRzIGl0cyBub3QgbmVjZXNzYXJ5IHRvIGJlIGRlZmluZWRcbiAgICAgIGlmICh0aGlzLmlucHV0cykge1xuICAgICAgICAgT2JqZWN0LmtleXModGhpcy5pbnB1dHMpLm1hcChrZXkgPT4gdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XSA9ICg8YW55PnRoaXMuaW5wdXRzKVtrZXldKTtcbiAgICAgIH1cblxuICAgICAgLy8gSW5wdXRzIG11c3QgYmUgZGVmaW5lZCBmb3Igc3Vic2NyaWJlIHRvIHRoZW1cbiAgICAgIGlmICh0aGlzLm91dHB1dHMpIHtcbiAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMub3V0cHV0cykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoKHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIE9iamVjdCkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XS5zdWJzY3JpYmUoKDxhbnk+dGhpcy5vdXRwdXRzKVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICB9XG59XG4iXX0=