/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-modal/st-modal.service.ts
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
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/* local dependencies */
import { StModalComponent } from './st-modal.component';
import { StModalResponse, StModalBasicType } from './st-modal.model';
export class StModalService {
    /**
     * @param {?} _cfr
     */
    constructor(_cfr) {
        this._cfr = _cfr;
        this._containerRef = undefined;
        this.dynamicModal = undefined;
    }
    /* External API */
    /**
     * @param {?} container
     * @return {?}
     */
    set container(container) {
        this._containerRef = container;
    }
    // - Public methods
    /**
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    show(config, component) {
        /** @type {?} */
        let errors = this.canCreateModal(config, component);
        if (errors && errors.length > 0) {
            throw new Error(errors.join(' '));
        }
        this.notifyButtonInteraction = new Subject();
        this.createModal(this.createConfig(config), component);
        return this.notifyButtonInteraction.asObservable();
    }
    /**
     * @param {?} type
     * @param {?} modalTitle
     * @param {?} messageTitle
     * @param {?} message
     * @param {?} okButton
     * @param {?=} cancelButton
     * @param {?=} maxWidth
     * @param {?=} minWidth
     * @param {?=} icon
     * @return {?}
     */
    showBasicModal(type, modalTitle, messageTitle, message, okButton, cancelButton = '', maxWidth = 600, minWidth = 400, icon = '') {
        /** @type {?} */
        let iconStatus;
        /** @type {?} */
        const buttons = [{
                label: okButton,
                classes: (type === StModalBasicType.DELETE) ? 'button-critical' : 'button-primary',
                responseValue: StModalResponse.YES,
                closeOnClick: true
            }];
        if (type !== StModalBasicType.INFO) {
            buttons.unshift({
                label: cancelButton,
                classes: (type === StModalBasicType.DELETE) ? 'button-borderless' : 'button-secondary',
                responseValue: StModalResponse.NO,
                closeOnClick: true
            });
        }
        switch (type) {
            case StModalBasicType.DELETE:
                iconStatus = 'icon-circle-cross';
                break;
            case StModalBasicType.WARNING:
                iconStatus = 'icon-alert';
                break;
            default:
                iconStatus = icon;
                break;
        }
        return this.show({
            fullscreen: false,
            message,
            messageTitle,
            modalTitle,
            buttons,
            maxWidth,
            minWidth,
            iconStatus
        });
    }
    /**
     * @return {?}
     */
    close() {
        this.destroy();
    }
    /* INTERNAL METHODS FOR WORK WITH MODALS */
    /**
     * @private
     * @param {?} modalConfig
     * @param {?=} component
     * @return {?}
     */
    createModal(modalConfig, component) {
        /** @type {?} */
        let stModalFactory = this._cfr.resolveComponentFactory(StModalComponent);
        if (stModalFactory) {
            this._containerRef.clear();
            this.dynamicModal = this._containerRef.createComponent(stModalFactory);
            this.bindVars(modalConfig, component);
        }
    }
    /**
     * @private
     * @return {?}
     */
    destroy() {
        if (this.dynamicModal) {
            this.dynamicModal.destroy();
            this.dynamicModal = undefined;
            this.notifyButtonInteraction.next(StModalResponse.CLOSE);
            this.notifyButtonInteraction.complete();
        }
    }
    /**
     * @private
     * @param {?} modalConfig
     * @param {?} component
     * @return {?}
     */
    bindVars(modalConfig, component) {
        this.dynamicModal.instance.component = component;
        this.dynamicModal.instance.click.subscribe(this.notify.bind(this));
        this.dynamicModal.instance.modalConfig = modalConfig;
        this.dynamicModal.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @param {?} buttonResponse
     * @return {?}
     */
    notify(buttonResponse) {
        this.notifyButtonInteraction.next(buttonResponse.response);
        if (buttonResponse.close) {
            this.close();
        }
    }
    /**
     * @private
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    canCreateModal(config, component) {
        /** @type {?} */
        let errors = [];
        if (!this._containerRef) {
            errors.push(`[ERROR]: StModalService => Cant find container, are you sure you declarate in MAIN APP component in html and typescript?`);
        }
        if (this.dynamicModal !== undefined) {
            errors.push(`[ERROR]: StModalService => Can't create modal beacause already exists one. Are you sure that you call close method?)`);
        }
        if (!component && !config.message && !config.html) {
            errors.push(`[ERROR]: StModalService => Can't find message, html or component to show in modal`);
        }
        return errors;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createConfig(config) {
        /** @type {?} */
        const defaultConfig = {
            fullscreen: false,
            inputs: {},
            outputs: {},
            modalTitle: 'Default title',
            messageTitle: 'Default subtitle',
            buttons: [],
            message: undefined,
            html: undefined,
            maxWidth: undefined,
            minWidth: undefined,
            empty: false
        };
        /** @type {?} */
        const checkedConfig = Object.assign({}, defaultConfig, config);
        checkedConfig.buttons = this.checkButtons(checkedConfig.buttons);
        return checkedConfig;
    }
    /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    checkButtons(buttons) {
        return buttons.map((/**
         * @param {?} button
         * @return {?}
         */
        button => Object.assign({}, { label: 'Button', closeOnClick: false }, button)));
    }
}
StModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StModalService.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype._containerRef;
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype.dynamicModal;
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype.notifyButtonInteraction;
    /**
     * @type {?}
     * @private
     */
    StModalService.prototype._cfr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbW9kYWwvc3QtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBRUosd0JBQXdCLEVBRXhCLFVBQVUsRUFHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUdKLGVBQWUsRUFFZixnQkFBZ0IsRUFDbEIsTUFBTSxrQkFBa0IsQ0FBQztBQUcxQixNQUFNLE9BQU8sY0FBYzs7OztJQU14QixZQUFvQixJQUE4QjtRQUE5QixTQUFJLEdBQUosSUFBSSxDQUEwQjtRQUoxQyxrQkFBYSxHQUFxQixTQUFTLENBQUM7UUFDNUMsaUJBQVksR0FBbUMsU0FBUyxDQUFDO0lBR1gsQ0FBQzs7Ozs7O0lBR3ZELElBQUksU0FBUyxDQUFDLFNBQTJCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7Ozs7Ozs7SUFHRCxJQUFJLENBQUMsTUFBcUIsRUFBRSxTQUFxQjs7WUFDMUMsTUFBTSxHQUFhLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztRQUM3RCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNwQztRQUNELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUs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QU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxTQUFTO1lBQ2YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsS0FBSyxFQUFFLEtBQUs7U0FDZDs7Y0FDSyxhQUFhLEdBQWtCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUM7UUFDN0UsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxPQUFPLGFBQWEsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsT0FBd0I7UUFDMUMsT0FBTyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3JHLENBQUM7OztZQXhKSCxVQUFVOzs7O1lBbEJSLHdCQUF3Qjs7Ozs7OztJQXFCeEIsdUNBQW9EOzs7OztJQUNwRCxzQ0FBaUU7Ozs7O0lBQ2pFLGlEQUEwRDs7Ozs7SUFFOUMsOEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQge1xuICAgQ29tcG9uZW50RmFjdG9yeSxcbiAgIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgIENvbXBvbmVudFJlZixcbiAgIEluamVjdGFibGUsXG4gICBUeXBlLFxuICAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG4vKiBsb2NhbCBkZXBlbmRlbmNpZXMgKi9cbmltcG9ydCB7IFN0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3N0LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICAgU3RNb2RhbEJ1dHRvbixcbiAgIFN0TW9kYWxDb25maWcsXG4gICBTdE1vZGFsUmVzcG9uc2UsXG4gICBTdE1vZGFsQnV0dG9uUmVzcG9uc2UsXG4gICBTdE1vZGFsQmFzaWNUeXBlXG59IGZyb20gJy4vc3QtbW9kYWwubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RNb2RhbFNlcnZpY2Uge1xuXG4gICBwcml2YXRlIF9jb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYgPSB1bmRlZmluZWQ7XG4gICBwcml2YXRlIGR5bmFtaWNNb2RhbDogQ29tcG9uZW50UmVmPFN0TW9kYWxDb21wb25lbnQ+ID0gdW5kZWZpbmVkO1xuICAgcHJpdmF0ZSBub3RpZnlCdXR0b25JbnRlcmFjdGlvbjogU3ViamVjdDxTdE1vZGFsUmVzcG9uc2U+O1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikgeyB9XG5cbiAgIC8qIEV4dGVybmFsIEFQSSAqL1xuICAgc2V0IGNvbnRhaW5lcihjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lclJlZiA9IGNvbnRhaW5lcjtcbiAgIH1cblxuICAgLy8gLSBQdWJsaWMgbWV0aG9kc1xuICAgc2hvdyhjb25maWc6IFN0TW9kYWxDb25maWcsIGNvbXBvbmVudD86IFR5cGU8YW55Pik6IE9ic2VydmFibGU8U3RNb2RhbFJlc3BvbnNlPiB7XG4gICAgICBsZXQgZXJyb3JzOiBzdHJpbmdbXSA9IHRoaXMuY2FuQ3JlYXRlTW9kYWwoY29uZmlnLCBjb21wb25lbnQpO1xuICAgICAgaWYgKGVycm9ycyAmJiBlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5qb2luKCcgJykpO1xuICAgICAgfVxuICAgICAgdGhpcy5ub3RpZnlCdXR0b25JbnRlcmFjdGlvbiA9IG5ldyBTdWJqZWN0PFN0TW9kYWxSZXNwb25zZT4oKTtcbiAgICAgIHRoaXMuY3JlYXRlTW9kYWwodGhpcy5jcmVhdGVDb25maWcoY29uZmlnKSwgY29tcG9uZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm5vdGlmeUJ1dHRvbkludGVyYWN0aW9uLmFzT2JzZXJ2YWJsZSgpO1xuICAgfVxuXG4gICBzaG93QmFzaWNNb2RhbChcbiAgICAgIHR5cGU6IFN0TW9kYWxCYXNpY1R5cGUsXG4gICAgICBtb2RhbFRpdGxlOiBzdHJpbmcsXG4gICAgICBtZXNzYWdlVGl0bGU6IHN0cmluZyxcbiAgICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAgIG9rQnV0dG9uOiBzdHJpbmcsXG4gICAgICBjYW5jZWxCdXR0b246IHN0cmluZyA9ICcnLFxuICAgICAgbWF4V2lkdGg6IG51bWJlciA9IDYwMCxcbiAgICAgIG1pbldpZHRoOiBudW1iZXIgPSA0MDAsXG4gICAgICBpY29uOiBzdHJpbmcgPSAnJ1xuICAgKTogT2JzZXJ2YWJsZTxTdE1vZGFsUmVzcG9uc2U+IHtcbiAgICAgIGxldCBpY29uU3RhdHVzOiBzdHJpbmc7XG5cbiAgICAgIGNvbnN0IGJ1dHRvbnM6IFN0TW9kYWxCdXR0b25bXSA9IFt7XG4gICAgICAgICBsYWJlbDogb2tCdXR0b24sXG4gICAgICAgICBjbGFzc2VzOiAodHlwZSA9PT0gU3RNb2RhbEJhc2ljVHlwZS5ERUxFVEUpID8gJ2J1dHRvbi1jcml0aWNhbCcgOiAnYnV0dG9uLXByaW1hcnknLFxuICAgICAgICAgcmVzcG9uc2VWYWx1ZTogU3RNb2RhbFJlc3BvbnNlLllFUyxcbiAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZVxuICAgICAgfV07XG5cbiAgICAgIGlmICh0eXBlICE9PSBTdE1vZGFsQmFzaWNUeXBlLklORk8pIHtcbiAgICAgICAgIGJ1dHRvbnMudW5zaGlmdCh7XG4gICAgICAgICAgICBsYWJlbDogY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgY2xhc3NlczogKHR5cGUgPT09IFN0TW9kYWxCYXNpY1R5cGUuREVMRVRFKSA/ICdidXR0b24tYm9yZGVybGVzcycgOiAnYnV0dG9uLXNlY29uZGFyeScsXG4gICAgICAgICAgICByZXNwb25zZVZhbHVlOiBTdE1vZGFsUmVzcG9uc2UuTk8sXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWVcbiAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgIGNhc2UgU3RNb2RhbEJhc2ljVHlwZS5ERUxFVEU6XG4gICAgICAgICAgICBpY29uU3RhdHVzID0gJ2ljb24tY2lyY2xlLWNyb3NzJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgY2FzZSBTdE1vZGFsQmFzaWNUeXBlLldBUk5JTkc6XG4gICAgICAgICAgICBpY29uU3RhdHVzID0gJ2ljb24tYWxlcnQnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWNvblN0YXR1cyA9IGljb247XG4gICAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2hvdyh7XG4gICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICBtZXNzYWdlVGl0bGUsXG4gICAgICAgICBtb2RhbFRpdGxlLFxuICAgICAgICAgYnV0dG9ucyxcbiAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgbWluV2lkdGgsXG4gICAgICAgICBpY29uU3RhdHVzXG4gICAgICB9KTtcbiAgIH1cblxuICAgY2xvc2UoKTogdm9pZCB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgIH1cblxuICAgLyogSU5URVJOQUwgTUVUSE9EUyBGT1IgV09SSyBXSVRIIE1PREFMUyAqL1xuICAgcHJpdmF0ZSBjcmVhdGVNb2RhbChtb2RhbENvbmZpZzogU3RNb2RhbENvbmZpZywgY29tcG9uZW50PzogVHlwZTxhbnk+KTogdm9pZCB7XG4gICAgICBsZXQgc3RNb2RhbEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8U3RNb2RhbENvbXBvbmVudD4gPSB0aGlzLl9jZnIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoU3RNb2RhbENvbXBvbmVudCk7XG4gICAgICBpZiAoc3RNb2RhbEZhY3RvcnkpIHtcbiAgICAgICAgIHRoaXMuX2NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICAgdGhpcy5keW5hbWljTW9kYWwgPSB0aGlzLl9jb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50PFN0TW9kYWxDb21wb25lbnQ+KHN0TW9kYWxGYWN0b3J5KTtcbiAgICAgICAgIHRoaXMuYmluZFZhcnMobW9kYWxDb25maWcsIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgZGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLmR5bmFtaWNNb2RhbCkge1xuICAgICAgICAgdGhpcy5keW5hbWljTW9kYWwuZGVzdHJveSgpO1xuICAgICAgICAgdGhpcy5keW5hbWljTW9kYWwgPSB1bmRlZmluZWQ7XG4gICAgICAgICB0aGlzLm5vdGlmeUJ1dHRvbkludGVyYWN0aW9uLm5leHQoU3RNb2RhbFJlc3BvbnNlLkNMT1NFKTtcbiAgICAgICAgIHRoaXMubm90aWZ5QnV0dG9uSW50ZXJhY3Rpb24uY29tcGxldGUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBiaW5kVmFycyhtb2RhbENvbmZpZzogU3RNb2RhbENvbmZpZywgY29tcG9uZW50OiBUeXBlPGFueT4pOiB2b2lkIHtcbiAgICAgIHRoaXMuZHluYW1pY01vZGFsLmluc3RhbmNlLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAgICAgdGhpcy5keW5hbWljTW9kYWwuaW5zdGFuY2UuY2xpY2suc3Vic2NyaWJlKHRoaXMubm90aWZ5LmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5keW5hbWljTW9kYWwuaW5zdGFuY2UubW9kYWxDb25maWcgPSBtb2RhbENvbmZpZztcblxuICAgICAgdGhpcy5keW5hbWljTW9kYWwuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgfVxuXG4gICBwcml2YXRlIG5vdGlmeShidXR0b25SZXNwb25zZTogU3RNb2RhbEJ1dHRvblJlc3BvbnNlKTogdm9pZCB7XG4gICAgICB0aGlzLm5vdGlmeUJ1dHRvbkludGVyYWN0aW9uLm5leHQoYnV0dG9uUmVzcG9uc2UucmVzcG9uc2UpO1xuICAgICAgaWYgKGJ1dHRvblJlc3BvbnNlLmNsb3NlKSB7XG4gICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICB9XG5cbiAgIHByaXZhdGUgY2FuQ3JlYXRlTW9kYWwoY29uZmlnOiBTdE1vZGFsQ29uZmlnLCBjb21wb25lbnQ/OiBUeXBlPGFueT4pOiBzdHJpbmdbXSB7XG4gICAgICBsZXQgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgaWYgKCF0aGlzLl9jb250YWluZXJSZWYpIHtcbiAgICAgICAgIGVycm9ycy5wdXNoKGBbRVJST1JdOiBTdE1vZGFsU2VydmljZSA9PiBDYW50IGZpbmQgY29udGFpbmVyLCBhcmUgeW91IHN1cmUgeW91IGRlY2xhcmF0ZSBpbiBNQUlOIEFQUCBjb21wb25lbnQgaW4gaHRtbCBhbmQgdHlwZXNjcmlwdD9gKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmR5bmFtaWNNb2RhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICBlcnJvcnMucHVzaChgW0VSUk9SXTogU3RNb2RhbFNlcnZpY2UgPT4gQ2FuJ3QgY3JlYXRlIG1vZGFsIGJlYWNhdXNlIGFscmVhZHkgZXhpc3RzIG9uZS4gQXJlIHlvdSBzdXJlIHRoYXQgeW91IGNhbGwgY2xvc2UgbWV0aG9kPylgKTtcbiAgICAgIH1cbiAgICAgIGlmICghY29tcG9uZW50ICYmICFjb25maWcubWVzc2FnZSAmJiAhY29uZmlnLmh0bWwpIHtcbiAgICAgICAgIGVycm9ycy5wdXNoKGBbRVJST1JdOiBTdE1vZGFsU2VydmljZSA9PiBDYW4ndCBmaW5kIG1lc3NhZ2UsIGh0bWwgb3IgY29tcG9uZW50IHRvIHNob3cgaW4gbW9kYWxgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlcnJvcnM7XG4gICB9XG5cbiAgIHByaXZhdGUgY3JlYXRlQ29uZmlnKGNvbmZpZzogU3RNb2RhbENvbmZpZyk6IFN0TW9kYWxDb25maWcge1xuICAgICAgY29uc3QgZGVmYXVsdENvbmZpZzogU3RNb2RhbENvbmZpZyA9IHtcbiAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgaW5wdXRzOiB7fSxcbiAgICAgICAgIG91dHB1dHM6IHt9LFxuICAgICAgICAgbW9kYWxUaXRsZTogJ0RlZmF1bHQgdGl0bGUnLFxuICAgICAgICAgbWVzc2FnZVRpdGxlOiAnRGVmYXVsdCBzdWJ0aXRsZScsXG4gICAgICAgICBidXR0b25zOiBbXSxcbiAgICAgICAgIG1lc3NhZ2U6IHVuZGVmaW5lZCxcbiAgICAgICAgIGh0bWw6IHVuZGVmaW5lZCxcbiAgICAgICAgIG1heFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICBtaW5XaWR0aDogdW5kZWZpbmVkLFxuICAgICAgICAgZW1wdHk6IGZhbHNlXG4gICAgICB9O1xuICAgICAgY29uc3QgY2hlY2tlZENvbmZpZzogU3RNb2RhbENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gICAgICBjaGVja2VkQ29uZmlnLmJ1dHRvbnMgPSB0aGlzLmNoZWNrQnV0dG9ucyhjaGVja2VkQ29uZmlnLmJ1dHRvbnMpO1xuICAgICAgcmV0dXJuIGNoZWNrZWRDb25maWc7XG4gICB9XG5cbiAgIHByaXZhdGUgY2hlY2tCdXR0b25zKGJ1dHRvbnM6IFN0TW9kYWxCdXR0b25bXSk6IFN0TW9kYWxCdXR0b25bXSB7XG4gICAgICByZXR1cm4gYnV0dG9ucy5tYXAoYnV0dG9uID0+IE9iamVjdC5hc3NpZ24oe30sIHsgbGFiZWw6ICdCdXR0b24nLCBjbG9zZU9uQ2xpY2s6IGZhbHNlIH0sIGJ1dHRvbikpO1xuICAgfVxufVxuIl19