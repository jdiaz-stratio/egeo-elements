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
import { ChangeDetectionStrategy, DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { StSearchComponent } from './st-search.component';
import { StDropdownMenuModule } from '../st-dropdown-menu/st-dropdown-menu.module';
import { StDropDownMenuItem } from '../st-dropdown-menu/st-dropdown-menu.interface';
import { StSelectModule } from '../st-select/st-select.module';
import { StInputModule } from '../st-input/st-input.module';
import { StSearchEventOrigin } from './st-search.model';
import { StSelectComponent } from '../st-select/st-select';
import { StInputComponent } from '../st-input/st-input.component';

// Component

// Modules

let component: StSearchComponent;
let fixture: ComponentFixture<StSearchComponent>;

let id: string = 'search-123';
let placeholder: string = 'search a text';

describe('StSearchComponent', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, StDropdownMenuModule, StSelectModule, StInputModule, StDropdownMenuModule],
         declarations: [StSearchComponent]
      })
      // remove this block when the issue #12313 of Angular is fixed
         .overrideComponent(StSearchComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StSelectComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .overrideComponent(StInputComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
         })
         .compileComponents();  // compile template and css
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(StSearchComponent);
      component = fixture.componentInstance;

      component.qaTag = id;
      component.placeholder = placeholder;
      spyOn(component.search, 'emit').and.callThrough();
   });

   describe('When it is initialized', () => {
      it('id and placeholder are added to input', () => {
         fixture.detectChanges();

         let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;

         expect(input.id).toEqual(id);  // qaTag
         expect(input.placeholder).toEqual(placeholder); // placeholder value
      });

      it('if value is introduced, it is added to input', () => {
         component.value = 'Initial value';

         fixture.detectChanges();
         let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

         expect((<HTMLInputElement>input.nativeElement).value).toEqual('Initial value');
      });
   });

   it('should be able to search the text introduced by the user', fakeAsync(() => {
      component.debounce = 10;
      fixture.detectChanges();
      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;

      input.value = result;
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(11);
      expect(component.search.emit).toHaveBeenCalledWith({ text: result, origin: StSearchEventOrigin.INPUT });
   }));

   it('should be able to search with the delay introduced as input', fakeAsync(() => {
      component.debounce = 1000;
      fixture.detectChanges();

      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;

      input.value = result;
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(500);
      expect(component.search.emit).not.toHaveBeenCalled();
      tick(501);
      expect(component.search.emit).toHaveBeenCalledWith({ text: result, origin: StSearchEventOrigin.INPUT });
   }));

   it('should be able to search with an updated delay', fakeAsync(() => {
      component.debounce = 1000;
      fixture.detectChanges();

      let result: string = 'test';
      let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;

      input.value = result;
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(500);
      expect(component.search.emit).not.toHaveBeenCalled();
      tick(501);
      expect(component.search.emit).toHaveBeenCalledWith({ text: result, origin: StSearchEventOrigin.INPUT });

      let changes: SimpleChanges = { debounce: new SimpleChange(1000, 250, true) };
      component.debounce = 250;
      component.ngOnChanges(changes);
      fixture.detectChanges();

      (<jasmine.Spy> component.search.emit).calls.reset();
      result = 'test2';
      input.value = result;
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(200);
      expect(component.search.emit).not.toHaveBeenCalled();
      tick(55);
      expect(component.search.emit).toHaveBeenCalledWith({ text: result, origin: StSearchEventOrigin.INPUT });
   }));

   it('should search when user types a text with the min length introduced as input', fakeAsync(() => {
      component.minLength = 3;
      fixture.detectChanges();

      let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;

      input.value = 'te';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      expect(component.search.emit).not.toHaveBeenCalled();

      input.value = 'test';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'test', origin: StSearchEventOrigin.INPUT });
   }));

   it('should search when user presses the enter key', () => {
      component.debounce = 0;
      component.minLength = 0;

      fixture.detectChanges();
      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      input.nativeElement.value = 'te';
      input.nativeElement.dispatchEvent(new Event('input'));
      input.triggerEventHandler('keypress', { keyCode: 13 });
      fixture.detectChanges();

      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(1);
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'te', origin: StSearchEventOrigin.ENTER });

      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      input.triggerEventHandler('keypress', { which: 10 });
      fixture.detectChanges();

      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(1); // Not again

      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      input.triggerEventHandler('keypress', { which: 13 });
      fixture.detectChanges();

      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(2);
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'test', origin: StSearchEventOrigin.ENTER });

      input.triggerEventHandler('keypress', { which: 13 });
      fixture.detectChanges();

      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(3);
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'test', origin: StSearchEventOrigin.ENTER });
   });

   it('should be able to search twice', fakeAsync(() => {
      fixture.detectChanges();
      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      input.nativeElement.value = 'te';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(1);
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'te', origin: StSearchEventOrigin.INPUT });

      input.nativeElement.value = 'te';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      expect(component.search.emit).toHaveBeenCalledTimes(1);

      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(2);
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'test', origin: StSearchEventOrigin.INPUT });
   }));

   it('should search when user presses the enter key without liveSearch', () => {
      component.liveSearch = false;

      fixture.detectChanges();
      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      input.nativeElement.value = 'te';
      input.nativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      expect(component.search.emit).not.toHaveBeenCalled();

      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      input.triggerEventHandler('keypress', { which: 13 });
      fixture.detectChanges();

      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledWith({ text: 'test', origin: StSearchEventOrigin.ENTER });
   });

   it('should be able to clean the search text when user clicks on the cross button and event is emitted with an empty search', () => {
      component.debounce = 0;
      component.minLength = 0;

      fixture.detectChanges();

      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      input.nativeElement.value = 'test';
      input.nativeElement.dispatchEvent(new Event('input'));
      input.nativeElement.dispatchEvent(new Event('focus'));
      fixture.detectChanges();

      let clearButton: DebugElement = fixture.debugElement.query(By.css('.icon-cross'));
      expect(component.searchBox.value).toEqual('test');

      clearButton.nativeElement.dispatchEvent(new Event('mousedown'));

      expect(component.searchBox.value).toEqual('');
      expect(component.search.emit).toHaveBeenCalledWith({ text: '', origin: StSearchEventOrigin.INPUT });
   });

   it('should be able to change initial value of search', () => {
      component.debounce = 0;
      component.minLength = 0;
      component.value = 'Initial value';
      fixture.detectChanges();
      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      expect((<HTMLInputElement>input.nativeElement).value).toEqual('Initial value');

      let changes: SimpleChanges = {
         value: new SimpleChange('Initial value', 'new value', true),
         liveSearch: new SimpleChange(true, false, true)
      };

      component.value = 'new value';
      component.liveSearch = false;

      component.ngOnChanges(changes);
      fixture.detectChanges();

      expect((<HTMLInputElement>input.nativeElement).value).toEqual('new value');

      changes = {
         liveSearch: { currentValue: true, previousValue: false, firstChange: false, isFirstChange: () => false }
      };
      component.ngOnChanges(changes);
      fixture.detectChanges();

      expect((<HTMLInputElement>input.nativeElement).value).toEqual('new value');
   });

   it('should be able to change to disabled state', () => {
      component.disabled = true;
      fixture.detectChanges();
      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      let disabledState: string = input.nativeElement.getAttribute('disabled');
      expect(disabledState).not.toBeNull();
   });

   it('should be able to change to disabled state twice', () => {
      component.disabled = true;
      fixture.detectChanges();
      let input: DebugElement = fixture.debugElement.query(By.css('.st-search-input'));

      let disabledState: string = input.nativeElement.getAttribute('disabled');
      expect(disabledState).not.toBeNull();

      let changes: SimpleChanges = { disabled: new SimpleChange(true, false, true) };
      component.ngOnChanges(changes);
      disabledState = input.nativeElement.getAttribute('disabled');
      expect(disabledState).toEqual('');
   });

   it('should destroy correctly', () => {
      component.isActive = true;
      expect(component.isActive).toBeTruthy();
      component.ngOnDestroy();
      expect(component.isActive).toBeFalsy();
   });

   it('should be able to search with autocomplete clicking on an option', () => {
      component.autocompleteList = [{ value: '1', label: '1' }, { value: '2', label: '2' }];
      component.withAutocomplete = true;

      fixture.detectChanges();
      expect(component.search.emit).not.toHaveBeenCalled();

      component.changeOption(undefined);
      expect(component.search.emit).not.toHaveBeenCalled();

      component.changeOption(component.autocompleteList[0]);
      expect(component.search.emit).toHaveBeenCalled();
      expect(component.search.emit).toHaveBeenCalledTimes(1);
      expect(component.search.emit).toHaveBeenCalledWith({ text: component.autocompleteList[0].value, origin: StSearchEventOrigin.LIST });
   });

   it('should be able to search with autocomplete', fakeAsync(() => {
      component.autocompleteList = [{ value: '1', label: '1' }, { value: '2', label: '2' }];
      component.withAutocomplete = true;
      fixture.detectChanges();

      let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;
      let dropdownItems: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));

      expect(input).toBeDefined();
      expect(dropdownItems.length).toEqual(0);

      input.value = 'te';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      fixture.detectChanges();
      dropdownItems = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(dropdownItems.length).toEqual(2);

      input.value = '';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick(1);
      fixture.detectChanges();
      dropdownItems = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(dropdownItems.length).toEqual(0);
      flush();
   }));

   it('should be able to change autocomplete list', fakeAsync(() => {
      let initialList: StDropDownMenuItem[] = [{ value: '1', label: '1' }, { value: '2', label: '2' }];
      let finalList: StDropDownMenuItem[] = [{ value: '1', label: '1' }, { value: '2', label: '2' }, {
         value: '3',
         label: '3'
      }];
      component.autocompleteList = initialList;
      component.withAutocomplete = true;
      fixture.detectChanges();

      let input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;
      let dropdownItems: DebugElement[] = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));

      expect(input).toBeDefined();
      expect(dropdownItems.length).toEqual(0);


      input.value = 'te';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();

      tick(1);
      fixture.detectChanges();
      dropdownItems = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(dropdownItems.length).toEqual(initialList.length);


      component.autocompleteList = finalList;
      let changes: SimpleChanges = { autocompleteList: new SimpleChange(initialList, finalList, true) };
      component.ngOnChanges(changes);
      fixture.detectChanges();
      dropdownItems = fixture.debugElement.queryAll(By.css('st-dropdown-menu-item'));
      expect(dropdownItems.length).toEqual(finalList.length);
      flush();
   }));

   it('should be able to open autocomplete list when user clicks on input', fakeAsync(() => {
      component.autocompleteList =  [{ value: '1', label: '1' }, { value: '2', label: '2' }];
      component.withAutocomplete = true;
      fixture.detectChanges();

      const input: HTMLInputElement = fixture.debugElement.query(By.css('.st-search-input')).nativeElement;

      input.value = 'te';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick(1);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.st-dropdown-menu.active')).not.toBeNull();
      flush();
   }));

   describe('Should be able to allow a filtered search', () => {
      beforeEach(() => {
         component.filterOptions = [
            { label: 'example 1', value: 1 },
            { label: 'example 2', value: 2 },
            { label: 'example 3', value: 3 }
         ] as StDropDownMenuItem[];

         fixture.detectChanges();
      });

      it('only if filter options are introduced as param, a select will be displayed before the search box', () => {
         expect(fixture.nativeElement.querySelector('.st-search-filter')).not.toBeNull();

         component.filterOptions = undefined;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-search-filter')).toBeNull();
      });

      it('if search is disabled, filter select has to be disabled as well', () => {
         component.disabled = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('input[name="search-filter"]').disabled).toBeTruthy();
      });

      it('by default, first filter is selected', () => {
         fixture.detectChanges();

         expect(component.filter).toBe(component.filterOptions[0].value);
      });

      it('When user changes the filter, it sends an event with the selected filter value', () => {
         fixture.nativeElement.querySelector('input[name="search-filter"]').click();
         fixture.detectChanges();

         fixture.nativeElement.querySelectorAll('.st-dropdown-menu-item')[1].click();

         expect(component.search.emit).toHaveBeenCalledWith({ text: '', filter: component.filterOptions[1].value, origin: StSearchEventOrigin.FILTER });
      });
   });

   describe ('should be able to hide or show the loupe icon to the right of the search box', () => {

      it ('by default, it is shown', () => {
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-search-icon.icon-search')).not.toBeNull();
      });

      it ('if showIcon is true, it is shown', () => {
         component.showIcon = true;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-search-icon.icon-search')).not.toBeNull();
      });

      it ('if showIcon is true, it is shown', () => {
         component.showIcon = false;
         fixture.detectChanges();

         expect(fixture.nativeElement.querySelector('.st-search-icon.icon-search')).toBeNull();
      });
   });
});
