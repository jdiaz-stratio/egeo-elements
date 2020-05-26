/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-bubble-on-ellipsis/st-bubble-on-ellipsis.module.ts
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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StBubbleOnEllipsisComponent } from './st-bubble-on-ellipsis.component';
import { StBubbleModule } from './../st-bubble/st-bubble.module';
var StBubbleOnEllipsisModule = /** @class */ (function () {
    function StBubbleOnEllipsisModule() {
    }
    StBubbleOnEllipsisModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StBubbleModule],
                    declarations: [StBubbleOnEllipsisComponent],
                    exports: [StBubbleOnEllipsisComponent]
                },] }
    ];
    return StBubbleOnEllipsisModule;
}());
export { StBubbleOnEllipsisModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnViYmxlLW9uLWVsbGlwc2lzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtYnViYmxlLW9uLWVsbGlwc2lzL3N0LWJ1YmJsZS1vbi1lbGxpcHNpcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRWpFO0lBQUE7SUFLdUMsQ0FBQzs7Z0JBTHZDLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUN2QyxZQUFZLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3hDOztJQUNzQywrQkFBQztDQUFBLEFBTHhDLElBS3dDO1NBQTNCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0QnViYmxlT25FbGxpcHNpc0NvbXBvbmVudCB9IGZyb20gJy4vc3QtYnViYmxlLW9uLWVsbGlwc2lzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdEJ1YmJsZU1vZHVsZSB9IGZyb20gJy4vLi4vc3QtYnViYmxlL3N0LWJ1YmJsZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RCdWJibGVNb2R1bGVdLFxuICAgZGVjbGFyYXRpb25zOiBbU3RCdWJibGVPbkVsbGlwc2lzQ29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdEJ1YmJsZU9uRWxsaXBzaXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN0QnViYmxlT25FbGxpcHNpc01vZHVsZSB7fVxuIl19