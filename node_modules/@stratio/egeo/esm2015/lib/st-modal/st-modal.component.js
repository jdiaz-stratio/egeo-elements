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
export class StModalComponent {
    /**
     * @param {?} cfr
     * @param {?} windowRef
     */
    constructor(cfr, windowRef) {
        this.cfr = cfr;
        this.windowRef = windowRef;
        this.click = new EventEmitter();
        this.defaultMaxWidth = 600;
        this.defaultMinWidth = 400;
    }
    /**
     * @return {?}
     */
    get hasIcon() {
        return this.modalConfig.iconStatus;
    }
    /**
     * @return {?}
     */
    get isFullscreen() {
        return this.modalConfig.fullscreen;
    }
    /**
     * @return {?}
     */
    get title() {
        return this.modalConfig.modalTitle;
    }
    /**
     * @return {?}
     */
    get buttons() {
        return this.modalConfig.buttons || [];
    }
    /**
     * @return {?}
     */
    get isMessageModal() {
        return this.modalConfig.message && this.modalConfig.message.length > 0;
    }
    /**
     * @return {?}
     */
    get isComplexMessageModal() {
        return this.modalConfig.html && this.modalConfig.html.length > 0;
    }
    /**
     * @return {?}
     */
    get html() {
        return this.modalConfig.html;
    }
    /**
     * @return {?}
     */
    get message() {
        return this.modalConfig.message;
    }
    /**
     * @return {?}
     */
    get messageTitle() {
        return this.modalConfig.messageTitle;
    }
    /**
     * @return {?}
     */
    get modalStyles() {
        /** @type {?} */
        const maxWidth = this.modalConfig.maxWidth || this.defaultMaxWidth;
        /** @type {?} */
        const minWidth = this.modalConfig.minWidth || this.defaultMinWidth;
        /** @type {?} */
        const width = this.getModalActualWidth(maxWidth, minWidth);
        return { 'max-width': `${maxWidth}px`, 'min-width': `${minWidth}px`, 'width': `${width}px` };
    }
    /**
     * @return {?}
     */
    get emptyModal() {
        return this.modalConfig && this.modalConfig.empty;
    }
    /**
     * @return {?}
     */
    get showCloseBtn() {
        return this.modalConfig.showCloseBtn;
    }
    /**
     * @return {?}
     */
    onClose() {
        this.click.emit({
            response: StModalResponse.CLOSE,
            close: true
        });
    }
    /**
     * DYNAMIC MODAL BODY COMPONENT LOAD
     * @return {?}
     */
    ngAfterViewInit() {
        this.target = this.emptyModal ? this.targetEmpty : this.targetContent;
        if (this.component && !(this.modalConfig.html || this.modalConfig.message)) {
            this.loadBody();
        }
        this.windowRef.nativeWindow.document.body.classList.add('st-modal-overlay');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.windowRef.nativeWindow.document.body.classList.remove('st-modal-overlay');
    }
    /**
     * @private
     * @param {?} maxWidth
     * @param {?=} minWidth
     * @return {?}
     */
    getModalActualWidth(maxWidth, minWidth) {
        /** @type {?} */
        const screenWidth = this.windowRef.nativeWindow.screen.width;
        return screenWidth > maxWidth ? maxWidth : (screenWidth < minWidth ? minWidth : screenWidth);
    }
    /**
     * @private
     * @return {?}
     */
    loadBody() {
        if (!this.componentRef) {
            this.target.clear();
            /** @type {?} */
            const compFactory = this.cfr.resolveComponentFactory(this.component);
            this.componentRef = this.target.createComponent(compFactory);
            this.bindModalInputs();
        }
    }
    /**
     * @private
     * @return {?}
     */
    bindModalInputs() {
        Object.keys(this.modalConfig.inputs).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            this.componentRef.instance[key] = ((/** @type {?} */ (this.modalConfig.inputs)))[key];
        }));
        Object.keys(this.modalConfig.outputs).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            this.componentRef.instance[key].subscribe(((/** @type {?} */ (this.modalConfig.outputs)))[key]);
        }));
        this.componentRef.changeDetectorRef.detectChanges();
    }
}
StModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-modal',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<div class=\"st-modal-container\">\n   <section *ngIf=\"emptyModal\" class=\"st-modal\" [ngClass]=\"{'st-modal-fullscreen': isFullscreen}\" [ngStyle]=\"modalStyles\" [hidden]=\"emptyModal\">\n      <div #stModalBodyEmpty></div>\n   </section>\n   <section *ngIf=\"!emptyModal\" class=\"st-modal\" [ngClass]=\"{'st-modal-fullscreen': isFullscreen}\" [ngStyle]=\"modalStyles\" [hidden]=\"!emptyModal\">\n      <div class=\"st-modal-header\">\n         <div class=\"container\">\n            <span class=\"status-icon\" [ngClass]=\"hasIcon\" *ngIf=\"hasIcon\"></span>\n            <p class=\"title\">{{title}}</p> <span class=\"icon-cross close-button\" *ngIf=\"showCloseBtn\" (click)=\"onClose()\"></span>\n\n            <st-modal-buttons *ngIf=\"isFullscreen\" [buttonConfig]=\"buttons\" [fullscreen]=\"isFullscreen\" (click)=\"click.emit($event)\"></st-modal-buttons>\n         </div>\n      </div>\n      <div class=\"st-modal-body\">\n         <div class=\"container\">\n\n            <div *ngIf=\"isMessageModal\" class=\"message\">\n               <h1 id=\"st-modal-message-plain-title\" class=\"st-modal-message-plain-title\">{{messageTitle}}</h1>\n               <p id=\"st-modal-message-plain-message\" class=\"st-modal-message-plain-message\">{{message}}</p>\n            </div>\n            <div *ngIf=\"isComplexMessageModal\" [innerHTML]=\"html\" id=\"st-modal-message-html\"></div>\n            <div #stModalBody id=\"st-modal-message-component\"></div>\n\n         </div>\n      </div>\n      <footer class=\"st-modal-footer\" *ngIf=\"buttons && buttons.length > 0\">\n         <div class=\"container\">\n            <st-modal-buttons *ngIf=\"!isFullscreen\" [buttonConfig]=\"buttons\" (click)=\"click.emit($event)\"></st-modal-buttons>\n         </div>\n      </footer>\n   </section>\n</div>\n\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";.st-modal-container{display:flex;height:100vh;left:0;position:fixed;top:0;width:100%}.st-modal-container .st-modal{align-self:center;display:flex;flex-direction:column;margin:auto}.st-modal-container .st-modal.st-modal-fullscreen{min-height:100vh;max-height:100vh;min-width:100%;max-width:100%}.st-modal-container .st-modal .st-modal-header{display:flex;flex-direction:row;height:70px;width:100%}.st-modal-container .st-modal .st-modal-header .container{align-items:center;flex-wrap:nowrap}.st-modal-container .st-modal .st-modal-header .container .status-icon{padding-right:1.05rem}.st-modal-container .st-modal st-modal-buttons{display:flex;justify-content:flex-end;margin-left:auto}.st-modal-container .st-modal .container{min-width:auto}"]
            }] }
];
/** @nocollapse */
StModalComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: StWindowRefService }
];
StModalComponent.propDecorators = {
    modalConfig: [{ type: Input }],
    component: [{ type: Input }],
    click: [{ type: Output }],
    targetContent: [{ type: ViewChild, args: ['stModalBody', { read: ViewContainerRef, static: false },] }],
    targetEmpty: [{ type: ViewChild, args: ['stModalBodyEmpty', { read: ViewContainerRef, static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1tb2RhbC9zdC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1Qsd0JBQXdCLEVBRXhCLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxnQkFBZ0IsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QyxhQUFhLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRN0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFjMUIsWUFDVyxHQUE2QixFQUM3QixTQUE2QjtRQUQ3QixRQUFHLEdBQUgsR0FBRyxDQUEwQjtRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQWI5QixVQUFLLEdBQXdDLElBQUksWUFBWSxFQUF5QixDQUFDO1FBSXhGLG9CQUFlLEdBQVcsR0FBRyxDQUFDO1FBQzlCLG9CQUFlLEdBQVcsR0FBRyxDQUFDO0lBU25DLENBQUM7Ozs7SUFFTCxJQUFJLE9BQU87UUFDUixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDUixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsSUFBSSxjQUFj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QUUsVUFBVTtnQkFDcEIsb3RFQUF3QztnQkFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2pEOzs7O1lBbkJFLHdCQUF3QjtZQVlsQixrQkFBa0I7OzswQkFTdkIsS0FBSzt3QkFDTCxLQUFLO29CQUNMLE1BQU07NEJBQ04sU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzBCQUNsRSxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQUp4RSx1Q0FBb0M7O0lBQ3BDLHFDQUF3Qjs7SUFDeEIsaUNBQWlHOztJQUNqRyx5Q0FBcUc7O0lBQ3JHLHVDQUF3Rzs7SUFFeEcsMkNBQXVDOztJQUN2QywyQ0FBdUM7O0lBRXZDLGtDQUF5Qjs7Ozs7SUFFekIsd0NBQXdDOzs7OztJQUdyQywrQkFBcUM7Ozs7O0lBQ3JDLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ29tcG9uZW50LFxuICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgQ29tcG9uZW50UmVmLFxuICAgRXZlbnRFbWl0dGVyLFxuICAgSW5wdXQsXG4gICBPbkRlc3Ryb3ksXG4gICBBZnRlclZpZXdJbml0LFxuICAgT3V0cHV0LFxuICAgVmlld0NoaWxkLFxuICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RNb2RhbEJ1dHRvbiwgU3RNb2RhbEJ1dHRvblJlc3BvbnNlLCBTdE1vZGFsQ29uZmlnLCBTdE1vZGFsUmVzcG9uc2UgfSBmcm9tICcuL3N0LW1vZGFsLm1vZGVsJztcbmltcG9ydCB7IFN0V2luZG93UmVmU2VydmljZSB9IGZyb20gJy4uL3V0aWxzL3dpbmRvdy1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LW1vZGFsJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gICBASW5wdXQoKSBtb2RhbENvbmZpZzogU3RNb2RhbENvbmZpZztcbiAgIEBJbnB1dCgpIGNvbXBvbmVudDogYW55O1xuICAgQE91dHB1dCgpIGNsaWNrOiBFdmVudEVtaXR0ZXI8U3RNb2RhbEJ1dHRvblJlc3BvbnNlPiA9IG5ldyBFdmVudEVtaXR0ZXI8U3RNb2RhbEJ1dHRvblJlc3BvbnNlPigpO1xuICAgQFZpZXdDaGlsZCgnc3RNb2RhbEJvZHknLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSkgdGFyZ2V0Q29udGVudDogVmlld0NvbnRhaW5lclJlZjtcbiAgIEBWaWV3Q2hpbGQoJ3N0TW9kYWxCb2R5RW1wdHknLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogZmFsc2UgfSkgdGFyZ2V0RW1wdHk6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgIHJlYWRvbmx5IGRlZmF1bHRNYXhXaWR0aDogbnVtYmVyID0gNjAwO1xuICAgcmVhZG9ubHkgZGVmYXVsdE1pbldpZHRoOiBudW1iZXIgPSA0MDA7XG5cbiAgIHRhcmdldDogVmlld0NvbnRhaW5lclJlZjtcblxuICAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIHdpbmRvd1JlZjogU3RXaW5kb3dSZWZTZXJ2aWNlXG4gICApIHsgfVxuXG4gICBnZXQgaGFzSWNvbigpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcuaWNvblN0YXR1cztcbiAgIH1cblxuICAgZ2V0IGlzRnVsbHNjcmVlbigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLmZ1bGxzY3JlZW47XG4gICB9XG5cbiAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcubW9kYWxUaXRsZTtcbiAgIH1cblxuICAgZ2V0IGJ1dHRvbnMoKTogU3RNb2RhbEJ1dHRvbltdIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLmJ1dHRvbnMgfHwgW107XG4gICB9XG5cbiAgIGdldCBpc01lc3NhZ2VNb2RhbCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLm1lc3NhZ2UgJiYgdGhpcy5tb2RhbENvbmZpZy5tZXNzYWdlLmxlbmd0aCA+IDA7XG4gICB9XG5cbiAgIGdldCBpc0NvbXBsZXhNZXNzYWdlTW9kYWwoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5tb2RhbENvbmZpZy5odG1sICYmIHRoaXMubW9kYWxDb25maWcuaHRtbC5sZW5ndGggPiAwO1xuICAgfVxuXG4gICBnZXQgaHRtbCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcuaHRtbDtcbiAgIH1cblxuICAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLm1lc3NhZ2U7XG4gICB9XG5cbiAgIGdldCBtZXNzYWdlVGl0bGUoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLm1lc3NhZ2VUaXRsZTtcbiAgIH1cblxuICAgZ2V0IG1vZGFsU3R5bGVzKCk6IE9iamVjdCB7XG4gICAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMubW9kYWxDb25maWcubWF4V2lkdGggfHwgdGhpcy5kZWZhdWx0TWF4V2lkdGg7XG4gICAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMubW9kYWxDb25maWcubWluV2lkdGggfHwgdGhpcy5kZWZhdWx0TWluV2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TW9kYWxBY3R1YWxXaWR0aChtYXhXaWR0aCwgbWluV2lkdGgpO1xuICAgICAgcmV0dXJuIHsgJ21heC13aWR0aCc6IGAke21heFdpZHRofXB4YCwgJ21pbi13aWR0aCc6IGAke21pbldpZHRofXB4YCwgJ3dpZHRoJzogYCR7d2lkdGh9cHhgIH07XG4gICB9XG5cbiAgIGdldCBlbXB0eU1vZGFsKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMubW9kYWxDb25maWcgJiYgdGhpcy5tb2RhbENvbmZpZy5lbXB0eTtcbiAgIH1cblxuICAgZ2V0IHNob3dDbG9zZUJ0bigpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFsQ29uZmlnLnNob3dDbG9zZUJ0bjtcbiAgIH1cblxuICAgb25DbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2xpY2suZW1pdCh7XG4gICAgICAgICByZXNwb25zZTogU3RNb2RhbFJlc3BvbnNlLkNMT1NFLFxuICAgICAgICAgY2xvc2U6IHRydWVcbiAgICAgIH0pO1xuICAgfVxuXG4gICAvKiogRFlOQU1JQyBNT0RBTCBCT0RZIENPTVBPTkVOVCBMT0FEICovXG4gICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnRhcmdldCA9IHRoaXMuZW1wdHlNb2RhbCA/IHRoaXMudGFyZ2V0RW1wdHkgOiB0aGlzLnRhcmdldENvbnRlbnQ7XG4gICAgICBpZiAodGhpcy5jb21wb25lbnQgJiYgISh0aGlzLm1vZGFsQ29uZmlnLmh0bWwgfHwgdGhpcy5tb2RhbENvbmZpZy5tZXNzYWdlKSkge1xuICAgICAgICAgdGhpcy5sb2FkQm9keSgpO1xuICAgICAgfVxuICAgICAgdGhpcy53aW5kb3dSZWYubmF0aXZlV2luZG93LmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnc3QtbW9kYWwtb3ZlcmxheScpO1xuICAgfVxuXG4gICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy53aW5kb3dSZWYubmF0aXZlV2luZG93LmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnc3QtbW9kYWwtb3ZlcmxheScpO1xuICAgfVxuXG4gICBwcml2YXRlIGdldE1vZGFsQWN0dWFsV2lkdGgobWF4V2lkdGg6IG51bWJlciwgbWluV2lkdGg/OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgY29uc3Qgc2NyZWVuV2lkdGg6IG51bWJlciA9IHRoaXMud2luZG93UmVmLm5hdGl2ZVdpbmRvdy5zY3JlZW4ud2lkdGg7XG4gICAgICByZXR1cm4gc2NyZWVuV2lkdGggPiBtYXhXaWR0aCA/IG1heFdpZHRoIDogKHNjcmVlbldpZHRoIDwgbWluV2lkdGggPyBtaW5XaWR0aCA6IHNjcmVlbldpZHRoKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBsb2FkQm9keSgpOiB2b2lkIHtcbiAgICAgIGlmICghdGhpcy5jb21wb25lbnRSZWYpIHtcbiAgICAgICAgIHRoaXMudGFyZ2V0LmNsZWFyKCk7XG4gICAgICAgICBjb25zdCBjb21wRmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcbiAgICAgICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy50YXJnZXQuY3JlYXRlQ29tcG9uZW50KGNvbXBGYWN0b3J5KTtcbiAgICAgICAgIHRoaXMuYmluZE1vZGFsSW5wdXRzKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgYmluZE1vZGFsSW5wdXRzKCk6IHZvaWQge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5tb2RhbENvbmZpZy5pbnB1dHMpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZVtrZXldID0gKHRoaXMubW9kYWxDb25maWcuaW5wdXRzIGFzIGFueSlba2V5XTtcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5tb2RhbENvbmZpZy5vdXRwdXRzKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2Vba2V5XS5zdWJzY3JpYmUoKHRoaXMubW9kYWxDb25maWcub3V0cHV0cyBhcyBhbnkpW2tleV0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICB9XG59XG4iXX0=