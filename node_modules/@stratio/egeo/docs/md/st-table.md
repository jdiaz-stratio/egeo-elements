# Table (Component)

   The table component has been designed to display any content like images, text, graphs, etc.

## Inputs

| Property              | Type               | Req   | Description                                                                                                                                                                   | Default   |
| --------------------- | ------------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| fields                | StTableHeader[]    | False | List of field displayed in the header                                                                                                                                         | ''        |
| qaTag                 | String             | False | Prefix used to generate the id values for qa tests                                                                                                                            | ''        |
| header                | Boolean            | False | Boolean to show or hide the header                                                                                                                                            | true      |
| sortable              | Boolean            | False | Boolean to make sortable the table, To enable sorting of columns use the new "sortable" field inside stTableHeader model                                                      | true      |
| filterable            | Boolean            | False | Boolean to make filterable the table, To enable filtering of columns use the new "filterable" field inside stTableHeader model (necesary define filterConfig).                | true      |
| selectableAll         | Boolean            | False | Boolean to show or hide a checkbox in the header to select or deselect all rows                                                                                               | false     |
| currentOrder          | Order              | False | It specifies what is the current order applied to the table                                                                                                                   | ''        |
| templateContentFilter | TemplateRef        | False | Reference to paint a custom template inside popover content                                                                                                                   | undefined |
| statusFilter          | Boolean[]          | False | List of status filter by column, needed with templateContentFilter                                                                                                            | ''        |
| iconClasses           | StTableIconClasses | False | List of icon classes                                                                                                                                                          | ''        |
| fixedHeader           | Boolean            | False | Boolean to fix the table header                                                                                                                                               | false     |
| customClasses         | String             | False | Classes for adding styles to table tag from outside. These can be: separated-rows                                                                                             |           |
| selectedAll           | Boolean            | False | It specifies if all rows are selected                                                                                                                                         | false     |
| hasHoverMenu          | Boolean            | False | It specifies if a menu has to be displayed when user puts the mouse over the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu | false     |

## Outputs

| Property      | Type            | Description                                                                        |
| ------------- | --------------- | ---------------------------------------------------------------------------------- |
| changeOrder   | Order           | Event emitted with the new order which has to be applied to the table rows         |
| selectAll     | Boolean         | Event emitted when user interacts with the checkbox to select or deselect all rows |
| clickFilter   | String          | Event emitted when clicking on filters icon                                        |
| selectFilters | StTableHeader[] | Event emitted  when user interacts with filter button without a custom template    |

## Example


```html
<st-table [fields]="fields"
      [sortable]="true"
      (changeOrder)="yourFunctionToOrder($event)">
    <tr st-table-row
          ngFor="let userData of data">
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.id}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.name}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.lastName}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.phone}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.company}}</label>
        </td>
        <td st-table-cell
              st-table-row-content>
            <label>{{userData.completedProfile}}</label>
        </td>
        <td st-table-row-hover>
            <i class="icon icon-arrow2_right"></i>
        </td>
    </tr>
</st-table>
```

## Models

*StTableHeader* (StTableHeader)

```typescript
export interface StTableHeader {
    id: string;
    label: string;
    sortable ? : boolean;
    filters ? : StFilterHeader;
    filterable ? : boolean;
    templateRef ? : string;
}
```

*StDynamicTableHeader* (StFilterElement)

```typescript
export interface StFilterElement {
    id: String | number;
    name: String | number;
    selected ? : boolean;
}
```

*StFilterHeader* (StFilterHeader)

```typescript
export interface StFilterHeader {
    filterConfig ? : StFilterElement[];
    showSettingBtn ? : boolean;
    title: string;
    buttonText ? : string;
    templateRef ? : string;
}
```

*StTableFilterIconClasses* (StTableFilterIconClasses)

```typescript
export class StTableFilterIconClasses {
    selected: string;
    enabled: string;

    constructor() {
        this.selected = 'icon-facets-2';
        this.enabled = 'icon-arrow4_down';
    }
```

*StTableIconClasses* (StTableIconClasses)

```typescript
export class StTableIconClasses {
    filter: StTableFilterIconClasses;
    sort: {
        asc: string;
        desc: string;
    }
```

