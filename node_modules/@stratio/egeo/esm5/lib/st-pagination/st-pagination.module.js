/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-pagination/st-pagination.module.ts
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
import { StPaginationComponent } from './st-pagination.component';
import { StPaginationPipe } from './st-pagination.pipe';
import { StPaginationService } from './st-pagination.service';
import { StSelectModule } from '../st-select/st-select.module';
var StPaginationModule = /** @class */ (function () {
    function StPaginationModule() {
    }
    StPaginationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSelectModule],
                    exports: [StPaginationComponent, StPaginationPipe],
                    declarations: [StPaginationComponent, StPaginationPipe],
                    providers: [
                        StPaginationService
                    ]
                },] }
    ];
    return StPaginationModule;
}());
export { StPaginationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXBhZ2luYXRpb24vc3QtcGFnaW5hdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9EO0lBQUE7SUFRa0MsQ0FBQzs7Z0JBUmxDLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBRSxZQUFZLEVBQUUsY0FBYyxDQUFFO29CQUN6QyxPQUFPLEVBQUUsQ0FBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsQ0FBRTtvQkFDcEQsWUFBWSxFQUFFLENBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLENBQUU7b0JBQ3pELFNBQVMsRUFBRTt3QkFDUixtQkFBbUI7cUJBQ3JCO2lCQUNIOztJQUNpQyx5QkFBQztDQUFBLEFBUm5DLElBUW1DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0UGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc3QtcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RQYWdpbmF0aW9uUGlwZSB9IGZyb20gJy4vc3QtcGFnaW5hdGlvbi5waXBlJztcbmltcG9ydCB7IFN0UGFnaW5hdGlvblNlcnZpY2UgfSBmcm9tICcuL3N0LXBhZ2luYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdFNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3N0LXNlbGVjdC9zdC1zZWxlY3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLCBTdFNlbGVjdE1vZHVsZSBdLFxuICAgZXhwb3J0czogWyBTdFBhZ2luYXRpb25Db21wb25lbnQsIFN0UGFnaW5hdGlvblBpcGUgXSxcbiAgIGRlY2xhcmF0aW9uczogWyBTdFBhZ2luYXRpb25Db21wb25lbnQsIFN0UGFnaW5hdGlvblBpcGUgXSxcbiAgIHByb3ZpZGVyczogW1xuICAgICAgU3RQYWdpbmF0aW9uU2VydmljZVxuICAgXVxufSlcbmV4cG9ydCBjbGFzcyBTdFBhZ2luYXRpb25Nb2R1bGUgeyB9XG4iXX0=