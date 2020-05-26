/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-radio-menu/st-radio-menu.module.ts
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
import { StRadioMenuComponent } from './st-radio-menu.component';
import { StRadioModule } from '../st-radio/st-radio.module';
import { SelectOneDispatcher } from '../utils/unique-dispatcher';
export class StRadioMenuModule {
}
StRadioMenuModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StRadioModule],
                declarations: [StRadioMenuComponent],
                exports: [StRadioMenuComponent],
                providers: [SelectOneDispatcher]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8tbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXJhZGlvLW1lbnUvc3QtcmFkaW8tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBUWpFLE1BQU0sT0FBTyxpQkFBaUI7OztZQU43QixRQUFRLFNBQUM7Z0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztnQkFDdEMsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUMvQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0UmFkaW9NZW51Q29tcG9uZW50IH0gZnJvbSAnLi9zdC1yYWRpby1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdFJhZGlvTW9kdWxlIH0gZnJvbSAnLi4vc3QtcmFkaW8vc3QtcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IFNlbGVjdE9uZURpc3BhdGNoZXIgfSBmcm9tICcuLi91dGlscy91bmlxdWUtZGlzcGF0Y2hlcic7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdFJhZGlvTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW1N0UmFkaW9NZW51Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdFJhZGlvTWVudUNvbXBvbmVudF0sXG4gICBwcm92aWRlcnM6IFtTZWxlY3RPbmVEaXNwYXRjaGVyXVxufSlcbmV4cG9ydCBjbGFzcyBTdFJhZGlvTWVudU1vZHVsZSB7fVxuIl19