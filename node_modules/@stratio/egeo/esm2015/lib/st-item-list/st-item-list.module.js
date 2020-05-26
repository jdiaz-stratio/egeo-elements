/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-item-list/st-item-list.module.ts
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
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
// Components
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemListScrollComponent } from './item-list-scroll/item-list-scroll.component';
import { StItemListComponent } from './st-item-list.component';
// Search module
import { StSearchModule } from '../st-search/st-search.module';
export class StItemListModule {
}
StItemListModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, StSearchModule, VirtualScrollerModule],
                declarations: [ItemListScrollComponent, ItemListItemComponent, StItemListComponent],
                exports: [StItemListComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaXRlbS1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaXRlbS1saXN0L3N0LWl0ZW0tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUcvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPL0QsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTDVCLFFBQVEsU0FBQztnQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixDQUFDO2dCQUM5RCxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxtQkFBbUIsQ0FBQztnQkFDbkYsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlydHVhbFNjcm9sbGVyTW9kdWxlIH0gZnJvbSAnbmd4LXZpcnR1YWwtc2Nyb2xsZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBJdGVtTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2l0ZW0tbGlzdC1pdGVtL2l0ZW0tbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtTGlzdFNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vaXRlbS1saXN0LXNjcm9sbC9pdGVtLWxpc3Qtc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdEl0ZW1MaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zdC1pdGVtLWxpc3QuY29tcG9uZW50JztcblxuLy8gU2VhcmNoIG1vZHVsZVxuaW1wb3J0IHsgU3RTZWFyY2hNb2R1bGUgfSBmcm9tICcuLi9zdC1zZWFyY2gvc3Qtc2VhcmNoLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTdFNlYXJjaE1vZHVsZSwgVmlydHVhbFNjcm9sbGVyTW9kdWxlXSxcbiAgIGRlY2xhcmF0aW9uczogW0l0ZW1MaXN0U2Nyb2xsQ29tcG9uZW50LCBJdGVtTGlzdEl0ZW1Db21wb25lbnQsIFN0SXRlbUxpc3RDb21wb25lbnRdLFxuICAgZXhwb3J0czogW1N0SXRlbUxpc3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN0SXRlbUxpc3RNb2R1bGUgeyB9XG4iXX0=