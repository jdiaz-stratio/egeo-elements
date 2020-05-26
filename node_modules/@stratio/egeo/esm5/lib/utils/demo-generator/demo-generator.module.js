/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/demo-generator/demo-generator.module.ts
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
import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { StDemoGenerator } from './demo-generator';
import { DemoGeneratorProviders } from './demo-generator.interface';
import { routing } from './demo-generator.routing';
var StDemoGeneratorModule = /** @class */ (function () {
    function StDemoGeneratorModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    StDemoGeneratorModule.withComponents = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: StDemoGeneratorModule,
            providers: [
                { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config.components, multi: true },
                { provide: DemoGeneratorProviders, useValue: config }
            ]
        };
    };
    StDemoGeneratorModule.decorators = [
        { type: NgModule, args: [{
                    id: 'Demo-factory',
                    imports: [CommonModule, routing],
                    exports: [StDemoGenerator],
                    declarations: [StDemoGenerator],
                    entryComponents: [StDemoGenerator],
                    providers: []
                },] }
    ];
    return StDemoGeneratorModule;
}());
export { StDemoGeneratorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby1nZW5lcmF0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9kZW1vLWdlbmVyYXRvci9kZW1vLWdlbmVyYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVuRDtJQUFBO0lBa0JBLENBQUM7Ozs7O0lBVFMsb0NBQWM7Ozs7SUFBckIsVUFBc0IsTUFBOEI7UUFDakQsT0FBTztZQUNKLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNSLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7Z0JBQ25GLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDdkQ7U0FDSCxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakJILFFBQVEsU0FBQztvQkFDUCxFQUFFLEVBQUUsY0FBYztvQkFDbEIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQztvQkFDaEMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQy9CLGVBQWUsRUFBRSxDQUFDLGVBQWUsQ0FBQztvQkFDbEMsU0FBUyxFQUFFLEVBQUU7aUJBQ2Y7O0lBV0QsNEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0RGVtb0dlbmVyYXRvciB9IGZyb20gJy4vZGVtby1nZW5lcmF0b3InO1xuaW1wb3J0IHsgRGVtb0dlbmVyYXRvclByb3ZpZGVycyB9IGZyb20gJy4vZGVtby1nZW5lcmF0b3IuaW50ZXJmYWNlJztcbmltcG9ydCB7IHJvdXRpbmcgfSBmcm9tICcuL2RlbW8tZ2VuZXJhdG9yLnJvdXRpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICAgaWQ6ICdEZW1vLWZhY3RvcnknLFxuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgcm91dGluZ10sXG4gICBleHBvcnRzOiBbU3REZW1vR2VuZXJhdG9yXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0RGVtb0dlbmVyYXRvcl0sXG4gICBlbnRyeUNvbXBvbmVudHM6IFtTdERlbW9HZW5lcmF0b3JdLFxuICAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdERlbW9HZW5lcmF0b3JNb2R1bGUge1xuICAgc3RhdGljIHdpdGhDb21wb25lbnRzKGNvbmZpZzogRGVtb0dlbmVyYXRvclByb3ZpZGVycyk6IGFueSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgbmdNb2R1bGU6IFN0RGVtb0dlbmVyYXRvck1vZHVsZSxcbiAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgeyBwcm92aWRlOiBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTLCB1c2VWYWx1ZTogY29uZmlnLmNvbXBvbmVudHMsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgICAgICB7IHByb3ZpZGU6IERlbW9HZW5lcmF0b3JQcm92aWRlcnMsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgICAgXVxuICAgICAgfTtcbiAgIH1cbn1cbiJdfQ==