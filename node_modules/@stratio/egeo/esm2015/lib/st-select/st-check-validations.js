/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-select/st-check-validations.ts
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
import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
export class StCheckValidationsDirective {
    /**
     * @param {?} control
     */
    constructor(control) {
        this.control = control;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.sub = this.control.statusChanges.subscribe((/**
         * @return {?}
         */
        () => this.notifyErrorsIfExists()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    // TODO implement error check and notify correct error
    /**
     * @private
     * @return {?}
     */
    notifyErrorsIfExists() {
        if (this.control.valid && this.onChange) {
            this.onChange(null);
        }
        else if (this.onChange) {
            this.onChange(this.errorMessage);
        }
    }
}
StCheckValidationsDirective.decorators = [
    { type: Directive, args: [{ selector: '[stCheckValidations]' },] }
];
/** @nocollapse */
StCheckValidationsDirective.ctorParameters = () => [
    { type: NgControl }
];
StCheckValidationsDirective.propDecorators = {
    errorMessage: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StCheckValidationsDirective.prototype.errorMessage;
    /** @type {?} */
    StCheckValidationsDirective.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    StCheckValidationsDirective.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    StCheckValidationsDirective.prototype.control;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY2hlY2stdmFsaWRhdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXNlbGVjdC9zdC1jaGVjay12YWxpZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFPckMsWUFBb0IsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztJQUFJLENBQUM7Ozs7O0lBRTNDLGdCQUFnQixDQUFDLEVBQW9CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBQyxDQUFDO0lBQ3RGLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1IsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN6QjtJQUNKLENBQUM7Ozs7OztJQUdPLG9CQUFvQjtRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuQztJQUNKLENBQUM7OztZQS9CSCxTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7WUFKdEMsU0FBUzs7OzJCQU1kLEtBQUs7Ozs7SUFBTixtREFBOEI7O0lBRTlCLCtDQUEyQjs7Ozs7SUFFM0IsMENBQTBCOzs7OztJQUVkLDhDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3N0Q2hlY2tWYWxpZGF0aW9uc10nIH0pXG5leHBvcnQgY2xhc3MgU3RDaGVja1ZhbGlkYXRpb25zRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgQElucHV0KCkgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XG5cbiAgIG9uQ2hhbmdlOiAoXzogYW55KSA9PiB2b2lkO1xuXG4gICBwcml2YXRlIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRyb2w6IE5nQ29udHJvbCkgeyB9XG5cbiAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgIH1cblxuICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLnN1YiA9IHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5vdGlmeUVycm9yc0lmRXhpc3RzKCkpO1xuICAgfVxuXG4gICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gVE9ETyBpbXBsZW1lbnQgZXJyb3IgY2hlY2sgYW5kIG5vdGlmeSBjb3JyZWN0IGVycm9yXG4gICBwcml2YXRlIG5vdGlmeUVycm9yc0lmRXhpc3RzKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMuY29udHJvbC52YWxpZCAmJiB0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==