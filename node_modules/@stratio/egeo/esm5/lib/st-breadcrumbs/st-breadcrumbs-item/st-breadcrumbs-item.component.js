/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs-item/st-breadcrumbs-item.component.ts
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
import { Component, Input } from '@angular/core';
var StBreadcrumbItemComponent = /** @class */ (function () {
    function StBreadcrumbItemComponent() {
    }
    Object.defineProperty(StBreadcrumbItemComponent.prototype, "qaTag", {
        get: /**
         * @return {?}
         */
        function () {
            return this._qaTag.replace(/ /g, '-');
        },
        set: /**
         * @param {?} qaTag
         * @return {?}
         */
        function (qaTag) {
            this._qaTag = qaTag;
        },
        enumerable: true,
        configurable: true
    });
    StBreadcrumbItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st-breadcrumbs-item',
                    template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<li class=\"st-breadcrumbs__item\" [ngClass]=\"{'last': active}\" [attr.id]=\"qaTag\">\n    <span class=\"st-breadcrumbs__item--text\">\n      <ng-content select=\"i\"></ng-content>\n      <ng-content select=\"span\"></ng-content>\n   </span>\n</li>\n",
                    styles: ["@charset \"UTF-8\";.st-breadcrumbs__item{display:inline}.st-breadcrumbs__item--text{cursor:pointer}.last .st-breadcrumbs__item--text{cursor:default;background-color:transparent}"]
                }] }
    ];
    StBreadcrumbItemComponent.propDecorators = {
        qaTag: [{ type: Input }],
        active: [{ type: Input }]
    };
    return StBreadcrumbItemComponent;
}());
export { StBreadcrumbItemComponent };
if (false) {
    /** @type {?} */
    StBreadcrumbItemComponent.prototype.active;
    /**
     * @type {?}
     * @private
     */
    StBreadcrumbItemComponent.prototype._qaTag;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnJlYWRjcnVtYnMtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LWJyZWFkY3J1bWJzL3N0LWJyZWFkY3J1bWJzLWl0ZW0vc3QtYnJlYWRjcnVtYnMtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQ7SUFBQTtJQWtCQSxDQUFDO0lBWkUsc0JBQ0ksNENBQUs7Ozs7UUFEVDtZQUVHLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7Ozs7O1FBRUQsVUFBVSxLQUFhO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBOztnQkFUSCxTQUFTLFNBQUM7b0JBQ1IsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsNnJCQUFtRDs7aUJBRXJEOzs7d0JBRUcsS0FBSzt5QkFTTCxLQUFLOztJQUdULGdDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSx5QkFBeUI7OztJQVVuQywyQ0FBeUI7Ozs7O0lBRXpCLDJDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgIHNlbGVjdG9yOiAnc3QtYnJlYWRjcnVtYnMtaXRlbScsXG4gICB0ZW1wbGF0ZVVybDogJy4vc3QtYnJlYWRjcnVtYnMtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1icmVhZGNydW1icy1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RCcmVhZGNydW1iSXRlbUNvbXBvbmVudCB7XG4gICBASW5wdXQoKVxuICAgZ2V0IHFhVGFnKCk6IFN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5fcWFUYWcucmVwbGFjZSgvIC9nLCAnLScpO1xuICAgfVxuXG4gICBzZXQgcWFUYWcocWFUYWc6IFN0cmluZykge1xuICAgICAgdGhpcy5fcWFUYWcgPSBxYVRhZztcbiAgIH1cblxuICAgQElucHV0KCkgYWN0aXZlOiBCb29sZWFuO1xuXG4gICBwcml2YXRlIF9xYVRhZzogU3RyaW5nO1xufVxuIl19