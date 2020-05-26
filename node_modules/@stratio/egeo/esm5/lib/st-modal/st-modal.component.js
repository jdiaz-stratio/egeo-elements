/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.component.ts
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
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { StModalConfig, StModalResponse } from './st-modal.model';
import { StWindowRefService } from '../utils/window-service';
var StModalComponent = /** @class */ (function () {
    function StModalComponent(cfr, windowRef) {
        this.cfr = cfr;
        this.windowRef = windowRef;
        this.click = new EventEmitter();
        this.defaultMaxWidth = 600;
        this.defaultMinWidth = 400;
    }
    Object.defineProperty(StModalComponent.prototype, "hasIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.iconStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "isFullscreen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.fullscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.modalTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "buttons", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.buttons || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "isMessageModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.message && this.modalConfig.message.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "isComplexMessageModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.html && this.modalConfig.html.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "html", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.html;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "message", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "messageTitle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.messageTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "modalStyles", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var maxWidth = this.modalConfig.maxWidth || this.defaultMaxWidth;
            /** @type {?} */
            var minWidth = this.modalConfig.minWidth || this.defaultMinWidth;
            /** @type {?} */
            var width = this.getModalActualWidth(maxWidth, minWidth);
            return { 'max-width': maxWidth + "px", 'min-width': minWidth + "px", 'width': width + "px" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "emptyModal", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig && this.modalConfig.empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StModalComponent.prototype, "showCloseBtn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.modalConfig.showCloseBtn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StModalComponent.prototype.onClose = /**
     * @return {?}
     */
    function () {
        this.click.emit({
            response: StModalResponse.CLOSE,
            close: true
        });
    };
    /** DYNAMIC MODAL BODY COMPONENT LOAD */
    /**
     * DYNAMIC MODAL BODY COMPONENT LOAD
     * @return {?}
     */
    StModalComponent.prototype.ngAfterViewInit = /**
     * DYNAMIC MODAL BODY COMPONENT LOAD
     * @return {?}
     */
    function () {
        this.target = this.emptyModal ? this.targetEmpty : this.targetContent;
        if (this.component && !(this.modalConfig.html || this.modalConfig.message)) {
            this.loadBody();
        }
        this.windowRef.nativeWindow.document.body.classList.add('st-modal-overlay');
    };
    /**
     * @return {?}
     */
    StModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.windowRef.nativeWindow.document.body.classList.remove('st-modal-overlay');
    };
    /**
     * @private
     * @param {?} maxWidth
     * @param {?=} minWidth
     * @return {?}
     */
    StModalComponent.prototype.getModalActualWidth = /**
     * @private
     * @param {?} maxWidth
     * @param {?=} minWidth
     * @return {?}
     */
    function (maxWidth, minWidth) {
        /** @type {?} */
        var screenWidth = this.windowRef.nativeWindow.screen.width;
        return screenWidth > maxWidth ? maxWidth : (screenWidth < minWidth ? minWidth : screenWidth);
    };
    /**
     * @private
     * @return {?}
     */
    StModalComponent.prototype.loadBody = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.componentRef) {
            this.target.clear();
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(this.component);
            this.componentRef = this.target.createComponent(compFactory);
            this.bindModalInputs();
        }
    };
    /**
     * @private
     * @return {?}
     */
    StModalComponent.prototype.bindModalInputs = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.modalConfig.inputs).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.componentRef.instance[key] = ((/** @type {?} */ (_this.modalConfig.inputs)))[key];
        }));
        Object.keys(this.modalConfig.outputs).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.componentRef.instance[key].subscribe(((/** @type {?} */ (_this.modalConfig.outputs)))[key]);
        }));
        this.componentRef.changeDetectorRef.detectChanges();
    };
    StModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-modal',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-modal-container\">\n   <section *ngIf=\"emptyModal\" class=\"st-modal\" [ngClass]=\"{'st-modal-fullscreen': isFullscreen}\" [ngStyle]=\"modalStyles\" [hidden]=\"emptyModal\">\n      <div #stModalBodyEmpty></div>\n   </section>\n   <section *ngIf=\"!emptyModal\" class=\"st-modal\" [ngClass]=\"{'st-modal-fullscreen': isFullscreen}\" [ngStyle]=\"modalStyles\" [hidden]=\"!emptyModal\">\n      <div class=\"st-modal-header\">\n         <div class=\"container\">\n            <span class=\"status-icon\" [ngClass]=\"hasIcon\" *ngIf=\"hasIcon\"></span>\n            <p class=\"title\">{{title}}</p> <span class=\"icon-cross close-button\" *ngIf=\"showCloseBtn\" (click)=\"onClose()\"></span>\n\n            <st-modal-buttons *ngIf=\"isFullscreen\" [buttonConfig]=\"buttons\" [fullscreen]=\"isFullscreen\" (click)=\"click.emit($event)\"></st-modal-buttons>\n         </div>\n      </div>\n      <div class=\"st-modal-body\">\n         <div class=\"container\">\n\n            <div *ngIf=\"isMessageModal\" class=\"message\">\n               <h1 id=\"st-modal-message-plain-title\" class=\"st-modal-message-plain-title\">{{messageTitle}}</h1>\n               <p id=\"st-modal-message-plain-message\" class=\"st-modal-message-plain-message\">{{message}}</p>\n            </div>\n            <div *ngIf=\"isComplexMessageModal\" [innerHTML]=\"html\" id=\"st-modal-message-html\"></div>\n            <div #stModalBody id=\"st-modal-message-component\"></div>\n\n         </div>\n      </div>\n      <footer class=\"st-modal-footer\" *ngIf=\"buttons && buttons.length > 0\">\n         <div class=\"container\">\n            <st-modal-buttons *ngIf=\"!isFullscreen\" [buttonConfig]=\"buttons\" (click)=\"click.emit($event)\"></st-modal-buttons>\n         </div>\n      </footer>\n   </section>\n</div>\n\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["@charset \"UTF-8\";.st-modal-container{display:flex;height:100vh;left:0;position:fixed;top:0;width:100%}.st-modal-container .st-modal{align-self:center;display:flex;flex-direction:column;margin:auto}.st-modal-container .st-modal.st-modal-fullscreen{min-height:100vh;max-height:100vh;min-width:100%;max-width:100%}.st-modal-container .st-modal .st-modal-header{display:flex;flex-direction:row;height:70px;width:100%}.st-modal-container .st-modal .st-modal-header .container{align-items:center;flex-wrap:nowrap}.st-modal-container .st-modal .st-modal-header .container .status-icon{padding-right:1.05rem}.st-modal-container .st-modal st-modal-buttons{display:flex;justify-content:flex-end;margin-left:auto}.st-modal-container .st-modal .container{min-width:auto}"]
                }] }
    ];
    /** @nocollapse */
    StModalComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: StWindowRefService }
    ]; };
    StModalComponent.propDecorators = {
        modalConfig: [{ type: Input }],
        component: [{ type: Input }],
        click: [{ type: Output }],
        targetContent: [{ type: ViewChild, args: ['stModalBody', { read: ViewContainerRef, static: false },] }],
        targetEmpty: [{ type: ViewChild, args: ['stModalBodyEmpty', { read: ViewContainerRef, static: false },] }]
    };
    return StModalComponent;
}());
export { StModalComponent };
if (false) {
    /** @type {?} */
    StModalComponent.prototype.modalConfig;
    /** @type {?} */
    StModalComponent.prototype.component;
    /** @type {?} */
    StModalComponent.prototype.click;
    /** @type {?} */
    StModalComponent.prototype.targetContent;
    /** @type {?} */
    StModalComponent.prototype.targetEmpty;
    /** @type {?} */
    StModalComponent.prototype.defaultMaxWidth;
    /** @type {?} */
    StModalComponent.prototype.defaultMinWidth;
    /** @type {?} */
    StModalComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    StModalComponent.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    StModalComponent.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    StModalComponent.prototype.windowRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1tb2RhbC9zdC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QyxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0Q7SUFvQkcsMEJBQ1csR0FBNkIsRUFDN0IsU0FBNkI7UUFEN0IsUUFBRyxHQUFILEdBQUcsQ0FBMEI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFiOUIsVUFBSyxHQUF3QyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUl4RixvQkFBZSxHQUFXLEdBQUcsQ0FBQztRQUM5QixvQkFBZSxHQUFXLEdBQUcsQ0FBQztJQVNuQyxDQUFDO0lBRUwsc0JBQUkscUNBQU87Ozs7UUFBWDtZQUNHLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBWTs7OztRQUFoQjtZQUNHLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBSzs7OztRQUFUO1lBQ0csT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDRyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FB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QUMsU0FBUyxDQUFDLENBQUMsbUJBQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckYsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQXpISCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLG90RUFBd0M7b0JBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDakQ7Ozs7Z0JBbkJFLHdCQUF3QjtnQkFZbEIsa0JBQWtCOzs7OEJBU3ZCLEtBQUs7NEJBQ0wsS0FBSzt3QkFDTCxNQUFNO2dDQUNOLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs4QkFDbEUsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBK0czRSx1QkFBQztDQUFBLEFBMUhELElBMEhDO1NBcEhZLGdCQUFnQjs7O0lBQzFCLHVDQUFvQzs7SUFDcEMscUNBQXdCOztJQUN4QixpQ0FBaUc7O0lBQ2pHLHlDQUFxRzs7SUFDckcsdUNBQXdHOztJQUV4RywyQ0FBdUM7O0lBQ3ZDLDJDQUF1Qzs7SUFFdkMsa0NBQXlCOzs7OztJQUV6Qix3Q0FBd0M7Ozs7O0lBR3JDLCtCQUFxQzs7Ozs7SUFDckMscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICBDb21wb25lbnQsXG4gICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICBDb21wb25lbnRSZWYsXG4gICBFdmVudEVtaXR0ZXIsXG4gICBJbnB1dCxcbiAgIE9uRGVzdHJveSxcbiAgIEFmdGVyVmlld0luaXQsXG4gICBPdXRwdXQsXG4gICBWaWV3Q2hpbGQsXG4gICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdE1vZGFsQnV0dG9uLCBTdE1vZGFsQnV0dG9uUmVzcG9uc2UsIFN0TW9kYWxDb25maWcsIFN0TW9kYWxSZXNwb25zZSB9IGZyb20gJy4vc3QtbW9kYWwubW9kZWwnO1xuaW1wb3J0IHsgU3RXaW5kb3dSZWZTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMvd2luZG93LXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtbW9kYWwnLFxuICAgdGVtcGxhdGVVcmw6ICcuL3N0LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgIHN0eWxlVXJsczogWycuL3N0LW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG4gICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTdE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgIEBJbnB1dCgpIG1vZGFsQ29uZmlnOiBTdE1vZGFsQ29uZmlnO1xuICAgQElucHV0KCkgY29tcG9uZW50OiBhbnk7XG4gICBAT3V0cHV0KCkgY2xpY2s6IEV2ZW50RW1pdHRlcjxTdE1vZGFsQnV0dG9uUmVzcG9uc2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxTdE1vZGFsQnV0dG9uUmVzcG9uc2U+KCk7XG4gICBAVmlld0NoaWxkKCdzdE1vZGFsQm9keScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KSB0YXJnZXRDb250ZW50OiBWaWV3Q29udGFpbmVyUmVmO1xuICAgQFZpZXdDaGlsZCgnc3RNb2RhbEJvZHlFbXB0eScsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiBmYWxzZSB9KSB0YXJnZXRFbXB0eTogVmlld0NvbnRhaW5lclJlZjtcblxuICAgcmVhZG9ubHkgZGVmYXVsdE1heFdpZHRoOiBudW1iZXIgPSA2MDA7XG4gICByZWFkb25seSBkZWZhdWx0TWluV2lkdGg6IG51bWJlciA9IDQwMDtcblxuICAgdGFyZ2V0OiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gICBwcml2YXRlIGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XG5cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgd2luZG93UmVmOiBTdFdpbmRvd1JlZlNlcnZpY2VcbiAgICkgeyB9XG5cbiAgIGdldCBoYXNJY29uKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbENvbmZpZy5pY29uU3RhdHVzO1xuICAgfVxuXG4gICBnZXQgaXNGdWxsc2NyZWVuKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcuZnVsbHNjcmVlbjtcbiAgIH1cblxuICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbENvbmZpZy5tb2RhbFRpdGxlO1xuICAgfVxuXG4gICBnZXQgYnV0dG9ucygpOiBTdE1vZGFsQnV0dG9uW10ge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcuYnV0dG9ucyB8fCBbXTtcbiAgIH1cblxuICAgZ2V0IGlzTWVzc2FnZU1vZGFsKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcubWVzc2FnZSAmJiB0aGlzLm1vZGFsQ29uZmlnLm1lc3NhZ2UubGVuZ3RoID4gMDtcbiAgIH1cblxuICAgZ2V0IGlzQ29tcGxleE1lc3NhZ2VNb2RhbCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLmh0bWwgJiYgdGhpcy5tb2RhbENvbmZpZy5odG1sLmxlbmd0aCA+IDA7XG4gICB9XG5cbiAgIGdldCBodG1sKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbENvbmZpZy5odG1sO1xuICAgfVxuXG4gICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcubWVzc2FnZTtcbiAgIH1cblxuICAgZ2V0IG1lc3NhZ2VUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcubWVzc2FnZVRpdGxlO1xuICAgfVxuXG4gICBnZXQgbW9kYWxTdHlsZXMoKTogT2JqZWN0IHtcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5tb2RhbENvbmZpZy5tYXhXaWR0aCB8fCB0aGlzLmRlZmF1bHRNYXhXaWR0aDtcbiAgICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5tb2RhbENvbmZpZy5taW5XaWR0aCB8fCB0aGlzLmRlZmF1bHRNaW5XaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRNb2RhbEFjdHVhbFdpZHRoKG1heFdpZHRoLCBtaW5XaWR0aCk7XG4gICAgICByZXR1cm4geyAnbWF4LXdpZHRoJzogYCR7bWF4V2lkdGh9cHhgLCAnbWluLXdpZHRoJzogYCR7bWluV2lkdGh9cHhgLCAnd2lkdGgnOiBgJHt3aWR0aH1weGAgfTtcbiAgIH1cblxuICAgZ2V0IGVtcHR5TW9kYWwoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbENvbmZpZyAmJiB0aGlzLm1vZGFsQ29uZmlnLmVtcHR5O1xuICAgfVxuXG4gICBnZXQgc2hvd0Nsb3NlQnRuKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcuc2hvd0Nsb3NlQnRuO1xuICAgfVxuXG4gICBvbkNsb3NlKCk6IHZvaWQge1xuICAgICAgdGhpcy5jbGljay5lbWl0KHtcbiAgICAgICAgIHJlc3BvbnNlOiBTdE1vZGFsUmVzcG9uc2UuQ0xPU0UsXG4gICAgICAgICBjbG9zZTogdHJ1ZVxuICAgICAgfSk7XG4gICB9XG5cbiAgIC8qKiBEWU5BTUlDIE1PREFMIEJPRFkgQ09NUE9ORU5UIExPQUQgKi9cbiAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5lbXB0eU1vZGFsID8gdGhpcy50YXJnZXRFbXB0eSA6IHRoaXMudGFyZ2V0Q29udGVudDtcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudCAmJiAhKHRoaXMubW9kYWxDb25maWcuaHRtbCB8fCB0aGlzLm1vZGFsQ29uZmlnLm1lc3NhZ2UpKSB7XG4gICAgICAgICB0aGlzLmxvYWRCb2R5KCk7XG4gICAgICB9XG4gICAgICB0aGlzLndpbmRvd1JlZi5uYXRpdmVXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdC1tb2RhbC1vdmVybGF5Jyk7XG4gICB9XG5cbiAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuY29tcG9uZW50UmVmKSB7XG4gICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgICB0aGlzLndpbmRvd1JlZi5uYXRpdmVXaW5kb3cuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzdC1tb2RhbC1vdmVybGF5Jyk7XG4gICB9XG5cbiAgIHByaXZhdGUgZ2V0TW9kYWxBY3R1YWxXaWR0aChtYXhXaWR0aDogbnVtYmVyLCBtaW5XaWR0aD86IG51bWJlcik6IG51bWJlciB7XG4gICAgICBjb25zdCBzY3JlZW5XaWR0aDogbnVtYmVyID0gdGhpcy53aW5kb3dSZWYubmF0aXZlV2luZG93LnNjcmVlbi53aWR0aDtcbiAgICAgIHJldHVybiBzY3JlZW5XaWR0aCA+IG1heFdpZHRoID8gbWF4V2lkdGggOiAoc2NyZWVuV2lkdGggPCBtaW5XaWR0aCA/IG1pbldpZHRoIDogc2NyZWVuV2lkdGgpO1xuICAgfVxuXG4gICBwcml2YXRlIGxvYWRCb2R5KCk6IHZvaWQge1xuICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgdGhpcy50YXJnZXQuY2xlYXIoKTtcbiAgICAgICAgIGNvbnN0IGNvbXBGYWN0b3J5ID0gdGhpcy5jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLnRhcmdldC5jcmVhdGVDb21wb25lbnQoY29tcEZhY3RvcnkpO1xuICAgICAgICAgdGhpcy5iaW5kTW9kYWxJbnB1dHMoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBiaW5kTW9kYWxJbnB1dHMoKTogdm9pZCB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGFsQ29uZmlnLmlucHV0cykuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSAodGhpcy5tb2RhbENvbmZpZy5pbnB1dHMgYXMgYW55KVtrZXldO1xuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGFsQ29uZmlnLm91dHB1dHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldLnN1YnNjcmliZSgodGhpcy5tb2RhbENvbmZpZy5vdXRwdXRzIGFzIGFueSlba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgIH1cbn1cbiJdfQ==