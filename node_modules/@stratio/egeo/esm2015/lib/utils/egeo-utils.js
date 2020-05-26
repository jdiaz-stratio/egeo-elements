/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/egeo-utils.ts
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
export class EgeoUtils {
    /**
     * @param {?} value
     * @return {?}
     */
    static isDefined(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @param {?} scope
     * @param {?} inputs
     * @param {?} component
     * @return {?}
     */
    static validateInputs(scope, inputs, component) {
        inputs.forEach((/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            if (!this.isDefined(scope[input])) {
                throw new Error(`${this.toDash(component)}: field ${input} is a required field`);
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static toDash(value) {
        try {
            return value.replace(/([A-Z])/g, (/**
             * @param {?} $1
             * @return {?}
             */
            ($1) => '-' + $1.toLowerCase())).substring(1);
        }
        catch (err) {
            return value;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWdlby11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZWdlby11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFFbkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFVO1FBQ3hCLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7SUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQVUsRUFBRSxNQUFnQixFQUFFLFNBQWlCO1FBQ2xFLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDO2FBQ25GO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYTtRQUN4QixJQUFJO1lBQ0QsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVU7Ozs7WUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1gsT0FBTyxLQUFLLENBQUM7U0FDZjtJQUNKLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuZXhwb3J0IGNsYXNzIEVnZW9VdGlscyB7XG5cbiAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG4gICB9XG5cbiAgIHN0YXRpYyB2YWxpZGF0ZUlucHV0cyhzY29wZTogYW55LCBpbnB1dHM6IHN0cmluZ1tdLCBjb21wb25lbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICAgICBpZiAoIXRoaXMuaXNEZWZpbmVkKHNjb3BlW2lucHV0XSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLnRvRGFzaChjb21wb25lbnQpfTogZmllbGQgJHtpbnB1dH0gaXMgYSByZXF1aXJlZCBmaWVsZGApO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG5cbiAgIHN0YXRpYyB0b0Rhc2godmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICB0cnkge1xuICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyhbQS1aXSkvZywgKCQxKSA9PiAnLScgKyAkMS50b0xvd2VyQ2FzZSgpKS5zdWJzdHJpbmcoMSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgIH1cbn1cbiJdfQ==