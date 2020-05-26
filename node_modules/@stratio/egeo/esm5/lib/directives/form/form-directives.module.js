/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/form/form-directives.module.ts
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
import { NgModule } from '@angular/core';
import { StMinValidator } from './st-min-validator/st-min-validator';
import { StMaxValidator } from './st-max-validator/st-max-validator';
/** @type {?} */
export var SHARED_FORM_DIRECTIVES = [
    StMinValidator,
    StMaxValidator
];
var StFormDirectiveModule = /** @class */ (function () {
    function StFormDirectiveModule() {
    }
    StFormDirectiveModule.decorators = [
        { type: NgModule, args: [{
                    declarations: SHARED_FORM_DIRECTIVES,
                    exports: SHARED_FORM_DIRECTIVES
                },] }
    ];
    return StFormDirectiveModule;
}());
export { StFormDirectiveModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kaXJlY3RpdmVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9mb3JtL2Zvcm0tZGlyZWN0aXZlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU8scUNBQXFDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFPLHFDQUFxQyxDQUFDOztBQUd0RSxNQUFNLEtBQU8sc0JBQXNCLEdBQWdCO0lBQ2hELGNBQWM7SUFDZCxjQUFjO0NBQ2hCO0FBR0Q7SUFBQTtJQU1BLENBQUM7O2dCQU5BLFFBQVEsU0FBQztvQkFDUCxZQUFZLEVBQUUsc0JBQXNCO29CQUNwQyxPQUFPLEVBQUUsc0JBQXNCO2lCQUNqQzs7SUFHRCw0QkFBQztDQUFBLEFBTkQsSUFNQztTQURZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RNaW5WYWxpZGF0b3IgfSBmcm9tICAnLi9zdC1taW4tdmFsaWRhdG9yL3N0LW1pbi12YWxpZGF0b3InO1xuaW1wb3J0IHsgU3RNYXhWYWxpZGF0b3IgfSBmcm9tICAnLi9zdC1tYXgtdmFsaWRhdG9yL3N0LW1heC12YWxpZGF0b3InO1xuXG5cbmV4cG9ydCBjb25zdCBTSEFSRURfRk9STV9ESVJFQ1RJVkVTOiBUeXBlPGFueT5bXSA9IFtcbiAgIFN0TWluVmFsaWRhdG9yLFxuICAgU3RNYXhWYWxpZGF0b3Jcbl07XG5cblxuQE5nTW9kdWxlKHtcbiAgIGRlY2xhcmF0aW9uczogU0hBUkVEX0ZPUk1fRElSRUNUSVZFUyxcbiAgIGV4cG9ydHM6IFNIQVJFRF9GT1JNX0RJUkVDVElWRVNcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdEZvcm1EaXJlY3RpdmVNb2R1bGUge1xufVxuIl19