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
var StRadioMenuModule = /** @class */ (function () {
    function StRadioMenuModule() {
    }
    StRadioMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StRadioModule],
                    declarations: [StRadioMenuComponent],
                    exports: [StRadioMenuComponent],
                    providers: [SelectOneDispatcher]
                },] }
    ];
    return StRadioMenuModule;
}());
export { StRadioMenuModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtcmFkaW8tbWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3RyYXRpby9lZ2VvLyIsInNvdXJjZXMiOlsibGliL3N0LXJhZGlvLW1lbnUvc3QtcmFkaW8tbWVudS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWpFO0lBQUE7SUFNZ0MsQ0FBQzs7Z0JBTmhDLFFBQVEsU0FBQztvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUNsQzs7SUFDK0Isd0JBQUM7Q0FBQSxBQU5qQyxJQU1pQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdFJhZGlvTWVudUNvbXBvbmVudCB9IGZyb20gJy4vc3QtcmFkaW8tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RSYWRpb01vZHVsZSB9IGZyb20gJy4uL3N0LXJhZGlvL3N0LXJhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBTZWxlY3RPbmVEaXNwYXRjaGVyIH0gZnJvbSAnLi4vdXRpbHMvdW5pcXVlLWRpc3BhdGNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RSYWRpb01vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtTdFJhZGlvTWVudUNvbXBvbmVudF0sXG4gICBleHBvcnRzOiBbU3RSYWRpb01lbnVDb21wb25lbnRdLFxuICAgcHJvdmlkZXJzOiBbU2VsZWN0T25lRGlzcGF0Y2hlcl1cbn0pXG5leHBvcnQgY2xhc3MgU3RSYWRpb01lbnVNb2R1bGUge31cbiJdfQ==