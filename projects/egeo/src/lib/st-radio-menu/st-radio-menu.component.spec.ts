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
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { StRadioMenuOption } from './st-radio-menu-option.interface';
import { StRadioMenuComponent } from './st-radio-menu.component';

describe('StRadioMenuComponent', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [StRadioMenuComponent],
         imports: [RouterTestingModule],
         providers: [],
         schemas: [NO_ERRORS_SCHEMA]
      });
   });

   let stRadioMenuComponent: StRadioMenuComponent;
   let activeOption: StRadioMenuOption;
   beforeEach(() => {
      stRadioMenuComponent = new StRadioMenuComponent();
      activeOption = {
         label: 'active option name',
         value: 'active option value'
      };
      stRadioMenuComponent.activeOption = activeOption;
   });

   it('should be able to return if an option is active', () => {
      let anotherOption: StRadioMenuOption = {
         label: 'no active option name',
         value: 'no active option value'
      };
      expect(stRadioMenuComponent.isActive(anotherOption)).toBeFalsy();
      expect(stRadioMenuComponent.isActive(activeOption)).toBeTruthy();
   });

   describe('should be able to activate an option', () => {
      it('when active option is changed, it is updated', () => {
         stRadioMenuComponent.activateOption(activeOption);

         expect(stRadioMenuComponent.activeOption).toBe(activeOption);
      });

      it('when active option is changed, an event is emitted with the active option', () => {
         spyOn(stRadioMenuComponent.changedOption, 'emit');

         stRadioMenuComponent.activateOption(activeOption);

         expect(stRadioMenuComponent.changedOption.emit).toHaveBeenCalledWith(
            activeOption
         );
      });
   });
});
