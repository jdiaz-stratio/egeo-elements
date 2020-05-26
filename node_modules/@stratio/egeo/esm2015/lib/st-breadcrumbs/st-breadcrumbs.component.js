/**
 * @fileoverview added by tsickle
 * Generated from: lib/st-breadcrumbs/st-breadcrumbs.component.ts
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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { range as _range } from 'lodash';
import { StBreadCrumbMode } from './st-breadcrumbs.interface';
/**
 * \@description {Component} [Breadcrumbs]
 *
 * The breadcrumb is s a type of secondary navigation
 * element that shows a trail for allowing users to keep track of their location.
 *
 * \@model
 *
 *   [Id, optional label and icon of an option] {./st-breadcrumbs.interface.ts#StBreadCrumbItem}
 *
 * \@example
 *
 * {html}
 *
 * ```
 * <st-breadcrumbs
 *    [options]="options"
 *    (select)="onSelect($event)"
 *    qaTag="breadcrumbs">
 * </st-breadcrumbs>
 * ```
 *
 */
export class StBreadCrumbsComponent {
    constructor() {
        /**
         * \@Input {StBreadCrumbItem[]} [options=\[\]] List of navigation parts for show in breadcrumb
         */
        this.options = [];
        /**
         * \@Input {number} [elementsToShow=5] Max number of elements to show.
         */
        this.elementsToShow = 5;
        /**
         * \@Input {StBreadCrumbMode} [mode=StBreadCrumbMode.DEFAULT] Visualization mode
         */
        this.mode = StBreadCrumbMode.DEFAULT;
        /**
         * \@Output {number} [select] Notify any item selection
         */
        this.select = new EventEmitter();
        this.indexArray = [];
        this._initPos = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.calculateStart(this.options, this.elementsToShow);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.options || changes.elementsToShow) {
            /** @type {?} */
            const currElsToShow = changes.elementsToShow ? changes.elementsToShow.currentValue : this.elementsToShow;
            /** @type {?} */
            const currOptions = changes.options ? changes.options.currentValue : this.options;
            this.calculateStart(currOptions, currElsToShow);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onSelect(index) {
        /** @type {?} */
        const toEmit = index > -1 ? index : this._initPos - 1;
        if (toEmit < (this.options.length - 1)) {
            this.select.emit(toEmit);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getId(index) {
        return this.options[index].id;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getLabel(index) {
        return index > -1 ? this.options[index].label : '...';
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getIcon(index) {
        return index > -1 ? this.options[index].icon : '';
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hasIcon(index) {
        return index > -1 && Boolean(this.options[index].icon);
    }
    /**
     * @private
     * @param {?} options
     * @param {?} elementsToShow
     * @return {?}
     */
    calculateStart(options, elementsToShow) {
        if (options.length > elementsToShow) {
            this._initPos = options.length - elementsToShow + 1; // use +1 because first element is fixed
            this.indexArray = _range(this._initPos, this._initPos + elementsToShow - 1);
            this.indexArray.unshift(-1); // Add dots fixed element
            this.indexArray.unshift(0); // Add first fixed element
        }
        else {
            this._initPos = 0;
            this.indexArray = _range(0, options.length);
        }
    }
}
StBreadCrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'st-breadcrumbs',
                template: "<!--\n\n    \u00A9 2017 Stratio Big Data Inc., Sucursal en Espa\u00F1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<ul class=\"st-breadcrumbs {{mode}}-mode\" [attr.id]=\"qaTag\">\n   <ng-content select=\"st-breadcrumbs-item\"></ng-content>\n   <ng-container *ngIf=\"options.length\">\n      <st-breadcrumbs-item\n         class=\"sth-breadcrumbs__item-container\"\n         *ngFor=\"let idx of indexArray; let last=last\"\n         (click)=\"onSelect(idx)\"\n         [active]=\"last\"\n         [qaTag]=\"qaTag + '-' + idx\">\n         <i *ngIf=\"hasIcon(idx)\" [ngClass]=\"getIcon(idx)\"></i>\n         <span>{{getLabel(idx)}}</span>\n      </st-breadcrumbs-item>\n   </ng-container>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["@charset \"UTF-8\";ul{text-overflow:ellipsis;overflow:hidden;list-style:none;margin:0;padding:0}"]
            }] }
];
StBreadCrumbsComponent.propDecorators = {
    options: [{ type: Input }],
    elementsToShow: [{ type: Input }],
    mode: [{ type: Input }],
    qaTag: [{ type: Input }],
    select: [{ type: Output }]
};
if (false) {
    /**
     * \@Input {StBreadCrumbItem[]} [options=\[\]] List of navigation parts for show in breadcrumb
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.options;
    /**
     * \@Input {number} [elementsToShow=5] Max number of elements to show.
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.elementsToShow;
    /**
     * \@Input {StBreadCrumbMode} [mode=StBreadCrumbMode.DEFAULT] Visualization mode
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.mode;
    /**
     * \@Input {string} [qaTag=''] Id value for qa test
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.qaTag;
    /**
     * \@Output {number} [select] Notify any item selection
     * @type {?}
     */
    StBreadCrumbsComponent.prototype.select;
    /** @type {?} */
    StBreadCrumbsComponent.prototype.indexArray;
    /**
     * @type {?}
     * @private
     */
    StBreadCrumbsComponent.prototype._initPos;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHN0cmF0aW8vZWdlby8iLCJzb3VyY2VzIjpbImxpYi9zdC1icmVhZGNydW1icy9zdC1icmVhZGNydW1icy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUNKLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRVIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssSUFBSSxNQUFNLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQmhGLE1BQU0sT0FBTyxzQkFBc0I7SUFObkM7Ozs7UUFRWSxZQUFPLEdBQXVCLEVBQUUsQ0FBQzs7OztRQUVqQyxtQkFBYyxHQUFXLENBQUMsQ0FBQzs7OztRQUUzQixTQUFJLEdBQXFCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzs7OztRQUtqRCxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFN0QsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBZ0RoQyxDQUFDOzs7O0lBOUNTLFFBQVE7UUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLE9BQXNCO1FBQ3RDLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFOztrQkFDdEMsYUFBYSxHQUFXLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYzs7a0JBQzFHLFdBQVcsR0FBdUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ3JHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0osQ0FBQzs7Ozs7SUFFTSxRQUFRLENBQUMsS0FBYTs7Y0FDcEIsTUFBTSxHQUFXLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7UUFDN0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQjtJQUNKLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLEtBQWE7UUFDekIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFTSxPQUFPLENBQUMsS0FBYTtRQUN6QixPQUFPLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE9BQTJCLEVBQUUsY0FBc0I7UUFDdkUsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLGNBQWMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztZQUM3RixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7U0FDeEQ7YUFBTTtZQUNKLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7SUFDSixDQUFDOzs7WUFuRUgsU0FBUyxTQUFDO2dCQUNSLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHFnQ0FBOEM7Z0JBRTlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNqRDs7O3NCQUdHLEtBQUs7NkJBRUwsS0FBSzttQkFFTCxLQUFLO29CQUVMLEtBQUs7cUJBR0wsTUFBTTs7Ozs7OztJQVRQLHlDQUEwQzs7Ozs7SUFFMUMsZ0RBQW9DOzs7OztJQUVwQyxzQ0FBMkQ7Ozs7O0lBRTNELHVDQUF1Qjs7Ozs7SUFHdkIsd0NBQW9FOztJQUVwRSw0Q0FBaUM7Ozs7O0lBQ2pDLDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiDCqSAyMDE3IFN0cmF0aW8gQmlnIERhdGEgSW5jLiwgU3VjdXJzYWwgZW4gRXNwYcOxYS5cbiAqXG4gKiBUaGlzIHNvZnR3YXJlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAuXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZO1xuICogd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbiAqIFNlZSB0aGUgdGVybXMgb2YgdGhlIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMC5cbiAqL1xuaW1wb3J0IHtcbiAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgQ29tcG9uZW50LFxuICAgRXZlbnRFbWl0dGVyLFxuICAgSW5wdXQsXG4gICBPbkNoYW5nZXMsXG4gICBPbkluaXQsXG4gICBPdXRwdXQsXG4gICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2UgYXMgX3JhbmdlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFN0QnJlYWRDcnVtYkl0ZW0sIFN0QnJlYWRDcnVtYk1vZGUgfSBmcm9tICcuL3N0LWJyZWFkY3J1bWJzLmludGVyZmFjZSc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHtDb21wb25lbnR9IFtCcmVhZGNydW1ic11cbiAqXG4gKiBUaGUgYnJlYWRjcnVtYiBpcyBzIGEgdHlwZSBvZiBzZWNvbmRhcnkgbmF2aWdhdGlvblxuICogZWxlbWVudCB0aGF0IHNob3dzIGEgdHJhaWwgZm9yIGFsbG93aW5nIHVzZXJzIHRvIGtlZXAgdHJhY2sgb2YgdGhlaXIgbG9jYXRpb24uXG4gKlxuICogQG1vZGVsXG4gKlxuICogICBbSWQsIG9wdGlvbmFsIGxhYmVsIGFuZCBpY29uIG9mIGFuIG9wdGlvbl0gey4vc3QtYnJlYWRjcnVtYnMuaW50ZXJmYWNlLnRzI1N0QnJlYWRDcnVtYkl0ZW19XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiB7aHRtbH1cbiAqXG4gKiBgYGBcbiAqIDxzdC1icmVhZGNydW1ic1xuICogICAgW29wdGlvbnNdPVwib3B0aW9uc1wiXG4gKiAgICAoc2VsZWN0KT1cIm9uU2VsZWN0KCRldmVudClcIlxuICogICAgcWFUYWc9XCJicmVhZGNydW1ic1wiPlxuICogPC9zdC1icmVhZGNydW1icz5cbiAqIGBgYFxuICpcbiAqL1xuQENvbXBvbmVudCh7XG4gICBzZWxlY3RvcjogJ3N0LWJyZWFkY3J1bWJzJyxcbiAgIHRlbXBsYXRlVXJsOiAnLi9zdC1icmVhZGNydW1icy5jb21wb25lbnQuaHRtbCcsXG4gICBzdHlsZVVybHM6IFsnLi9zdC1icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyddLFxuICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU3RCcmVhZENydW1ic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgIC8qKiBASW5wdXQge1N0QnJlYWRDcnVtYkl0ZW1bXX0gW29wdGlvbnM9XFxbXFxdXSBMaXN0IG9mIG5hdmlnYXRpb24gcGFydHMgZm9yIHNob3cgaW4gYnJlYWRjcnVtYiAqL1xuICAgQElucHV0KCkgb3B0aW9uczogU3RCcmVhZENydW1iSXRlbVtdID0gW107XG4gICAvKiogQElucHV0IHtudW1iZXJ9IFtlbGVtZW50c1RvU2hvdz01XSBNYXggbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHNob3cuICovXG4gICBASW5wdXQoKSBlbGVtZW50c1RvU2hvdzogbnVtYmVyID0gNTtcbiAgIC8qKiBASW5wdXQge1N0QnJlYWRDcnVtYk1vZGV9IFttb2RlPVN0QnJlYWRDcnVtYk1vZGUuREVGQVVMVF0gVmlzdWFsaXphdGlvbiBtb2RlICovXG4gICBASW5wdXQoKSBtb2RlOiBTdEJyZWFkQ3J1bWJNb2RlID0gU3RCcmVhZENydW1iTW9kZS5ERUZBVUxUO1xuICAgLyoqIEBJbnB1dCB7c3RyaW5nfSBbcWFUYWc9JyddIElkIHZhbHVlIGZvciBxYSB0ZXN0ICovXG4gICBASW5wdXQoKSBxYVRhZzogc3RyaW5nO1xuXG4gICAvKiogQE91dHB1dCB7bnVtYmVyfSBbc2VsZWN0XSBOb3RpZnkgYW55IGl0ZW0gc2VsZWN0aW9uICovXG4gICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICBwdWJsaWMgaW5kZXhBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgIHByaXZhdGUgX2luaXRQb3M6IG51bWJlciA9IDA7XG5cbiAgIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlU3RhcnQodGhpcy5vcHRpb25zLCB0aGlzLmVsZW1lbnRzVG9TaG93KTtcbiAgIH1cblxuICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMgfHwgY2hhbmdlcy5lbGVtZW50c1RvU2hvdykge1xuICAgICAgICAgY29uc3QgY3VyckVsc1RvU2hvdzogbnVtYmVyID0gY2hhbmdlcy5lbGVtZW50c1RvU2hvdyA/IGNoYW5nZXMuZWxlbWVudHNUb1Nob3cuY3VycmVudFZhbHVlIDogdGhpcy5lbGVtZW50c1RvU2hvdztcbiAgICAgICAgIGNvbnN0IGN1cnJPcHRpb25zOiBTdEJyZWFkQ3J1bWJJdGVtW10gPSBjaGFuZ2VzLm9wdGlvbnMgPyBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlIDogdGhpcy5vcHRpb25zO1xuICAgICAgICAgdGhpcy5jYWxjdWxhdGVTdGFydChjdXJyT3B0aW9ucywgY3VyckVsc1RvU2hvdyk7XG4gICAgICB9XG4gICB9XG5cbiAgIHB1YmxpYyBvblNlbGVjdChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICBjb25zdCB0b0VtaXQ6IG51bWJlciA9IGluZGV4ID4gLTEgPyBpbmRleCA6IHRoaXMuX2luaXRQb3MgLSAxO1xuICAgICAgaWYgKHRvRW1pdCA8ICh0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQodG9FbWl0KTtcbiAgICAgIH1cbiAgIH1cblxuICAgcHVibGljIGdldElkKGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1tpbmRleF0uaWQ7XG4gICB9XG5cbiAgIHB1YmxpYyBnZXRMYWJlbChpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gdGhpcy5vcHRpb25zW2luZGV4XS5sYWJlbCA6ICcuLi4nO1xuICAgfVxuXG4gICBwdWJsaWMgZ2V0SWNvbihpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBpbmRleCA+IC0xID8gdGhpcy5vcHRpb25zW2luZGV4XS5pY29uIDogJyc7XG4gICB9XG5cbiAgIHB1YmxpYyBoYXNJY29uKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBpbmRleCA+IC0xICYmIEJvb2xlYW4odGhpcy5vcHRpb25zW2luZGV4XS5pY29uKTtcbiAgIH1cblxuICAgcHJpdmF0ZSBjYWxjdWxhdGVTdGFydChvcHRpb25zOiBTdEJyZWFkQ3J1bWJJdGVtW10sIGVsZW1lbnRzVG9TaG93OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA+IGVsZW1lbnRzVG9TaG93KSB7XG4gICAgICAgICB0aGlzLl9pbml0UG9zID0gb3B0aW9ucy5sZW5ndGggLSBlbGVtZW50c1RvU2hvdyArIDE7IC8vIHVzZSArMSBiZWNhdXNlIGZpcnN0IGVsZW1lbnQgaXMgZml4ZWRcbiAgICAgICAgIHRoaXMuaW5kZXhBcnJheSA9IF9yYW5nZSh0aGlzLl9pbml0UG9zLCB0aGlzLl9pbml0UG9zICsgZWxlbWVudHNUb1Nob3cgLSAxKTtcbiAgICAgICAgIHRoaXMuaW5kZXhBcnJheS51bnNoaWZ0KC0xKTsgLy8gQWRkIGRvdHMgZml4ZWQgZWxlbWVudFxuICAgICAgICAgdGhpcy5pbmRleEFycmF5LnVuc2hpZnQoMCk7IC8vIEFkZCBmaXJzdCBmaXhlZCBlbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgdGhpcy5faW5pdFBvcyA9IDA7XG4gICAgICAgICB0aGlzLmluZGV4QXJyYXkgPSBfcmFuZ2UoMCwgb3B0aW9ucy5sZW5ndGgpO1xuICAgICAgfVxuICAgfVxufVxuIl19