# Dynamic Table (Component)

   The table component has been designed to be able to create a table deducing its columns using a json schema

## Inputs

| Property              | Type                              | Req   | Description                                                                                                                                                                   | Default         |
| --------------------- | --------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| items                 | Object(key: string, value: any)[] | False | Item list displayed as table rows                                                                                                                                             | ''              |
| uiDefinitions         | StDynamicTableUserInterface       | False | UI definition for each field                                                                                                                                                  | ''              |
| qaTag                 | String                            | False | Prefix used to generate the id values for qa tests                                                                                                                            | ''              |
| header                | Boolean                           | False | Boolean to show or hide the header                                                                                                                                            | true            |
| sortable              | Boolean                           | False | Boolean to make sortable the table, To enable sorting of columns use the new "sortable" field inside stTableHeader model                                                      | true            |
| filterable            | Boolean                           | False | Boolean to make filterable the table, To enable filtering of columns use the new "filterable" field inside stTableHeader model (necesary define filterConfig).                | false           |
| selectable            | Boolean                           | False | Boolean to show or hide a checkboxes in the first cell of rows                                                                                                                | false           |
| selectableAll         | Boolean                           | False | Boolean to show or hide a checkbox in the header to select or deselect all rows                                                                                               | false           |
| selected              | Boolean[]                         | False | Boolean list to indicate if a row is selected                                                                                                                                 | ''              |
| currentOrder          | Order                             | False | It specifies what is the current order applied to the table                                                                                                                   | ''              |
| customClasses         | String                            | False | Classes for adding styles to table tag from outside. These can be: separated-rows                                                                                             |                 |
| fixedHeader           | Boolean                           | False | Boolean to fix the table header                                                                                                                                               | false           |
| iconClasses           | StTableIconClasses                | False | List of icon classes                                                                                                                                                          | ''              |
| templateContentFilter | TemplateRef                       | False | Reference to paint a custom template inside popover content                                                                                                                   | undefined       |
| statusFilter          | Boolean[]                         | False | List of status filter by column, needed with templateContentFilter                                                                                                            |                 |
| activeHoverMenu       | Number                            | False | Position of the current active hover menu                                                                                                                                     |                 |
| hasHoverMenu          | Boolean                           | False | It specifies if a menu has to be displayed when user puts the mouse over the rows. Remember to add a cell with the selector st-table-row-hover for adding content to the menu |                 |
| hoverButton           | String                            | False | It specifies the icon class of the hover button displayed when user puts mouse over a row                                                                                     | 'icon-ellipsis' |
| selectedAll           | Boolean                           | False | It specifies if all rows are selected                                                                                                                                         |                 |
| jsonSchema            | JSONSchema4                       | False | Json schema to define its structure                                                                                                                                           |                 |

## Outputs

| Property      | Type                                  | Description                                                                         |
| ------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| changeOrder   | Order                                 | Event emitted with the new order which has to be applied to the table rows          |
| selectAll     | Boolean                               | Event emitted  when user interacts with the checkbox to select or deselect all rows |
| fields        | EventEmitter&lt;StTableHeader[]&gt;   | Event emitted when header fields are being loaded                                   |
| clickFilter   | String                                | Event emitted when using filters custom template                                    |
| selectFilters | StTableHeader[]                       | Event emitted  when user interacts with filter button without a custom template     |
| showHoverMenu | EventEmitter&lt;number                | Event emitted when user clicks on hover button of a row                             |
| selectRow     | Object(checked: boolean, row: number) | Event emitted when user clicks on checkbox of a row                                 |
| clickCell     | Object(checked: boolean, row: number) | Event emitted when user clicks on checkbox of a row                                 |

## Example


```html
<st-dynamic-table [jsonSchema]="jsonSchema"
      [items]="sortedUsers"
      [sortable]="true"
      [filterable]="true"
      [hasHoverMenu]="true"
      [currentOrder]="currentOrder"
      [activeHoverMenu]="activeHoverMenuPosition"
      [templateContentFilter]="filterContent"
      (changeOrder)="onSortTable($event)"
      (showHoverMenu)="onShowHoverMenu($event)">
    <st-dropdown-menu st-dynamic-table-hover-menu
          class="hover-menu"
          [items]="rowActions"
          [active]="activeHoverMenuPosition[3] !== undefined"
          [visualMode]="1">
    </st-dropdown-menu>
</st-dynamic-table>
```

## Models

*StDynamicTableHeader* (StDynamicTableHeader)

```typescript

```

*StDynamicTableUISpecification* (StDynamicTableUISpecification)

```typescript
export interface StDynamicTableUISpecification {
    sortable ? : boolean;
    styles ? : {
        [key: string]: string;
    }
```

*StDynamicTableUserInterface* (StDynamicTableUserInterface)

```typescript
export interface StDynamicTableUserInterface {
    [key: string]: StDynamicTableUISpecification;
}
```

