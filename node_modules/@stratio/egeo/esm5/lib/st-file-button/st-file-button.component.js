/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-file-button/st-file-button.component.ts
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
import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * \@description {Component} [File button]
 *
 * The file button allows to upload a file with a specified extension.
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-file-button text="IMPORT" accepted='json'
 * (selected)="onUploadValidFile($event)"
 * (error)="onUploadInvalidFile()">
 * </st-file-button>
 * ```
 *
 */
var StFileButtonComponent = /** @class */ (function () {
    function StFileButtonComponent() {
        /**
         * \@Input {string} [buttonClass=''] Class for button
         */
        this.buttonClass = 'button-primary';
        /**
         * \@Input {string} [accepted=''] The allowed extensions
         */
        this.accepted = '';
        /**
         * \@Output {File} [selected=''] Event emitted when a file is selected
         */
        this.selected = new EventEmitter();
        /**
         * \@Output {Error} [error=''] Event emitted when an invalid file is selected
         */
        this.error = new EventEmitter();
    }
    /**
     * @return {?}
     */
    StFileButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._accepted = this.accepted.split(',');
    };
    /**
     * @param {?} eventData
     * @return {?}
     */
    StFileButtonComponent.prototype.onChange = /**
     * @param {?} eventData
     * @return {?}
     */
    function (eventData) {
        /** @type {?} */
        var files = eventData.target.files;
        if (this.areFilesValid(files)) {
            this.selected.emit(eventData.target.files);
        }
        else {
            this.error.emit();
        }
        eventData.srcElement.value = '';
    };
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    StFileButtonComponent.prototype.areFilesValid = /**
     * @private
     * @param {?} files
     * @return {?}
     */
    function (files) {
        for (var i = 0; i < files.length; ++i) {
            /** @type {?} */
            var file = files[i];
            if (file.type && this._accepted.indexOf(file.type.split('/').pop()) === -1
                || (!file.type && this._accepted.indexOf(file.name.split('.').pop()) === -1)) {
                return false;
            }
        }
        return true;
    };
    StFileButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-file-button',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<input type=\"file\" [name]=\"id\" [id]=\"id\" class=\"input-file\" accept=\"{{accepted}}\" (change)=\"onChange($event)\"/>\n<label class=\"button {{buttonClass}}\" [for]=\"id\">{{text}}</label>\n",
                    styles: ["@charset \"UTF-8\";.input-file{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.input-file+label{display:inline-block;cursor:pointer}"]
                }] }
    ];
    StFileButtonComponent.propDecorators = {
        text: [{ type: Input }],
        buttonClass: [{ type: Input }],
        accepted: [{ type: Input }],
        id: [{ type: Input }],
        selected: [{ type: Output }],
        error: [{ type: Output }]
    };
    return StFileButtonComponent;
}());
export { StFileButtonComponent };
if (false) {
    /**
     * \@Input {string} [text=''] Displayed text
     * @type {?}
     */
    StFileButtonComponent.prototype.text;
    /**
     * \@Input {string} [buttonClass=''] Class for button
     * @type {?}
     */
    StFileButtonComponent.prototype.buttonClass;
    /**
     * \@Input {string} [accepted=''] The allowed extensions
     * @type {?}
     */
    StFileButtonComponent.prototype.accepted;
    /**
     * \@Input {string} [id=''] Identifier for input
     * @type {?}
     */
    StFileButtonComponent.prototype.id;
    /**
     * \@Output {File} [selected=''] Event emitted when a file is selected
     * @type {?}
     */
    StFileButtonComponent.prototype.selected;
    /**
     * \@Output {Error} [error=''] Event emitted when an invalid file is selected
     * @type {?}
     */
    StFileButtonComponent.prototype.error;
    /**
     * @type {?}
     * @private
     */
    StFileButtonComponent.prototype._accepted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1maWxlLWJ1dHRvbi9zdC1maWxlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUIvRTtJQUFBOzs7O1FBVVksZ0JBQVcsR0FBVyxnQkFBZ0IsQ0FBQzs7OztRQUV2QyxhQUFRLEdBQVcsRUFBRSxDQUFDOzs7O1FBSXJCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUVqRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUE2QjNELENBQUM7Ozs7SUF6QkUsd0NBQVE7OztJQUFSO1FBQ0csSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxTQUFjOztZQUNoQixLQUFLLEdBQVcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLO1FBQzFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDSixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVPLDZDQUFhOzs7OztJQUFyQixVQUFzQixLQUFhO1FBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFOztnQkFDaEMsSUFBSSxHQUFTLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO21CQUNwRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLEVBQUU7Z0JBQy9FLE9BQU8sS0FBSyxDQUFDO2FBQ2Y7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2YsQ0FBQzs7Z0JBOUNILFNBQVMsU0FBQztvQkFDUixRQUFRLEVBQUUsZ0JBQWdCO29CQUUxQixzb0JBQTRDOztpQkFDOUM7Ozt1QkFJRyxLQUFLOzhCQUVMLEtBQUs7MkJBRUwsS0FBSztxQkFFTCxLQUFLOzJCQUVMLE1BQU07d0JBRU4sTUFBTTs7SUE2QlYsNEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQXpDWSxxQkFBcUI7Ozs7OztJQUUvQixxQ0FBc0I7Ozs7O0lBRXRCLDRDQUFnRDs7Ozs7SUFFaEQseUNBQStCOzs7OztJQUUvQixtQ0FBb0I7Ozs7O0lBRXBCLHlDQUEyRDs7Ozs7SUFFM0Qsc0NBQXdEOzs7OztJQUV4RCwwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24ge0NvbXBvbmVudH0gW0ZpbGUgYnV0dG9uXVxuICpcbiAqIFRoZSBmaWxlIGJ1dHRvbiBhbGxvd3MgdG8gdXBsb2FkIGEgZmlsZSB3aXRoIGEgc3BlY2lmaWVkIGV4dGVuc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIHtodG1sfVxuICpcbiAqIGBgYFxuICogPHN0LWZpbGUtYnV0dG9uIHRleHQ9XCJJTVBPUlRcIiBhY2NlcHRlZD0nanNvbidcbiAqIChzZWxlY3RlZCk9XCJvblVwbG9hZFZhbGlkRmlsZSgkZXZlbnQpXCJcbiAqIChlcnJvcik9XCJvblVwbG9hZEludmFsaWRGaWxlKClcIj5cbiAqIDwvc3QtZmlsZS1idXR0b24+XG4gKiBgYGBcbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICAgc2VsZWN0b3I6ICdzdC1maWxlLWJ1dHRvbicsXG4gICBzdHlsZVVybHM6IFsnc3QtZmlsZS1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbiAgIHRlbXBsYXRlVXJsOiAnc3QtZmlsZS1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgU3RGaWxlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW3RleHQ9JyddIERpc3BsYXllZCB0ZXh0ICovXG4gICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtidXR0b25DbGFzcz0nJ10gQ2xhc3MgZm9yIGJ1dHRvbiAqL1xuICAgQElucHV0KCkgYnV0dG9uQ2xhc3M6IHN0cmluZyA9ICdidXR0b24tcHJpbWFyeSc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFthY2NlcHRlZD0nJ10gVGhlIGFsbG93ZWQgZXh0ZW5zaW9ucyAqL1xuICAgQElucHV0KCkgYWNjZXB0ZWQ6IHN0cmluZyA9ICcnO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbaWQ9JyddIElkZW50aWZpZXIgZm9yIGlucHV0ICovXG4gICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICAgLyoqIEBPdXRwdXQge0ZpbGV9IFtzZWxlY3RlZD0nJ10gRXZlbnQgZW1pdHRlZCB3aGVuIGEgZmlsZSBpcyBzZWxlY3RlZCAqL1xuICAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIC8qKiBAT3V0cHV0IHtFcnJvcn0gW2Vycm9yPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gYW4gaW52YWxpZCBmaWxlIGlzIHNlbGVjdGVkICovXG4gICBAT3V0cHV0KCkgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICBwcml2YXRlIF9hY2NlcHRlZDogQXJyYXk8c3RyaW5nPjtcblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLl9hY2NlcHRlZCA9IHRoaXMuYWNjZXB0ZWQuc3BsaXQoJywnKTtcbiAgIH1cblxuICAgb25DaGFuZ2UoZXZlbnREYXRhOiBhbnkpOiB2b2lkIHtcbiAgICAgIGxldCBmaWxlczogRmlsZVtdID0gZXZlbnREYXRhLnRhcmdldC5maWxlcztcbiAgICAgIGlmICh0aGlzLmFyZUZpbGVzVmFsaWQoZmlsZXMpKSB7XG4gICAgICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoZXZlbnREYXRhLnRhcmdldC5maWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5lcnJvci5lbWl0KCk7XG4gICAgICB9XG4gICAgICBldmVudERhdGEuc3JjRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgfVxuXG4gICBwcml2YXRlIGFyZUZpbGVzVmFsaWQoZmlsZXM6IEZpbGVbXSk6IGJvb2xlYW4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgbGV0IGZpbGU6IEZpbGUgPSBmaWxlc1tpXTtcbiAgICAgICAgIGlmIChmaWxlLnR5cGUgJiYgdGhpcy5fYWNjZXB0ZWQuaW5kZXhPZihmaWxlLnR5cGUuc3BsaXQoJy8nKS5wb3AoKSkgPT09IC0xXG4gICAgICAgICAgICB8fCAoIWZpbGUudHlwZSAmJiB0aGlzLl9hY2NlcHRlZC5pbmRleE9mKGZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpKSA9PT0gLTEgKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgIH1cbn1cbiJdfQ==