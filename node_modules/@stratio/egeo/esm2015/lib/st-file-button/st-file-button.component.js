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
export class StFileButtonComponent {
    constructor() {
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
    ngOnInit() {
        this._accepted = this.accepted.split(',');
    }
    /**
     * @param {?} eventData
     * @return {?}
     */
    onChange(eventData) {
        /** @type {?} */
        let files = eventData.target.files;
        if (this.areFilesValid(files)) {
            this.selected.emit(eventData.target.files);
        }
        else {
            this.error.emit();
        }
        eventData.srcElement.value = '';
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    areFilesValid(files) {
        for (let i = 0; i < files.length; ++i) {
            /** @type {?} */
            let file = files[i];
            if (file.type && this._accepted.indexOf(file.type.split('/').pop()) === -1
                || (!file.type && this._accepted.indexOf(file.name.split('.').pop()) === -1)) {
                return false;
            }
        }
        return true;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1maWxlLWJ1dHRvbi9zdC1maWxlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUIvRSxNQUFNLE9BQU8scUJBQXFCO0lBTmxDOzs7O1FBVVksZ0JBQVcsR0FBVyxnQkFBZ0IsQ0FBQzs7OztRQUV2QyxhQUFRLEdBQVcsRUFBRSxDQUFDOzs7O1FBSXJCLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7OztRQUVqRCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUE2QjNELENBQUM7Ozs7SUF6QkUsUUFBUTtRQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsU0FBYzs7WUFDaEIsS0FBSyxHQUFXLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSztRQUMxQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtRQUNELFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsS0FBYTtRQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTs7Z0JBQ2hDLElBQUksR0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzttQkFDcEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRSxFQUFFO2dCQUMvRSxPQUFPLEtBQUssQ0FBQzthQUNmO1NBQ0g7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNmLENBQUM7OztZQTlDSCxTQUFTLFNBQUM7Z0JBQ1IsUUFBUSxFQUFFLGdCQUFnQjtnQkFFMUIsc29CQUE0Qzs7YUFDOUM7OzttQkFJRyxLQUFLOzBCQUVMLEtBQUs7dUJBRUwsS0FBSztpQkFFTCxLQUFLO3VCQUVMLE1BQU07b0JBRU4sTUFBTTs7Ozs7OztJQVZQLHFDQUFzQjs7Ozs7SUFFdEIsNENBQWdEOzs7OztJQUVoRCx5Q0FBK0I7Ozs7O0lBRS9CLG1DQUFvQjs7Ozs7SUFFcEIseUNBQTJEOzs7OztJQUUzRCxzQ0FBd0Q7Ozs7O0lBRXhELDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiB7Q29tcG9uZW50fSBbRmlsZSBidXR0b25dXG4gKlxuICogVGhlIGZpbGUgYnV0dG9uIGFsbG93cyB0byB1cGxvYWQgYSBmaWxlIHdpdGggYSBzcGVjaWZpZWQgZXh0ZW5zaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICoge2h0bWx9XG4gKlxuICogYGBgXG4gKiA8c3QtZmlsZS1idXR0b24gdGV4dD1cIklNUE9SVFwiIGFjY2VwdGVkPSdqc29uJ1xuICogKHNlbGVjdGVkKT1cIm9uVXBsb2FkVmFsaWRGaWxlKCRldmVudClcIlxuICogKGVycm9yKT1cIm9uVXBsb2FkSW52YWxpZEZpbGUoKVwiPlxuICogPC9zdC1maWxlLWJ1dHRvbj5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWZpbGUtYnV0dG9uJyxcbiAgIHN0eWxlVXJsczogWydzdC1maWxlLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICAgdGVtcGxhdGVVcmw6ICdzdC1maWxlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdEZpbGVCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbdGV4dD0nJ10gRGlzcGxheWVkIHRleHQgKi9cbiAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2J1dHRvbkNsYXNzPScnXSBDbGFzcyBmb3IgYnV0dG9uICovXG4gICBASW5wdXQoKSBidXR0b25DbGFzczogc3RyaW5nID0gJ2J1dHRvbi1wcmltYXJ5JztcbiAgIC8qKiBASW5wdXQge3N0cmluZ30gW2FjY2VwdGVkPScnXSBUaGUgYWxsb3dlZCBleHRlbnNpb25zICovXG4gICBASW5wdXQoKSBhY2NlcHRlZDogc3RyaW5nID0gJyc7XG4gICAvKiogQElucHV0IHtzdHJpbmd9IFtpZD0nJ10gSWRlbnRpZmllciBmb3IgaW5wdXQgKi9cbiAgIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gICAvKiogQE91dHB1dCB7RmlsZX0gW3NlbGVjdGVkPScnXSBFdmVudCBlbWl0dGVkIHdoZW4gYSBmaWxlIGlzIHNlbGVjdGVkICovXG4gICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgLyoqIEBPdXRwdXQge0Vycm9yfSBbZXJyb3I9JyddIEV2ZW50IGVtaXR0ZWQgd2hlbiBhbiBpbnZhbGlkIGZpbGUgaXMgc2VsZWN0ZWQgKi9cbiAgIEBPdXRwdXQoKSBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgIHByaXZhdGUgX2FjY2VwdGVkOiBBcnJheTxzdHJpbmc+O1xuXG4gICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuX2FjY2VwdGVkID0gdGhpcy5hY2NlcHRlZC5zcGxpdCgnLCcpO1xuICAgfVxuXG4gICBvbkNoYW5nZShldmVudERhdGE6IGFueSk6IHZvaWQge1xuICAgICAgbGV0IGZpbGVzOiBGaWxlW10gPSBldmVudERhdGEudGFyZ2V0LmZpbGVzO1xuICAgICAgaWYgKHRoaXMuYXJlRmlsZXNWYWxpZChmaWxlcykpIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChldmVudERhdGEudGFyZ2V0LmZpbGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aGlzLmVycm9yLmVtaXQoKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50RGF0YS5zcmNFbGVtZW50LnZhbHVlID0gJyc7XG4gICB9XG5cbiAgIHByaXZhdGUgYXJlRmlsZXNWYWxpZChmaWxlczogRmlsZVtdKTogYm9vbGVhbiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICBsZXQgZmlsZTogRmlsZSA9IGZpbGVzW2ldO1xuICAgICAgICAgaWYgKGZpbGUudHlwZSAmJiB0aGlzLl9hY2NlcHRlZC5pbmRleE9mKGZpbGUudHlwZS5zcGxpdCgnLycpLnBvcCgpKSA9PT0gLTFcbiAgICAgICAgICAgIHx8ICghZmlsZS50eXBlICYmIHRoaXMuX2FjY2VwdGVkLmluZGV4T2YoZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCkpID09PSAtMSApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgfVxufVxuIl19