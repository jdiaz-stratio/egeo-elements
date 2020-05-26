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
var StItemListModule = /** @class */ (function () {
    function StItemListModule() {
    }
    StItemListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, StSearchModule, VirtualScrollerModule],
                    declarations: [ItemListScrollComponent, ItemListItemComponent, StItemListComponent],
                    exports: [StItemListComponent]
                },] }
    ];
    return StItemListModule;
}());
export { StItemListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtaXRlbS1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzdHJhdGlvL2VnZW8vIiwic291cmNlcyI6WyJsaWIvc3QtaXRlbS1saXN0L3N0LWl0ZW0tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUcvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0Q7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLENBQUM7b0JBQzlELFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLHFCQUFxQixFQUFFLG1CQUFtQixDQUFDO29CQUNuRixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDaEM7O0lBQytCLHVCQUFDO0NBQUEsQUFMakMsSUFLaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIMKpIDIwMTcgU3RyYXRpbyBCaWcgRGF0YSBJbmMuLCBTdWN1cnNhbCBlbiBFc3Bhw7FhLlxuICpcbiAqIFRoaXMgc29mdHdhcmUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMC5cbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7XG4gKiB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuICogU2VlIHRoZSB0ZXJtcyBvZiB0aGUgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wLlxuICovXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxlck1vZHVsZSB9IGZyb20gJ25neC12aXJ0dWFsLXNjcm9sbGVyJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgSXRlbUxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtLWxpc3QtaXRlbS9pdGVtLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUxpc3RTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0tbGlzdC1zY3JvbGwvaXRlbS1saXN0LXNjcm9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RJdGVtTGlzdENvbXBvbmVudCB9IGZyb20gJy4vc3QtaXRlbS1saXN0LmNvbXBvbmVudCc7XG5cbi8vIFNlYXJjaCBtb2R1bGVcbmltcG9ydCB7IFN0U2VhcmNoTW9kdWxlIH0gZnJvbSAnLi4vc3Qtc2VhcmNoL3N0LXNlYXJjaC5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3RTZWFyY2hNb2R1bGUsIFZpcnR1YWxTY3JvbGxlck1vZHVsZV0sXG4gICBkZWNsYXJhdGlvbnM6IFtJdGVtTGlzdFNjcm9sbENvbXBvbmVudCwgSXRlbUxpc3RJdGVtQ29tcG9uZW50LCBTdEl0ZW1MaXN0Q29tcG9uZW50XSxcbiAgIGV4cG9ydHM6IFtTdEl0ZW1MaXN0Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdEl0ZW1MaXN0TW9kdWxlIHsgfVxuIl19