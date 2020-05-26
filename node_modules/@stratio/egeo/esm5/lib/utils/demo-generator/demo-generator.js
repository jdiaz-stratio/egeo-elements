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
var StDemoGenerator = /** @class */ (function () {
    function StDemoGenerator(cfr, config) {
        this.cfr = cfr;
        this.config = config;
        this.inputs = config.inputs;
        this.outputs = config.outputs;
        this.component = config.components[0];
    }
    /** DYNAMIC BODY DEMO COMPONENT LOAD */
    /**
     * DYNAMIC BODY DEMO COMPONENT LOAD
     * @return {?}
     */
    StDemoGenerator.prototype.ngOnDestroy = /**
     * DYNAMIC BODY DEMO COMPONENT LOAD
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    /**
     * @return {?}
     */
    StDemoGenerator.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.component) {
            this.loadDemo();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StDemoGenerator.prototype.loadDemo = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.componentRef) {
            this.target.clear();
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(this.component);
            this.componentRef = this.target.createComponent(compFactory);
            this.bindDemoInputsAndOutputs();
        }
    };
    // tslint:disable:
    // tslint:disable:
    /**
     * @private
     * @return {?}
     */
    StDemoGenerator.prototype.bindDemoInputsAndOutputs = 
    // tslint:disable:
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Inputs its not necessary to be defined
        if (this.inputs) {
            Object.keys(this.inputs).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.componentRef.instance[key] = ((/** @type {?} */ (_this.inputs)))[key]; }));
        }
        // Inputs must be defined for subscribe to them
        if (this.outputs) {
            Object.keys(this.outputs).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (((/** @type {?} */ (_this.componentRef.instance))).hasOwnProperty(key)) {
                    _this.componentRef.instance[key].subscribe(((/** @type {?} */ (_this.outputs)))[key]);
                }
            }));
        }
        this.componentRef.changeDetectorRef.detectChanges();
    };
    StDemoGenerator.decorators = [
        { type: Component, args: [{
                    selector: 'st-demo-body',
                    template: '<div #stDemoBody></div>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n         width: 100%;\n         display: block;\n      }\n   "]
                }] }
    ];
    /** @nocollapse */
    StDemoGenerator.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: DemoGeneratorProviders }
    ]; };
    StDemoGenerator.propDecorators = {
        target: [{ type: ViewChild, args: ['stDemoBody', { read: ViewContainerRef, static: false },] }]
    };
    return StDemoGenerator;
}());
export { StDemoGenerator };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby1nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2RlbW8tZ2VuZXJhdG9yL2RlbW8tZ2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVVBLE9BQU8sRUFDSix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULHdCQUF3QixFQUl4QixTQUFTLEVBQ1QsZ0JBQWdCLEVBRWxCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRXBFO0lBb0JHLHlCQUNXLEdBQTZCLEVBQzdCLE1BQThCO1FBRDlCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQXdCO1FBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCx1Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUFXOzs7O0lBQVg7UUFDRyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5QjtJQUNKLENBQUM7Ozs7SUFFRCx5Q0FBZTs7O0lBQWY7UUFDRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xCO0lBQ0osQ0FBQzs7Ozs7SUFFTyxrQ0FBUTs7OztJQUFoQjtRQUNHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7O2dCQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDbEM7SUFDSixDQUFDO0lBRUQsa0JBQWtCOzs7Ozs7SUFDVixrREFBd0I7Ozs7OztJQUFoQztRQUFBLGlCQWdCQztRQWZFLHlDQUF5QztRQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLG1CQUFLLEtBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUF6RCxDQUF5RCxFQUFDLENBQUM7U0FDakc7UUFFRCwrQ0FBK0M7UUFDL0MsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsR0FBRztnQkFDOUIsSUFBSSxDQUFDLG1CQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFVLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzdELEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFLLEtBQUksQ0FBQyxPQUFPLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3RFO1lBQ0osQ0FBQyxFQUFDLENBQUM7U0FDTDtRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0JBcEVILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHlCQUF5QjtvQkFPbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBTnRDLGdGQUtSO2lCQUVIOzs7O2dCQXJCRSx3QkFBd0I7Z0JBU2xCLHNCQUFzQjs7O3lCQWMzQixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBeURyRSxzQkFBQztDQUFBLEFBckVELElBcUVDO1NBMURZLGVBQWU7OztJQUN6QixpQ0FBNkY7O0lBRTdGLGlDQUFlOztJQUNmLGtDQUFnQjs7SUFDaEIsb0NBQXFCOzs7OztJQUVyQix1Q0FBd0M7Ozs7O0lBR3JDLDhCQUFxQzs7Ozs7SUFDckMsaUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDb21wb25lbnQsXG4gICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICBDb21wb25lbnRSZWYsXG4gICBPbkRlc3Ryb3ksXG4gICBBZnRlclZpZXdJbml0LFxuICAgVmlld0NoaWxkLFxuICAgVmlld0NvbnRhaW5lclJlZixcbiAgIFR5cGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlbW9HZW5lcmF0b3JQcm92aWRlcnMgfSBmcm9tICcuL2RlbW8tZ2VuZXJhdG9yLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1kZW1vLWJvZHknLFxuICAgdGVtcGxhdGU6ICc8ZGl2ICNzdERlbW9Cb2R5PjwvZGl2PicsXG4gICBzdHlsZXM6IFtgXG4gICAgICA6aG9zdCB7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgYF0sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdERlbW9HZW5lcmF0b3IgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAgQFZpZXdDaGlsZCgnc3REZW1vQm9keScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KSB0YXJnZXQ6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgIGlucHV0czogT2JqZWN0O1xuICAgb3V0cHV0czogT2JqZWN0O1xuICAgY29tcG9uZW50OiBUeXBlPGFueT47XG5cbiAgIHByaXZhdGUgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PjtcblxuICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBjb25maWc6IERlbW9HZW5lcmF0b3JQcm92aWRlcnNcbiAgICkge1xuICAgICAgdGhpcy5pbnB1dHMgPSBjb25maWcuaW5wdXRzO1xuICAgICAgdGhpcy5vdXRwdXRzID0gY29uZmlnLm91dHB1dHM7XG4gICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbmZpZy5jb21wb25lbnRzWzBdO1xuICAgfVxuXG4gICAvKiogRFlOQU1JQyBCT0RZIERFTU8gQ09NUE9ORU5UIExPQUQgKi9cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICB9XG5cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgICAgdGhpcy5sb2FkRGVtbygpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGxvYWREZW1vKCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgdGhpcy50YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgIGxldCBjb21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy50YXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBGYWN0b3J5KTtcbiAgICAgICAgIHRoaXMuYmluZERlbW9JbnB1dHNBbmRPdXRwdXRzKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8vIHRzbGludDpkaXNhYmxlOlxuICAgcHJpdmF0ZSBiaW5kRGVtb0lucHV0c0FuZE91dHB1dHMoKTogdm9pZCB7XG4gICAgICAvLyBJbnB1dHMgaXRzIG5vdCBuZWNlc3NhcnkgdG8gYmUgZGVmaW5lZFxuICAgICAgaWYgKHRoaXMuaW5wdXRzKSB7XG4gICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmlucHV0cykubWFwKGtleSA9PiB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gKDxhbnk+dGhpcy5pbnB1dHMpW2tleV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBJbnB1dHMgbXVzdCBiZSBkZWZpbmVkIGZvciBzdWJzY3JpYmUgdG8gdGhlbVxuICAgICAgaWYgKHRoaXMub3V0cHV0cykge1xuICAgICAgICAgT2JqZWN0LmtleXModGhpcy5vdXRwdXRzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICgodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgT2JqZWN0KS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldLnN1YnNjcmliZSgoPGFueT50aGlzLm91dHB1dHMpW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgIH1cbn1cbiJdfQ==