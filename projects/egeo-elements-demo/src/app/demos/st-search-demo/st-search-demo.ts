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
import { Component } from '@angular/core';
import { cloneDeep as _cloneDeep } from 'lodash';
import { StDropDownMenuItem } from '@stratio/egeo';

@Component({
   selector: 'st-search-demo',
   templateUrl: './st-search-demo.html',
   styleUrls: ['./st-search-demo.scss']
})
export class StSearchDemoComponent {
   public configDoc: any = {
      html: 'demo/st-search-demo/st-search-demo.html',
      ts: 'demo/st-search-demo/st-search-demo.ts',
      component: 'lib/st-search/st-search.component.ts'
   };
   public placeholder: string = 'Text for search';
   public qaTag: string = 'search';
   public debounceTime: number = 0;
   public minLength: number = 0;
   public searched: string = '';
   public searchedAutocomplete: string = '';
   public menu: StDropDownMenuItem[] = [
      { label: 'China', value: 'CN' },
      { label: 'Russia', value: 'RU' },
      { label: 'United States', value: 'US' },
      { label: 'Egypt', value: 'EG' },
      { label: 'Pa<b>na</b>ma', value: 'PA', hasHtml: true },
      { label: 'Canada', value: 'CA' },
      { label: 'Indonesia', value: 'ID' },
      { label: 'North Korea', value: 'KP' },
      { label: 'Chi<b>na</b>', value: 'CN', hasHtml: true },
      { label: 'France', value: 'FR' },
      { label: 'Burundi', value: 'BI' },
      { label: 'Poland', value: 'PL' },
      { label: 'Vanuatu', value: 'VU' },
      { label: 'Venezuela', value: 'VE' },
      { label: 'Indo<b>ne</b>sia', value: 'ID', hasHtml: true }
   ];

   public filteredMenu: StDropDownMenuItem[] = [];

   onSearchResult(value: { filter: string, text: string }): void {
      this.searched = value.text;
   }

   filter(filterValue: { text: string, filter: string }): void {
      this.filteredMenu = _cloneDeep(this.menu.filter(country => country.label.toLowerCase().search(filterValue.text.toLowerCase()) > -1));
   }

   searchWithAutocompleteSearch(searchValue: { text: string, filter: string }): void {
      this.searchedAutocomplete = searchValue.text;
      this.filter(searchValue);
   }
}
