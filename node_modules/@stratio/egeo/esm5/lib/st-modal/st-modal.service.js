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
var StModalService = /** @class */ (function () {
    function StModalService(_cfr) {
        this._cfr = _cfr;
        this._containerRef = undefined;
        this.dynamicModal = undefined;
    }
    Object.defineProperty(StModalService.prototype, "container", {
        /* External API */
        set: /* External API */
        /**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            this._containerRef = container;
        },
        enumerable: true,
        configurable: true
    });
    // - Public methods
    // - Public methods
    /**
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    StModalService.prototype.show = 
    // - Public methods
    /**
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    function (config, component) {
        /** @type {?} */
        var errors = this.canCreateModal(config, component);
        if (errors && errors.length > 0) {
            throw new Error(errors.join(' '));
        }
        this.notifyButtonInteraction = new Subject();
        this.createModal(this.createConfig(config), component);
        return this.notifyButtonInteraction.asObservable();
    };
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
    StModalService.prototype.showBasicModal = /**
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
    function (type, modalTitle, messageTitle, message, okButton, cancelButton, maxWidth, minWidth, icon) {
        if (cancelButton === void 0) { cancelButton = ''; }
        if (maxWidth === void 0) { maxWidth = 600; }
        if (minWidth === void 0) { minWidth = 400; }
        if (icon === void 0) { icon = ''; }
        /** @type {?} */
        var iconStatus;
        /** @type {?} */
        var buttons = [{
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
            message: message,
            messageTitle: messageTitle,
            modalTitle: modalTitle,
            buttons: buttons,
            maxWidth: maxWidth,
            minWidth: minWidth,
            iconStatus: iconStatus
        });
    };
    /**
     * @return {?}
     */
    StModalService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /* INTERNAL METHODS FOR WORK WITH MODALS */
    /* INTERNAL METHODS FOR WORK WITH MODALS */
    /**
     * @private
     * @param {?} modalConfig
     * @param {?=} component
     * @return {?}
     */
    StModalService.prototype.createModal = /* INTERNAL METHODS FOR WORK WITH MODALS */
    /**
     * @private
     * @param {?} modalConfig
     * @param {?=} component
     * @return {?}
     */
    function (modalConfig, component) {
        /** @type {?} */
        var stModalFactory = this._cfr.resolveComponentFactory(StModalComponent);
        if (stModalFactory) {
            this._containerRef.clear();
            this.dynamicModal = this._containerRef.createComponent(stModalFactory);
            this.bindVars(modalConfig, component);
        }
    };
    /**
     * @private
     * @return {?}
     */
    StModalService.prototype.destroy = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.dynamicModal) {
            this.dynamicModal.destroy();
            this.dynamicModal = undefined;
            this.notifyButtonInteraction.next(StModalResponse.CLOSE);
            this.notifyButtonInteraction.complete();
        }
    };
    /**
     * @private
     * @param {?} modalConfig
     * @param {?} component
     * @return {?}
     */
    StModalService.prototype.bindVars = /**
     * @private
     * @param {?} modalConfig
     * @param {?} component
     * @return {?}
     */
    function (modalConfig, component) {
        this.dynamicModal.instance.component = component;
        this.dynamicModal.instance.click.subscribe(this.notify.bind(this));
        this.dynamicModal.instance.modalConfig = modalConfig;
        this.dynamicModal.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @param {?} buttonResponse
     * @return {?}
     */
    StModalService.prototype.notify = /**
     * @private
     * @param {?} buttonResponse
     * @return {?}
     */
    function (buttonResponse) {
        this.notifyButtonInteraction.next(buttonResponse.response);
        if (buttonResponse.close) {
            this.close();
        }
    };
    /**
     * @private
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    StModalService.prototype.canCreateModal = /**
     * @private
     * @param {?} config
     * @param {?=} component
     * @return {?}
     */
    function (config, component) {
        /** @type {?} */
        var errors = [];
        if (!this._containerRef) {
            errors.push("[ERROR]: StModalService => Cant find container, are you sure you declarate in MAIN APP component in html and typescript?");
        }
        if (this.dynamicModal !== undefined) {
            errors.push("[ERROR]: StModalService => Can't create modal beacause already exists one. Are you sure that you call close method?)");
        }
        if (!component && !config.message && !config.html) {
            errors.push("[ERROR]: StModalService => Can't find message, html or component to show in modal");
        }
        return errors;
    };
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    StModalService.prototype.createConfig = /**
     * @private
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var defaultConfig = {
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
        var checkedConfig = Object.assign({}, defaultConfig, config);
        checkedConfig.buttons = this.checkButtons(checkedConfig.buttons);
        return checkedConfig;
    };
    /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    StModalService.prototype.checkButtons = /**
     * @private
     * @param {?} buttons
     * @return {?}
     */
    function (buttons) {
        return buttons.map((/**
         * @param {?} button
         * @return {?}
         */
        function (button) { return Object.assign({}, { label: 'Button', closeOnClick: false }, button); }));
    };
    StModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StModalService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    return StModalService;
}());
export { StModalService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtbW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtbW9kYWwvc3QtbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBRUosd0JBQXdCLEVBRXhCLFVBQVUsRUFHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFHN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUdKLGVBQWUsRUFFZixnQkFBZ0IsRUFDbEIsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQjtJQU9HLHdCQUFvQixJQUE4QjtRQUE5QixTQUFJLEdBQUosSUFBSSxDQUEwQjtRQUoxQyxrQkFBYSxHQUFxQixTQUFTLENBQUM7UUFDNUMsaUJBQVksR0FBbUMsU0FBUyxDQUFDO0lBR1gsQ0FBQztJQUd2RCxzQkFBSSxxQ0FBUztRQURiLGtCQUFrQjs7Ozs7O1FBQ2xCLFVBQWMsU0FBMkI7WUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxtQkFBbUI7Ozs7Ozs7SUFDbkIsNkJBQUk7Ozs7Ozs7SUFBSixVQUFLLE1BQXFCLEVBQUUsU0FBcUI7O1lBQzFDLE1BQU0sR0FBYSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUM7UUFDN0QsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJ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KlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7XG4gICBDb21wb25lbnRGYWN0b3J5LFxuICAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgQ29tcG9uZW50UmVmLFxuICAgSW5qZWN0YWJsZSxcbiAgIFR5cGUsXG4gICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbi8qIGxvY2FsIGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IHsgU3RNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vc3QtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICBTdE1vZGFsQnV0dG9uLFxuICAgU3RNb2RhbENvbmZpZyxcbiAgIFN0TW9kYWxSZXNwb25zZSxcbiAgIFN0TW9kYWxCdXR0b25SZXNwb25zZSxcbiAgIFN0TW9kYWxCYXNpY1R5cGVcbn0gZnJvbSAnLi9zdC1tb2RhbC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdE1vZGFsU2VydmljZSB7XG5cbiAgIHByaXZhdGUgX2NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZiA9IHVuZGVmaW5lZDtcbiAgIHByaXZhdGUgZHluYW1pY01vZGFsOiBDb21wb25lbnRSZWY8U3RNb2RhbENvbXBvbmVudD4gPSB1bmRlZmluZWQ7XG4gICBwcml2YXRlIG5vdGlmeUJ1dHRvbkludGVyYWN0aW9uOiBTdWJqZWN0PFN0TW9kYWxSZXNwb25zZT47XG5cbiAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7IH1cblxuICAgLyogRXh0ZXJuYWwgQVBJICovXG4gICBzZXQgY29udGFpbmVyKGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5fY29udGFpbmVyUmVmID0gY29udGFpbmVyO1xuICAgfVxuXG4gICAvLyAtIFB1YmxpYyBtZXRob2RzXG4gICBzaG93KGNvbmZpZzogU3RNb2RhbENvbmZpZywgY29tcG9uZW50PzogVHlwZTxhbnk+KTogT2JzZXJ2YWJsZTxTdE1vZGFsUmVzcG9uc2U+IHtcbiAgICAgIGxldCBlcnJvcnM6IHN0cmluZ1tdID0gdGhpcy5jYW5DcmVhdGVNb2RhbChjb25maWcsIGNvbXBvbmVudCk7XG4gICAgICBpZiAoZXJyb3JzICYmIGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLmpvaW4oJyAnKSk7XG4gICAgICB9XG4gICAgICB0aGlzLm5vdGlmeUJ1dHRvbkludGVyYWN0aW9uID0gbmV3IFN1YmplY3Q8U3RNb2RhbFJlc3BvbnNlPigpO1xuICAgICAgdGhpcy5jcmVhdGVNb2RhbCh0aGlzLmNyZWF0ZUNvbmZpZyhjb25maWcpLCBjb21wb25lbnQpO1xuICAgICAgcmV0dXJuIHRoaXMubm90aWZ5QnV0dG9uSW50ZXJhY3Rpb24uYXNPYnNlcnZhYmxlKCk7XG4gICB9XG5cbiAgIHNob3dCYXNpY01vZGFsKFxuICAgICAgdHlwZTogU3RNb2RhbEJhc2ljVHlwZSxcbiAgICAgIG1vZGFsVGl0bGU6IHN0cmluZyxcbiAgICAgIG1lc3NhZ2VUaXRsZTogc3RyaW5nLFxuICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgb2tCdXR0b246IHN0cmluZyxcbiAgICAgIGNhbmNlbEJ1dHRvbjogc3RyaW5nID0gJycsXG4gICAgICBtYXhXaWR0aDogbnVtYmVyID0gNjAwLFxuICAgICAgbWluV2lkdGg6IG51bWJlciA9IDQwMCxcbiAgICAgIGljb246IHN0cmluZyA9ICcnXG4gICApOiBPYnNlcnZhYmxlPFN0TW9kYWxSZXNwb25zZT4ge1xuICAgICAgbGV0IGljb25TdGF0dXM6IHN0cmluZztcblxuICAgICAgY29uc3QgYnV0dG9uczogU3RNb2RhbEJ1dHRvbltdID0gW3tcbiAgICAgICAgIGxhYmVsOiBva0J1dHRvbixcbiAgICAgICAgIGNsYXNzZXM6ICh0eXBlID09PSBTdE1vZGFsQmFzaWNUeXBlLkRFTEVURSkgPyAnYnV0dG9uLWNyaXRpY2FsJyA6ICdidXR0b24tcHJpbWFyeScsXG4gICAgICAgICByZXNwb25zZVZhbHVlOiBTdE1vZGFsUmVzcG9uc2UuWUVTLFxuICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlXG4gICAgICB9XTtcblxuICAgICAgaWYgKHR5cGUgIT09IFN0TW9kYWxCYXNpY1R5cGUuSU5GTykge1xuICAgICAgICAgYnV0dG9ucy51bnNoaWZ0KHtcbiAgICAgICAgICAgIGxhYmVsOiBjYW5jZWxCdXR0b24sXG4gICAgICAgICAgICBjbGFzc2VzOiAodHlwZSA9PT0gU3RNb2RhbEJhc2ljVHlwZS5ERUxFVEUpID8gJ2J1dHRvbi1ib3JkZXJsZXNzJyA6ICdidXR0b24tc2Vjb25kYXJ5JyxcbiAgICAgICAgICAgIHJlc3BvbnNlVmFsdWU6IFN0TW9kYWxSZXNwb25zZS5OTyxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZVxuICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgY2FzZSBTdE1vZGFsQmFzaWNUeXBlLkRFTEVURTpcbiAgICAgICAgICAgIGljb25TdGF0dXMgPSAnaWNvbi1jaXJjbGUtY3Jvc3MnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICBjYXNlIFN0TW9kYWxCYXNpY1R5cGUuV0FSTklORzpcbiAgICAgICAgICAgIGljb25TdGF0dXMgPSAnaWNvbi1hbGVydCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpY29uU3RhdHVzID0gaWNvbjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zaG93KHtcbiAgICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgIG1lc3NhZ2VUaXRsZSxcbiAgICAgICAgIG1vZGFsVGl0bGUsXG4gICAgICAgICBidXR0b25zLFxuICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgIGljb25TdGF0dXNcbiAgICAgIH0pO1xuICAgfVxuXG4gICBjbG9zZSgpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgfVxuXG4gICAvKiBJTlRFUk5BTCBNRVRIT0RTIEZPUiBXT1JLIFdJVEggTU9EQUxTICovXG4gICBwcml2YXRlIGNyZWF0ZU1vZGFsKG1vZGFsQ29uZmlnOiBTdE1vZGFsQ29uZmlnLCBjb21wb25lbnQ/OiBUeXBlPGFueT4pOiB2b2lkIHtcbiAgICAgIGxldCBzdE1vZGFsRmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxTdE1vZGFsQ29tcG9uZW50PiA9IHRoaXMuX2Nmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShTdE1vZGFsQ29tcG9uZW50KTtcbiAgICAgIGlmIChzdE1vZGFsRmFjdG9yeSkge1xuICAgICAgICAgdGhpcy5fY29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgICAgICB0aGlzLmR5bmFtaWNNb2RhbCA9IHRoaXMuX2NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQ8U3RNb2RhbENvbXBvbmVudD4oc3RNb2RhbEZhY3RvcnkpO1xuICAgICAgICAgdGhpcy5iaW5kVmFycyhtb2RhbENvbmZpZywgY29tcG9uZW50KTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuZHluYW1pY01vZGFsKSB7XG4gICAgICAgICB0aGlzLmR5bmFtaWNNb2RhbC5kZXN0cm95KCk7XG4gICAgICAgICB0aGlzLmR5bmFtaWNNb2RhbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgIHRoaXMubm90aWZ5QnV0dG9uSW50ZXJhY3Rpb24ubmV4dChTdE1vZGFsUmVzcG9uc2UuQ0xPU0UpO1xuICAgICAgICAgdGhpcy5ub3RpZnlCdXR0b25JbnRlcmFjdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgfVxuXG4gICBwcml2YXRlIGJpbmRWYXJzKG1vZGFsQ29uZmlnOiBTdE1vZGFsQ29uZmlnLCBjb21wb25lbnQ6IFR5cGU8YW55Pik6IHZvaWQge1xuICAgICAgdGhpcy5keW5hbWljTW9kYWwuaW5zdGFuY2UuY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gICAgICB0aGlzLmR5bmFtaWNNb2RhbC5pbnN0YW5jZS5jbGljay5zdWJzY3JpYmUodGhpcy5ub3RpZnkuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmR5bmFtaWNNb2RhbC5pbnN0YW5jZS5tb2RhbENvbmZpZyA9IG1vZGFsQ29uZmlnO1xuXG4gICAgICB0aGlzLmR5bmFtaWNNb2RhbC5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICB9XG5cbiAgIHByaXZhdGUgbm90aWZ5KGJ1dHRvblJlc3BvbnNlOiBTdE1vZGFsQnV0dG9uUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgIHRoaXMubm90aWZ5QnV0dG9uSW50ZXJhY3Rpb24ubmV4dChidXR0b25SZXNwb25zZS5yZXNwb25zZSk7XG4gICAgICBpZiAoYnV0dG9uUmVzcG9uc2UuY2xvc2UpIHtcbiAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHJpdmF0ZSBjYW5DcmVhdGVNb2RhbChjb25maWc6IFN0TW9kYWxDb25maWcsIGNvbXBvbmVudD86IFR5cGU8YW55Pik6IHN0cmluZ1tdIHtcbiAgICAgIGxldCBlcnJvcnM6IHN0cmluZ1tdID0gW107XG4gICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lclJlZikge1xuICAgICAgICAgZXJyb3JzLnB1c2goYFtFUlJPUl06IFN0TW9kYWxTZXJ2aWNlID0+IENhbnQgZmluZCBjb250YWluZXIsIGFyZSB5b3Ugc3VyZSB5b3UgZGVjbGFyYXRlIGluIE1BSU4gQVBQIGNvbXBvbmVudCBpbiBodG1sIGFuZCB0eXBlc2NyaXB0P2ApO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZHluYW1pY01vZGFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgIGVycm9ycy5wdXNoKGBbRVJST1JdOiBTdE1vZGFsU2VydmljZSA9PiBDYW4ndCBjcmVhdGUgbW9kYWwgYmVhY2F1c2UgYWxyZWFkeSBleGlzdHMgb25lLiBBcmUgeW91IHN1cmUgdGhhdCB5b3UgY2FsbCBjbG9zZSBtZXRob2Q/KWApO1xuICAgICAgfVxuICAgICAgaWYgKCFjb21wb25lbnQgJiYgIWNvbmZpZy5tZXNzYWdlICYmICFjb25maWcuaHRtbCkge1xuICAgICAgICAgZXJyb3JzLnB1c2goYFtFUlJPUl06IFN0TW9kYWxTZXJ2aWNlID0+IENhbid0IGZpbmQgbWVzc2FnZSwgaHRtbCBvciBjb21wb25lbnQgdG8gc2hvdyBpbiBtb2RhbGApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVycm9ycztcbiAgIH1cblxuICAgcHJpdmF0ZSBjcmVhdGVDb25maWcoY29uZmlnOiBTdE1vZGFsQ29uZmlnKTogU3RNb2RhbENvbmZpZyB7XG4gICAgICBjb25zdCBkZWZhdWx0Q29uZmlnOiBTdE1vZGFsQ29uZmlnID0ge1xuICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICBpbnB1dHM6IHt9LFxuICAgICAgICAgb3V0cHV0czoge30sXG4gICAgICAgICBtb2RhbFRpdGxlOiAnRGVmYXVsdCB0aXRsZScsXG4gICAgICAgICBtZXNzYWdlVGl0bGU6ICdEZWZhdWx0IHN1YnRpdGxlJyxcbiAgICAgICAgIGJ1dHRvbnM6IFtdLFxuICAgICAgICAgbWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICAgaHRtbDogdW5kZWZpbmVkLFxuICAgICAgICAgbWF4V2lkdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgIG1pbldpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgICBlbXB0eTogZmFsc2VcbiAgICAgIH07XG4gICAgICBjb25zdCBjaGVja2VkQ29uZmlnOiBTdE1vZGFsQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICAgIGNoZWNrZWRDb25maWcuYnV0dG9ucyA9IHRoaXMuY2hlY2tCdXR0b25zKGNoZWNrZWRDb25maWcuYnV0dG9ucyk7XG4gICAgICByZXR1cm4gY2hlY2tlZENvbmZpZztcbiAgIH1cblxuICAgcHJpdmF0ZSBjaGVja0J1dHRvbnMoYnV0dG9uczogU3RNb2RhbEJ1dHRvbltdKTogU3RNb2RhbEJ1dHRvbltdIHtcbiAgICAgIHJldHVybiBidXR0b25zLm1hcChidXR0b24gPT4gT2JqZWN0LmFzc2lnbih7fSwgeyBsYWJlbDogJ0J1dHRvbicsIGNsb3NlT25DbGljazogZmFsc2UgfSwgYnV0dG9uKSk7XG4gICB9XG59XG4iXX0=