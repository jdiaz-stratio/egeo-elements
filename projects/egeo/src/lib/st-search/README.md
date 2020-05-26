# Search (Component)

   The search component has been designed to allow user to find a specific content according to his needs.

## Inputs

| Property                     | Type                 | Req   | Description                                                                                           | Default  |
| ---------------------------- | -------------------- | ----- | ----------------------------------------------------------------------------------------------------- | -------- |
| debounce                     | Number               | False | Time elapsed in milliseconds before displaying the autocomplete list                                  | 0        |
| liveSearch                   | Boolean              | False | Boolean to enable or disable the automatic search while the user is typing                            | true     |
| minLength                    | Number               | False | Minimum of characters typed by the user before launching the search                                   | 0        |
| placeholder                  | String               | False | Text displayed in the search input                                                                    | 'Search' |
| qaTag                        | String               | False | Label used as id                                                                                      | ''       |
| value                        | String               | False | Initial value of the search text                                                                      | ''       |
| disabled                     | Boolean              | False | Boolean to enable or disable the search                                                               | false    |
| withAutocomplete             | Boolean              | False | Enable or disable the autocomplete list when user is typing                                           | false    |
| autocompleteList             | StDropDownMenuItem[] | False | List of items displayed in the autocomplete list when user is typing                                  | ''       |
| showIcon                     | Boolean              | False | Boolean to hide/show the loupe icon                                                                   | true     |
| emptyAutocompleteListMessage | String               | False | Message displayed when the autocomplete list is enabled but there are not any item with the typed text | ''       |
| filterOptions                | StDropDownMenuItem[] | False | Options displayed at the filter select. If it is not introduced,filter will not be displayed          | ''       |
| keyBoardMove                 | Boolean              | False | It is needed to activate navigation through options using the keyboard                                | false    |

## Outputs

| Property | Type                                  | Description                                                                                                                              |
| -------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| search   | Object(filter?: string, text: string) | Event emitted when search is launched. It contains the text typed by the user and the filter value selected (only if filter is displayed) |

## Example


```html
Search without filters
<st-search [placeholder]="placeholder"
      [qaTag]="qaTag"
      [value]="searched"
      [debounce]="debounceTime"
      [minLength]="minLength"
      (search)="onSearchResult($event)"></st-search>


Search with filters
<st-search [placeholder]="placeholder"
      [qaTag]="qaTag"
      [value]="searched"
      [debounce]="debounceTime"
      [minLength]="minLength"
      [filterOptions]="[
{ label: 'All', value: 1 },
{ label: 'Type ', value: 2 },
{ label: 'Color', value: 3 }
]"
      (search)="onSearchResult($event)"></st-search>
```

